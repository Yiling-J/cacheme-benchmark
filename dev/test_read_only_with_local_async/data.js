window.BENCHMARK_DATA = {
  "lastUpdate": 1675861846918,
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
        "date": 1675160244438,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 4.6127970420457824,
            "unit": "iter/sec",
            "range": "stddev: 0.013794394964330341",
            "extra": "mean: 216.7882069999981 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.689516487941838,
            "unit": "iter/sec",
            "range": "stddev: 0.0019365541542197089",
            "extra": "mean: 271.0382250000028 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.427909743161023,
            "unit": "iter/sec",
            "range": "stddev: 0.030001774325716962",
            "extra": "mean: 411.8769253333312 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.585700808031951,
            "unit": "iter/sec",
            "range": "stddev: 0.0008596474276112577",
            "extra": "mean: 386.7423473333436 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.41022310204437,
            "unit": "iter/sec",
            "range": "stddev: 0.03077195225016877",
            "extra": "mean: 414.8993506666632 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.8758278614548844,
            "unit": "iter/sec",
            "range": "stddev: 0.012006268348351747",
            "extra": "mean: 533.0979566666656 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 3.9227039246273177,
            "unit": "iter/sec",
            "range": "stddev: 0.0184203489475657",
            "extra": "mean: 254.92619866665223 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 3.293175961455582,
            "unit": "iter/sec",
            "range": "stddev: 0.018581989566118836",
            "extra": "mean: 303.65823499999084 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.980220908018687,
            "unit": "iter/sec",
            "range": "stddev: 0.029941482871463927",
            "extra": "mean: 504.99416300000155 msec\nrounds: 3"
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
        "date": 1675160835088,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 3.6584845634999614,
            "unit": "iter/sec",
            "range": "stddev: 0.020312363179569377",
            "extra": "mean: 273.33722000000193 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.008939622806943,
            "unit": "iter/sec",
            "range": "stddev: 0.003184732872245529",
            "extra": "mean: 332.3429930000164 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.017318716144939,
            "unit": "iter/sec",
            "range": "stddev: 0.05865773832462702",
            "extra": "mean: 495.7074913333391 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.1218068036484596,
            "unit": "iter/sec",
            "range": "stddev: 0.014559848808222283",
            "extra": "mean: 471.29644333333925 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.8330012769035229,
            "unit": "iter/sec",
            "range": "stddev: 0.010668070305201331",
            "extra": "mean: 545.5533569999981 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.4875113080051832,
            "unit": "iter/sec",
            "range": "stddev: 0.06906921145556769",
            "extra": "mean: 672.2637969999994 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 2.8266087552573023,
            "unit": "iter/sec",
            "range": "stddev: 0.03068677823830545",
            "extra": "mean: 353.78083299999236 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.584509740354267,
            "unit": "iter/sec",
            "range": "stddev: 0.007147851637990111",
            "extra": "mean: 386.92057700000265 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.01714579438758,
            "unit": "iter/sec",
            "range": "stddev: 0.015500460951870453",
            "extra": "mean: 495.7499863333415 msec\nrounds: 3"
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
        "date": 1675161236754,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 4.470117121762079,
            "unit": "iter/sec",
            "range": "stddev: 0.01565658943612277",
            "extra": "mean: 223.70778500000674 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.702823464852674,
            "unit": "iter/sec",
            "range": "stddev: 0.008541156801478557",
            "extra": "mean: 270.0641846666561 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.5598753456753873,
            "unit": "iter/sec",
            "range": "stddev: 0.04381500243499727",
            "extra": "mean: 390.6440216666738 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.583957276616085,
            "unit": "iter/sec",
            "range": "stddev: 0.0025983190307746246",
            "extra": "mean: 387.0033026666704 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.293063271342972,
            "unit": "iter/sec",
            "range": "stddev: 0.015154348748144775",
            "extra": "mean: 436.09786633333175 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.9311395433201086,
            "unit": "iter/sec",
            "range": "stddev: 0.04473776609435289",
            "extra": "mean: 517.8289696666619 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 4.202264304393935,
            "unit": "iter/sec",
            "range": "stddev: 0.004249776593848416",
            "extra": "mean: 237.96694533335008 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 3.434156253633172,
            "unit": "iter/sec",
            "range": "stddev: 0.005673319705697816",
            "extra": "mean: 291.1923413333473 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.269976044564402,
            "unit": "iter/sec",
            "range": "stddev: 0.016631219169976633",
            "extra": "mean: 440.533283333347 msec\nrounds: 3"
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
          "id": "35ac2b13d19c335ac5b5e61e263be8f4b258ea72",
          "message": "Update README_ZH.md",
          "timestamp": "2023-01-31T18:39:34+08:00",
          "tree_id": "50948a74b0ffe89cc96d844e042686d57a65dc2c",
          "url": "https://github.com/Yiling-J/cacheme/commit/35ac2b13d19c335ac5b5e61e263be8f4b258ea72"
        },
        "date": 1675161698401,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 4.710539328819451,
            "unit": "iter/sec",
            "range": "stddev: 0.02049989400352065",
            "extra": "mean: 212.2899163333424 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 4.119752063103801,
            "unit": "iter/sec",
            "range": "stddev: 0.0016399338256652331",
            "extra": "mean: 242.7330540000033 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.99916330241923,
            "unit": "iter/sec",
            "range": "stddev: 0.01202573338362521",
            "extra": "mean: 333.42632566668345 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.690094042890092,
            "unit": "iter/sec",
            "range": "stddev: 0.06001439855422326",
            "extra": "mean: 371.734215999993 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.622502750603119,
            "unit": "iter/sec",
            "range": "stddev: 0.014670443721817108",
            "extra": "mean: 381.31513866668837 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 2.050120146915372,
            "unit": "iter/sec",
            "range": "stddev: 0.030040601450053588",
            "extra": "mean: 487.77629033332914 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 4.317757461781913,
            "unit": "iter/sec",
            "range": "stddev: 0.010294958978900797",
            "extra": "mean: 231.6017073333493 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 3.619034318234788,
            "unit": "iter/sec",
            "range": "stddev: 0.04788381474583942",
            "extra": "mean: 276.31680500000283 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.6942589654953233,
            "unit": "iter/sec",
            "range": "stddev: 0.025280614762347945",
            "extra": "mean: 371.1595703333425 msec\nrounds: 3"
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
          "id": "70bbffdfbd814525b283ea0bd9c04f5b19b0adba",
          "message": "Merge branch 'master' of github.com:Yiling-J/cacheme",
          "timestamp": "2023-02-04T01:51:41+08:00",
          "tree_id": "5308b2cc382140719a052bdf08c92e655b3c4c3c",
          "url": "https://github.com/Yiling-J/cacheme/commit/70bbffdfbd814525b283ea0bd9c04f5b19b0adba"
        },
        "date": 1675446863174,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 4.636068886061648,
            "unit": "iter/sec",
            "range": "stddev: 0.016614063065903382",
            "extra": "mean: 215.69998733334236 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 4.1483831174846415,
            "unit": "iter/sec",
            "range": "stddev: 0.002854242835252764",
            "extra": "mean: 241.0577739999932 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.592999179665915,
            "unit": "iter/sec",
            "range": "stddev: 0.053497416654094805",
            "extra": "mean: 385.6538049999851 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.7509756511668564,
            "unit": "iter/sec",
            "range": "stddev: 0.0076449180190787565",
            "extra": "mean: 363.5073976666566 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.6064723335398345,
            "unit": "iter/sec",
            "range": "stddev: 0.003906754333943802",
            "extra": "mean: 383.66031633334313 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 2.15449020035271,
            "unit": "iter/sec",
            "range": "stddev: 0.013793326218387912",
            "extra": "mean: 464.1469243333252 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 3.8958381038140857,
            "unit": "iter/sec",
            "range": "stddev: 0.055754158170106566",
            "extra": "mean: 256.6841776666706 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 3.883234162134449,
            "unit": "iter/sec",
            "range": "stddev: 0.0034001483285532558",
            "extra": "mean: 257.5173059999922 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.5882095281365527,
            "unit": "iter/sec",
            "range": "stddev: 0.013981121207277604",
            "extra": "mean: 386.36748266666626 msec\nrounds: 3"
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
          "id": "5b219cd8b013f8713045c527d6ef61a124d72102",
          "message": "fix local cache set and release 0.2.2",
          "timestamp": "2023-02-04T02:00:23+08:00",
          "tree_id": "b5facaf4d8e8011cda323dab88df3db331dd0058",
          "url": "https://github.com/Yiling-J/cacheme/commit/5b219cd8b013f8713045c527d6ef61a124d72102"
        },
        "date": 1675447388112,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 4.6828567938328804,
            "unit": "iter/sec",
            "range": "stddev: 0.01496837699163457",
            "extra": "mean: 213.544860333324 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.8341060036753993,
            "unit": "iter/sec",
            "range": "stddev: 0.0050624804247365205",
            "extra": "mean: 260.81699333335945 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.786911586327977,
            "unit": "iter/sec",
            "range": "stddev: 0.018549896580550788",
            "extra": "mean: 358.8201379999987 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.5637546823133803,
            "unit": "iter/sec",
            "range": "stddev: 0.006668000551524013",
            "extra": "mean: 390.0529199999975 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.356235783617057,
            "unit": "iter/sec",
            "range": "stddev: 0.01896387874769834",
            "extra": "mean: 424.4057436666632 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.8021486899888586,
            "unit": "iter/sec",
            "range": "stddev: 0.04120467684330251",
            "extra": "mean: 554.8931703333437 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 3.819479288351594,
            "unit": "iter/sec",
            "range": "stddev: 0.027177146173691036",
            "extra": "mean: 261.8157933333312 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.997464486755049,
            "unit": "iter/sec",
            "range": "stddev: 0.02711040582747557",
            "extra": "mean: 333.61529533334533 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.4082589081454517,
            "unit": "iter/sec",
            "range": "stddev: 0.015937686168196897",
            "extra": "mean: 415.2377456666727 msec\nrounds: 3"
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
          "id": "aaf0d9173500429f677853b4dcb18f4117a287c5",
          "message": "fix ci",
          "timestamp": "2023-02-05T22:17:07+08:00",
          "tree_id": "2c03f66bd183613e9f04570aa2f6f0bef2fd0707",
          "url": "https://github.com/Yiling-J/cacheme/commit/aaf0d9173500429f677853b4dcb18f4117a287c5"
        },
        "date": 1675606824610,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 2.6459768050127135,
            "unit": "iter/sec",
            "range": "stddev: 0.013952398169090682",
            "extra": "mean: 377.93226233334093 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 2.0751145654150154,
            "unit": "iter/sec",
            "range": "stddev: 0.019129166007688696",
            "extra": "mean: 481.90110400001157 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 1.1407065312448064,
            "unit": "iter/sec",
            "range": "stddev: 0.14131748800966024",
            "extra": "mean: 876.6496663333214 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 1.141168645384504,
            "unit": "iter/sec",
            "range": "stddev: 0.05730341042754364",
            "extra": "mean: 876.2946686666643 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.0509552500101766,
            "unit": "iter/sec",
            "range": "stddev: 0.04053034194671396",
            "extra": "mean: 951.5152999999922 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 0.7529226348501471,
            "unit": "iter/sec",
            "range": "stddev: 0.05285602026311157",
            "extra": "mean: 1.3281577066666728 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 1.7151369161555694,
            "unit": "iter/sec",
            "range": "stddev: 0.03904202562178729",
            "extra": "mean: 583.0438319999965 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 1.279562789977791,
            "unit": "iter/sec",
            "range": "stddev: 0.02739838845672901",
            "extra": "mean: 781.5169430000045 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 0.7561233082836416,
            "unit": "iter/sec",
            "range": "stddev: 0.03522069394304583",
            "extra": "mean: 1.3225356089999991 sec\nrounds: 3"
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
          "id": "3723e6650fcdaaf7f3beba0b80b9b451434b6ed5",
          "message": "fix ci",
          "timestamp": "2023-02-05T23:39:51+08:00",
          "tree_id": "a37273b955ada82704020d9621c6d1d2cf33caeb",
          "url": "https://github.com/Yiling-J/cacheme/commit/3723e6650fcdaaf7f3beba0b80b9b451434b6ed5"
        },
        "date": 1675611765735,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 3.8278480706429963,
            "unit": "iter/sec",
            "range": "stddev: 0.014600418739629384",
            "extra": "mean: 261.2433883333362 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 2.8742963869751574,
            "unit": "iter/sec",
            "range": "stddev: 0.022764366628196732",
            "extra": "mean: 347.91123300000964 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 1.6976731002101388,
            "unit": "iter/sec",
            "range": "stddev: 0.016337104411099278",
            "extra": "mean: 589.0415533333359 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 1.7010823032388183,
            "unit": "iter/sec",
            "range": "stddev: 0.1225360615217918",
            "extra": "mean: 587.8610330000052 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.28185631006311,
            "unit": "iter/sec",
            "range": "stddev: 0.025734853484890182",
            "extra": "mean: 780.1186390000036 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 0.8902531769554839,
            "unit": "iter/sec",
            "range": "stddev: 0.09084361636235098",
            "extra": "mean: 1.1232759690000005 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 2.8784778360502177,
            "unit": "iter/sec",
            "range": "stddev: 0.04942154321714353",
            "extra": "mean: 347.405836333337 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.136759394733328,
            "unit": "iter/sec",
            "range": "stddev: 0.017147644833931407",
            "extra": "mean: 467.9984103333273 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.3106675607621499,
            "unit": "iter/sec",
            "range": "stddev: 0.04556346147402225",
            "extra": "mean: 762.9699779999916 msec\nrounds: 3"
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
          "id": "5f35ff12f6d3f9d0fb6940e995dd8d12f08271b4",
          "message": "update benchmark",
          "timestamp": "2023-02-05T23:54:16+08:00",
          "tree_id": "aa8e3b45323f2af5fa1a66ae0070d55fbcfb4307",
          "url": "https://github.com/Yiling-J/cacheme/commit/5f35ff12f6d3f9d0fb6940e995dd8d12f08271b4"
        },
        "date": 1675612641363,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 3.357300298140107,
            "unit": "iter/sec",
            "range": "stddev: 0.005602629574538949",
            "extra": "mean: 297.8583716666587 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 2.4583105600906126,
            "unit": "iter/sec",
            "range": "stddev: 0.0090551362440022",
            "extra": "mean: 406.78342933333056 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 1.0935145033364364,
            "unit": "iter/sec",
            "range": "stddev: 0.0530734131267444",
            "extra": "mean: 914.4826126666695 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 1.3202019063459423,
            "unit": "iter/sec",
            "range": "stddev: 0.019436888082589403",
            "extra": "mean: 757.4598969999992 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.1073474181037348,
            "unit": "iter/sec",
            "range": "stddev: 0.03316882811730926",
            "extra": "mean: 903.0589529999892 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 0.7384335615995982,
            "unit": "iter/sec",
            "range": "stddev: 0.029781872959672853",
            "extra": "mean: 1.3542179716666662 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 2.0276135992011963,
            "unit": "iter/sec",
            "range": "stddev: 0.1294151824648709",
            "extra": "mean: 493.1906159999926 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 1.9692000750769572,
            "unit": "iter/sec",
            "range": "stddev: 0.01817709022231395",
            "extra": "mean: 507.82041533332745 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.003085363856116,
            "unit": "iter/sec",
            "range": "stddev: 0.15590170958040497",
            "extra": "mean: 996.9241263333212 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mysql-small]",
            "value": 1.7928305520169985,
            "unit": "iter/sec",
            "range": "stddev: 0.07027492185752668",
            "extra": "mean: 557.7771969999977 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mysql-medium]",
            "value": 1.4065142800774135,
            "unit": "iter/sec",
            "range": "stddev: 0.04909438848467111",
            "extra": "mean: 710.9774953333291 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mysql-large]",
            "value": 0.9604517768457691,
            "unit": "iter/sec",
            "range": "stddev: 0.09810619240397443",
            "extra": "mean: 1.0411766880000073 sec\nrounds: 3"
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
          "id": "4897cb3eb42f9fe2798211de00c2b834bf9b8952",
          "message": "fix ci",
          "timestamp": "2023-02-06T00:22:05+08:00",
          "tree_id": "9dc273524e8ab9bf13f35ff1674064577161da4f",
          "url": "https://github.com/Yiling-J/cacheme/commit/4897cb3eb42f9fe2798211de00c2b834bf9b8952"
        },
        "date": 1675615125734,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 2.999365598183704,
            "unit": "iter/sec",
            "range": "stddev: 0.03638546036743584",
            "extra": "mean: 333.40383733332146 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 2.207690496910629,
            "unit": "iter/sec",
            "range": "stddev: 0.0009098937275648022",
            "extra": "mean: 452.96204399999357 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 1.047909637086516,
            "unit": "iter/sec",
            "range": "stddev: 0.08053543949581586",
            "extra": "mean: 954.2807553333338 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 1.1299771927437394,
            "unit": "iter/sec",
            "range": "stddev: 0.019949345529980136",
            "extra": "mean: 884.9736139999985 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 0.9635851754397924,
            "unit": "iter/sec",
            "range": "stddev: 0.021789147699035536",
            "extra": "mean: 1.0377909763333453 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 0.6506495229666949,
            "unit": "iter/sec",
            "range": "stddev: 0.04975584645160016",
            "extra": "mean: 1.5369257406666652 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 2.4140974600917935,
            "unit": "iter/sec",
            "range": "stddev: 0.07125410960836001",
            "extra": "mean: 414.23348333334314 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 1.6820810669281367,
            "unit": "iter/sec",
            "range": "stddev: 0.02852537380079906",
            "extra": "mean: 594.5016680000018 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 0.9358214314282173,
            "unit": "iter/sec",
            "range": "stddev: 0.1980308903804793",
            "extra": "mean: 1.0685799303333283 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mysql-small]",
            "value": 1.759839408787758,
            "unit": "iter/sec",
            "range": "stddev: 0.08269957713419575",
            "extra": "mean: 568.2336666666856 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mysql-medium]",
            "value": 1.1972716664258,
            "unit": "iter/sec",
            "range": "stddev: 0.01373197418196744",
            "extra": "mean: 835.2323270000094 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mysql-large]",
            "value": 0.8490822404500955,
            "unit": "iter/sec",
            "range": "stddev: 0.0879428995533222",
            "extra": "mean: 1.1777422166666724 sec\nrounds: 3"
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
          "id": "162d807221f16f92f0edf5324fb12dbbe54c3686",
          "message": "refactor and add theine as local cache",
          "timestamp": "2023-02-06T12:13:08+08:00",
          "tree_id": "b253fe5e8da962baec508b6dc608f11a22dcbcf4",
          "url": "https://github.com/Yiling-J/cacheme/commit/162d807221f16f92f0edf5324fb12dbbe54c3686"
        },
        "date": 1675657805966,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 4.177712172099952,
            "unit": "iter/sec",
            "range": "stddev: 0.02101865709978736",
            "extra": "mean: 239.3654609999961 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.1296720330923957,
            "unit": "iter/sec",
            "range": "stddev: 0.024556251033975032",
            "extra": "mean: 319.52229799999543 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 1.6482909821869596,
            "unit": "iter/sec",
            "range": "stddev: 0.01423813796121043",
            "extra": "mean: 606.6889953333335 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 1.606388840595765,
            "unit": "iter/sec",
            "range": "stddev: 0.07576163684108468",
            "extra": "mean: 622.5142846666737 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.3709885414532585,
            "unit": "iter/sec",
            "range": "stddev: 0.015473498507009438",
            "extra": "mean: 729.4006986666659 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 0.9370555129883494,
            "unit": "iter/sec",
            "range": "stddev: 0.030405944160250938",
            "extra": "mean: 1.067172634000002 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 3.0544847909224506,
            "unit": "iter/sec",
            "range": "stddev: 0.07476856384718784",
            "extra": "mean: 327.3874543333382 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.9162744941735013,
            "unit": "iter/sec",
            "range": "stddev: 0.0180609706374048",
            "extra": "mean: 342.90324933332766 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.4607652662725437,
            "unit": "iter/sec",
            "range": "stddev: 0.00229655273494194",
            "extra": "mean: 684.5726846666574 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mysql-small]",
            "value": 2.523866898955819,
            "unit": "iter/sec",
            "range": "stddev: 0.05708877480496246",
            "extra": "mean: 396.2174076666732 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mysql-medium]",
            "value": 1.9228873103640594,
            "unit": "iter/sec",
            "range": "stddev: 0.10341872061972991",
            "extra": "mean: 520.0512763333336 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mysql-large]",
            "value": 1.3624464085168146,
            "unit": "iter/sec",
            "range": "stddev: 0.08196594579411942",
            "extra": "mean: 733.9738236666639 msec\nrounds: 3"
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
          "id": "e125681b75f4991dacbd1df996daa65667d400b7",
          "message": "update readme",
          "timestamp": "2023-02-06T13:47:46+08:00",
          "tree_id": "00748b7da67985fdc121817188a18ec2aa40663a",
          "url": "https://github.com/Yiling-J/cacheme/commit/e125681b75f4991dacbd1df996daa65667d400b7"
        },
        "date": 1675663356638,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 4.062618597570225,
            "unit": "iter/sec",
            "range": "stddev: 0.007403279990172427",
            "extra": "mean: 246.14666033333302 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 2.5560892461626956,
            "unit": "iter/sec",
            "range": "stddev: 0.03147778001299057",
            "extra": "mean: 391.2226466666766 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 1.2891208998456682,
            "unit": "iter/sec",
            "range": "stddev: 0.017689543971933633",
            "extra": "mean: 775.72243233332 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 1.4866034499682692,
            "unit": "iter/sec",
            "range": "stddev: 0.019298143149817596",
            "extra": "mean: 672.6743436666615 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.1467171535548468,
            "unit": "iter/sec",
            "range": "stddev: 0.018383830923714324",
            "extra": "mean: 872.0546273333222 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 0.755633188559307,
            "unit": "iter/sec",
            "range": "stddev: 0.12662747453725665",
            "extra": "mean: 1.323393433666676 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 2.7936084845243263,
            "unit": "iter/sec",
            "range": "stddev: 0.04593427917941347",
            "extra": "mean: 357.9599666666506 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 1.946668488679127,
            "unit": "iter/sec",
            "range": "stddev: 0.03196315380715837",
            "extra": "mean: 513.6981493333413 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.0101801646895427,
            "unit": "iter/sec",
            "range": "stddev: 0.12112017595517294",
            "extra": "mean: 989.9224266666616 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mysql-small]",
            "value": 1.6326556503720218,
            "unit": "iter/sec",
            "range": "stddev: 0.11265340323784234",
            "extra": "mean: 612.4990286666616 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mysql-medium]",
            "value": 2.0430841346317394,
            "unit": "iter/sec",
            "range": "stddev: 0.03872162747037801",
            "extra": "mean: 489.45610366664977 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mysql-large]",
            "value": 0.8031358505677879,
            "unit": "iter/sec",
            "range": "stddev: 0.047700980437301546",
            "extra": "mean: 1.2451193646666827 sec\nrounds: 3"
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
          "id": "f8a05ce87634216a983a95ba93fe296b1c490959",
          "message": "bump theine to 0.1.1",
          "timestamp": "2023-02-08T20:54:46+08:00",
          "tree_id": "ceb1eea3a2e63fc1c6dcc4b6bf71438324d59c35",
          "url": "https://github.com/Yiling-J/cacheme/commit/f8a05ce87634216a983a95ba93fe296b1c490959"
        },
        "date": 1675861846525,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 3.198697081115398,
            "unit": "iter/sec",
            "range": "stddev: 0.07613496589105931",
            "extra": "mean: 312.6272899999947 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 2.882028434325038,
            "unit": "iter/sec",
            "range": "stddev: 0.012681616529487396",
            "extra": "mean: 346.97783966666407 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 1.3749370644901835,
            "unit": "iter/sec",
            "range": "stddev: 0.03213584795884513",
            "extra": "mean: 727.30601699998 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 1.498162624143579,
            "unit": "iter/sec",
            "range": "stddev: 0.012929862306407414",
            "extra": "mean: 667.4842796666667 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.2545737976029658,
            "unit": "iter/sec",
            "range": "stddev: 0.04169433090593177",
            "extra": "mean: 797.0834413333326 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 0.7790748150011559,
            "unit": "iter/sec",
            "range": "stddev: 0.052115821553796376",
            "extra": "mean: 1.2835737733333303 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 2.5557764647568524,
            "unit": "iter/sec",
            "range": "stddev: 0.02113274947047216",
            "extra": "mean: 391.27052533333995 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.1578144095129415,
            "unit": "iter/sec",
            "range": "stddev: 0.0565216183794077",
            "extra": "mean: 463.43188533332597 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.1762794174592295,
            "unit": "iter/sec",
            "range": "stddev: 0.04836660660384505",
            "extra": "mean: 850.1381433333298 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mysql-small]",
            "value": 2.3396319844986975,
            "unit": "iter/sec",
            "range": "stddev: 0.02077989018783497",
            "extra": "mean: 427.41764799999754 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mysql-medium]",
            "value": 1.464998673609743,
            "unit": "iter/sec",
            "range": "stddev: 0.04839570470309542",
            "extra": "mean: 682.5944746666627 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mysql-large]",
            "value": 1.0910285632976384,
            "unit": "iter/sec",
            "range": "stddev: 0.0584633048142669",
            "extra": "mean: 916.5662876666545 msec\nrounds: 3"
          }
        ]
      }
    ]
  }
}