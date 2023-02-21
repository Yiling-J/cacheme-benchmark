window.BENCHMARK_DATA = {
  "lastUpdate": 1676964501021,
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
      }
    ]
  }
}