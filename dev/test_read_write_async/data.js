window.BENCHMARK_DATA = {
  "lastUpdate": 1674700444393,
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
        "date": 1674699121427,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 6.144478968132418,
            "unit": "iter/sec",
            "range": "stddev: 0.019742746895730377",
            "extra": "mean: 162.74772933333756 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.22275457657188,
            "unit": "iter/sec",
            "range": "stddev: 0.010245069733704397",
            "extra": "mean: 160.70053666665748 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.191651412106749,
            "unit": "iter/sec",
            "range": "stddev: 0.013047453106187911",
            "extra": "mean: 161.50780033331102 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.631207163512878,
            "unit": "iter/sec",
            "range": "stddev: 0.02377118139935769",
            "extra": "mean: 177.58181699999417 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.882063197663407,
            "unit": "iter/sec",
            "range": "stddev: 0.03072240748466535",
            "extra": "mean: 170.0083740000006 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.830087827085819,
            "unit": "iter/sec",
            "range": "stddev: 0.02215521881194404",
            "extra": "mean: 171.524002666672 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-small]",
            "value": 2.0198264780134423,
            "unit": "iter/sec",
            "range": "stddev: 0.03499290993858936",
            "extra": "mean: 495.0920343333299 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-medium]",
            "value": 1.3321213048362663,
            "unit": "iter/sec",
            "range": "stddev: 0.2189914948071081",
            "extra": "mean: 750.6823863333617 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-large]",
            "value": 1.2813155506620584,
            "unit": "iter/sec",
            "range": "stddev: 0.05787096201492925",
            "extra": "mean: 780.4478760000203 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 3.0274746992199306,
            "unit": "iter/sec",
            "range": "stddev: 0.037258635151440074",
            "extra": "mean: 330.30829299999215 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.8235040228166035,
            "unit": "iter/sec",
            "range": "stddev: 0.030017822765771907",
            "extra": "mean: 354.16985133332446 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 2.293913680485463,
            "unit": "iter/sec",
            "range": "stddev: 0.025998438854362912",
            "extra": "mean: 435.93619433333214 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.9584651540811077,
            "unit": "iter/sec",
            "range": "stddev: 0.09443414696673047",
            "extra": "mean: 1.0433347480000066 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.887591913023571,
            "unit": "iter/sec",
            "range": "stddev: 0.0385910756957023",
            "extra": "mean: 1.1266438836666641 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.8387083711265495,
            "unit": "iter/sec",
            "range": "stddev: 0.047705547748070364",
            "extra": "mean: 1.1923095493333449 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9846592995718015,
            "unit": "iter/sec",
            "range": "stddev: 0.7697069161565196",
            "extra": "mean: 1.0155797040000227 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.8313334231520731,
            "unit": "iter/sec",
            "range": "stddev: 0.8453720087388363",
            "extra": "mean: 1.2028867986666683 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.6382509384897642,
            "unit": "iter/sec",
            "range": "stddev: 0.7754015564713468",
            "extra": "mean: 1.5667818716666677 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.183528911926576,
            "unit": "iter/sec",
            "range": "stddev: 0.20600261801343367",
            "extra": "mean: 844.9307743333255 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.8111531356301972,
            "unit": "iter/sec",
            "range": "stddev: 0.25186846557775666",
            "extra": "mean: 1.2328128389999808 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.43430071057840164,
            "unit": "iter/sec",
            "range": "stddev: 0.1423169937007085",
            "extra": "mean: 2.3025520696666604 sec\nrounds: 3"
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
          "id": "7cb5fa475f546ce961a1c914874711bc226425ac",
          "message": "update readme",
          "timestamp": "2023-01-26T10:31:11+08:00",
          "tree_id": "3050583c4dbd724d127767aaea98f3b3714bf49e",
          "url": "https://github.com/Yiling-J/cacheme/commit/7cb5fa475f546ce961a1c914874711bc226425ac"
        },
        "date": 1674700444131,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 5.434210037880502,
            "unit": "iter/sec",
            "range": "stddev: 0.011552723840228403",
            "extra": "mean: 184.01938699999695 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.099964746067125,
            "unit": "iter/sec",
            "range": "stddev: 0.00915028450982092",
            "extra": "mean: 163.9353736666654 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.1665462412127265,
            "unit": "iter/sec",
            "range": "stddev: 0.011189776670483974",
            "extra": "mean: 162.16532900000402 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.61682848696509,
            "unit": "iter/sec",
            "range": "stddev: 0.024382400215182395",
            "extra": "mean: 178.03641366666056 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.798008448262642,
            "unit": "iter/sec",
            "range": "stddev: 0.031668805544936285",
            "extra": "mean: 172.4730153333335 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.688609584395041,
            "unit": "iter/sec",
            "range": "stddev: 0.022473794181670583",
            "extra": "mean: 175.78988066665602 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-small]",
            "value": 1.911281337585432,
            "unit": "iter/sec",
            "range": "stddev: 0.06607712921896898",
            "extra": "mean: 523.2092106666641 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-medium]",
            "value": 1.7939408896584739,
            "unit": "iter/sec",
            "range": "stddev: 0.04690538767954339",
            "extra": "mean: 557.431967666659 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-large]",
            "value": 1.3218124862002683,
            "unit": "iter/sec",
            "range": "stddev: 0.0288193583849793",
            "extra": "mean: 756.5369600000054 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.684312509140553,
            "unit": "iter/sec",
            "range": "stddev: 0.05019256282775644",
            "extra": "mean: 372.5348656666559 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.945957034324676,
            "unit": "iter/sec",
            "range": "stddev: 0.12676738172074506",
            "extra": "mean: 513.8859606666699 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 2.0147839527423197,
            "unit": "iter/sec",
            "range": "stddev: 0.05544055929234133",
            "extra": "mean: 496.3311319999851 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.8877215886576486,
            "unit": "iter/sec",
            "range": "stddev: 0.0545873042374936",
            "extra": "mean: 1.126479306999992 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.8873517374930576,
            "unit": "iter/sec",
            "range": "stddev: 0.024925030366207118",
            "extra": "mean: 1.1269488273333366 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.7904196842813165,
            "unit": "iter/sec",
            "range": "stddev: 0.0886566456211416",
            "extra": "mean: 1.2651506786666669 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9013514442624193,
            "unit": "iter/sec",
            "range": "stddev: 0.932502531241313",
            "extra": "mean: 1.1094451629999942 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.8224148836610361,
            "unit": "iter/sec",
            "range": "stddev: 0.901066313914334",
            "extra": "mean: 1.215931301666662 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.547725423825331,
            "unit": "iter/sec",
            "range": "stddev: 1.1250428193182116",
            "extra": "mean: 1.8257323040000035 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.2544836463414775,
            "unit": "iter/sec",
            "range": "stddev: 0.1734560627538207",
            "extra": "mean: 797.1407223333339 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.8072628641233174,
            "unit": "iter/sec",
            "range": "stddev: 0.10906428160342341",
            "extra": "mean: 1.2387538736666575 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.41283238242015186,
            "unit": "iter/sec",
            "range": "stddev: 0.276969973480262",
            "extra": "mean: 2.4222906016666834 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}