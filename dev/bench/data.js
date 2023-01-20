window.BENCHMARK_DATA = {
  "lastUpdate": 1674181258225,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "njjyl723@gmail.com",
            "name": "Yiling-J",
            "username": "Yiling-J"
          },
          "committer": {
            "email": "njjyl723@gmail.com",
            "name": "Yiling-J",
            "username": "Yiling-J"
          },
          "distinct": true,
          "id": "a06a0fd387c2bf2003c864da78bba99474fec0a5",
          "message": "update bench title",
          "timestamp": "2023-01-20T10:06:49+08:00",
          "tree_id": "f2a872a9424df5ceaf57048362aa269a83fc2253",
          "url": "https://github.com/Yiling-J/cacheme/commit/a06a0fd387c2bf2003c864da78bba99474fec0a5"
        },
        "date": 1674181250120,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 4.528325803187759,
            "unit": "iter/sec",
            "range": "stddev: 0.019440452984434687",
            "extra": "mean: 220.832167000007 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 4.332356234888605,
            "unit": "iter/sec",
            "range": "stddev: 0.010721933329831363",
            "extra": "mean: 230.82127733332905 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 4.481949289863411,
            "unit": "iter/sec",
            "range": "stddev: 0.019671417026062944",
            "extra": "mean: 223.1172053333239 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 4.272698230809063,
            "unit": "iter/sec",
            "range": "stddev: 0.014908719516672782",
            "extra": "mean: 234.04414399999496 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 4.326201530984692,
            "unit": "iter/sec",
            "range": "stddev: 0.0012686734357747274",
            "extra": "mean: 231.14965700000312 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 4.414526751924323,
            "unit": "iter/sec",
            "range": "stddev: 0.004696650683013037",
            "extra": "mean: 226.52484766664807 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.047818107793483,
            "unit": "iter/sec",
            "range": "stddev: 0.10042472585802624",
            "extra": "mean: 488.3246203333442 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.931916453871098,
            "unit": "iter/sec",
            "range": "stddev: 0.03377307505196914",
            "extra": "mean: 517.6207273333375 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.33404806766933,
            "unit": "iter/sec",
            "range": "stddev: 0.08822783052039931",
            "extra": "mean: 749.5981773333446 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.9718090875527556,
            "unit": "iter/sec",
            "range": "stddev: 0.2985441018309548",
            "extra": "mean: 1.0290086940000076 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.8689596633298196,
            "unit": "iter/sec",
            "range": "stddev: 0.21813523067760876",
            "extra": "mean: 1.1508014033333136 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.7302692637144916,
            "unit": "iter/sec",
            "range": "stddev: 0.08979333108614333",
            "extra": "mean: 1.3693579199999892 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9576401100006338,
            "unit": "iter/sec",
            "range": "stddev: 1.0099610670780153",
            "extra": "mean: 1.0442336213333192 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.7375549916023338,
            "unit": "iter/sec",
            "range": "stddev: 1.2693977447563278",
            "extra": "mean: 1.3558311059999824 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.6589448075885856,
            "unit": "iter/sec",
            "range": "stddev: 1.1305890164513122",
            "extra": "mean: 1.5175777826666679 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.3106292337985121,
            "unit": "iter/sec",
            "range": "stddev: 0.15661356311632055",
            "extra": "mean: 762.9922896666699 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.9478835599474249,
            "unit": "iter/sec",
            "range": "stddev: 0.2835315226031674",
            "extra": "mean: 1.0549819010000192 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.7005361856562062,
            "unit": "iter/sec",
            "range": "stddev: 0.9117360332597306",
            "extra": "mean: 1.427478009666667 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "njjyl723@gmail.com",
            "name": "Yiling-J",
            "username": "Yiling-J"
          },
          "committer": {
            "email": "njjyl723@gmail.com",
            "name": "Yiling-J",
            "username": "Yiling-J"
          },
          "distinct": true,
          "id": "a06a0fd387c2bf2003c864da78bba99474fec0a5",
          "message": "update bench title",
          "timestamp": "2023-01-20T10:06:49+08:00",
          "tree_id": "f2a872a9424df5ceaf57048362aa269a83fc2253",
          "url": "https://github.com/Yiling-J/cacheme/commit/a06a0fd387c2bf2003c864da78bba99474fec0a5"
        },
        "date": 1674181253730,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 4.130438134847765,
            "unit": "iter/sec",
            "range": "stddev: 0.021360961004252967",
            "extra": "mean: 242.10506666670048 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 4.064863669106479,
            "unit": "iter/sec",
            "range": "stddev: 0.002684295083677826",
            "extra": "mean: 246.0107106666669 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 4.136524770110979,
            "unit": "iter/sec",
            "range": "stddev: 0.01944826126207992",
            "extra": "mean: 241.74882433332337 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 3.902368373121615,
            "unit": "iter/sec",
            "range": "stddev: 0.009096657241527953",
            "extra": "mean: 256.2546393333112 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 3.873911970017309,
            "unit": "iter/sec",
            "range": "stddev: 0.0015885470818159057",
            "extra": "mean: 258.1369963333297 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 4.146828108527374,
            "unit": "iter/sec",
            "range": "stddev: 0.008899604465062534",
            "extra": "mean: 241.14816766666536 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 1.9718199559434249,
            "unit": "iter/sec",
            "range": "stddev: 0.07541549159148771",
            "extra": "mean: 507.1456940000113 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.630739358634747,
            "unit": "iter/sec",
            "range": "stddev: 0.070961988350624",
            "extra": "mean: 613.2187800000111 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.1868053300053938,
            "unit": "iter/sec",
            "range": "stddev: 0.12754290028152804",
            "extra": "mean: 842.5981706666713 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.898882277461264,
            "unit": "iter/sec",
            "range": "stddev: 0.4111335372737722",
            "extra": "mean: 1.1124927313333235 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.7988338210616868,
            "unit": "iter/sec",
            "range": "stddev: 0.23477289820089536",
            "extra": "mean: 1.2518248146666526 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.6229781612372405,
            "unit": "iter/sec",
            "range": "stddev: 0.14815420893439024",
            "extra": "mean: 1.6051927053333468 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.8494601136756994,
            "unit": "iter/sec",
            "range": "stddev: 1.1355624183290585",
            "extra": "mean: 1.1772183106666414 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.75378234109163,
            "unit": "iter/sec",
            "range": "stddev: 1.2369720092978416",
            "extra": "mean: 1.32664291200003 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.5865261051798509,
            "unit": "iter/sec",
            "range": "stddev: 1.2062986006481202",
            "extra": "mean: 1.7049539503333146 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 0.9973320194951184,
            "unit": "iter/sec",
            "range": "stddev: 0.24681918496616645",
            "extra": "mean: 1.0026751176666646 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.9612886364865739,
            "unit": "iter/sec",
            "range": "stddev: 0.4263459840780633",
            "extra": "mean: 1.040270281000005 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.6005894458690589,
            "unit": "iter/sec",
            "range": "stddev: 0.9433871422926977",
            "extra": "mean: 1.665030923999988 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "njjyl723@gmail.com",
            "name": "Yiling-J",
            "username": "Yiling-J"
          },
          "committer": {
            "email": "njjyl723@gmail.com",
            "name": "Yiling-J",
            "username": "Yiling-J"
          },
          "distinct": true,
          "id": "a06a0fd387c2bf2003c864da78bba99474fec0a5",
          "message": "update bench title",
          "timestamp": "2023-01-20T10:06:49+08:00",
          "tree_id": "f2a872a9424df5ceaf57048362aa269a83fc2253",
          "url": "https://github.com/Yiling-J/cacheme/commit/a06a0fd387c2bf2003c864da78bba99474fec0a5"
        },
        "date": 1674181257991,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 5.265603610569493,
            "unit": "iter/sec",
            "range": "stddev: 0.008991145826169012",
            "extra": "mean: 189.91175066667174 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 5.226291715495927,
            "unit": "iter/sec",
            "range": "stddev: 0.02291227973854289",
            "extra": "mean: 191.34025700000734 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 5.307138608614111,
            "unit": "iter/sec",
            "range": "stddev: 0.02741154128252917",
            "extra": "mean: 188.4254536666674 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.197200253671279,
            "unit": "iter/sec",
            "range": "stddev: 0.0009995475965947635",
            "extra": "mean: 192.41128899999657 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.431985716644459,
            "unit": "iter/sec",
            "range": "stddev: 0.014049437185933917",
            "extra": "mean: 184.09474033332648 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.488344385648815,
            "unit": "iter/sec",
            "range": "stddev: 0.02081722820082967",
            "extra": "mean: 182.20430966665427 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 1.763229983141904,
            "unit": "iter/sec",
            "range": "stddev: 0.14576985493542946",
            "extra": "mean: 567.1409909999928 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.8823142909897495,
            "unit": "iter/sec",
            "range": "stddev: 0.09255588806421292",
            "extra": "mean: 531.2609083333181 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.281566482976455,
            "unit": "iter/sec",
            "range": "stddev: 0.11038627467957801",
            "extra": "mean: 780.295063333341 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.9287786457435329,
            "unit": "iter/sec",
            "range": "stddev: 0.28513198227322006",
            "extra": "mean: 1.076682807666676 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.7708494992196591,
            "unit": "iter/sec",
            "range": "stddev: 0.3315534476201118",
            "extra": "mean: 1.297270091000011 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.6383947935738167,
            "unit": "iter/sec",
            "range": "stddev: 0.04777309356521399",
            "extra": "mean: 1.5664288149999948 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.8064079396267856,
            "unit": "iter/sec",
            "range": "stddev: 1.100210109255394",
            "extra": "mean: 1.2400671556666605 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.733078883347146,
            "unit": "iter/sec",
            "range": "stddev: 1.1193334612148582",
            "extra": "mean: 1.3641096786666747 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.5576930290360669,
            "unit": "iter/sec",
            "range": "stddev: 1.2475348005426232",
            "extra": "mean: 1.7931011289999976 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.2408342217978532,
            "unit": "iter/sec",
            "range": "stddev: 0.29152332531343705",
            "extra": "mean: 805.9094296666748 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 1.0916276522309596,
            "unit": "iter/sec",
            "range": "stddev: 0.4672181543141265",
            "extra": "mean: 916.0632730000012 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.5834389367694955,
            "unit": "iter/sec",
            "range": "stddev: 1.1532093721498042",
            "extra": "mean: 1.7139754256666606 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}