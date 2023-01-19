import uuid
import motor.motor_asyncio as mongo
from urllib.parse import urlparse
from cacheme.storages import Storage
from cacheme.data import init_storages
from benchmarks.zipf import Zipf
from cacheme import core
from cacheme.storages.mongo import MongoStorage
from cacheme.storages.sqldb import SQLStorage
from cacheme.models import Node
from dataclasses import dataclass
from typing import Dict


async def setup_storage(storage):
    if isinstance(storage, SQLStorage):
        url = urlparse(storage.address)
        with open(f"benchmarks/scripts/{url.scheme}.sql", "r") as f:
            sql = f.read()
        ddls = sql.split(";")
        for ddl in ddls:
            if ddl.strip() == "":
                continue
            ddl = ddl.replace("cacheme_data", storage.table)
            await storage.execute_ddl(ddl)

    if isinstance(storage, MongoStorage):
        client = mongo.AsyncIOMotorClient(storage.address)
        table = client[storage.database][storage.collection]
        await table.create_index("key", unique=True)
        await table.create_index("expire")


@dataclass
class FooNode(Node):
    uid: int

    def key(self) -> str:
        return f"uid:{self.uid}"

    async def load(self) -> Dict:
        return {"uid": self.uid}

    class Meta(Node.Meta):
        version = "v1"
        storage = "local"


class Suite:
    async def setup(self):
        self.z = Zipf(1.0001, 10, 1000)
        self.uuid = uuid.uuid4()
        table = f"test_{self.uuid.int}"
        storages = {
            "local": Storage(url="local://tlfu", size=1000),
            "sqlite": Storage(
                f"sqlite:///{table}",
                table="test",
                pool_size=10,
            ),
            "mysql": Storage(
                "mysql://username:password@localhost:3306/test", table=table
            ),
            "postgres": Storage(
                "postgresql://username:password@127.0.0.1:5432/test", table=table
            ),
            "redis": Storage("redis://localhost:6379"),
            "mongo": Storage(
                "mongodb://test:password@localhost:27017",
                database="test",
                collection=table,
            ),
        }
        await init_storages(storages)
        for storage in storages.values():
            await setup_storage(storage)

    async def time_simple(self):
        await core.get(FooNode(1))
        await core.get(FooNode(2))
        await core.get(FooNode(3))
