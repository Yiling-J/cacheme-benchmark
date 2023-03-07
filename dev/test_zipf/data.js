window.BENCHMARK_DATA = {
  "lastUpdate": 1678157151945,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark: test_zipf": [
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
        "date": 1678030931063,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-small]",
            "value": 181.05098649295573,
            "unit": "iter/sec",
            "range": "stddev: 0.0002360606453152088",
            "extra": "mean: 5.523305999986405 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-medium]",
            "value": 184.7891660323791,
            "unit": "iter/sec",
            "range": "stddev: 0.00017399819454666274",
            "extra": "mean: 5.411572666683166 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-large]",
            "value": 182.5193103914517,
            "unit": "iter/sec",
            "range": "stddev: 0.00024379361558330277",
            "extra": "mean: 5.4788723333179705 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-small]",
            "value": 3.4558779594022067,
            "unit": "iter/sec",
            "range": "stddev: 0.017732624401004458",
            "extra": "mean: 289.3620700000004 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-medium]",
            "value": 2.8619689599661755,
            "unit": "iter/sec",
            "range": "stddev: 0.02227901366093907",
            "extra": "mean: 349.40979933332983 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-large]",
            "value": 1.873320451133052,
            "unit": "iter/sec",
            "range": "stddev: 0.015486677548200465",
            "extra": "mean: 533.811499999994 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-small]",
            "value": 1.2060764631202487,
            "unit": "iter/sec",
            "range": "stddev: 0.13042055508173261",
            "extra": "mean: 829.1348273333293 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-medium]",
            "value": 1.1214895506979239,
            "unit": "iter/sec",
            "range": "stddev: 0.12217864021700588",
            "extra": "mean: 891.6712593333406 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-large]",
            "value": 0.9061135462845494,
            "unit": "iter/sec",
            "range": "stddev: 0.141548093387582",
            "extra": "mean: 1.103614446666673 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-small]",
            "value": 1.535161291229803,
            "unit": "iter/sec",
            "range": "stddev: 0.09077035617758704",
            "extra": "mean: 651.3973520000036 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-medium]",
            "value": 1.3363931569240022,
            "unit": "iter/sec",
            "range": "stddev: 0.12682199214346115",
            "extra": "mean: 748.2827899999999 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-large]",
            "value": 0.8394758187066672,
            "unit": "iter/sec",
            "range": "stddev: 0.24283418808752866",
            "extra": "mean: 1.1912195416666596 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-small]",
            "value": 1.3428887976365218,
            "unit": "iter/sec",
            "range": "stddev: 0.18325939316272394",
            "extra": "mean: 744.6632973333275 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-medium]",
            "value": 0.9353024335695476,
            "unit": "iter/sec",
            "range": "stddev: 0.4933044663228229",
            "extra": "mean: 1.0691728836666623 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-large]",
            "value": 0.637521759183437,
            "unit": "iter/sec",
            "range": "stddev: 0.588525323501746",
            "extra": "mean: 1.5685739123333444 sec\nrounds: 3"
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
        "date": 1678031873891,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-small]",
            "value": 185.75775479809357,
            "unit": "iter/sec",
            "range": "stddev: 0.00014013721026579095",
            "extra": "mean: 5.383355333331489 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-medium]",
            "value": 190.77219624964656,
            "unit": "iter/sec",
            "range": "stddev: 0.0002160641786703837",
            "extra": "mean: 5.2418540000000275 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-large]",
            "value": 192.726972306744,
            "unit": "iter/sec",
            "range": "stddev: 0.00029623249459102314",
            "extra": "mean: 5.188687333334959 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-small]",
            "value": 2.9528746279288858,
            "unit": "iter/sec",
            "range": "stddev: 0.02693443899315479",
            "extra": "mean: 338.6530503333252 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-medium]",
            "value": 2.388434014019358,
            "unit": "iter/sec",
            "range": "stddev: 0.025909634108795473",
            "extra": "mean: 418.6843739999991 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-large]",
            "value": 1.5430926372224854,
            "unit": "iter/sec",
            "range": "stddev: 0.018783357814725347",
            "extra": "mean: 648.0492330000137 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-small]",
            "value": 1.114102517634029,
            "unit": "iter/sec",
            "range": "stddev: 0.12206309924817277",
            "extra": "mean: 897.5834666666552 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-medium]",
            "value": 0.9918278843990993,
            "unit": "iter/sec",
            "range": "stddev: 0.1327510288580653",
            "extra": "mean: 1.0082394493333406 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-large]",
            "value": 0.8170708721718493,
            "unit": "iter/sec",
            "range": "stddev: 0.13338212882227066",
            "extra": "mean: 1.223884039999992 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-small]",
            "value": 1.0521006723359774,
            "unit": "iter/sec",
            "range": "stddev: 0.5065112025409323",
            "extra": "mean: 950.4793850000132 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-medium]",
            "value": 1.0977478134924539,
            "unit": "iter/sec",
            "range": "stddev: 0.1536197668447024",
            "extra": "mean: 910.9560390000032 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-large]",
            "value": 0.7334485274551383,
            "unit": "iter/sec",
            "range": "stddev: 0.32814733178699096",
            "extra": "mean: 1.3634221933333492 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-small]",
            "value": 0.8863989582339826,
            "unit": "iter/sec",
            "range": "stddev: 0.4216283996900014",
            "extra": "mean: 1.1281601706666606 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-medium]",
            "value": 0.6805412965675978,
            "unit": "iter/sec",
            "range": "stddev: 0.6603257829194192",
            "extra": "mean: 1.469418542333339 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-large]",
            "value": 0.46578287003408786,
            "unit": "iter/sec",
            "range": "stddev: 1.0048718763000852",
            "extra": "mean: 2.146923092999998 sec\nrounds: 3"
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
        "date": 1678032647196,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-small]",
            "value": 183.66291439225282,
            "unit": "iter/sec",
            "range": "stddev: 0.0002274181488020064",
            "extra": "mean: 5.444757333341006 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-medium]",
            "value": 195.5982568286201,
            "unit": "iter/sec",
            "range": "stddev: 0.0003114323169990649",
            "extra": "mean: 5.112519999992553 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-large]",
            "value": 174.1636169652207,
            "unit": "iter/sec",
            "range": "stddev: 0.0005221844150528096",
            "extra": "mean: 5.741727333325268 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-small]",
            "value": 2.7927468179741117,
            "unit": "iter/sec",
            "range": "stddev: 0.03334897468705074",
            "extra": "mean: 358.0704106666606 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-medium]",
            "value": 2.315198526815141,
            "unit": "iter/sec",
            "range": "stddev: 0.0228090320348941",
            "extra": "mean: 431.9284019999922 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-large]",
            "value": 1.5616533179325913,
            "unit": "iter/sec",
            "range": "stddev: 0.032101993513468936",
            "extra": "mean: 640.3469890000034 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-small]",
            "value": 1.1068845748513494,
            "unit": "iter/sec",
            "range": "stddev: 0.13423479831342336",
            "extra": "mean: 903.4365666666702 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-medium]",
            "value": 0.9411037347104022,
            "unit": "iter/sec",
            "range": "stddev: 0.17672608422988872",
            "extra": "mean: 1.0625821183333433 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-large]",
            "value": 0.7980392598877478,
            "unit": "iter/sec",
            "range": "stddev: 0.16964850570385484",
            "extra": "mean: 1.253071183666653 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-small]",
            "value": 1.3556390103800655,
            "unit": "iter/sec",
            "range": "stddev: 0.1368473994020293",
            "extra": "mean: 737.6595039999927 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-medium]",
            "value": 1.025007703342897,
            "unit": "iter/sec",
            "range": "stddev: 0.13067975768429715",
            "extra": "mean: 975.6024239999969 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-large]",
            "value": 0.7237747441123931,
            "unit": "iter/sec",
            "range": "stddev: 0.2801842735194792",
            "extra": "mean: 1.3816453366666697 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-small]",
            "value": 1.0134781236106998,
            "unit": "iter/sec",
            "range": "stddev: 0.28921145623487077",
            "extra": "mean: 986.7011203333315 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-medium]",
            "value": 0.7191502961946078,
            "unit": "iter/sec",
            "range": "stddev: 0.5098831753656844",
            "extra": "mean: 1.390529914666672 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-large]",
            "value": 0.49681211308335615,
            "unit": "iter/sec",
            "range": "stddev: 0.8667977965112192",
            "extra": "mean: 2.0128333703333396 sec\nrounds: 3"
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
        "date": 1678033438773,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-small]",
            "value": 124.60097575869078,
            "unit": "iter/sec",
            "range": "stddev: 0.00027088989016747734",
            "extra": "mean: 8.02561933332413 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-medium]",
            "value": 114.4188062409454,
            "unit": "iter/sec",
            "range": "stddev: 0.002038215975359105",
            "extra": "mean: 8.739822000014405 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-large]",
            "value": 124.28608519072168,
            "unit": "iter/sec",
            "range": "stddev: 0.00026582167645204386",
            "extra": "mean: 8.045953000011727 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-small]",
            "value": 1.7756870990451163,
            "unit": "iter/sec",
            "range": "stddev: 0.04795717068360788",
            "extra": "mean: 563.1622826666671 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-medium]",
            "value": 1.4452993257202822,
            "unit": "iter/sec",
            "range": "stddev: 0.04718581499646614",
            "extra": "mean: 691.8981986666589 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-large]",
            "value": 1.0132377923408524,
            "unit": "iter/sec",
            "range": "stddev: 0.07253007906859464",
            "extra": "mean: 986.9351573333347 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-small]",
            "value": 0.7031065056622555,
            "unit": "iter/sec",
            "range": "stddev: 0.17027848400863346",
            "extra": "mean: 1.4222596319999923 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-medium]",
            "value": 0.6761007004422821,
            "unit": "iter/sec",
            "range": "stddev: 0.1681794040313095",
            "extra": "mean: 1.4790696110000094 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-large]",
            "value": 0.5403601641311784,
            "unit": "iter/sec",
            "range": "stddev: 0.2210388106787668",
            "extra": "mean: 1.8506175443333366 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-small]",
            "value": 0.8203914633833729,
            "unit": "iter/sec",
            "range": "stddev: 0.24634068354517155",
            "extra": "mean: 1.2189302846666692 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-medium]",
            "value": 0.7033809700064769,
            "unit": "iter/sec",
            "range": "stddev: 0.2163408920386504",
            "extra": "mean: 1.4217046559999933 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-large]",
            "value": 0.4909287449022048,
            "unit": "iter/sec",
            "range": "stddev: 0.382664246070498",
            "extra": "mean: 2.0369554856666716 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-small]",
            "value": 0.6727257120647737,
            "unit": "iter/sec",
            "range": "stddev: 0.4591699321712537",
            "extra": "mean: 1.4864899350000087 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-medium]",
            "value": 0.5383439108553595,
            "unit": "iter/sec",
            "range": "stddev: 0.5882423277436777",
            "extra": "mean: 1.8575486410000035 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-large]",
            "value": 0.35952574787463465,
            "unit": "iter/sec",
            "range": "stddev: 1.0855279099883104",
            "extra": "mean: 2.781441957666677 sec\nrounds: 3"
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
        "date": 1678082240391,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-small]",
            "value": 147.34761040022244,
            "unit": "iter/sec",
            "range": "stddev: 0.0002620292376844697",
            "extra": "mean: 6.786672666654188 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-medium]",
            "value": 149.4446859634854,
            "unit": "iter/sec",
            "range": "stddev: 0.0006621294766141927",
            "extra": "mean: 6.691439000007904 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-large]",
            "value": 142.77676633626186,
            "unit": "iter/sec",
            "range": "stddev: 0.00045982414170204",
            "extra": "mean: 7.0039406666827135 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-small]",
            "value": 1.915209239836471,
            "unit": "iter/sec",
            "range": "stddev: 0.04080429555840941",
            "extra": "mean: 522.1361610000296 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-medium]",
            "value": 1.5896909634726577,
            "unit": "iter/sec",
            "range": "stddev: 0.04195143588222454",
            "extra": "mean: 629.0530819999844 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-large]",
            "value": 1.1413383784426057,
            "unit": "iter/sec",
            "range": "stddev: 0.03699532047108189",
            "extra": "mean: 876.1643513333297 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-small]",
            "value": 0.784544845017583,
            "unit": "iter/sec",
            "range": "stddev: 0.15329037312884794",
            "extra": "mean: 1.2746243970000062 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-medium]",
            "value": 0.7099203515037147,
            "unit": "iter/sec",
            "range": "stddev: 0.17926168640259596",
            "extra": "mean: 1.4086087233333349 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-large]",
            "value": 0.593890267638797,
            "unit": "iter/sec",
            "range": "stddev: 0.21827225816454332",
            "extra": "mean: 1.6838127420000053 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-small]",
            "value": 0.911970430577172,
            "unit": "iter/sec",
            "range": "stddev: 0.237017597233254",
            "extra": "mean: 1.0965267803333443 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-medium]",
            "value": 0.7999508200901894,
            "unit": "iter/sec",
            "range": "stddev: 0.19967278661297924",
            "extra": "mean: 1.2500768483333218 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-large]",
            "value": 0.5281809712461873,
            "unit": "iter/sec",
            "range": "stddev: 0.30611044573514457",
            "extra": "mean: 1.893290471333349 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-small]",
            "value": 0.7041160415682126,
            "unit": "iter/sec",
            "range": "stddev: 0.4440853729183993",
            "extra": "mean: 1.4202204480000091 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-medium]",
            "value": 0.523560290927714,
            "unit": "iter/sec",
            "range": "stddev: 0.7727967970206118",
            "extra": "mean: 1.9099997026666529 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-large]",
            "value": 0.3656491137089144,
            "unit": "iter/sec",
            "range": "stddev: 1.1507834866781288",
            "extra": "mean: 2.734862365333337 sec\nrounds: 3"
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
        "date": 1678083655448,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-small]",
            "value": 177.1098924377048,
            "unit": "iter/sec",
            "range": "stddev: 0.00032211850227315203",
            "extra": "mean: 5.646211999997301 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-medium]",
            "value": 181.79024120909563,
            "unit": "iter/sec",
            "range": "stddev: 0.0002902697630443626",
            "extra": "mean: 5.500845333330062 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-large]",
            "value": 181.8222039456972,
            "unit": "iter/sec",
            "range": "stddev: 0.0002032763655784233",
            "extra": "mean: 5.4998783333341335 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-small]",
            "value": 3.1328213299384284,
            "unit": "iter/sec",
            "range": "stddev: 0.03277288885992031",
            "extra": "mean: 319.20109533334085 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-medium]",
            "value": 2.854244054261352,
            "unit": "iter/sec",
            "range": "stddev: 0.030300980751585757",
            "extra": "mean: 350.355464000008 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-large]",
            "value": 1.8740189616149665,
            "unit": "iter/sec",
            "range": "stddev: 0.028021342593411293",
            "extra": "mean: 533.612530333329 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-small]",
            "value": 1.164366484481403,
            "unit": "iter/sec",
            "range": "stddev: 0.12954646340531253",
            "extra": "mean: 858.8361253333309 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-medium]",
            "value": 1.1086591381477737,
            "unit": "iter/sec",
            "range": "stddev: 0.1497852320193689",
            "extra": "mean: 901.9904906666719 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-large]",
            "value": 0.8962676292425644,
            "unit": "iter/sec",
            "range": "stddev: 0.16143338136011587",
            "extra": "mean: 1.115738165000001 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-small]",
            "value": 1.6701144760427322,
            "unit": "iter/sec",
            "range": "stddev: 0.1088288365804437",
            "extra": "mean: 598.761350999998 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-medium]",
            "value": 1.2180688469175494,
            "unit": "iter/sec",
            "range": "stddev: 0.17318601947591167",
            "extra": "mean: 820.971657333331 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-large]",
            "value": 0.8068429477830011,
            "unit": "iter/sec",
            "range": "stddev: 0.26076655393186926",
            "extra": "mean: 1.239398575333335 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-small]",
            "value": 1.1286281489936758,
            "unit": "iter/sec",
            "range": "stddev: 0.29099614445236655",
            "extra": "mean: 886.0314186666661 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-medium]",
            "value": 0.8556556442678144,
            "unit": "iter/sec",
            "range": "stddev: 0.3614679406669607",
            "extra": "mean: 1.1686944469999976 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-large]",
            "value": 0.5963073639059983,
            "unit": "iter/sec",
            "range": "stddev: 0.607234824102539",
            "extra": "mean: 1.6769875076666665 sec\nrounds: 3"
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
        "date": 1678087994541,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-small]",
            "value": 147.81314880723508,
            "unit": "iter/sec",
            "range": "stddev: 0.0021551412550013783",
            "extra": "mean: 6.765298000004805 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-medium]",
            "value": 182.96211641303898,
            "unit": "iter/sec",
            "range": "stddev: 0.000729336857722253",
            "extra": "mean: 5.465612333334017 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-large]",
            "value": 188.2798315268659,
            "unit": "iter/sec",
            "range": "stddev: 0.00029464499117575854",
            "extra": "mean: 5.311243333342948 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-small]",
            "value": 2.894305226299432,
            "unit": "iter/sec",
            "range": "stddev: 0.01373439757123563",
            "extra": "mean: 345.506061666678 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-medium]",
            "value": 2.202034983324609,
            "unit": "iter/sec",
            "range": "stddev: 0.04613415489707312",
            "extra": "mean: 454.1253919999993 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-large]",
            "value": 1.5506598166323649,
            "unit": "iter/sec",
            "range": "stddev: 0.005027283381333273",
            "extra": "mean: 644.886769666698 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-small]",
            "value": 1.0739438518720463,
            "unit": "iter/sec",
            "range": "stddev: 0.1191587665561832",
            "extra": "mean: 931.1473763333614 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-medium]",
            "value": 0.995401969544147,
            "unit": "iter/sec",
            "range": "stddev: 0.13453546511058334",
            "extra": "mean: 1.0046192699999967 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-large]",
            "value": 0.7760473940338518,
            "unit": "iter/sec",
            "range": "stddev: 0.12183195713350212",
            "extra": "mean: 1.288581094000013 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-small]",
            "value": 1.3339104458342026,
            "unit": "iter/sec",
            "range": "stddev: 0.0848426974811081",
            "extra": "mean: 749.6755146666677 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-medium]",
            "value": 1.1295452345348447,
            "unit": "iter/sec",
            "range": "stddev: 0.153557658638306",
            "extra": "mean: 885.3120436666776 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-large]",
            "value": 0.7377823809496136,
            "unit": "iter/sec",
            "range": "stddev: 0.20881225100520825",
            "extra": "mean: 1.3554132299999917 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-small]",
            "value": 1.1270086377702415,
            "unit": "iter/sec",
            "range": "stddev: 0.2667787597726317",
            "extra": "mean: 887.3046456666694 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-medium]",
            "value": 0.8565503817332676,
            "unit": "iter/sec",
            "range": "stddev: 0.42137383642059817",
            "extra": "mean: 1.167473649333336 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-large]",
            "value": 0.5213326330554735,
            "unit": "iter/sec",
            "range": "stddev: 0.5840032300458001",
            "extra": "mean: 1.9181611443333395 sec\nrounds: 3"
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
        "date": 1678104057510,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-small]",
            "value": 176.81226233106457,
            "unit": "iter/sec",
            "range": "stddev: 0.00028268059572630975",
            "extra": "mean: 5.655716333336613 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-medium]",
            "value": 156.51795547899266,
            "unit": "iter/sec",
            "range": "stddev: 0.0013003162703719164",
            "extra": "mean: 6.389043333333196 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-large]",
            "value": 178.17424847589916,
            "unit": "iter/sec",
            "range": "stddev: 0.0002584333177767955",
            "extra": "mean: 5.612483333332345 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-small]",
            "value": 3.429315691976249,
            "unit": "iter/sec",
            "range": "stddev: 0.018867400467558183",
            "extra": "mean: 291.6033663333337 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-medium]",
            "value": 2.886685662835224,
            "unit": "iter/sec",
            "range": "stddev: 0.02541859384077438",
            "extra": "mean: 346.418043666669 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-large]",
            "value": 1.8819570258324834,
            "unit": "iter/sec",
            "range": "stddev: 0.008031980632517218",
            "extra": "mean: 531.3617613333387 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-small]",
            "value": 1.16519275020659,
            "unit": "iter/sec",
            "range": "stddev: 0.19200613808782846",
            "extra": "mean: 858.2271043333378 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-medium]",
            "value": 1.1296025015701086,
            "unit": "iter/sec",
            "range": "stddev: 0.12300279493614213",
            "extra": "mean: 885.2671613333314 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-large]",
            "value": 0.893802225921736,
            "unit": "iter/sec",
            "range": "stddev: 0.12303609495850301",
            "extra": "mean: 1.1188157413333215 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-small]",
            "value": 1.668253341492962,
            "unit": "iter/sec",
            "range": "stddev: 0.07941109532424102",
            "extra": "mean: 599.4293403333302 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-medium]",
            "value": 1.2508735491066094,
            "unit": "iter/sec",
            "range": "stddev: 0.16013043363738902",
            "extra": "mean: 799.4413190000008 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-large]",
            "value": 0.8428862357619279,
            "unit": "iter/sec",
            "range": "stddev: 0.2226452320320854",
            "extra": "mean: 1.1863997269999895 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-small]",
            "value": 1.3483080572973063,
            "unit": "iter/sec",
            "range": "stddev: 0.19428337971572962",
            "extra": "mean: 741.6702693333358 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-medium]",
            "value": 0.9745299512410445,
            "unit": "iter/sec",
            "range": "stddev: 0.26984993331726514",
            "extra": "mean: 1.0261357269999962 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-large]",
            "value": 0.648112593531419,
            "unit": "iter/sec",
            "range": "stddev: 0.6040973985514815",
            "extra": "mean: 1.5429417819999856 sec\nrounds: 3"
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
        "date": 1678106837722,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-small]",
            "value": 184.28196467402907,
            "unit": "iter/sec",
            "range": "stddev: 0.0002079710130783115",
            "extra": "mean: 5.426467000006596 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-medium]",
            "value": 190.8374002376271,
            "unit": "iter/sec",
            "range": "stddev: 0.00027534647212597557",
            "extra": "mean: 5.240062999992763 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-large]",
            "value": 191.42435480592465,
            "unit": "iter/sec",
            "range": "stddev: 0.0003678869183868322",
            "extra": "mean: 5.223995666663465 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-small]",
            "value": 2.901485272825841,
            "unit": "iter/sec",
            "range": "stddev: 0.027059491763141565",
            "extra": "mean: 344.65106866665946 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-medium]",
            "value": 2.292027901405746,
            "unit": "iter/sec",
            "range": "stddev: 0.06280175686920914",
            "extra": "mean: 436.29486333333034 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-large]",
            "value": 1.6108110377465497,
            "unit": "iter/sec",
            "range": "stddev: 0.010192398850861178",
            "extra": "mean: 620.8052816666528 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-small]",
            "value": 1.087631644650228,
            "unit": "iter/sec",
            "range": "stddev: 0.1527472517084021",
            "extra": "mean: 919.4289306666784 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-medium]",
            "value": 1.0050469683122292,
            "unit": "iter/sec",
            "range": "stddev: 0.15171364077273133",
            "extra": "mean: 994.9783756666571 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-large]",
            "value": 0.7949643346723796,
            "unit": "iter/sec",
            "range": "stddev: 0.16247931433622514",
            "extra": "mean: 1.2579180680000188 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-small]",
            "value": 1.393290401634662,
            "unit": "iter/sec",
            "range": "stddev: 0.0979368471813509",
            "extra": "mean: 717.7254640000115 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-medium]",
            "value": 1.1429039187579335,
            "unit": "iter/sec",
            "range": "stddev: 0.1543032745733941",
            "extra": "mean: 874.964188666676 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-large]",
            "value": 0.7513148752239817,
            "unit": "iter/sec",
            "range": "stddev: 0.2326789251870549",
            "extra": "mean: 1.3309998683333408 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-small]",
            "value": 1.2078469618636032,
            "unit": "iter/sec",
            "range": "stddev: 0.20005911939636828",
            "extra": "mean: 827.9194563333476 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-medium]",
            "value": 0.86256432877538,
            "unit": "iter/sec",
            "range": "stddev: 0.43353938679945425",
            "extra": "mean: 1.1593338219999698 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-large]",
            "value": 0.5778997771124156,
            "unit": "iter/sec",
            "range": "stddev: 0.6601399000498247",
            "extra": "mean: 1.7304038513333353 sec\nrounds: 3"
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
        "date": 1678112074745,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-small]",
            "value": 184.70023306087094,
            "unit": "iter/sec",
            "range": "stddev: 0.0002751047419448923",
            "extra": "mean: 5.4141783333345 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-medium]",
            "value": 182.34490441395076,
            "unit": "iter/sec",
            "range": "stddev: 0.0002848269543683689",
            "extra": "mean: 5.484112666673961 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-large]",
            "value": 187.33450167610485,
            "unit": "iter/sec",
            "range": "stddev: 0.00038437809317057043",
            "extra": "mean: 5.338045000002012 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-small]",
            "value": 2.7766572191923697,
            "unit": "iter/sec",
            "range": "stddev: 0.017755941388516595",
            "extra": "mean: 360.14528299998955 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-medium]",
            "value": 2.246471354558202,
            "unit": "iter/sec",
            "range": "stddev: 0.027139860102439906",
            "extra": "mean: 445.1425556666682 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-large]",
            "value": 1.5343467164216136,
            "unit": "iter/sec",
            "range": "stddev: 0.013479381275275436",
            "extra": "mean: 651.7431746666679 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-small]",
            "value": 1.023816206436679,
            "unit": "iter/sec",
            "range": "stddev: 0.12517963843238528",
            "extra": "mean: 976.7378106666532 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-medium]",
            "value": 0.8998426038509812,
            "unit": "iter/sec",
            "range": "stddev: 0.1743423973358685",
            "extra": "mean: 1.1113054613333304 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-large]",
            "value": 0.743430707818884,
            "unit": "iter/sec",
            "range": "stddev: 0.08322210970464106",
            "extra": "mean: 1.3451152736666643 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-small]",
            "value": 1.350565967431499,
            "unit": "iter/sec",
            "range": "stddev: 0.13635909560881546",
            "extra": "mean: 740.4303263333342 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-medium]",
            "value": 1.010636076909972,
            "unit": "iter/sec",
            "range": "stddev: 0.13050763421732325",
            "extra": "mean: 989.4758586666607 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-large]",
            "value": 0.7181146018325132,
            "unit": "iter/sec",
            "range": "stddev: 0.26476062050475846",
            "extra": "mean: 1.3925353940000111 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-small]",
            "value": 1.0795980234651747,
            "unit": "iter/sec",
            "range": "stddev: 0.28756712334000006",
            "extra": "mean: 926.2706843333319 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-medium]",
            "value": 0.7423903741291946,
            "unit": "iter/sec",
            "range": "stddev: 0.4288927014764501",
            "extra": "mean: 1.3470002236666592 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-large]",
            "value": 0.5159844618895222,
            "unit": "iter/sec",
            "range": "stddev: 0.7496366746590575",
            "extra": "mean: 1.9380428556666704 sec\nrounds: 3"
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
        "date": 1678155058932,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-small]",
            "value": 154.00294463922728,
            "unit": "iter/sec",
            "range": "stddev: 0.00035210828829703746",
            "extra": "mean: 6.493382333322491 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-medium]",
            "value": 157.49739578044657,
            "unit": "iter/sec",
            "range": "stddev: 0.0004445153235718314",
            "extra": "mean: 6.349311333337937 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-large]",
            "value": 154.9327168525745,
            "unit": "iter/sec",
            "range": "stddev: 0.0003162219814872994",
            "extra": "mean: 6.454414666668147 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-small]",
            "value": 1.6553531820137422,
            "unit": "iter/sec",
            "range": "stddev: 0.02391286810349062",
            "extra": "mean: 604.1006903333445 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-medium]",
            "value": 1.4805912374314922,
            "unit": "iter/sec",
            "range": "stddev: 0.1047385759336084",
            "extra": "mean: 675.4058613333314 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-large]",
            "value": 1.1302431935124573,
            "unit": "iter/sec",
            "range": "stddev: 0.04821710669805684",
            "extra": "mean: 884.7653369999952 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-small]",
            "value": 0.7758500587397221,
            "unit": "iter/sec",
            "range": "stddev: 0.23466164224169156",
            "extra": "mean: 1.2889088410000038 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-medium]",
            "value": 0.6720061088258399,
            "unit": "iter/sec",
            "range": "stddev: 0.22448246717758205",
            "extra": "mean: 1.488081710666658 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-large]",
            "value": 0.5897052060333419,
            "unit": "iter/sec",
            "range": "stddev: 0.15195765309064813",
            "extra": "mean: 1.695762543333321 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-small]",
            "value": 0.8881081818004511,
            "unit": "iter/sec",
            "range": "stddev: 0.2500224159569474",
            "extra": "mean: 1.1259889509999919 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-medium]",
            "value": 0.7663362417908787,
            "unit": "iter/sec",
            "range": "stddev: 0.3091342355648181",
            "extra": "mean: 1.3049102280000018 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-large]",
            "value": 0.5413445675361872,
            "unit": "iter/sec",
            "range": "stddev: 0.34464107676798594",
            "extra": "mean: 1.8472523046666633 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-small]",
            "value": 0.6944845020533047,
            "unit": "iter/sec",
            "range": "stddev: 0.46180460627214176",
            "extra": "mean: 1.4399169413333368 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-medium]",
            "value": 0.5278826010632879,
            "unit": "iter/sec",
            "range": "stddev: 0.7237615815861248",
            "extra": "mean: 1.8943605983333214 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-large]",
            "value": 0.34949731316810684,
            "unit": "iter/sec",
            "range": "stddev: 1.287812298607971",
            "extra": "mean: 2.8612523253333393 sec\nrounds: 3"
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
          "id": "f402c45267ad107a647395a74e67e53760c13755",
          "message": "update bench result",
          "timestamp": "2023-03-07T10:37:44+08:00",
          "tree_id": "536e38111b61656d41c455cf40208c3a2fcaa89c",
          "url": "https://github.com/Yiling-J/cacheme/commit/f402c45267ad107a647395a74e67e53760c13755"
        },
        "date": 1678157140616,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-small]",
            "value": 196.44822911438357,
            "unit": "iter/sec",
            "range": "stddev: 0.00025580619369618596",
            "extra": "mean: 5.09039966666099 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-medium]",
            "value": 192.9558135691686,
            "unit": "iter/sec",
            "range": "stddev: 0.0002461428410618554",
            "extra": "mean: 5.182533666660068 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[theine-tlfu-large]",
            "value": 196.70970237842852,
            "unit": "iter/sec",
            "range": "stddev: 0.0002723414046978765",
            "extra": "mean: 5.083633333327953 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-small]",
            "value": 2.8651281165530866,
            "unit": "iter/sec",
            "range": "stddev: 0.04807082843014498",
            "extra": "mean: 349.0245320000061 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-medium]",
            "value": 2.3328917612478146,
            "unit": "iter/sec",
            "range": "stddev: 0.025889192465937516",
            "extra": "mean: 428.65254900001065 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[redis-large]",
            "value": 1.5781171799444467,
            "unit": "iter/sec",
            "range": "stddev: 0.019488342562591125",
            "extra": "mean: 633.6665063333271 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-small]",
            "value": 1.0687823114669213,
            "unit": "iter/sec",
            "range": "stddev: 0.13622681992670777",
            "extra": "mean: 935.644227333332 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-medium]",
            "value": 0.9376363625072839,
            "unit": "iter/sec",
            "range": "stddev: 0.117901725125837",
            "extra": "mean: 1.0665115389999944 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mongo-large]",
            "value": 0.8066986372540718,
            "unit": "iter/sec",
            "range": "stddev: 0.1285215100783093",
            "extra": "mean: 1.2396202916666728 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-small]",
            "value": 1.3631822504510558,
            "unit": "iter/sec",
            "range": "stddev: 0.16717478474460915",
            "extra": "mean: 733.5776266666585 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-medium]",
            "value": 1.0460717317545278,
            "unit": "iter/sec",
            "range": "stddev: 0.11090916429859168",
            "extra": "mean: 955.9573876666624 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[postgres-large]",
            "value": 0.7278025429992903,
            "unit": "iter/sec",
            "range": "stddev: 0.2931214556119822",
            "extra": "mean: 1.3739990463333338 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-small]",
            "value": 1.1325176728391881,
            "unit": "iter/sec",
            "range": "stddev: 0.22222905291827127",
            "extra": "mean: 882.9884283333342 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-medium]",
            "value": 0.7858664126117697,
            "unit": "iter/sec",
            "range": "stddev: 0.34143243955403907",
            "extra": "mean: 1.272480900000005 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_zipf[mysql-large]",
            "value": 0.5113087216035805,
            "unit": "iter/sec",
            "range": "stddev: 0.7447092963314627",
            "extra": "mean: 1.9557655829999778 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}