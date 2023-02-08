window.BENCHMARK_DATA = {
  "lastUpdate": 1675866998994,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark: test_read_only_async": [
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
          "id": "bda7b5379c7d07656765cfc25d57fa9ca19c1805",
          "message": "fix ci",
          "timestamp": "2023-01-26T10:53:24+08:00",
          "tree_id": "37bee60f29ec77d70077c377d2303b0c8c137f32",
          "url": "https://github.com/Yiling-J/cacheme/commit/bda7b5379c7d07656765cfc25d57fa9ca19c1805"
        },
        "date": 1674701870350,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.675502787589606,
            "unit": "iter/sec",
            "range": "stddev: 0.0022921598315766094",
            "extra": "mean: 176.1958433333272 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.755058042341335,
            "unit": "iter/sec",
            "range": "stddev: 0.0013161241798704188",
            "extra": "mean: 173.76019366664272 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.783057068890111,
            "unit": "iter/sec",
            "range": "stddev: 0.0009852334161085635",
            "extra": "mean: 172.91892299999745 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.512228897864687,
            "unit": "iter/sec",
            "range": "stddev: 0.0013662707970936302",
            "extra": "mean: 153.55725599999914 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.506529961059602,
            "unit": "iter/sec",
            "range": "stddev: 0.0012265919346050194",
            "extra": "mean: 153.691753666673 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.394875218621446,
            "unit": "iter/sec",
            "range": "stddev: 0.0010490287371060856",
            "extra": "mean: 156.3752170000233 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.512863030652928,
            "unit": "iter/sec",
            "range": "stddev: 0.003931759529988917",
            "extra": "mean: 284.66808733334875 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.9147068093069803,
            "unit": "iter/sec",
            "range": "stddev: 0.0028668081597152447",
            "extra": "mean: 343.0876809999859 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.854179390650806,
            "unit": "iter/sec",
            "range": "stddev: 0.006302225361956432",
            "extra": "mean: 539.3221416666734 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.967402015902423,
            "unit": "iter/sec",
            "range": "stddev: 0.005585567060866089",
            "extra": "mean: 252.05411399997502 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.5244106449269093,
            "unit": "iter/sec",
            "range": "stddev: 0.05471829401201842",
            "extra": "mean: 396.1320643333579 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.6568010167420404,
            "unit": "iter/sec",
            "range": "stddev: 0.012573930738745064",
            "extra": "mean: 603.5727826666933 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.6149367976343418,
            "unit": "iter/sec",
            "range": "stddev: 0.02283269059941679",
            "extra": "mean: 619.219279333322 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.3841441472039067,
            "unit": "iter/sec",
            "range": "stddev: 0.0405376573592001",
            "extra": "mean: 722.4681056666592 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.9373556410798739,
            "unit": "iter/sec",
            "range": "stddev: 0.034323587701961394",
            "extra": "mean: 1.0668309403333371 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 3.162470945483375,
            "unit": "iter/sec",
            "range": "stddev: 0.03766490100513071",
            "extra": "mean: 316.2084386666682 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.9672578895436632,
            "unit": "iter/sec",
            "range": "stddev: 0.061854165940266236",
            "extra": "mean: 508.3217636666669 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.36486487292491,
            "unit": "iter/sec",
            "range": "stddev: 0.14176783532425033",
            "extra": "mean: 732.6732630000189 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.5912335612887283,
            "unit": "iter/sec",
            "range": "stddev: 0.01849616893008022",
            "extra": "mean: 385.91658233334175 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 2.129996570449891,
            "unit": "iter/sec",
            "range": "stddev: 0.02315730311714926",
            "extra": "mean: 469.48432400000684 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.046637915846419,
            "unit": "iter/sec",
            "range": "stddev: 0.045919635386294344",
            "extra": "mean: 955.4402576666613 msec\nrounds: 3"
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
          "id": "2ca31df60d6131fe0d40e8cb9a29a416f881df29",
          "message": "update test mysql docker",
          "timestamp": "2023-01-26T11:04:41+08:00",
          "tree_id": "c45e29d4f4d040708ddefe658f5e004fac49428a",
          "url": "https://github.com/Yiling-J/cacheme/commit/2ca31df60d6131fe0d40e8cb9a29a416f881df29"
        },
        "date": 1674702662105,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 4.466905261745949,
            "unit": "iter/sec",
            "range": "stddev: 0.002664960603773786",
            "extra": "mean: 223.86863866665863 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 4.466312729049631,
            "unit": "iter/sec",
            "range": "stddev: 0.00476526756630244",
            "extra": "mean: 223.898338666667 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 4.402421944299568,
            "unit": "iter/sec",
            "range": "stddev: 0.002002545589050452",
            "extra": "mean: 227.14769566666368 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 5.01902307616762,
            "unit": "iter/sec",
            "range": "stddev: 0.010289766818716408",
            "extra": "mean: 199.24196100002214 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.0442136507827895,
            "unit": "iter/sec",
            "range": "stddev: 0.005798761048809195",
            "extra": "mean: 198.24695566668046 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 4.961533027705499,
            "unit": "iter/sec",
            "range": "stddev: 0.005274071578466274",
            "extra": "mean: 201.55060833333968 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 2.350999070534117,
            "unit": "iter/sec",
            "range": "stddev: 0.0053951400797867905",
            "extra": "mean: 425.35108266666083 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 1.9196865670918861,
            "unit": "iter/sec",
            "range": "stddev: 0.0320849532035796",
            "extra": "mean: 520.9183713333422 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.2173520454853797,
            "unit": "iter/sec",
            "range": "stddev: 0.0342938019056874",
            "extra": "mean: 821.4550619999841 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 1.695291890627882,
            "unit": "iter/sec",
            "range": "stddev: 0.1322906866260408",
            "extra": "mean: 589.8689219999937 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 1.8913077860180822,
            "unit": "iter/sec",
            "range": "stddev: 0.02569837418007267",
            "extra": "mean: 528.7346709999952 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 0.9530993981020801,
            "unit": "iter/sec",
            "range": "stddev: 0.14707255469581706",
            "extra": "mean: 1.0492085106666877 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.1033881573905204,
            "unit": "iter/sec",
            "range": "stddev: 0.02656618994624183",
            "extra": "mean: 906.2993773333309 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.9188933498091277,
            "unit": "iter/sec",
            "range": "stddev: 0.04966978808251988",
            "extra": "mean: 1.0882655753333286 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.6465696918080119,
            "unit": "iter/sec",
            "range": "stddev: 0.0816473083468636",
            "extra": "mean: 1.5466236860000133 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.5029405693533175,
            "unit": "iter/sec",
            "range": "stddev: 0.08658410355210865",
            "extra": "mean: 665.3623040000033 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.3492251172132304,
            "unit": "iter/sec",
            "range": "stddev: 0.10501293872743805",
            "extra": "mean: 741.1661606666939 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.8008905052406587,
            "unit": "iter/sec",
            "range": "stddev: 0.1813242516666909",
            "extra": "mean: 1.248610132666651 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.3631884911557512,
            "unit": "iter/sec",
            "range": "stddev: 0.08336087156789344",
            "extra": "mean: 733.5742683333327 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.3972773848017441,
            "unit": "iter/sec",
            "range": "stddev: 0.06982986859426767",
            "extra": "mean: 715.6775103333454 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.8362549742944165,
            "unit": "iter/sec",
            "range": "stddev: 0.02239921594523333",
            "extra": "mean: 1.1958075356666693 sec\nrounds: 3"
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
          "id": "33419956e487daef0e9eae98bbc5e580b2249f2d",
          "message": "add release workflow",
          "timestamp": "2023-01-26T11:22:36+08:00",
          "tree_id": "f95f4b9fb48776b31e3d61fc1730fb5041fd9dba",
          "url": "https://github.com/Yiling-J/cacheme/commit/33419956e487daef0e9eae98bbc5e580b2249f2d"
        },
        "date": 1674703681836,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.146286610610062,
            "unit": "iter/sec",
            "range": "stddev: 0.009102200495940212",
            "extra": "mean: 194.3148673333326 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.12333164874213,
            "unit": "iter/sec",
            "range": "stddev: 0.011452364853972758",
            "extra": "mean: 195.18549033332988 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.378715521210045,
            "unit": "iter/sec",
            "range": "stddev: 0.0027590350697219153",
            "extra": "mean: 185.9179939999933 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 5.9358428462336015,
            "unit": "iter/sec",
            "range": "stddev: 0.0002469736790214331",
            "extra": "mean: 168.4680720000055 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.6805306271523115,
            "unit": "iter/sec",
            "range": "stddev: 0.0038209470709637395",
            "extra": "mean: 176.03989233331654 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 5.94746424033628,
            "unit": "iter/sec",
            "range": "stddev: 0.010885285010981108",
            "extra": "mean: 168.13888399999163 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 2.92390619790413,
            "unit": "iter/sec",
            "range": "stddev: 0.0016838204922588222",
            "extra": "mean: 342.0082356666588 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.4654716874398463,
            "unit": "iter/sec",
            "range": "stddev: 0.006220410797138029",
            "extra": "mean: 405.6018996666732 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.4906602229082495,
            "unit": "iter/sec",
            "range": "stddev: 0.01799025207200855",
            "extra": "mean: 670.843686999992 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.449231878135804,
            "unit": "iter/sec",
            "range": "stddev: 0.03144560174511333",
            "extra": "mean: 289.919621333335 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.6135588238010667,
            "unit": "iter/sec",
            "range": "stddev: 0.01756118453129485",
            "extra": "mean: 382.620046999989 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.3325001227832232,
            "unit": "iter/sec",
            "range": "stddev: 0.047342163299613126",
            "extra": "mean: 750.4689740000003 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.42372222457285,
            "unit": "iter/sec",
            "range": "stddev: 0.06000821457258435",
            "extra": "mean: 702.3842030000083 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.098017767337325,
            "unit": "iter/sec",
            "range": "stddev: 0.023838992355533935",
            "extra": "mean: 910.7320753333378 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.778132198751436,
            "unit": "iter/sec",
            "range": "stddev: 0.08131612518214165",
            "extra": "mean: 1.2851286729999931 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.4463284647409282,
            "unit": "iter/sec",
            "range": "stddev: 0.01498146858210904",
            "extra": "mean: 408.77585100000147 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.9148751983664338,
            "unit": "iter/sec",
            "range": "stddev: 0.03730366691462891",
            "extra": "mean: 522.2272453333213 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.1517770789090658,
            "unit": "iter/sec",
            "range": "stddev: 0.036088297368004604",
            "extra": "mean: 868.2235636666557 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.3415413758545354,
            "unit": "iter/sec",
            "range": "stddev: 0.025070923445875477",
            "extra": "mean: 427.0691136666566 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.5027364146365534,
            "unit": "iter/sec",
            "range": "stddev: 0.1035893575278522",
            "extra": "mean: 665.4526969999969 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.073241047110127,
            "unit": "iter/sec",
            "range": "stddev: 0.0791422354214233",
            "extra": "mean: 931.7571319999919 msec\nrounds: 3"
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
          "id": "b1d59bbf0eb42da70ba3490f3bf208df5dc03077",
          "message": "Update README.md",
          "timestamp": "2023-01-26T17:10:53+08:00",
          "tree_id": "e9976a23cb543a798e668c7886e59178d34f6a54",
          "url": "https://github.com/Yiling-J/cacheme/commit/b1d59bbf0eb42da70ba3490f3bf208df5dc03077"
        },
        "date": 1674724569856,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 4.727427416146762,
            "unit": "iter/sec",
            "range": "stddev: 0.0077850225174411905",
            "extra": "mean: 211.53153966668015 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 4.810546210486956,
            "unit": "iter/sec",
            "range": "stddev: 0.002945926169901123",
            "extra": "mean: 207.8766019999989 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 4.845715785246576,
            "unit": "iter/sec",
            "range": "stddev: 0.0002665363871392918",
            "extra": "mean: 206.3678606666599 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 5.178762777690635,
            "unit": "iter/sec",
            "range": "stddev: 0.01356128301885531",
            "extra": "mean: 193.0963133333421 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.433237246411528,
            "unit": "iter/sec",
            "range": "stddev: 0.005291936753947303",
            "extra": "mean: 184.052334666679 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 5.542620454804839,
            "unit": "iter/sec",
            "range": "stddev: 0.00297610732402871",
            "extra": "mean: 180.42007533333995 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 2.6443584194887695,
            "unit": "iter/sec",
            "range": "stddev: 0.07649375057197703",
            "extra": "mean: 378.16356233332726 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.1792136807198768,
            "unit": "iter/sec",
            "range": "stddev: 0.01100922458876189",
            "extra": "mean: 458.8811133333479 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.313654201376575,
            "unit": "iter/sec",
            "range": "stddev: 0.006398786030604164",
            "extra": "mean: 761.2353379999869 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 2.5826791749905316,
            "unit": "iter/sec",
            "range": "stddev: 0.1123099163505021",
            "extra": "mean: 387.19482066666916 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.318340088835986,
            "unit": "iter/sec",
            "range": "stddev: 0.025183738001546913",
            "extra": "mean: 431.3430996666625 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.1620935829577292,
            "unit": "iter/sec",
            "range": "stddev: 0.05340846362064923",
            "extra": "mean: 860.5158953333406 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.133221990444996,
            "unit": "iter/sec",
            "range": "stddev: 0.03297762894692742",
            "extra": "mean: 882.4396353333365 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.9898594763217872,
            "unit": "iter/sec",
            "range": "stddev: 0.02155709732342423",
            "extra": "mean: 1.0102444073333459 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.6476050155931647,
            "unit": "iter/sec",
            "range": "stddev: 0.1299166695222995",
            "extra": "mean: 1.5441511043333473 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.058121783128644,
            "unit": "iter/sec",
            "range": "stddev: 0.03679798012581835",
            "extra": "mean: 485.87989699999906 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.672734500846264,
            "unit": "iter/sec",
            "range": "stddev: 0.032860399792212856",
            "extra": "mean: 597.8235036666509 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.8255707472941393,
            "unit": "iter/sec",
            "range": "stddev: 0.1916298295043979",
            "extra": "mean: 1.2112832283333244 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.5691668390562485,
            "unit": "iter/sec",
            "range": "stddev: 0.08188070138455729",
            "extra": "mean: 637.2808646666499 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.5535156934773018,
            "unit": "iter/sec",
            "range": "stddev: 0.07013172449747695",
            "extra": "mean: 643.7012539999879 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.9394129415447535,
            "unit": "iter/sec",
            "range": "stddev: 0.07742462420927779",
            "extra": "mean: 1.0644945963333423 sec\nrounds: 3"
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
          "id": "2f3508ff406250177b12ca282ffb94c31fa7fde5",
          "message": "Update README.md",
          "timestamp": "2023-01-26T21:14:39+08:00",
          "tree_id": "5cd28fd04cbba947ebf08c1f8d25f800cc5304f0",
          "url": "https://github.com/Yiling-J/cacheme/commit/2f3508ff406250177b12ca282ffb94c31fa7fde5"
        },
        "date": 1674739156876,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.329394441853848,
            "unit": "iter/sec",
            "range": "stddev: 0.0009951218315517438",
            "extra": "mean: 187.63857900000858 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.329995675827592,
            "unit": "iter/sec",
            "range": "stddev: 0.00745066118390488",
            "extra": "mean: 187.6174130000076 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.280089669439548,
            "unit": "iter/sec",
            "range": "stddev: 0.010284334506788183",
            "extra": "mean: 189.39072300000248 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 5.915086356377129,
            "unit": "iter/sec",
            "range": "stddev: 0.0010238641355426183",
            "extra": "mean: 169.05923933331715 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.921309187881862,
            "unit": "iter/sec",
            "range": "stddev: 0.001374118481959183",
            "extra": "mean: 168.88157133333456 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 5.916709101468622,
            "unit": "iter/sec",
            "range": "stddev: 0.00453061497842401",
            "extra": "mean: 169.01287233333542 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.0397633911403283,
            "unit": "iter/sec",
            "range": "stddev: 0.014959411834917119",
            "extra": "mean: 328.97297300000145 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.4756325550633207,
            "unit": "iter/sec",
            "range": "stddev: 0.016962541356758894",
            "extra": "mean: 403.93716666665114 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.434468841463336,
            "unit": "iter/sec",
            "range": "stddev: 0.01534395010197253",
            "extra": "mean: 697.1221480000054 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 2.9234667168401267,
            "unit": "iter/sec",
            "range": "stddev: 0.030603515257575847",
            "extra": "mean: 342.0596493333316 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.433365507751676,
            "unit": "iter/sec",
            "range": "stddev: 0.030755640727685767",
            "extra": "mean: 410.9534703333395 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.1625112637605433,
            "unit": "iter/sec",
            "range": "stddev: 0.021337946939795335",
            "extra": "mean: 860.2067189999995 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.3820949153157929,
            "unit": "iter/sec",
            "range": "stddev: 0.0352669019370155",
            "extra": "mean: 723.5393089999983 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.3845994255094023,
            "unit": "iter/sec",
            "range": "stddev: 0.07833381996758017",
            "extra": "mean: 722.2305466666606 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.8078229803608642,
            "unit": "iter/sec",
            "range": "stddev: 0.0376696144710941",
            "extra": "mean: 1.2378949649999906 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.5699245378197595,
            "unit": "iter/sec",
            "range": "stddev: 0.06640328664984875",
            "extra": "mean: 636.9732913333243 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.924088671803415,
            "unit": "iter/sec",
            "range": "stddev: 0.04426119538936716",
            "extra": "mean: 519.7265670000112 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.0662149641758132,
            "unit": "iter/sec",
            "range": "stddev: 0.11730530878759918",
            "extra": "mean: 937.8971723333507 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.9359366678194112,
            "unit": "iter/sec",
            "range": "stddev: 0.0653247500408448",
            "extra": "mean: 516.5458233333501 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.9936348157963333,
            "unit": "iter/sec",
            "range": "stddev: 0.025618477340832575",
            "extra": "mean: 501.59637666668766 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.9625076737568756,
            "unit": "iter/sec",
            "range": "stddev: 0.04807644615604642",
            "extra": "mean: 1.038952755666647 sec\nrounds: 3"
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
          "id": "34566d345fc9ae09dedf46c8385035c76ae87076",
          "message": "update readme",
          "timestamp": "2023-01-27T09:35:53+08:00",
          "tree_id": "91bb7efb8b362afbe0f9d296119b66651c6dd998",
          "url": "https://github.com/Yiling-J/cacheme/commit/34566d345fc9ae09dedf46c8385035c76ae87076"
        },
        "date": 1674783732389,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 4.599446514258696,
            "unit": "iter/sec",
            "range": "stddev: 0.008338507616300748",
            "extra": "mean: 217.4174646666529 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 4.901828474992455,
            "unit": "iter/sec",
            "range": "stddev: 0.0014810090610300202",
            "extra": "mean: 204.005506333336 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 4.666496572867054,
            "unit": "iter/sec",
            "range": "stddev: 0.005642402546817772",
            "extra": "mean: 214.29352499997853 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 4.927898156245385,
            "unit": "iter/sec",
            "range": "stddev: 0.012327720237870377",
            "extra": "mean: 202.92627166668353 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.5680384171485775,
            "unit": "iter/sec",
            "range": "stddev: 0.007529969620114442",
            "extra": "mean: 179.59646200000634 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 5.576169051973734,
            "unit": "iter/sec",
            "range": "stddev: 0.004952636676821521",
            "extra": "mean: 179.3345916666643 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 2.405753978436917,
            "unit": "iter/sec",
            "range": "stddev: 0.010375055725471758",
            "extra": "mean: 415.67010133335697 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 1.9864728587995462,
            "unit": "iter/sec",
            "range": "stddev: 0.02648043766243487",
            "extra": "mean: 503.40481399998305 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.315341425127021,
            "unit": "iter/sec",
            "range": "stddev: 0.010882450473169797",
            "extra": "mean: 760.2588809999892 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 1.8300806085540293,
            "unit": "iter/sec",
            "range": "stddev: 0.11333929446550693",
            "extra": "mean: 546.4240183333308 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.002478150815742,
            "unit": "iter/sec",
            "range": "stddev: 0.03198043322842469",
            "extra": "mean: 499.3812289999937 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.1249078606251095,
            "unit": "iter/sec",
            "range": "stddev: 0.08485413408137839",
            "extra": "mean: 888.9616963333348 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.0320917483244108,
            "unit": "iter/sec",
            "range": "stddev: 0.02941554981048359",
            "extra": "mean: 968.9061089999882 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.9397311296172448,
            "unit": "iter/sec",
            "range": "stddev: 0.05061694661883679",
            "extra": "mean: 1.0641341639999762 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.7063087573546488,
            "unit": "iter/sec",
            "range": "stddev: 0.06923408144157865",
            "extra": "mean: 1.4158114133333395 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.172724959683846,
            "unit": "iter/sec",
            "range": "stddev: 0.06768171776264145",
            "extra": "mean: 460.251535999987 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.3533013238384595,
            "unit": "iter/sec",
            "range": "stddev: 0.06462344877626443",
            "extra": "mean: 738.9337336666699 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.85376918333623,
            "unit": "iter/sec",
            "range": "stddev: 0.16321609729469586",
            "extra": "mean: 1.171276756666657 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.8601921196748508,
            "unit": "iter/sec",
            "range": "stddev: 0.041347210764893005",
            "extra": "mean: 537.5788819999912 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.5475568363255368,
            "unit": "iter/sec",
            "range": "stddev: 0.025759881301393443",
            "extra": "mean: 646.1798213333244 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.7968200723412863,
            "unit": "iter/sec",
            "range": "stddev: 0.07679196388691488",
            "extra": "mean: 1.2549884656666752 sec\nrounds: 3"
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
          "id": "76cadfe1dd1ffe51ecaab49d459f5a79aca72143",
          "message": "remove example db file",
          "timestamp": "2023-01-27T09:40:37+08:00",
          "tree_id": "6b1ad5dffccd778493eae719e3c93316cdc102e2",
          "url": "https://github.com/Yiling-J/cacheme/commit/76cadfe1dd1ffe51ecaab49d459f5a79aca72143"
        },
        "date": 1674783899530,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.683618941753903,
            "unit": "iter/sec",
            "range": "stddev: 0.006949511706946761",
            "extra": "mean: 175.94423733330208 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.805755334285224,
            "unit": "iter/sec",
            "range": "stddev: 0.0013145793671212706",
            "extra": "mean: 172.24287666664395 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.787583776142845,
            "unit": "iter/sec",
            "range": "stddev: 0.0003125955619752735",
            "extra": "mean: 172.78367600001351 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.581085730588701,
            "unit": "iter/sec",
            "range": "stddev: 0.0020589929965695473",
            "extra": "mean: 151.9506113333288 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.523207887414327,
            "unit": "iter/sec",
            "range": "stddev: 0.0007683220817743677",
            "extra": "mean: 153.29880899999657 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.517608595987848,
            "unit": "iter/sec",
            "range": "stddev: 0.0012588031145312909",
            "extra": "mean: 153.43050833331517 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.6310248634848317,
            "unit": "iter/sec",
            "range": "stddev: 0.00393321253815084",
            "extra": "mean: 275.4043383333548 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.9416434074518176,
            "unit": "iter/sec",
            "range": "stddev: 0.00581706724209994",
            "extra": "mean: 339.9460306666621 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.8256842740729553,
            "unit": "iter/sec",
            "range": "stddev: 0.012210195069540386",
            "extra": "mean: 547.7398333333289 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.8613112849919506,
            "unit": "iter/sec",
            "range": "stddev: 0.015545295642610864",
            "extra": "mean: 258.9793793333304 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.648963832102073,
            "unit": "iter/sec",
            "range": "stddev: 0.05463183271959367",
            "extra": "mean: 377.5060980000073 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.7094349377000553,
            "unit": "iter/sec",
            "range": "stddev: 0.004980801335406751",
            "extra": "mean: 584.9886286666409 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.674656606848174,
            "unit": "iter/sec",
            "range": "stddev: 0.018462375952989503",
            "extra": "mean: 597.1373449999836 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.5433687490485908,
            "unit": "iter/sec",
            "range": "stddev: 0.036318854296850965",
            "extra": "mean: 647.9332956666705 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 1.108271529404732,
            "unit": "iter/sec",
            "range": "stddev: 0.07380543729918145",
            "extra": "mean: 902.3059543333337 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 3.204754827223787,
            "unit": "iter/sec",
            "range": "stddev: 0.025511794339162015",
            "extra": "mean: 312.03635033331994 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 2.1018442920693285,
            "unit": "iter/sec",
            "range": "stddev: 0.024975186314413707",
            "extra": "mean: 475.7726363333366 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.4978964515866768,
            "unit": "iter/sec",
            "range": "stddev: 0.07367226898330435",
            "extra": "mean: 667.602889999993 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.6416574777639577,
            "unit": "iter/sec",
            "range": "stddev: 0.0111287039946047",
            "extra": "mean: 378.5502126666529 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.7819483447210553,
            "unit": "iter/sec",
            "range": "stddev: 0.013321907429877985",
            "extra": "mean: 561.1834949999851 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.4508117488319592,
            "unit": "iter/sec",
            "range": "stddev: 0.016902374197130896",
            "extra": "mean: 689.2693010000054 msec\nrounds: 3"
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
          "id": "dbb787c714bb3f227b17c50342ff689faec38502",
          "message": "add set prefix api",
          "timestamp": "2023-01-27T09:53:11+08:00",
          "tree_id": "381f31ceb6194e9d220488f48110e920459d16fa",
          "url": "https://github.com/Yiling-J/cacheme/commit/dbb787c714bb3f227b17c50342ff689faec38502"
        },
        "date": 1674784738123,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 4.792020633929824,
            "unit": "iter/sec",
            "range": "stddev: 0.004158859837883638",
            "extra": "mean: 208.68023666666127 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.357361456623637,
            "unit": "iter/sec",
            "range": "stddev: 0.0006858195174824922",
            "extra": "mean: 186.65905000000294 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.067520239324316,
            "unit": "iter/sec",
            "range": "stddev: 0.006288040315885051",
            "extra": "mean: 197.3351763333729 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 5.236597486430998,
            "unit": "iter/sec",
            "range": "stddev: 0.008750503862353943",
            "extra": "mean: 190.96369400000412 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.357279161630806,
            "unit": "iter/sec",
            "range": "stddev: 0.027507189737125282",
            "extra": "mean: 186.6619173333485 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.19085836886908,
            "unit": "iter/sec",
            "range": "stddev: 0.007142152456772577",
            "extra": "mean: 161.52848933332584 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.4067558837663134,
            "unit": "iter/sec",
            "range": "stddev: 0.027070014943557666",
            "extra": "mean: 293.5343870000035 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.226656043647057,
            "unit": "iter/sec",
            "range": "stddev: 0.014782904704279603",
            "extra": "mean: 449.10393899997797 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.416929067603218,
            "unit": "iter/sec",
            "range": "stddev: 0.008385930744048194",
            "extra": "mean: 705.7516306666874 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 1.8081083763093078,
            "unit": "iter/sec",
            "range": "stddev: 0.1434638119928976",
            "extra": "mean: 553.0641929999737 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.143494782029566,
            "unit": "iter/sec",
            "range": "stddev: 0.02055358797138295",
            "extra": "mean: 466.52784433333255 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.1828486524303383,
            "unit": "iter/sec",
            "range": "stddev: 0.14839541936628323",
            "extra": "mean: 845.4166963333402 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.08850600569999,
            "unit": "iter/sec",
            "range": "stddev: 0.047228138737953285",
            "extra": "mean: 918.6903836666716 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.003236895017564,
            "unit": "iter/sec",
            "range": "stddev: 0.015005176449442454",
            "extra": "mean: 996.7735486666811 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.7277880998737654,
            "unit": "iter/sec",
            "range": "stddev: 0.040661979790342105",
            "extra": "mean: 1.3740263136666424 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.169048566982095,
            "unit": "iter/sec",
            "range": "stddev: 0.04203838388712398",
            "extra": "mean: 461.03163166666644 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.687445643579041,
            "unit": "iter/sec",
            "range": "stddev: 0.019610104871726805",
            "extra": "mean: 592.6116813333427 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.9010497405181699,
            "unit": "iter/sec",
            "range": "stddev: 0.11719643901341474",
            "extra": "mean: 1.1098166450000047 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.567410169509199,
            "unit": "iter/sec",
            "range": "stddev: 0.05800588347171677",
            "extra": "mean: 637.995095000008 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.5026633686397985,
            "unit": "iter/sec",
            "range": "stddev: 0.025148325275537283",
            "extra": "mean: 665.4850453333362 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.0047286303775984,
            "unit": "iter/sec",
            "range": "stddev: 0.07588254331186849",
            "extra": "mean: 995.2936243333473 msec\nrounds: 3"
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
          "id": "4ea0b5746ba7c4345ef3b50f916d093b6a2e7645",
          "message": "fix release ci",
          "timestamp": "2023-01-27T10:35:20+08:00",
          "tree_id": "c0358f022a441b0044d1031f843c4e22d3eccf2e",
          "url": "https://github.com/Yiling-J/cacheme/commit/4ea0b5746ba7c4345ef3b50f916d093b6a2e7645"
        },
        "date": 1674787266878,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 4.594564727026608,
            "unit": "iter/sec",
            "range": "stddev: 0.0017524519820431438",
            "extra": "mean: 217.64847366665663 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 4.64348685495432,
            "unit": "iter/sec",
            "range": "stddev: 0.0025901594346477187",
            "extra": "mean: 215.35540666666483 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 4.643821829949318,
            "unit": "iter/sec",
            "range": "stddev: 0.003270291948032941",
            "extra": "mean: 215.33987233332633 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 5.367603338378815,
            "unit": "iter/sec",
            "range": "stddev: 0.00598271541163518",
            "extra": "mean: 186.30288733333109 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.285008158291112,
            "unit": "iter/sec",
            "range": "stddev: 0.002598400487816359",
            "extra": "mean: 189.21446666666006 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 5.480660082369314,
            "unit": "iter/sec",
            "range": "stddev: 0.004202551219534872",
            "extra": "mean: 182.45977400001343 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 2.608001318313378,
            "unit": "iter/sec",
            "range": "stddev: 0.009083965091946096",
            "extra": "mean: 383.43538899999885 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.1879830412438768,
            "unit": "iter/sec",
            "range": "stddev: 0.009502811764720773",
            "extra": "mean: 457.04193366667783 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.2560311070707022,
            "unit": "iter/sec",
            "range": "stddev: 0.024604952078684603",
            "extra": "mean: 796.158625666673 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 2.6892451578563197,
            "unit": "iter/sec",
            "range": "stddev: 0.03560653274067243",
            "extra": "mean: 371.8515573333339 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.1557916974809186,
            "unit": "iter/sec",
            "range": "stddev: 0.035228420034874613",
            "extra": "mean: 463.86670900000126 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.1742459498120945,
            "unit": "iter/sec",
            "range": "stddev: 0.01041612259938708",
            "extra": "mean: 851.6103463333403 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.2119747840210937,
            "unit": "iter/sec",
            "range": "stddev: 0.07589770159169582",
            "extra": "mean: 825.0996746666601 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.0105552839630203,
            "unit": "iter/sec",
            "range": "stddev: 0.03019188052142667",
            "extra": "mean: 989.5549663333346 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.6820072221300217,
            "unit": "iter/sec",
            "range": "stddev: 0.20023593601608394",
            "extra": "mean: 1.4662601326666806 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.5014580058111409,
            "unit": "iter/sec",
            "range": "stddev: 0.04525011607892033",
            "extra": "mean: 666.0192933333254 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.3584090346350184,
            "unit": "iter/sec",
            "range": "stddev: 0.0762940090230443",
            "extra": "mean: 736.1552923333458 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.8460347477164848,
            "unit": "iter/sec",
            "range": "stddev: 0.05813884150408129",
            "extra": "mean: 1.1819845493333219 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.5797606283611187,
            "unit": "iter/sec",
            "range": "stddev: 0.048247604210440144",
            "extra": "mean: 633.0072936666511 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.5021249322162835,
            "unit": "iter/sec",
            "range": "stddev: 0.03019895876752052",
            "extra": "mean: 665.7235883333404 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.789037637302815,
            "unit": "iter/sec",
            "range": "stddev: 0.20069695060553086",
            "extra": "mean: 1.2673666663333354 sec\nrounds: 3"
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
          "id": "2a6b1708fe0a41aa36522ce485a8d72000ced33b",
          "message": "update readme",
          "timestamp": "2023-01-27T19:16:49+08:00",
          "tree_id": "d541ad6b8b2a24448b7f843edb9a2fb6659d44cc",
          "url": "https://github.com/Yiling-J/cacheme/commit/2a6b1708fe0a41aa36522ce485a8d72000ced33b"
        },
        "date": 1674818587875,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 4.112686829492389,
            "unit": "iter/sec",
            "range": "stddev: 0.011495290299765898",
            "extra": "mean: 243.15004799998974 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 4.273097544010208,
            "unit": "iter/sec",
            "range": "stddev: 0.00422132461136112",
            "extra": "mean: 234.02227300000314 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 4.264546144787845,
            "unit": "iter/sec",
            "range": "stddev: 0.008175432923423686",
            "extra": "mean: 234.49154166668032 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 5.1783585844713516,
            "unit": "iter/sec",
            "range": "stddev: 0.0040416176505843485",
            "extra": "mean: 193.11138533332914 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 4.841219576475429,
            "unit": "iter/sec",
            "range": "stddev: 0.014528057768172772",
            "extra": "mean: 206.55952166665278 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 4.070974929316146,
            "unit": "iter/sec",
            "range": "stddev: 0.020927190515617478",
            "extra": "mean: 245.6414046666661 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 2.3507970946442263,
            "unit": "iter/sec",
            "range": "stddev: 0.012445485529387844",
            "extra": "mean: 425.38762800000046 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 1.879204884184302,
            "unit": "iter/sec",
            "range": "stddev: 0.01703186220410491",
            "extra": "mean: 532.1399536666623 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.38120916132831,
            "unit": "iter/sec",
            "range": "stddev: 0.011318463101788566",
            "extra": "mean: 724.003306666674 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 2.65918867591519,
            "unit": "iter/sec",
            "range": "stddev: 0.014251480809147123",
            "extra": "mean: 376.0545496666718 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.0135684133021465,
            "unit": "iter/sec",
            "range": "stddev: 0.04094863008863584",
            "extra": "mean: 496.6307543333244 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.1221771657242485,
            "unit": "iter/sec",
            "range": "stddev: 0.06544953044206266",
            "extra": "mean: 891.1248869999989 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.090962498482307,
            "unit": "iter/sec",
            "range": "stddev: 0.051042470035018946",
            "extra": "mean: 916.621791666671 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.9145168174583931,
            "unit": "iter/sec",
            "range": "stddev: 0.023768679382964994",
            "extra": "mean: 1.0934736036666663 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.6416360774116899,
            "unit": "iter/sec",
            "range": "stddev: 0.0941231641750265",
            "extra": "mean: 1.5585158553333258 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.9009725362822831,
            "unit": "iter/sec",
            "range": "stddev: 0.08971095318464177",
            "extra": "mean: 526.0465266666566 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.2976659696705048,
            "unit": "iter/sec",
            "range": "stddev: 0.05296469353006698",
            "extra": "mean: 770.614336333343 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.8279302860444365,
            "unit": "iter/sec",
            "range": "stddev: 0.05595532849752996",
            "extra": "mean: 1.2078311626666693 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.7375296512330767,
            "unit": "iter/sec",
            "range": "stddev: 0.022043929563328846",
            "extra": "mean: 575.5297466666699 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.1959551567157796,
            "unit": "iter/sec",
            "range": "stddev: 0.04519744076546613",
            "extra": "mean: 836.1517523333456 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.7382129425047295,
            "unit": "iter/sec",
            "range": "stddev: 0.11653348754002235",
            "extra": "mean: 1.3546226873333278 sec\nrounds: 3"
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
          "id": "0765f45cedfad41785b2d35a839274eff62b6445",
          "message": "update readme",
          "timestamp": "2023-01-27T20:06:04+08:00",
          "tree_id": "e9f7b0720a04aaee2a57dc25586ec56fefc75b1b",
          "url": "https://github.com/Yiling-J/cacheme/commit/0765f45cedfad41785b2d35a839274eff62b6445"
        },
        "date": 1674821451641,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 6.15739446766187,
            "unit": "iter/sec",
            "range": "stddev: 0.0019226763748159386",
            "extra": "mean: 162.4063563333351 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 6.167046124672329,
            "unit": "iter/sec",
            "range": "stddev: 0.002409044598724916",
            "extra": "mean: 162.15218433332743 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 6.105869090203468,
            "unit": "iter/sec",
            "range": "stddev: 0.0012808137397375696",
            "extra": "mean: 163.7768489999966 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.974402554718121,
            "unit": "iter/sec",
            "range": "stddev: 0.0023373974504255234",
            "extra": "mean: 143.38145699999907 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.973047287187887,
            "unit": "iter/sec",
            "range": "stddev: 0.0013194169775125341",
            "extra": "mean: 143.40932433333364 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.499623821272291,
            "unit": "iter/sec",
            "range": "stddev: 0.003551439070576667",
            "extra": "mean: 153.8550579999954 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.219448300851552,
            "unit": "iter/sec",
            "range": "stddev: 0.007135248698864849",
            "extra": "mean: 310.61222500000935 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.74077507344877,
            "unit": "iter/sec",
            "range": "stddev: 0.006972169388011823",
            "extra": "mean: 364.8602943333401 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.7203773187046165,
            "unit": "iter/sec",
            "range": "stddev: 0.0007492383481990274",
            "extra": "mean: 581.2678353333354 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.505412744040601,
            "unit": "iter/sec",
            "range": "stddev: 0.0270459270757477",
            "extra": "mean: 285.2731113333391 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.8174917166166464,
            "unit": "iter/sec",
            "range": "stddev: 0.023484636800614665",
            "extra": "mean: 354.9256219999961 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.4312816612683328,
            "unit": "iter/sec",
            "range": "stddev: 0.005950366026986003",
            "extra": "mean: 698.67450066666 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.4064718709376398,
            "unit": "iter/sec",
            "range": "stddev: 0.031345467519944",
            "extra": "mean: 710.9989333333336 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.3267732269448826,
            "unit": "iter/sec",
            "range": "stddev: 0.04337335857687476",
            "extra": "mean: 753.7083049999941 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.7876020526006843,
            "unit": "iter/sec",
            "range": "stddev: 0.07407015561894018",
            "extra": "mean: 1.2696767316666733 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.9826808413736745,
            "unit": "iter/sec",
            "range": "stddev: 0.14530251204550793",
            "extra": "mean: 504.3676113333314 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.9585096813804528,
            "unit": "iter/sec",
            "range": "stddev: 0.09005319508532886",
            "extra": "mean: 510.5923190000018 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.3512020416997994,
            "unit": "iter/sec",
            "range": "stddev: 0.08723034946698352",
            "extra": "mean: 740.0817709999975 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.163547598248003,
            "unit": "iter/sec",
            "range": "stddev: 0.02786673766846288",
            "extra": "mean: 462.203836333335 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.8342548733758002,
            "unit": "iter/sec",
            "range": "stddev: 0.06224045686640545",
            "extra": "mean: 545.1805060000083 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.1266639499894577,
            "unit": "iter/sec",
            "range": "stddev: 0.04716783450176191",
            "extra": "mean: 887.5761046666639 msec\nrounds: 3"
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
          "id": "07db681eec5035454b4f45a0fc37b3f3b3f413ae",
          "message": "update",
          "timestamp": "2023-01-28T17:49:05+08:00",
          "tree_id": "320488bb5260d6c10c169a84b57daed11becf626",
          "url": "https://github.com/Yiling-J/cacheme/commit/07db681eec5035454b4f45a0fc37b3f3b3f413ae"
        },
        "date": 1674899632509,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.482607062336167,
            "unit": "iter/sec",
            "range": "stddev: 0.0016597416339416042",
            "extra": "mean: 182.3949789999896 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.507636062018254,
            "unit": "iter/sec",
            "range": "stddev: 0.0008887868599702615",
            "extra": "mean: 181.56609999999773 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.610132283384636,
            "unit": "iter/sec",
            "range": "stddev: 0.0008140804199522128",
            "extra": "mean: 178.24891633334042 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.192213975371795,
            "unit": "iter/sec",
            "range": "stddev: 0.0068975444950074545",
            "extra": "mean: 161.49312733333923 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.076349058561151,
            "unit": "iter/sec",
            "range": "stddev: 0.004526867771227109",
            "extra": "mean: 164.57250733334186 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.203482039696144,
            "unit": "iter/sec",
            "range": "stddev: 0.002723809958447136",
            "extra": "mean: 161.19978966667267 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.219356678208525,
            "unit": "iter/sec",
            "range": "stddev: 0.003387557988555429",
            "extra": "mean: 310.6210650000018 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.81784798841377,
            "unit": "iter/sec",
            "range": "stddev: 0.02824374308901064",
            "extra": "mean: 354.88074733333025 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.6699905062932745,
            "unit": "iter/sec",
            "range": "stddev: 0.0024786226816993374",
            "extra": "mean: 598.80579933332 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.728858389048065,
            "unit": "iter/sec",
            "range": "stddev: 0.004081699999989789",
            "extra": "mean: 268.17859399999594 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.5230731825627344,
            "unit": "iter/sec",
            "range": "stddev: 0.034815742119833654",
            "extra": "mean: 396.34205099999537 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.4548147910205227,
            "unit": "iter/sec",
            "range": "stddev: 0.030394216974868944",
            "extra": "mean: 687.3727199999943 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.3687705754020432,
            "unit": "iter/sec",
            "range": "stddev: 0.08482464560290358",
            "extra": "mean: 730.5826250000109 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.194195165381271,
            "unit": "iter/sec",
            "range": "stddev: 0.015050835048010929",
            "extra": "mean: 837.384063333341 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.8389595789766955,
            "unit": "iter/sec",
            "range": "stddev: 0.025424426500547825",
            "extra": "mean: 1.1919525386666787 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.127501320056059,
            "unit": "iter/sec",
            "range": "stddev: 0.04312823843835927",
            "extra": "mean: 470.0349610000008 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 2.1121668634802466,
            "unit": "iter/sec",
            "range": "stddev: 0.05427001333696439",
            "extra": "mean: 473.44744266666794 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.2314435242796247,
            "unit": "iter/sec",
            "range": "stddev: 0.031011334763121907",
            "extra": "mean: 812.0551046666833 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.3748044156600643,
            "unit": "iter/sec",
            "range": "stddev: 0.03252308525076848",
            "extra": "mean: 421.0873086666614 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.7985393518764619,
            "unit": "iter/sec",
            "range": "stddev: 0.0372604412538648",
            "extra": "mean: 556.0067389999972 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.0610171928184484,
            "unit": "iter/sec",
            "range": "stddev: 0.12681837757589745",
            "extra": "mean: 942.4917963333238 msec\nrounds: 3"
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
          "id": "bfd27bb32c1e343e7f0f803b08bdd05a2d033227",
          "message": "expire cache automatically (#13)\n\n* expire cache automatically\r\n\r\n* remove unused code\r\n\r\n* isort and fix lint",
          "timestamp": "2023-01-29T20:14:52+08:00",
          "tree_id": "a28df4a3dba45909784630709416d947411012e9",
          "url": "https://github.com/Yiling-J/cacheme/commit/bfd27bb32c1e343e7f0f803b08bdd05a2d033227"
        },
        "date": 1674994754396,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.510682476349589,
            "unit": "iter/sec",
            "range": "stddev: 0.0007388607148886551",
            "extra": "mean: 181.4657266666586 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.529638906008719,
            "unit": "iter/sec",
            "range": "stddev: 0.002482820398935896",
            "extra": "mean: 180.84363499999276 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.455644667752912,
            "unit": "iter/sec",
            "range": "stddev: 0.007528719776992341",
            "extra": "mean: 183.29639499998507 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.4612187624221775,
            "unit": "iter/sec",
            "range": "stddev: 0.004209248261076001",
            "extra": "mean: 154.76956233333303 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.427764211576824,
            "unit": "iter/sec",
            "range": "stddev: 0.003120653786979947",
            "extra": "mean: 155.5750906666636 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.408226248579653,
            "unit": "iter/sec",
            "range": "stddev: 0.001525634338677452",
            "extra": "mean: 156.04942166666547 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 4.121513330065815,
            "unit": "iter/sec",
            "range": "stddev: 0.04038263225059772",
            "extra": "mean: 242.6293256666554 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.7992206842718694,
            "unit": "iter/sec",
            "range": "stddev: 0.014747896146336344",
            "extra": "mean: 357.2422873333115 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.739333453816535,
            "unit": "iter/sec",
            "range": "stddev: 0.018769585752126453",
            "extra": "mean: 574.9328846666799 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.9279555910684487,
            "unit": "iter/sec",
            "range": "stddev: 0.007862256831094936",
            "extra": "mean: 254.58536299998968 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.902732254886491,
            "unit": "iter/sec",
            "range": "stddev: 0.018065214620361477",
            "extra": "mean: 344.50301033331243 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.5522597545264256,
            "unit": "iter/sec",
            "range": "stddev: 0.0589641397718654",
            "extra": "mean: 644.2220749999971 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.64360147572662,
            "unit": "iter/sec",
            "range": "stddev: 0.008812624439209174",
            "extra": "mean: 608.4199940000113 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.3748630282969816,
            "unit": "iter/sec",
            "range": "stddev: 0.07519083116484136",
            "extra": "mean: 727.3451823333138 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.872072422826398,
            "unit": "iter/sec",
            "range": "stddev: 0.11802188860342717",
            "extra": "mean: 1.146693753666682 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 3.038166603374966,
            "unit": "iter/sec",
            "range": "stddev: 0.013940116537066888",
            "extra": "mean: 329.14587333332673 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 2.099414926020951,
            "unit": "iter/sec",
            "range": "stddev: 0.010189286707875214",
            "extra": "mean: 476.3231829999957 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.4239306710331594,
            "unit": "iter/sec",
            "range": "stddev: 0.05919897599778617",
            "extra": "mean: 702.2813823333346 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.7016459380735873,
            "unit": "iter/sec",
            "range": "stddev: 0.02697150606866731",
            "extra": "mean: 370.1447276666651 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.9823563793326406,
            "unit": "iter/sec",
            "range": "stddev: 0.024873605576806505",
            "extra": "mean: 504.45016366666096 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.265863935536287,
            "unit": "iter/sec",
            "range": "stddev: 0.042387435473018986",
            "extra": "mean: 789.9743186666797 msec\nrounds: 3"
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
          "id": "1f866fb225032885323666768e449a05996dd705",
          "message": "Update README_ZH.md",
          "timestamp": "2023-01-30T15:21:14+08:00",
          "tree_id": "f0854f4ad6960fb6874136c04ca1ea5d59bc6bb6",
          "url": "https://github.com/Yiling-J/cacheme/commit/1f866fb225032885323666768e449a05996dd705"
        },
        "date": 1675063557144,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 6.013482661096939,
            "unit": "iter/sec",
            "range": "stddev: 0.0019823816234648193",
            "extra": "mean: 166.29298799999978 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.827735133261407,
            "unit": "iter/sec",
            "range": "stddev: 0.012002957693517866",
            "extra": "mean: 171.59324799999354 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 6.002501158197228,
            "unit": "iter/sec",
            "range": "stddev: 0.0002786179688691724",
            "extra": "mean: 166.59721900001045 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.79623105763783,
            "unit": "iter/sec",
            "range": "stddev: 0.0017620082917796968",
            "extra": "mean: 147.14037700000895 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.787982393059685,
            "unit": "iter/sec",
            "range": "stddev: 0.003044595299270468",
            "extra": "mean: 147.3191800000014 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.680498758109314,
            "unit": "iter/sec",
            "range": "stddev: 0.004756962769930873",
            "extra": "mean: 149.68942233334323 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.2280817702553564,
            "unit": "iter/sec",
            "range": "stddev: 0.012741702710042326",
            "extra": "mean: 309.7814959999899 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.6580083827417944,
            "unit": "iter/sec",
            "range": "stddev: 0.013425665812231695",
            "extra": "mean: 376.22153733333147 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.5093209587394951,
            "unit": "iter/sec",
            "range": "stddev: 0.011991845359443205",
            "extra": "mean: 662.549601666664 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.2789182101231704,
            "unit": "iter/sec",
            "range": "stddev: 0.021442486178167984",
            "extra": "mean: 304.97863499999767 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.2530470128944695,
            "unit": "iter/sec",
            "range": "stddev: 0.08733166312611633",
            "extra": "mean: 443.843379333354 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.4289905712396473,
            "unit": "iter/sec",
            "range": "stddev: 0.011068709698950135",
            "extra": "mean: 699.7946803333358 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.3929818468207642,
            "unit": "iter/sec",
            "range": "stddev: 0.03265606398753407",
            "extra": "mean: 717.8844450000005 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.1758746872227335,
            "unit": "iter/sec",
            "range": "stddev: 0.028638480529968435",
            "extra": "mean: 850.4307566666588 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.7480822444113002,
            "unit": "iter/sec",
            "range": "stddev: 0.09056017253352544",
            "extra": "mean: 1.3367514166666865 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.6382829280049123,
            "unit": "iter/sec",
            "range": "stddev: 0.06734908922531661",
            "extra": "mean: 610.3951783333249 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.914812737368315,
            "unit": "iter/sec",
            "range": "stddev: 0.05249695305648899",
            "extra": "mean: 522.2442803333252 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.1532414858267883,
            "unit": "iter/sec",
            "range": "stddev: 0.05577042633836095",
            "extra": "mean: 867.1210776666385 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.048686272620681,
            "unit": "iter/sec",
            "range": "stddev: 0.04560927000172545",
            "extra": "mean: 488.11768466667144 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.5368310458386867,
            "unit": "iter/sec",
            "range": "stddev: 0.1244073733781766",
            "extra": "mean: 650.6896140000057 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.9423574264109283,
            "unit": "iter/sec",
            "range": "stddev: 0.11624146053692994",
            "extra": "mean: 1.0611684823333007 sec\nrounds: 3"
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
          "id": "d25e584c1b60b79062d93a08cbcca5e7bc9ed82c",
          "message": "add build_node API (#14)\n\n* add build_node API\r\n\r\n* codeql v2",
          "timestamp": "2023-01-31T16:45:28+08:00",
          "tree_id": "19e09a65edaca2b84a8db86d6c0b4ec7347eefaa",
          "url": "https://github.com/Yiling-J/cacheme/commit/d25e584c1b60b79062d93a08cbcca5e7bc9ed82c"
        },
        "date": 1675154997435,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.460083786295539,
            "unit": "iter/sec",
            "range": "stddev: 0.0036382700914701404",
            "extra": "mean: 183.1473726666862 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.639201338185545,
            "unit": "iter/sec",
            "range": "stddev: 0.0004057081251565126",
            "extra": "mean: 177.33007566666478 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.553776526662522,
            "unit": "iter/sec",
            "range": "stddev: 0.001391514127645556",
            "extra": "mean: 180.05765899999915 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.085272102546006,
            "unit": "iter/sec",
            "range": "stddev: 0.015982537927758576",
            "extra": "mean: 164.33118900001395 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.416495725694558,
            "unit": "iter/sec",
            "range": "stddev: 0.0002933900733224386",
            "extra": "mean: 155.8483076666827 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.300442008139747,
            "unit": "iter/sec",
            "range": "stddev: 0.0009367272886207152",
            "extra": "mean: 158.71902299998433 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.3955126014659722,
            "unit": "iter/sec",
            "range": "stddev: 0.003084260605622585",
            "extra": "mean: 294.5063433333341 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.788494216664341,
            "unit": "iter/sec",
            "range": "stddev: 0.0041323021946907835",
            "extra": "mean: 358.61648700000615 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.77016397889237,
            "unit": "iter/sec",
            "range": "stddev: 0.007183587811906379",
            "extra": "mean: 564.9194153333307 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.6985528706704,
            "unit": "iter/sec",
            "range": "stddev: 0.005638734914339314",
            "extra": "mean: 270.37601866665756 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.749063934795806,
            "unit": "iter/sec",
            "range": "stddev: 0.019741848839782757",
            "extra": "mean: 363.76018299999186 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.5780887046090657,
            "unit": "iter/sec",
            "range": "stddev: 0.007460454042023969",
            "extra": "mean: 633.6779403333518 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.5219657022705675,
            "unit": "iter/sec",
            "range": "stddev: 0.025947918479016615",
            "extra": "mean: 657.0450296666573 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.4231543480924533,
            "unit": "iter/sec",
            "range": "stddev: 0.019174247536100638",
            "extra": "mean: 702.6644729999703 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.9621540430694823,
            "unit": "iter/sec",
            "range": "stddev: 0.04713567983456222",
            "extra": "mean: 1.039334612999994 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 3.1788493335331207,
            "unit": "iter/sec",
            "range": "stddev: 0.026273805691516175",
            "extra": "mean: 314.5792376666539 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 2.020376620197258,
            "unit": "iter/sec",
            "range": "stddev: 0.11591203507126285",
            "extra": "mean: 494.9572223333121 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.3544339839185688,
            "unit": "iter/sec",
            "range": "stddev: 0.05255603953402608",
            "extra": "mean: 738.3157923333101 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.448904499428805,
            "unit": "iter/sec",
            "range": "stddev: 0.0477894418363308",
            "extra": "mean: 408.3458543333336 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 2.1399346112307485,
            "unit": "iter/sec",
            "range": "stddev: 0.008948281936079588",
            "extra": "mean: 467.30399833332586 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.123998845236541,
            "unit": "iter/sec",
            "range": "stddev: 0.08609674689859978",
            "extra": "mean: 889.680629333346 msec\nrounds: 3"
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
          "id": "5cc59ead541d43747f4c19b4053a08a5825add94",
          "message": "add missing py.typed",
          "timestamp": "2023-01-31T18:14:51+08:00",
          "tree_id": "6f71deda703ee32e464896bcfe739f14558e9632",
          "url": "https://github.com/Yiling-J/cacheme/commit/5cc59ead541d43747f4c19b4053a08a5825add94"
        },
        "date": 1675160425807,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.037368898402802,
            "unit": "iter/sec",
            "range": "stddev: 0.002849594099766164",
            "extra": "mean: 198.51633266665658 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.038290199388887,
            "unit": "iter/sec",
            "range": "stddev: 0.004268673820270187",
            "extra": "mean: 198.48003200000144 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.051693389086107,
            "unit": "iter/sec",
            "range": "stddev: 0.0036764675612767014",
            "extra": "mean: 197.95342333334057 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 5.747610491288637,
            "unit": "iter/sec",
            "range": "stddev: 0.0014159423876077021",
            "extra": "mean: 173.98534599998547 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.05884230366822,
            "unit": "iter/sec",
            "range": "stddev: 0.03065397300127788",
            "extra": "mean: 197.6736850000028 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 5.621795527358637,
            "unit": "iter/sec",
            "range": "stddev: 0.0005505238343858625",
            "extra": "mean: 177.87911266666848 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 2.8420543069190556,
            "unit": "iter/sec",
            "range": "stddev: 0.006568424751334003",
            "extra": "mean: 351.85816033334544 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.352505582846606,
            "unit": "iter/sec",
            "range": "stddev: 0.01129984467191811",
            "extra": "mean: 425.07869366667705 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.4519313810956815,
            "unit": "iter/sec",
            "range": "stddev: 0.007977719644008402",
            "extra": "mean: 688.7377826666731 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 2.605292980957671,
            "unit": "iter/sec",
            "range": "stddev: 0.0477493755513663",
            "extra": "mean: 383.8339900000089 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.080526314680998,
            "unit": "iter/sec",
            "range": "stddev: 0.03225240930514906",
            "extra": "mean: 480.6476096666567 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.056579917259673,
            "unit": "iter/sec",
            "range": "stddev: 0.1346202209701624",
            "extra": "mean: 946.4499406666581 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.2557676729008482,
            "unit": "iter/sec",
            "range": "stddev: 0.05039548538075527",
            "extra": "mean: 796.3256433333564 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.078182937777457,
            "unit": "iter/sec",
            "range": "stddev: 0.012552475426741613",
            "extra": "mean: 927.4863893333153 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.6827353030990065,
            "unit": "iter/sec",
            "range": "stddev: 0.05189554101425286",
            "extra": "mean: 1.4646964870000072 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.048344270410656,
            "unit": "iter/sec",
            "range": "stddev: 0.051059729424630766",
            "extra": "mean: 488.1991833333359 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.5450610567957828,
            "unit": "iter/sec",
            "range": "stddev: 0.023707590444843274",
            "extra": "mean: 647.223613333343 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.9812086279371409,
            "unit": "iter/sec",
            "range": "stddev: 0.028539432030550354",
            "extra": "mean: 1.0191512503333418 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.0810684949288443,
            "unit": "iter/sec",
            "range": "stddev: 0.03328253146161272",
            "extra": "mean: 480.522386666659 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.533553429023706,
            "unit": "iter/sec",
            "range": "stddev: 0.02090260597947576",
            "extra": "mean: 652.080312999999 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.7142954236013643,
            "unit": "iter/sec",
            "range": "stddev: 0.12791460477148592",
            "extra": "mean: 1.3999809700000014 sec\nrounds: 3"
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
          "id": "0a8ffd30f61d5ecb5150bc8474b5a6964917650c",
          "message": "add 0.2.1 changelog",
          "timestamp": "2023-01-31T18:24:21+08:00",
          "tree_id": "85378f1b640bb615394b5f2f766eaef312b3b95b",
          "url": "https://github.com/Yiling-J/cacheme/commit/0a8ffd30f61d5ecb5150bc8474b5a6964917650c"
        },
        "date": 1675160951099,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.349316034044965,
            "unit": "iter/sec",
            "range": "stddev: 0.006607016043628942",
            "extra": "mean: 186.93978699999056 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.467902815383496,
            "unit": "iter/sec",
            "range": "stddev: 0.00143269666513695",
            "extra": "mean: 182.8854743333371 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.391561740045675,
            "unit": "iter/sec",
            "range": "stddev: 0.011615261042338327",
            "extra": "mean: 185.4750160000075 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.433925833563359,
            "unit": "iter/sec",
            "range": "stddev: 0.0027026233665892662",
            "extra": "mean: 155.42609999999968 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.363327104011079,
            "unit": "iter/sec",
            "range": "stddev: 0.002185771008669536",
            "extra": "mean: 157.15049433332715 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.2006264654138,
            "unit": "iter/sec",
            "range": "stddev: 0.005666961515939426",
            "extra": "mean: 161.27402699999038 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.240124352084362,
            "unit": "iter/sec",
            "range": "stddev: 0.003226213279706573",
            "extra": "mean: 308.6301300000116 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.6262038636690552,
            "unit": "iter/sec",
            "range": "stddev: 0.020446079106449647",
            "extra": "mean: 380.77775066666203 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.66097622762709,
            "unit": "iter/sec",
            "range": "stddev: 0.0031670154254279485",
            "extra": "mean: 602.0555763333372 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.3836632488465685,
            "unit": "iter/sec",
            "range": "stddev: 0.030138889724856965",
            "extra": "mean: 295.537683999991 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.6964231025369036,
            "unit": "iter/sec",
            "range": "stddev: 0.017523798944558966",
            "extra": "mean: 370.8616793333211 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.3074551763572755,
            "unit": "iter/sec",
            "range": "stddev: 0.04302462197476356",
            "extra": "mean: 764.844576000011 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.44771315323904,
            "unit": "iter/sec",
            "range": "stddev: 0.0253273595046848",
            "extra": "mean: 690.7445703333224 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.2397411533206073,
            "unit": "iter/sec",
            "range": "stddev: 0.01888283243878931",
            "extra": "mean: 806.61999266664 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.8474916618092229,
            "unit": "iter/sec",
            "range": "stddev: 0.05178657635917263",
            "extra": "mean: 1.1799526119999844 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.9210338272528833,
            "unit": "iter/sec",
            "range": "stddev: 0.03906864060008447",
            "extra": "mean: 520.5530406666602 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.5856908417055466,
            "unit": "iter/sec",
            "range": "stddev: 0.08330604888596982",
            "extra": "mean: 630.6399543333517 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.2433701040036897,
            "unit": "iter/sec",
            "range": "stddev: 0.06401869323902297",
            "extra": "mean: 804.2657586666829 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.4384876295537494,
            "unit": "iter/sec",
            "range": "stddev: 0.01741219334447623",
            "extra": "mean: 410.0902493333554 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.716088110841734,
            "unit": "iter/sec",
            "range": "stddev: 0.010602068430000338",
            "extra": "mean: 582.7206619999856 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.2096700442697488,
            "unit": "iter/sec",
            "range": "stddev: 0.053855963868664355",
            "extra": "mean: 826.6717066666539 msec\nrounds: 3"
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
          "id": "f321948e66f3e8c2de037d7968f256c93a556d04",
          "message": "update pyproject",
          "timestamp": "2023-01-31T18:31:27+08:00",
          "tree_id": "fa73fe3131d008105eab4c05d01df5b0175054b8",
          "url": "https://github.com/Yiling-J/cacheme/commit/f321948e66f3e8c2de037d7968f256c93a556d04"
        },
        "date": 1675161359216,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.497722205726694,
            "unit": "iter/sec",
            "range": "stddev: 0.001732038481027525",
            "extra": "mean: 181.8935119999973 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.5240924934308,
            "unit": "iter/sec",
            "range": "stddev: 0.0014001459777355902",
            "extra": "mean: 181.0252093333323 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.428649277470391,
            "unit": "iter/sec",
            "range": "stddev: 0.0033742179549780256",
            "extra": "mean: 184.20788466665763 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.3011912320114165,
            "unit": "iter/sec",
            "range": "stddev: 0.002336051317359795",
            "extra": "mean: 158.70015099998605 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.282870459885205,
            "unit": "iter/sec",
            "range": "stddev: 0.001923170112922814",
            "extra": "mean: 159.16291866668075 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.286776292272473,
            "unit": "iter/sec",
            "range": "stddev: 0.0015447675890645379",
            "extra": "mean: 159.06403433333102 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.3209094384443043,
            "unit": "iter/sec",
            "range": "stddev: 0.015403315923974903",
            "extra": "mean: 301.12233366666413 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.7659005271256962,
            "unit": "iter/sec",
            "range": "stddev: 0.002455796816172529",
            "extra": "mean: 361.54590166667805 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.7307002580372113,
            "unit": "iter/sec",
            "range": "stddev: 0.005467921646632352",
            "extra": "mean: 577.800803666662 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.8292708022873727,
            "unit": "iter/sec",
            "range": "stddev: 0.0041559661391650975",
            "extra": "mean: 261.1463256666677 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.1673169650649036,
            "unit": "iter/sec",
            "range": "stddev: 0.05935161030156926",
            "extra": "mean: 461.39997800001237 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.5816883919484264,
            "unit": "iter/sec",
            "range": "stddev: 0.018721602069873635",
            "extra": "mean: 632.2357836666773 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.5577228987338736,
            "unit": "iter/sec",
            "range": "stddev: 0.007622091963638661",
            "extra": "mean: 641.9627013333411 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.3560408441726424,
            "unit": "iter/sec",
            "range": "stddev: 0.02226502429185957",
            "extra": "mean: 737.4409143333196 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.9352490405633306,
            "unit": "iter/sec",
            "range": "stddev: 0.03257419561679537",
            "extra": "mean: 1.0692339223333154 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.1936250551886327,
            "unit": "iter/sec",
            "range": "stddev: 0.06647819060313698",
            "extra": "mean: 455.8664196666958 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.6948108529312438,
            "unit": "iter/sec",
            "range": "stddev: 0.16010557781663137",
            "extra": "mean: 590.0363443333276 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.4033485695963466,
            "unit": "iter/sec",
            "range": "stddev: 0.06624379808877137",
            "extra": "mean: 712.5813369999984 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.1293610744136307,
            "unit": "iter/sec",
            "range": "stddev: 0.07347226988364573",
            "extra": "mean: 469.6244390000288 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.983072591512386,
            "unit": "iter/sec",
            "range": "stddev: 0.02064447598607424",
            "extra": "mean: 504.26797500002374 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.2941398428766304,
            "unit": "iter/sec",
            "range": "stddev: 0.0541806851204078",
            "extra": "mean: 772.7140196666747 msec\nrounds: 3"
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
          "id": "35ac2b13d19c335ac5b5e61e263be8f4b258ea72",
          "message": "Update README_ZH.md",
          "timestamp": "2023-01-31T18:39:34+08:00",
          "tree_id": "50948a74b0ffe89cc96d844e042686d57a65dc2c",
          "url": "https://github.com/Yiling-J/cacheme/commit/35ac2b13d19c335ac5b5e61e263be8f4b258ea72"
        },
        "date": 1675161858586,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.440709384353708,
            "unit": "iter/sec",
            "range": "stddev: 0.0012514807123006394",
            "extra": "mean: 183.7995616666793 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.456066536455,
            "unit": "iter/sec",
            "range": "stddev: 0.001149840181155428",
            "extra": "mean: 183.28222233333236 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.416102803725911,
            "unit": "iter/sec",
            "range": "stddev: 0.002687990987548707",
            "extra": "mean: 184.63460466667433 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.1211887517502035,
            "unit": "iter/sec",
            "range": "stddev: 0.006075248731187813",
            "extra": "mean: 163.36696033332979 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.205189187499831,
            "unit": "iter/sec",
            "range": "stddev: 0.0052430607313435455",
            "extra": "mean: 161.15544100000534 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.1123659209754155,
            "unit": "iter/sec",
            "range": "stddev: 0.0022869525031012235",
            "extra": "mean: 163.602770666652 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.265392648690093,
            "unit": "iter/sec",
            "range": "stddev: 0.03181369087149259",
            "extra": "mean: 306.241885000001 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.5757871580226466,
            "unit": "iter/sec",
            "range": "stddev: 0.008222139839887375",
            "extra": "mean: 388.23083533333147 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.598711224738685,
            "unit": "iter/sec",
            "range": "stddev: 0.012306394813861456",
            "extra": "mean: 625.5038336666795 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.325653925437421,
            "unit": "iter/sec",
            "range": "stddev: 0.022652324193743197",
            "extra": "mean: 300.69274266668344 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.4735014959650696,
            "unit": "iter/sec",
            "range": "stddev: 0.03137311877232146",
            "extra": "mean: 404.2851809999964 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.3929528203587835,
            "unit": "iter/sec",
            "range": "stddev: 0.005460144584645731",
            "extra": "mean: 717.8994043333281 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.331145868427193,
            "unit": "iter/sec",
            "range": "stddev: 0.013687823438402568",
            "extra": "mean: 751.2324709999992 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.1422395319840903,
            "unit": "iter/sec",
            "range": "stddev: 0.03650430589553104",
            "extra": "mean: 875.4731139999876 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.7680101248556573,
            "unit": "iter/sec",
            "range": "stddev: 0.03149236850725642",
            "extra": "mean: 1.3020661676666616 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.4411199845795646,
            "unit": "iter/sec",
            "range": "stddev: 0.05560139911104671",
            "extra": "mean: 409.6480329999963 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.4533588076902126,
            "unit": "iter/sec",
            "range": "stddev: 0.07091788718692185",
            "extra": "mean: 688.0613340000158 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.136225857357942,
            "unit": "iter/sec",
            "range": "stddev: 0.041057332890097505",
            "extra": "mean: 880.1067089999984 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.2941750810571233,
            "unit": "iter/sec",
            "range": "stddev: 0.029991154554121935",
            "extra": "mean: 435.88652333335176 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.912001635220272,
            "unit": "iter/sec",
            "range": "stddev: 0.012698767933986891",
            "extra": "mean: 523.0121050000017 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.9692673737921117,
            "unit": "iter/sec",
            "range": "stddev: 0.09787562831766389",
            "extra": "mean: 1.0317070676666351 sec\nrounds: 3"
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
          "id": "70bbffdfbd814525b283ea0bd9c04f5b19b0adba",
          "message": "Merge branch 'master' of github.com:Yiling-J/cacheme",
          "timestamp": "2023-02-04T01:51:41+08:00",
          "tree_id": "5308b2cc382140719a052bdf08c92e655b3c4c3c",
          "url": "https://github.com/Yiling-J/cacheme/commit/70bbffdfbd814525b283ea0bd9c04f5b19b0adba"
        },
        "date": 1675446993706,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.820396667482902,
            "unit": "iter/sec",
            "range": "stddev: 0.00889002694536212",
            "extra": "mean: 171.80959600000278 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.788961263640524,
            "unit": "iter/sec",
            "range": "stddev: 0.008892904847917035",
            "extra": "mean: 172.74256199999627 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.809620243501652,
            "unit": "iter/sec",
            "range": "stddev: 0.009391687866531925",
            "extra": "mean: 172.1282903333569 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.857316821392999,
            "unit": "iter/sec",
            "range": "stddev: 0.01031390808699789",
            "extra": "mean: 145.8296336666649 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.554051029448277,
            "unit": "iter/sec",
            "range": "stddev: 0.011487216762250563",
            "extra": "mean: 152.57738999999523 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.597771867782319,
            "unit": "iter/sec",
            "range": "stddev: 0.010660236090136117",
            "extra": "mean: 151.56631966666131 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.427021228247753,
            "unit": "iter/sec",
            "range": "stddev: 0.008145030825647756",
            "extra": "mean: 291.79860100000116 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.749546969748044,
            "unit": "iter/sec",
            "range": "stddev: 0.01971241164706577",
            "extra": "mean: 363.69627833331225 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.7842701940672163,
            "unit": "iter/sec",
            "range": "stddev: 0.007757166119538082",
            "extra": "mean: 560.4532336666542 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.7019976083983317,
            "unit": "iter/sec",
            "range": "stddev: 0.01457451867902546",
            "extra": "mean: 270.1244316666778 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.266881327533038,
            "unit": "iter/sec",
            "range": "stddev: 0.05087493991519945",
            "extra": "mean: 441.1346936666784 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.606596451968197,
            "unit": "iter/sec",
            "range": "stddev: 0.014033700565396634",
            "extra": "mean: 622.4338406666637 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.6324630514094407,
            "unit": "iter/sec",
            "range": "stddev: 0.04371034609187019",
            "extra": "mean: 612.5712916666733 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.5064310649389259,
            "unit": "iter/sec",
            "range": "stddev: 0.06686992109649358",
            "extra": "mean: 663.8206176666586 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.9580279134889585,
            "unit": "iter/sec",
            "range": "stddev: 0.021260851281864276",
            "extra": "mean: 1.0438109223333452 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 3.0120248888916006,
            "unit": "iter/sec",
            "range": "stddev: 0.0028245324787017963",
            "extra": "mean: 332.0025686666857 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.8946725101953588,
            "unit": "iter/sec",
            "range": "stddev: 0.07033836740277298",
            "extra": "mean: 527.795698000015 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.2359485732823228,
            "unit": "iter/sec",
            "range": "stddev: 0.06462769817708701",
            "extra": "mean: 809.095153000006 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.4565893053585013,
            "unit": "iter/sec",
            "range": "stddev: 0.04476161862197903",
            "extra": "mean: 407.0684496666672 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 2.143143449983137,
            "unit": "iter/sec",
            "range": "stddev: 0.02882805955859273",
            "extra": "mean: 466.60432366665344 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.052429389536492,
            "unit": "iter/sec",
            "range": "stddev: 0.06363226667089428",
            "extra": "mean: 950.1825110000178 msec\nrounds: 3"
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
          "id": "5b219cd8b013f8713045c527d6ef61a124d72102",
          "message": "fix local cache set and release 0.2.2",
          "timestamp": "2023-02-04T02:00:23+08:00",
          "tree_id": "b5facaf4d8e8011cda323dab88df3db331dd0058",
          "url": "https://github.com/Yiling-J/cacheme/commit/5b219cd8b013f8713045c527d6ef61a124d72102"
        },
        "date": 1675447519540,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.576718334144377,
            "unit": "iter/sec",
            "range": "stddev: 0.0011196989231058853",
            "extra": "mean: 179.31692799999155 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.58322903706413,
            "unit": "iter/sec",
            "range": "stddev: 0.0018422395891771368",
            "extra": "mean: 179.10782333332995 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.613027752094677,
            "unit": "iter/sec",
            "range": "stddev: 0.0004439888120981382",
            "extra": "mean: 178.15696699999725 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.712998003672979,
            "unit": "iter/sec",
            "range": "stddev: 0.0011834474502140334",
            "extra": "mean: 148.9647396666669 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.567959661623384,
            "unit": "iter/sec",
            "range": "stddev: 0.0040986721434483385",
            "extra": "mean: 152.25428466666813 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.3262101402100575,
            "unit": "iter/sec",
            "range": "stddev: 0.004920116328148056",
            "extra": "mean: 158.07252333334532 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.3922614298465774,
            "unit": "iter/sec",
            "range": "stddev: 0.006026604554074631",
            "extra": "mean: 294.78860066667306 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.711301855454361,
            "unit": "iter/sec",
            "range": "stddev: 0.002312261566088562",
            "extra": "mean: 368.8265096666707 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.68050909100407,
            "unit": "iter/sec",
            "range": "stddev: 0.0025900828723004836",
            "extra": "mean: 595.0577746666758 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 2.5657749625388373,
            "unit": "iter/sec",
            "range": "stddev: 0.08024932223316725",
            "extra": "mean: 389.74579399999243 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.82210533358766,
            "unit": "iter/sec",
            "range": "stddev: 0.026516135018909606",
            "extra": "mean: 354.3453846666769 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.4892854113171838,
            "unit": "iter/sec",
            "range": "stddev: 0.017472219216067293",
            "extra": "mean: 671.4629663333369 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.437770696966912,
            "unit": "iter/sec",
            "range": "stddev: 0.004455279790575114",
            "extra": "mean: 695.5211996666625 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.4165629331796272,
            "unit": "iter/sec",
            "range": "stddev: 0.030930681286122842",
            "extra": "mean: 705.9340440000028 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.8261052581414337,
            "unit": "iter/sec",
            "range": "stddev: 0.09539967319936891",
            "extra": "mean: 1.2104994976666699 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.9315885263698767,
            "unit": "iter/sec",
            "range": "stddev: 0.015756742672839823",
            "extra": "mean: 341.11199133333986 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 2.0658390294385627,
            "unit": "iter/sec",
            "range": "stddev: 0.04682240347592332",
            "extra": "mean: 484.06482100000403 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.3836877807631807,
            "unit": "iter/sec",
            "range": "stddev: 0.030647857971312083",
            "extra": "mean: 722.7063893333252 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.42519824435442,
            "unit": "iter/sec",
            "range": "stddev: 0.022714067327772935",
            "extra": "mean: 412.33742533332435 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.738186287258942,
            "unit": "iter/sec",
            "range": "stddev: 0.0499645592882847",
            "extra": "mean: 575.3123283333252 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.228395189625572,
            "unit": "iter/sec",
            "range": "stddev: 0.018748620463142147",
            "extra": "mean: 814.0702669999959 msec\nrounds: 3"
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
          "id": "aaf0d9173500429f677853b4dcb18f4117a287c5",
          "message": "fix ci",
          "timestamp": "2023-02-05T22:17:07+08:00",
          "tree_id": "2c03f66bd183613e9f04570aa2f6f0bef2fd0707",
          "url": "https://github.com/Yiling-J/cacheme/commit/aaf0d9173500429f677853b4dcb18f4117a287c5"
        },
        "date": 1675607031926,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 13.794660310466044,
            "unit": "iter/sec",
            "range": "stddev: 0.00021540206600914534",
            "extra": "mean: 72.49181766667334 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 13.730808631853266,
            "unit": "iter/sec",
            "range": "stddev: 0.00008570295929353142",
            "extra": "mean: 72.8289226666637 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 13.823983430684466,
            "unit": "iter/sec",
            "range": "stddev: 0.0005908002100965969",
            "extra": "mean: 72.3380496666645 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 13.430382350627648,
            "unit": "iter/sec",
            "range": "stddev: 0.0004945565411663122",
            "extra": "mean: 74.45804400001066 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 13.032297626087974,
            "unit": "iter/sec",
            "range": "stddev: 0.004026890458961047",
            "extra": "mean: 76.73244033333049 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 13.301949010435765,
            "unit": "iter/sec",
            "range": "stddev: 0.0005227112430753739",
            "extra": "mean: 75.17695333334018 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 0.9165374257242543,
            "unit": "iter/sec",
            "range": "stddev: 0.3205779495839352",
            "extra": "mean: 1.091062920000013 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 0.5127461141481898,
            "unit": "iter/sec",
            "range": "stddev: 0.002538548644533894",
            "extra": "mean: 1.9502829420000012 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 0.28464584760010897,
            "unit": "iter/sec",
            "range": "stddev: 0.06426503219749008",
            "extra": "mean: 3.5131374950000045 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 0.6097233316239871,
            "unit": "iter/sec",
            "range": "stddev: 0.41854077701348424",
            "extra": "mean: 1.6400881319999978 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 0.4827262483128375,
            "unit": "iter/sec",
            "range": "stddev: 0.24847454334166946",
            "extra": "mean: 2.0715674846666636 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 0.26115353044058953,
            "unit": "iter/sec",
            "range": "stddev: 0.1542710572599008",
            "extra": "mean: 3.8291651593333236 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 0.23171735294011586,
            "unit": "iter/sec",
            "range": "stddev: 0.1691062020149892",
            "extra": "mean: 4.315602553333311 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.20447723145608665,
            "unit": "iter/sec",
            "range": "stddev: 0.5441985880453781",
            "extra": "mean: 4.890520048999974 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.14625486011170774,
            "unit": "iter/sec",
            "range": "stddev: 0.15919322943899422",
            "extra": "mean: 6.837379621000025 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 0.3948320838122313,
            "unit": "iter/sec",
            "range": "stddev: 0.06565834565289326",
            "extra": "mean: 2.532722240666658 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 0.27216934010400434,
            "unit": "iter/sec",
            "range": "stddev: 0.30531689462348754",
            "extra": "mean: 3.6741831376666787 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.16417114288695622,
            "unit": "iter/sec",
            "range": "stddev: 0.07505477150626035",
            "extra": "mean: 6.091204473666683 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 0.3933860287084119,
            "unit": "iter/sec",
            "range": "stddev: 0.4149029124008969",
            "extra": "mean: 2.5420323219999923 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 0.27722166331788334,
            "unit": "iter/sec",
            "range": "stddev: 0.2626912582472496",
            "extra": "mean: 3.6072217013333634 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.17891291140264864,
            "unit": "iter/sec",
            "range": "stddev: 0.13922214978587502",
            "extra": "mean: 5.589311538000023 sec\nrounds: 3"
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
          "id": "3723e6650fcdaaf7f3beba0b80b9b451434b6ed5",
          "message": "fix ci",
          "timestamp": "2023-02-05T23:39:51+08:00",
          "tree_id": "a37273b955ada82704020d9621c6d1d2cf33caeb",
          "url": "https://github.com/Yiling-J/cacheme/commit/3723e6650fcdaaf7f3beba0b80b9b451434b6ed5"
        },
        "date": 1675611931878,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 12.943864921485861,
            "unit": "iter/sec",
            "range": "stddev: 0.0004024611292218625",
            "extra": "mean: 77.2566776666584 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 12.999481459348829,
            "unit": "iter/sec",
            "range": "stddev: 0.0002702004321389437",
            "extra": "mean: 76.92614533334563 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 12.982790151858524,
            "unit": "iter/sec",
            "range": "stddev: 0.0002804516378004445",
            "extra": "mean: 77.02504533332899 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 12.682773831708268,
            "unit": "iter/sec",
            "range": "stddev: 0.0003529687303440999",
            "extra": "mean: 78.84710500000362 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 12.609105009509944,
            "unit": "iter/sec",
            "range": "stddev: 0.0005457260669628079",
            "extra": "mean: 79.30776999999505 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 12.767281930069387,
            "unit": "iter/sec",
            "range": "stddev: 0.0002983188012784857",
            "extra": "mean: 78.32520699999652 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 1.1044118506762133,
            "unit": "iter/sec",
            "range": "stddev: 0.08602150973952381",
            "extra": "mean: 905.4593170000089 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 0.6683280583372989,
            "unit": "iter/sec",
            "range": "stddev: 0.00910580761155737",
            "extra": "mean: 1.4962711613333302 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 0.36238708760941785,
            "unit": "iter/sec",
            "range": "stddev: 0.03368339098753642",
            "extra": "mean: 2.7594802193333217 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 1.2062767302051736,
            "unit": "iter/sec",
            "range": "stddev: 0.03339070963892336",
            "extra": "mean: 828.9971736667022 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 0.7049370404973649,
            "unit": "iter/sec",
            "range": "stddev: 0.2679975909893641",
            "extra": "mean: 1.4185664003333613 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 0.3395608674560118,
            "unit": "iter/sec",
            "range": "stddev: 0.1619882212207565",
            "extra": "mean: 2.9449801076666895 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 0.31722124704110854,
            "unit": "iter/sec",
            "range": "stddev: 0.17650184000713723",
            "extra": "mean: 3.1523739639999917 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.2551920899673747,
            "unit": "iter/sec",
            "range": "stddev: 0.2336045227721678",
            "extra": "mean: 3.918616756999976 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.17718304951117902,
            "unit": "iter/sec",
            "range": "stddev: 0.11062586215947015",
            "extra": "mean: 5.643880736666669 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 0.652976602844261,
            "unit": "iter/sec",
            "range": "stddev: 0.04435279274243251",
            "extra": "mean: 1.5314484403333306 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 0.4107640497422364,
            "unit": "iter/sec",
            "range": "stddev: 0.19867865963451506",
            "extra": "mean: 2.4344876350000013 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.24918125311288591,
            "unit": "iter/sec",
            "range": "stddev: 0.2611817508796672",
            "extra": "mean: 4.013142993333342 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 0.5592708342743614,
            "unit": "iter/sec",
            "range": "stddev: 0.08698167089094357",
            "extra": "mean: 1.7880424630000107 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 0.356684778219673,
            "unit": "iter/sec",
            "range": "stddev: 0.15706603766109709",
            "extra": "mean: 2.803595950999977 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.21891790213164733,
            "unit": "iter/sec",
            "range": "stddev: 0.16222538314566406",
            "extra": "mean: 4.567922450666667 sec\nrounds: 3"
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
          "id": "4897cb3eb42f9fe2798211de00c2b834bf9b8952",
          "message": "fix ci",
          "timestamp": "2023-02-06T00:22:05+08:00",
          "tree_id": "9dc273524e8ab9bf13f35ff1674064577161da4f",
          "url": "https://github.com/Yiling-J/cacheme/commit/4897cb3eb42f9fe2798211de00c2b834bf9b8952"
        },
        "date": 1675614952511,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 13.45868404720069,
            "unit": "iter/sec",
            "range": "stddev: 0.0004647076697200501",
            "extra": "mean: 74.30146933332556 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 13.187689834875561,
            "unit": "iter/sec",
            "range": "stddev: 0.0023346618153979952",
            "extra": "mean: 75.82829233331267 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 13.426500356367642,
            "unit": "iter/sec",
            "range": "stddev: 0.00050213124510648",
            "extra": "mean: 74.47957199999185 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 13.267886915995755,
            "unit": "iter/sec",
            "range": "stddev: 0.000147635945503533",
            "extra": "mean: 75.3699519999979 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 12.874869971326758,
            "unit": "iter/sec",
            "range": "stddev: 0.0009552332434763312",
            "extra": "mean: 77.67068733331446 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 13.01968964627535,
            "unit": "iter/sec",
            "range": "stddev: 0.0010981542361546115",
            "extra": "mean: 76.80674633331819 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 1.4616466356448037,
            "unit": "iter/sec",
            "range": "stddev: 0.1593808251992649",
            "extra": "mean: 684.159889000019 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 0.766920558504034,
            "unit": "iter/sec",
            "range": "stddev: 0.02985336636324715",
            "extra": "mean: 1.303916017000006 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 0.42473785398038794,
            "unit": "iter/sec",
            "range": "stddev: 0.0346348337065131",
            "extra": "mean: 2.3543933996666433 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 1.1674526878503484,
            "unit": "iter/sec",
            "range": "stddev: 0.029250760317607975",
            "extra": "mean: 856.5657609999752 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 0.7859468853102332,
            "unit": "iter/sec",
            "range": "stddev: 0.058314864740407917",
            "extra": "mean: 1.2723506113333276 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 0.36065616968429404,
            "unit": "iter/sec",
            "range": "stddev: 0.2192925390112925",
            "extra": "mean: 2.7727239516666677 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 0.331689090476117,
            "unit": "iter/sec",
            "range": "stddev: 0.12306989509064042",
            "extra": "mean: 3.0148715430000075 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.2839136529788241,
            "unit": "iter/sec",
            "range": "stddev: 0.03971706563380418",
            "extra": "mean: 3.5221976453333355 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.19328978842992717,
            "unit": "iter/sec",
            "range": "stddev: 0.08385579521494038",
            "extra": "mean: 5.173579049999982 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 0.6472032199611503,
            "unit": "iter/sec",
            "range": "stddev: 0.1988478188869658",
            "extra": "mean: 1.5451097416666546 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 0.45536105158696205,
            "unit": "iter/sec",
            "range": "stddev: 0.05914285547018874",
            "extra": "mean: 2.196059580666675 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.26249340079778233,
            "unit": "iter/sec",
            "range": "stddev: 0.25894789380162586",
            "extra": "mean: 3.809619582666661 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 0.49603238911870706,
            "unit": "iter/sec",
            "range": "stddev: 0.11229382591044944",
            "extra": "mean: 2.0159973863333485 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 0.5084215663428739,
            "unit": "iter/sec",
            "range": "stddev: 0.161701341901572",
            "extra": "mean: 1.9668717186666527 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.2832129331746175,
            "unit": "iter/sec",
            "range": "stddev: 0.2553053532961241",
            "extra": "mean: 3.5309121966666717 sec\nrounds: 3"
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
          "id": "162d807221f16f92f0edf5324fb12dbbe54c3686",
          "message": "refactor and add theine as local cache",
          "timestamp": "2023-02-06T12:13:08+08:00",
          "tree_id": "b253fe5e8da962baec508b6dc608f11a22dcbcf4",
          "url": "https://github.com/Yiling-J/cacheme/commit/162d807221f16f92f0edf5324fb12dbbe54c3686"
        },
        "date": 1675657648532,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 24.78563564679075,
            "unit": "iter/sec",
            "range": "stddev: 0.0006367044140182575",
            "extra": "mean: 40.34594933333816 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 24.692018510782052,
            "unit": "iter/sec",
            "range": "stddev: 0.000598333200279055",
            "extra": "mean: 40.49891666666857 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 24.824316245229383,
            "unit": "iter/sec",
            "range": "stddev: 0.00027617839040020416",
            "extra": "mean: 40.28308333334962 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 23.74660360244701,
            "unit": "iter/sec",
            "range": "stddev: 0.00034831069943935106",
            "extra": "mean: 42.11128533332461 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 23.47798907611685,
            "unit": "iter/sec",
            "range": "stddev: 0.0006997284822076299",
            "extra": "mean: 42.59308566666201 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 21.34285364994502,
            "unit": "iter/sec",
            "range": "stddev: 0.008429892413485665",
            "extra": "mean: 46.854090666670345 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 1.5918306292761524,
            "unit": "iter/sec",
            "range": "stddev: 0.010192851585903521",
            "extra": "mean: 628.2075376666967 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 1.1479586703133613,
            "unit": "iter/sec",
            "range": "stddev: 0.12529923268116372",
            "extra": "mean: 871.1115006666811 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 0.5450438237172236,
            "unit": "iter/sec",
            "range": "stddev: 0.05339870607931292",
            "extra": "mean: 1.8347148550000156 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 1.325686429916301,
            "unit": "iter/sec",
            "range": "stddev: 0.05744932071242752",
            "extra": "mean: 754.3261946666652 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 0.9628764892127231,
            "unit": "iter/sec",
            "range": "stddev: 0.06640532884000602",
            "extra": "mean: 1.0385548003333536 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 0.47856733273126323,
            "unit": "iter/sec",
            "range": "stddev: 0.02200874147773428",
            "extra": "mean: 2.0895701223333276 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 0.458576032361,
            "unit": "iter/sec",
            "range": "stddev: 0.025158631949341724",
            "extra": "mean: 2.1806634656666497 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.37076044981981515,
            "unit": "iter/sec",
            "range": "stddev: 0.1756613627378005",
            "extra": "mean: 2.6971593126666753 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.2653575398209342,
            "unit": "iter/sec",
            "range": "stddev: 0.15156360905995991",
            "extra": "mean: 3.768500419000001 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 0.8225164059136102,
            "unit": "iter/sec",
            "range": "stddev: 0.12319092227912944",
            "extra": "mean: 1.2157812206666563 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 0.7252458590231013,
            "unit": "iter/sec",
            "range": "stddev: 0.0824624581134636",
            "extra": "mean: 1.3788427573333404 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.35385926191104683,
            "unit": "iter/sec",
            "range": "stddev: 0.23983537789340675",
            "extra": "mean: 2.8259822693333376 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 0.8265759156478405,
            "unit": "iter/sec",
            "range": "stddev: 0.09744281573339761",
            "extra": "mean: 1.2098102316666655 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 0.6388632214350328,
            "unit": "iter/sec",
            "range": "stddev: 0.12227668584082983",
            "extra": "mean: 1.5652802766666885 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.36039636726920066,
            "unit": "iter/sec",
            "range": "stddev: 0.2771889604737258",
            "extra": "mean: 2.7747227520000024 sec\nrounds: 3"
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
          "id": "e125681b75f4991dacbd1df996daa65667d400b7",
          "message": "update readme",
          "timestamp": "2023-02-06T13:47:46+08:00",
          "tree_id": "00748b7da67985fdc121817188a18ec2aa40663a",
          "url": "https://github.com/Yiling-J/cacheme/commit/e125681b75f4991dacbd1df996daa65667d400b7"
        },
        "date": 1675663191273,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 24.48199845182562,
            "unit": "iter/sec",
            "range": "stddev: 0.0005811996421077748",
            "extra": "mean: 40.84633866666346 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 24.4278745466728,
            "unit": "iter/sec",
            "range": "stddev: 0.0005648196746612372",
            "extra": "mean: 40.93684033333981 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 24.39612951827078,
            "unit": "iter/sec",
            "range": "stddev: 0.00034332246599743017",
            "extra": "mean: 40.990108666666934 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 23.567818806454948,
            "unit": "iter/sec",
            "range": "stddev: 0.00025054322387947284",
            "extra": "mean: 42.430740333344374 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 23.47158293889385,
            "unit": "iter/sec",
            "range": "stddev: 0.0004224040151374787",
            "extra": "mean: 42.60471066665635 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 20.80526140094027,
            "unit": "iter/sec",
            "range": "stddev: 0.009990197099769284",
            "extra": "mean: 48.0647650000113 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 1.9573736719791088,
            "unit": "iter/sec",
            "range": "stddev: 0.16087300437651972",
            "extra": "mean: 510.8886536666736 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 1.0652067713395068,
            "unit": "iter/sec",
            "range": "stddev: 0.023733291253163157",
            "extra": "mean: 938.7848696666575 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 0.5820204194798446,
            "unit": "iter/sec",
            "range": "stddev: 0.07739710087221707",
            "extra": "mean: 1.7181527770000002 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 1.548999075728772,
            "unit": "iter/sec",
            "range": "stddev: 0.01382680457298207",
            "extra": "mean: 645.5781773333342 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 0.8771400511576286,
            "unit": "iter/sec",
            "range": "stddev: 0.17164079329961185",
            "extra": "mean: 1.1400687936666714 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 0.45588452879981933,
            "unit": "iter/sec",
            "range": "stddev: 0.09204815570144739",
            "extra": "mean: 2.193537917666655 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 0.46852070186894795,
            "unit": "iter/sec",
            "range": "stddev: 0.019897571348968957",
            "extra": "mean: 2.134377405333339 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.3879738367096332,
            "unit": "iter/sec",
            "range": "stddev: 0.040493657382515806",
            "extra": "mean: 2.5774933910000186 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.25576200012106987,
            "unit": "iter/sec",
            "range": "stddev: 0.09131571550384371",
            "extra": "mean: 3.9098849693333286 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 0.9046530308466177,
            "unit": "iter/sec",
            "range": "stddev: 0.10041039471674526",
            "extra": "mean: 1.105396174999991 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 0.7033118464405994,
            "unit": "iter/sec",
            "range": "stddev: 0.08369342143824653",
            "extra": "mean: 1.4218443853333536 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.3966637665719276,
            "unit": "iter/sec",
            "range": "stddev: 0.11916829952681889",
            "extra": "mean: 2.5210268349999865 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 0.6879131359792555,
            "unit": "iter/sec",
            "range": "stddev: 0.22635193359318842",
            "extra": "mean: 1.4536719066666517 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 0.5540698915304315,
            "unit": "iter/sec",
            "range": "stddev: 0.10454962159407219",
            "extra": "mean: 1.8048264583333282 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.3474595039260601,
            "unit": "iter/sec",
            "range": "stddev: 0.16464446421237647",
            "extra": "mean: 2.8780332346666833 sec\nrounds: 3"
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
          "id": "f8a05ce87634216a983a95ba93fe296b1c490959",
          "message": "bump theine to 0.1.1",
          "timestamp": "2023-02-08T20:54:46+08:00",
          "tree_id": "ceb1eea3a2e63fc1c6dcc4b6bf71438324d59c35",
          "url": "https://github.com/Yiling-J/cacheme/commit/f8a05ce87634216a983a95ba93fe296b1c490959"
        },
        "date": 1675861684118,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 20.028605254597075,
            "unit": "iter/sec",
            "range": "stddev: 0.0013924854852050165",
            "extra": "mean: 49.928588999999114 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 19.35401872360483,
            "unit": "iter/sec",
            "range": "stddev: 0.002227352341491292",
            "extra": "mean: 51.66885566667171 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 19.32160841028657,
            "unit": "iter/sec",
            "range": "stddev: 0.0028926131636659446",
            "extra": "mean: 51.75552566667344 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 19.591543101441417,
            "unit": "iter/sec",
            "range": "stddev: 0.0008948199833025864",
            "extra": "mean: 51.04243166667288 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 17.73045307087551,
            "unit": "iter/sec",
            "range": "stddev: 0.0020865223809963416",
            "extra": "mean: 56.400138000005505 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 16.79729446650044,
            "unit": "iter/sec",
            "range": "stddev: 0.013138428029116182",
            "extra": "mean: 59.5333969999956 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 1.069902209579272,
            "unit": "iter/sec",
            "range": "stddev: 0.05117744567534111",
            "extra": "mean: 934.6648609999969 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 0.7779566128592198,
            "unit": "iter/sec",
            "range": "stddev: 0.08337886260747737",
            "extra": "mean: 1.285418728333326 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 0.4185907733989841,
            "unit": "iter/sec",
            "range": "stddev: 0.031225038706808286",
            "extra": "mean: 2.388968088999993 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 1.163277296567561,
            "unit": "iter/sec",
            "range": "stddev: 0.0553183060803224",
            "extra": "mean: 859.6402620000086 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 0.739456612802519,
            "unit": "iter/sec",
            "range": "stddev: 0.03894336119549929",
            "extra": "mean: 1.3523443873333274 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 0.34530600203668743,
            "unit": "iter/sec",
            "range": "stddev: 0.11027168157302379",
            "extra": "mean: 2.89598209733335 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 0.3214277060992684,
            "unit": "iter/sec",
            "range": "stddev: 0.2652646270359047",
            "extra": "mean: 3.1111194866666665 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.27909893159263616,
            "unit": "iter/sec",
            "range": "stddev: 0.11260452739925848",
            "extra": "mean: 3.582958896666677 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.1884754671844542,
            "unit": "iter/sec",
            "range": "stddev: 0.009017632882914182",
            "extra": "mean: 5.3057303156666835 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 0.7209751467444409,
            "unit": "iter/sec",
            "range": "stddev: 0.1414067285191148",
            "extra": "mean: 1.3870103630000206 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 0.4635663871860888,
            "unit": "iter/sec",
            "range": "stddev: 0.18031962596766568",
            "extra": "mean: 2.1571883286666584 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.2571863192059028,
            "unit": "iter/sec",
            "range": "stddev: 0.31843044976553",
            "extra": "mean: 3.8882317033333416 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 0.5020460890870896,
            "unit": "iter/sec",
            "range": "stddev: 0.12214925513375814",
            "extra": "mean: 1.9918489990000314 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 0.4329894464084684,
            "unit": "iter/sec",
            "range": "stddev: 0.12522705508454152",
            "extra": "mean: 2.3095251126666767 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.25644028339756386,
            "unit": "iter/sec",
            "range": "stddev: 0.3856650855212484",
            "extra": "mean: 3.8995433429999857 sec\nrounds: 3"
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
          "id": "c6992c49ce83a484c91caaabb43d1f724fdd0015",
          "message": "prepare release 0.2.3",
          "timestamp": "2023-02-08T21:32:37+08:00",
          "tree_id": "56e0d032390faa4fb19eaa01a4767cd0ec8e078e",
          "url": "https://github.com/Yiling-J/cacheme/commit/c6992c49ce83a484c91caaabb43d1f724fdd0015"
        },
        "date": 1675863951444,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 25.03332018360734,
            "unit": "iter/sec",
            "range": "stddev: 0.0003976413051961628",
            "extra": "mean: 39.94675866666834 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 24.945499488472116,
            "unit": "iter/sec",
            "range": "stddev: 0.00027781111952985546",
            "extra": "mean: 40.08739133333942 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 25.367193937323904,
            "unit": "iter/sec",
            "range": "stddev: 0.00026983614633976287",
            "extra": "mean: 39.42099399999677 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 23.67257028743635,
            "unit": "iter/sec",
            "range": "stddev: 0.0006183974871399568",
            "extra": "mean: 42.24298366665854 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 23.867154463567786,
            "unit": "iter/sec",
            "range": "stddev: 0.00045717247375727255",
            "extra": "mean: 41.89858500000317 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 21.48581501121596,
            "unit": "iter/sec",
            "range": "stddev: 0.009136061643661467",
            "extra": "mean: 46.54233499999805 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 1.7400957874704466,
            "unit": "iter/sec",
            "range": "stddev: 0.06075569441656435",
            "extra": "mean: 574.6810073333298 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 1.0852187118664225,
            "unit": "iter/sec",
            "range": "stddev: 0.016042590022628755",
            "extra": "mean: 921.4732376666651 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 0.5886852533824989,
            "unit": "iter/sec",
            "range": "stddev: 0.04463305851419919",
            "extra": "mean: 1.698700611666671 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 1.59784027982488,
            "unit": "iter/sec",
            "range": "stddev: 0.008954245969738955",
            "extra": "mean: 625.8447810000121 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 0.914215312532237,
            "unit": "iter/sec",
            "range": "stddev: 0.25860019304060067",
            "extra": "mean: 1.093834227333332 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 0.4713691157969236,
            "unit": "iter/sec",
            "range": "stddev: 0.10533496867564596",
            "extra": "mean: 2.121479677999995 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 0.4467504232642704,
            "unit": "iter/sec",
            "range": "stddev: 0.02766433242721595",
            "extra": "mean: 2.2383862396666623 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.3924651662959614,
            "unit": "iter/sec",
            "range": "stddev: 0.039403338754881674",
            "extra": "mean: 2.547996831000006 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.2705380602487733,
            "unit": "iter/sec",
            "range": "stddev: 0.05517467567171242",
            "extra": "mean: 3.6963375840000103 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.0405620475472188,
            "unit": "iter/sec",
            "range": "stddev: 0.09151877707655813",
            "extra": "mean: 961.0190976666596 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 0.6895567466689593,
            "unit": "iter/sec",
            "range": "stddev: 0.05425978555903272",
            "extra": "mean: 1.4502069696666713 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.4133623400930829,
            "unit": "iter/sec",
            "range": "stddev: 0.03514540270645994",
            "extra": "mean: 2.419185066000002 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 0.8325362199107661,
            "unit": "iter/sec",
            "range": "stddev: 0.08391326831472674",
            "extra": "mean: 1.2011489423333235 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 0.5712035756457325,
            "unit": "iter/sec",
            "range": "stddev: 0.22311351442807495",
            "extra": "mean: 1.7506893210000005 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.3588112669128935,
            "unit": "iter/sec",
            "range": "stddev: 0.153865585398467",
            "extra": "mean: 2.786980488666662 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c4505167dc15471d80bc66b2166043bb069c0329",
          "message": "Bump cryptography from 39.0.0 to 39.0.1 (#15)\n\nBumps [cryptography](https://github.com/pyca/cryptography) from 39.0.0 to 39.0.1.\r\n- [Release notes](https://github.com/pyca/cryptography/releases)\r\n- [Changelog](https://github.com/pyca/cryptography/blob/main/CHANGELOG.rst)\r\n- [Commits](https://github.com/pyca/cryptography/compare/39.0.0...39.0.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: cryptography\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-02-08T21:41:54+08:00",
          "tree_id": "c05715d24551ac45750b1ab97f6c491fb6d9fef6",
          "url": "https://github.com/Yiling-J/cacheme/commit/c4505167dc15471d80bc66b2166043bb069c0329"
        },
        "date": 1675864524961,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 25.06007296274334,
            "unit": "iter/sec",
            "range": "stddev: 0.00033324952666773095",
            "extra": "mean: 39.90411366665588 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 25.203490461631464,
            "unit": "iter/sec",
            "range": "stddev: 0.0004098931193626624",
            "extra": "mean: 39.67704400001063 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 25.384916137295303,
            "unit": "iter/sec",
            "range": "stddev: 0.00005892722150472448",
            "extra": "mean: 39.393472666660045 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 23.75053483235183,
            "unit": "iter/sec",
            "range": "stddev: 0.0006287154946844754",
            "extra": "mean: 42.10431500000785 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 23.129320773963727,
            "unit": "iter/sec",
            "range": "stddev: 0.00026090123365560687",
            "extra": "mean: 43.235164999989216 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 19.52334863642861,
            "unit": "iter/sec",
            "range": "stddev: 0.014284500867688902",
            "extra": "mean: 51.22072133333214 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 1.440531238188087,
            "unit": "iter/sec",
            "range": "stddev: 0.012016827208444098",
            "extra": "mean: 694.1883476666627 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 0.9655074684017468,
            "unit": "iter/sec",
            "range": "stddev: 0.012236863105516632",
            "extra": "mean: 1.0357247693333231 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 0.5232649208014138,
            "unit": "iter/sec",
            "range": "stddev: 0.020652606208351736",
            "extra": "mean: 1.9110778503333183 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 1.0955471955322738,
            "unit": "iter/sec",
            "range": "stddev: 0.2039930808409272",
            "extra": "mean: 912.7858700000123 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 0.9134462790779598,
            "unit": "iter/sec",
            "range": "stddev: 0.016384064518451695",
            "extra": "mean: 1.0947551299999911 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 0.4249007020585282,
            "unit": "iter/sec",
            "range": "stddev: 0.002790466888276465",
            "extra": "mean: 2.3534910513333407 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 0.39270564074696757,
            "unit": "iter/sec",
            "range": "stddev: 0.05253983196939157",
            "extra": "mean: 2.54643655766669 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.3271761750493431,
            "unit": "iter/sec",
            "range": "stddev: 0.2057891033211624",
            "extra": "mean: 3.056457273666657 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.22131139431009428,
            "unit": "iter/sec",
            "range": "stddev: 0.16776393429061887",
            "extra": "mean: 4.518520174333332 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 0.7971766721177493,
            "unit": "iter/sec",
            "range": "stddev: 0.06961753220600055",
            "extra": "mean: 1.2544270736666665 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 0.5980543689787422,
            "unit": "iter/sec",
            "range": "stddev: 0.17970804876084082",
            "extra": "mean: 1.6720887796666943 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.31282615812467796,
            "unit": "iter/sec",
            "range": "stddev: 0.21942721635915347",
            "extra": "mean: 3.196663622999987 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 0.6614235142587161,
            "unit": "iter/sec",
            "range": "stddev: 0.3567199726540479",
            "extra": "mean: 1.5118906093333255 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 0.5142550332133277,
            "unit": "iter/sec",
            "range": "stddev: 0.3579930383368638",
            "extra": "mean: 1.9445604523333297 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.29779810064738593,
            "unit": "iter/sec",
            "range": "stddev: 0.25400689267883003",
            "extra": "mean: 3.3579797783333447 sec\nrounds: 3"
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
          "id": "8f845e8aed56787763c7946461eec0c4570f85b7",
          "message": "Merge branch 'master' of github.com:Yiling-J/cacheme",
          "timestamp": "2023-02-08T22:24:44+08:00",
          "tree_id": "cd4465a5fb5305198ffaa41759bd5769b528756d",
          "url": "https://github.com/Yiling-J/cacheme/commit/8f845e8aed56787763c7946461eec0c4570f85b7"
        },
        "date": 1675866998674,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 25.196413814573965,
            "unit": "iter/sec",
            "range": "stddev: 0.0008265439370482243",
            "extra": "mean: 39.688187666674445 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 25.258912908419223,
            "unit": "iter/sec",
            "range": "stddev: 0.0009233341913579192",
            "extra": "mean: 39.58998566667068 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 25.785709698928436,
            "unit": "iter/sec",
            "range": "stddev: 0.00020305282255513325",
            "extra": "mean: 38.781170333332206 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 24.23587242928183,
            "unit": "iter/sec",
            "range": "stddev: 0.0007192923248581789",
            "extra": "mean: 41.26115133333504 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 24.143691275204517,
            "unit": "iter/sec",
            "range": "stddev: 0.0007580753503551301",
            "extra": "mean: 41.418687333324065 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 21.231124247828035,
            "unit": "iter/sec",
            "range": "stddev: 0.010693309266333618",
            "extra": "mean: 47.10066166667085 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 1.506486974339889,
            "unit": "iter/sec",
            "range": "stddev: 0.008365631759661247",
            "extra": "mean: 663.7959816666713 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 1.0049276486562069,
            "unit": "iter/sec",
            "range": "stddev: 0.004938400408258018",
            "extra": "mean: 995.0965139999918 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 0.5385697822187467,
            "unit": "iter/sec",
            "range": "stddev: 0.039193997641857097",
            "extra": "mean: 1.856769601666656 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 1.1858651871045205,
            "unit": "iter/sec",
            "range": "stddev: 0.052536221306253815",
            "extra": "mean: 843.2661746666668 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 0.8278484779725159,
            "unit": "iter/sec",
            "range": "stddev: 0.287436892059242",
            "extra": "mean: 1.2079505206666568 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 0.4270217833564866,
            "unit": "iter/sec",
            "range": "stddev: 0.15792154938474723",
            "extra": "mean: 2.341800908000001 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 0.405368354409137,
            "unit": "iter/sec",
            "range": "stddev: 0.10469423881895902",
            "extra": "mean: 2.46689212199999 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.3505577888338083,
            "unit": "iter/sec",
            "range": "stddev: 0.21047282849885512",
            "extra": "mean: 2.852596723999985 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.2330805181104761,
            "unit": "iter/sec",
            "range": "stddev: 0.012409331579289263",
            "extra": "mean: 4.290362867333329 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 0.7314556597534304,
            "unit": "iter/sec",
            "range": "stddev: 0.22124990462202282",
            "extra": "mean: 1.3671368683333374 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 0.5716179237310366,
            "unit": "iter/sec",
            "range": "stddev: 0.2920535869142224",
            "extra": "mean: 1.7494203006666567 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.3406583909923422,
            "unit": "iter/sec",
            "range": "stddev: 0.4255529352221424",
            "extra": "mean: 2.935492054333338 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 0.7759169207399992,
            "unit": "iter/sec",
            "range": "stddev: 0.16946416617440174",
            "extra": "mean: 1.2887977736666585 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 0.49611005907168637,
            "unit": "iter/sec",
            "range": "stddev: 0.146717628950275",
            "extra": "mean: 2.015681766000038 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.3314233570975501,
            "unit": "iter/sec",
            "range": "stddev: 0.08609102646142218",
            "extra": "mean: 3.017288849999981 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}