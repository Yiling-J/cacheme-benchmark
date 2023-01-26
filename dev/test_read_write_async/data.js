window.BENCHMARK_DATA = {
  "lastUpdate": 1674724407850,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark: test_read_write_async": [
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
        "date": 1674701837258,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 4.770884938040964,
            "unit": "iter/sec",
            "range": "stddev: 0.030296282808699945",
            "extra": "mean: 209.60471966666697 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 4.605180322214143,
            "unit": "iter/sec",
            "range": "stddev: 0.014118453491646235",
            "extra": "mean: 217.14676299997868 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 4.256639848430625,
            "unit": "iter/sec",
            "range": "stddev: 0.015859856147941935",
            "extra": "mean: 234.92708700001685 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 4.241354168474449,
            "unit": "iter/sec",
            "range": "stddev: 0.028443426875212226",
            "extra": "mean: 235.77375533335498 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 4.307408542686257,
            "unit": "iter/sec",
            "range": "stddev: 0.04297498809565349",
            "extra": "mean: 232.15815033332396 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 4.2963793723611845,
            "unit": "iter/sec",
            "range": "stddev: 0.03185625051367399",
            "extra": "mean: 232.7541199999814 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-small]",
            "value": 1.160881951272618,
            "unit": "iter/sec",
            "range": "stddev: 0.0897177116569679",
            "extra": "mean: 861.4140299999917 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-medium]",
            "value": 1.0584869516063624,
            "unit": "iter/sec",
            "range": "stddev: 0.1370205252151991",
            "extra": "mean: 944.7447590000024 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-large]",
            "value": 0.8255810620316945,
            "unit": "iter/sec",
            "range": "stddev: 0.03795558988323962",
            "extra": "mean: 1.21126809466665 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 1.914515920913003,
            "unit": "iter/sec",
            "range": "stddev: 0.04487607068522539",
            "extra": "mean: 522.3252463333475 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.6364804644064785,
            "unit": "iter/sec",
            "range": "stddev: 0.06143379817424561",
            "extra": "mean: 611.0674839999888 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.0474397614783293,
            "unit": "iter/sec",
            "range": "stddev: 0.22896886931628055",
            "extra": "mean: 954.7088403333343 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.5703423081149241,
            "unit": "iter/sec",
            "range": "stddev: 0.11188801577728984",
            "extra": "mean: 1.7533330173333372 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.5183734216891998,
            "unit": "iter/sec",
            "range": "stddev: 0.1486512648367134",
            "extra": "mean: 1.9291112509999948 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.49767839820547205,
            "unit": "iter/sec",
            "range": "stddev: 0.039529535013907324",
            "extra": "mean: 2.009329727000003 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.597281459341961,
            "unit": "iter/sec",
            "range": "stddev: 0.7729966069268788",
            "extra": "mean: 1.674252539333338 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.5666972474131976,
            "unit": "iter/sec",
            "range": "stddev: 0.9797941650282092",
            "extra": "mean: 1.7646106533333257 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.3691304625593542,
            "unit": "iter/sec",
            "range": "stddev: 0.715070874849521",
            "extra": "mean: 2.7090692896666724 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 0.7254538749452341,
            "unit": "iter/sec",
            "range": "stddev: 0.17527601876876842",
            "extra": "mean: 1.3784473893333218 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.48739667422020316,
            "unit": "iter/sec",
            "range": "stddev: 0.2857924435612744",
            "extra": "mean: 2.0517169133333177 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.2686137453709942,
            "unit": "iter/sec",
            "range": "stddev: 0.18658965076307502",
            "extra": "mean: 3.722817678666653 sec\nrounds: 3"
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
        "date": 1674702455260,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 5.884180890814323,
            "unit": "iter/sec",
            "range": "stddev: 0.02613432017827645",
            "extra": "mean: 169.94718866666383 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.1499630734694515,
            "unit": "iter/sec",
            "range": "stddev: 0.015250429480767666",
            "extra": "mean: 162.6026023333272 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.279975382245423,
            "unit": "iter/sec",
            "range": "stddev: 0.014119335969934107",
            "extra": "mean: 159.23629299999695 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.542095949490799,
            "unit": "iter/sec",
            "range": "stddev: 0.022532769918873596",
            "extra": "mean: 180.4371503333281 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.894398734430299,
            "unit": "iter/sec",
            "range": "stddev: 0.033526199524121225",
            "extra": "mean: 169.6525879999958 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.900334372145497,
            "unit": "iter/sec",
            "range": "stddev: 0.023061439975539152",
            "extra": "mean: 169.48192033333478 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-small]",
            "value": 2.322051049735022,
            "unit": "iter/sec",
            "range": "stddev: 0.04525305932697373",
            "extra": "mean: 430.65375333333594 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-medium]",
            "value": 1.845341285038521,
            "unit": "iter/sec",
            "range": "stddev: 0.013662550180761663",
            "extra": "mean: 541.9051793333315 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-large]",
            "value": 1.4738898873608586,
            "unit": "iter/sec",
            "range": "stddev: 0.029979623696696524",
            "extra": "mean: 678.476735999998 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.687111905130005,
            "unit": "iter/sec",
            "range": "stddev: 0.03301481451252299",
            "extra": "mean: 372.14676399999763 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.14931692716355,
            "unit": "iter/sec",
            "range": "stddev: 0.054046493741661226",
            "extra": "mean: 465.26409733333196 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.9397409327917343,
            "unit": "iter/sec",
            "range": "stddev: 0.053771818688155046",
            "extra": "mean: 515.5327616666673 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.8284248619485569,
            "unit": "iter/sec",
            "range": "stddev: 0.04606407167362912",
            "extra": "mean: 1.2071100783333293 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.8291677186294446,
            "unit": "iter/sec",
            "range": "stddev: 0.06638596766915578",
            "extra": "mean: 1.2060286206666717 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.7263516953623144,
            "unit": "iter/sec",
            "range": "stddev: 0.05026767577698694",
            "extra": "mean: 1.3767435339999945 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9110991654672388,
            "unit": "iter/sec",
            "range": "stddev: 0.6916858941952865",
            "extra": "mean: 1.097575366000001 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.7852652625114468,
            "unit": "iter/sec",
            "range": "stddev: 0.8277545449394215",
            "extra": "mean: 1.2734550319999964 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.6039420585767786,
            "unit": "iter/sec",
            "range": "stddev: 0.7604114599025289",
            "extra": "mean: 1.6557879779999969 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 0.921266028429338,
            "unit": "iter/sec",
            "range": "stddev: 0.026090638970147583",
            "extra": "mean: 1.08546279700001 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.7665208963572663,
            "unit": "iter/sec",
            "range": "stddev: 0.07377967395870198",
            "extra": "mean: 1.304595875666659 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.371258767208034,
            "unit": "iter/sec",
            "range": "stddev: 0.35147800632575044",
            "extra": "mean: 2.6935390846666585 sec\nrounds: 3"
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
        "date": 1674703537396,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 5.883177197372271,
            "unit": "iter/sec",
            "range": "stddev: 0.02835106715632594",
            "extra": "mean: 169.97618233335743 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 5.883038753535493,
            "unit": "iter/sec",
            "range": "stddev: 0.01421120960752088",
            "extra": "mean: 169.98018233332837 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 5.816072748058048,
            "unit": "iter/sec",
            "range": "stddev: 0.01694081421008497",
            "extra": "mean: 171.93732666667452 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.260213734652696,
            "unit": "iter/sec",
            "range": "stddev: 0.023098810463937667",
            "extra": "mean: 190.1063436666656 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.623918724296762,
            "unit": "iter/sec",
            "range": "stddev: 0.03615459548935309",
            "extra": "mean: 177.81195799998764 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.56406238871897,
            "unit": "iter/sec",
            "range": "stddev: 0.022952917757588415",
            "extra": "mean: 179.724799999993 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-small]",
            "value": 1.8075279058222844,
            "unit": "iter/sec",
            "range": "stddev: 0.06413544915463916",
            "extra": "mean: 553.2418043333488 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-medium]",
            "value": 1.567661915506311,
            "unit": "iter/sec",
            "range": "stddev: 0.045617293286442075",
            "extra": "mean: 637.8926413333375 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-large]",
            "value": 1.1449139508931243,
            "unit": "iter/sec",
            "range": "stddev: 0.04286236353470467",
            "extra": "mean: 873.4280853333303 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 1.6510736137543662,
            "unit": "iter/sec",
            "range": "stddev: 0.13025983618858353",
            "extra": "mean: 605.6665140000064 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.2151008812725186,
            "unit": "iter/sec",
            "range": "stddev: 0.0466321100549959",
            "extra": "mean: 451.44670766666195 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.8085944982070719,
            "unit": "iter/sec",
            "range": "stddev: 0.03652877332521419",
            "extra": "mean: 552.9155379999983 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.7566687576526702,
            "unit": "iter/sec",
            "range": "stddev: 0.0931007909207645",
            "extra": "mean: 1.3215822510000141 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.7529675431616321,
            "unit": "iter/sec",
            "range": "stddev: 0.07700171865015266",
            "extra": "mean: 1.328078492999983 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.7002673756458679,
            "unit": "iter/sec",
            "range": "stddev: 0.05998978131991637",
            "extra": "mean: 1.4280259723333302 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.8685818938151951,
            "unit": "iter/sec",
            "range": "stddev: 0.782519654911755",
            "extra": "mean: 1.1513019176666905 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.6529686548204346,
            "unit": "iter/sec",
            "range": "stddev: 0.9519376575522888",
            "extra": "mean: 1.5314670813333275 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.5569626840270564,
            "unit": "iter/sec",
            "range": "stddev: 0.8321398481632104",
            "extra": "mean: 1.7954524220000014 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 0.9366207466886414,
            "unit": "iter/sec",
            "range": "stddev: 0.10062417351981257",
            "extra": "mean: 1.0676680006666857 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.7035681799601023,
            "unit": "iter/sec",
            "range": "stddev: 0.29641993317006404",
            "extra": "mean: 1.4213263596666745 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.360455075311165,
            "unit": "iter/sec",
            "range": "stddev: 0.23164474716319905",
            "extra": "mean: 2.77427082733332 sec\nrounds: 3"
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
        "date": 1674724407555,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 6.050406944623239,
            "unit": "iter/sec",
            "range": "stddev: 0.018808399687953368",
            "extra": "mean: 165.2781389999992 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.206015704094959,
            "unit": "iter/sec",
            "range": "stddev: 0.011628540780914397",
            "extra": "mean: 161.1339783333392 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.150743302566211,
            "unit": "iter/sec",
            "range": "stddev: 0.016158293781270774",
            "extra": "mean: 162.5819760000032 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.62060726708353,
            "unit": "iter/sec",
            "range": "stddev: 0.026051022079532544",
            "extra": "mean: 177.91671833333567 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.888467768573748,
            "unit": "iter/sec",
            "range": "stddev: 0.030991684167509068",
            "extra": "mean: 169.82346499999798 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.773413396285038,
            "unit": "iter/sec",
            "range": "stddev: 0.021889870442548028",
            "extra": "mean: 173.20775966665755 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-small]",
            "value": 2.4492927754060525,
            "unit": "iter/sec",
            "range": "stddev: 0.03040154694128344",
            "extra": "mean: 408.2811210000064 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-medium]",
            "value": 2.053388666590973,
            "unit": "iter/sec",
            "range": "stddev: 0.03165670251088429",
            "extra": "mean: 486.9998633333239 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-large]",
            "value": 1.2146417783386565,
            "unit": "iter/sec",
            "range": "stddev: 0.24761939994296464",
            "extra": "mean: 823.2879996666705 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.8799709993832527,
            "unit": "iter/sec",
            "range": "stddev: 0.04265089120895094",
            "extra": "mean: 347.22571866666385 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.7043224968616477,
            "unit": "iter/sec",
            "range": "stddev: 0.031091666257584912",
            "extra": "mean: 369.7783829999916 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.672861395089173,
            "unit": "iter/sec",
            "range": "stddev: 0.0822349047978751",
            "extra": "mean: 597.778156000004 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.9043038737732902,
            "unit": "iter/sec",
            "range": "stddev: 0.045263297894502647",
            "extra": "mean: 1.1058229749999953 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.8882892707330224,
            "unit": "iter/sec",
            "range": "stddev: 0.05245255006687264",
            "extra": "mean: 1.1257594039999976 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.7945704532464113,
            "unit": "iter/sec",
            "range": "stddev: 0.018248434774695437",
            "extra": "mean: 1.2585416383333363 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9343650184899561,
            "unit": "iter/sec",
            "range": "stddev: 0.8284461040241525",
            "extra": "mean: 1.0702455466666738 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.8734501771917383,
            "unit": "iter/sec",
            "range": "stddev: 0.764266067409476",
            "extra": "mean: 1.1448849929999863 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.5267010112009824,
            "unit": "iter/sec",
            "range": "stddev: 0.513155858836053",
            "extra": "mean: 1.898610366666664 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 0.8627757357807772,
            "unit": "iter/sec",
            "range": "stddev: 0.1019696544966002",
            "extra": "mean: 1.159049749 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.9143750066103494,
            "unit": "iter/sec",
            "range": "stddev: 0.09793879849029899",
            "extra": "mean: 1.0936431910000124 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.4381528664472743,
            "unit": "iter/sec",
            "range": "stddev: 0.23219302204580997",
            "extra": "mean: 2.28230847399999 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}