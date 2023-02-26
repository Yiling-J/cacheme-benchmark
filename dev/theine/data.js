window.BENCHMARK_DATA = {
  "lastUpdate": 1677392807479,
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
          "id": "03e2097809d8028601d6031071d2ab9695c03e1a",
          "message": "add hit ratio bench",
          "timestamp": "2023-02-16T22:45:12+08:00",
          "tree_id": "29826e3d8e3405b395862de95ed4a2b07617adad",
          "url": "https://github.com/Yiling-J/theine/commit/03e2097809d8028601d6031071d2ab9695c03e1a"
        },
        "date": 1676558791593,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 32.80943920741826,
            "unit": "iter/sec",
            "range": "stddev: 0.002387428044917977",
            "extra": "mean: 30.479033599998218 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 160.9091961730036,
            "unit": "iter/sec",
            "range": "stddev: 0.00017314688010425545",
            "extra": "mean: 6.214685199998371 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 57.2475393390401,
            "unit": "iter/sec",
            "range": "stddev: 0.0003507557855096679",
            "extra": "mean: 17.467999699998416 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 70.23281363017001,
            "unit": "iter/sec",
            "range": "stddev: 0.00041663110415337396",
            "extra": "mean: 14.23835880000155 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 59.51039240993471,
            "unit": "iter/sec",
            "range": "stddev: 0.0002133358542533195",
            "extra": "mean: 16.803787699996064 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 14.24591411192291,
            "unit": "iter/sec",
            "range": "stddev: 0.0005815181310550543",
            "extra": "mean: 70.19556569999708 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 37.3966985386766,
            "unit": "iter/sec",
            "range": "stddev: 0.0003230293341583031",
            "extra": "mean: 26.74032839999967 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.5691988320898085,
            "unit": "iter/sec",
            "range": "stddev: 0.0038171168098413877",
            "extra": "mean: 637.2678717000014 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 23.923249469331047,
            "unit": "iter/sec",
            "range": "stddev: 0.0016478149009753363",
            "extra": "mean: 41.80034159999764 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 53.62717737400347,
            "unit": "iter/sec",
            "range": "stddev: 0.0004624027363849807",
            "extra": "mean: 18.647261500001377 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.791519519501476,
            "unit": "iter/sec",
            "range": "stddev: 0.010590376106670869",
            "extra": "mean: 208.70206120000176 msec\nrounds: 10"
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
          "id": "2df0157b16a5097283b744e9ba2a6af4e56a02d6",
          "message": "Update README.md",
          "timestamp": "2023-02-16T22:56:18+08:00",
          "tree_id": "bafe1f877360eb6d7b437cbd141660f16c284b9c",
          "url": "https://github.com/Yiling-J/theine/commit/2df0157b16a5097283b744e9ba2a6af4e56a02d6"
        },
        "date": 1676559450802,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 28.139902602225593,
            "unit": "iter/sec",
            "range": "stddev: 0.0032412460545957924",
            "extra": "mean: 35.53672569999975 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 132.41655175115656,
            "unit": "iter/sec",
            "range": "stddev: 0.0001387329475476075",
            "extra": "mean: 7.551926000000719 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 49.554135918758014,
            "unit": "iter/sec",
            "range": "stddev: 0.0008229795887240527",
            "extra": "mean: 20.17995030000037 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 62.6861304009049,
            "unit": "iter/sec",
            "range": "stddev: 0.0006360954830163546",
            "extra": "mean: 15.952492099999917 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 50.22486399872593,
            "unit": "iter/sec",
            "range": "stddev: 0.00115832414926721",
            "extra": "mean: 19.910457100000656 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 11.206292578924963,
            "unit": "iter/sec",
            "range": "stddev: 0.0024358008397998166",
            "extra": "mean: 89.23557840000029 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 30.54887142006058,
            "unit": "iter/sec",
            "range": "stddev: 0.0011415254253609743",
            "extra": "mean: 32.73443349999923 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.2360534384782735,
            "unit": "iter/sec",
            "range": "stddev: 0.01691347296962435",
            "extra": "mean: 809.026510400001 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 18.809546792998425,
            "unit": "iter/sec",
            "range": "stddev: 0.002387383138094675",
            "extra": "mean: 53.16449200000051 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 42.42673022485449,
            "unit": "iter/sec",
            "range": "stddev: 0.0015384194584805327",
            "extra": "mean: 23.57004639999758 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 3.7097348050630417,
            "unit": "iter/sec",
            "range": "stddev: 0.01379820705907137",
            "extra": "mean: 269.5610474999995 msec\nrounds: 10"
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
          "id": "131645a65532a9dd4f82ea6e1301c520af33ed98",
          "message": "Update README.md",
          "timestamp": "2023-02-17T10:18:05+08:00",
          "tree_id": "a05876f87abb7457e8df76112f794b45cb69092e",
          "url": "https://github.com/Yiling-J/theine/commit/131645a65532a9dd4f82ea6e1301c520af33ed98"
        },
        "date": 1676600337681,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 34.864157111174706,
            "unit": "iter/sec",
            "range": "stddev: 0.0022849021407331223",
            "extra": "mean: 28.68275279999466 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 158.50124519368322,
            "unit": "iter/sec",
            "range": "stddev: 0.00017376403524803553",
            "extra": "mean: 6.309098700000959 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 54.96056922660999,
            "unit": "iter/sec",
            "range": "stddev: 0.001060937999627177",
            "extra": "mean: 18.19486250000182 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 75.0993227971136,
            "unit": "iter/sec",
            "range": "stddev: 0.0006302815107630901",
            "extra": "mean: 13.315699300000006 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 62.569274354206875,
            "unit": "iter/sec",
            "range": "stddev: 0.00011392860691898867",
            "extra": "mean: 15.982285400002638 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 14.572829377573596,
            "unit": "iter/sec",
            "range": "stddev: 0.0004580446305328184",
            "extra": "mean: 68.62085420000312 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 38.963180721544155,
            "unit": "iter/sec",
            "range": "stddev: 0.0002858125062533246",
            "extra": "mean: 25.665255799998477 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.5727806069973262,
            "unit": "iter/sec",
            "range": "stddev: 0.004328473528849487",
            "extra": "mean: 635.8165885000005 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 24.481320684992294,
            "unit": "iter/sec",
            "range": "stddev: 0.0013639123474072155",
            "extra": "mean: 40.847469500002376 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 54.21368522453624,
            "unit": "iter/sec",
            "range": "stddev: 0.0006779777295852587",
            "extra": "mean: 18.445527099999026 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.695903207261618,
            "unit": "iter/sec",
            "range": "stddev: 0.017046274475177158",
            "extra": "mean: 212.95157840000343 msec\nrounds: 10"
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
          "id": "84ebed008043b8e20550761efef20d307997faf5",
          "message": "Merge branch 'main' of github.com:Yiling-J/theine into main",
          "timestamp": "2023-02-20T22:04:40+08:00",
          "tree_id": "8fd3dd34dc517648d6bab4816c208bd190f12900",
          "url": "https://github.com/Yiling-J/theine/commit/84ebed008043b8e20550761efef20d307997faf5"
        },
        "date": 1676901967879,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 34.93686778724413,
            "unit": "iter/sec",
            "range": "stddev: 0.002372857883176498",
            "extra": "mean: 28.623058200000173 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 158.8525003700665,
            "unit": "iter/sec",
            "range": "stddev: 0.00016148540292247742",
            "extra": "mean: 6.295148000002371 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 61.01904899383802,
            "unit": "iter/sec",
            "range": "stddev: 0.00038498416251370513",
            "extra": "mean: 16.388324899999418 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 74.71193803676262,
            "unit": "iter/sec",
            "range": "stddev: 0.0006537986516086305",
            "extra": "mean: 13.384741800004463 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 62.707871892217476,
            "unit": "iter/sec",
            "range": "stddev: 0.00015328023357786852",
            "extra": "mean: 15.946961200003784 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 28.444187319106863,
            "unit": "iter/sec",
            "range": "stddev: 0.00023091557178325211",
            "extra": "mean: 35.15656779999716 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 38.09004362901721,
            "unit": "iter/sec",
            "range": "stddev: 0.00042392326171398695",
            "extra": "mean: 26.253579800003024 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.5598394600686565,
            "unit": "iter/sec",
            "range": "stddev: 0.0019510564734857999",
            "extra": "mean: 641.091615900001 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 41.168098861600335,
            "unit": "iter/sec",
            "range": "stddev: 0.0005177898533923744",
            "extra": "mean: 24.290652899999543 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 54.1845386239626,
            "unit": "iter/sec",
            "range": "stddev: 0.00039170747909938975",
            "extra": "mean: 18.455449200000373 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.569772815828285,
            "unit": "iter/sec",
            "range": "stddev: 0.005871599283249266",
            "extra": "mean: 218.82925919999963 msec\nrounds: 10"
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
          "id": "ad108619e9d5e65a2843ed04ccce8d9eaefda5b9",
          "message": "Update README.md",
          "timestamp": "2023-02-20T22:16:48+08:00",
          "tree_id": "65b800d669b1611ebcf782afab11fb44bab65849",
          "url": "https://github.com/Yiling-J/theine/commit/ad108619e9d5e65a2843ed04ccce8d9eaefda5b9"
        },
        "date": 1676902671166,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 32.167656487438464,
            "unit": "iter/sec",
            "range": "stddev: 0.0025265480018401955",
            "extra": "mean: 31.087126299999568 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 163.5053239296074,
            "unit": "iter/sec",
            "range": "stddev: 0.00012808409423035262",
            "extra": "mean: 6.116008799997985 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 60.04898255556282,
            "unit": "iter/sec",
            "range": "stddev: 0.0003428619920642278",
            "extra": "mean: 16.653071499999328 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 69.92188417999412,
            "unit": "iter/sec",
            "range": "stddev: 0.0005142369157007216",
            "extra": "mean: 14.30167409999683 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 58.462291257980795,
            "unit": "iter/sec",
            "range": "stddev: 0.000431619356013073",
            "extra": "mean: 17.105042899999034 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 27.78266961132943,
            "unit": "iter/sec",
            "range": "stddev: 0.0003288791635475696",
            "extra": "mean: 35.99366130000021 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 36.900922245179316,
            "unit": "iter/sec",
            "range": "stddev: 0.0002913064625092818",
            "extra": "mean: 27.09959370000945 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.5468757416906562,
            "unit": "iter/sec",
            "range": "stddev: 0.0007695939014604574",
            "extra": "mean: 646.4643365000029 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 39.733809067822634,
            "unit": "iter/sec",
            "range": "stddev: 0.00038283249874748856",
            "extra": "mean: 25.167483899997478 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 51.50451406934417,
            "unit": "iter/sec",
            "range": "stddev: 0.00031966176841637117",
            "extra": "mean: 19.41577390000475 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.723862819779512,
            "unit": "iter/sec",
            "range": "stddev: 0.01190375125308281",
            "extra": "mean: 211.69116000000088 msec\nrounds: 10"
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
          "id": "a7bc7667a42af1e4c3551c81009f46db4955698c",
          "message": "optimize auto key metadata storage",
          "timestamp": "2023-02-20T23:48:26+08:00",
          "tree_id": "4597c7c3d952471c4cbaacf5d6b462f15cdb722b",
          "url": "https://github.com/Yiling-J/theine/commit/a7bc7667a42af1e4c3551c81009f46db4955698c"
        },
        "date": 1676908196696,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 35.33176796877049,
            "unit": "iter/sec",
            "range": "stddev: 0.002233860219957573",
            "extra": "mean: 28.303140700003837 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 156.83660566372583,
            "unit": "iter/sec",
            "range": "stddev: 0.00013545035735066592",
            "extra": "mean: 6.376062500001467 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 49.30989714133948,
            "unit": "iter/sec",
            "range": "stddev: 0.0007552128809869935",
            "extra": "mean: 20.279904399995985 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 70.66286159405682,
            "unit": "iter/sec",
            "range": "stddev: 0.0008997750315589153",
            "extra": "mean: 14.15170539999906 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 61.817401817455504,
            "unit": "iter/sec",
            "range": "stddev: 0.0001672356142614187",
            "extra": "mean: 16.176674699997307 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 27.214117835253507,
            "unit": "iter/sec",
            "range": "stddev: 0.00040436320682608396",
            "extra": "mean: 36.745633499998576 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 38.52830104250967,
            "unit": "iter/sec",
            "range": "stddev: 0.00048687293920744213",
            "extra": "mean: 25.95494670000278 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.5490871675226618,
            "unit": "iter/sec",
            "range": "stddev: 0.0021542333799677983",
            "extra": "mean: 645.5414652999963 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 39.03550633744278,
            "unit": "iter/sec",
            "range": "stddev: 0.00033331407056474234",
            "extra": "mean: 25.617702799996778 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 54.634191200133905,
            "unit": "iter/sec",
            "range": "stddev: 0.0004882667372716305",
            "extra": "mean: 18.303556399999366 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.588294403333147,
            "unit": "iter/sec",
            "range": "stddev: 0.007243636865976709",
            "extra": "mean: 217.94591019999814 msec\nrounds: 10"
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
          "id": "3378c5e43c2fb04f11f7b1aa2a8dfaafd312d9f8",
          "message": "add API docstring",
          "timestamp": "2023-02-21T00:18:32+08:00",
          "tree_id": "4e48e371b1bf2bbcc30323deb0553180a14df892",
          "url": "https://github.com/Yiling-J/theine/commit/3378c5e43c2fb04f11f7b1aa2a8dfaafd312d9f8"
        },
        "date": 1676910000631,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 34.583772094769316,
            "unit": "iter/sec",
            "range": "stddev: 0.001910699784243998",
            "extra": "mean: 28.91529579999883 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 161.971740304613,
            "unit": "iter/sec",
            "range": "stddev: 0.0001462271451550584",
            "extra": "mean: 6.173916499997745 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 54.1283433034258,
            "unit": "iter/sec",
            "range": "stddev: 0.00042920777772874146",
            "extra": "mean: 18.474609400001896 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 69.3605947104659,
            "unit": "iter/sec",
            "range": "stddev: 0.00034838688517832946",
            "extra": "mean: 14.417408100007378 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 58.35913147373214,
            "unit": "iter/sec",
            "range": "stddev: 0.0005144459322133057",
            "extra": "mean: 17.135278999998604 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 26.564238998849902,
            "unit": "iter/sec",
            "range": "stddev: 0.00037617968344103313",
            "extra": "mean: 37.644594300002154 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 36.947966847041386,
            "unit": "iter/sec",
            "range": "stddev: 0.0003188749131867351",
            "extra": "mean: 27.06508870000448 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.559018832744818,
            "unit": "iter/sec",
            "range": "stddev: 0.0018082336118068843",
            "extra": "mean: 641.4290700000038 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 37.56451235441367,
            "unit": "iter/sec",
            "range": "stddev: 0.00025956780741570346",
            "extra": "mean: 26.6208699999936 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 51.02370648143951,
            "unit": "iter/sec",
            "range": "stddev: 0.0003288328981124901",
            "extra": "mean: 19.598732999997992 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.71614985504868,
            "unit": "iter/sec",
            "range": "stddev: 0.009139888599813158",
            "extra": "mean: 212.03736749999393 msec\nrounds: 10"
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
          "id": "599b2264de0e41402ebcfab50069f3c170b957a4",
          "message": "cache key support any hashable now",
          "timestamp": "2023-02-21T15:26:36+08:00",
          "tree_id": "fa47f4c55cd73b1dff3f73186e66836b741797bc",
          "url": "https://github.com/Yiling-J/theine/commit/599b2264de0e41402ebcfab50069f3c170b957a4"
        },
        "date": 1676964500353,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 31.076416846888065,
            "unit": "iter/sec",
            "range": "stddev: 0.002999604445459787",
            "extra": "mean: 32.17874199998505 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 135.02006701977336,
            "unit": "iter/sec",
            "range": "stddev: 0.00011181015529817321",
            "extra": "mean: 7.406306500007531 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 61.67542691062233,
            "unit": "iter/sec",
            "range": "stddev: 0.0011616001266156251",
            "extra": "mean: 16.21391290001384 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 64.64077354215887,
            "unit": "iter/sec",
            "range": "stddev: 0.0007877650675996495",
            "extra": "mean: 15.470111900003758 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 61.323380254407304,
            "unit": "iter/sec",
            "range": "stddev: 0.0004358076251149817",
            "extra": "mean: 16.30699409998897 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 32.37752358271951,
            "unit": "iter/sec",
            "range": "stddev: 0.0002809616811232293",
            "extra": "mean: 30.885623399984752 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 34.17686869267789,
            "unit": "iter/sec",
            "range": "stddev: 0.0005302834041031924",
            "extra": "mean: 29.25955589998921 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.5384262827014392,
            "unit": "iter/sec",
            "range": "stddev: 0.002252978053889947",
            "extra": "mean: 650.0148959 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 46.9552171190195,
            "unit": "iter/sec",
            "range": "stddev: 0.00044414473935779975",
            "extra": "mean: 21.296888000011904 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 49.237467707974,
            "unit": "iter/sec",
            "range": "stddev: 0.0005956999121768501",
            "extra": "mean: 20.30973660000086 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.540595200471073,
            "unit": "iter/sec",
            "range": "stddev: 0.006933269002438544",
            "extra": "mean: 220.2354439999965 msec\nrounds: 10"
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
          "id": "ec5f76463b962a041b872b69b96cca3c5e3a8238",
          "message": "Update README.md",
          "timestamp": "2023-02-21T19:26:21+08:00",
          "tree_id": "2917ef3494cd604d60f37c0950bd944bd5341c59",
          "url": "https://github.com/Yiling-J/theine/commit/ec5f76463b962a041b872b69b96cca3c5e3a8238"
        },
        "date": 1676978853217,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 28.191256747844566,
            "unit": "iter/sec",
            "range": "stddev: 0.003662273698134921",
            "extra": "mean: 35.4719908000007 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 132.13984100379298,
            "unit": "iter/sec",
            "range": "stddev: 0.0001338008205237783",
            "extra": "mean: 7.567740300000025 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 61.91425094183781,
            "unit": "iter/sec",
            "range": "stddev: 0.0002096100497038601",
            "extra": "mean: 16.151370399997234 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 65.28578398202723,
            "unit": "iter/sec",
            "range": "stddev: 0.0002672142910717985",
            "extra": "mean: 15.317270299998142 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 57.530313944946755,
            "unit": "iter/sec",
            "range": "stddev: 0.00027878435389855485",
            "extra": "mean: 17.38214049999698 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 30.83742350896664,
            "unit": "iter/sec",
            "range": "stddev: 0.00022394338172862293",
            "extra": "mean: 32.42813069999926 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 31.97808012611777,
            "unit": "iter/sec",
            "range": "stddev: 0.00024184790180541821",
            "extra": "mean: 31.271420800001692 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.5475184341421167,
            "unit": "iter/sec",
            "range": "stddev: 0.0018461110891371752",
            "extra": "mean: 646.1958564999975 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 44.69826962762881,
            "unit": "iter/sec",
            "range": "stddev: 0.0002091355003702866",
            "extra": "mean: 22.37223069999743 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 46.47150894523589,
            "unit": "iter/sec",
            "range": "stddev: 0.00036408774598562204",
            "extra": "mean: 21.51856099999776 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.7827193249408175,
            "unit": "iter/sec",
            "range": "stddev: 0.008054704332309447",
            "extra": "mean: 209.08607260000025 msec\nrounds: 10"
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
          "id": "db7b1c77511280364c0cb7478535a0ac0eaba072",
          "message": "Update README.md",
          "timestamp": "2023-02-21T19:58:05+08:00",
          "tree_id": "e668584471d39bcf76cb367a996f82383ffbd0ee",
          "url": "https://github.com/Yiling-J/theine/commit/db7b1c77511280364c0cb7478535a0ac0eaba072"
        },
        "date": 1676980743260,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 29.771587173180983,
            "unit": "iter/sec",
            "range": "stddev: 0.002814468446828578",
            "extra": "mean: 33.58907249999845 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 130.9592087602655,
            "unit": "iter/sec",
            "range": "stddev: 0.00010124896702162215",
            "extra": "mean: 7.635965499994768 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 61.81571433715073,
            "unit": "iter/sec",
            "range": "stddev: 0.00033266631462267596",
            "extra": "mean: 16.177116300005423 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 67.00988594167433,
            "unit": "iter/sec",
            "range": "stddev: 0.0003282576829175721",
            "extra": "mean: 14.92317119999882 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 59.123682611280024,
            "unit": "iter/sec",
            "range": "stddev: 0.0005909620031132252",
            "extra": "mean: 16.913696099999243 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 31.2365908148628,
            "unit": "iter/sec",
            "range": "stddev: 0.0003379893003557769",
            "extra": "mean: 32.01373690000082 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 32.14058621530813,
            "unit": "iter/sec",
            "range": "stddev: 0.0003374471356539162",
            "extra": "mean: 31.11330929999383 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.5569754416969772,
            "unit": "iter/sec",
            "range": "stddev: 0.0018533553941739846",
            "extra": "mean: 642.2708882999984 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 44.506637426161966,
            "unit": "iter/sec",
            "range": "stddev: 0.0002820261878358861",
            "extra": "mean: 22.468558799999983 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 46.84138866880632,
            "unit": "iter/sec",
            "range": "stddev: 0.00031715911229609735",
            "extra": "mean: 21.348641199998042 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.785983399919983,
            "unit": "iter/sec",
            "range": "stddev: 0.008083904813131834",
            "extra": "mean: 208.94347439999876 msec\nrounds: 10"
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
          "id": "7b9c5bd84f77719361eee0c17f0e72193ca90cf2",
          "message": "use closure wrapper and fix set/delete",
          "timestamp": "2023-02-21T20:05:52+08:00",
          "tree_id": "07caacfdbc5e478a252c07fbfc98b39db7c6c624",
          "url": "https://github.com/Yiling-J/theine/commit/7b9c5bd84f77719361eee0c17f0e72193ca90cf2"
        },
        "date": 1676981281783,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 26.149080757435545,
            "unit": "iter/sec",
            "range": "stddev: 0.003858554519804146",
            "extra": "mean: 38.24226210000319 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 113.52431642606318,
            "unit": "iter/sec",
            "range": "stddev: 0.0002574322693510112",
            "extra": "mean: 8.808685500002866 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 56.99143545815868,
            "unit": "iter/sec",
            "range": "stddev: 0.00047136557138931386",
            "extra": "mean: 17.546496100000297 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 61.28824407880175,
            "unit": "iter/sec",
            "range": "stddev: 0.0018200453037157107",
            "extra": "mean: 16.31634280000327 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 50.44446237464865,
            "unit": "iter/sec",
            "range": "stddev: 0.0002464007258102648",
            "extra": "mean: 19.823781499999882 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 32.88091128419528,
            "unit": "iter/sec",
            "range": "stddev: 0.0007897992941708627",
            "extra": "mean: 30.41278240000196 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 34.926681438811855,
            "unit": "iter/sec",
            "range": "stddev: 0.0002463126993964843",
            "extra": "mean: 28.6314061000013 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.2563670884295748,
            "unit": "iter/sec",
            "range": "stddev: 0.019984553143598056",
            "extra": "mean: 795.9457146000005 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 45.390300023891854,
            "unit": "iter/sec",
            "range": "stddev: 0.001146506383611219",
            "extra": "mean: 22.031138799999894 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 49.19621235803201,
            "unit": "iter/sec",
            "range": "stddev: 0.0008592646855468016",
            "extra": "mean: 20.32676809999856 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 3.7291326968548937,
            "unit": "iter/sec",
            "range": "stddev: 0.011148773771726609",
            "extra": "mean: 268.1588672999993 msec\nrounds: 10"
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
          "id": "807195a41c25153fcb8bca13888ec4d896d1bd37",
          "message": "update read/write benchmark",
          "timestamp": "2023-02-21T20:29:18+08:00",
          "tree_id": "eeeedd9b0169854d56c17ddf5872608c456e703b",
          "url": "https://github.com/Yiling-J/theine/commit/807195a41c25153fcb8bca13888ec4d896d1bd37"
        },
        "date": 1676982642242,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 60.23249284471007,
            "unit": "iter/sec",
            "range": "stddev: 0.00037955441289197906",
            "extra": "mean: 16.60233460000029 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 105.57768493153532,
            "unit": "iter/sec",
            "range": "stddev: 0.0001533031762714861",
            "extra": "mean: 9.471698500004777 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 77.41258947783213,
            "unit": "iter/sec",
            "range": "stddev: 0.00007056021444818382",
            "extra": "mean: 12.917795499998874 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 82.25706476109846,
            "unit": "iter/sec",
            "range": "stddev: 0.0000961307570772417",
            "extra": "mean: 12.157010500001775 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 59.09246408225375,
            "unit": "iter/sec",
            "range": "stddev: 0.0005191793683583611",
            "extra": "mean: 16.922631599996407 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 38.56064257577919,
            "unit": "iter/sec",
            "range": "stddev: 0.0001851445989286005",
            "extra": "mean: 25.933177800001772 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 39.8594476158167,
            "unit": "iter/sec",
            "range": "stddev: 0.00019232982718214606",
            "extra": "mean: 25.088155000000256 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.5605261131958155,
            "unit": "iter/sec",
            "range": "stddev: 0.0006256226361033668",
            "extra": "mean: 640.8095266999993 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 43.87019894358958,
            "unit": "iter/sec",
            "range": "stddev: 0.014037052203301002",
            "extra": "mean: 22.794517099998757 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 57.45658916243126,
            "unit": "iter/sec",
            "range": "stddev: 0.0002931989496593034",
            "extra": "mean: 17.404444200002445 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.811082920693727,
            "unit": "iter/sec",
            "range": "stddev: 0.010793171393013728",
            "extra": "mean: 207.85341189999826 msec\nrounds: 10"
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
          "id": "81d9f748b26d93ea790d2fe811a1a4fea9dfdd05",
          "message": "update bench",
          "timestamp": "2023-02-21T20:32:11+08:00",
          "tree_id": "77bde9605394e4b19a7eb14f37cb7b23f5f12c20",
          "url": "https://github.com/Yiling-J/theine/commit/81d9f748b26d93ea790d2fe811a1a4fea9dfdd05"
        },
        "date": 1676982838768,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 59.547386389889375,
            "unit": "iter/sec",
            "range": "stddev: 0.00038965530667684547",
            "extra": "mean: 16.793348299998456 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 103.34787375912806,
            "unit": "iter/sec",
            "range": "stddev: 0.0001852689656555224",
            "extra": "mean: 9.676057799995874 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 75.08855831936631,
            "unit": "iter/sec",
            "range": "stddev: 0.0002470099090128093",
            "extra": "mean: 13.317608199997721 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 79.31053071510443,
            "unit": "iter/sec",
            "range": "stddev: 0.00031951430479976953",
            "extra": "mean: 12.608666099993115 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 59.729528329835446,
            "unit": "iter/sec",
            "range": "stddev: 0.00034353415193629796",
            "extra": "mean: 16.742137899998966 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 38.60654434512107,
            "unit": "iter/sec",
            "range": "stddev: 0.0002786848466771976",
            "extra": "mean: 25.902344200002858 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 39.67698254325194,
            "unit": "iter/sec",
            "range": "stddev: 0.0004326187151773066",
            "extra": "mean: 25.20352950000415 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.5477327816569795,
            "unit": "iter/sec",
            "range": "stddev: 0.006335315392648871",
            "extra": "mean: 646.106364000002 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 42.93886361163997,
            "unit": "iter/sec",
            "range": "stddev: 0.015656584247503432",
            "extra": "mean: 23.28892559999929 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 57.53684876996631,
            "unit": "iter/sec",
            "range": "stddev: 0.0004315581099530541",
            "extra": "mean: 17.38016630000061 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.812974734892329,
            "unit": "iter/sec",
            "range": "stddev: 0.009597539650010275",
            "extra": "mean: 207.77171189999422 msec\nrounds: 10"
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
          "id": "0c06f09aeeccede8874161aa4466844abc33d67d",
          "message": "release 0.1.4",
          "timestamp": "2023-02-21T21:38:57+08:00",
          "tree_id": "6eba3e8c0023124c4ff978800a7c24f52cd06636",
          "url": "https://github.com/Yiling-J/theine/commit/0c06f09aeeccede8874161aa4466844abc33d67d"
        },
        "date": 1676986844641,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 50.88028463814842,
            "unit": "iter/sec",
            "range": "stddev: 0.0006552249788382846",
            "extra": "mean: 19.653978100001268 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 72.36087148106006,
            "unit": "iter/sec",
            "range": "stddev: 0.0019521673982454972",
            "extra": "mean: 13.819623499998102 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 61.07286755288183,
            "unit": "iter/sec",
            "range": "stddev: 0.0007329212045978743",
            "extra": "mean: 16.373883200000705 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 65.99001778238174,
            "unit": "iter/sec",
            "range": "stddev: 0.0009432609504636744",
            "extra": "mean: 15.153807100003291 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 51.513589810425216,
            "unit": "iter/sec",
            "range": "stddev: 0.0013432381374963135",
            "extra": "mean: 19.41235320000203 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 33.439818086854714,
            "unit": "iter/sec",
            "range": "stddev: 0.0017470382725814036",
            "extra": "mean: 29.90446889999987 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 33.13693524684135,
            "unit": "iter/sec",
            "range": "stddev: 0.002770420492568982",
            "extra": "mean: 30.17780589999859 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.2593481828046176,
            "unit": "iter/sec",
            "range": "stddev: 0.013833476678569587",
            "extra": "mean: 794.0615737999963 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 35.58319797544057,
            "unit": "iter/sec",
            "range": "stddev: 0.022550056275791226",
            "extra": "mean: 28.10315140000057 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 49.858899812120235,
            "unit": "iter/sec",
            "range": "stddev: 0.0019326690249602163",
            "extra": "mean: 20.056599800000185 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 3.805334088853517,
            "unit": "iter/sec",
            "range": "stddev: 0.01859330602594956",
            "extra": "mean: 262.78901579999854 msec\nrounds: 10"
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
          "id": "3d38f5aec7d1cdba430fafcaa5a27b6393977158",
          "message": "bump core to 0.2.0 and optimize",
          "timestamp": "2023-02-24T23:38:31+08:00",
          "tree_id": "c5df357a8788ae875f0c1ea5d5a6a16603e040c2",
          "url": "https://github.com/Yiling-J/theine/commit/3d38f5aec7d1cdba430fafcaa5a27b6393977158"
        },
        "date": 1677253704064,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 65.15140779976609,
            "unit": "iter/sec",
            "range": "stddev: 0.0008817212887641039",
            "extra": "mean: 15.348862499999427 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 131.38012947268115,
            "unit": "iter/sec",
            "range": "stddev: 0.0007879602388837914",
            "extra": "mean: 7.611501100004148 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 80.84849329495972,
            "unit": "iter/sec",
            "range": "stddev: 0.0013993610715035555",
            "extra": "mean: 12.368814299998121 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 96.75316970877189,
            "unit": "iter/sec",
            "range": "stddev: 0.000663303907094451",
            "extra": "mean: 10.335578700005499 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 47.309500207478365,
            "unit": "iter/sec",
            "range": "stddev: 0.001371613241565828",
            "extra": "mean: 21.1374036000052 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cacheout_lfu]",
            "value": 15.052827967490519,
            "unit": "iter/sec",
            "range": "stddev: 0.003286766089767897",
            "extra": "mean: 66.43269969999608 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_lru_custom]",
            "value": 109.8317059752543,
            "unit": "iter/sec",
            "range": "stddev: 0.00018633497733154812",
            "extra": "mean: 9.104838999999743 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lru]",
            "value": 55.6779610784106,
            "unit": "iter/sec",
            "range": "stddev: 0.000564648040130887",
            "extra": "mean: 17.960427799999934 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cacheout_lru]",
            "value": 16.06450451180341,
            "unit": "iter/sec",
            "range": "stddev: 0.0020984138264545722",
            "extra": "mean: 62.24904100000401 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 34.92133445594665,
            "unit": "iter/sec",
            "range": "stddev: 0.002524948432464364",
            "extra": "mean: 28.635789999992767 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 37.286238646350455,
            "unit": "iter/sec",
            "range": "stddev: 0.002607788145735455",
            "extra": "mean: 26.819546199999422 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.2906273538848858,
            "unit": "iter/sec",
            "range": "stddev: 0.009526260017847578",
            "extra": "mean: 774.8169888000007 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cacheout_lfu]",
            "value": 1.1360597336717955,
            "unit": "iter/sec",
            "range": "stddev: 0.014399089980689072",
            "extra": "mean: 880.2354052000027 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_lru_custom]",
            "value": 28.612463094497034,
            "unit": "iter/sec",
            "range": "stddev: 0.02861844204521743",
            "extra": "mean: 34.94980480000436 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lru]",
            "value": 12.809147986072118,
            "unit": "iter/sec",
            "range": "stddev: 0.004456384768854832",
            "extra": "mean: 78.0692049999999 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cacheout_lru]",
            "value": 8.492521234846597,
            "unit": "iter/sec",
            "range": "stddev: 0.004078865698492788",
            "extra": "mean: 117.75066229999993 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 51.83790004583,
            "unit": "iter/sec",
            "range": "stddev: 0.0020482736222426474",
            "extra": "mean: 19.290904900003625 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 57.00243896335938,
            "unit": "iter/sec",
            "range": "stddev: 0.001672064278086155",
            "extra": "mean: 17.543108999998935 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 3.7030716168088347,
            "unit": "iter/sec",
            "range": "stddev: 0.014739418292422916",
            "extra": "mean: 270.0460870000029 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cacheout_lfu]",
            "value": 2.982171217905395,
            "unit": "iter/sec",
            "range": "stddev: 0.010920243141594413",
            "extra": "mean: 335.32615229999294 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_lru_custom]",
            "value": 57.45899753231702,
            "unit": "iter/sec",
            "range": "stddev: 0.000718875547311909",
            "extra": "mean: 17.40371469999218 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lru]",
            "value": 18.877345499086147,
            "unit": "iter/sec",
            "range": "stddev: 0.007275353424740949",
            "extra": "mean: 52.973549700004696 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cacheout_lru]",
            "value": 11.3547683153882,
            "unit": "iter/sec",
            "range": "stddev: 0.004918003823097545",
            "extra": "mean: 88.06872780000106 msec\nrounds: 10"
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
          "id": "a331c70621988cd932e3cc97723f2f3c98226b98",
          "message": "update doc",
          "timestamp": "2023-02-24T23:50:33+08:00",
          "tree_id": "0d21077f855f9ded8abda538934285f96122948d",
          "url": "https://github.com/Yiling-J/theine/commit/a331c70621988cd932e3cc97723f2f3c98226b98"
        },
        "date": 1677253929842,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 76.46437244645344,
            "unit": "iter/sec",
            "range": "stddev: 0.00026649502548792205",
            "extra": "mean: 13.077986100000771 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 186.95056281179302,
            "unit": "iter/sec",
            "range": "stddev: 0.00014430166592569214",
            "extra": "mean: 5.349007700002062 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 112.39593148311327,
            "unit": "iter/sec",
            "range": "stddev: 0.00021814331458136428",
            "extra": "mean: 8.897119199997405 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 128.35161689284575,
            "unit": "iter/sec",
            "range": "stddev: 0.00013160313963233179",
            "extra": "mean: 7.791097799997715 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 59.70086131211086,
            "unit": "iter/sec",
            "range": "stddev: 0.000588196323697862",
            "extra": "mean: 16.75017709999338 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cacheout_lfu]",
            "value": 19.977065609506706,
            "unit": "iter/sec",
            "range": "stddev: 0.0003008939463745534",
            "extra": "mean: 50.05740179999805 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_lru_custom]",
            "value": 139.8782712142306,
            "unit": "iter/sec",
            "range": "stddev: 0.00009487895486326685",
            "extra": "mean: 7.149073200000089 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lru]",
            "value": 71.15908992189185,
            "unit": "iter/sec",
            "range": "stddev: 0.00014517752610891744",
            "extra": "mean: 14.053018400005612 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cacheout_lru]",
            "value": 20.875723403312143,
            "unit": "iter/sec",
            "range": "stddev: 0.0005559036002764282",
            "extra": "mean: 47.902531599999065 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 46.10782267303139,
            "unit": "iter/sec",
            "range": "stddev: 0.0001340776999258441",
            "extra": "mean: 21.688293699995143 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 47.71775679798558,
            "unit": "iter/sec",
            "range": "stddev: 0.0003284197504829443",
            "extra": "mean: 20.956559300000777 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.555895498806596,
            "unit": "iter/sec",
            "range": "stddev: 0.0012704607905455162",
            "extra": "mean: 642.7166867999944 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cacheout_lfu]",
            "value": 1.4190384394257953,
            "unit": "iter/sec",
            "range": "stddev: 0.00816234588354348",
            "extra": "mean: 704.7025452000042 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_lru_custom]",
            "value": 51.64614761779318,
            "unit": "iter/sec",
            "range": "stddev: 0.00017091463579995875",
            "extra": "mean: 19.362528399997814 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lru]",
            "value": 16.37567590049618,
            "unit": "iter/sec",
            "range": "stddev: 0.0005883978530118328",
            "extra": "mean: 61.06618169999933 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cacheout_lru]",
            "value": 10.532341807862764,
            "unit": "iter/sec",
            "range": "stddev: 0.0008595606369259177",
            "extra": "mean: 94.94564629999616 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 67.75625408517396,
            "unit": "iter/sec",
            "range": "stddev: 0.00018561559531344077",
            "extra": "mean: 14.758785200004354 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 49.72234075337472,
            "unit": "iter/sec",
            "range": "stddev: 0.018963552203344374",
            "extra": "mean: 20.1116839000008 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.7651729194454315,
            "unit": "iter/sec",
            "range": "stddev: 0.009463613416684308",
            "extra": "mean: 209.8559731000023 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cacheout_lfu]",
            "value": 3.984816499082633,
            "unit": "iter/sec",
            "range": "stddev: 0.003480526856927889",
            "extra": "mean: 250.95258470000203 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_lru_custom]",
            "value": 73.8880682510641,
            "unit": "iter/sec",
            "range": "stddev: 0.00025328427955583757",
            "extra": "mean: 13.53398489999904 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lru]",
            "value": 27.106916164034377,
            "unit": "iter/sec",
            "range": "stddev: 0.000279557108964532",
            "extra": "mean: 36.890954100002205 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cacheout_lru]",
            "value": 14.651447700023619,
            "unit": "iter/sec",
            "range": "stddev: 0.0005197529825362296",
            "extra": "mean: 68.25264100000084 msec\nrounds: 10"
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
          "id": "d86484587b6d787b08c2001b6cdbfb7c5309309f",
          "message": "update benchmark",
          "timestamp": "2023-02-25T00:15:47+08:00",
          "tree_id": "3495a1d5f4c55ddcfaa7b35054b7d15b9030bc34",
          "url": "https://github.com/Yiling-J/theine/commit/d86484587b6d787b08c2001b6cdbfb7c5309309f"
        },
        "date": 1677255444740,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 85.66445005332129,
            "unit": "iter/sec",
            "range": "stddev: 0.0002694130744270079",
            "extra": "mean: 11.67345380000171 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 157.28870759095244,
            "unit": "iter/sec",
            "range": "stddev: 0.0002543186968476625",
            "extra": "mean: 6.357735499999251 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 105.13083248248225,
            "unit": "iter/sec",
            "range": "stddev: 0.00030402069524853876",
            "extra": "mean: 9.511957400000881 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 116.18080377343856,
            "unit": "iter/sec",
            "range": "stddev: 0.00023041279392083298",
            "extra": "mean: 8.607273899998802 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 60.680867980100686,
            "unit": "iter/sec",
            "range": "stddev: 0.00039793976368587337",
            "extra": "mean: 16.479658800001573 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cacheout_lfu]",
            "value": 20.1094852882733,
            "unit": "iter/sec",
            "range": "stddev: 0.0007163330224629199",
            "extra": "mean: 49.72777699999824 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_lru_custom]",
            "value": 121.69797493109229,
            "unit": "iter/sec",
            "range": "stddev: 0.0004665144174950384",
            "extra": "mean: 8.217063600000074 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lru]",
            "value": 70.97380776918781,
            "unit": "iter/sec",
            "range": "stddev: 0.00024700500785139045",
            "extra": "mean: 14.089704800002778 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cacheout_lru]",
            "value": 21.18919639580545,
            "unit": "iter/sec",
            "range": "stddev: 0.0012412988931035822",
            "extra": "mean: 47.193861500002754 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 49.80013438168436,
            "unit": "iter/sec",
            "range": "stddev: 0.0004026035742925418",
            "extra": "mean: 20.080267099997684 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 52.173210655956844,
            "unit": "iter/sec",
            "range": "stddev: 0.00036420276845920485",
            "extra": "mean: 19.16692470000072 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.525478219619521,
            "unit": "iter/sec",
            "range": "stddev: 0.0021326264836078446",
            "extra": "mean: 655.5321387999996 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cacheout_lfu]",
            "value": 1.41384830890574,
            "unit": "iter/sec",
            "range": "stddev: 0.0014342229189062536",
            "extra": "mean: 707.2894551000019 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_lru_custom]",
            "value": 55.921899921944664,
            "unit": "iter/sec",
            "range": "stddev: 0.0003404227280802278",
            "extra": "mean: 17.882081999999855 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lru]",
            "value": 16.769651078347728,
            "unit": "iter/sec",
            "range": "stddev: 0.0007715647817292522",
            "extra": "mean: 59.63153289999923 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cacheout_lru]",
            "value": 10.919511561774382,
            "unit": "iter/sec",
            "range": "stddev: 0.0014308301150349227",
            "extra": "mean: 91.57918779999932 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 70.37299807206877,
            "unit": "iter/sec",
            "range": "stddev: 0.0004985121043662824",
            "extra": "mean: 14.20999569999708 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 46.802030369422795,
            "unit": "iter/sec",
            "range": "stddev: 0.02451540362201807",
            "extra": "mean: 21.366594400001304 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.470976080897175,
            "unit": "iter/sec",
            "range": "stddev: 0.008807355446504734",
            "extra": "mean: 223.66480650000113 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cacheout_lfu]",
            "value": 3.7773300228978903,
            "unit": "iter/sec",
            "range": "stddev: 0.009347697011664652",
            "extra": "mean: 264.7372599000022 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_lru_custom]",
            "value": 77.37138996796659,
            "unit": "iter/sec",
            "range": "stddev: 0.0005308783621214699",
            "extra": "mean: 12.924674100000288 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lru]",
            "value": 26.67505010141248,
            "unit": "iter/sec",
            "range": "stddev: 0.0011065270613082971",
            "extra": "mean: 37.48821450000008 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cacheout_lru]",
            "value": 14.402873140441436,
            "unit": "iter/sec",
            "range": "stddev: 0.001194324081166109",
            "extra": "mean: 69.43059139999832 msec\nrounds: 10"
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
          "id": "d15cc9f658a84092ab21fa50ee03c783b157be44",
          "message": "release 0.2.0",
          "timestamp": "2023-02-25T12:57:24+08:00",
          "tree_id": "0f4262516701a0a07f0bd80727359c4926ea21dd",
          "url": "https://github.com/Yiling-J/theine/commit/d15cc9f658a84092ab21fa50ee03c783b157be44"
        },
        "date": 1677301136428,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 86.43520247190217,
            "unit": "iter/sec",
            "range": "stddev: 0.00022985955971899198",
            "extra": "mean: 11.56936029998974 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 182.23199090996962,
            "unit": "iter/sec",
            "range": "stddev: 0.00015813319519751635",
            "extra": "mean: 5.487510699995823 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 113.66413901861826,
            "unit": "iter/sec",
            "range": "stddev: 0.0002694121470677724",
            "extra": "mean: 8.797849600006202 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 126.82089440179594,
            "unit": "iter/sec",
            "range": "stddev: 0.0001973431705518536",
            "extra": "mean: 7.885136000001579 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 62.6122908390315,
            "unit": "iter/sec",
            "range": "stddev: 0.00023436296895042692",
            "extra": "mean: 15.97130509999829 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cacheout_lfu]",
            "value": 20.459772414903345,
            "unit": "iter/sec",
            "range": "stddev: 0.000726335429597964",
            "extra": "mean: 48.87639899999954 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_lru_custom]",
            "value": 134.0143100748444,
            "unit": "iter/sec",
            "range": "stddev: 0.00017645453507617492",
            "extra": "mean: 7.461889699999347 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lru]",
            "value": 72.50594240579333,
            "unit": "iter/sec",
            "range": "stddev: 0.00025576940623834877",
            "extra": "mean: 13.79197299999646 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cacheout_lru]",
            "value": 21.699288371404116,
            "unit": "iter/sec",
            "range": "stddev: 0.0009227838938010713",
            "extra": "mean: 46.08446059999949 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 50.2125209801679,
            "unit": "iter/sec",
            "range": "stddev: 0.0001710646165571297",
            "extra": "mean: 19.91535140000167 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 52.817507693927816,
            "unit": "iter/sec",
            "range": "stddev: 0.0002546166076834659",
            "extra": "mean: 18.933115999999472 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.5396564897871654,
            "unit": "iter/sec",
            "range": "stddev: 0.0033277996820834316",
            "extra": "mean: 649.4955248999958 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cacheout_lfu]",
            "value": 1.4204312602683895,
            "unit": "iter/sec",
            "range": "stddev: 0.004457253348580773",
            "extra": "mean: 704.0115407000059 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_lru_custom]",
            "value": 56.75031746695299,
            "unit": "iter/sec",
            "range": "stddev: 0.0002416504287511862",
            "extra": "mean: 17.621046799999363 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lru]",
            "value": 17.14742028696345,
            "unit": "iter/sec",
            "range": "stddev: 0.0006250906896226733",
            "extra": "mean: 58.317810099998724 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cacheout_lru]",
            "value": 11.231224313066924,
            "unit": "iter/sec",
            "range": "stddev: 0.0012856363517198147",
            "extra": "mean: 89.0374879999996 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 71.80891400957995,
            "unit": "iter/sec",
            "range": "stddev: 0.0001398947882691192",
            "extra": "mean: 13.925847700002691 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 50.00580492386895,
            "unit": "iter/sec",
            "range": "stddev: 0.02183276681325435",
            "extra": "mean: 19.997678299998256 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.4694914966424095,
            "unit": "iter/sec",
            "range": "stddev: 0.010686785919260162",
            "extra": "mean: 223.73909890000334 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cacheout_lfu]",
            "value": 3.855052627231766,
            "unit": "iter/sec",
            "range": "stddev: 0.009857757794396972",
            "extra": "mean: 259.39983099999324 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_lru_custom]",
            "value": 78.94623138754734,
            "unit": "iter/sec",
            "range": "stddev: 0.0002708833915278207",
            "extra": "mean: 12.666849100003219 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lru]",
            "value": 28.177261370478984,
            "unit": "iter/sec",
            "range": "stddev: 0.0007337696318973858",
            "extra": "mean: 35.48960939999972 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cacheout_lru]",
            "value": 14.978265054557482,
            "unit": "iter/sec",
            "range": "stddev: 0.0005125170052238153",
            "extra": "mean: 66.76340660000051 msec\nrounds: 10"
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
          "id": "5ddcd3e6fd2c9f8a498cae3c0a733a012875bbae",
          "message": "Update CHANGELOG.md",
          "timestamp": "2023-02-25T13:55:00+08:00",
          "tree_id": "5b53d6bbffabd64e6cbfc15593176e3d146e2126",
          "url": "https://github.com/Yiling-J/theine/commit/5ddcd3e6fd2c9f8a498cae3c0a733a012875bbae"
        },
        "date": 1677304573905,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 76.29617705949715,
            "unit": "iter/sec",
            "range": "stddev: 0.0002700406709682388",
            "extra": "mean: 13.10681660000057 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 185.59145863558626,
            "unit": "iter/sec",
            "range": "stddev: 0.00013090949257490314",
            "extra": "mean: 5.388179000001969 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 113.81146904805455,
            "unit": "iter/sec",
            "range": "stddev: 0.00011547602351512912",
            "extra": "mean: 8.78646070000002 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 119.67089355423846,
            "unit": "iter/sec",
            "range": "stddev: 0.0009357141301257921",
            "extra": "mean: 8.356250800005682 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 59.7393294670366,
            "unit": "iter/sec",
            "range": "stddev: 0.0007379008009166395",
            "extra": "mean: 16.739391099991963 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cacheout_lfu]",
            "value": 20.044290746781826,
            "unit": "iter/sec",
            "range": "stddev: 0.00033326671619083865",
            "extra": "mean: 49.889517800002636 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_lru_custom]",
            "value": 138.86445838764104,
            "unit": "iter/sec",
            "range": "stddev: 0.00008371733726007331",
            "extra": "mean: 7.201266699996722 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lru]",
            "value": 70.82915993165851,
            "unit": "iter/sec",
            "range": "stddev: 0.00009715744376603786",
            "extra": "mean: 14.118478900002174 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cacheout_lru]",
            "value": 21.047096591332263,
            "unit": "iter/sec",
            "range": "stddev: 0.0004666876312696132",
            "extra": "mean: 47.51249159999702 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 45.98500781141144,
            "unit": "iter/sec",
            "range": "stddev: 0.0002085541725410157",
            "extra": "mean: 21.746217899996623 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 47.5985761514248,
            "unit": "iter/sec",
            "range": "stddev: 0.00032884495462105897",
            "extra": "mean: 21.00903179999989 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.5561179675384678,
            "unit": "iter/sec",
            "range": "stddev: 0.0026174868385449796",
            "extra": "mean: 642.6248015000056 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cacheout_lfu]",
            "value": 1.4308777592480635,
            "unit": "iter/sec",
            "range": "stddev: 0.0034759778087551283",
            "extra": "mean: 698.8717194999992 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_lru_custom]",
            "value": 51.35994957603129,
            "unit": "iter/sec",
            "range": "stddev: 0.0002500532430527757",
            "extra": "mean: 19.470424100001082 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lru]",
            "value": 16.40249693570672,
            "unit": "iter/sec",
            "range": "stddev: 0.0002383054928432134",
            "extra": "mean: 60.96632749999742 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cacheout_lru]",
            "value": 10.69498815892606,
            "unit": "iter/sec",
            "range": "stddev: 0.00040536942104983073",
            "extra": "mean: 93.50173980000136 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 67.65443220150924,
            "unit": "iter/sec",
            "range": "stddev: 0.00014720576759947587",
            "extra": "mean: 14.78099760000191 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 49.49063986002701,
            "unit": "iter/sec",
            "range": "stddev: 0.018999608501867216",
            "extra": "mean: 20.205841000000646 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.725158951299324,
            "unit": "iter/sec",
            "range": "stddev: 0.010272364652656336",
            "extra": "mean: 211.63309220000315 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cacheout_lfu]",
            "value": 4.010680231296268,
            "unit": "iter/sec",
            "range": "stddev: 0.009591238536372946",
            "extra": "mean: 249.33426310000186 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_lru_custom]",
            "value": 74.29204638792778,
            "unit": "iter/sec",
            "range": "stddev: 0.00029677819907074663",
            "extra": "mean: 13.460391099988556 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lru]",
            "value": 27.166065224923017,
            "unit": "iter/sec",
            "range": "stddev: 0.00027286174375735914",
            "extra": "mean: 36.81063090000123 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cacheout_lru]",
            "value": 14.515163310349182,
            "unit": "iter/sec",
            "range": "stddev: 0.0004107125992450019",
            "extra": "mean: 68.8934721999999 msec\nrounds: 10"
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
          "id": "5a585bf1b741998d2658d4e9d0baf4a31edf094a",
          "message": "Refactor/one key map (#5)\n\n* remove key map\r\n\r\n* update bench\r\n\r\n* bump core to 0.3.0, remove extra key map",
          "timestamp": "2023-02-26T14:19:19+08:00",
          "tree_id": "c65c12f8f70f553338585a1cd276e21544c9090a",
          "url": "https://github.com/Yiling-J/theine/commit/5a585bf1b741998d2658d4e9d0baf4a31edf094a"
        },
        "date": 1677392439859,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 111.57347904649045,
            "unit": "iter/sec",
            "range": "stddev: 0.00018417564679138514",
            "extra": "mean: 8.962703400001715 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 272.4695932786735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000741544962431958",
            "extra": "mean: 3.6701343000032693 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 137.66941891228717,
            "unit": "iter/sec",
            "range": "stddev: 0.00011072456545069662",
            "extra": "mean: 7.2637773000053585 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 160.36723069480834,
            "unit": "iter/sec",
            "range": "stddev: 0.00008168523575500275",
            "extra": "mean: 6.2356878999992205 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 62.675928982303944,
            "unit": "iter/sec",
            "range": "stddev: 0.00013953986930775674",
            "extra": "mean: 15.95508860000052 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cacheout_lfu]",
            "value": 20.617777221519482,
            "unit": "iter/sec",
            "range": "stddev: 0.0008240059619888929",
            "extra": "mean: 48.5018335999996 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_lru_custom]",
            "value": 171.82682969059633,
            "unit": "iter/sec",
            "range": "stddev: 0.00009025483461384667",
            "extra": "mean: 5.819812900003285 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lru]",
            "value": 72.06582948321889,
            "unit": "iter/sec",
            "range": "stddev: 0.0004630643028198663",
            "extra": "mean: 13.876201899998364 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cacheout_lru]",
            "value": 21.748370182574803,
            "unit": "iter/sec",
            "range": "stddev: 0.0007287478596722522",
            "extra": "mean: 45.98045700000171 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 59.178727794421654,
            "unit": "iter/sec",
            "range": "stddev: 0.00035345344625995807",
            "extra": "mean: 16.897963799996774 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 62.47205351730247,
            "unit": "iter/sec",
            "range": "stddev: 0.00038868376765174796",
            "extra": "mean: 16.007157500001767 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.5269278797948433,
            "unit": "iter/sec",
            "range": "stddev: 0.010140819298696601",
            "extra": "mean: 654.909778800004 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cacheout_lfu]",
            "value": 1.4224795192049657,
            "unit": "iter/sec",
            "range": "stddev: 0.006885366455848294",
            "extra": "mean: 702.9978192999977 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_lru_custom]",
            "value": 69.92566656906152,
            "unit": "iter/sec",
            "range": "stddev: 0.00016786627370757835",
            "extra": "mean: 14.30090049999535 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lru]",
            "value": 17.08403724193572,
            "unit": "iter/sec",
            "range": "stddev: 0.0009006297264145427",
            "extra": "mean: 58.53417350000427 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cacheout_lru]",
            "value": 11.024922614827222,
            "unit": "iter/sec",
            "range": "stddev: 0.00107366111413353",
            "extra": "mean: 90.70358450000526 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 84.23137881326038,
            "unit": "iter/sec",
            "range": "stddev: 0.0005458883174733362",
            "extra": "mean: 11.872060199999623 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 93.6161298119949,
            "unit": "iter/sec",
            "range": "stddev: 0.0005009821007442483",
            "extra": "mean: 10.681919900002868 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.610082912230626,
            "unit": "iter/sec",
            "range": "stddev: 0.00545854703903283",
            "extra": "mean: 216.91583839999566 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cacheout_lfu]",
            "value": 3.8360544413643907,
            "unit": "iter/sec",
            "range": "stddev: 0.010441479018798147",
            "extra": "mean: 260.6845172000021 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_lru_custom]",
            "value": 100.13173431102877,
            "unit": "iter/sec",
            "range": "stddev: 0.0003073317281932019",
            "extra": "mean: 9.986843899994824 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lru]",
            "value": 27.498783598182236,
            "unit": "iter/sec",
            "range": "stddev: 0.0006849548124047301",
            "extra": "mean: 36.36524489999999 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cacheout_lru]",
            "value": 14.8198545533548,
            "unit": "iter/sec",
            "range": "stddev: 0.0009518131375433356",
            "extra": "mean: 67.47704549999298 msec\nrounds: 10"
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
          "id": "0ba01041d361b5e9564682e746f5907ef08e8c5d",
          "message": "release 0.3.0",
          "timestamp": "2023-02-26T14:25:12+08:00",
          "tree_id": "9c09b71330926d071631bfc86d74e16f133c3ac8",
          "url": "https://github.com/Yiling-J/theine/commit/0ba01041d361b5e9564682e746f5907ef08e8c5d"
        },
        "date": 1677392807129,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write",
            "value": 98.53537802391259,
            "unit": "iter/sec",
            "range": "stddev: 0.00021582026206087788",
            "extra": "mean: 10.148639199996978 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read",
            "value": 292.3789383082203,
            "unit": "iter/sec",
            "range": "stddev: 0.000058176528296218085",
            "extra": "mean: 3.4202189999945176 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_auto]",
            "value": 139.36700481980444,
            "unit": "iter/sec",
            "range": "stddev: 0.00006336494106086985",
            "extra": "mean: 7.17529949999971 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_tlfu_custom]",
            "value": 154.89468601862862,
            "unit": "iter/sec",
            "range": "stddev: 0.000192780168938664",
            "extra": "mean: 6.45599940000352 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lfu]",
            "value": 57.87285408034617,
            "unit": "iter/sec",
            "range": "stddev: 0.00026759531990688264",
            "extra": "mean: 17.279258400003528 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cacheout_lfu]",
            "value": 20.145573566529684,
            "unit": "iter/sec",
            "range": "stddev: 0.0004216545417482803",
            "extra": "mean: 49.63869589999774 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[theine_lru_custom]",
            "value": 175.26488746392423,
            "unit": "iter/sec",
            "range": "stddev: 0.00009520736502469856",
            "extra": "mean: 5.705649400002244 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cachetools_lru]",
            "value": 70.93069519947993,
            "unit": "iter/sec",
            "range": "stddev: 0.00007158449026413103",
            "extra": "mean: 14.09826869999904 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_read[cacheout_lru]",
            "value": 21.29241727920435,
            "unit": "iter/sec",
            "range": "stddev: 0.0002972891637696065",
            "extra": "mean: 46.965076199998634 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_auto]",
            "value": 54.28997038671399,
            "unit": "iter/sec",
            "range": "stddev: 0.00016535482001373093",
            "extra": "mean: 18.419608500002482 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_tlfu_custom]",
            "value": 56.58733571126148,
            "unit": "iter/sec",
            "range": "stddev: 0.00008098009700653455",
            "extra": "mean: 17.67179859999999 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lfu]",
            "value": 1.4906950806358585,
            "unit": "iter/sec",
            "range": "stddev: 0.000998524576454519",
            "extra": "mean: 670.8280002999999 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cacheout_lfu]",
            "value": 1.399602645167212,
            "unit": "iter/sec",
            "range": "stddev: 0.00263526209556482",
            "extra": "mean: 714.4885038999973 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[theine_lru_custom]",
            "value": 62.30783640175983,
            "unit": "iter/sec",
            "range": "stddev: 0.00013117344987721464",
            "extra": "mean: 16.049345599998333 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cachetools_lru]",
            "value": 16.17704790187357,
            "unit": "iter/sec",
            "range": "stddev: 0.0004970867341767404",
            "extra": "mean: 61.81597570000292 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_write[cacheout_lru]",
            "value": 10.640646002556904,
            "unit": "iter/sec",
            "range": "stddev: 0.0005379942485026377",
            "extra": "mean: 93.97925650000047 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_auto]",
            "value": 75.86884949541806,
            "unit": "iter/sec",
            "range": "stddev: 0.0014417699905112707",
            "extra": "mean: 13.180640099997731 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_tlfu_custom]",
            "value": 86.96950893368651,
            "unit": "iter/sec",
            "range": "stddev: 0.00014692733903365438",
            "extra": "mean: 11.498282700003415 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lfu]",
            "value": 4.576234548641555,
            "unit": "iter/sec",
            "range": "stddev: 0.014758935663962473",
            "extra": "mean: 218.5202679999975 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cacheout_lfu]",
            "value": 3.8819616652442543,
            "unit": "iter/sec",
            "range": "stddev: 0.01325088489598316",
            "extra": "mean: 257.60171949999915 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[theine_lru_custom]",
            "value": 91.6066900108974,
            "unit": "iter/sec",
            "range": "stddev: 0.0007131965842836794",
            "extra": "mean: 10.916233300002887 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cachetools_lru]",
            "value": 27.073334135790503,
            "unit": "iter/sec",
            "range": "stddev: 0.0004386841618889985",
            "extra": "mean: 36.93671399999516 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_decorator_zipf[cacheout_lru]",
            "value": 14.640669731111993,
            "unit": "iter/sec",
            "range": "stddev: 0.0004959746698333053",
            "extra": "mean: 68.30288630000041 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}