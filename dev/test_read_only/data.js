window.BENCHMARK_DATA = {
  "lastUpdate": 1678081870451,
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
      }
    ]
  }
}