window.BENCHMARK_DATA = {
  "lastUpdate": 1674659064638,
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
      }
    ]
  }
}