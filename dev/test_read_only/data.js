window.BENCHMARK_DATA = {
  "lastUpdate": 1678032358022,
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
      }
    ]
  }
}