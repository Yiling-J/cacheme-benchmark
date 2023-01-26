window.BENCHMARK_DATA = {
  "lastUpdate": 1674701837796,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark: test_read_write_async": [
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
        "date": 1674701837258,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 4.770884938040964,
            "unit": "iter/sec",
            "range": "stddev: 0.030296282808699945",
            "extra": "mean: 209.60471966666697 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 4.605180322214143,
            "unit": "iter/sec",
            "range": "stddev: 0.014118453491646235",
            "extra": "mean: 217.14676299997868 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 4.256639848430625,
            "unit": "iter/sec",
            "range": "stddev: 0.015859856147941935",
            "extra": "mean: 234.92708700001685 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 4.241354168474449,
            "unit": "iter/sec",
            "range": "stddev: 0.028443426875212226",
            "extra": "mean: 235.77375533335498 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 4.307408542686257,
            "unit": "iter/sec",
            "range": "stddev: 0.04297498809565349",
            "extra": "mean: 232.15815033332396 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 4.2963793723611845,
            "unit": "iter/sec",
            "range": "stddev: 0.03185625051367399",
            "extra": "mean: 232.7541199999814 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-small]",
            "value": 1.160881951272618,
            "unit": "iter/sec",
            "range": "stddev: 0.0897177116569679",
            "extra": "mean: 861.4140299999917 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-medium]",
            "value": 1.0584869516063624,
            "unit": "iter/sec",
            "range": "stddev: 0.1370205252151991",
            "extra": "mean: 944.7447590000024 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-large]",
            "value": 0.8255810620316945,
            "unit": "iter/sec",
            "range": "stddev: 0.03795558988323962",
            "extra": "mean: 1.21126809466665 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 1.914515920913003,
            "unit": "iter/sec",
            "range": "stddev: 0.04487607068522539",
            "extra": "mean: 522.3252463333475 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.6364804644064785,
            "unit": "iter/sec",
            "range": "stddev: 0.06143379817424561",
            "extra": "mean: 611.0674839999888 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.0474397614783293,
            "unit": "iter/sec",
            "range": "stddev: 0.22896886931628055",
            "extra": "mean: 954.7088403333343 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.5703423081149241,
            "unit": "iter/sec",
            "range": "stddev: 0.11188801577728984",
            "extra": "mean: 1.7533330173333372 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.5183734216891998,
            "unit": "iter/sec",
            "range": "stddev: 0.1486512648367134",
            "extra": "mean: 1.9291112509999948 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.49767839820547205,
            "unit": "iter/sec",
            "range": "stddev: 0.039529535013907324",
            "extra": "mean: 2.009329727000003 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.597281459341961,
            "unit": "iter/sec",
            "range": "stddev: 0.7729966069268788",
            "extra": "mean: 1.674252539333338 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.5666972474131976,
            "unit": "iter/sec",
            "range": "stddev: 0.9797941650282092",
            "extra": "mean: 1.7646106533333257 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.3691304625593542,
            "unit": "iter/sec",
            "range": "stddev: 0.715070874849521",
            "extra": "mean: 2.7090692896666724 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 0.7254538749452341,
            "unit": "iter/sec",
            "range": "stddev: 0.17527601876876842",
            "extra": "mean: 1.3784473893333218 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.48739667422020316,
            "unit": "iter/sec",
            "range": "stddev: 0.2857924435612744",
            "extra": "mean: 2.0517169133333177 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.2686137453709942,
            "unit": "iter/sec",
            "range": "stddev: 0.18658965076307502",
            "extra": "mean: 3.722817678666653 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}