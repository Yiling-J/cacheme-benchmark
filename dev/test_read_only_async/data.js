window.BENCHMARK_DATA = {
  "lastUpdate": 1674787267571,
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
      }
    ]
  }
}