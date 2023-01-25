window.BENCHMARK_DATA = {
  "lastUpdate": 1674657168798,
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
        "date": 1674657168525,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.572714141984049,
            "unit": "iter/sec",
            "range": "stddev: 0.06608892070927538",
            "extra": "mean: 388.6945633333407 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.541091979339746,
            "unit": "iter/sec",
            "range": "stddev: 0.030922626513393756",
            "extra": "mean: 393.53160299999485 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.9891600629541744,
            "unit": "iter/sec",
            "range": "stddev: 0.025719333330938256",
            "extra": "mean: 502.7247523333358 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 1.0800729009461238,
            "unit": "iter/sec",
            "range": "stddev: 0.11013688039350139",
            "extra": "mean: 925.863429333352 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.8936216380301819,
            "unit": "iter/sec",
            "range": "stddev: 0.06916143891053923",
            "extra": "mean: 1.119041837666676 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.8171769872713142,
            "unit": "iter/sec",
            "range": "stddev: 0.1580634791277893",
            "extra": "mean: 1.2237251116666432 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.8923330920978222,
            "unit": "iter/sec",
            "range": "stddev: 0.7712860325571531",
            "extra": "mean: 1.1206577553333357 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.7975672811222284,
            "unit": "iter/sec",
            "range": "stddev: 0.7914109533014148",
            "extra": "mean: 1.2538127173333085 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5981023894243749,
            "unit": "iter/sec",
            "range": "stddev: 0.862868438917248",
            "extra": "mean: 1.671954530999983 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}