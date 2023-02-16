window.BENCHMARK_DATA = {
  "lastUpdate": 1676546109998,
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
          "id": "74381785a232089496983d75a269814483666c11",
          "message": "Update README.md",
          "timestamp": "2023-02-16T13:03:14+08:00",
          "tree_id": "fb5c86a27b2d54172586dc1ccf3c26ec422c4a2e",
          "url": "https://github.com/Yiling-J/theine/commit/74381785a232089496983d75a269814483666c11"
        },
        "date": 1676523856094,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 34.503861063140384,
            "unit": "iter/sec",
            "range": "stddev: 0.0021647916109919594",
            "extra": "mean: 28.98226369999719 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 145.86530427308153,
            "unit": "iter/sec",
            "range": "stddev: 0.00011926076842652425",
            "extra": "mean: 6.855639899998778 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 46.42672400973418,
            "unit": "iter/sec",
            "range": "stddev: 0.0002596647807561216",
            "extra": "mean: 21.539318600001423 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 58.35023963450472,
            "unit": "iter/sec",
            "range": "stddev: 0.00015165344450180325",
            "extra": "mean: 17.137890200002914 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 61.14180025267538,
            "unit": "iter/sec",
            "range": "stddev: 0.000837519170517121",
            "extra": "mean: 16.355422900002736 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 14.745988492443146,
            "unit": "iter/sec",
            "range": "stddev: 0.00020289075678839468",
            "extra": "mean: 67.81505359999898 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 38.257217258466916,
            "unit": "iter/sec",
            "range": "stddev: 0.0005269782106712323",
            "extra": "mean: 26.138858800000264 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.5708729536199884,
            "unit": "iter/sec",
            "range": "stddev: 0.0029856436845830153",
            "extra": "mean: 636.5887182000023 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 23.52027643399658,
            "unit": "iter/sec",
            "range": "stddev: 0.002268727057506249",
            "extra": "mean: 42.51650710000092 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 53.443208294132134,
            "unit": "iter/sec",
            "range": "stddev: 0.0007676263625029749",
            "extra": "mean: 18.711451499999043 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.698378255750162,
            "unit": "iter/sec",
            "range": "stddev: 0.008592153356084728",
            "extra": "mean: 212.83939810000163 msec\nrounds: 10"
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
          "id": "154d7a7cd2af98502711b61c9713a9b413313484",
          "message": "Update README.md",
          "timestamp": "2023-02-16T14:12:46+08:00",
          "tree_id": "02c0917eb5517fbc73458b59bf21df2cb9aba910",
          "url": "https://github.com/Yiling-J/theine/commit/154d7a7cd2af98502711b61c9713a9b413313484"
        },
        "date": 1676528034887,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 29.2218895482184,
            "unit": "iter/sec",
            "range": "stddev: 0.0036626597046650927",
            "extra": "mean: 34.22092189999972 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 128.10244424205766,
            "unit": "iter/sec",
            "range": "stddev: 0.00041062271701666124",
            "extra": "mean: 7.806252299998562 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 38.64912690443704,
            "unit": "iter/sec",
            "range": "stddev: 0.0026864286363210174",
            "extra": "mean: 25.873805699998798 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 58.52208627632617,
            "unit": "iter/sec",
            "range": "stddev: 0.0015146528044782733",
            "extra": "mean: 17.087565799999993 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 51.34168504416501,
            "unit": "iter/sec",
            "range": "stddev: 0.0011545738342596576",
            "extra": "mean: 19.47735060000042 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 10.64851890985718,
            "unit": "iter/sec",
            "range": "stddev: 0.004466778154549149",
            "extra": "mean: 93.90977359999937 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 32.00246762067321,
            "unit": "iter/sec",
            "range": "stddev: 0.0013340972809580548",
            "extra": "mean: 31.24759039999816 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.3233934868370607,
            "unit": "iter/sec",
            "range": "stddev: 0.014943326255396353",
            "extra": "mean: 755.6331582000013 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 17.446190700936885,
            "unit": "iter/sec",
            "range": "stddev: 0.0038960445216535836",
            "extra": "mean: 57.3191028999986 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 44.678860725146926,
            "unit": "iter/sec",
            "range": "stddev: 0.000980642187266139",
            "extra": "mean: 22.381949400002554 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 3.8441720586539105,
            "unit": "iter/sec",
            "range": "stddev: 0.005726004538815852",
            "extra": "mean: 260.1340379000007 msec\nrounds: 10"
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
          "id": "3a7dd74311a84b5984cbd9a1ca21915f9cc423f6",
          "message": "Update README.md",
          "timestamp": "2023-02-16T17:03:23+08:00",
          "tree_id": "2e2601e02eb7713b66e9583b763ccf385cb39054",
          "url": "https://github.com/Yiling-J/theine/commit/3a7dd74311a84b5984cbd9a1ca21915f9cc423f6"
        },
        "date": 1676538261835,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 36.70438182599623,
            "unit": "iter/sec",
            "range": "stddev: 0.0020990905230507664",
            "extra": "mean: 27.24470349999848 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 159.16026788011214,
            "unit": "iter/sec",
            "range": "stddev: 0.00011226456698017354",
            "extra": "mean: 6.282975099999533 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 59.07043025879113,
            "unit": "iter/sec",
            "range": "stddev: 0.0007431652693055461",
            "extra": "mean: 16.92894390000106 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 78.46609456510211,
            "unit": "iter/sec",
            "range": "stddev: 0.00035569690813186595",
            "extra": "mean: 12.744358000006173 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 63.12708433401851,
            "unit": "iter/sec",
            "range": "stddev: 0.00038134023752163477",
            "extra": "mean: 15.841061099999367 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 14.66416878779675,
            "unit": "iter/sec",
            "range": "stddev: 0.00023693374164581173",
            "extra": "mean: 68.19343220000178 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 38.57264116852968,
            "unit": "iter/sec",
            "range": "stddev: 0.0011406029144784263",
            "extra": "mean: 25.925110899999027 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.5806838638707248,
            "unit": "iter/sec",
            "range": "stddev: 0.0037667924719116297",
            "extra": "mean: 632.637570899999 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 24.486102934317177,
            "unit": "iter/sec",
            "range": "stddev: 0.0010848452089527018",
            "extra": "mean: 40.839491799999905 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 56.40797023864407,
            "unit": "iter/sec",
            "range": "stddev: 0.0004162038598019058",
            "extra": "mean: 17.727991199990356 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.734791066539276,
            "unit": "iter/sec",
            "range": "stddev: 0.010456435024528647",
            "extra": "mean: 211.20256120000533 msec\nrounds: 10"
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
          "id": "697e3e6305cacee9e24c4f2bb613eeef478a384d",
          "message": "add missing typed file",
          "timestamp": "2023-02-16T19:13:48+08:00",
          "tree_id": "364359e8ba5626fd0c9cd0d1a864e9ff6f21f767",
          "url": "https://github.com/Yiling-J/theine/commit/697e3e6305cacee9e24c4f2bb613eeef478a384d"
        },
        "date": 1676546109637,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 34.11315994218127,
            "unit": "iter/sec",
            "range": "stddev: 0.0026167065032775268",
            "extra": "mean: 29.314200200008145 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 157.68912267525977,
            "unit": "iter/sec",
            "range": "stddev: 0.00007905042654558254",
            "extra": "mean: 6.341591500000732 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 59.43034186865724,
            "unit": "iter/sec",
            "range": "stddev: 0.0007745650738969812",
            "extra": "mean: 16.826421799996183 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 76.36040179247621,
            "unit": "iter/sec",
            "range": "stddev: 0.0005833438329631581",
            "extra": "mean: 13.095792800012873 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 62.24757092705495,
            "unit": "iter/sec",
            "range": "stddev: 0.00023581314436180834",
            "extra": "mean: 16.06488389999754 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 14.21248532811373,
            "unit": "iter/sec",
            "range": "stddev: 0.0002730572169508301",
            "extra": "mean: 70.36067070000058 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 38.82612262219597,
            "unit": "iter/sec",
            "range": "stddev: 0.0002895686255808951",
            "extra": "mean: 25.755855400001337 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.4193308803494715,
            "unit": "iter/sec",
            "range": "stddev: 0.004617056115295884",
            "extra": "mean: 704.5573473000019 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 23.67126782458002,
            "unit": "iter/sec",
            "range": "stddev: 0.002150149781795313",
            "extra": "mean: 42.245308000005366 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 55.2514656086774,
            "unit": "iter/sec",
            "range": "stddev: 0.0006210645172941698",
            "extra": "mean: 18.09906739999576 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.693207305273497,
            "unit": "iter/sec",
            "range": "stddev: 0.008730189921623098",
            "extra": "mean: 213.07390339999586 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}