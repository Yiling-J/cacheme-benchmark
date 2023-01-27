window.BENCHMARK_DATA = {
  "lastUpdate": 1674821324508,
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
      }
    ]
  }
}