window.BENCHMARK_DATA = {
  "lastUpdate": 1674699165248,
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
          "id": "4dd6fd46b4962a65a13a756fc4c5f99b1f283095",
          "message": "update readme",
          "timestamp": "2023-01-25T22:58:41+08:00",
          "tree_id": "346a90057ca69fd36d4590efb0afa7139ca39659",
          "url": "https://github.com/Yiling-J/cacheme/commit/4dd6fd46b4962a65a13a756fc4c5f99b1f283095"
        },
        "date": 1674658905012,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.8814235138288684,
            "unit": "iter/sec",
            "range": "stddev: 0.0747603078092358",
            "extra": "mean: 531.5124386666715 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.3103072075793287,
            "unit": "iter/sec",
            "range": "stddev: 0.05522505847932901",
            "extra": "mean: 432.8428689999934 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 2.0177736384601905,
            "unit": "iter/sec",
            "range": "stddev: 0.0601150024343087",
            "extra": "mean: 495.5957303333207 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.9063456318414322,
            "unit": "iter/sec",
            "range": "stddev: 0.062196811130670215",
            "extra": "mean: 1.1033318470000115 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.9517760887055735,
            "unit": "iter/sec",
            "range": "stddev: 0.12799307201989332",
            "extra": "mean: 1.0506672860000208 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.7633997961164347,
            "unit": "iter/sec",
            "range": "stddev: 0.06103078341769906",
            "extra": "mean: 1.3099296136666492 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9232191502422669,
            "unit": "iter/sec",
            "range": "stddev: 0.8295900212706173",
            "extra": "mean: 1.083166439666665 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.7723533077047547,
            "unit": "iter/sec",
            "range": "stddev: 0.8416641824178159",
            "extra": "mean: 1.2947442446666741 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5405833372084182,
            "unit": "iter/sec",
            "range": "stddev: 1.0280552966439835",
            "extra": "mean: 1.8498535399999885 sec\nrounds: 3"
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
          "id": "fbaf7e7dae5a0c1dd83d12b1065b5f76fe4215dd",
          "message": "increase local cache size",
          "timestamp": "2023-01-26T10:09:02+08:00",
          "tree_id": "395549b47e8bfa5e7de4dcc5f5b45cabf2898c51",
          "url": "https://github.com/Yiling-J/cacheme/commit/fbaf7e7dae5a0c1dd83d12b1065b5f76fe4215dd"
        },
        "date": 1674699164337,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.6426270839386932,
            "unit": "iter/sec",
            "range": "stddev: 0.06491067460333023",
            "extra": "mean: 608.7809033333352 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 1.3423252834478177,
            "unit": "iter/sec",
            "range": "stddev: 0.10081877478032583",
            "extra": "mean: 744.9759103333425 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.1545775574135169,
            "unit": "iter/sec",
            "range": "stddev: 0.04628170773204979",
            "extra": "mean: 866.1176493333187 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.5392222012329186,
            "unit": "iter/sec",
            "range": "stddev: 0.1877519614278974",
            "extra": "mean: 1.854523047666665 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.5159467868932417,
            "unit": "iter/sec",
            "range": "stddev: 0.013550713488214322",
            "extra": "mean: 1.9381843736666535 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.4590699037444096,
            "unit": "iter/sec",
            "range": "stddev: 0.0378158565864334",
            "extra": "mean: 2.178317489000013 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.5687846666943116,
            "unit": "iter/sec",
            "range": "stddev: 1.0131058214051518",
            "extra": "mean: 1.758134595666661 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.4307502802221197,
            "unit": "iter/sec",
            "range": "stddev: 0.8217366311887955",
            "extra": "mean: 2.321530700999991 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.3852003798887745,
            "unit": "iter/sec",
            "range": "stddev: 0.879573311689498",
            "extra": "mean: 2.596051437666669 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}