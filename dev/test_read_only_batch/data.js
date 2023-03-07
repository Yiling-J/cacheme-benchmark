window.BENCHMARK_DATA = {
  "lastUpdate": 1678155167296,
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
          "id": "434e9e22535541cdec2dc736be32a3d23d7ca830",
          "message": "clean ci",
          "timestamp": "2023-03-06T14:12:24+08:00",
          "tree_id": "7982f3ab114b010b024fb9275675f64398bfb0bb",
          "url": "https://github.com/Yiling-J/cacheme/commit/434e9e22535541cdec2dc736be32a3d23d7ca830"
        },
        "date": 1678083776466,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-small]",
            "value": 208.6007479029761,
            "unit": "iter/sec",
            "range": "stddev: 0.00004978755969702727",
            "extra": "mean: 4.793846666672152 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-medium]",
            "value": 187.40929390167432,
            "unit": "iter/sec",
            "range": "stddev: 0.0011029027946743368",
            "extra": "mean: 5.335914666668866 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-large]",
            "value": 211.42037919065743,
            "unit": "iter/sec",
            "range": "stddev: 0.00012509752195277114",
            "extra": "mean: 4.729913000005581 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-small]",
            "value": 133.17610857893266,
            "unit": "iter/sec",
            "range": "stddev: 0.005584279909826816",
            "extra": "mean: 7.508854333337922 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-medium]",
            "value": 97.26716235304363,
            "unit": "iter/sec",
            "range": "stddev: 0.010139339600678721",
            "extra": "mean: 10.280962000005426 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-large]",
            "value": 51.805007333845246,
            "unit": "iter/sec",
            "range": "stddev: 0.02586803766887827",
            "extra": "mean: 19.30315333333965 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-small]",
            "value": 111.80898969618414,
            "unit": "iter/sec",
            "range": "stddev: 0.007691138536651333",
            "extra": "mean: 8.943824666668357 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-medium]",
            "value": 70.26383460946752,
            "unit": "iter/sec",
            "range": "stddev: 0.017215218114563658",
            "extra": "mean: 14.232072666658269 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-large]",
            "value": 48.48158033660889,
            "unit": "iter/sec",
            "range": "stddev: 0.028099288074303966",
            "extra": "mean: 20.626390333338424 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-small]",
            "value": 125.74363739304177,
            "unit": "iter/sec",
            "range": "stddev: 0.006298341117836682",
            "extra": "mean: 7.9526886666580285 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-medium]",
            "value": 33.17334602590477,
            "unit": "iter/sec",
            "range": "stddev: 0.04484872220572331",
            "extra": "mean: 30.144682999993694 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-large]",
            "value": 45.73897186505066,
            "unit": "iter/sec",
            "range": "stddev: 0.030350089678267172",
            "extra": "mean: 21.863193666670593 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-small]",
            "value": 110.26787227188714,
            "unit": "iter/sec",
            "range": "stddev: 0.008374938103726165",
            "extra": "mean: 9.068824666665401 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-medium]",
            "value": 90.99845966910684,
            "unit": "iter/sec",
            "range": "stddev: 0.01157345554081022",
            "extra": "mean: 10.989196999995935 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-large]",
            "value": 51.298921173438586,
            "unit": "iter/sec",
            "range": "stddev: 0.026256721696503144",
            "extra": "mean: 19.493587333329288 msec\nrounds: 3"
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
          "id": "d108fc3c71056e37bd5891b5263eb8dbd3745c2e",
          "message": "add local+redis bench result",
          "timestamp": "2023-03-06T15:24:40+08:00",
          "tree_id": "6494af6b80aaebfcef874cd53f8e3874485b7ea2",
          "url": "https://github.com/Yiling-J/cacheme/commit/d108fc3c71056e37bd5891b5263eb8dbd3745c2e"
        },
        "date": 1678088109896,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-small]",
            "value": 224.37903662579603,
            "unit": "iter/sec",
            "range": "stddev: 0.00007110266616426225",
            "extra": "mean: 4.456744333329728 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-medium]",
            "value": 221.83217553029064,
            "unit": "iter/sec",
            "range": "stddev: 0.00012847027169237045",
            "extra": "mean: 4.507912333319079 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-large]",
            "value": 227.28942960234497,
            "unit": "iter/sec",
            "range": "stddev: 0.000053775546826079805",
            "extra": "mean: 4.39967666666045 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-small]",
            "value": 134.7548169794274,
            "unit": "iter/sec",
            "range": "stddev: 0.005931073291352658",
            "extra": "mean: 7.420884999997194 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-medium]",
            "value": 91.285246983421,
            "unit": "iter/sec",
            "range": "stddev: 0.01198747760449536",
            "extra": "mean: 10.954672666675455 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-large]",
            "value": 46.868631724663004,
            "unit": "iter/sec",
            "range": "stddev: 0.029670889396579577",
            "extra": "mean: 21.33623200000064 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-small]",
            "value": 114.93702408896301,
            "unit": "iter/sec",
            "range": "stddev: 0.008028519097834828",
            "extra": "mean: 8.700416666660734 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-medium]",
            "value": 77.57337251582835,
            "unit": "iter/sec",
            "range": "stddev: 0.014527218985062184",
            "extra": "mean: 12.89102133333131 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-large]",
            "value": 43.79894084524787,
            "unit": "iter/sec",
            "range": "stddev: 0.032055588950667166",
            "extra": "mean: 22.831602333335848 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-small]",
            "value": 107.49394388071438,
            "unit": "iter/sec",
            "range": "stddev: 0.009099401970395214",
            "extra": "mean: 9.30284966667235 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-medium]",
            "value": 24.21737085856656,
            "unit": "iter/sec",
            "range": "stddev: 0.06445933617552206",
            "extra": "mean: 41.29267400000458 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-large]",
            "value": 41.523274113507384,
            "unit": "iter/sec",
            "range": "stddev: 0.03436116573826094",
            "extra": "mean: 24.08287933332076 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-small]",
            "value": 114.94654525861425,
            "unit": "iter/sec",
            "range": "stddev: 0.00801366227104308",
            "extra": "mean: 8.699695999998388 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-medium]",
            "value": 85.64033161757371,
            "unit": "iter/sec",
            "range": "stddev: 0.013112981493014951",
            "extra": "mean: 11.676741333341548 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-large]",
            "value": 41.88002795909004,
            "unit": "iter/sec",
            "range": "stddev: 0.03416967316690113",
            "extra": "mean: 23.87773000000948 msec\nrounds: 3"
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
          "id": "b9c4773d4ebf3d05f6a1bdd63c4774a050d995b2",
          "message": "fix lint",
          "timestamp": "2023-03-06T19:53:28+08:00",
          "tree_id": "f68b3ad56b2a40dad85d90505edb3a9c3b1a13ab",
          "url": "https://github.com/Yiling-J/cacheme/commit/b9c4773d4ebf3d05f6a1bdd63c4774a050d995b2"
        },
        "date": 1678104184837,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-small]",
            "value": 236.6455400035922,
            "unit": "iter/sec",
            "range": "stddev: 0.00020029473831858322",
            "extra": "mean: 4.225729333351562 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-medium]",
            "value": 226.15066021380025,
            "unit": "iter/sec",
            "range": "stddev: 0.0004205063711938843",
            "extra": "mean: 4.421830999982983 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-large]",
            "value": 230.39544074996863,
            "unit": "iter/sec",
            "range": "stddev: 0.00015308768305759775",
            "extra": "mean: 4.340363666680484 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-small]",
            "value": 120.90109520700872,
            "unit": "iter/sec",
            "range": "stddev: 0.007437788263084431",
            "extra": "mean: 8.271223666649044 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-medium]",
            "value": 84.9342423526118,
            "unit": "iter/sec",
            "range": "stddev: 0.0130720507866804",
            "extra": "mean: 11.773814333309929 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-large]",
            "value": 43.950395766728185,
            "unit": "iter/sec",
            "range": "stddev: 0.031977227063209275",
            "extra": "mean: 22.75292366666311 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-small]",
            "value": 94.83611655230544,
            "unit": "iter/sec",
            "range": "stddev: 0.011024977238206139",
            "extra": "mean: 10.544505999973808 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-medium]",
            "value": 72.48830558253356,
            "unit": "iter/sec",
            "range": "stddev: 0.017288280854372708",
            "extra": "mean: 13.795328666655374 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-large]",
            "value": 42.96419674619066,
            "unit": "iter/sec",
            "range": "stddev: 0.03355079980208935",
            "extra": "mean: 23.27519366665835 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-small]",
            "value": 113.48211822554487,
            "unit": "iter/sec",
            "range": "stddev: 0.008198938685010992",
            "extra": "mean: 8.811960999992152 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-medium]",
            "value": 26.877440510781245,
            "unit": "iter/sec",
            "range": "stddev: 0.05769495757670844",
            "extra": "mean: 37.205923666685216 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-large]",
            "value": 33.02374417111244,
            "unit": "iter/sec",
            "range": "stddev: 0.043326905235765135",
            "extra": "mean: 30.281242333349685 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-small]",
            "value": 112.27383138389276,
            "unit": "iter/sec",
            "range": "stddev: 0.00847548004559678",
            "extra": "mean: 8.906794999991993 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-medium]",
            "value": 70.37308077661324,
            "unit": "iter/sec",
            "range": "stddev: 0.01634049331289353",
            "extra": "mean: 14.209978999986106 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-large]",
            "value": 39.37277593030046,
            "unit": "iter/sec",
            "range": "stddev: 0.03593714694277024",
            "extra": "mean: 25.398260000012367 msec\nrounds: 3"
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
          "id": "37a5a826b51bd6e3e7d48a35ff3fad587611d4fd",
          "message": "release 0.3.0",
          "timestamp": "2023-03-06T20:39:05+08:00",
          "tree_id": "2cff7f6f9c4e2902e0dfce78c193d0fea14593fa",
          "url": "https://github.com/Yiling-J/cacheme/commit/37a5a826b51bd6e3e7d48a35ff3fad587611d4fd"
        },
        "date": 1678106946298,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-small]",
            "value": 184.80497746315564,
            "unit": "iter/sec",
            "range": "stddev: 0.0015887980382098227",
            "extra": "mean: 5.411109666672094 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-medium]",
            "value": 174.9797912923792,
            "unit": "iter/sec",
            "range": "stddev: 0.002235243794985664",
            "extra": "mean: 5.714945666663122 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-large]",
            "value": 213.45762069343954,
            "unit": "iter/sec",
            "range": "stddev: 0.0005094218599730379",
            "extra": "mean: 4.684770666661582 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-small]",
            "value": 134.49188830120275,
            "unit": "iter/sec",
            "range": "stddev: 0.005944519006528329",
            "extra": "mean: 7.435392666659861 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-medium]",
            "value": 91.95723338827028,
            "unit": "iter/sec",
            "range": "stddev: 0.01191833866471448",
            "extra": "mean: 10.874620333320687 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-large]",
            "value": 49.27371448205329,
            "unit": "iter/sec",
            "range": "stddev: 0.02821021059102859",
            "extra": "mean: 20.294796333331533 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-small]",
            "value": 112.79334447073863,
            "unit": "iter/sec",
            "range": "stddev: 0.008122152080748337",
            "extra": "mean: 8.865771333338065 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-medium]",
            "value": 74.37963110819956,
            "unit": "iter/sec",
            "range": "stddev: 0.016178099513211894",
            "extra": "mean: 13.444541000012578 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-large]",
            "value": 42.93500180276315,
            "unit": "iter/sec",
            "range": "stddev: 0.03323950917606355",
            "extra": "mean: 23.291020333336593 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-small]",
            "value": 122.60823517820363,
            "unit": "iter/sec",
            "range": "stddev: 0.0071057247034773605",
            "extra": "mean: 8.156059000005675 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-medium]",
            "value": 24.434107694742686,
            "unit": "iter/sec",
            "range": "stddev: 0.06377116884541932",
            "extra": "mean: 40.92639733331301 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-large]",
            "value": 41.29659014193138,
            "unit": "iter/sec",
            "range": "stddev: 0.034773913228882056",
            "extra": "mean: 24.21507433333166 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-small]",
            "value": 115.31235002218307,
            "unit": "iter/sec",
            "range": "stddev: 0.00804338310884359",
            "extra": "mean: 8.672097999976813 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-medium]",
            "value": 84.3260310831814,
            "unit": "iter/sec",
            "range": "stddev: 0.013623514095694058",
            "extra": "mean: 11.858734333335027 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-large]",
            "value": 46.40634234861424,
            "unit": "iter/sec",
            "range": "stddev: 0.030204112646330997",
            "extra": "mean: 21.548778666669932 msec\nrounds: 3"
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
          "id": "d85a594d6dd37f2c843052cb08e5971c43a64b3c",
          "message": "remove wrong dependency",
          "timestamp": "2023-03-06T22:05:49+08:00",
          "tree_id": "3c90ccb6edbd97af6a4341e9692f542bbc26eefb",
          "url": "https://github.com/Yiling-J/cacheme/commit/d85a594d6dd37f2c843052cb08e5971c43a64b3c"
        },
        "date": 1678112185831,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-small]",
            "value": 229.47488649819672,
            "unit": "iter/sec",
            "range": "stddev: 0.0000536158477976709",
            "extra": "mean: 4.357775333327633 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-medium]",
            "value": 231.09231560282677,
            "unit": "iter/sec",
            "range": "stddev: 0.000049758768734673066",
            "extra": "mean: 4.327274999999038 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-large]",
            "value": 226.33774661753213,
            "unit": "iter/sec",
            "range": "stddev: 0.00011372955098533343",
            "extra": "mean: 4.418176000001495 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-small]",
            "value": 138.5296865423631,
            "unit": "iter/sec",
            "range": "stddev: 0.00562518552503632",
            "extra": "mean: 7.218669333335963 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-medium]",
            "value": 90.67027091063473,
            "unit": "iter/sec",
            "range": "stddev: 0.012280835183555452",
            "extra": "mean: 11.028973333338854 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-large]",
            "value": 48.96784674882034,
            "unit": "iter/sec",
            "range": "stddev: 0.02847547913487927",
            "extra": "mean: 20.42156366665419 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-small]",
            "value": 96.48722187552846,
            "unit": "iter/sec",
            "range": "stddev: 0.011058161338998984",
            "extra": "mean: 10.36406666667252 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-medium]",
            "value": 81.56860783187682,
            "unit": "iter/sec",
            "range": "stddev: 0.014275441725903951",
            "extra": "mean: 12.259618333331446 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-large]",
            "value": 42.560930334249115,
            "unit": "iter/sec",
            "range": "stddev: 0.033598646934394565",
            "extra": "mean: 23.495727000010902 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-small]",
            "value": 119.06867813871601,
            "unit": "iter/sec",
            "range": "stddev: 0.007309597114748158",
            "extra": "mean: 8.39851433334123 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-medium]",
            "value": 22.647016675651088,
            "unit": "iter/sec",
            "range": "stddev: 0.06945893970113814",
            "extra": "mean: 44.155926333341235 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-large]",
            "value": 39.90267736990614,
            "unit": "iter/sec",
            "range": "stddev: 0.03634317262673775",
            "extra": "mean: 25.060974999992897 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-small]",
            "value": 119.86028126736124,
            "unit": "iter/sec",
            "range": "stddev: 0.0075931922646956",
            "extra": "mean: 8.343047333331318 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-medium]",
            "value": 87.09099022813423,
            "unit": "iter/sec",
            "range": "stddev: 0.013014305382038351",
            "extra": "mean: 11.48224399998791 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-large]",
            "value": 46.659984231104,
            "unit": "iter/sec",
            "range": "stddev: 0.030121442693946336",
            "extra": "mean: 21.43164033333278 msec\nrounds: 3"
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
          "id": "1f01adf27b95584f3e594d8403fd62b57f0e4ba1",
          "message": "remove awaitable, future is enough and faster (#19)",
          "timestamp": "2023-03-07T10:02:48+08:00",
          "tree_id": "9d5dd4a51a8a88cb8fa86eeb6110aec1f051742b",
          "url": "https://github.com/Yiling-J/cacheme/commit/1f01adf27b95584f3e594d8403fd62b57f0e4ba1"
        },
        "date": 1678155166916,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-small]",
            "value": 216.32596168942044,
            "unit": "iter/sec",
            "range": "stddev: 0.00005216764641951697",
            "extra": "mean: 4.6226536666722495 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-medium]",
            "value": 189.4518872731298,
            "unit": "iter/sec",
            "range": "stddev: 0.0003127880068313972",
            "extra": "mean: 5.27838499997794 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[theine-tlfu-large]",
            "value": 164.51925171341315,
            "unit": "iter/sec",
            "range": "stddev: 0.0014926795075846544",
            "extra": "mean: 6.078316000014183 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-small]",
            "value": 147.7218120559568,
            "unit": "iter/sec",
            "range": "stddev: 0.005121886130056924",
            "extra": "mean: 6.769481000011031 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-medium]",
            "value": 101.99704086191731,
            "unit": "iter/sec",
            "range": "stddev: 0.010363842896164589",
            "extra": "mean: 9.80420599999358 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[redis-large]",
            "value": 56.92075452707733,
            "unit": "iter/sec",
            "range": "stddev: 0.023791181283867834",
            "extra": "mean: 17.568284333340973 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-small]",
            "value": 115.36097969462863,
            "unit": "iter/sec",
            "range": "stddev: 0.00825956240974954",
            "extra": "mean: 8.66844233333571 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-medium]",
            "value": 93.83882137676504,
            "unit": "iter/sec",
            "range": "stddev: 0.011788677516313429",
            "extra": "mean: 10.65657033334825 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mongo-large]",
            "value": 48.86285787090603,
            "unit": "iter/sec",
            "range": "stddev: 0.028635573662253656",
            "extra": "mean: 20.465442333356048 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-small]",
            "value": 138.17346379599863,
            "unit": "iter/sec",
            "range": "stddev: 0.005865227484718438",
            "extra": "mean: 7.237279666640006 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-medium]",
            "value": 95.41283096477409,
            "unit": "iter/sec",
            "range": "stddev: 0.01139989365120037",
            "extra": "mean: 10.480770666674744 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[postgres-large]",
            "value": 51.38549247437277,
            "unit": "iter/sec",
            "range": "stddev: 0.026788867422487646",
            "extra": "mean: 19.460745666663115 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-small]",
            "value": 127.4874230468511,
            "unit": "iter/sec",
            "range": "stddev: 0.006910934012975856",
            "extra": "mean: 7.8439110000090295 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-medium]",
            "value": 93.40292058476524,
            "unit": "iter/sec",
            "range": "stddev: 0.011808286330186941",
            "extra": "mean: 10.706303333336109 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_batch[mysql-large]",
            "value": 45.378971590310925,
            "unit": "iter/sec",
            "range": "stddev: 0.031247409071961187",
            "extra": "mean: 22.036638666653136 msec\nrounds: 3"
          }
        ]
      }
    ]
  }
}