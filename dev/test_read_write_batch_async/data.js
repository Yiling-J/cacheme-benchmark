window.BENCHMARK_DATA = {
  "lastUpdate": 1674702451110,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark: test_read_write_batch_async": [
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
        "date": 1674701755697,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.80661468624728,
            "unit": "iter/sec",
            "range": "stddev: 0.018490792475638687",
            "extra": "mean: 208.0466326666889 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.7859102725002645,
            "unit": "iter/sec",
            "range": "stddev: 0.0181751731887257",
            "extra": "mean: 208.94666700000167 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.850510554958359,
            "unit": "iter/sec",
            "range": "stddev: 0.017023032358180017",
            "extra": "mean: 206.16386433336706 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.42116911775052,
            "unit": "iter/sec",
            "range": "stddev: 0.026718971211438937",
            "extra": "mean: 226.18451666666792 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.518703573822387,
            "unit": "iter/sec",
            "range": "stddev: 0.02687079778840068",
            "extra": "mean: 221.30241200001896 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.556355065760423,
            "unit": "iter/sec",
            "range": "stddev: 0.026065885701148442",
            "extra": "mean: 219.47367699999631 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.3636639649284574,
            "unit": "iter/sec",
            "range": "stddev: 0.06879641513583094",
            "extra": "mean: 423.0719826666511 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.9004606506932602,
            "unit": "iter/sec",
            "range": "stddev: 0.09921275953636906",
            "extra": "mean: 526.1882163333477 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.4788713742882382,
            "unit": "iter/sec",
            "range": "stddev: 0.030980232949066978",
            "extra": "mean: 676.1913289999862 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 4.32148853707232,
            "unit": "iter/sec",
            "range": "stddev: 0.032747573092415674",
            "extra": "mean: 231.40174766666632 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.791264099502559,
            "unit": "iter/sec",
            "range": "stddev: 0.038397677749640355",
            "extra": "mean: 263.76426800000746 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.6406192486624582,
            "unit": "iter/sec",
            "range": "stddev: 0.03371753751856053",
            "extra": "mean: 378.69904966667417 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 2.10752337984741,
            "unit": "iter/sec",
            "range": "stddev: 0.0301179106715711",
            "extra": "mean: 474.4905843333527 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.898012327088997,
            "unit": "iter/sec",
            "range": "stddev: 0.06922550475832245",
            "extra": "mean: 526.8669679999979 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.3871748186177766,
            "unit": "iter/sec",
            "range": "stddev: 0.060457773592173976",
            "extra": "mean: 720.8896719999794 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.3368447003179142,
            "unit": "iter/sec",
            "range": "stddev: 0.7700216133241974",
            "extra": "mean: 748.0300440000178 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.1178122323261346,
            "unit": "iter/sec",
            "range": "stddev: 0.7843260556920072",
            "extra": "mean: 894.6046313333227 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.7641393664325137,
            "unit": "iter/sec",
            "range": "stddev: 0.7870185797854157",
            "extra": "mean: 1.3086618016666687 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.3375660682901322,
            "unit": "iter/sec",
            "range": "stddev: 0.13865268002252523",
            "extra": "mean: 747.6266209999949 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.006174287562796,
            "unit": "iter/sec",
            "range": "stddev: 0.03627206928729404",
            "extra": "mean: 993.8636003333462 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.47548193482299067,
            "unit": "iter/sec",
            "range": "stddev: 0.09720594044035494",
            "extra": "mean: 2.1031293236666784 sec\nrounds: 3"
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
        "date": 1674702450601,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.817106253383832,
            "unit": "iter/sec",
            "range": "stddev: 0.016697069981643806",
            "extra": "mean: 207.5935109999989 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.772568627122576,
            "unit": "iter/sec",
            "range": "stddev: 0.020485389582513253",
            "extra": "mean: 209.53077433334025 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.776220322381931,
            "unit": "iter/sec",
            "range": "stddev: 0.020268728625321395",
            "extra": "mean: 209.37057599999775 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.471688168172982,
            "unit": "iter/sec",
            "range": "stddev: 0.030732740606218924",
            "extra": "mean: 223.6291893333373 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.548435797023138,
            "unit": "iter/sec",
            "range": "stddev: 0.025318491268698458",
            "extra": "mean: 219.85580199999313 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.473140342188289,
            "unit": "iter/sec",
            "range": "stddev: 0.022228232135529394",
            "extra": "mean: 223.5565896666666 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.800832736493784,
            "unit": "iter/sec",
            "range": "stddev: 0.06600808079980028",
            "extra": "mean: 357.03667233333175 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 2.356025161667011,
            "unit": "iter/sec",
            "range": "stddev: 0.028935001738781375",
            "extra": "mean: 424.44368433334034 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.6749051884465749,
            "unit": "iter/sec",
            "range": "stddev: 0.015435107177454091",
            "extra": "mean: 597.0487206666727 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 3.3913302275093353,
            "unit": "iter/sec",
            "range": "stddev: 0.04510732088998085",
            "extra": "mean: 294.8695446666723 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.6862856626250293,
            "unit": "iter/sec",
            "range": "stddev: 0.04907214351573831",
            "extra": "mean: 271.27577500000183 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.757605084622274,
            "unit": "iter/sec",
            "range": "stddev: 0.019992493080936886",
            "extra": "mean: 362.6335059999993 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.961059346530979,
            "unit": "iter/sec",
            "range": "stddev: 0.03503714819392755",
            "extra": "mean: 509.9284740000106 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 2.0116555159662424,
            "unit": "iter/sec",
            "range": "stddev: 0.04239682928066731",
            "extra": "mean: 497.10300400000546 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.6089346397343616,
            "unit": "iter/sec",
            "range": "stddev: 0.05125441470267312",
            "extra": "mean: 621.5292873333264 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.2452685885075427,
            "unit": "iter/sec",
            "range": "stddev: 0.7115077162974207",
            "extra": "mean: 803.039608666675 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.0903284723628424,
            "unit": "iter/sec",
            "range": "stddev: 0.7643332639116509",
            "extra": "mean: 917.1548073333421 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.7746835442253526,
            "unit": "iter/sec",
            "range": "stddev: 0.8026722379639429",
            "extra": "mean: 1.2908496733333266 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.6668987665770023,
            "unit": "iter/sec",
            "range": "stddev: 0.10326753992985728",
            "extra": "mean: 599.9164556666585 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.026175425175345,
            "unit": "iter/sec",
            "range": "stddev: 0.10069227065142276",
            "extra": "mean: 974.4922509999961 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.4703217342523482,
            "unit": "iter/sec",
            "range": "stddev: 0.23346076592018747",
            "extra": "mean: 2.1262041006666643 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}