window.BENCHMARK_DATA = {
  "lastUpdate": 1678156833067,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark: test_read_only": [
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
        "date": 1678030616399,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-small]",
            "value": 372.6392835580741,
            "unit": "iter/sec",
            "range": "stddev: 0.00000855387632932206",
            "extra": "mean: 2.683560333338164 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-medium]",
            "value": 376.4785725351437,
            "unit": "iter/sec",
            "range": "stddev: 0.000011747527403349286",
            "extra": "mean: 2.6561936666572215 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-large]",
            "value": 378.7171562292031,
            "unit": "iter/sec",
            "range": "stddev: 0.000013141156731986568",
            "extra": "mean: 2.640492999991769 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-small]",
            "value": 3.9508276097539716,
            "unit": "iter/sec",
            "range": "stddev: 0.0026501616045711226",
            "extra": "mean: 253.11152466666914 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-medium]",
            "value": 3.1995070370197127,
            "unit": "iter/sec",
            "range": "stddev: 0.015234255450687864",
            "extra": "mean: 312.54814833333927 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-large]",
            "value": 1.9981027588043014,
            "unit": "iter/sec",
            "range": "stddev: 0.009099925018486148",
            "extra": "mean: 500.47476066667207 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-small]",
            "value": 1.517750076520668,
            "unit": "iter/sec",
            "range": "stddev: 0.035192815947212484",
            "extra": "mean: 658.8700046666626 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-medium]",
            "value": 1.4708136057557797,
            "unit": "iter/sec",
            "range": "stddev: 0.014015464029468103",
            "extra": "mean: 679.8958046666618 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-large]",
            "value": 1.1475521884817061,
            "unit": "iter/sec",
            "range": "stddev: 0.007144068954356654",
            "extra": "mean: 871.4200626666676 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-small]",
            "value": 2.1747313507605717,
            "unit": "iter/sec",
            "range": "stddev: 0.022507191319094438",
            "extra": "mean: 459.8269113333326 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-medium]",
            "value": 1.8315120859568745,
            "unit": "iter/sec",
            "range": "stddev: 0.02446123460659611",
            "extra": "mean: 545.9969429999963 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-large]",
            "value": 1.144467921508386,
            "unit": "iter/sec",
            "range": "stddev: 0.0050330490628588504",
            "extra": "mean: 873.7684833333029 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-small]",
            "value": 2.2882990751239123,
            "unit": "iter/sec",
            "range": "stddev: 0.023316499621176805",
            "extra": "mean: 437.0058140000121 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-medium]",
            "value": 2.121634029998302,
            "unit": "iter/sec",
            "range": "stddev: 0.0037016270317142166",
            "extra": "mean: 471.3348229999876 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-large]",
            "value": 1.314384844214222,
            "unit": "iter/sec",
            "range": "stddev: 0.03436330364814552",
            "extra": "mean: 760.8121810000247 msec\nrounds: 3"
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
        "date": 1678031589517,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-small]",
            "value": 344.7496410877245,
            "unit": "iter/sec",
            "range": "stddev: 0.000308144471240188",
            "extra": "mean: 2.900655666659683 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-medium]",
            "value": 381.47695414818753,
            "unit": "iter/sec",
            "range": "stddev: 0.00003787831702307456",
            "extra": "mean: 2.621390333350367 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-large]",
            "value": 359.5540953926663,
            "unit": "iter/sec",
            "range": "stddev: 0.0002421009322400977",
            "extra": "mean: 2.7812226666696915 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-small]",
            "value": 4.007113764953328,
            "unit": "iter/sec",
            "range": "stddev: 0.006990898729802177",
            "extra": "mean: 249.55617899998592 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-medium]",
            "value": 3.354986044214488,
            "unit": "iter/sec",
            "range": "stddev: 0.0017658468628807093",
            "extra": "mean: 298.0638329999768 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-large]",
            "value": 1.890095436210765,
            "unit": "iter/sec",
            "range": "stddev: 0.03025620003424714",
            "extra": "mean: 529.0738133333548 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-small]",
            "value": 1.630788939447377,
            "unit": "iter/sec",
            "range": "stddev: 0.013297786861145097",
            "extra": "mean: 613.2001363333188 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-medium]",
            "value": 1.467115946538553,
            "unit": "iter/sec",
            "range": "stddev: 0.022354748682300165",
            "extra": "mean: 681.6093863333398 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-large]",
            "value": 1.0792333503579041,
            "unit": "iter/sec",
            "range": "stddev: 0.09520147441828761",
            "extra": "mean: 926.5836713333329 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-small]",
            "value": 2.2680957816212497,
            "unit": "iter/sec",
            "range": "stddev: 0.007909068143891088",
            "extra": "mean: 440.8984876666864 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-medium]",
            "value": 1.884082034928865,
            "unit": "iter/sec",
            "range": "stddev: 0.014427190969434659",
            "extra": "mean: 530.7624516666843 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-large]",
            "value": 1.1799983622409254,
            "unit": "iter/sec",
            "range": "stddev: 0.02474265729835867",
            "extra": "mean: 847.4588033333438 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-small]",
            "value": 2.4310590214072887,
            "unit": "iter/sec",
            "range": "stddev: 0.0062791065137581675",
            "extra": "mean: 411.3433656666719 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-medium]",
            "value": 2.0803189122235337,
            "unit": "iter/sec",
            "range": "stddev: 0.004473350212899227",
            "extra": "mean: 480.6955290000019 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-large]",
            "value": 1.4174623374941335,
            "unit": "iter/sec",
            "range": "stddev: 0.01868122471670819",
            "extra": "mean: 705.486116666672 msec\nrounds: 3"
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
        "date": 1678032357318,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-small]",
            "value": 369.50559043512436,
            "unit": "iter/sec",
            "range": "stddev: 0.0001058102129713395",
            "extra": "mean: 2.7063189999978476 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-medium]",
            "value": 374.0155443363344,
            "unit": "iter/sec",
            "range": "stddev: 0.0000653872686417945",
            "extra": "mean: 2.6736856666597455 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-large]",
            "value": 374.5058395426289,
            "unit": "iter/sec",
            "range": "stddev: 0.0001716545181457857",
            "extra": "mean: 2.670185333348248 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-small]",
            "value": 2.3728057065964476,
            "unit": "iter/sec",
            "range": "stddev: 0.020096474910306524",
            "extra": "mean: 421.4420073333353 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-medium]",
            "value": 1.8332763646776882,
            "unit": "iter/sec",
            "range": "stddev: 0.01890325536577833",
            "extra": "mean: 545.4714953333356 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-large]",
            "value": 1.3429307190256188,
            "unit": "iter/sec",
            "range": "stddev: 0.00993623156756075",
            "extra": "mean: 744.6400516666737 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-small]",
            "value": 1.0504809113167424,
            "unit": "iter/sec",
            "range": "stddev: 0.03140073555188412",
            "extra": "mean: 951.9449513333219 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-medium]",
            "value": 0.9195531729658998,
            "unit": "iter/sec",
            "range": "stddev: 0.08488695200639457",
            "extra": "mean: 1.0874846930000028 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-large]",
            "value": 0.7833794055647992,
            "unit": "iter/sec",
            "range": "stddev: 0.026978395566386135",
            "extra": "mean: 1.2765206653333223 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-small]",
            "value": 1.1725779641538263,
            "unit": "iter/sec",
            "range": "stddev: 0.02136802906030006",
            "extra": "mean: 852.821757333326 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-medium]",
            "value": 1.0860700505082128,
            "unit": "iter/sec",
            "range": "stddev: 0.05095707980363096",
            "extra": "mean: 920.7509216666665 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-large]",
            "value": 0.7670628038935077,
            "unit": "iter/sec",
            "range": "stddev: 0.005277782080578744",
            "extra": "mean: 1.3036742166666595 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-small]",
            "value": 1.5129582826853343,
            "unit": "iter/sec",
            "range": "stddev: 0.012119920386538143",
            "extra": "mean: 660.9567570000081 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-medium]",
            "value": 1.3245689829790894,
            "unit": "iter/sec",
            "range": "stddev: 0.025346123560131613",
            "extra": "mean: 754.9625673333367 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-large]",
            "value": 0.9839852413549186,
            "unit": "iter/sec",
            "range": "stddev: 0.044876638049154524",
            "extra": "mean: 1.0162754053333458 sec\nrounds: 3"
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
        "date": 1678033089116,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-small]",
            "value": 382.66516594053854,
            "unit": "iter/sec",
            "range": "stddev: 0.000041648098797250036",
            "extra": "mean: 2.613250666655631 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-medium]",
            "value": 384.47485412663707,
            "unit": "iter/sec",
            "range": "stddev: 0.000046902390155203825",
            "extra": "mean: 2.600950333336035 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-large]",
            "value": 391.7754833961871,
            "unit": "iter/sec",
            "range": "stddev: 0.00002117154694615325",
            "extra": "mean: 2.5524823333284985 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-small]",
            "value": 3.486888592217332,
            "unit": "iter/sec",
            "range": "stddev: 0.0014298537988947878",
            "extra": "mean: 286.78862933332044 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-medium]",
            "value": 2.4755008755186165,
            "unit": "iter/sec",
            "range": "stddev: 0.020939119503787438",
            "extra": "mean: 403.9586533333382 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-large]",
            "value": 1.6418623551874851,
            "unit": "iter/sec",
            "range": "stddev: 0.01305789361924184",
            "extra": "mean: 609.06445466667 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-small]",
            "value": 1.3899706386865112,
            "unit": "iter/sec",
            "range": "stddev: 0.03332799073427",
            "extra": "mean: 719.4396573333203 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-medium]",
            "value": 1.2379371591398485,
            "unit": "iter/sec",
            "range": "stddev: 0.029899828944867028",
            "extra": "mean: 807.7954463333393 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-large]",
            "value": 1.0010890610971368,
            "unit": "iter/sec",
            "range": "stddev: 0.0068736966412909035",
            "extra": "mean: 998.9121236666563 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-small]",
            "value": 1.9481318467580842,
            "unit": "iter/sec",
            "range": "stddev: 0.0024013934136957295",
            "extra": "mean: 513.3122799999986 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-medium]",
            "value": 1.4647610460724676,
            "unit": "iter/sec",
            "range": "stddev: 0.03196228984688038",
            "extra": "mean: 682.7052116666721 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-large]",
            "value": 1.0133236337815086,
            "unit": "iter/sec",
            "range": "stddev: 0.039715146508094115",
            "extra": "mean: 986.8515513333213 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-small]",
            "value": 2.101568846152355,
            "unit": "iter/sec",
            "range": "stddev: 0.003175534669577853",
            "extra": "mean: 475.83499433332577 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-medium]",
            "value": 1.7576659144389386,
            "unit": "iter/sec",
            "range": "stddev: 0.04774718195466653",
            "extra": "mean: 568.9363330000106 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-large]",
            "value": 1.1961857788669128,
            "unit": "iter/sec",
            "range": "stddev: 0.0677323622398164",
            "extra": "mean: 835.9905439999883 msec\nrounds: 3"
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
        "date": 1678081870093,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-small]",
            "value": 375.97556259081347,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036137515599500586",
            "extra": "mean: 2.6597473333348867 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-medium]",
            "value": 376.3105013212002,
            "unit": "iter/sec",
            "range": "stddev: 0.00001718924082674043",
            "extra": "mean: 2.657379999997526 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-large]",
            "value": 380.15865794792796,
            "unit": "iter/sec",
            "range": "stddev: 0.000016529836676210228",
            "extra": "mean: 2.6304806666720046 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-small]",
            "value": 3.910122803532528,
            "unit": "iter/sec",
            "range": "stddev: 0.006827075787337299",
            "extra": "mean: 255.7464433333318 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-medium]",
            "value": 3.326929607472625,
            "unit": "iter/sec",
            "range": "stddev: 0.0003164956547826333",
            "extra": "mean: 300.5774446666673 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-large]",
            "value": 1.955696702967208,
            "unit": "iter/sec",
            "range": "stddev: 0.016437403308492023",
            "extra": "mean: 511.32672999999807 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-small]",
            "value": 1.6035099678669462,
            "unit": "iter/sec",
            "range": "stddev: 0.00453608041468575",
            "extra": "mean: 623.6319199999988 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-medium]",
            "value": 1.4152414926946508,
            "unit": "iter/sec",
            "range": "stddev: 0.02126557919152738",
            "extra": "mean: 706.593189333347 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-large]",
            "value": 1.116179097499321,
            "unit": "iter/sec",
            "range": "stddev: 0.04487841154098953",
            "extra": "mean: 895.9135700000047 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-small]",
            "value": 2.304021310538201,
            "unit": "iter/sec",
            "range": "stddev: 0.001148159171226126",
            "extra": "mean: 434.0237633333383 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-medium]",
            "value": 1.916700688955766,
            "unit": "iter/sec",
            "range": "stddev: 0.003450088547365409",
            "extra": "mean: 521.7298693333324 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-large]",
            "value": 1.1973627969450602,
            "unit": "iter/sec",
            "range": "stddev: 0.00981936437209303",
            "extra": "mean: 835.1687579999899 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-small]",
            "value": 2.3680484975322007,
            "unit": "iter/sec",
            "range": "stddev: 0.011016091239937971",
            "extra": "mean: 422.28864866666527 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-medium]",
            "value": 2.0520889410724683,
            "unit": "iter/sec",
            "range": "stddev: 0.02186303511573093",
            "extra": "mean: 487.30831300000926 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-large]",
            "value": 1.4428741140455348,
            "unit": "iter/sec",
            "range": "stddev: 0.005198098123103622",
            "extra": "mean: 693.061155 msec\nrounds: 3"
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
        "date": 1678083355454,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-small]",
            "value": 322.7770879922864,
            "unit": "iter/sec",
            "range": "stddev: 0.0001456950555168859",
            "extra": "mean: 3.0981133333227717 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-medium]",
            "value": 326.12102198802916,
            "unit": "iter/sec",
            "range": "stddev: 0.00003272252027456815",
            "extra": "mean: 3.066346333345867 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-large]",
            "value": 332.62605945468874,
            "unit": "iter/sec",
            "range": "stddev: 0.00006297871757595453",
            "extra": "mean: 3.006379000008034 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-small]",
            "value": 2.7450723729684072,
            "unit": "iter/sec",
            "range": "stddev: 0.005945946207889842",
            "extra": "mean: 364.28912033333444 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-medium]",
            "value": 2.190350020474096,
            "unit": "iter/sec",
            "range": "stddev: 0.02612577691576402",
            "extra": "mean: 456.5480359999962 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-large]",
            "value": 1.3997758405501044,
            "unit": "iter/sec",
            "range": "stddev: 0.004820708292749869",
            "extra": "mean: 714.4000996666762 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-small]",
            "value": 1.1609418285159874,
            "unit": "iter/sec",
            "range": "stddev: 0.017167416134450292",
            "extra": "mean: 861.3696013333273 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-medium]",
            "value": 1.0274628440718026,
            "unit": "iter/sec",
            "range": "stddev: 0.022038562128961006",
            "extra": "mean: 973.271204666664 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-large]",
            "value": 0.7733865635162545,
            "unit": "iter/sec",
            "range": "stddev: 0.09424475533167853",
            "extra": "mean: 1.293014447333339 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-small]",
            "value": 1.5261644899975448,
            "unit": "iter/sec",
            "range": "stddev: 0.02399084419574433",
            "extra": "mean: 655.2373656666646 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-medium]",
            "value": 1.1751889502091193,
            "unit": "iter/sec",
            "range": "stddev: 0.05606934402026546",
            "extra": "mean: 850.9269933333314 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-large]",
            "value": 0.8308721948036192,
            "unit": "iter/sec",
            "range": "stddev: 0.03595026609263668",
            "extra": "mean: 1.203554537333332 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-small]",
            "value": 1.6799511679858417,
            "unit": "iter/sec",
            "range": "stddev: 0.005030712395685403",
            "extra": "mean: 595.2553973333276 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-medium]",
            "value": 1.4381293016532795,
            "unit": "iter/sec",
            "range": "stddev: 0.010517251703735781",
            "extra": "mean: 695.3477679999954 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-large]",
            "value": 1.0232820540466017,
            "unit": "iter/sec",
            "range": "stddev: 0.0018810599815797812",
            "extra": "mean: 977.2476669999909 msec\nrounds: 3"
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
        "date": 1678087663953,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-small]",
            "value": 385.1029348060022,
            "unit": "iter/sec",
            "range": "stddev: 0.00001123015136936418",
            "extra": "mean: 2.596708333328479 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-medium]",
            "value": 399.2802308355207,
            "unit": "iter/sec",
            "range": "stddev: 0.000032947748550888465",
            "extra": "mean: 2.5045066666772677 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-large]",
            "value": 403.06230617721985,
            "unit": "iter/sec",
            "range": "stddev: 0.000026785639179171365",
            "extra": "mean: 2.481006000001192 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-small]",
            "value": 3.1100739774634882,
            "unit": "iter/sec",
            "range": "stddev: 0.01147271171833111",
            "extra": "mean: 321.5357600000175 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-medium]",
            "value": 2.573153044930797,
            "unit": "iter/sec",
            "range": "stddev: 0.008843742955472886",
            "extra": "mean: 388.6282636666465 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-large]",
            "value": 1.6586533997128727,
            "unit": "iter/sec",
            "range": "stddev: 0.008717455088748346",
            "extra": "mean: 602.8987130000208 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-small]",
            "value": 1.3969221711587803,
            "unit": "iter/sec",
            "range": "stddev: 0.01706831638209325",
            "extra": "mean: 715.85949499998 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-medium]",
            "value": 1.232515974150658,
            "unit": "iter/sec",
            "range": "stddev: 0.024514636912428195",
            "extra": "mean: 811.3485106666568 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-large]",
            "value": 0.9739581337311032,
            "unit": "iter/sec",
            "range": "stddev: 0.012066760817077676",
            "extra": "mean: 1.0267381783333274 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-small]",
            "value": 1.9267655229941436,
            "unit": "iter/sec",
            "range": "stddev: 0.0033893363730374774",
            "extra": "mean: 519.0045119999999 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-medium]",
            "value": 1.4726877769547149,
            "unit": "iter/sec",
            "range": "stddev: 0.03845324150996198",
            "extra": "mean: 679.0305560000244 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-large]",
            "value": 1.0447071584394034,
            "unit": "iter/sec",
            "range": "stddev: 0.012101514272472904",
            "extra": "mean: 957.2060379999812 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-small]",
            "value": 1.980906726774907,
            "unit": "iter/sec",
            "range": "stddev: 0.048834530086884806",
            "extra": "mean: 504.81932666667717 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-medium]",
            "value": 1.8467202903843252,
            "unit": "iter/sec",
            "range": "stddev: 0.0012333647557375008",
            "extra": "mean: 541.5005213333567 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-large]",
            "value": 1.1868065324020094,
            "unit": "iter/sec",
            "range": "stddev: 0.05301835970402721",
            "extra": "mean: 842.5973169999944 msec\nrounds: 3"
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
        "date": 1678103781473,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-small]",
            "value": 380.82224854814405,
            "unit": "iter/sec",
            "range": "stddev: 0.000025514701644535926",
            "extra": "mean: 2.6258970000109607 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-medium]",
            "value": 379.6655677892898,
            "unit": "iter/sec",
            "range": "stddev: 0.000037956949293555615",
            "extra": "mean: 2.6338969999907627 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-large]",
            "value": 384.71457192727974,
            "unit": "iter/sec",
            "range": "stddev: 0.000021249790576354482",
            "extra": "mean: 2.599329666641855 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-small]",
            "value": 3.9808375061899355,
            "unit": "iter/sec",
            "range": "stddev: 0.004022576776866393",
            "extra": "mean: 251.20342099999488 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-medium]",
            "value": 3.33533599135805,
            "unit": "iter/sec",
            "range": "stddev: 0.001543397920334536",
            "extra": "mean: 299.8198690000133 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-large]",
            "value": 1.9781155537564523,
            "unit": "iter/sec",
            "range": "stddev: 0.004891325741920472",
            "extra": "mean: 505.5316399999962 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-small]",
            "value": 1.507172378637811,
            "unit": "iter/sec",
            "range": "stddev: 0.05642623724378733",
            "extra": "mean: 663.4941126666641 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-medium]",
            "value": 1.4480630781876322,
            "unit": "iter/sec",
            "range": "stddev: 0.016191606793244193",
            "extra": "mean: 690.577651666653 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-large]",
            "value": 1.1312527150135787,
            "unit": "iter/sec",
            "range": "stddev: 0.013710757460350788",
            "extra": "mean: 883.9757790000059 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-small]",
            "value": 2.2011059933971397,
            "unit": "iter/sec",
            "range": "stddev: 0.02808542965377107",
            "extra": "mean: 454.317058333307 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-medium]",
            "value": 1.9124411342490188,
            "unit": "iter/sec",
            "range": "stddev: 0.009832443252833998",
            "extra": "mean: 522.8919113333556 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-large]",
            "value": 1.1868094175064514,
            "unit": "iter/sec",
            "range": "stddev: 0.004446032002872709",
            "extra": "mean: 842.5952686666847 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-small]",
            "value": 2.2682632773276366,
            "unit": "iter/sec",
            "range": "stddev: 0.033931080267425334",
            "extra": "mean: 440.8659303333404 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-medium]",
            "value": 2.0653953517544195,
            "unit": "iter/sec",
            "range": "stddev: 0.0031356768615356614",
            "extra": "mean: 484.16880533335416 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-large]",
            "value": 1.3340000291959744,
            "unit": "iter/sec",
            "range": "stddev: 0.01843781101777141",
            "extra": "mean: 749.625170999972 msec\nrounds: 3"
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
        "date": 1678106549630,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-small]",
            "value": 311.3281091098355,
            "unit": "iter/sec",
            "range": "stddev: 0.00023842010067402167",
            "extra": "mean: 3.212045333327751 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-medium]",
            "value": 333.5695005392284,
            "unit": "iter/sec",
            "range": "stddev: 0.00005359667681556834",
            "extra": "mean: 2.997876000004377 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-large]",
            "value": 338.7141462613322,
            "unit": "iter/sec",
            "range": "stddev: 0.0000965622239982313",
            "extra": "mean: 2.952341999995648 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-small]",
            "value": 2.566622241287548,
            "unit": "iter/sec",
            "range": "stddev: 0.034465424292552005",
            "extra": "mean: 389.6171333333219 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-medium]",
            "value": 2.0348102615194064,
            "unit": "iter/sec",
            "range": "stddev: 0.01654282264480859",
            "extra": "mean: 491.4463126666628 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-large]",
            "value": 1.4285039657710472,
            "unit": "iter/sec",
            "range": "stddev: 0.039772585249096014",
            "extra": "mean: 700.0330583333323 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-small]",
            "value": 1.194663978385992,
            "unit": "iter/sec",
            "range": "stddev: 0.017130415528193842",
            "extra": "mean: 837.0554550000028 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-medium]",
            "value": 1.0269984732496904,
            "unit": "iter/sec",
            "range": "stddev: 0.029039980789004917",
            "extra": "mean: 973.7112820000012 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-large]",
            "value": 0.8129733398896687,
            "unit": "iter/sec",
            "range": "stddev: 0.032984870986104205",
            "extra": "mean: 1.2300526363333308 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-small]",
            "value": 1.6077319370149041,
            "unit": "iter/sec",
            "range": "stddev: 0.010923140655240561",
            "extra": "mean: 621.9942373333159 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-medium]",
            "value": 1.212045034968379,
            "unit": "iter/sec",
            "range": "stddev: 0.05503413576509941",
            "extra": "mean: 825.051851333304 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-large]",
            "value": 0.8603137294663852,
            "unit": "iter/sec",
            "range": "stddev: 0.06496027060088946",
            "extra": "mean: 1.1623666643333195 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-small]",
            "value": 1.6903338669135697,
            "unit": "iter/sec",
            "range": "stddev: 0.044570303083113334",
            "extra": "mean: 591.5991033333133 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-medium]",
            "value": 1.5324625746127374,
            "unit": "iter/sec",
            "range": "stddev: 0.004343547505851008",
            "extra": "mean: 652.5444840000129 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-large]",
            "value": 1.0774939391244045,
            "unit": "iter/sec",
            "range": "stddev: 0.007495311284919031",
            "extra": "mean: 928.0794663333533 msec\nrounds: 3"
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
        "date": 1678111740264,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-small]",
            "value": 386.1577879329676,
            "unit": "iter/sec",
            "range": "stddev: 0.00006699670939652065",
            "extra": "mean: 2.5896150000050966 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-medium]",
            "value": 403.31047996705524,
            "unit": "iter/sec",
            "range": "stddev: 0.000009332916647232165",
            "extra": "mean: 2.47947933334558 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-large]",
            "value": 407.8228580628677,
            "unit": "iter/sec",
            "range": "stddev: 0.000015350244310151384",
            "extra": "mean: 2.45204500000303 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-small]",
            "value": 3.27539759123335,
            "unit": "iter/sec",
            "range": "stddev: 0.020605420432074605",
            "extra": "mean: 305.3064466666626 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-medium]",
            "value": 2.5183304319424384,
            "unit": "iter/sec",
            "range": "stddev: 0.011303549641925953",
            "extra": "mean: 397.0884786666697 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-large]",
            "value": 1.6329175014387876,
            "unit": "iter/sec",
            "range": "stddev: 0.013672072131425158",
            "extra": "mean: 612.4008096666765 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-small]",
            "value": 1.3671101582349392,
            "unit": "iter/sec",
            "range": "stddev: 0.004793515076929584",
            "extra": "mean: 731.4699506666594 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-medium]",
            "value": 1.2224592078473278,
            "unit": "iter/sec",
            "range": "stddev: 0.0089660056678136",
            "extra": "mean: 818.0232056666625 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-large]",
            "value": 0.970966698179701,
            "unit": "iter/sec",
            "range": "stddev: 0.013890193439633903",
            "extra": "mean: 1.0299014393333248 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-small]",
            "value": 1.7197320289705702,
            "unit": "iter/sec",
            "range": "stddev: 0.025093743138612592",
            "extra": "mean: 581.4859426666601 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-medium]",
            "value": 1.471075767831468,
            "unit": "iter/sec",
            "range": "stddev: 0.011970015633670523",
            "extra": "mean: 679.7746396666658 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-large]",
            "value": 0.9959303123697804,
            "unit": "iter/sec",
            "range": "stddev: 0.021411916610012776",
            "extra": "mean: 1.0040863176666808 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-small]",
            "value": 2.0609458425435014,
            "unit": "iter/sec",
            "range": "stddev: 0.022938787407078717",
            "extra": "mean: 485.2141086666582 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-medium]",
            "value": 1.7643400412561427,
            "unit": "iter/sec",
            "range": "stddev: 0.0059970743662213985",
            "extra": "mean: 566.7841666666694 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-large]",
            "value": 1.2422562867391818,
            "unit": "iter/sec",
            "range": "stddev: 0.007569640543702443",
            "extra": "mean: 804.9868700000028 msec\nrounds: 3"
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
        "date": 1678154722664,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-small]",
            "value": 390.17533308883617,
            "unit": "iter/sec",
            "range": "stddev: 0.000022626420411654714",
            "extra": "mean: 2.5629503333372363 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-medium]",
            "value": 395.6192291515275,
            "unit": "iter/sec",
            "range": "stddev: 0.00006103229692689293",
            "extra": "mean: 2.5276830000014647 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-large]",
            "value": 399.85354697475236,
            "unit": "iter/sec",
            "range": "stddev: 0.00001792828304998021",
            "extra": "mean: 2.50091566666318 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-small]",
            "value": 3.2861575512813395,
            "unit": "iter/sec",
            "range": "stddev: 0.017816790283444996",
            "extra": "mean: 304.30677299999803 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-medium]",
            "value": 2.4940012805582286,
            "unit": "iter/sec",
            "range": "stddev: 0.010083198931666522",
            "extra": "mean: 400.9621036666715 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-large]",
            "value": 1.6431577926904335,
            "unit": "iter/sec",
            "range": "stddev: 0.014318027615783862",
            "extra": "mean: 608.5842786666547 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-small]",
            "value": 1.3651944526186204,
            "unit": "iter/sec",
            "range": "stddev: 0.03508712732970998",
            "extra": "mean: 732.496384000001 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-medium]",
            "value": 1.1904234745566793,
            "unit": "iter/sec",
            "range": "stddev: 0.04571248258284184",
            "extra": "mean: 840.0371979999856 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-large]",
            "value": 0.9815662326123598,
            "unit": "iter/sec",
            "range": "stddev: 0.016876983940398698",
            "extra": "mean: 1.0187799526666481 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-small]",
            "value": 1.9229651334711706,
            "unit": "iter/sec",
            "range": "stddev: 0.004293701248366854",
            "extra": "mean: 520.030229666664 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-medium]",
            "value": 1.478965428246966,
            "unit": "iter/sec",
            "range": "stddev: 0.02354662094118462",
            "extra": "mean: 676.1483269999834 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-large]",
            "value": 1.0076262159928477,
            "unit": "iter/sec",
            "range": "stddev: 0.013049300722344845",
            "extra": "mean: 992.4315030000154 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-small]",
            "value": 1.9140336050708062,
            "unit": "iter/sec",
            "range": "stddev: 0.03269752475879598",
            "extra": "mean: 522.4568666666679 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-medium]",
            "value": 1.7611921331081855,
            "unit": "iter/sec",
            "range": "stddev: 0.013353099841404096",
            "extra": "mean: 567.7972216666566 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-large]",
            "value": 1.242811959345301,
            "unit": "iter/sec",
            "range": "stddev: 0.015518075944640018",
            "extra": "mean: 804.6269530000245 msec\nrounds: 3"
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
        "date": 1678156832750,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-small]",
            "value": 393.8091107475256,
            "unit": "iter/sec",
            "range": "stddev: 0.000018401945555122128",
            "extra": "mean: 2.539301333333318 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-medium]",
            "value": 395.06417356455313,
            "unit": "iter/sec",
            "range": "stddev: 0.00005623495887510565",
            "extra": "mean: 2.531234333342051 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[theine-tlfu-large]",
            "value": 393.7781477540521,
            "unit": "iter/sec",
            "range": "stddev: 0.00007870926734974921",
            "extra": "mean: 2.53950100000111 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-small]",
            "value": 3.354165072436698,
            "unit": "iter/sec",
            "range": "stddev: 0.0017789686214094503",
            "extra": "mean: 298.13678766666385 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-medium]",
            "value": 2.5173580607083004,
            "unit": "iter/sec",
            "range": "stddev: 0.005742283749159371",
            "extra": "mean: 397.2418606666679 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[redis-large]",
            "value": 1.5588704923874428,
            "unit": "iter/sec",
            "range": "stddev: 0.02502847923425562",
            "extra": "mean: 641.49010766666 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-small]",
            "value": 1.3655243829588102,
            "unit": "iter/sec",
            "range": "stddev: 0.026336009739520983",
            "extra": "mean: 732.3194023333409 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-medium]",
            "value": 1.2372648269498676,
            "unit": "iter/sec",
            "range": "stddev: 0.03276870331438125",
            "extra": "mean: 808.2344040000086 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mongo-large]",
            "value": 0.9527979581699838,
            "unit": "iter/sec",
            "range": "stddev: 0.04743318613039122",
            "extra": "mean: 1.049540452333332 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-small]",
            "value": 1.8747645541782918,
            "unit": "iter/sec",
            "range": "stddev: 0.01658030068331562",
            "extra": "mean: 533.4003129999966 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-medium]",
            "value": 1.5163689817683343,
            "unit": "iter/sec",
            "range": "stddev: 0.001575368249562529",
            "extra": "mean: 659.4700973333261 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[postgres-large]",
            "value": 1.0152254848187512,
            "unit": "iter/sec",
            "range": "stddev: 0.014024562297068362",
            "extra": "mean: 985.0028539999963 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-small]",
            "value": 2.0747887710804833,
            "unit": "iter/sec",
            "range": "stddev: 0.005279956734068642",
            "extra": "mean: 481.97677466667227 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-medium]",
            "value": 1.7486888949992874,
            "unit": "iter/sec",
            "range": "stddev: 0.007981427048509387",
            "extra": "mean: 571.8570083333248 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only[mysql-large]",
            "value": 1.1796584236040824,
            "unit": "iter/sec",
            "range": "stddev: 0.08617802887041953",
            "extra": "mean: 847.7030129999908 msec\nrounds: 3"
          }
        ]
      }
    ]
  }
}