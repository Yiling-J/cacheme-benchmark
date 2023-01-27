window.BENCHMARK_DATA = {
  "lastUpdate": 1674787087747,
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
        "date": 1674739072415,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 6.099146133772734,
            "unit": "iter/sec",
            "range": "stddev: 0.019677242672782334",
            "extra": "mean: 163.9573766666634 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.185303886206442,
            "unit": "iter/sec",
            "range": "stddev: 0.010117586545829489",
            "extra": "mean: 161.67354400000514 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.166678765690184,
            "unit": "iter/sec",
            "range": "stddev: 0.01277397749643648",
            "extra": "mean: 162.1618440000058 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.661389807261914,
            "unit": "iter/sec",
            "range": "stddev: 0.02527225516643699",
            "extra": "mean: 176.63507266666065 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.871034231840062,
            "unit": "iter/sec",
            "range": "stddev: 0.03031843989215386",
            "extra": "mean: 170.32774133333342 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.847818454366812,
            "unit": "iter/sec",
            "range": "stddev: 0.020889314467582933",
            "extra": "mean: 171.00394066667 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-small]",
            "value": 2.3367280282177676,
            "unit": "iter/sec",
            "range": "stddev: 0.04582587631623954",
            "extra": "mean: 427.9488190000033 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-medium]",
            "value": 1.9001910043494916,
            "unit": "iter/sec",
            "range": "stddev: 0.03828100190005346",
            "extra": "mean: 526.2628849999942 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-large]",
            "value": 1.4866028952610149,
            "unit": "iter/sec",
            "range": "stddev: 0.012485119125833647",
            "extra": "mean: 672.6745946666691 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.9623142380878615,
            "unit": "iter/sec",
            "range": "stddev: 0.042787169113866874",
            "extra": "mean: 337.57391000000325 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.7954436694633356,
            "unit": "iter/sec",
            "range": "stddev: 0.03653233746585289",
            "extra": "mean: 357.72496899999356 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 2.2977967188599555,
            "unit": "iter/sec",
            "range": "stddev: 0.030101291475912832",
            "extra": "mean: 435.1995073333323 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.972850667764609,
            "unit": "iter/sec",
            "range": "stddev: 0.038630361968626376",
            "extra": "mean: 1.027906988333342 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.866962058017597,
            "unit": "iter/sec",
            "range": "stddev: 0.08036560982379222",
            "extra": "mean: 1.1534530153333453 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.80014495810131,
            "unit": "iter/sec",
            "range": "stddev: 0.04416171330811993",
            "extra": "mean: 1.2497735439999929 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9922233112178133,
            "unit": "iter/sec",
            "range": "stddev: 0.8209936373847081",
            "extra": "mean: 1.0078376396666613 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.8099563003467399,
            "unit": "iter/sec",
            "range": "stddev: 0.9481380841893998",
            "extra": "mean: 1.2346345099999876 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.6354765313648197,
            "unit": "iter/sec",
            "range": "stddev: 0.7760299557778001",
            "extra": "mean: 1.573622235666657 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.243436145647688,
            "unit": "iter/sec",
            "range": "stddev: 0.17340395969552266",
            "extra": "mean: 804.2230423333194 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.7848025791193189,
            "unit": "iter/sec",
            "range": "stddev: 0.24650031842578485",
            "extra": "mean: 1.2742058023333318 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.45068415271784296,
            "unit": "iter/sec",
            "range": "stddev: 0.05022249015512722",
            "extra": "mean: 2.2188488189999966 sec\nrounds: 3"
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
        "date": 1674783583061,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 4.174333078665989,
            "unit": "iter/sec",
            "range": "stddev: 0.03930015603622273",
            "extra": "mean: 239.55922566667218 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 3.9143597072407568,
            "unit": "iter/sec",
            "range": "stddev: 0.032178856770747284",
            "extra": "mean: 255.46962333334022 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 3.944780707194644,
            "unit": "iter/sec",
            "range": "stddev: 0.04379098941594241",
            "extra": "mean: 253.4995160000051 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 3.986965345090102,
            "unit": "iter/sec",
            "range": "stddev: 0.034781535209119654",
            "extra": "mean: 250.81732933332052 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 4.0228548791467915,
            "unit": "iter/sec",
            "range": "stddev: 0.05745581260977843",
            "extra": "mean: 248.57968533333974 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 4.252074544649669,
            "unit": "iter/sec",
            "range": "stddev: 0.039110784161674766",
            "extra": "mean: 235.17931999999556 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-small]",
            "value": 0.9944235735782382,
            "unit": "iter/sec",
            "range": "stddev: 0.17229327166997452",
            "extra": "mean: 1.0056076973333365 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-medium]",
            "value": 0.9085002058360139,
            "unit": "iter/sec",
            "range": "stddev: 0.04842217619861022",
            "extra": "mean: 1.1007152156666677 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-large]",
            "value": 0.703817332188028,
            "unit": "iter/sec",
            "range": "stddev: 0.08136052356879321",
            "extra": "mean: 1.4208232083333314 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 1.7448436080708603,
            "unit": "iter/sec",
            "range": "stddev: 0.09273192561646043",
            "extra": "mean: 573.1172670000054 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.7248494453087635,
            "unit": "iter/sec",
            "range": "stddev: 0.0621263767469493",
            "extra": "mean: 579.7607453333361 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.070741344394843,
            "unit": "iter/sec",
            "range": "stddev: 0.26932746498228266",
            "extra": "mean: 933.9323686666603 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.5835500791184828,
            "unit": "iter/sec",
            "range": "stddev: 0.11118774981956545",
            "extra": "mean: 1.7136489836666822 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.5711632028033538,
            "unit": "iter/sec",
            "range": "stddev: 0.012560486409622451",
            "extra": "mean: 1.7508130689999841 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.5274905804028992,
            "unit": "iter/sec",
            "range": "stddev: 0.08072853889550974",
            "extra": "mean: 1.8957684499999914 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.6149030452668769,
            "unit": "iter/sec",
            "range": "stddev: 1.0131874622466004",
            "extra": "mean: 1.6262726419999847 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.478151019995306,
            "unit": "iter/sec",
            "range": "stddev: 1.030826535583765",
            "extra": "mean: 2.0913894526666845 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.4200036166343417,
            "unit": "iter/sec",
            "range": "stddev: 0.9461434659690175",
            "extra": "mean: 2.380931878666672 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 0.6333715756053182,
            "unit": "iter/sec",
            "range": "stddev: 0.14340256342259966",
            "extra": "mean: 1.5788520333333433 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.5496395893299617,
            "unit": "iter/sec",
            "range": "stddev: 0.16844668852892186",
            "extra": "mean: 1.8193740396667029 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.281550997364016,
            "unit": "iter/sec",
            "range": "stddev: 0.05080889388919385",
            "extra": "mean: 3.5517544223333175 sec\nrounds: 3"
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
        "date": 1674783851788,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 4.507535923934338,
            "unit": "iter/sec",
            "range": "stddev: 0.033345508012724276",
            "extra": "mean: 221.8507000000045 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 4.419268031597955,
            "unit": "iter/sec",
            "range": "stddev: 0.020456289798719853",
            "extra": "mean: 226.28181700000027 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 4.684480618017571,
            "unit": "iter/sec",
            "range": "stddev: 0.015540794956686263",
            "extra": "mean: 213.47083733333724 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 4.181366999901568,
            "unit": "iter/sec",
            "range": "stddev: 0.035692349981867544",
            "extra": "mean: 239.15623766666272 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 4.452271584060888,
            "unit": "iter/sec",
            "range": "stddev: 0.039595873632750925",
            "extra": "mean: 224.60444766666873 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 4.286081382461926,
            "unit": "iter/sec",
            "range": "stddev: 0.04398802781769457",
            "extra": "mean: 233.31334866665543 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-small]",
            "value": 1.1483965502066613,
            "unit": "iter/sec",
            "range": "stddev: 0.10175023601677746",
            "extra": "mean: 870.7793486666636 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-medium]",
            "value": 1.1008872297149912,
            "unit": "iter/sec",
            "range": "stddev: 0.08063150899108637",
            "extra": "mean: 908.3582523333386 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-large]",
            "value": 0.7980084859791439,
            "unit": "iter/sec",
            "range": "stddev: 0.060435209840692686",
            "extra": "mean: 1.253119506333339 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 1.748012339829761,
            "unit": "iter/sec",
            "range": "stddev: 0.07686770768285103",
            "extra": "mean: 572.0783413333285 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.2500643731066332,
            "unit": "iter/sec",
            "range": "stddev: 0.26781807110290906",
            "extra": "mean: 799.9588033333206 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.251904828489006,
            "unit": "iter/sec",
            "range": "stddev: 0.1428197643012286",
            "extra": "mean: 798.7827646666688 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.5842718303641397,
            "unit": "iter/sec",
            "range": "stddev: 0.02926830089699022",
            "extra": "mean: 1.711532112333335 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.5679542928953397,
            "unit": "iter/sec",
            "range": "stddev: 0.02249830442363256",
            "extra": "mean: 1.7607050646666664 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.5337577726747622,
            "unit": "iter/sec",
            "range": "stddev: 0.08532088606697055",
            "extra": "mean: 1.873509016999994 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.6603577321603855,
            "unit": "iter/sec",
            "range": "stddev: 0.8302886205892407",
            "extra": "mean: 1.5143307199999942 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.5721802733171333,
            "unit": "iter/sec",
            "range": "stddev: 0.9018982828630255",
            "extra": "mean: 1.7477009373333392 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.4014612300742449,
            "unit": "iter/sec",
            "range": "stddev: 0.7907809059469945",
            "extra": "mean: 2.490900553000008 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 0.7300452103225286,
            "unit": "iter/sec",
            "range": "stddev: 0.27522208274231763",
            "extra": "mean: 1.369778180666657 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.5065839269217832,
            "unit": "iter/sec",
            "range": "stddev: 0.18037565752564208",
            "extra": "mean: 1.9740065700000002 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.2724752235098111,
            "unit": "iter/sec",
            "range": "stddev: 0.36096006007206827",
            "extra": "mean: 3.6700584630000037 sec\nrounds: 3"
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
        "date": 1674784557026,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 6.134650963113995,
            "unit": "iter/sec",
            "range": "stddev: 0.018924766605262773",
            "extra": "mean: 163.00845899998725 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.220114694394169,
            "unit": "iter/sec",
            "range": "stddev: 0.010701060383543922",
            "extra": "mean: 160.7687396666885 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.198167706339825,
            "unit": "iter/sec",
            "range": "stddev: 0.012708173390051482",
            "extra": "mean: 161.3380030000068 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.7036416325916255,
            "unit": "iter/sec",
            "range": "stddev: 0.02394735998583283",
            "extra": "mean: 175.32658333332543 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.875691025086786,
            "unit": "iter/sec",
            "range": "stddev: 0.030638767243007507",
            "extra": "mean: 170.19274766668482 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.833371822244738,
            "unit": "iter/sec",
            "range": "stddev: 0.02217270450549416",
            "extra": "mean: 171.42744033333202 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-small]",
            "value": 2.4409862982516537,
            "unit": "iter/sec",
            "range": "stddev: 0.02811842438964102",
            "extra": "mean: 409.6704683333314 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-medium]",
            "value": 2.167100596295449,
            "unit": "iter/sec",
            "range": "stddev: 0.05702297314657468",
            "extra": "mean: 461.4460453333133 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-large]",
            "value": 1.5608116700165278,
            "unit": "iter/sec",
            "range": "stddev: 0.01856226521356176",
            "extra": "mean: 640.6922880000062 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.7890773631675354,
            "unit": "iter/sec",
            "range": "stddev: 0.03416321428677117",
            "extra": "mean: 358.5415066666731 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.7712848191050115,
            "unit": "iter/sec",
            "range": "stddev: 0.0331055159289097",
            "extra": "mean: 360.843458999985 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 2.325979532724565,
            "unit": "iter/sec",
            "range": "stddev: 0.015335195793164133",
            "extra": "mean: 429.9263969999932 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.9536382948039046,
            "unit": "iter/sec",
            "range": "stddev: 0.05054830089190684",
            "extra": "mean: 1.0486156076666664 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.9554996665893907,
            "unit": "iter/sec",
            "range": "stddev: 0.11883840023513709",
            "extra": "mean: 1.0465728403333212 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.8062826882270864,
            "unit": "iter/sec",
            "range": "stddev: 0.016428872775750163",
            "extra": "mean: 1.2402597929999881 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 1.0283725508398718,
            "unit": "iter/sec",
            "range": "stddev: 0.7797971339432107",
            "extra": "mean: 972.4102410000152 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.7406461982593434,
            "unit": "iter/sec",
            "range": "stddev: 0.7700566150667937",
            "extra": "mean: 1.3501723256666764 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.6206243698544794,
            "unit": "iter/sec",
            "range": "stddev: 0.8182382410666021",
            "extra": "mean: 1.6112805886666592 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.2689784375539466,
            "unit": "iter/sec",
            "range": "stddev: 0.1359285566838565",
            "extra": "mean: 788.0354546666505 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.737682799279179,
            "unit": "iter/sec",
            "range": "stddev: 0.1989958995580054",
            "extra": "mean: 1.355596200666658 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.44822587682078097,
            "unit": "iter/sec",
            "range": "stddev: 0.06856773497640284",
            "extra": "mean: 2.2310180016666927 sec\nrounds: 3"
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
        "date": 1674787087500,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 6.023506904352242,
            "unit": "iter/sec",
            "range": "stddev: 0.021321828443398298",
            "extra": "mean: 166.01624533333847 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.094509595869387,
            "unit": "iter/sec",
            "range": "stddev: 0.011198302465971357",
            "extra": "mean: 164.08211099999903 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.023245704892354,
            "unit": "iter/sec",
            "range": "stddev: 0.013139362627476803",
            "extra": "mean: 166.02344466667773 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.503213533669782,
            "unit": "iter/sec",
            "range": "stddev: 0.02634396965682595",
            "extra": "mean: 181.71201133334117 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.731873230337802,
            "unit": "iter/sec",
            "range": "stddev: 0.031208480202123873",
            "extra": "mean: 174.46303500000226 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.688014282285394,
            "unit": "iter/sec",
            "range": "stddev: 0.023083192233094713",
            "extra": "mean: 175.80827866666482 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-small]",
            "value": 2.5577589044708295,
            "unit": "iter/sec",
            "range": "stddev: 0.03506088979026687",
            "extra": "mean: 390.9672636666623 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-medium]",
            "value": 2.03130614360904,
            "unit": "iter/sec",
            "range": "stddev: 0.04603340973992417",
            "extra": "mean: 492.2940853333368 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-large]",
            "value": 1.4373075157475268,
            "unit": "iter/sec",
            "range": "stddev: 0.03841986668765969",
            "extra": "mean: 695.7453356666766 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.7054039705736477,
            "unit": "iter/sec",
            "range": "stddev: 0.051868415748278385",
            "extra": "mean: 369.6305656666728 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.781730895553455,
            "unit": "iter/sec",
            "range": "stddev: 0.03042122438795005",
            "extra": "mean: 359.4884039999992 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 2.271063378143306,
            "unit": "iter/sec",
            "range": "stddev: 0.02205620068861105",
            "extra": "mean: 440.32236599999425 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.9419828078717788,
            "unit": "iter/sec",
            "range": "stddev: 0.022992037855550238",
            "extra": "mean: 1.061590499999994 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.8730663318152243,
            "unit": "iter/sec",
            "range": "stddev: 0.030704163945042218",
            "extra": "mean: 1.1453883440000066 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.8591929624961677,
            "unit": "iter/sec",
            "range": "stddev: 0.06772632779903481",
            "extra": "mean: 1.1638829036666607 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 1.0194770176895027,
            "unit": "iter/sec",
            "range": "stddev: 0.7672978694061253",
            "extra": "mean: 980.8950890000006 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.8028015073051056,
            "unit": "iter/sec",
            "range": "stddev: 0.7398452956125615",
            "extra": "mean: 1.245637920333337 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.6286943302178019,
            "unit": "iter/sec",
            "range": "stddev: 0.818321919185343",
            "extra": "mean: 1.5905980886666573 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.2380815379172991,
            "unit": "iter/sec",
            "range": "stddev: 0.14198272287601071",
            "extra": "mean: 807.7012453333244 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.8074388514567378,
            "unit": "iter/sec",
            "range": "stddev: 0.16202887451196263",
            "extra": "mean: 1.238483877999992 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.4301838102203755,
            "unit": "iter/sec",
            "range": "stddev: 0.2200021663038503",
            "extra": "mean: 2.3245877140000175 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}