window.BENCHMARK_DATA = {
  "lastUpdate": 1674701746994,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark: test_read_only_with_local_async": [
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
          "id": "bda7b5379c7d07656765cfc25d57fa9ca19c1805",
          "message": "fix ci",
          "timestamp": "2023-01-26T10:53:24+08:00",
          "tree_id": "37bee60f29ec77d70077c377d2303b0c8c137f32",
          "url": "https://github.com/Yiling-J/cacheme/commit/bda7b5379c7d07656765cfc25d57fa9ca19c1805"
        },
        "date": 1674701746733,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 5.0571663005763865,
            "unit": "iter/sec",
            "range": "stddev: 0.011201613074762062",
            "extra": "mean: 197.73919633333512 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 4.140204052192677,
            "unit": "iter/sec",
            "range": "stddev: 0.0014885476123292797",
            "extra": "mean: 241.53398899998516 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 3.0170231124264997,
            "unit": "iter/sec",
            "range": "stddev: 0.0260911405456012",
            "extra": "mean: 331.4525486666658 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.9797331216929144,
            "unit": "iter/sec",
            "range": "stddev: 0.009724283052397493",
            "extra": "mean: 335.6005249999896 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.7601963213922702,
            "unit": "iter/sec",
            "range": "stddev: 0.00583844877476276",
            "extra": "mean: 362.2930703333414 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 2.1808202162824735,
            "unit": "iter/sec",
            "range": "stddev: 0.012246744909229165",
            "extra": "mean: 458.54307133333805 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 4.398984439894642,
            "unit": "iter/sec",
            "range": "stddev: 0.006485245502070164",
            "extra": "mean: 227.3251960000001 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 3.8441378570521314,
            "unit": "iter/sec",
            "range": "stddev: 0.0009355736854150735",
            "extra": "mean: 260.1363523333286 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.4789489657644563,
            "unit": "iter/sec",
            "range": "stddev: 0.03169537866436809",
            "extra": "mean: 403.39676766666344 msec\nrounds: 3"
          }
        ]
      }
    ]
  }
}