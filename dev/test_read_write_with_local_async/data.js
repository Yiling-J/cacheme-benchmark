window.BENCHMARK_DATA = {
  "lastUpdate": 1675866735073,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark: test_read_write_with_local_async": [
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
        "date": 1674701744267,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.731548360323717,
            "unit": "iter/sec",
            "range": "stddev: 0.012303693154503739",
            "extra": "mean: 366.09273133333414 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.5489398576790934,
            "unit": "iter/sec",
            "range": "stddev: 0.04065138389255117",
            "extra": "mean: 392.31996666666663 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 2.1222008269244537,
            "unit": "iter/sec",
            "range": "stddev: 0.043146113264560776",
            "extra": "mean: 471.20893900000266 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.9218253823118902,
            "unit": "iter/sec",
            "range": "stddev: 0.04835191121481138",
            "extra": "mean: 1.0848041496666667 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.9342672958919943,
            "unit": "iter/sec",
            "range": "stddev: 0.0771341610194277",
            "extra": "mean: 1.0703574923333339 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.7959066423751423,
            "unit": "iter/sec",
            "range": "stddev: 0.0929451748405134",
            "extra": "mean: 1.2564287653333348 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9419358067827602,
            "unit": "iter/sec",
            "range": "stddev: 0.7192432406192975",
            "extra": "mean: 1.061643471666675 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8215986434823707,
            "unit": "iter/sec",
            "range": "stddev: 0.8060469633599359",
            "extra": "mean: 1.2171393026666522 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.6205500378761697,
            "unit": "iter/sec",
            "range": "stddev: 0.8000949186702762",
            "extra": "mean: 1.6114735943333376 sec\nrounds: 3"
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
        "date": 1674702431121,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.9109812417368746,
            "unit": "iter/sec",
            "range": "stddev: 0.03565526467551135",
            "extra": "mean: 343.52677566666046 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.7267322517576873,
            "unit": "iter/sec",
            "range": "stddev: 0.029601402182925052",
            "extra": "mean: 366.7393450000039 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.7235577082091889,
            "unit": "iter/sec",
            "range": "stddev: 0.0958056056157922",
            "extra": "mean: 580.1952526666602 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.9641837209000442,
            "unit": "iter/sec",
            "range": "stddev: 0.062177721463863564",
            "extra": "mean: 1.0371467370000005 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.8666440982528791,
            "unit": "iter/sec",
            "range": "stddev: 0.060403728739459955",
            "extra": "mean: 1.1538762013333514 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.8171213629054788,
            "unit": "iter/sec",
            "range": "stddev: 0.04000653625566476",
            "extra": "mean: 1.2238084150000077 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9778250883163698,
            "unit": "iter/sec",
            "range": "stddev: 0.8412831265922109",
            "extra": "mean: 1.0226777896666686 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8684199255596382,
            "unit": "iter/sec",
            "range": "stddev: 0.7922765266027562",
            "extra": "mean: 1.151516645999995 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5608318998737956,
            "unit": "iter/sec",
            "range": "stddev: 0.5862932018866839",
            "extra": "mean: 1.783065478666657 sec\nrounds: 3"
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
        "date": 1674703504476,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.6680223730253063,
            "unit": "iter/sec",
            "range": "stddev: 0.04453091955059865",
            "extra": "mean: 374.8094506666699 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.62430492200585,
            "unit": "iter/sec",
            "range": "stddev: 0.03035182241750507",
            "extra": "mean: 381.0532806666629 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.977846541729648,
            "unit": "iter/sec",
            "range": "stddev: 0.060317327676138184",
            "extra": "mean: 505.6003986666676 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.947708398571736,
            "unit": "iter/sec",
            "range": "stddev: 0.0739027357308486",
            "extra": "mean: 1.0551768893333342 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.9179098981112688,
            "unit": "iter/sec",
            "range": "stddev: 0.02618868945153027",
            "extra": "mean: 1.0894315466666644 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.8477644352230863,
            "unit": "iter/sec",
            "range": "stddev: 0.06509435631249319",
            "extra": "mean: 1.1795729549999976 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9002518960620732,
            "unit": "iter/sec",
            "range": "stddev: 0.8752332258223247",
            "extra": "mean: 1.1108002153333416 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8131305619821028,
            "unit": "iter/sec",
            "range": "stddev: 0.8472426350386201",
            "extra": "mean: 1.2298148006666736 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.6162875076821875,
            "unit": "iter/sec",
            "range": "stddev: 0.7681257289659783",
            "extra": "mean: 1.622619292999995 sec\nrounds: 3"
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
        "date": 1674724383780,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.7208100243238693,
            "unit": "iter/sec",
            "range": "stddev: 0.05691798109299407",
            "extra": "mean: 367.53760500000493 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.5550679312503943,
            "unit": "iter/sec",
            "range": "stddev: 0.06781080722907273",
            "extra": "mean: 391.37902666666946 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.7406324280183532,
            "unit": "iter/sec",
            "range": "stddev: 0.12921648568068148",
            "extra": "mean: 574.5038319999954 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.9091121558684544,
            "unit": "iter/sec",
            "range": "stddev: 0.013813819093425047",
            "extra": "mean: 1.0999742920000035 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.8899230514595721,
            "unit": "iter/sec",
            "range": "stddev: 0.03362140623925418",
            "extra": "mean: 1.1236926589999996 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.831710214116612,
            "unit": "iter/sec",
            "range": "stddev: 0.10700976209222018",
            "extra": "mean: 1.2023418530000072 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9706513476728179,
            "unit": "iter/sec",
            "range": "stddev: 0.829613709423219",
            "extra": "mean: 1.030236039333327 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8789629506639074,
            "unit": "iter/sec",
            "range": "stddev: 0.7851006310040056",
            "extra": "mean: 1.1377043813333312 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.561602561528586,
            "unit": "iter/sec",
            "range": "stddev: 0.6132143000750699",
            "extra": "mean: 1.7806186590000077 sec\nrounds: 3"
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
        "date": 1674739069993,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.6527459365560813,
            "unit": "iter/sec",
            "range": "stddev: 0.011064261230651382",
            "extra": "mean: 605.053673333335 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 1.1647772966852408,
            "unit": "iter/sec",
            "range": "stddev: 0.2690266428168721",
            "extra": "mean: 858.5332173333313 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.1944351172333305,
            "unit": "iter/sec",
            "range": "stddev: 0.06530051720999587",
            "extra": "mean: 837.2158399999989 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.5316935363055167,
            "unit": "iter/sec",
            "range": "stddev: 0.12035116552776957",
            "extra": "mean: 1.8807826910000074 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.5112194328059882,
            "unit": "iter/sec",
            "range": "stddev: 0.11560963998866274",
            "extra": "mean: 1.9561071739999913 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.4440147545925379,
            "unit": "iter/sec",
            "range": "stddev: 0.09491732030595115",
            "extra": "mean: 2.2521774099999825 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.5281872362651923,
            "unit": "iter/sec",
            "range": "stddev: 1.207429819175434",
            "extra": "mean: 1.8932680143333112 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.511559458679421,
            "unit": "iter/sec",
            "range": "stddev: 1.0588250672627872",
            "extra": "mean: 1.9548069790000113 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.3642414866274398,
            "unit": "iter/sec",
            "range": "stddev: 1.3747425246433016",
            "extra": "mean: 2.745431360000017 sec\nrounds: 3"
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
        "date": 1674783518453,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.771930752804393,
            "unit": "iter/sec",
            "range": "stddev: 0.12313093163964454",
            "extra": "mean: 564.3561400000104 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.040835164688601,
            "unit": "iter/sec",
            "range": "stddev: 0.04522423896259744",
            "extra": "mean: 489.9954770000174 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.6142234540406926,
            "unit": "iter/sec",
            "range": "stddev: 0.016324995383995625",
            "extra": "mean: 619.49291933333 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.7024030056026912,
            "unit": "iter/sec",
            "range": "stddev: 0.11507004366920626",
            "extra": "mean: 1.4236841129999978 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.6428382211896041,
            "unit": "iter/sec",
            "range": "stddev: 0.054529291218237866",
            "extra": "mean: 1.555601342666667 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.5981599170154059,
            "unit": "iter/sec",
            "range": "stddev: 0.14428820513936627",
            "extra": "mean: 1.6717937320000071 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.6837020052211273,
            "unit": "iter/sec",
            "range": "stddev: 0.855719709875192",
            "extra": "mean: 1.4626255186666792 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.6435509952231694,
            "unit": "iter/sec",
            "range": "stddev: 0.9741366606962457",
            "extra": "mean: 1.553878414333307 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.4286967520651425,
            "unit": "iter/sec",
            "range": "stddev: 0.8263488295849312",
            "extra": "mean: 2.332651215999988 sec\nrounds: 3"
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
        "date": 1674783782874,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.3892594606419957,
            "unit": "iter/sec",
            "range": "stddev: 0.10660232694584303",
            "extra": "mean: 418.5397259999964 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.4738246408277087,
            "unit": "iter/sec",
            "range": "stddev: 0.04189979926394399",
            "extra": "mean: 404.2323709999967 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 2.026658113628983,
            "unit": "iter/sec",
            "range": "stddev: 0.0025010106466461113",
            "extra": "mean: 493.42313500000046 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.8392997997396819,
            "unit": "iter/sec",
            "range": "stddev: 0.07379177069687193",
            "extra": "mean: 1.1914693656666675 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.7592133133988554,
            "unit": "iter/sec",
            "range": "stddev: 0.01827479339316163",
            "extra": "mean: 1.3171528769999934 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.7188580587209242,
            "unit": "iter/sec",
            "range": "stddev: 0.061900010596334515",
            "extra": "mean: 1.391095206999997 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9165359212135745,
            "unit": "iter/sec",
            "range": "stddev: 0.7432185562532494",
            "extra": "mean: 1.0910647109999918 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.7907682052661467,
            "unit": "iter/sec",
            "range": "stddev: 0.7714621456992161",
            "extra": "mean: 1.2645930796666676 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5332325998652131,
            "unit": "iter/sec",
            "range": "stddev: 0.6063813151559938",
            "extra": "mean: 1.8753542079999856 sec\nrounds: 3"
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
        "date": 1674784541290,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.5199354720122593,
            "unit": "iter/sec",
            "range": "stddev: 0.03472716179682385",
            "extra": "mean: 396.8355583333505 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 1.7438125796462138,
            "unit": "iter/sec",
            "range": "stddev: 0.15092296180712844",
            "extra": "mean: 573.4561223333307 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.9160338393827534,
            "unit": "iter/sec",
            "range": "stddev: 0.016258451037574066",
            "extra": "mean: 521.9114503333344 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.7447804837825367,
            "unit": "iter/sec",
            "range": "stddev: 0.017738014868824502",
            "extra": "mean: 1.3426775026666558 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.8096092854248748,
            "unit": "iter/sec",
            "range": "stddev: 0.018589240037930783",
            "extra": "mean: 1.2351636993333273 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.7317976965875248,
            "unit": "iter/sec",
            "range": "stddev: 0.09162305902254068",
            "extra": "mean: 1.366497878666659 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.8477009853090692,
            "unit": "iter/sec",
            "range": "stddev: 0.7320156163738079",
            "extra": "mean: 1.1796612453333448 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.7268760392117949,
            "unit": "iter/sec",
            "range": "stddev: 0.7092458091549673",
            "extra": "mean: 1.3757503976666687 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5499380945502488,
            "unit": "iter/sec",
            "range": "stddev: 0.8532224685926312",
            "extra": "mean: 1.8183864873333089 sec\nrounds: 3"
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
        "date": 1674787067847,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.9579618193268815,
            "unit": "iter/sec",
            "range": "stddev: 0.03308476751162431",
            "extra": "mean: 338.0706246666705 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.860243420940136,
            "unit": "iter/sec",
            "range": "stddev: 0.02845934237055994",
            "extra": "mean: 349.62059266665807 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.8020177203226924,
            "unit": "iter/sec",
            "range": "stddev: 0.07852090932755558",
            "extra": "mean: 554.9334996666554 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.9843420358002066,
            "unit": "iter/sec",
            "range": "stddev: 0.07852942069198761",
            "extra": "mean: 1.0159070360000062 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.9628035440441538,
            "unit": "iter/sec",
            "range": "stddev: 0.06327413972588546",
            "extra": "mean: 1.038633484666671 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.8016636864489609,
            "unit": "iter/sec",
            "range": "stddev: 0.06478544939290987",
            "extra": "mean: 1.2474058846666576 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9737146711227841,
            "unit": "iter/sec",
            "range": "stddev: 0.862067543890684",
            "extra": "mean: 1.0269948986666766 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8825985636841751,
            "unit": "iter/sec",
            "range": "stddev: 0.7870461611503525",
            "extra": "mean: 1.1330179326666514 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5597737919176943,
            "unit": "iter/sec",
            "range": "stddev: 0.6229074061177048",
            "extra": "mean: 1.7864359040000106 sec\nrounds: 3"
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
        "date": 1674818356402,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.739549330218282,
            "unit": "iter/sec",
            "range": "stddev: 0.02430494581853674",
            "extra": "mean: 365.02354199999826 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.5058196638483214,
            "unit": "iter/sec",
            "range": "stddev: 0.03433044647011842",
            "extra": "mean: 399.0710163333328 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.5988474697355768,
            "unit": "iter/sec",
            "range": "stddev: 0.08083700229884827",
            "extra": "mean: 625.4505316666533 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.8830689212506956,
            "unit": "iter/sec",
            "range": "stddev: 0.14225724350969174",
            "extra": "mean: 1.132414442333328 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.8849364551157636,
            "unit": "iter/sec",
            "range": "stddev: 0.061664423105443074",
            "extra": "mean: 1.130024640999996 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.7650987730695277,
            "unit": "iter/sec",
            "range": "stddev: 0.04179276745787414",
            "extra": "mean: 1.3070207863333299 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9609497049020828,
            "unit": "iter/sec",
            "range": "stddev: 0.7605349437025158",
            "extra": "mean: 1.040637189333334 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8558485009688391,
            "unit": "iter/sec",
            "range": "stddev: 0.7860236731101199",
            "extra": "mean: 1.168431093666669 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.553117834558959,
            "unit": "iter/sec",
            "range": "stddev: 0.6383760441380715",
            "extra": "mean: 1.8079330253333314 sec\nrounds: 3"
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
        "date": 1674821324189,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.6784261867606,
            "unit": "iter/sec",
            "range": "stddev: 0.035213555433191386",
            "extra": "mean: 595.7962333333361 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.174787620136278,
            "unit": "iter/sec",
            "range": "stddev: 0.05135934615325646",
            "extra": "mean: 459.81501400000485 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.6518051281578576,
            "unit": "iter/sec",
            "range": "stddev: 0.045085739091788306",
            "extra": "mean: 605.3982900000013 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.7105642396500973,
            "unit": "iter/sec",
            "range": "stddev: 0.1472802486614532",
            "extra": "mean: 1.4073322919999878 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.6848558008876816,
            "unit": "iter/sec",
            "range": "stddev: 0.03359325950483485",
            "extra": "mean: 1.460161392666663 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.6389402653301921,
            "unit": "iter/sec",
            "range": "stddev: 0.03280587971418203",
            "extra": "mean: 1.565091534000004 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.7821801241986733,
            "unit": "iter/sec",
            "range": "stddev: 0.9201823807317344",
            "extra": "mean: 1.2784778966666768 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.6248763089892005,
            "unit": "iter/sec",
            "range": "stddev: 1.1719706981166158",
            "extra": "mean: 1.6003167116666646 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.49729781891701175,
            "unit": "iter/sec",
            "range": "stddev: 0.9593318565599058",
            "extra": "mean: 2.0108674559999997 sec\nrounds: 3"
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
        "date": 1674899483948,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.0428935977194818,
            "unit": "iter/sec",
            "range": "stddev: 0.03907114117864935",
            "extra": "mean: 489.50175433332294 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.0227013830843212,
            "unit": "iter/sec",
            "range": "stddev: 0.03422006664464088",
            "extra": "mean: 494.3883503333287 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.5330826911091253,
            "unit": "iter/sec",
            "range": "stddev: 0.07859525942911517",
            "extra": "mean: 652.2805363333267 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.673100932263573,
            "unit": "iter/sec",
            "range": "stddev: 0.03579384553299968",
            "extra": "mean: 1.4856612909999949 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.7217706317771829,
            "unit": "iter/sec",
            "range": "stddev: 0.11321574587897838",
            "extra": "mean: 1.3854816973333282 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.5916488521936819,
            "unit": "iter/sec",
            "range": "stddev: 0.0678785939996653",
            "extra": "mean: 1.6901917350000037 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.674116917102026,
            "unit": "iter/sec",
            "range": "stddev: 1.0291032923224814",
            "extra": "mean: 1.4834221996666674 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.6466714596791285,
            "unit": "iter/sec",
            "range": "stddev: 0.9160293070390797",
            "extra": "mean: 1.5463802909999913 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.4327327108220767,
            "unit": "iter/sec",
            "range": "stddev: 0.7614800300108089",
            "extra": "mean: 2.3108953286666654 sec\nrounds: 3"
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
        "date": 1674899570403,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.3108017794479387,
            "unit": "iter/sec",
            "range": "stddev: 0.06899677325679325",
            "extra": "mean: 432.7502293333462 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 1.7221430005825764,
            "unit": "iter/sec",
            "range": "stddev: 0.04855812175562062",
            "extra": "mean: 580.6718720000106 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.9080925002105833,
            "unit": "iter/sec",
            "range": "stddev: 0.03352470972359866",
            "extra": "mean: 524.0836069999943 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.7916243486169505,
            "unit": "iter/sec",
            "range": "stddev: 0.047268550772700556",
            "extra": "mean: 1.263225419666668 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.7886671506357773,
            "unit": "iter/sec",
            "range": "stddev: 0.06353133810316476",
            "extra": "mean: 1.2679620283333197 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.6867661573245896,
            "unit": "iter/sec",
            "range": "stddev: 0.06991276047215901",
            "extra": "mean: 1.4560997063333236 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9270662878483353,
            "unit": "iter/sec",
            "range": "stddev: 0.711788329215752",
            "extra": "mean: 1.078671518000012 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.7920136685021948,
            "unit": "iter/sec",
            "range": "stddev: 0.7521364281984402",
            "extra": "mean: 1.2626044723333318 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5754460411692497,
            "unit": "iter/sec",
            "range": "stddev: 0.8310236115259686",
            "extra": "mean: 1.7377823956666703 sec\nrounds: 3"
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
        "date": 1674994621583,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.8822814821281164,
            "unit": "iter/sec",
            "range": "stddev: 0.035070951089543494",
            "extra": "mean: 346.94737699999223 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.0327753241972544,
            "unit": "iter/sec",
            "range": "stddev: 0.07021377931899397",
            "extra": "mean: 491.93828166666736 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 2.054603692897313,
            "unit": "iter/sec",
            "range": "stddev: 0.05938562807040521",
            "extra": "mean: 486.7118673333266 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.939822160466272,
            "unit": "iter/sec",
            "range": "stddev: 0.028310771084449297",
            "extra": "mean: 1.0640310923333327 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.9104288753661537,
            "unit": "iter/sec",
            "range": "stddev: 0.04604851057073846",
            "extra": "mean: 1.098383439999992 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.8412530170596506,
            "unit": "iter/sec",
            "range": "stddev: 0.02458397073769297",
            "extra": "mean: 1.188703017666673 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9083674450692782,
            "unit": "iter/sec",
            "range": "stddev: 0.788294139772026",
            "extra": "mean: 1.1008760886666664 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8443281158936731,
            "unit": "iter/sec",
            "range": "stddev: 0.8000132812546147",
            "extra": "mean: 1.1843736826666695 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5557806962431836,
            "unit": "iter/sec",
            "range": "stddev: 0.6724043535618517",
            "extra": "mean: 1.799270839666671 sec\nrounds: 3"
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
        "date": 1675063447258,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.5931861433937118,
            "unit": "iter/sec",
            "range": "stddev: 0.08196245295763441",
            "extra": "mean: 627.6730463333422 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 1.2517510897247393,
            "unit": "iter/sec",
            "range": "stddev: 0.2726595266293934",
            "extra": "mean: 798.8808703333348 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.300320117314239,
            "unit": "iter/sec",
            "range": "stddev: 0.05611625592482922",
            "extra": "mean: 769.041397333344 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.5614254792486141,
            "unit": "iter/sec",
            "range": "stddev: 0.01233063666680411",
            "extra": "mean: 1.7811802936666747 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.5710975257733656,
            "unit": "iter/sec",
            "range": "stddev: 0.099417668370287",
            "extra": "mean: 1.7510144150000049 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.4944944100872518,
            "unit": "iter/sec",
            "range": "stddev: 0.0477408617715556",
            "extra": "mean: 2.0222675516666677 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.6142200153035007,
            "unit": "iter/sec",
            "range": "stddev: 0.8354341800528201",
            "extra": "mean: 1.6280811029999995 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.5356988066972652,
            "unit": "iter/sec",
            "range": "stddev: 1.038289766899746",
            "extra": "mean: 1.8667206040000035 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.3739711493192955,
            "unit": "iter/sec",
            "range": "stddev: 0.6809990348744127",
            "extra": "mean: 2.6740030663333414 sec\nrounds: 3"
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
        "date": 1675154863879,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.919080652712612,
            "unit": "iter/sec",
            "range": "stddev: 0.03255455828284164",
            "extra": "mean: 342.5736110000012 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.70361845724526,
            "unit": "iter/sec",
            "range": "stddev: 0.03054149991073707",
            "extra": "mean: 369.8746756666651 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.6878307135500208,
            "unit": "iter/sec",
            "range": "stddev: 0.12832958330169422",
            "extra": "mean: 592.4764799999972 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.9389463206360262,
            "unit": "iter/sec",
            "range": "stddev: 0.11908444511841026",
            "extra": "mean: 1.065023610000002 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.8727970972567703,
            "unit": "iter/sec",
            "range": "stddev: 0.11553047553550659",
            "extra": "mean: 1.1457416656666624 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.7430373328212442,
            "unit": "iter/sec",
            "range": "stddev: 0.12531676916637563",
            "extra": "mean: 1.3458273976666721 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9648449542722431,
            "unit": "iter/sec",
            "range": "stddev: 0.7857375712624898",
            "extra": "mean: 1.0364359533333243 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8612394508609758,
            "unit": "iter/sec",
            "range": "stddev: 0.7991522336585443",
            "extra": "mean: 1.1611172700000054 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5485091884376907,
            "unit": "iter/sec",
            "range": "stddev: 0.6822908209519295",
            "extra": "mean: 1.8231235156666799 sec\nrounds: 3"
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
        "date": 1675160252954,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.9066148621862586,
            "unit": "iter/sec",
            "range": "stddev: 0.037377800697081236",
            "extra": "mean: 344.0428289999981 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.686788351824535,
            "unit": "iter/sec",
            "range": "stddev: 0.034288484453049724",
            "extra": "mean: 372.19157933334185 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.7283462246386017,
            "unit": "iter/sec",
            "range": "stddev: 0.12289748843030873",
            "extra": "mean: 578.5877770000051 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.9447017442162434,
            "unit": "iter/sec",
            "range": "stddev: 0.04422539352738876",
            "extra": "mean: 1.058535147333335 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.9303360986335347,
            "unit": "iter/sec",
            "range": "stddev: 0.04850647662135736",
            "extra": "mean: 1.0748803593333491 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.7857011591172784,
            "unit": "iter/sec",
            "range": "stddev: 0.07294153161202997",
            "extra": "mean: 1.2727485359999757 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9657981237593839,
            "unit": "iter/sec",
            "range": "stddev: 0.8155577590241463",
            "extra": "mean: 1.0354130696666555 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8672002243814689,
            "unit": "iter/sec",
            "range": "stddev: 0.7867689412809605",
            "extra": "mean: 1.153136232999998 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5501879703170794,
            "unit": "iter/sec",
            "range": "stddev: 0.6581421904041651",
            "extra": "mean: 1.817560641 sec\nrounds: 3"
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
        "date": 1675160813679,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.8026839794759137,
            "unit": "iter/sec",
            "range": "stddev: 0.03383695261877184",
            "extra": "mean: 356.80084066666495 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 1.952094358994084,
            "unit": "iter/sec",
            "range": "stddev: 0.020077610917192446",
            "extra": "mean: 512.2703190000001 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 2.173314973970111,
            "unit": "iter/sec",
            "range": "stddev: 0.016339048026624135",
            "extra": "mean: 460.1265863333405 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.8741205710768012,
            "unit": "iter/sec",
            "range": "stddev: 0.0325641988405783",
            "extra": "mean: 1.1440069403333364 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.9078135859403238,
            "unit": "iter/sec",
            "range": "stddev: 0.08874156752309517",
            "extra": "mean: 1.101547735666666 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.8257950151368939,
            "unit": "iter/sec",
            "range": "stddev: 0.05464009735603107",
            "extra": "mean: 1.2109542703333318 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9416707338367251,
            "unit": "iter/sec",
            "range": "stddev: 0.8315431551046387",
            "extra": "mean: 1.0619423160000092 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8628550795553374,
            "unit": "iter/sec",
            "range": "stddev: 0.7825941703407788",
            "extra": "mean: 1.1589431686666767 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5334537573183251,
            "unit": "iter/sec",
            "range": "stddev: 0.6198673963222194",
            "extra": "mean: 1.8745767300000011 sec\nrounds: 3"
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
        "date": 1675161250795,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.7351413428236855,
            "unit": "iter/sec",
            "range": "stddev: 0.09894023598027378",
            "extra": "mean: 576.3219256666711 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.2568741644948482,
            "unit": "iter/sec",
            "range": "stddev: 0.0290882500906902",
            "extra": "mean: 443.09072066666505 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.8233131850541022,
            "unit": "iter/sec",
            "range": "stddev: 0.04622375095056714",
            "extra": "mean: 548.4521299999964 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.7623358852581248,
            "unit": "iter/sec",
            "range": "stddev: 0.045561740592607806",
            "extra": "mean: 1.311757742666676 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.7592515307723111,
            "unit": "iter/sec",
            "range": "stddev: 0.09205645763639625",
            "extra": "mean: 1.3170865773333371 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.6566095778103952,
            "unit": "iter/sec",
            "range": "stddev: 0.0319681871981359",
            "extra": "mean: 1.5229750430000024 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.8011208004719592,
            "unit": "iter/sec",
            "range": "stddev: 0.8422919460833884",
            "extra": "mean: 1.2482511993333294 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.6478288311378539,
            "unit": "iter/sec",
            "range": "stddev: 1.1344457725588346",
            "extra": "mean: 1.5436176223333387 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5075823387448024,
            "unit": "iter/sec",
            "range": "stddev: 0.9032429917286806",
            "extra": "mean: 1.9701237093333361 sec\nrounds: 3"
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
        "date": 1675161711493,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.172781219698232,
            "unit": "iter/sec",
            "range": "stddev: 0.028064807302121787",
            "extra": "mean: 460.2396186666624 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.2533729906549747,
            "unit": "iter/sec",
            "range": "stddev: 0.05012565674262614",
            "extra": "mean: 443.77917199998745 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.9007682964378112,
            "unit": "iter/sec",
            "range": "stddev: 0.02668025667470542",
            "extra": "mean: 526.1030509999974 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.7429738235987495,
            "unit": "iter/sec",
            "range": "stddev: 0.060452754061906484",
            "extra": "mean: 1.3459424386666683 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.8441311326189009,
            "unit": "iter/sec",
            "range": "stddev: 0.12423137721521672",
            "extra": "mean: 1.1846500636666708 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.6748009886034245,
            "unit": "iter/sec",
            "range": "stddev: 0.05825542081109048",
            "extra": "mean: 1.4819183979999953 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.8697600976035149,
            "unit": "iter/sec",
            "range": "stddev: 0.7889073147018437",
            "extra": "mean: 1.1497423286666522 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.7566208090656441,
            "unit": "iter/sec",
            "range": "stddev: 0.8059596291235757",
            "extra": "mean: 1.3216660023333304 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5072107596512008,
            "unit": "iter/sec",
            "range": "stddev: 0.5484238128805173",
            "extra": "mean: 1.9715670083333425 sec\nrounds: 3"
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
        "date": 1675446868231,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.8047816624586455,
            "unit": "iter/sec",
            "range": "stddev: 0.060067824137551025",
            "extra": "mean: 356.53399100000155 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.7421030551154715,
            "unit": "iter/sec",
            "range": "stddev: 0.01640807396505688",
            "extra": "mean: 364.68359500000247 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 2.074284220884063,
            "unit": "iter/sec",
            "range": "stddev: 0.08350350286185211",
            "extra": "mean: 482.0940109999962 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.8876295718635917,
            "unit": "iter/sec",
            "range": "stddev: 0.044935796107523976",
            "extra": "mean: 1.1265960843333385 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.8589692557389083,
            "unit": "iter/sec",
            "range": "stddev: 0.025019563170776006",
            "extra": "mean: 1.1641860209999872 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.8460910182768261,
            "unit": "iter/sec",
            "range": "stddev: 0.04691106028583359",
            "extra": "mean: 1.1819059396666678 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.8986439722167331,
            "unit": "iter/sec",
            "range": "stddev: 0.8104900336528734",
            "extra": "mean: 1.11278774566667 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.834697384437824,
            "unit": "iter/sec",
            "range": "stddev: 0.8323323684418389",
            "extra": "mean: 1.1980389763333317 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.6078091815977067,
            "unit": "iter/sec",
            "range": "stddev: 0.808104439333108",
            "extra": "mean: 1.6452531983333454 sec\nrounds: 3"
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
        "date": 1675447379085,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.603636232286851,
            "unit": "iter/sec",
            "range": "stddev: 0.049348110201071126",
            "extra": "mean: 384.07823166666805 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.5064690210906106,
            "unit": "iter/sec",
            "range": "stddev: 0.032066429635145416",
            "extra": "mean: 398.9676279999988 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.980313977315675,
            "unit": "iter/sec",
            "range": "stddev: 0.038596638364104215",
            "extra": "mean: 504.9704296666656 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 1.007840382723052,
            "unit": "iter/sec",
            "range": "stddev: 0.13926492167639548",
            "extra": "mean: 992.220610666673 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.8944893951255962,
            "unit": "iter/sec",
            "range": "stddev: 0.06020986014183442",
            "extra": "mean: 1.117956239000004 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.7519029941074222,
            "unit": "iter/sec",
            "range": "stddev: 0.05592712649576546",
            "extra": "mean: 1.3299587950000007 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.8680093177339783,
            "unit": "iter/sec",
            "range": "stddev: 0.7293816621909933",
            "extra": "mean: 1.1520613656666683 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8281444452456439,
            "unit": "iter/sec",
            "range": "stddev: 0.784351440309923",
            "extra": "mean: 1.2075188160000039 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.6015689715254713,
            "unit": "iter/sec",
            "range": "stddev: 0.778868875316871",
            "extra": "mean: 1.6623197793333304 sec\nrounds: 3"
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
        "date": 1675606834837,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 0.7529001181757558,
            "unit": "iter/sec",
            "range": "stddev: 0.745953723588194",
            "extra": "mean: 1.3281974273333315 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 0.6467402952093617,
            "unit": "iter/sec",
            "range": "stddev: 0.8748384080664224",
            "extra": "mean: 1.5462157026666812 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 0.32701691759922685,
            "unit": "iter/sec",
            "range": "stddev: 1.9018442356111809",
            "extra": "mean: 3.0579457703333333 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.2809596009817447,
            "unit": "iter/sec",
            "range": "stddev: 1.6957676016182472",
            "extra": "mean: 3.559230567333325 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.2733351976646417,
            "unit": "iter/sec",
            "range": "stddev: 1.9856787309643122",
            "extra": "mean: 3.65851163166667 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.22223521666104043,
            "unit": "iter/sec",
            "range": "stddev: 3.0845650982960873",
            "extra": "mean: 4.499736877999983 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.40032918471033635,
            "unit": "iter/sec",
            "range": "stddev: 1.193331418641396",
            "extra": "mean: 2.4979442873333446 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.2820759646673747,
            "unit": "iter/sec",
            "range": "stddev: 1.8375911735817416",
            "extra": "mean: 3.5451443059999974 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.24360185544693047,
            "unit": "iter/sec",
            "range": "stddev: 1.6889251429145389",
            "extra": "mean: 4.105059044666651 sec\nrounds: 3"
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
        "date": 1675611783009,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.1504937716397452,
            "unit": "iter/sec",
            "range": "stddev: 0.3184075762555693",
            "extra": "mean: 869.1920153333351 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 0.7581925460632015,
            "unit": "iter/sec",
            "range": "stddev: 0.7646320468653443",
            "extra": "mean: 1.3189261820000031 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 0.424004236290773,
            "unit": "iter/sec",
            "range": "stddev: 1.4509408114550304",
            "extra": "mean: 2.3584670020000025 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.2998183017442125,
            "unit": "iter/sec",
            "range": "stddev: 1.6476840214197277",
            "extra": "mean: 3.335353426333332 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.28012398231058755,
            "unit": "iter/sec",
            "range": "stddev: 1.8108772804218847",
            "extra": "mean: 3.5698478643333353 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.2588894362620841,
            "unit": "iter/sec",
            "range": "stddev: 2.1832617473329146",
            "extra": "mean: 3.862652777333333 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.4345313697109504,
            "unit": "iter/sec",
            "range": "stddev: 0.23243333377634856",
            "extra": "mean: 2.3013298226666543 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.3641419880282681,
            "unit": "iter/sec",
            "range": "stddev: 0.5476583036498224",
            "extra": "mean: 2.7461815249999972 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.24612257288573172,
            "unit": "iter/sec",
            "range": "stddev: 0.5186040629265187",
            "extra": "mean: 4.063016196666666 sec\nrounds: 3"
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
        "date": 1675612701196,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.0893855159405181,
            "unit": "iter/sec",
            "range": "stddev: 0.28580415568634376",
            "extra": "mean: 917.9486833333309 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 0.7921650622996484,
            "unit": "iter/sec",
            "range": "stddev: 0.4456418371400424",
            "extra": "mean: 1.262363171000004 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 0.37843388666539385,
            "unit": "iter/sec",
            "range": "stddev: 1.2170676009404597",
            "extra": "mean: 2.6424694913333346 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.30590941706401137,
            "unit": "iter/sec",
            "range": "stddev: 1.2048659279149738",
            "extra": "mean: 3.2689415369999892 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.2713817253975351,
            "unit": "iter/sec",
            "range": "stddev: 1.446429865917312",
            "extra": "mean: 3.6848464963333263 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.22163482585661154,
            "unit": "iter/sec",
            "range": "stddev: 1.8615099867227538",
            "extra": "mean: 4.511926300999998 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.43768348086344566,
            "unit": "iter/sec",
            "range": "stddev: 0.2556991062715909",
            "extra": "mean: 2.2847560936666773 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.32684504090962524,
            "unit": "iter/sec",
            "range": "stddev: 0.12598693528810076",
            "extra": "mean: 3.0595538399999973 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.2286055887082987,
            "unit": "iter/sec",
            "range": "stddev: 0.5161749066128775",
            "extra": "mean: 4.37434625133335 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-small]",
            "value": 0.409999760330539,
            "unit": "iter/sec",
            "range": "stddev: 0.6248564289155176",
            "extra": "mean: 2.4390258160000067 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-medium]",
            "value": 0.29882296187266566,
            "unit": "iter/sec",
            "range": "stddev: 1.1400178250126625",
            "extra": "mean: 3.3464630486666542 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-large]",
            "value": 0.18905010531454203,
            "unit": "iter/sec",
            "range": "stddev: 1.5447399192353686",
            "extra": "mean: 5.289602977666675 sec\nrounds: 3"
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
        "date": 1675614643262,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.3599403283207139,
            "unit": "iter/sec",
            "range": "stddev: 0.2120626623677142",
            "extra": "mean: 735.3263809999836 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 0.8293396863156548,
            "unit": "iter/sec",
            "range": "stddev: 0.6035397040507811",
            "extra": "mean: 1.2057785446666667 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 0.5055385708806991,
            "unit": "iter/sec",
            "range": "stddev: 0.8943901526069928",
            "extra": "mean: 1.978088434 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.3797609433217276,
            "unit": "iter/sec",
            "range": "stddev: 1.0854884290392652",
            "extra": "mean: 2.633235506666665 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.36056623124807047,
            "unit": "iter/sec",
            "range": "stddev: 1.148595916537146",
            "extra": "mean: 2.773415570666676 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.24070374359024863,
            "unit": "iter/sec",
            "range": "stddev: 1.761129833474358",
            "extra": "mean: 4.154484616999999 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.5613063091637465,
            "unit": "iter/sec",
            "range": "stddev: 0.41482711611963685",
            "extra": "mean: 1.7815584533333226 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.41704074120628787,
            "unit": "iter/sec",
            "range": "stddev: 0.15646806596160173",
            "extra": "mean: 2.3978472633333276 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.28191179705285635,
            "unit": "iter/sec",
            "range": "stddev: 0.5275558132314467",
            "extra": "mean: 3.5472087740000027 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-small]",
            "value": 0.5330792819629968,
            "unit": "iter/sec",
            "range": "stddev: 0.5900190385022381",
            "extra": "mean: 1.8758935750000016 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-medium]",
            "value": 0.37411473655444577,
            "unit": "iter/sec",
            "range": "stddev: 0.9169311844402701",
            "extra": "mean: 2.6729767696666706 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-large]",
            "value": 0.252049138597725,
            "unit": "iter/sec",
            "range": "stddev: 1.0906491082816232",
            "extra": "mean: 3.967480331666669 sec\nrounds: 3"
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
        "date": 1675657385534,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.316825120255322,
            "unit": "iter/sec",
            "range": "stddev: 0.22265625047146265",
            "extra": "mean: 759.402281000007 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 0.9500797139365253,
            "unit": "iter/sec",
            "range": "stddev: 0.4799759126410715",
            "extra": "mean: 1.0525432606666623 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 0.4323191620077535,
            "unit": "iter/sec",
            "range": "stddev: 1.184794999046116",
            "extra": "mean: 2.3131058900000028 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.4005242501963261,
            "unit": "iter/sec",
            "range": "stddev: 0.9547716467091231",
            "extra": "mean: 2.49672772499999 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.3878663914495187,
            "unit": "iter/sec",
            "range": "stddev: 1.0086555215871713",
            "extra": "mean: 2.5782073983333285 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.2774688182782573,
            "unit": "iter/sec",
            "range": "stddev: 1.4211788642924192",
            "extra": "mean: 3.6040085736666754 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.561671819991577,
            "unit": "iter/sec",
            "range": "stddev: 0.31128475160466174",
            "extra": "mean: 1.7803990949999882 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.45480139409889514,
            "unit": "iter/sec",
            "range": "stddev: 0.13097973018603962",
            "extra": "mean: 2.198761949666656 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.2764765342621562,
            "unit": "iter/sec",
            "range": "stddev: 0.33484386865270893",
            "extra": "mean: 3.6169434873333444 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-small]",
            "value": 0.563055530398811,
            "unit": "iter/sec",
            "range": "stddev: 0.42521427448484167",
            "extra": "mean: 1.776023759666657 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-medium]",
            "value": 0.47084297338152453,
            "unit": "iter/sec",
            "range": "stddev: 0.6783724688867449",
            "extra": "mean: 2.1238503206666715 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-large]",
            "value": 0.23849443342818835,
            "unit": "iter/sec",
            "range": "stddev: 1.2982967467785862",
            "extra": "mean: 4.192969981000014 sec\nrounds: 3"
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
        "date": 1675662937867,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.0791251886480269,
            "unit": "iter/sec",
            "range": "stddev: 0.4138033453952857",
            "extra": "mean: 926.6765436666731 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 0.7829690352275008,
            "unit": "iter/sec",
            "range": "stddev: 0.5515430871765664",
            "extra": "mean: 1.2771897163333392 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 0.3347028095968651,
            "unit": "iter/sec",
            "range": "stddev: 1.5549392990250792",
            "extra": "mean: 2.9877251440000046 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.3347667666133464,
            "unit": "iter/sec",
            "range": "stddev: 1.2593946168449484",
            "extra": "mean: 2.9871543406666583 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.3138536911825745,
            "unit": "iter/sec",
            "range": "stddev: 1.2522893698344348",
            "extra": "mean: 3.1861979900000015 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.24860439531485332,
            "unit": "iter/sec",
            "range": "stddev: 2.066332255483505",
            "extra": "mean: 4.022455028333336 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.4502006319566538,
            "unit": "iter/sec",
            "range": "stddev: 0.20136204547042585",
            "extra": "mean: 2.2212318886666558 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.3432816338620998,
            "unit": "iter/sec",
            "range": "stddev: 0.2196838007264146",
            "extra": "mean: 2.913060010666669 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.23262219798986805,
            "unit": "iter/sec",
            "range": "stddev: 1.0230512835492593",
            "extra": "mean: 4.2988158853333305 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-small]",
            "value": 0.40629505574316255,
            "unit": "iter/sec",
            "range": "stddev: 1.0486209227592627",
            "extra": "mean: 2.461265491333336 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-medium]",
            "value": 0.36523594011328453,
            "unit": "iter/sec",
            "range": "stddev: 0.7908159469498203",
            "extra": "mean: 2.737956181666656 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-large]",
            "value": 0.19996463700048142,
            "unit": "iter/sec",
            "range": "stddev: 1.0684771406827656",
            "extra": "mean: 5.000884231333326 sec\nrounds: 3"
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
        "date": 1675861347865,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.4791613580900662,
            "unit": "iter/sec",
            "range": "stddev: 0.21224166086216872",
            "extra": "mean: 676.0587643333432 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 0.9112584834713492,
            "unit": "iter/sec",
            "range": "stddev: 0.4516627771996974",
            "extra": "mean: 1.097383473666658 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 0.5775602500543396,
            "unit": "iter/sec",
            "range": "stddev: 0.8171512389316993",
            "extra": "mean: 1.7314210940000028 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.469375347234984,
            "unit": "iter/sec",
            "range": "stddev: 0.654465652714062",
            "extra": "mean: 2.1304911003333302 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.39060769913055116,
            "unit": "iter/sec",
            "range": "stddev: 0.9303410071097887",
            "extra": "mean: 2.560113388 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.29841581325169464,
            "unit": "iter/sec",
            "range": "stddev: 1.4166441471952282",
            "extra": "mean: 3.351028851666664 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.565262055739641,
            "unit": "iter/sec",
            "range": "stddev: 0.2713054551874183",
            "extra": "mean: 1.769090972666665 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.4829319035398149,
            "unit": "iter/sec",
            "range": "stddev: 0.18556229767019503",
            "extra": "mean: 2.0706853133333234 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.29395473512554665,
            "unit": "iter/sec",
            "range": "stddev: 0.33712666037252714",
            "extra": "mean: 3.4018843056666697 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-small]",
            "value": 0.5802276807733148,
            "unit": "iter/sec",
            "range": "stddev: 0.5300249806229289",
            "extra": "mean: 1.7234613809999928 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-medium]",
            "value": 0.41457136494822977,
            "unit": "iter/sec",
            "range": "stddev: 0.6832229651136964",
            "extra": "mean: 2.4121299359999853 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-large]",
            "value": 0.24347597405006016,
            "unit": "iter/sec",
            "range": "stddev: 1.28098000317923",
            "extra": "mean: 4.1071814330000125 sec\nrounds: 3"
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
          "id": "c6992c49ce83a484c91caaabb43d1f724fdd0015",
          "message": "prepare release 0.2.3",
          "timestamp": "2023-02-08T21:32:37+08:00",
          "tree_id": "56e0d032390faa4fb19eaa01a4767cd0ec8e078e",
          "url": "https://github.com/Yiling-J/cacheme/commit/c6992c49ce83a484c91caaabb43d1f724fdd0015"
        },
        "date": 1675863692589,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 0.6361863243141144,
            "unit": "iter/sec",
            "range": "stddev: 0.7602599742496492",
            "extra": "mean: 1.5718665456666656 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 0.5977008808033966,
            "unit": "iter/sec",
            "range": "stddev: 0.7118412846692376",
            "extra": "mean: 1.6730776750000018 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 0.3395298233063282,
            "unit": "iter/sec",
            "range": "stddev: 1.4286595952003047",
            "extra": "mean: 2.945249375333333 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.2547179828249609,
            "unit": "iter/sec",
            "range": "stddev: 1.4317469230265891",
            "extra": "mean: 3.925910487000001 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.22458905210116986,
            "unit": "iter/sec",
            "range": "stddev: 1.6302230209686768",
            "extra": "mean: 4.452576786999988 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.1688840316715488,
            "unit": "iter/sec",
            "range": "stddev: 2.574703409541711",
            "extra": "mean: 5.921222924999995 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.33703516354594254,
            "unit": "iter/sec",
            "range": "stddev: 0.296832977169378",
            "extra": "mean: 2.9670494599999984 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.2452394599964674,
            "unit": "iter/sec",
            "range": "stddev: 0.3232829784546295",
            "extra": "mean: 4.0776472106666874 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.16247807443889517,
            "unit": "iter/sec",
            "range": "stddev: 0.9586117854553015",
            "extra": "mean: 6.154676583000007 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-small]",
            "value": 0.32401626363734287,
            "unit": "iter/sec",
            "range": "stddev: 0.9501436950649439",
            "extra": "mean: 3.0862648336666703 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-medium]",
            "value": 0.23543255701314314,
            "unit": "iter/sec",
            "range": "stddev: 1.0167322401774188",
            "extra": "mean: 4.247500909333344 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-large]",
            "value": 0.1364108113579315,
            "unit": "iter/sec",
            "range": "stddev: 2.0090874631862565",
            "extra": "mean: 7.330797244333344 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c4505167dc15471d80bc66b2166043bb069c0329",
          "message": "Bump cryptography from 39.0.0 to 39.0.1 (#15)\n\nBumps [cryptography](https://github.com/pyca/cryptography) from 39.0.0 to 39.0.1.\r\n- [Release notes](https://github.com/pyca/cryptography/releases)\r\n- [Changelog](https://github.com/pyca/cryptography/blob/main/CHANGELOG.rst)\r\n- [Commits](https://github.com/pyca/cryptography/compare/39.0.0...39.0.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: cryptography\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-02-08T21:41:54+08:00",
          "tree_id": "c05715d24551ac45750b1ab97f6c491fb6d9fef6",
          "url": "https://github.com/Yiling-J/cacheme/commit/c4505167dc15471d80bc66b2166043bb069c0329"
        },
        "date": 1675864249490,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.3446588311062737,
            "unit": "iter/sec",
            "range": "stddev: 0.24254702654040383",
            "extra": "mean: 743.6830643333394 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 1.095318480261483,
            "unit": "iter/sec",
            "range": "stddev: 0.36393526575888097",
            "extra": "mean: 912.9764703333336 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 0.5459679271370514,
            "unit": "iter/sec",
            "range": "stddev: 0.8651128372572757",
            "extra": "mean: 1.8316094229999986 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.42813991729693385,
            "unit": "iter/sec",
            "range": "stddev: 0.7959584203175928",
            "extra": "mean: 2.335685040333336 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.3917790745366209,
            "unit": "iter/sec",
            "range": "stddev: 1.0844072705841012",
            "extra": "mean: 2.5524589366666817 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.2899608665489625,
            "unit": "iter/sec",
            "range": "stddev: 1.4694138399807923",
            "extra": "mean: 3.4487412453333284 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.5790657888276128,
            "unit": "iter/sec",
            "range": "stddev: 0.2940633274414166",
            "extra": "mean: 1.7269194956666638 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.4832300446133417,
            "unit": "iter/sec",
            "range": "stddev: 0.20608350169522383",
            "extra": "mean: 2.0694077513333298 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.30605854198850463,
            "unit": "iter/sec",
            "range": "stddev: 0.390360391616196",
            "extra": "mean: 3.2673487676666753 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-small]",
            "value": 0.5705111788035114,
            "unit": "iter/sec",
            "range": "stddev: 0.47448159955968255",
            "extra": "mean: 1.7528140326666726 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-medium]",
            "value": 0.42429273042000687,
            "unit": "iter/sec",
            "range": "stddev: 0.8051004162863424",
            "extra": "mean: 2.3568633829999897 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-large]",
            "value": 0.25091768415271515,
            "unit": "iter/sec",
            "range": "stddev: 1.0605911793077807",
            "extra": "mean: 3.9853707536666625 sec\nrounds: 3"
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
          "id": "8f845e8aed56787763c7946461eec0c4570f85b7",
          "message": "Merge branch 'master' of github.com:Yiling-J/cacheme",
          "timestamp": "2023-02-08T22:24:44+08:00",
          "tree_id": "cd4465a5fb5305198ffaa41759bd5769b528756d",
          "url": "https://github.com/Yiling-J/cacheme/commit/8f845e8aed56787763c7946461eec0c4570f85b7"
        },
        "date": 1675866734661,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 0.9637553902248631,
            "unit": "iter/sec",
            "range": "stddev: 0.35250908005758",
            "extra": "mean: 1.0376076856666714 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 0.7805363858688356,
            "unit": "iter/sec",
            "range": "stddev: 0.3773146348681985",
            "extra": "mean: 1.2811702543333372 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 0.4282030319229133,
            "unit": "iter/sec",
            "range": "stddev: 1.1470457793750322",
            "extra": "mean: 2.335340773999993 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.328855381873468,
            "unit": "iter/sec",
            "range": "stddev: 1.0597312595357775",
            "extra": "mean: 3.0408503406666605 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.29290171569528173,
            "unit": "iter/sec",
            "range": "stddev: 1.3021578339166346",
            "extra": "mean: 3.414114518333321 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.20395568857241692,
            "unit": "iter/sec",
            "range": "stddev: 2.168847748454519",
            "extra": "mean: 4.903025784666643 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.4398012655185538,
            "unit": "iter/sec",
            "range": "stddev: 0.4856938165494025",
            "extra": "mean: 2.273754257666667 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.33208336093610274,
            "unit": "iter/sec",
            "range": "stddev: 0.2100632313046075",
            "extra": "mean: 3.011292095999996 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.22387880281010264,
            "unit": "iter/sec",
            "range": "stddev: 1.011169106742057",
            "extra": "mean: 4.46670246333332 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-small]",
            "value": 0.49812891025466255,
            "unit": "iter/sec",
            "range": "stddev: 0.4897122550445332",
            "extra": "mean: 2.0075124719999926 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-medium]",
            "value": 0.3174583283235397,
            "unit": "iter/sec",
            "range": "stddev: 0.8411791923630241",
            "extra": "mean: 3.150019737333347 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mysql-large]",
            "value": 0.19357574565645805,
            "unit": "iter/sec",
            "range": "stddev: 1.4353527153979784",
            "extra": "mean: 5.165936448333336 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}