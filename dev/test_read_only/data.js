window.BENCHMARK_DATA = {
  "lastUpdate": 1678030616761,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark: test_read_only": [
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
        "date": 1678030616399,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-small]",
            "value": 372.6392835580741,
            "unit": "iter/sec",
            "range": "stddev: 0.00000855387632932206",
            "extra": "mean: 2.683560333338164 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-medium]",
            "value": 376.4785725351437,
            "unit": "iter/sec",
            "range": "stddev: 0.000011747527403349286",
            "extra": "mean: 2.6561936666572215 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-large]",
            "value": 378.7171562292031,
            "unit": "iter/sec",
            "range": "stddev: 0.000013141156731986568",
            "extra": "mean: 2.640492999991769 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-small]",
            "value": 3.9508276097539716,
            "unit": "iter/sec",
            "range": "stddev: 0.0026501616045711226",
            "extra": "mean: 253.11152466666914 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-medium]",
            "value": 3.1995070370197127,
            "unit": "iter/sec",
            "range": "stddev: 0.015234255450687864",
            "extra": "mean: 312.54814833333927 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-large]",
            "value": 1.9981027588043014,
            "unit": "iter/sec",
            "range": "stddev: 0.009099925018486148",
            "extra": "mean: 500.47476066667207 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-small]",
            "value": 1.517750076520668,
            "unit": "iter/sec",
            "range": "stddev: 0.035192815947212484",
            "extra": "mean: 658.8700046666626 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-medium]",
            "value": 1.4708136057557797,
            "unit": "iter/sec",
            "range": "stddev: 0.014015464029468103",
            "extra": "mean: 679.8958046666618 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-large]",
            "value": 1.1475521884817061,
            "unit": "iter/sec",
            "range": "stddev: 0.007144068954356654",
            "extra": "mean: 871.4200626666676 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-small]",
            "value": 2.1747313507605717,
            "unit": "iter/sec",
            "range": "stddev: 0.022507191319094438",
            "extra": "mean: 459.8269113333326 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-medium]",
            "value": 1.8315120859568745,
            "unit": "iter/sec",
            "range": "stddev: 0.02446123460659611",
            "extra": "mean: 545.9969429999963 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-large]",
            "value": 1.144467921508386,
            "unit": "iter/sec",
            "range": "stddev: 0.0050330490628588504",
            "extra": "mean: 873.7684833333029 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-small]",
            "value": 2.2882990751239123,
            "unit": "iter/sec",
            "range": "stddev: 0.023316499621176805",
            "extra": "mean: 437.0058140000121 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-medium]",
            "value": 2.121634029998302,
            "unit": "iter/sec",
            "range": "stddev: 0.0037016270317142166",
            "extra": "mean: 471.3348229999876 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-large]",
            "value": 1.314384844214222,
            "unit": "iter/sec",
            "range": "stddev: 0.03436330364814552",
            "extra": "mean: 760.8121810000247 msec\nrounds: 3"
          }
        ]
      }
    ]
  }
}