window.BENCHMARK_DATA = {
  "lastUpdate": 1676512211469,
  "repoUrl": "https://github.com/Yiling-J/theine",
  "entries": {
    "Cacheme Benchmark: theine": [
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
          "id": "0ac263a764ca51ec30fcd67ab8eabb0665bd0343",
          "message": "isort and refactor benchmark",
          "timestamp": "2023-02-16T00:14:21+08:00",
          "tree_id": "b13bd363e9e89523fbc74045b5c8a506d0f55ee8",
          "url": "https://github.com/Yiling-J/theine/commit/0ac263a764ca51ec30fcd67ab8eabb0665bd0343"
        },
        "date": 1676512211145,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 34.685436871191875,
            "unit": "iter/sec",
            "range": "stddev: 0.002295546076830255",
            "extra": "mean: 28.83054360000159 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 152.44753681904234,
            "unit": "iter/sec",
            "range": "stddev: 0.00014363353520354077",
            "extra": "mean: 6.5596336999988125 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 58.35156309103911,
            "unit": "iter/sec",
            "range": "stddev: 0.0010182430783521117",
            "extra": "mean: 17.13750149999953 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 75.56173177002013,
            "unit": "iter/sec",
            "range": "stddev: 0.00048256549941606125",
            "extra": "mean: 13.23421229999866 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 62.14816216322919,
            "unit": "iter/sec",
            "range": "stddev: 0.00032840609799612304",
            "extra": "mean: 16.090580400005194 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 14.532140652648623,
            "unit": "iter/sec",
            "range": "stddev: 0.0005780635028486055",
            "extra": "mean: 68.81298659999828 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 38.44010470269656,
            "unit": "iter/sec",
            "range": "stddev: 0.0006289870617307434",
            "extra": "mean: 26.01449729999956 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.588072152427612,
            "unit": "iter/sec",
            "range": "stddev: 0.001879076651466136",
            "extra": "mean: 629.6943111000004 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 24.649343796384418,
            "unit": "iter/sec",
            "range": "stddev: 0.0004096128753824579",
            "extra": "mean: 40.5690313000008 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 53.01940360657114,
            "unit": "iter/sec",
            "range": "stddev: 0.0013673823320285161",
            "extra": "mean: 18.8610194000006 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.835397837789708,
            "unit": "iter/sec",
            "range": "stddev: 0.008269332944713747",
            "extra": "mean: 206.80821589999852 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}