window.BENCHMARK_DATA = {
  "lastUpdate": 1675154878015,
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
        "date": 1674818396627,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 2.916177768248717,
            "unit": "iter/sec",
            "range": "stddev: 0.039317487258376985",
            "extra": "mean: 342.91462300000336 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 2.822572550372323,
            "unit": "iter/sec",
            "range": "stddev: 0.004828113802418803",
            "extra": "mean: 354.2867303333234 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.0624864691864206,
            "unit": "iter/sec",
            "range": "stddev: 0.03119774232801126",
            "extra": "mean: 484.8516656666675 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 1.939306197189193,
            "unit": "iter/sec",
            "range": "stddev: 0.015737907471925775",
            "extra": "mean: 515.6483290000248 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.8458237106441433,
            "unit": "iter/sec",
            "range": "stddev: 0.014793453806496626",
            "extra": "mean: 541.7635466666676 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.42905499968774,
            "unit": "iter/sec",
            "range": "stddev: 0.036118165893041815",
            "extra": "mean: 699.7631303333378 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 2.5469728935532836,
            "unit": "iter/sec",
            "range": "stddev: 0.007729511024005203",
            "extra": "mean: 392.6229456666495 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.58103003116732,
            "unit": "iter/sec",
            "range": "stddev: 0.016075823661777934",
            "extra": "mean: 387.44221799997075 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.6707638706965389,
            "unit": "iter/sec",
            "range": "stddev: 0.05823059048849297",
            "extra": "mean: 598.5286236666715 msec\nrounds: 3"
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
        "date": 1674821312265,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 5.078077523942201,
            "unit": "iter/sec",
            "range": "stddev: 0.009570410439479031",
            "extra": "mean: 196.92491800000766 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 4.153485189145241,
            "unit": "iter/sec",
            "range": "stddev: 0.0022217523707722484",
            "extra": "mean: 240.76166266667087 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.8345157895460216,
            "unit": "iter/sec",
            "range": "stddev: 0.037810458950086",
            "extra": "mean: 352.79394233332556 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.838805578987241,
            "unit": "iter/sec",
            "range": "stddev: 0.008449687324289478",
            "extra": "mean: 352.26082666666986 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.617011492926107,
            "unit": "iter/sec",
            "range": "stddev: 0.0007445762994368861",
            "extra": "mean: 382.11524966666843 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 2.1008959480860265,
            "unit": "iter/sec",
            "range": "stddev: 0.02102683228369886",
            "extra": "mean: 475.9873999999987 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 3.482047779206574,
            "unit": "iter/sec",
            "range": "stddev: 0.07475288934020047",
            "extra": "mean: 287.1873286666566 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 3.939703023820158,
            "unit": "iter/sec",
            "range": "stddev: 0.02943310948788205",
            "extra": "mean: 253.82623866667586 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.5937216527567046,
            "unit": "iter/sec",
            "range": "stddev: 0.028862547596998262",
            "extra": "mean: 385.54638233334043 msec\nrounds: 3"
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
          "id": "f74a28ec291cf92bedb1031d425a86a0648f296e",
          "message": "add readme zh",
          "timestamp": "2023-01-28T17:48:31+08:00",
          "tree_id": "ab35d7acdac6e83053c751158e738535a456298a",
          "url": "https://github.com/Yiling-J/cacheme/commit/f74a28ec291cf92bedb1031d425a86a0648f296e"
        },
        "date": 1674899456313,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 4.829711278747961,
            "unit": "iter/sec",
            "range": "stddev: 0.009971046232215484",
            "extra": "mean: 207.05171433337455 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.6564600460325254,
            "unit": "iter/sec",
            "range": "stddev: 0.01888376994861748",
            "extra": "mean: 273.4885620000303 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 3.026144685678556,
            "unit": "iter/sec",
            "range": "stddev: 0.010083659594556087",
            "extra": "mean: 330.4534660000134 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.856425268707195,
            "unit": "iter/sec",
            "range": "stddev: 0.004412767297370643",
            "extra": "mean: 350.0879266666743 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.7268616627930164,
            "unit": "iter/sec",
            "range": "stddev: 0.0033438235956777707",
            "extra": "mean: 366.7219403333206 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 2.0479808447927943,
            "unit": "iter/sec",
            "range": "stddev: 0.03001001007384699",
            "extra": "mean: 488.2858170000001 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 4.161216328636984,
            "unit": "iter/sec",
            "range": "stddev: 0.010205617668250998",
            "extra": "mean: 240.31435066668413 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 3.4936668955122387,
            "unit": "iter/sec",
            "range": "stddev: 0.011354905761306157",
            "extra": "mean: 286.23221100000745 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.942691177596938,
            "unit": "iter/sec",
            "range": "stddev: 0.008641523264501353",
            "extra": "mean: 339.824990000011 msec\nrounds: 3"
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
        "date": 1674899530350,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 2.732996942161789,
            "unit": "iter/sec",
            "range": "stddev: 0.031254112804653754",
            "extra": "mean: 365.8986896666647 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 2.5433234786811183,
            "unit": "iter/sec",
            "range": "stddev: 0.007268719508968383",
            "extra": "mean: 393.1863203333326 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 1.8923084211958368,
            "unit": "iter/sec",
            "range": "stddev: 0.04174645739873448",
            "extra": "mean: 528.4550809999852 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 1.7772094362051358,
            "unit": "iter/sec",
            "range": "stddev: 0.030906366853960705",
            "extra": "mean: 562.6798843333253 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.7696453925633442,
            "unit": "iter/sec",
            "range": "stddev: 0.006695556085255939",
            "extra": "mean: 565.0849623333253 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.3215176720202142,
            "unit": "iter/sec",
            "range": "stddev: 0.029419988562133417",
            "extra": "mean: 756.7057339999792 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 2.197168391179561,
            "unit": "iter/sec",
            "range": "stddev: 0.042269294410313046",
            "extra": "mean: 455.13125166667123 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.078400008433344,
            "unit": "iter/sec",
            "range": "stddev: 0.034567646319309524",
            "extra": "mean: 481.13933599999353 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.3128018533506656,
            "unit": "iter/sec",
            "range": "stddev: 0.021396018079157003",
            "extra": "mean: 761.729576666653 msec\nrounds: 3"
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
        "date": 1674994614673,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 4.532406913389186,
            "unit": "iter/sec",
            "range": "stddev: 0.020261718689102207",
            "extra": "mean: 220.63332333332633 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.8810312810860417,
            "unit": "iter/sec",
            "range": "stddev: 0.00350711279594387",
            "extra": "mean: 257.6634733333473 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.3872179831588163,
            "unit": "iter/sec",
            "range": "stddev: 0.0748751079206456",
            "extra": "mean: 418.8976486666623 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.8437849195756195,
            "unit": "iter/sec",
            "range": "stddev: 0.015139107055177103",
            "extra": "mean: 351.6440336666638 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.5803371789036236,
            "unit": "iter/sec",
            "range": "stddev: 0.01890256186055257",
            "extra": "mean: 387.5462509999939 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.8831150914674257,
            "unit": "iter/sec",
            "range": "stddev: 0.018526168363299886",
            "extra": "mean: 531.0349879999876 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 3.7250819952630247,
            "unit": "iter/sec",
            "range": "stddev: 0.03171623312197518",
            "extra": "mean: 268.45046666667827 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 3.4936268205627714,
            "unit": "iter/sec",
            "range": "stddev: 0.009745239428188094",
            "extra": "mean: 286.23549433334006 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.5713466762407666,
            "unit": "iter/sec",
            "range": "stddev: 0.0263270875003444",
            "extra": "mean: 388.90127466669355 msec\nrounds: 3"
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
        "date": 1675063401077,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 4.801206792929752,
            "unit": "iter/sec",
            "range": "stddev: 0.012522547187404231",
            "extra": "mean: 208.28096833333612 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.3670822156794604,
            "unit": "iter/sec",
            "range": "stddev: 0.02618868204306572",
            "extra": "mean: 296.99304500000306 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.696435016839112,
            "unit": "iter/sec",
            "range": "stddev: 0.014785727258454076",
            "extra": "mean: 370.86004066667516 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.5279953725685247,
            "unit": "iter/sec",
            "range": "stddev: 0.02255255738597844",
            "extra": "mean: 395.57034433333155 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.4175876036177075,
            "unit": "iter/sec",
            "range": "stddev: 0.00852965734586785",
            "extra": "mean: 413.6354763333448 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.75946141534809,
            "unit": "iter/sec",
            "range": "stddev: 0.04955159687431217",
            "extra": "mean: 568.3557430000027 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 4.016170639850667,
            "unit": "iter/sec",
            "range": "stddev: 0.015489381043838976",
            "extra": "mean: 248.9934043333335 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 3.3770100200029036,
            "unit": "iter/sec",
            "range": "stddev: 0.006228946381067465",
            "extra": "mean: 296.119938666673 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.2557328497329125,
            "unit": "iter/sec",
            "range": "stddev: 0.02561351200867215",
            "extra": "mean: 443.31490766666093 msec\nrounds: 3"
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
        "date": 1675154877415,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 3.907972443943032,
            "unit": "iter/sec",
            "range": "stddev: 0.015288713488425087",
            "extra": "mean: 255.8871676666759 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.2098578414949297,
            "unit": "iter/sec",
            "range": "stddev: 0.0028256078105412218",
            "extra": "mean: 311.54027666666667 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.255424440690927,
            "unit": "iter/sec",
            "range": "stddev: 0.02455400858721513",
            "extra": "mean: 443.3755269999911 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.1065789611147943,
            "unit": "iter/sec",
            "range": "stddev: 0.033040049846662894",
            "extra": "mean: 474.70330733332844 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.11756114612915,
            "unit": "iter/sec",
            "range": "stddev: 0.03613758179769571",
            "extra": "mean: 472.24138100001295 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.540205823926674,
            "unit": "iter/sec",
            "range": "stddev: 0.021368337693248626",
            "extra": "mean: 649.2638740000037 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 3.538569595307616,
            "unit": "iter/sec",
            "range": "stddev: 0.03312547265912513",
            "extra": "mean: 282.600065666666 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.634449043256687,
            "unit": "iter/sec",
            "range": "stddev: 0.002557463041087055",
            "extra": "mean: 379.5860096666767 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.0045227284603677,
            "unit": "iter/sec",
            "range": "stddev: 0.0330178142644428",
            "extra": "mean: 498.87186899999847 msec\nrounds: 3"
          }
        ]
      }
    ]
  }
}