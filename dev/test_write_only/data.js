window.BENCHMARK_DATA = {
  "lastUpdate": 1678030790144,
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
      }
    ]
  }
}