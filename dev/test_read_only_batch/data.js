window.BENCHMARK_DATA = {
  "lastUpdate": 1678082352533,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark: test_read_only_batch": [
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
          "id": "45349048b0682e7dc7c2275d0c3e5ec5baf5f9f7",
          "message": "Refactor (#18)\n\n* core refactor and update benchmark\r\n\r\n* update benchmark ci\r\n\r\n* fix bench\r\n\r\n* update params\r\n\r\n* update bench\r\n\r\n* update bench\r\n\r\n* fix bench\r\n\r\n* remove too slow bench\r\n\r\n* add with theine bench\r\n\r\n* update\r\n\r\n* optimize bench\r\n\r\n* update\r\n\r\n* update bench\r\n\r\n* simplify benchmark\r\n\r\n* update bench\r\n\r\n* update\r\n\r\n* update readme\r\n\r\n* add trace script\r\n\r\n* update trace script\r\n\r\n* update readme\r\n\r\n* update readme\r\n\r\n* fix python 3.7 test\r\n\r\n* reduce benchmark requests count",
          "timestamp": "2023-03-05T23:34:28+08:00",
          "tree_id": "60e6ca61c4238d70710fcfa1cdd64d59addb93ab",
          "url": "https://github.com/Yiling-J/cacheme/commit/45349048b0682e7dc7c2275d0c3e5ec5baf5f9f7"
        },
        "date": 1678031059120,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-small]",
            "value": 188.51786687506842,
            "unit": "iter/sec",
            "range": "stddev: 0.00011971631706455165",
            "extra": "mean: 5.304537000000664 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-medium]",
            "value": 187.37103017816537,
            "unit": "iter/sec",
            "range": "stddev: 0.00014281536894506313",
            "extra": "mean: 5.337004333322663 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-large]",
            "value": 189.21107119368094,
            "unit": "iter/sec",
            "range": "stddev: 0.00006694617991036924",
            "extra": "mean: 5.28510300000562 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-small]",
            "value": 118.34929247241728,
            "unit": "iter/sec",
            "range": "stddev: 0.006324188919716025",
            "extra": "mean: 8.449564666667206 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-medium]",
            "value": 79.49096740159848,
            "unit": "iter/sec",
            "range": "stddev: 0.013257605595926435",
            "extra": "mean: 12.580045666671444 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-large]",
            "value": 39.7516454994979,
            "unit": "iter/sec",
            "range": "stddev: 0.03493502469078914",
            "extra": "mean: 25.1561913333281 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-small]",
            "value": 87.10327687465586,
            "unit": "iter/sec",
            "range": "stddev: 0.01133791879663993",
            "extra": "mean: 11.480624333330525 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-medium]",
            "value": 61.14181358605122,
            "unit": "iter/sec",
            "range": "stddev: 0.019628161821619562",
            "extra": "mean: 16.355419333327365 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-large]",
            "value": 35.950907310433415,
            "unit": "iter/sec",
            "range": "stddev: 0.03950257119815607",
            "extra": "mean: 27.815709666659433 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-small]",
            "value": 111.31053836963154,
            "unit": "iter/sec",
            "range": "stddev: 0.007181231052389436",
            "extra": "mean: 8.98387533334244 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-medium]",
            "value": 20.541086311652894,
            "unit": "iter/sec",
            "range": "stddev: 0.07589703355325925",
            "extra": "mean: 48.68291699999835 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-large]",
            "value": 26.173274159163476,
            "unit": "iter/sec",
            "range": "stddev: 0.0575081110589669",
            "extra": "mean: 38.206912666671165 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-small]",
            "value": 63.03099542896168,
            "unit": "iter/sec",
            "range": "stddev: 0.0152713902671039",
            "extra": "mean: 15.865210333335728 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-medium]",
            "value": 74.48181511593558,
            "unit": "iter/sec",
            "range": "stddev: 0.01449411852264795",
            "extra": "mean: 13.42609599998923 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-large]",
            "value": 33.83196614222804,
            "unit": "iter/sec",
            "range": "stddev: 0.042360500768987126",
            "extra": "mean: 29.557844666669553 msec\nrounds: 3"
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
          "id": "7b68b544a8c74554c6450994d77583d5e1ed6362",
          "message": "Update README.md",
          "timestamp": "2023-03-05T23:50:48+08:00",
          "tree_id": "b1ac9eb7c2a84fe78e6f9d1e9cb5e507a2d8b7c8",
          "url": "https://github.com/Yiling-J/cacheme/commit/7b68b544a8c74554c6450994d77583d5e1ed6362"
        },
        "date": 1678031989375,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-small]",
            "value": 189.81256957822995,
            "unit": "iter/sec",
            "range": "stddev: 0.00012797930642506223",
            "extra": "mean: 5.268354999998337 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-medium]",
            "value": 188.59655933179695,
            "unit": "iter/sec",
            "range": "stddev: 0.00015957008567440577",
            "extra": "mean: 5.302323666683151 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-large]",
            "value": 192.7197047990473,
            "unit": "iter/sec",
            "range": "stddev: 0.000018462173985240298",
            "extra": "mean: 5.188883000016631 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-small]",
            "value": 113.75193819091359,
            "unit": "iter/sec",
            "range": "stddev: 0.006964556938794031",
            "extra": "mean: 8.79105899999407 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-medium]",
            "value": 80.98544165203205,
            "unit": "iter/sec",
            "range": "stddev: 0.01322912479605204",
            "extra": "mean: 12.34789833334086 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-large]",
            "value": 40.74843464890106,
            "unit": "iter/sec",
            "range": "stddev: 0.03417108859092441",
            "extra": "mean: 24.5408199999891 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-small]",
            "value": 70.36972322955911,
            "unit": "iter/sec",
            "range": "stddev: 0.01629421470404576",
            "extra": "mean: 14.210656999997203 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-medium]",
            "value": 63.99241101201041,
            "unit": "iter/sec",
            "range": "stddev: 0.01839977508578294",
            "extra": "mean: 15.626852999995815 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-large]",
            "value": 38.241315062732454,
            "unit": "iter/sec",
            "range": "stddev: 0.036636496875809166",
            "extra": "mean: 26.149728333336952 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-small]",
            "value": 102.85679608275387,
            "unit": "iter/sec",
            "range": "stddev: 0.008695402655769636",
            "extra": "mean: 9.722255000004528 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-medium]",
            "value": 27.4090065977414,
            "unit": "iter/sec",
            "range": "stddev: 0.05511918602762526",
            "extra": "mean: 36.4843576666658 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-large]",
            "value": 34.53903262987043,
            "unit": "iter/sec",
            "range": "stddev: 0.04150403679913388",
            "extra": "mean: 28.95275066665211 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-small]",
            "value": 96.9819695972571,
            "unit": "iter/sec",
            "range": "stddev: 0.00893505645309042",
            "extra": "mean: 10.311194999985673 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-medium]",
            "value": 74.21366539742498,
            "unit": "iter/sec",
            "range": "stddev: 0.015256806261445856",
            "extra": "mean: 13.474607333364474 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-large]",
            "value": 41.28988897467193,
            "unit": "iter/sec",
            "range": "stddev: 0.034035414396600176",
            "extra": "mean: 24.219004333322875 msec\nrounds: 3"
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
          "id": "e063613e80ed54fd86217204d3ba5e012548e38e",
          "message": "Update README.md",
          "timestamp": "2023-03-06T00:02:50+08:00",
          "tree_id": "733ee1d5735f9d698f6b6ceeffb1b99ef52287bb",
          "url": "https://github.com/Yiling-J/cacheme/commit/e063613e80ed54fd86217204d3ba5e012548e38e"
        },
        "date": 1678032782122,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-small]",
            "value": 177.72354971538903,
            "unit": "iter/sec",
            "range": "stddev: 0.00046537023056087947",
            "extra": "mean: 5.626716333324566 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-medium]",
            "value": 190.7124923356695,
            "unit": "iter/sec",
            "range": "stddev: 0.00019123517227475533",
            "extra": "mean: 5.243495000001985 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-large]",
            "value": 181.0137020736462,
            "unit": "iter/sec",
            "range": "stddev: 0.0003932082292999951",
            "extra": "mean: 5.524443666663122 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-small]",
            "value": 112.30864572168332,
            "unit": "iter/sec",
            "range": "stddev: 0.007356787155748047",
            "extra": "mean: 8.904034000001579 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-medium]",
            "value": 83.6964480483066,
            "unit": "iter/sec",
            "range": "stddev: 0.013074655088818945",
            "extra": "mean: 11.94793833333089 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-large]",
            "value": 44.64187528733491,
            "unit": "iter/sec",
            "range": "stddev: 0.03084807541883914",
            "extra": "mean: 22.40049266666233 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-small]",
            "value": 90.75547214653913,
            "unit": "iter/sec",
            "range": "stddev: 0.010468113680367248",
            "extra": "mean: 11.01861933333718 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-medium]",
            "value": 58.03818738617985,
            "unit": "iter/sec",
            "range": "stddev: 0.01985968615444257",
            "extra": "mean: 17.230034999992466 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-large]",
            "value": 39.47271297402183,
            "unit": "iter/sec",
            "range": "stddev: 0.03612350416109445",
            "extra": "mean: 25.33395666667578 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-small]",
            "value": 103.6755577095587,
            "unit": "iter/sec",
            "range": "stddev: 0.008618829778781159",
            "extra": "mean: 9.645475000013448 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-medium]",
            "value": 22.800564104199125,
            "unit": "iter/sec",
            "range": "stddev: 0.06751703121327483",
            "extra": "mean: 43.858563999994736 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-large]",
            "value": 34.48292191912543,
            "unit": "iter/sec",
            "range": "stddev: 0.04114353245356255",
            "extra": "mean: 28.999862666665877 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-small]",
            "value": 89.53063653331603,
            "unit": "iter/sec",
            "range": "stddev: 0.010661415462687054",
            "extra": "mean: 11.169360999995584 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-medium]",
            "value": 44.29273101358453,
            "unit": "iter/sec",
            "range": "stddev: 0.03146549697402366",
            "extra": "mean: 22.577068000013394 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-large]",
            "value": 44.40182198437556,
            "unit": "iter/sec",
            "range": "stddev: 0.03109426845513597",
            "extra": "mean: 22.52159833332712 msec\nrounds: 3"
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
          "id": "13ac995177cd41ff7ad44c2a427df5fb7009e5da",
          "message": "Update README.md",
          "timestamp": "2023-03-06T00:15:28+08:00",
          "tree_id": "fe1b483039b123ab6ad819b7a914ef1879f68b91",
          "url": "https://github.com/Yiling-J/cacheme/commit/13ac995177cd41ff7ad44c2a427df5fb7009e5da"
        },
        "date": 1678033550163,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-small]",
            "value": 214.27157236170268,
            "unit": "iter/sec",
            "range": "stddev: 0.00004546517239957194",
            "extra": "mean: 4.666974666671801 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-medium]",
            "value": 221.05293407201736,
            "unit": "iter/sec",
            "range": "stddev: 0.00018328692106177964",
            "extra": "mean: 4.5238033333419025 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-large]",
            "value": 227.33819033763442,
            "unit": "iter/sec",
            "range": "stddev: 0.000054508869958248974",
            "extra": "mean: 4.39873300000689 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-small]",
            "value": 132.60263388597593,
            "unit": "iter/sec",
            "range": "stddev: 0.006081169850730744",
            "extra": "mean: 7.54132833334135 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-medium]",
            "value": 92.74752102879717,
            "unit": "iter/sec",
            "range": "stddev: 0.011735840174166132",
            "extra": "mean: 10.781959333333665 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-large]",
            "value": 49.545148288870216,
            "unit": "iter/sec",
            "range": "stddev: 0.027855360974209556",
            "extra": "mean: 20.183611000002582 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-small]",
            "value": 108.57984547411283,
            "unit": "iter/sec",
            "range": "stddev: 0.008614010346261516",
            "extra": "mean: 9.209812333343356 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-medium]",
            "value": 74.97936193062742,
            "unit": "iter/sec",
            "range": "stddev: 0.016054181535562238",
            "extra": "mean: 13.337003333333541 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-large]",
            "value": 45.73422688253352,
            "unit": "iter/sec",
            "range": "stddev: 0.030736783034537005",
            "extra": "mean: 21.865462000012787 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-small]",
            "value": 117.876941973535,
            "unit": "iter/sec",
            "range": "stddev: 0.007730406961411953",
            "extra": "mean: 8.483423333331075 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-medium]",
            "value": 28.337628294470218,
            "unit": "iter/sec",
            "range": "stddev: 0.054035039036485516",
            "extra": "mean: 35.28876833334493 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-large]",
            "value": 38.77304408022726,
            "unit": "iter/sec",
            "range": "stddev: 0.03698105501014449",
            "extra": "mean: 25.791113999995712 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-small]",
            "value": 115.54777773516436,
            "unit": "iter/sec",
            "range": "stddev: 0.007969875186473326",
            "extra": "mean: 8.654428666659442 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-medium]",
            "value": 86.85243727478768,
            "unit": "iter/sec",
            "range": "stddev: 0.012851036024305474",
            "extra": "mean: 11.51378166666935 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-large]",
            "value": 36.96094403573678,
            "unit": "iter/sec",
            "range": "stddev: 0.039403399812490435",
            "extra": "mean: 27.055585999998282 msec\nrounds: 3"
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
          "id": "247a978ad81a8226b5cb1afbb65f74be39a0ef62",
          "message": "Merge branch 'master' of github.com:Yiling-J/cacheme",
          "timestamp": "2023-03-06T13:48:30+08:00",
          "tree_id": "db0be119480bb0676dc288005c3e5d65ad4d92f0",
          "url": "https://github.com/Yiling-J/cacheme/commit/247a978ad81a8226b5cb1afbb65f74be39a0ef62"
        },
        "date": 1678082351955,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-small]",
            "value": 222.49623870149892,
            "unit": "iter/sec",
            "range": "stddev: 0.00007582702931715708",
            "extra": "mean: 4.494457999991634 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-medium]",
            "value": 223.94289993571707,
            "unit": "iter/sec",
            "range": "stddev: 0.00009645173875058722",
            "extra": "mean: 4.465423999988616 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-large]",
            "value": 226.70137111974626,
            "unit": "iter/sec",
            "range": "stddev: 0.0000490231874090447",
            "extra": "mean: 4.411089333340594 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-small]",
            "value": 145.1724849941426,
            "unit": "iter/sec",
            "range": "stddev: 0.0049717044040532565",
            "extra": "mean: 6.888357666677318 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-medium]",
            "value": 92.75606657116691,
            "unit": "iter/sec",
            "range": "stddev: 0.011604081838842829",
            "extra": "mean: 10.780966000027092 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-large]",
            "value": 47.95209623951951,
            "unit": "iter/sec",
            "range": "stddev: 0.029067341947853202",
            "extra": "mean: 20.854145666646673 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-small]",
            "value": 107.06188394573938,
            "unit": "iter/sec",
            "range": "stddev: 0.009156288840238955",
            "extra": "mean: 9.340392333342606 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-medium]",
            "value": 78.67693302737958,
            "unit": "iter/sec",
            "range": "stddev: 0.014868483662797242",
            "extra": "mean: 12.710205666659627 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-large]",
            "value": 43.37649521127698,
            "unit": "iter/sec",
            "range": "stddev: 0.03279729499014848",
            "extra": "mean: 23.05396033333788 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-small]",
            "value": 121.14686832733153,
            "unit": "iter/sec",
            "range": "stddev: 0.007278246434705002",
            "extra": "mean: 8.254443666658062 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-medium]",
            "value": 27.943654415249735,
            "unit": "iter/sec",
            "range": "stddev: 0.05486646820698779",
            "extra": "mean: 35.78629999998384 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-large]",
            "value": 38.70420339648531,
            "unit": "iter/sec",
            "range": "stddev: 0.03655287055632597",
            "extra": "mean: 25.83698699999104 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-small]",
            "value": 122.23880368966319,
            "unit": "iter/sec",
            "range": "stddev: 0.007200260783892637",
            "extra": "mean: 8.180708333327402 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-medium]",
            "value": 83.34034549746198,
            "unit": "iter/sec",
            "range": "stddev: 0.013739585625545751",
            "extra": "mean: 11.998990333324855 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-large]",
            "value": 47.47199445073594,
            "unit": "iter/sec",
            "range": "stddev: 0.02938184122193206",
            "extra": "mean: 21.06505133332348 msec\nrounds: 3"
          }
        ]
      }
    ]
  }
}