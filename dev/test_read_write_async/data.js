window.BENCHMARK_DATA = {
  "lastUpdate": 1674657144334,
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
        "date": 1674657143829,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 6.25379965232371,
            "unit": "iter/sec",
            "range": "stddev: 0.017853376165044836",
            "extra": "mean: 159.90278800000132 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.24450664245967,
            "unit": "iter/sec",
            "range": "stddev: 0.009952628865262991",
            "extra": "mean: 160.14075366666702 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.14062883760527,
            "unit": "iter/sec",
            "range": "stddev: 0.013493641931226904",
            "extra": "mean: 162.84977099999765 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.695490725075375,
            "unit": "iter/sec",
            "range": "stddev: 0.02181950286793466",
            "extra": "mean: 175.57749600000724 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.768506089559898,
            "unit": "iter/sec",
            "range": "stddev: 0.02783353014093949",
            "extra": "mean: 173.35510866666937 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.857930265066205,
            "unit": "iter/sec",
            "range": "stddev: 0.021043126679085197",
            "extra": "mean: 170.7087579999893 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-small]",
            "value": 2.62707711198241,
            "unit": "iter/sec",
            "range": "stddev: 0.03273558197705457",
            "extra": "mean: 380.6511789999926 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-medium]",
            "value": 2.2538831075831793,
            "unit": "iter/sec",
            "range": "stddev: 0.022197453678018415",
            "extra": "mean: 443.6787323333249 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-large]",
            "value": 1.5614863408099717,
            "unit": "iter/sec",
            "range": "stddev: 0.014020626398858366",
            "extra": "mean: 640.415464333349 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.2432053981451587,
            "unit": "iter/sec",
            "range": "stddev: 0.13854238517220963",
            "extra": "mean: 445.7906533333376 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.000880658275484,
            "unit": "iter/sec",
            "range": "stddev: 0.12747174997133123",
            "extra": "mean: 499.7799323333349 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 2.233805686139852,
            "unit": "iter/sec",
            "range": "stddev: 0.02700475798194609",
            "extra": "mean: 447.66651200000257 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.9670832186040945,
            "unit": "iter/sec",
            "range": "stddev: 0.0680859894161505",
            "extra": "mean: 1.0340371756666589 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.9093611364996202,
            "unit": "iter/sec",
            "range": "stddev: 0.10800428647718394",
            "extra": "mean: 1.099673121999994 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.8635058827295384,
            "unit": "iter/sec",
            "range": "stddev: 0.10745049564292967",
            "extra": "mean: 1.1580697016666572 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9894138447319856,
            "unit": "iter/sec",
            "range": "stddev: 0.8428368985323152",
            "extra": "mean: 1.0106994209999982 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.8721153572681313,
            "unit": "iter/sec",
            "range": "stddev: 0.8002699069131661",
            "extra": "mean: 1.1466373016666769 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.5329236354747089,
            "unit": "iter/sec",
            "range": "stddev: 0.6008298518425242",
            "extra": "mean: 1.876441451333335 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.367783270506148,
            "unit": "iter/sec",
            "range": "stddev: 0.15538453911334432",
            "extra": "mean: 731.1099803333244 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.8298228509750837,
            "unit": "iter/sec",
            "range": "stddev: 0.09120911057043567",
            "extra": "mean: 1.2050764796666538 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.43111500630800026,
            "unit": "iter/sec",
            "range": "stddev: 0.06254508370690676",
            "extra": "mean: 2.3195666710000182 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}