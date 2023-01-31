window.BENCHMARK_DATA = {
  "lastUpdate": 1675161359762,
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
      }
    ]
  }
}