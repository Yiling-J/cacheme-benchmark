window.BENCHMARK_DATA = {
  "lastUpdate": 1678031059725,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark: test_read_only_batch": [
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
        "date": 1678031059120,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-small]",
            "value": 188.51786687506842,
            "unit": "iter/sec",
            "range": "stddev: 0.00011971631706455165",
            "extra": "mean: 5.304537000000664 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-medium]",
            "value": 187.37103017816537,
            "unit": "iter/sec",
            "range": "stddev: 0.00014281536894506313",
            "extra": "mean: 5.337004333322663 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-large]",
            "value": 189.21107119368094,
            "unit": "iter/sec",
            "range": "stddev: 0.00006694617991036924",
            "extra": "mean: 5.28510300000562 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-small]",
            "value": 118.34929247241728,
            "unit": "iter/sec",
            "range": "stddev: 0.006324188919716025",
            "extra": "mean: 8.449564666667206 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-medium]",
            "value": 79.49096740159848,
            "unit": "iter/sec",
            "range": "stddev: 0.013257605595926435",
            "extra": "mean: 12.580045666671444 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-large]",
            "value": 39.7516454994979,
            "unit": "iter/sec",
            "range": "stddev: 0.03493502469078914",
            "extra": "mean: 25.1561913333281 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-small]",
            "value": 87.10327687465586,
            "unit": "iter/sec",
            "range": "stddev: 0.01133791879663993",
            "extra": "mean: 11.480624333330525 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-medium]",
            "value": 61.14181358605122,
            "unit": "iter/sec",
            "range": "stddev: 0.019628161821619562",
            "extra": "mean: 16.355419333327365 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-large]",
            "value": 35.950907310433415,
            "unit": "iter/sec",
            "range": "stddev: 0.03950257119815607",
            "extra": "mean: 27.815709666659433 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-small]",
            "value": 111.31053836963154,
            "unit": "iter/sec",
            "range": "stddev: 0.007181231052389436",
            "extra": "mean: 8.98387533334244 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-medium]",
            "value": 20.541086311652894,
            "unit": "iter/sec",
            "range": "stddev: 0.07589703355325925",
            "extra": "mean: 48.68291699999835 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-large]",
            "value": 26.173274159163476,
            "unit": "iter/sec",
            "range": "stddev: 0.0575081110589669",
            "extra": "mean: 38.206912666671165 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-small]",
            "value": 63.03099542896168,
            "unit": "iter/sec",
            "range": "stddev: 0.0152713902671039",
            "extra": "mean: 15.865210333335728 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-medium]",
            "value": 74.48181511593558,
            "unit": "iter/sec",
            "range": "stddev: 0.01449411852264795",
            "extra": "mean: 13.42609599998923 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-large]",
            "value": 33.83196614222804,
            "unit": "iter/sec",
            "range": "stddev: 0.042360500768987126",
            "extra": "mean: 29.557844666669553 msec\nrounds: 3"
          }
        ]
      }
    ]
  }
}