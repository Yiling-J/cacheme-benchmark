window.BENCHMARK_DATA = {
  "lastUpdate": 1674658940169,
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
        "date": 1674658939771,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 5.182127754121535,
            "unit": "iter/sec",
            "range": "stddev: 0.028288322099648752",
            "extra": "mean: 192.97092766666424 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 5.253431553310692,
            "unit": "iter/sec",
            "range": "stddev: 0.011653757355453646",
            "extra": "mean: 190.35177100000547 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 5.081669328713366,
            "unit": "iter/sec",
            "range": "stddev: 0.02121741937414494",
            "extra": "mean: 196.78572833332927 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 4.778449399636512,
            "unit": "iter/sec",
            "range": "stddev: 0.030401982738933162",
            "extra": "mean: 209.27290766667284 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 4.94541062876954,
            "unit": "iter/sec",
            "range": "stddev: 0.03828641269780474",
            "extra": "mean: 202.20767799999825 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 4.927193708135497,
            "unit": "iter/sec",
            "range": "stddev: 0.026917093634817747",
            "extra": "mean: 202.95528433332302 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-small]",
            "value": 1.6631899934400207,
            "unit": "iter/sec",
            "range": "stddev: 0.05879019901313308",
            "extra": "mean: 601.2542186666678 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-medium]",
            "value": 1.38562068951765,
            "unit": "iter/sec",
            "range": "stddev: 0.030917202136863574",
            "extra": "mean: 721.6982306666561 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-large]",
            "value": 0.9797208348575198,
            "unit": "iter/sec",
            "range": "stddev: 0.07208593915027088",
            "extra": "mean: 1.0206989219999894 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.1832906422506175,
            "unit": "iter/sec",
            "range": "stddev: 0.07256217989602959",
            "extra": "mean: 458.02422299999535 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.094374471214917,
            "unit": "iter/sec",
            "range": "stddev: 0.039916279858265735",
            "extra": "mean: 477.46953266667447 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.6118004510021589,
            "unit": "iter/sec",
            "range": "stddev: 0.04608987980475227",
            "extra": "mean: 620.4241966666757 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.6941774030746994,
            "unit": "iter/sec",
            "range": "stddev: 0.14795334193462517",
            "extra": "mean: 1.4405539499999993 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.6630542281764885,
            "unit": "iter/sec",
            "range": "stddev: 0.03942937448651327",
            "extra": "mean: 1.5081722693333386 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.5751364052833674,
            "unit": "iter/sec",
            "range": "stddev: 0.0403065422841943",
            "extra": "mean: 1.738717964666667 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.6855477703133431,
            "unit": "iter/sec",
            "range": "stddev: 0.9779463020694653",
            "extra": "mean: 1.4586875536666544 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.6524402943453886,
            "unit": "iter/sec",
            "range": "stddev: 0.9368791886476696",
            "extra": "mean: 1.5327072969999922 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.4210010187448625,
            "unit": "iter/sec",
            "range": "stddev: 0.6913050375817381",
            "extra": "mean: 2.375291164333324 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 0.9153773459529778,
            "unit": "iter/sec",
            "range": "stddev: 0.1595847685773278",
            "extra": "mean: 1.0924456503333317 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.6525250444299646,
            "unit": "iter/sec",
            "range": "stddev: 0.10852154074277275",
            "extra": "mean: 1.5325082286666618 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.30332848826233577,
            "unit": "iter/sec",
            "range": "stddev: 0.27606865460738284",
            "extra": "mean: 3.29675595499999 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}