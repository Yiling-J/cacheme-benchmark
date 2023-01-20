window.BENCHMARK_DATA = {
  "lastUpdate": 1674181521595,
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
          "id": "a40faaac6a9955291a8f20949a662e319b591561",
          "message": "update workflow",
          "timestamp": "2023-01-20T10:22:38+08:00",
          "tree_id": "0ed6afa154dab3f43a3a2875a5338db0ee4d3e3c",
          "url": "https://github.com/Yiling-J/cacheme/commit/a40faaac6a9955291a8f20949a662e319b591561"
        },
        "date": 1674181521332,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 6.2385900736526905,
            "unit": "iter/sec",
            "range": "stddev: 0.010296970371894391",
            "extra": "mean: 160.292628333328 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.516099418058066,
            "unit": "iter/sec",
            "range": "stddev: 0.018593725751578884",
            "extra": "mean: 153.46604399998873 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.468321244698137,
            "unit": "iter/sec",
            "range": "stddev: 0.019943004396979682",
            "extra": "mean: 154.59961900000962 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 6.031960851255098,
            "unit": "iter/sec",
            "range": "stddev: 0.0038500060168246975",
            "extra": "mean: 165.78356933333302 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 6.517447093988553,
            "unit": "iter/sec",
            "range": "stddev: 0.009298340651112994",
            "extra": "mean: 153.43431033331476 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 6.464305755249046,
            "unit": "iter/sec",
            "range": "stddev: 0.01743913899276636",
            "extra": "mean: 154.695653000014 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.836114864331169,
            "unit": "iter/sec",
            "range": "stddev: 0.07798853401797717",
            "extra": "mean: 352.59502799997716 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.4781698902379246,
            "unit": "iter/sec",
            "range": "stddev: 0.02404027273480796",
            "extra": "mean: 403.5235856666759 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.4247373890206942,
            "unit": "iter/sec",
            "range": "stddev: 0.09518310910536405",
            "extra": "mean: 701.883735000005 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 1.0935406443774784,
            "unit": "iter/sec",
            "range": "stddev: 0.3306415532342814",
            "extra": "mean: 914.460752000006 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.9963321049813975,
            "unit": "iter/sec",
            "range": "stddev: 0.3168916232539944",
            "extra": "mean: 1.0036813979999881 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.7684899075206711,
            "unit": "iter/sec",
            "range": "stddev: 0.18715585056033743",
            "extra": "mean: 1.301253263333327 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9603760562194174,
            "unit": "iter/sec",
            "range": "stddev: 0.8409255455989516",
            "extra": "mean: 1.0412587793333425 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.9284400777545994,
            "unit": "iter/sec",
            "range": "stddev: 1.0103620965791684",
            "extra": "mean: 1.0770754343333238 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.7186327609862855,
            "unit": "iter/sec",
            "range": "stddev: 1.0564679056795285",
            "extra": "mean: 1.3915313276666552 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.6656488108870093,
            "unit": "iter/sec",
            "range": "stddev: 0.284618559439334",
            "extra": "mean: 600.3666519999911 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 1.0384985641706743,
            "unit": "iter/sec",
            "range": "stddev: 0.3862908840613145",
            "extra": "mean: 962.9286303333325 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.7419822395307457,
            "unit": "iter/sec",
            "range": "stddev: 0.8742763225311577",
            "extra": "mean: 1.3477411543333346 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}