window.BENCHMARK_DATA = {
  "lastUpdate": 1674700558722,
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
        "date": 1674657247247,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.3253792805685,
            "unit": "iter/sec",
            "range": "stddev: 0.00038739037302004556",
            "extra": "mean: 187.78005233333297 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.3607548763417725,
            "unit": "iter/sec",
            "range": "stddev: 0.0012720412575719566",
            "extra": "mean: 186.5408926666703 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.371126152472749,
            "unit": "iter/sec",
            "range": "stddev: 0.005252691192704735",
            "extra": "mean: 186.18069499999024 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.235759785113739,
            "unit": "iter/sec",
            "range": "stddev: 0.002437130673278269",
            "extra": "mean: 160.36538199999958 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.086009000700075,
            "unit": "iter/sec",
            "range": "stddev: 0.0020263262705406187",
            "extra": "mean: 164.31129166666855 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.071993907313155,
            "unit": "iter/sec",
            "range": "stddev: 0.002162021995905941",
            "extra": "mean: 164.690547333322 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.258863780609651,
            "unit": "iter/sec",
            "range": "stddev: 0.003982913139815864",
            "extra": "mean: 306.85541566666075 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 3.058366218747441,
            "unit": "iter/sec",
            "range": "stddev: 0.027779179311458426",
            "extra": "mean: 326.97196099999815 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.7651877017579243,
            "unit": "iter/sec",
            "range": "stddev: 0.009574806536934719",
            "extra": "mean: 566.511991333338 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 2.309042744236633,
            "unit": "iter/sec",
            "range": "stddev: 0.04525327290028543",
            "extra": "mean: 433.0798996666469 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.8217408636012835,
            "unit": "iter/sec",
            "range": "stddev: 0.024194264765492995",
            "extra": "mean: 354.3911536666542 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.4372932725215675,
            "unit": "iter/sec",
            "range": "stddev: 0.025787019354023572",
            "extra": "mean: 695.75223033335 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.4103954408911037,
            "unit": "iter/sec",
            "range": "stddev: 0.020580802855150453",
            "extra": "mean: 709.021009999996 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.310706945934798,
            "unit": "iter/sec",
            "range": "stddev: 0.06899927737435767",
            "extra": "mean: 762.9470516666856 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.917126873416384,
            "unit": "iter/sec",
            "range": "stddev: 0.030073455170907672",
            "extra": "mean: 1.090361681666688 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.779912155720987,
            "unit": "iter/sec",
            "range": "stddev: 0.003907604575526674",
            "extra": "mean: 359.72359700000806 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 2.131789506910796,
            "unit": "iter/sec",
            "range": "stddev: 0.03348584393173389",
            "extra": "mean: 469.08946533333545 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.2495175742803768,
            "unit": "iter/sec",
            "range": "stddev: 0.02063415104895122",
            "extra": "mean: 800.3088716666676 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.396392080271176,
            "unit": "iter/sec",
            "range": "stddev: 0.03248874965420134",
            "extra": "mean: 417.29398466666606 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 2.086295171249558,
            "unit": "iter/sec",
            "range": "stddev: 0.02943772106456048",
            "extra": "mean: 479.31856133332457 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.208289127303612,
            "unit": "iter/sec",
            "range": "stddev: 0.022136078719932367",
            "extra": "mean: 827.6164846666916 msec\nrounds: 3"
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
        "date": 1674659064379,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.750773429664354,
            "unit": "iter/sec",
            "range": "stddev: 0.001317816472543814",
            "extra": "mean: 173.88965366670087 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.770128079629051,
            "unit": "iter/sec",
            "range": "stddev: 0.0011056624563527057",
            "extra": "mean: 173.3063783333364 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.697304166706485,
            "unit": "iter/sec",
            "range": "stddev: 0.0009509384324688082",
            "extra": "mean: 175.52160999999464 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.550516732381263,
            "unit": "iter/sec",
            "range": "stddev: 0.0027356615884255122",
            "extra": "mean: 152.65971233333175 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.554514094731748,
            "unit": "iter/sec",
            "range": "stddev: 0.0007926434131247807",
            "extra": "mean: 152.5666106666487 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.495429899963134,
            "unit": "iter/sec",
            "range": "stddev: 0.002195538208387984",
            "extra": "mean: 153.95439799999622 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 2.9547825460730928,
            "unit": "iter/sec",
            "range": "stddev: 0.0031013984792308377",
            "extra": "mean: 338.4343803333347 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.5414365213758816,
            "unit": "iter/sec",
            "range": "stddev: 0.025032803003193105",
            "extra": "mean: 393.4782520000226 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.6208265019638932,
            "unit": "iter/sec",
            "range": "stddev: 0.005616899019840461",
            "extra": "mean: 616.9691813333126 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.5695939106462053,
            "unit": "iter/sec",
            "range": "stddev: 0.0069850796904852635",
            "extra": "mean: 280.14391133331173 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.723161775415533,
            "unit": "iter/sec",
            "range": "stddev: 0.02123500595594884",
            "extra": "mean: 367.2201956666375 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.310778255158934,
            "unit": "iter/sec",
            "range": "stddev: 0.09294886184709346",
            "extra": "mean: 762.9055456666455 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.4372640990287946,
            "unit": "iter/sec",
            "range": "stddev: 0.02403811977806319",
            "extra": "mean: 695.7663526666616 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.1832823470314553,
            "unit": "iter/sec",
            "range": "stddev: 0.045771581391831725",
            "extra": "mean: 845.1068356666838 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.8717381295404343,
            "unit": "iter/sec",
            "range": "stddev: 0.07706297897138788",
            "extra": "mean: 1.1471334866666705 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.8277810094435034,
            "unit": "iter/sec",
            "range": "stddev: 0.0485903358199118",
            "extra": "mean: 547.1114946666754 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 2.011100929882815,
            "unit": "iter/sec",
            "range": "stddev: 0.013991314152406249",
            "extra": "mean: 497.2400863333443 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.1408221547279098,
            "unit": "iter/sec",
            "range": "stddev: 0.15127031664098328",
            "extra": "mean: 876.5608170000027 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.9652508382103258,
            "unit": "iter/sec",
            "range": "stddev: 0.10085394140960204",
            "extra": "mean: 508.8408973333193 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.661479890129207,
            "unit": "iter/sec",
            "range": "stddev: 0.03357315640559375",
            "extra": "mean: 601.8730686666535 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.2147295358225267,
            "unit": "iter/sec",
            "range": "stddev: 0.03968695479535685",
            "extra": "mean: 823.2285216666545 msec\nrounds: 3"
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
        "date": 1674699333465,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 4.308639417342286,
            "unit": "iter/sec",
            "range": "stddev: 0.004394242989146058",
            "extra": "mean: 232.0918283333242 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 4.268046736733753,
            "unit": "iter/sec",
            "range": "stddev: 0.0190902608838391",
            "extra": "mean: 234.29921499999296 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 4.299964996278415,
            "unit": "iter/sec",
            "range": "stddev: 0.008020515521411233",
            "extra": "mean: 232.56003266665934 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 4.906763969060762,
            "unit": "iter/sec",
            "range": "stddev: 0.021971458477796503",
            "extra": "mean: 203.80030633334437 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 4.727872127474171,
            "unit": "iter/sec",
            "range": "stddev: 0.013881518203896631",
            "extra": "mean: 211.51164266666456 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 5.468221466490978,
            "unit": "iter/sec",
            "range": "stddev: 0.012729745482471478",
            "extra": "mean: 182.8748169999983 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 2.3601310315167816,
            "unit": "iter/sec",
            "range": "stddev: 0.014389638704567845",
            "extra": "mean: 423.70528866667695 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 1.977255608957617,
            "unit": "iter/sec",
            "range": "stddev: 0.002135406305268139",
            "extra": "mean: 505.7515049999969 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.2941911110305577,
            "unit": "iter/sec",
            "range": "stddev: 0.007687263567769473",
            "extra": "mean: 772.6834093333442 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 2.667393051142277,
            "unit": "iter/sec",
            "range": "stddev: 0.010605574802893454",
            "extra": "mean: 374.89788000001073 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 1.9268907772311645,
            "unit": "iter/sec",
            "range": "stddev: 0.030274786983373762",
            "extra": "mean: 518.9707749999949 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.05053148688586,
            "unit": "iter/sec",
            "range": "stddev: 0.10765384889336407",
            "extra": "mean: 951.8991219999956 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.067260791870844,
            "unit": "iter/sec",
            "range": "stddev: 0.05611628827052877",
            "extra": "mean: 936.9781103333329 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.9072763657072003,
            "unit": "iter/sec",
            "range": "stddev: 0.08668827159677193",
            "extra": "mean: 1.102199988666655 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.6435745677444481,
            "unit": "iter/sec",
            "range": "stddev: 0.0396784243806737",
            "extra": "mean: 1.5538214996666586 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.7396335398277802,
            "unit": "iter/sec",
            "range": "stddev: 0.04037325787495999",
            "extra": "mean: 574.8337089999987 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.503924393702208,
            "unit": "iter/sec",
            "range": "stddev: 0.03938479033950373",
            "extra": "mean: 664.9270430000153 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.9244032175618975,
            "unit": "iter/sec",
            "range": "stddev: 0.031308444324821924",
            "extra": "mean: 1.0817790126666675 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.7299686841010369,
            "unit": "iter/sec",
            "range": "stddev: 0.04890968295069889",
            "extra": "mean: 578.0451456666924 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.340750073135959,
            "unit": "iter/sec",
            "range": "stddev: 0.07806022733139822",
            "extra": "mean: 745.8511619999703 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.8232568996225679,
            "unit": "iter/sec",
            "range": "stddev: 0.03370677048826475",
            "extra": "mean: 1.2146876636666661 sec\nrounds: 3"
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
        "date": 1674700558370,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.514662809186881,
            "unit": "iter/sec",
            "range": "stddev: 0.003223677185678566",
            "extra": "mean: 181.33474966667032 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.607484758505884,
            "unit": "iter/sec",
            "range": "stddev: 0.002513781065966069",
            "extra": "mean: 178.33307500000237 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.684084032111461,
            "unit": "iter/sec",
            "range": "stddev: 0.0003188843078888175",
            "extra": "mean: 175.92984099999853 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.514711880678293,
            "unit": "iter/sec",
            "range": "stddev: 0.002222919362006809",
            "extra": "mean: 153.49872999999548 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.368450012543828,
            "unit": "iter/sec",
            "range": "stddev: 0.000884656108740659",
            "extra": "mean: 157.02407933332552 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.226728445637439,
            "unit": "iter/sec",
            "range": "stddev: 0.00533443320294994",
            "extra": "mean: 160.59797833332823 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.187553807701182,
            "unit": "iter/sec",
            "range": "stddev: 0.016614904798775927",
            "extra": "mean: 313.7201943333423 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.6931223518062897,
            "unit": "iter/sec",
            "range": "stddev: 0.00683134546957847",
            "extra": "mean: 371.31621566665746 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.6691821129830486,
            "unit": "iter/sec",
            "range": "stddev: 0.005385473976805236",
            "extra": "mean: 599.095804000001 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 2.4589589948899757,
            "unit": "iter/sec",
            "range": "stddev: 0.014844997359891015",
            "extra": "mean: 406.6761593333297 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.5747842922105453,
            "unit": "iter/sec",
            "range": "stddev: 0.04313417632687861",
            "extra": "mean: 388.3820493333303 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.4254518780453171,
            "unit": "iter/sec",
            "range": "stddev: 0.023355802287074897",
            "extra": "mean: 701.5319250000024 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.4023495310891771,
            "unit": "iter/sec",
            "range": "stddev: 0.06328269727318409",
            "extra": "mean: 713.0889823333272 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.197284987712629,
            "unit": "iter/sec",
            "range": "stddev: 0.03253688139188705",
            "extra": "mean: 835.2230340000043 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.8166789763690574,
            "unit": "iter/sec",
            "range": "stddev: 0.026245852638345172",
            "extra": "mean: 1.2244713393333388 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.9461657431698127,
            "unit": "iter/sec",
            "range": "stddev: 0.11405551894583314",
            "extra": "mean: 513.8308510000039 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 2.1492642885295346,
            "unit": "iter/sec",
            "range": "stddev: 0.01967216816185261",
            "extra": "mean: 465.2754923333191 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.2245048108463108,
            "unit": "iter/sec",
            "range": "stddev: 0.024777167764151755",
            "extra": "mean: 816.6566526666846 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.069142757155931,
            "unit": "iter/sec",
            "range": "stddev: 0.08994267123894482",
            "extra": "mean: 483.2919316666751 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.8156842784319096,
            "unit": "iter/sec",
            "range": "stddev: 0.05510635723300658",
            "extra": "mean: 550.7565450000129 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.1266842374525683,
            "unit": "iter/sec",
            "range": "stddev: 0.06540131875250142",
            "extra": "mean: 887.5601226666655 msec\nrounds: 3"
          }
        ]
      }
    ]
  }
}