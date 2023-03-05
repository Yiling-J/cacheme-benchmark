window.BENCHMARK_DATA = {
  "lastUpdate": 1678030931862,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark: test_zipf": [
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
          "id": "45349048b0682e7dc7c2275d0c3e5ec5baf5f9f7",
          "message": "Refactor (#18)\n\n* core refactor and update benchmark\r\n\r\n* update benchmark ci\r\n\r\n* fix bench\r\n\r\n* update params\r\n\r\n* update bench\r\n\r\n* update bench\r\n\r\n* fix bench\r\n\r\n* remove too slow bench\r\n\r\n* add with theine bench\r\n\r\n* update\r\n\r\n* optimize bench\r\n\r\n* update\r\n\r\n* update bench\r\n\r\n* simplify benchmark\r\n\r\n* update bench\r\n\r\n* update\r\n\r\n* update readme\r\n\r\n* add trace script\r\n\r\n* update trace script\r\n\r\n* update readme\r\n\r\n* update readme\r\n\r\n* fix python 3.7 test\r\n\r\n* reduce benchmark requests count",
          "timestamp": "2023-03-05T23:34:28+08:00",
          "tree_id": "60e6ca61c4238d70710fcfa1cdd64d59addb93ab",
          "url": "https://github.com/Yiling-J/cacheme/commit/45349048b0682e7dc7c2275d0c3e5ec5baf5f9f7"
        },
        "date": 1678030931063,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-small]",
            "value": 181.05098649295573,
            "unit": "iter/sec",
            "range": "stddev: 0.0002360606453152088",
            "extra": "mean: 5.523305999986405 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-medium]",
            "value": 184.7891660323791,
            "unit": "iter/sec",
            "range": "stddev: 0.00017399819454666274",
            "extra": "mean: 5.411572666683166 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-large]",
            "value": 182.5193103914517,
            "unit": "iter/sec",
            "range": "stddev: 0.00024379361558330277",
            "extra": "mean: 5.4788723333179705 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-small]",
            "value": 3.4558779594022067,
            "unit": "iter/sec",
            "range": "stddev: 0.017732624401004458",
            "extra": "mean: 289.3620700000004 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-medium]",
            "value": 2.8619689599661755,
            "unit": "iter/sec",
            "range": "stddev: 0.02227901366093907",
            "extra": "mean: 349.40979933332983 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-large]",
            "value": 1.873320451133052,
            "unit": "iter/sec",
            "range": "stddev: 0.015486677548200465",
            "extra": "mean: 533.811499999994 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-small]",
            "value": 1.2060764631202487,
            "unit": "iter/sec",
            "range": "stddev: 0.13042055508173261",
            "extra": "mean: 829.1348273333293 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-medium]",
            "value": 1.1214895506979239,
            "unit": "iter/sec",
            "range": "stddev: 0.12217864021700588",
            "extra": "mean: 891.6712593333406 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-large]",
            "value": 0.9061135462845494,
            "unit": "iter/sec",
            "range": "stddev: 0.141548093387582",
            "extra": "mean: 1.103614446666673 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-small]",
            "value": 1.535161291229803,
            "unit": "iter/sec",
            "range": "stddev: 0.09077035617758704",
            "extra": "mean: 651.3973520000036 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-medium]",
            "value": 1.3363931569240022,
            "unit": "iter/sec",
            "range": "stddev: 0.12682199214346115",
            "extra": "mean: 748.2827899999999 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-large]",
            "value": 0.8394758187066672,
            "unit": "iter/sec",
            "range": "stddev: 0.24283418808752866",
            "extra": "mean: 1.1912195416666596 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-small]",
            "value": 1.3428887976365218,
            "unit": "iter/sec",
            "range": "stddev: 0.18325939316272394",
            "extra": "mean: 744.6632973333275 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-medium]",
            "value": 0.9353024335695476,
            "unit": "iter/sec",
            "range": "stddev: 0.4933044663228229",
            "extra": "mean: 1.0691728836666623 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-large]",
            "value": 0.637521759183437,
            "unit": "iter/sec",
            "range": "stddev: 0.588525323501746",
            "extra": "mean: 1.5685739123333444 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}