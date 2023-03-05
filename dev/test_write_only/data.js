window.BENCHMARK_DATA = {
  "lastUpdate": 1678031733044,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark: test_write_only": [
      {
        "commit": {
          "author": {
            "email": "njjyl723@gmail.com",
            "name": "Yiling-J",
            "username": "Yiling-J"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "45349048b0682e7dc7c2275d0c3e5ec5baf5f9f7",
          "message": "Refactor (#18)\n\n* core refactor and update benchmark\r\n\r\n* update benchmark ci\r\n\r\n* fix bench\r\n\r\n* update params\r\n\r\n* update bench\r\n\r\n* update bench\r\n\r\n* fix bench\r\n\r\n* remove too slow bench\r\n\r\n* add with theine bench\r\n\r\n* update\r\n\r\n* optimize bench\r\n\r\n* update\r\n\r\n* update bench\r\n\r\n* simplify benchmark\r\n\r\n* update bench\r\n\r\n* update\r\n\r\n* update readme\r\n\r\n* add trace script\r\n\r\n* update trace script\r\n\r\n* update readme\r\n\r\n* update readme\r\n\r\n* fix python 3.7 test\r\n\r\n* reduce benchmark requests count",
          "timestamp": "2023-03-05T23:34:28+08:00",
          "tree_id": "60e6ca61c4238d70710fcfa1cdd64d59addb93ab",
          "url": "https://github.com/Yiling-J/cacheme/commit/45349048b0682e7dc7c2275d0c3e5ec5baf5f9f7"
        },
        "date": 1678030789453,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-small]",
            "value": 144.27051992070915,
            "unit": "iter/sec",
            "range": "stddev: 0.0052913749349071445",
            "extra": "mean: 6.931422999997494 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-medium]",
            "value": 203.23293468299624,
            "unit": "iter/sec",
            "range": "stddev: 0.003158949663871446",
            "extra": "mean: 4.920462333330988 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-large]",
            "value": 208.60034177114602,
            "unit": "iter/sec",
            "range": "stddev: 0.0030639694282057067",
            "extra": "mean: 4.793855999992047 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-small]",
            "value": 2.2103142866218874,
            "unit": "iter/sec",
            "range": "stddev: 0.13213884806988951",
            "extra": "mean: 452.42434800000336 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-medium]",
            "value": 1.8785014127492352,
            "unit": "iter/sec",
            "range": "stddev: 0.16821030960044647",
            "extra": "mean: 532.339232333328 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-large]",
            "value": 1.26769472970958,
            "unit": "iter/sec",
            "range": "stddev: 0.03731736322576513",
            "extra": "mean: 788.8334443333159 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-small]",
            "value": 0.8392857375559101,
            "unit": "iter/sec",
            "range": "stddev: 0.591103135445449",
            "extra": "mean: 1.1914893286666672 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-medium]",
            "value": 0.7514424313190413,
            "unit": "iter/sec",
            "range": "stddev: 0.5564400214382051",
            "extra": "mean: 1.3307739333333284 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-large]",
            "value": 0.6150441894981121,
            "unit": "iter/sec",
            "range": "stddev: 0.5239661414575699",
            "extra": "mean: 1.6258994346666686 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-small]",
            "value": 1.0980698905629167,
            "unit": "iter/sec",
            "range": "stddev: 0.5384809907029361",
            "extra": "mean: 910.6888446666707 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-medium]",
            "value": 0.8019352033014313,
            "unit": "iter/sec",
            "range": "stddev: 0.734456174305802",
            "extra": "mean: 1.2469835416666701 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-large]",
            "value": 0.5424817080167945,
            "unit": "iter/sec",
            "range": "stddev: 1.184183230498821",
            "extra": "mean: 1.8433801273333283 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-small]",
            "value": 0.6849062327147312,
            "unit": "iter/sec",
            "range": "stddev: 1.5126803975431755",
            "extra": "mean: 1.4600538763333286 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-medium]",
            "value": 0.4931583247240873,
            "unit": "iter/sec",
            "range": "stddev: 2.323267375333104",
            "extra": "mean: 2.0277463643333626 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-large]",
            "value": 0.31372349145346085,
            "unit": "iter/sec",
            "range": "stddev: 3.7574382262504793",
            "extra": "mean: 3.1875203076666785 sec\nrounds: 3"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b68b544a8c74554c6450994d77583d5e1ed6362",
          "message": "Update README.md",
          "timestamp": "2023-03-05T23:50:48+08:00",
          "tree_id": "b1ac9eb7c2a84fe78e6f9d1e9cb5e507a2d8b7c8",
          "url": "https://github.com/Yiling-J/cacheme/commit/7b68b544a8c74554c6450994d77583d5e1ed6362"
        },
        "date": 1678031732253,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-small]",
            "value": 238.25362002586144,
            "unit": "iter/sec",
            "range": "stddev: 0.0026635924566067613",
            "extra": "mean: 4.1972079999936796 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-medium]",
            "value": 245.38219339962862,
            "unit": "iter/sec",
            "range": "stddev: 0.0025068058202817388",
            "extra": "mean: 4.075275333330334 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-large]",
            "value": 243.5178392244698,
            "unit": "iter/sec",
            "range": "stddev: 0.002583732700883511",
            "extra": "mean: 4.106475333325458 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-small]",
            "value": 3.140587313884601,
            "unit": "iter/sec",
            "range": "stddev: 0.10262286743786093",
            "extra": "mean: 318.4117809999994 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-medium]",
            "value": 2.78702605925103,
            "unit": "iter/sec",
            "range": "stddev: 0.09748653120264968",
            "extra": "mean: 358.8054000000038 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-large]",
            "value": 1.8304790485397373,
            "unit": "iter/sec",
            "range": "stddev: 0.043198255881004",
            "extra": "mean: 546.3050783333188 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-small]",
            "value": 1.1772541903227727,
            "unit": "iter/sec",
            "range": "stddev: 0.39506992181000666",
            "extra": "mean: 849.4342243333411 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-medium]",
            "value": 1.086422475813156,
            "unit": "iter/sec",
            "range": "stddev: 0.3764229874256751",
            "extra": "mean: 920.4522386666648 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-large]",
            "value": 0.849145268318185,
            "unit": "iter/sec",
            "range": "stddev: 0.37098714458612325",
            "extra": "mean: 1.177654798666661 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-small]",
            "value": 1.3436264157895612,
            "unit": "iter/sec",
            "range": "stddev: 0.537957636656658",
            "extra": "mean: 744.2544953333368 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-medium]",
            "value": 1.2562528672637077,
            "unit": "iter/sec",
            "range": "stddev: 0.46849305420591353",
            "extra": "mean: 796.0180836666572 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-large]",
            "value": 0.7966480464109444,
            "unit": "iter/sec",
            "range": "stddev: 0.7439827847836826",
            "extra": "mean: 1.255259464333335 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-small]",
            "value": 1.0599755792084973,
            "unit": "iter/sec",
            "range": "stddev: 0.9015682147671406",
            "extra": "mean: 943.4179613333337 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-medium]",
            "value": 0.8155150460966873,
            "unit": "iter/sec",
            "range": "stddev: 1.28205794534545",
            "extra": "mean: 1.2262189456666874 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-large]",
            "value": 0.5066535355130666,
            "unit": "iter/sec",
            "range": "stddev: 2.11297633178632",
            "extra": "mean: 1.9737353633333328 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}