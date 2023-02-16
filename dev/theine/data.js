window.BENCHMARK_DATA = {
  "lastUpdate": 1676514875887,
  "repoUrl": "https://github.com/Yiling-J/theine",
  "entries": {
    "Cacheme Benchmark: theine": [
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
          "id": "0ac263a764ca51ec30fcd67ab8eabb0665bd0343",
          "message": "isort and refactor benchmark",
          "timestamp": "2023-02-16T00:14:21+08:00",
          "tree_id": "b13bd363e9e89523fbc74045b5c8a506d0f55ee8",
          "url": "https://github.com/Yiling-J/theine/commit/0ac263a764ca51ec30fcd67ab8eabb0665bd0343"
        },
        "date": 1676512211145,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 34.685436871191875,
            "unit": "iter/sec",
            "range": "stddev: 0.002295546076830255",
            "extra": "mean: 28.83054360000159 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 152.44753681904234,
            "unit": "iter/sec",
            "range": "stddev: 0.00014363353520354077",
            "extra": "mean: 6.5596336999988125 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 58.35156309103911,
            "unit": "iter/sec",
            "range": "stddev: 0.0010182430783521117",
            "extra": "mean: 17.13750149999953 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 75.56173177002013,
            "unit": "iter/sec",
            "range": "stddev: 0.00048256549941606125",
            "extra": "mean: 13.23421229999866 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 62.14816216322919,
            "unit": "iter/sec",
            "range": "stddev: 0.00032840609799612304",
            "extra": "mean: 16.090580400005194 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 14.532140652648623,
            "unit": "iter/sec",
            "range": "stddev: 0.0005780635028486055",
            "extra": "mean: 68.81298659999828 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 38.44010470269656,
            "unit": "iter/sec",
            "range": "stddev: 0.0006289870617307434",
            "extra": "mean: 26.01449729999956 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.588072152427612,
            "unit": "iter/sec",
            "range": "stddev: 0.001879076651466136",
            "extra": "mean: 629.6943111000004 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 24.649343796384418,
            "unit": "iter/sec",
            "range": "stddev: 0.0004096128753824579",
            "extra": "mean: 40.5690313000008 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 53.01940360657114,
            "unit": "iter/sec",
            "range": "stddev: 0.0013673823320285161",
            "extra": "mean: 18.8610194000006 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.835397837789708,
            "unit": "iter/sec",
            "range": "stddev: 0.008269332944713747",
            "extra": "mean: 206.80821589999852 msec\nrounds: 10"
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
          "id": "22d8129cfa45103f187030b612e0383625935471",
          "message": "Update README.md",
          "timestamp": "2023-02-16T10:10:06+08:00",
          "tree_id": "0901d03f1a99f02de9288de8dc37c6d5f83b51b5",
          "url": "https://github.com/Yiling-J/theine/commit/22d8129cfa45103f187030b612e0383625935471"
        },
        "date": 1676513469972,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 33.45874641793962,
            "unit": "iter/sec",
            "range": "stddev: 0.0023123202389266186",
            "extra": "mean: 29.887551300004134 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 160.08665682848965,
            "unit": "iter/sec",
            "range": "stddev: 0.00017102976973822995",
            "extra": "mean: 6.246616799995763 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 57.6061156495915,
            "unit": "iter/sec",
            "range": "stddev: 0.00015504103572134732",
            "extra": "mean: 17.35926799999561 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 71.9000498425642,
            "unit": "iter/sec",
            "range": "stddev: 0.0002156460123868024",
            "extra": "mean: 13.908196199997747 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 60.86878207432748,
            "unit": "iter/sec",
            "range": "stddev: 0.00011390980072144456",
            "extra": "mean: 16.428782800005592 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 14.082041058689011,
            "unit": "iter/sec",
            "range": "stddev: 0.0028559255799699497",
            "extra": "mean: 71.01243320001345 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 37.378890805170464,
            "unit": "iter/sec",
            "range": "stddev: 0.0003761874617606413",
            "extra": "mean: 26.753067800012786 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.5760907402872932,
            "unit": "iter/sec",
            "range": "stddev: 0.001483849195155344",
            "extra": "mean: 634.4812354000112 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 24.099558670080018,
            "unit": "iter/sec",
            "range": "stddev: 0.0008779530903283814",
            "extra": "mean: 41.494535800006815 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 53.070773676565246,
            "unit": "iter/sec",
            "range": "stddev: 0.0006721499574201772",
            "extra": "mean: 18.842762799999946 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.686455978430581,
            "unit": "iter/sec",
            "range": "stddev: 0.006189753994267336",
            "extra": "mean: 213.3808585000054 msec\nrounds: 10"
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
          "id": "e2e131a90af01dc04dabd2cd48716b43af763e3d",
          "message": "Update README.md",
          "timestamp": "2023-02-16T10:33:34+08:00",
          "tree_id": "3c1861899a7e77b0215b0c7a8ff0be377223c7d1",
          "url": "https://github.com/Yiling-J/theine/commit/e2e131a90af01dc04dabd2cd48716b43af763e3d"
        },
        "date": 1676514875325,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 33.65504369090881,
            "unit": "iter/sec",
            "range": "stddev: 0.0023177962028060484",
            "extra": "mean: 29.713228400001412 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 161.28308825376178,
            "unit": "iter/sec",
            "range": "stddev: 0.00010684037530974257",
            "extra": "mean: 6.200278099998968 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 64.98525718458279,
            "unit": "iter/sec",
            "range": "stddev: 0.0003988384738747189",
            "extra": "mean: 15.388105600007407 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 78.06082424483562,
            "unit": "iter/sec",
            "range": "stddev: 0.00024477070203559443",
            "extra": "mean: 12.810523200005264 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 61.90087458879223,
            "unit": "iter/sec",
            "range": "stddev: 0.00006704931267445424",
            "extra": "mean: 16.154860599999665 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 14.319449681783063,
            "unit": "iter/sec",
            "range": "stddev: 0.00038262394477928444",
            "extra": "mean: 69.8350860000005 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 37.89720434105257,
            "unit": "iter/sec",
            "range": "stddev: 0.0005858994076912559",
            "extra": "mean: 26.38717069999643 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.579888511416531,
            "unit": "iter/sec",
            "range": "stddev: 0.002096723693096397",
            "extra": "mean: 632.9560553000022 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 24.246409529241078,
            "unit": "iter/sec",
            "range": "stddev: 0.0009072330196712628",
            "extra": "mean: 41.24321990000226 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 54.388440950834024,
            "unit": "iter/sec",
            "range": "stddev: 0.00031909045184002184",
            "extra": "mean: 18.386259699997254 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.815765431393482,
            "unit": "iter/sec",
            "range": "stddev: 0.006192609330021033",
            "extra": "mean: 207.65130990000102 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}