window.BENCHMARK_DATA = {
  "lastUpdate": 1674724384310,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark: test_read_write_with_local_async": [
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
        "date": 1674701744267,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.731548360323717,
            "unit": "iter/sec",
            "range": "stddev: 0.012303693154503739",
            "extra": "mean: 366.09273133333414 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.5489398576790934,
            "unit": "iter/sec",
            "range": "stddev: 0.04065138389255117",
            "extra": "mean: 392.31996666666663 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 2.1222008269244537,
            "unit": "iter/sec",
            "range": "stddev: 0.043146113264560776",
            "extra": "mean: 471.20893900000266 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.9218253823118902,
            "unit": "iter/sec",
            "range": "stddev: 0.04835191121481138",
            "extra": "mean: 1.0848041496666667 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.9342672958919943,
            "unit": "iter/sec",
            "range": "stddev: 0.0771341610194277",
            "extra": "mean: 1.0703574923333339 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.7959066423751423,
            "unit": "iter/sec",
            "range": "stddev: 0.0929451748405134",
            "extra": "mean: 1.2564287653333348 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9419358067827602,
            "unit": "iter/sec",
            "range": "stddev: 0.7192432406192975",
            "extra": "mean: 1.061643471666675 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8215986434823707,
            "unit": "iter/sec",
            "range": "stddev: 0.8060469633599359",
            "extra": "mean: 1.2171393026666522 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.6205500378761697,
            "unit": "iter/sec",
            "range": "stddev: 0.8000949186702762",
            "extra": "mean: 1.6114735943333376 sec\nrounds: 3"
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
          "id": "2ca31df60d6131fe0d40e8cb9a29a416f881df29",
          "message": "update test mysql docker",
          "timestamp": "2023-01-26T11:04:41+08:00",
          "tree_id": "c45e29d4f4d040708ddefe658f5e004fac49428a",
          "url": "https://github.com/Yiling-J/cacheme/commit/2ca31df60d6131fe0d40e8cb9a29a416f881df29"
        },
        "date": 1674702431121,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.9109812417368746,
            "unit": "iter/sec",
            "range": "stddev: 0.03565526467551135",
            "extra": "mean: 343.52677566666046 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.7267322517576873,
            "unit": "iter/sec",
            "range": "stddev: 0.029601402182925052",
            "extra": "mean: 366.7393450000039 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.7235577082091889,
            "unit": "iter/sec",
            "range": "stddev: 0.0958056056157922",
            "extra": "mean: 580.1952526666602 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.9641837209000442,
            "unit": "iter/sec",
            "range": "stddev: 0.062177721463863564",
            "extra": "mean: 1.0371467370000005 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.8666440982528791,
            "unit": "iter/sec",
            "range": "stddev: 0.060403728739459955",
            "extra": "mean: 1.1538762013333514 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.8171213629054788,
            "unit": "iter/sec",
            "range": "stddev: 0.04000653625566476",
            "extra": "mean: 1.2238084150000077 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9778250883163698,
            "unit": "iter/sec",
            "range": "stddev: 0.8412831265922109",
            "extra": "mean: 1.0226777896666686 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8684199255596382,
            "unit": "iter/sec",
            "range": "stddev: 0.7922765266027562",
            "extra": "mean: 1.151516645999995 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5608318998737956,
            "unit": "iter/sec",
            "range": "stddev: 0.5862932018866839",
            "extra": "mean: 1.783065478666657 sec\nrounds: 3"
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
          "id": "33419956e487daef0e9eae98bbc5e580b2249f2d",
          "message": "add release workflow",
          "timestamp": "2023-01-26T11:22:36+08:00",
          "tree_id": "f95f4b9fb48776b31e3d61fc1730fb5041fd9dba",
          "url": "https://github.com/Yiling-J/cacheme/commit/33419956e487daef0e9eae98bbc5e580b2249f2d"
        },
        "date": 1674703504476,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.6680223730253063,
            "unit": "iter/sec",
            "range": "stddev: 0.04453091955059865",
            "extra": "mean: 374.8094506666699 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.62430492200585,
            "unit": "iter/sec",
            "range": "stddev: 0.03035182241750507",
            "extra": "mean: 381.0532806666629 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.977846541729648,
            "unit": "iter/sec",
            "range": "stddev: 0.060317327676138184",
            "extra": "mean: 505.6003986666676 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.947708398571736,
            "unit": "iter/sec",
            "range": "stddev: 0.0739027357308486",
            "extra": "mean: 1.0551768893333342 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.9179098981112688,
            "unit": "iter/sec",
            "range": "stddev: 0.02618868945153027",
            "extra": "mean: 1.0894315466666644 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.8477644352230863,
            "unit": "iter/sec",
            "range": "stddev: 0.06509435631249319",
            "extra": "mean: 1.1795729549999976 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9002518960620732,
            "unit": "iter/sec",
            "range": "stddev: 0.8752332258223247",
            "extra": "mean: 1.1108002153333416 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8131305619821028,
            "unit": "iter/sec",
            "range": "stddev: 0.8472426350386201",
            "extra": "mean: 1.2298148006666736 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.6162875076821875,
            "unit": "iter/sec",
            "range": "stddev: 0.7681257289659783",
            "extra": "mean: 1.622619292999995 sec\nrounds: 3"
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
          "id": "b1d59bbf0eb42da70ba3490f3bf208df5dc03077",
          "message": "Update README.md",
          "timestamp": "2023-01-26T17:10:53+08:00",
          "tree_id": "e9976a23cb543a798e668c7886e59178d34f6a54",
          "url": "https://github.com/Yiling-J/cacheme/commit/b1d59bbf0eb42da70ba3490f3bf208df5dc03077"
        },
        "date": 1674724383780,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.7208100243238693,
            "unit": "iter/sec",
            "range": "stddev: 0.05691798109299407",
            "extra": "mean: 367.53760500000493 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.5550679312503943,
            "unit": "iter/sec",
            "range": "stddev: 0.06781080722907273",
            "extra": "mean: 391.37902666666946 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.7406324280183532,
            "unit": "iter/sec",
            "range": "stddev: 0.12921648568068148",
            "extra": "mean: 574.5038319999954 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.9091121558684544,
            "unit": "iter/sec",
            "range": "stddev: 0.013813819093425047",
            "extra": "mean: 1.0999742920000035 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.8899230514595721,
            "unit": "iter/sec",
            "range": "stddev: 0.03362140623925418",
            "extra": "mean: 1.1236926589999996 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.831710214116612,
            "unit": "iter/sec",
            "range": "stddev: 0.10700976209222018",
            "extra": "mean: 1.2023418530000072 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9706513476728179,
            "unit": "iter/sec",
            "range": "stddev: 0.829613709423219",
            "extra": "mean: 1.030236039333327 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8789629506639074,
            "unit": "iter/sec",
            "range": "stddev: 0.7851006310040056",
            "extra": "mean: 1.1377043813333312 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.561602561528586,
            "unit": "iter/sec",
            "range": "stddev: 0.6132143000750699",
            "extra": "mean: 1.7806186590000077 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}