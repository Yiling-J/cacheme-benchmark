window.BENCHMARK_DATA = {
  "lastUpdate": 1674702662823,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark: test_read_only_async": [
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
        "date": 1674701870350,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.675502787589606,
            "unit": "iter/sec",
            "range": "stddev: 0.0022921598315766094",
            "extra": "mean: 176.1958433333272 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.755058042341335,
            "unit": "iter/sec",
            "range": "stddev: 0.0013161241798704188",
            "extra": "mean: 173.76019366664272 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.783057068890111,
            "unit": "iter/sec",
            "range": "stddev: 0.0009852334161085635",
            "extra": "mean: 172.91892299999745 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.512228897864687,
            "unit": "iter/sec",
            "range": "stddev: 0.0013662707970936302",
            "extra": "mean: 153.55725599999914 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.506529961059602,
            "unit": "iter/sec",
            "range": "stddev: 0.0012265919346050194",
            "extra": "mean: 153.691753666673 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.394875218621446,
            "unit": "iter/sec",
            "range": "stddev: 0.0010490287371060856",
            "extra": "mean: 156.3752170000233 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.512863030652928,
            "unit": "iter/sec",
            "range": "stddev: 0.003931759529988917",
            "extra": "mean: 284.66808733334875 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.9147068093069803,
            "unit": "iter/sec",
            "range": "stddev: 0.0028668081597152447",
            "extra": "mean: 343.0876809999859 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.854179390650806,
            "unit": "iter/sec",
            "range": "stddev: 0.006302225361956432",
            "extra": "mean: 539.3221416666734 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.967402015902423,
            "unit": "iter/sec",
            "range": "stddev: 0.005585567060866089",
            "extra": "mean: 252.05411399997502 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.5244106449269093,
            "unit": "iter/sec",
            "range": "stddev: 0.05471829401201842",
            "extra": "mean: 396.1320643333579 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.6568010167420404,
            "unit": "iter/sec",
            "range": "stddev: 0.012573930738745064",
            "extra": "mean: 603.5727826666933 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.6149367976343418,
            "unit": "iter/sec",
            "range": "stddev: 0.02283269059941679",
            "extra": "mean: 619.219279333322 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.3841441472039067,
            "unit": "iter/sec",
            "range": "stddev: 0.0405376573592001",
            "extra": "mean: 722.4681056666592 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.9373556410798739,
            "unit": "iter/sec",
            "range": "stddev: 0.034323587701961394",
            "extra": "mean: 1.0668309403333371 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 3.162470945483375,
            "unit": "iter/sec",
            "range": "stddev: 0.03766490100513071",
            "extra": "mean: 316.2084386666682 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.9672578895436632,
            "unit": "iter/sec",
            "range": "stddev: 0.061854165940266236",
            "extra": "mean: 508.3217636666669 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.36486487292491,
            "unit": "iter/sec",
            "range": "stddev: 0.14176783532425033",
            "extra": "mean: 732.6732630000189 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.5912335612887283,
            "unit": "iter/sec",
            "range": "stddev: 0.01849616893008022",
            "extra": "mean: 385.91658233334175 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 2.129996570449891,
            "unit": "iter/sec",
            "range": "stddev: 0.02315730311714926",
            "extra": "mean: 469.48432400000684 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.046637915846419,
            "unit": "iter/sec",
            "range": "stddev: 0.045919635386294344",
            "extra": "mean: 955.4402576666613 msec\nrounds: 3"
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
        "date": 1674702662105,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 4.466905261745949,
            "unit": "iter/sec",
            "range": "stddev: 0.002664960603773786",
            "extra": "mean: 223.86863866665863 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 4.466312729049631,
            "unit": "iter/sec",
            "range": "stddev: 0.00476526756630244",
            "extra": "mean: 223.898338666667 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 4.402421944299568,
            "unit": "iter/sec",
            "range": "stddev: 0.002002545589050452",
            "extra": "mean: 227.14769566666368 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 5.01902307616762,
            "unit": "iter/sec",
            "range": "stddev: 0.010289766818716408",
            "extra": "mean: 199.24196100002214 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.0442136507827895,
            "unit": "iter/sec",
            "range": "stddev: 0.005798761048809195",
            "extra": "mean: 198.24695566668046 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 4.961533027705499,
            "unit": "iter/sec",
            "range": "stddev: 0.005274071578466274",
            "extra": "mean: 201.55060833333968 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 2.350999070534117,
            "unit": "iter/sec",
            "range": "stddev: 0.0053951400797867905",
            "extra": "mean: 425.35108266666083 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 1.9196865670918861,
            "unit": "iter/sec",
            "range": "stddev: 0.0320849532035796",
            "extra": "mean: 520.9183713333422 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.2173520454853797,
            "unit": "iter/sec",
            "range": "stddev: 0.0342938019056874",
            "extra": "mean: 821.4550619999841 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 1.695291890627882,
            "unit": "iter/sec",
            "range": "stddev: 0.1322906866260408",
            "extra": "mean: 589.8689219999937 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 1.8913077860180822,
            "unit": "iter/sec",
            "range": "stddev: 0.02569837418007267",
            "extra": "mean: 528.7346709999952 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 0.9530993981020801,
            "unit": "iter/sec",
            "range": "stddev: 0.14707255469581706",
            "extra": "mean: 1.0492085106666877 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.1033881573905204,
            "unit": "iter/sec",
            "range": "stddev: 0.02656618994624183",
            "extra": "mean: 906.2993773333309 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.9188933498091277,
            "unit": "iter/sec",
            "range": "stddev: 0.04966978808251988",
            "extra": "mean: 1.0882655753333286 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.6465696918080119,
            "unit": "iter/sec",
            "range": "stddev: 0.0816473083468636",
            "extra": "mean: 1.5466236860000133 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.5029405693533175,
            "unit": "iter/sec",
            "range": "stddev: 0.08658410355210865",
            "extra": "mean: 665.3623040000033 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.3492251172132304,
            "unit": "iter/sec",
            "range": "stddev: 0.10501293872743805",
            "extra": "mean: 741.1661606666939 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.8008905052406587,
            "unit": "iter/sec",
            "range": "stddev: 0.1813242516666909",
            "extra": "mean: 1.248610132666651 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.3631884911557512,
            "unit": "iter/sec",
            "range": "stddev: 0.08336087156789344",
            "extra": "mean: 733.5742683333327 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.3972773848017441,
            "unit": "iter/sec",
            "range": "stddev: 0.06982986859426767",
            "extra": "mean: 715.6775103333454 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.8362549742944165,
            "unit": "iter/sec",
            "range": "stddev: 0.02239921594523333",
            "extra": "mean: 1.1958075356666693 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}