window.BENCHMARK_DATA = {
  "lastUpdate": 1674702431396,
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
      }
    ]
  }
}