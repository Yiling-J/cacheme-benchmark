window.BENCHMARK_DATA = {
  "lastUpdate": 1678033439479,
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
      }
    ]
  }
}