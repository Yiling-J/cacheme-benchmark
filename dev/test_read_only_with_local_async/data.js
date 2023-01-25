window.BENCHMARK_DATA = {
  "lastUpdate": 1674657135061,
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
          "id": "c5427aac52e33e92ce0d3ba26689a5dbc44cc410",
          "message": "Merge branch 'master' of github.com:Yiling-J/cacheme",
          "timestamp": "2023-01-25T22:29:22+08:00",
          "tree_id": "35c75fc9b853e779e8962005ca5d3ed12c3e21ea",
          "url": "https://github.com/Yiling-J/cacheme/commit/c5427aac52e33e92ce0d3ba26689a5dbc44cc410"
        },
        "date": 1674657134493,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 3.2850480545042777,
            "unit": "iter/sec",
            "range": "stddev: 0.010403723771674842",
            "extra": "mean: 304.4095499999931 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 2.9174022365600716,
            "unit": "iter/sec",
            "range": "stddev: 0.012285658100065228",
            "extra": "mean: 342.7706976666703 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 1.9985017259207367,
            "unit": "iter/sec",
            "range": "stddev: 0.028659809105089782",
            "extra": "mean: 500.37484933333565 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 1.9106991859362523,
            "unit": "iter/sec",
            "range": "stddev: 0.021904224492687616",
            "extra": "mean: 523.3686220000114 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.5240934940705695,
            "unit": "iter/sec",
            "range": "stddev: 0.040881151615063664",
            "extra": "mean: 656.1277269999929 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.3181959010078754,
            "unit": "iter/sec",
            "range": "stddev: 0.012955686705519423",
            "extra": "mean: 758.6125850000087 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 2.561213709865159,
            "unit": "iter/sec",
            "range": "stddev: 0.009358449584053324",
            "extra": "mean: 390.43989033334014 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.4690936449813954,
            "unit": "iter/sec",
            "range": "stddev: 0.016189939482943838",
            "extra": "mean: 405.0069149999918 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.7559961291570523,
            "unit": "iter/sec",
            "range": "stddev: 0.05311198333310718",
            "extra": "mean: 569.4773373333343 msec\nrounds: 3"
          }
        ]
      }
    ]
  }
}