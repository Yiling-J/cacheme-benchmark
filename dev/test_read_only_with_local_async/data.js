window.BENCHMARK_DATA = {
  "lastUpdate": 1674787092327,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark: test_read_only_with_local_async": [
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
        "date": 1674701746733,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 5.0571663005763865,
            "unit": "iter/sec",
            "range": "stddev: 0.011201613074762062",
            "extra": "mean: 197.73919633333512 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 4.140204052192677,
            "unit": "iter/sec",
            "range": "stddev: 0.0014885476123292797",
            "extra": "mean: 241.53398899998516 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 3.0170231124264997,
            "unit": "iter/sec",
            "range": "stddev: 0.0260911405456012",
            "extra": "mean: 331.4525486666658 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.9797331216929144,
            "unit": "iter/sec",
            "range": "stddev: 0.009724283052397493",
            "extra": "mean: 335.6005249999896 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.7601963213922702,
            "unit": "iter/sec",
            "range": "stddev: 0.00583844877476276",
            "extra": "mean: 362.2930703333414 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 2.1808202162824735,
            "unit": "iter/sec",
            "range": "stddev: 0.012246744909229165",
            "extra": "mean: 458.54307133333805 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 4.398984439894642,
            "unit": "iter/sec",
            "range": "stddev: 0.006485245502070164",
            "extra": "mean: 227.3251960000001 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 3.8441378570521314,
            "unit": "iter/sec",
            "range": "stddev: 0.0009355736854150735",
            "extra": "mean: 260.1363523333286 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.4789489657644563,
            "unit": "iter/sec",
            "range": "stddev: 0.03169537866436809",
            "extra": "mean: 403.39676766666344 msec\nrounds: 3"
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
        "date": 1674702426291,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 4.973046716714377,
            "unit": "iter/sec",
            "range": "stddev: 0.010550232707518741",
            "extra": "mean: 201.08397466667802 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.5150784780697037,
            "unit": "iter/sec",
            "range": "stddev: 0.0005803227324584402",
            "extra": "mean: 284.48866966667197 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 3.0326438852321393,
            "unit": "iter/sec",
            "range": "stddev: 0.015013605964481256",
            "extra": "mean: 329.7452776666698 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.887952488691729,
            "unit": "iter/sec",
            "range": "stddev: 0.0071826335820281955",
            "extra": "mean: 346.2660843333367 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.677748819352426,
            "unit": "iter/sec",
            "range": "stddev: 0.0044389848082237214",
            "extra": "mean: 373.44802200000044 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 2.1577127004259413,
            "unit": "iter/sec",
            "range": "stddev: 0.0084583974401309",
            "extra": "mean: 463.4537303333275 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 4.421954840697772,
            "unit": "iter/sec",
            "range": "stddev: 0.01664792581243391",
            "extra": "mean: 226.14432666666553 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 3.689755067527849,
            "unit": "iter/sec",
            "range": "stddev: 0.009546708744912768",
            "extra": "mean: 271.0206996666595 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.879022075892134,
            "unit": "iter/sec",
            "range": "stddev: 0.0030694263019689022",
            "extra": "mean: 347.340164000002 msec\nrounds: 3"
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
        "date": 1674703527737,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 4.080143200949137,
            "unit": "iter/sec",
            "range": "stddev: 0.013939702770536107",
            "extra": "mean: 245.08943699999955 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.434207693410722,
            "unit": "iter/sec",
            "range": "stddev: 0.005590241476400101",
            "extra": "mean: 291.18797966666915 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 1.999832644671711,
            "unit": "iter/sec",
            "range": "stddev: 0.0501606872708894",
            "extra": "mean: 500.0418423333409 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.2701106090963346,
            "unit": "iter/sec",
            "range": "stddev: 0.011202314301016357",
            "extra": "mean: 440.5071699999989 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.1355382368893747,
            "unit": "iter/sec",
            "range": "stddev: 0.015574624044277192",
            "extra": "mean: 468.26602433333164 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.659032564723853,
            "unit": "iter/sec",
            "range": "stddev: 0.0348447640293677",
            "extra": "mean: 602.7609229999958 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 3.28517121578136,
            "unit": "iter/sec",
            "range": "stddev: 0.055159977126618534",
            "extra": "mean: 304.3981376666712 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.7696457311894536,
            "unit": "iter/sec",
            "range": "stddev: 0.014615248997939704",
            "extra": "mean: 361.05700766665905 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.9494729277302014,
            "unit": "iter/sec",
            "range": "stddev: 0.0864138396259492",
            "extra": "mean: 512.9591623333359 msec\nrounds: 3"
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
        "date": 1674724385586,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 4.842582165406934,
            "unit": "iter/sec",
            "range": "stddev: 0.017908335824702793",
            "extra": "mean: 206.5014006666767 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 4.132906252761275,
            "unit": "iter/sec",
            "range": "stddev: 0.002022741996477831",
            "extra": "mean: 241.96048466666298 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.962333710619006,
            "unit": "iter/sec",
            "range": "stddev: 0.006269730794206016",
            "extra": "mean: 337.57169100001266 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.875546425469947,
            "unit": "iter/sec",
            "range": "stddev: 0.004870459423905825",
            "extra": "mean: 347.7599913333241 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.684422434057626,
            "unit": "iter/sec",
            "range": "stddev: 0.015448793846800236",
            "extra": "mean: 372.519610666662 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 2.0277866920970227,
            "unit": "iter/sec",
            "range": "stddev: 0.06092132333240599",
            "extra": "mean: 493.1485170000087 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 3.9678447606448497,
            "unit": "iter/sec",
            "range": "stddev: 0.0038513170740095207",
            "extra": "mean: 252.0259890000034 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 3.8226444163650743,
            "unit": "iter/sec",
            "range": "stddev: 0.00517261644388918",
            "extra": "mean: 261.5990113333358 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.4237799552753856,
            "unit": "iter/sec",
            "range": "stddev: 0.02784906725353633",
            "extra": "mean: 412.57870699998495 msec\nrounds: 3"
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
        "date": 1674739047066,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 2.95049945007263,
            "unit": "iter/sec",
            "range": "stddev: 0.049470593773571304",
            "extra": "mean: 338.9256690000006 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 2.5869763547558726,
            "unit": "iter/sec",
            "range": "stddev: 0.007578600452654317",
            "extra": "mean: 386.5516583333317 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 1.8620867576920201,
            "unit": "iter/sec",
            "range": "stddev: 0.02143027452135094",
            "extra": "mean: 537.0319056666611 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 1.7613224120454931,
            "unit": "iter/sec",
            "range": "stddev: 0.034593508212728226",
            "extra": "mean: 567.7552236666656 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.5713711858507478,
            "unit": "iter/sec",
            "range": "stddev: 0.05805558374849288",
            "extra": "mean: 636.3868760000173 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.2122355702616883,
            "unit": "iter/sec",
            "range": "stddev: 0.029379009624044248",
            "extra": "mean: 824.9221723333259 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 2.254310624018732,
            "unit": "iter/sec",
            "range": "stddev: 0.04856321055051673",
            "extra": "mean: 443.5945913333417 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.075767025582135,
            "unit": "iter/sec",
            "range": "stddev: 0.013930242267472281",
            "extra": "mean: 481.7496316666639 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.4248292664848066,
            "unit": "iter/sec",
            "range": "stddev: 0.020275106766505232",
            "extra": "mean: 701.8384753333274 msec\nrounds: 3"
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
        "date": 1674783532273,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 3.460736881668797,
            "unit": "iter/sec",
            "range": "stddev: 0.015961661192484947",
            "extra": "mean: 288.9558016666645 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 2.5728154851053797,
            "unit": "iter/sec",
            "range": "stddev: 0.053908345907986585",
            "extra": "mean: 388.67925266667197 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.1349931168356413,
            "unit": "iter/sec",
            "range": "stddev: 0.029209579598841306",
            "extra": "mean: 468.38558499998345 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.155029104357737,
            "unit": "iter/sec",
            "range": "stddev: 0.025075310569141165",
            "extra": "mean: 464.0308559999842 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.934980434000344,
            "unit": "iter/sec",
            "range": "stddev: 0.010908225514382875",
            "extra": "mean: 516.8010913333205 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.5282372892979845,
            "unit": "iter/sec",
            "range": "stddev: 0.014353135272822032",
            "extra": "mean: 654.3486453333193 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 2.9152877323301016,
            "unit": "iter/sec",
            "range": "stddev: 0.018725483926512125",
            "extra": "mean: 343.01931466666247 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.224016603298069,
            "unit": "iter/sec",
            "range": "stddev: 0.12174989785931938",
            "extra": "mean: 449.6369310000053 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.9309832510651967,
            "unit": "iter/sec",
            "range": "stddev: 0.07131429164704677",
            "extra": "mean: 517.8708823333219 msec\nrounds: 3"
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
        "date": 1674783814708,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 2.8568256977954314,
            "unit": "iter/sec",
            "range": "stddev: 0.01612644046657428",
            "extra": "mean: 350.0388563333369 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.0041944472747604,
            "unit": "iter/sec",
            "range": "stddev: 0.022021450181817098",
            "extra": "mean: 332.8679343333268 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.1595374082559577,
            "unit": "iter/sec",
            "range": "stddev: 0.032413201540309376",
            "extra": "mean: 463.06213366667254 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.0528156905845543,
            "unit": "iter/sec",
            "range": "stddev: 0.03865699196425399",
            "extra": "mean: 487.1357933333229 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.9743675508259826,
            "unit": "iter/sec",
            "range": "stddev: 0.03602306209305298",
            "extra": "mean: 506.4913063333355 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.3804301288036367,
            "unit": "iter/sec",
            "range": "stddev: 0.031031451017794434",
            "extra": "mean: 724.4118909999884 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 2.9844719743701,
            "unit": "iter/sec",
            "range": "stddev: 0.02109556280118115",
            "extra": "mean: 335.06764633333813 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.581315972590578,
            "unit": "iter/sec",
            "range": "stddev: 0.023048586336233995",
            "extra": "mean: 387.39929966667813 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.830699283335888,
            "unit": "iter/sec",
            "range": "stddev: 0.018935566849138902",
            "extra": "mean: 546.2393573333392 msec\nrounds: 3"
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
        "date": 1674784544736,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 4.569083950785965,
            "unit": "iter/sec",
            "range": "stddev: 0.023125438060861477",
            "extra": "mean: 218.8622513333295 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.831962149768179,
            "unit": "iter/sec",
            "range": "stddev: 0.002497983083282152",
            "extra": "mean: 260.96291166667623 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.7835542998685034,
            "unit": "iter/sec",
            "range": "stddev: 0.003205674232485921",
            "extra": "mean: 359.2529163333514 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.911850247563925,
            "unit": "iter/sec",
            "range": "stddev: 0.0040255036125037506",
            "extra": "mean: 343.42425433334256 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.4806463814322357,
            "unit": "iter/sec",
            "range": "stddev: 0.031234977350546846",
            "extra": "mean: 403.1207380000031 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.870525073890125,
            "unit": "iter/sec",
            "range": "stddev: 0.03677015635399232",
            "extra": "mean: 534.6092463333321 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 3.5478889407398313,
            "unit": "iter/sec",
            "range": "stddev: 0.0030372010140892886",
            "extra": "mean: 281.8577516666778 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 3.066693944704733,
            "unit": "iter/sec",
            "range": "stddev: 0.008670451752810917",
            "extra": "mean: 326.08405600001333 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.4280723566825313,
            "unit": "iter/sec",
            "range": "stddev: 0.023044855783591747",
            "extra": "mean: 411.8493409999928 msec\nrounds: 3"
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
        "date": 1674787091704,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 3.319380608314062,
            "unit": "iter/sec",
            "range": "stddev: 0.03963361237439367",
            "extra": "mean: 301.26102366667357 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.052490995349935,
            "unit": "iter/sec",
            "range": "stddev: 0.006301121611132443",
            "extra": "mean: 327.6012940000044 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.215206626735667,
            "unit": "iter/sec",
            "range": "stddev: 0.02310924453265727",
            "extra": "mean: 451.42515733333727 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.0646761212733007,
            "unit": "iter/sec",
            "range": "stddev: 0.04508155613360018",
            "extra": "mean: 484.3374656666697 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.8484912343125963,
            "unit": "iter/sec",
            "range": "stddev: 0.013249555128798478",
            "extra": "mean: 540.9817376666505 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.361859038546766,
            "unit": "iter/sec",
            "range": "stddev: 0.029744405696923222",
            "extra": "mean: 734.2903866666669 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 2.909469412370316,
            "unit": "iter/sec",
            "range": "stddev: 0.031047224995682323",
            "extra": "mean: 343.705280333334 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.3076946153869677,
            "unit": "iter/sec",
            "range": "stddev: 0.03329789178501943",
            "extra": "mean: 433.33289999999164 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.675259824450399,
            "unit": "iter/sec",
            "range": "stddev: 0.059734096798730534",
            "extra": "mean: 596.9223313333316 msec\nrounds: 3"
          }
        ]
      }
    ]
  }
}