window.BENCHMARK_DATA = {
  "lastUpdate": 1675864290370,
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
        "date": 1674703543720,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.0198523570938205,
            "unit": "iter/sec",
            "range": "stddev: 0.01729829595078885",
            "extra": "mean: 248.76535533333785 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 3.9268693878084,
            "unit": "iter/sec",
            "range": "stddev: 0.024827527373091858",
            "extra": "mean: 254.65578333332434 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 3.9749347873194254,
            "unit": "iter/sec",
            "range": "stddev: 0.019361202119163763",
            "extra": "mean: 251.57645433332237 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 3.7283578196067335,
            "unit": "iter/sec",
            "range": "stddev: 0.039112704568083086",
            "extra": "mean: 268.2145996666918 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 3.7101390589923966,
            "unit": "iter/sec",
            "range": "stddev: 0.036387905179128835",
            "extra": "mean: 269.53167633333425 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 3.773205178834171,
            "unit": "iter/sec",
            "range": "stddev: 0.04234343639368125",
            "extra": "mean: 265.02666900000804 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 1.6640331087031963,
            "unit": "iter/sec",
            "range": "stddev: 0.0988244339866882",
            "extra": "mean: 600.9495813333388 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.3613204629885804,
            "unit": "iter/sec",
            "range": "stddev: 0.07506179935906741",
            "extra": "mean: 734.5808919999968 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.0187850909954588,
            "unit": "iter/sec",
            "range": "stddev: 0.09589873731754141",
            "extra": "mean: 981.5612820000107 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 3.0294957002996945,
            "unit": "iter/sec",
            "range": "stddev: 0.026849153669295953",
            "extra": "mean: 330.0879416666855 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 2.7039813862681408,
            "unit": "iter/sec",
            "range": "stddev: 0.058573290919502426",
            "extra": "mean: 369.8250309999859 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.002780132537276,
            "unit": "iter/sec",
            "range": "stddev: 0.032206764651373385",
            "extra": "mean: 499.3059316666593 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.4382900710142983,
            "unit": "iter/sec",
            "range": "stddev: 0.02058312213277233",
            "extra": "mean: 695.2700433333234 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.3933665891821791,
            "unit": "iter/sec",
            "range": "stddev: 0.058845640153606896",
            "extra": "mean: 717.6862196666699 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.1631852347772431,
            "unit": "iter/sec",
            "range": "stddev: 0.16093852096824926",
            "extra": "mean: 859.7082993333439 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.1069680887047288,
            "unit": "iter/sec",
            "range": "stddev: 0.9211095259582165",
            "extra": "mean: 903.3684080000057 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.8981238818997634,
            "unit": "iter/sec",
            "range": "stddev: 0.9218066356118904",
            "extra": "mean: 1.1134321446666604 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.5295572629001482,
            "unit": "iter/sec",
            "range": "stddev: 1.2787148482840058",
            "extra": "mean: 1.8883699083333265 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.2338015490122003,
            "unit": "iter/sec",
            "range": "stddev: 0.12480734774157608",
            "extra": "mean: 810.5031159999877 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.7192318587637615,
            "unit": "iter/sec",
            "range": "stddev: 0.16965674652301407",
            "extra": "mean: 1.3903722253333324 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.30572094924449134,
            "unit": "iter/sec",
            "range": "stddev: 0.622552932862113",
            "extra": "mean: 3.270956741666661 sec\nrounds: 3"
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
        "date": 1674724431001,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 3.6363950944869927,
            "unit": "iter/sec",
            "range": "stddev: 0.01581637272843912",
            "extra": "mean: 274.99762100000186 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 3.8880601459887116,
            "unit": "iter/sec",
            "range": "stddev: 0.02771548983964275",
            "extra": "mean: 257.1976673333343 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 3.7846318843295177,
            "unit": "iter/sec",
            "range": "stddev: 0.03044760628042423",
            "extra": "mean: 264.22649033332846 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 3.577870838807995,
            "unit": "iter/sec",
            "range": "stddev: 0.0396955872448824",
            "extra": "mean: 279.495835666656 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 3.492588361938429,
            "unit": "iter/sec",
            "range": "stddev: 0.025748127903978523",
            "extra": "mean: 286.3206013333297 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 3.872054595185068,
            "unit": "iter/sec",
            "range": "stddev: 0.03026668650990032",
            "extra": "mean: 258.26082133333256 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 1.5356166801996516,
            "unit": "iter/sec",
            "range": "stddev: 0.15793625444444234",
            "extra": "mean: 651.2041793333386 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.0470538529019957,
            "unit": "iter/sec",
            "range": "stddev: 0.3069704558769852",
            "extra": "mean: 955.0607136666542 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 0.968381526491623,
            "unit": "iter/sec",
            "range": "stddev: 0.03400043184281404",
            "extra": "mean: 1.0326508433333383 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 3.0701438277851083,
            "unit": "iter/sec",
            "range": "stddev: 0.03944467789821955",
            "extra": "mean: 325.71763933334336 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 2.968838219027724,
            "unit": "iter/sec",
            "range": "stddev: 0.04793483087364809",
            "extra": "mean: 336.83209599999486 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 1.7343435300114383,
            "unit": "iter/sec",
            "range": "stddev: 0.06620658156679678",
            "extra": "mean: 576.5870386666734 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.408946267008722,
            "unit": "iter/sec",
            "range": "stddev: 0.09260875826791536",
            "extra": "mean: 709.7502746666559 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.2649746038596377,
            "unit": "iter/sec",
            "range": "stddev: 0.06517257858019396",
            "extra": "mean: 790.5297046666723 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.1385257104881688,
            "unit": "iter/sec",
            "range": "stddev: 0.06819599120296484",
            "extra": "mean: 878.3288693333304 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.0172772037502056,
            "unit": "iter/sec",
            "range": "stddev: 0.8797368212803242",
            "extra": "mean: 983.0162283333266 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.8059147536566568,
            "unit": "iter/sec",
            "range": "stddev: 1.0916360792544928",
            "extra": "mean: 1.24082602466666 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.6046088943016805,
            "unit": "iter/sec",
            "range": "stddev: 0.9422429789414463",
            "extra": "mean: 1.6539617750000086 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.0422141801347728,
            "unit": "iter/sec",
            "range": "stddev: 0.08965493754700146",
            "extra": "mean: 959.4956766666579 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.7132795341531444,
            "unit": "iter/sec",
            "range": "stddev: 0.23946065102261874",
            "extra": "mean: 1.401974894999995 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.3584294123375466,
            "unit": "iter/sec",
            "range": "stddev: 0.05799532852885982",
            "extra": "mean: 2.789949612333326 sec\nrounds: 3"
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
        "date": 1674739025369,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 5.071500070402904,
            "unit": "iter/sec",
            "range": "stddev: 0.015365799093277727",
            "extra": "mean: 197.18031866665342 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 5.074906877319706,
            "unit": "iter/sec",
            "range": "stddev: 0.01631428263712479",
            "extra": "mean: 197.04795066666256 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 5.038424748594634,
            "unit": "iter/sec",
            "range": "stddev: 0.01790307037332279",
            "extra": "mean: 198.47473166666418 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.558500718959866,
            "unit": "iter/sec",
            "range": "stddev: 0.03325259593719161",
            "extra": "mean: 219.37037233333476 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.716905772830662,
            "unit": "iter/sec",
            "range": "stddev: 0.024970548002926186",
            "extra": "mean: 212.00338700000998 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.657027352752254,
            "unit": "iter/sec",
            "range": "stddev: 0.014577452942110445",
            "extra": "mean: 214.72925199999318 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.7246173548295647,
            "unit": "iter/sec",
            "range": "stddev: 0.07189514791378036",
            "extra": "mean: 367.02401466665907 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 2.2170123073470025,
            "unit": "iter/sec",
            "range": "stddev: 0.036761439390143286",
            "extra": "mean: 451.0574869999952 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.4063353315936407,
            "unit": "iter/sec",
            "range": "stddev: 0.04024199805515488",
            "extra": "mean: 711.0679633333348 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 3.8011326896473743,
            "unit": "iter/sec",
            "range": "stddev: 0.06490768408126946",
            "extra": "mean: 263.0794769999909 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.7064665816837343,
            "unit": "iter/sec",
            "range": "stddev: 0.03640760269790067",
            "extra": "mean: 269.798736333333 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.464419424970262,
            "unit": "iter/sec",
            "range": "stddev: 0.0228359353628482",
            "extra": "mean: 405.7750843333281 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.8191776426385966,
            "unit": "iter/sec",
            "range": "stddev: 0.0502982875354005",
            "extra": "mean: 549.698927999998 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.710397975777287,
            "unit": "iter/sec",
            "range": "stddev: 0.06005369475539683",
            "extra": "mean: 584.6592513333349 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.439700311983022,
            "unit": "iter/sec",
            "range": "stddev: 0.061449424697188754",
            "extra": "mean: 694.5890000000171 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.3544950630070438,
            "unit": "iter/sec",
            "range": "stddev: 0.7386085780495865",
            "extra": "mean: 738.282498999998 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.083687635312709,
            "unit": "iter/sec",
            "range": "stddev: 0.7734841003508092",
            "extra": "mean: 922.7751313333385 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.699090606603514,
            "unit": "iter/sec",
            "range": "stddev: 0.8143774661332941",
            "extra": "mean: 1.4304297476666648 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.4398498948421299,
            "unit": "iter/sec",
            "range": "stddev: 0.1443447492181846",
            "extra": "mean: 694.5168406666747 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.977382863379306,
            "unit": "iter/sec",
            "range": "stddev: 0.036199755463462234",
            "extra": "mean: 1.0231405086666807 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.41172877583790707,
            "unit": "iter/sec",
            "range": "stddev: 0.31803088063604695",
            "extra": "mean: 2.4287833609999816 sec\nrounds: 3"
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
        "date": 1674783514742,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.810888125163693,
            "unit": "iter/sec",
            "range": "stddev: 0.018311693802854787",
            "extra": "mean: 207.86182799999628 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.8190998042685385,
            "unit": "iter/sec",
            "range": "stddev: 0.01928181525740349",
            "extra": "mean: 207.50763433333455 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.811711258676693,
            "unit": "iter/sec",
            "range": "stddev: 0.018565207132572353",
            "extra": "mean: 207.8262693333386 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.409814672863993,
            "unit": "iter/sec",
            "range": "stddev: 0.03162880222215301",
            "extra": "mean: 226.76689933333213 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.498769107529979,
            "unit": "iter/sec",
            "range": "stddev: 0.027496829952791315",
            "extra": "mean: 222.28302366667663 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.4925300434242095,
            "unit": "iter/sec",
            "range": "stddev: 0.026991595082179652",
            "extra": "mean: 222.59172233332455 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.1845915374573095,
            "unit": "iter/sec",
            "range": "stddev: 0.08998946884819516",
            "extra": "mean: 457.75147566666874 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 2.0525932590838023,
            "unit": "iter/sec",
            "range": "stddev: 0.04882810379220311",
            "extra": "mean: 487.1885823333362 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.4528979499846768,
            "unit": "iter/sec",
            "range": "stddev: 0.050857890391156915",
            "extra": "mean: 688.2795863333323 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 4.036256394205301,
            "unit": "iter/sec",
            "range": "stddev: 0.046309113983207854",
            "extra": "mean: 247.75433033334102 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.941322121760795,
            "unit": "iter/sec",
            "range": "stddev: 0.028174520180420957",
            "extra": "mean: 253.72196666666963 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.7546358397818866,
            "unit": "iter/sec",
            "range": "stddev: 0.019352825526537453",
            "extra": "mean: 363.0243916666605 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 2.1169661164987748,
            "unit": "iter/sec",
            "range": "stddev: 0.024830323755475628",
            "extra": "mean: 472.3741169999869 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.946860695597192,
            "unit": "iter/sec",
            "range": "stddev: 0.013129172440727326",
            "extra": "mean: 513.6474336666671 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.6085063443115,
            "unit": "iter/sec",
            "range": "stddev: 0.06436692309061198",
            "extra": "mean: 621.6947813333226 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.3220334300363712,
            "unit": "iter/sec",
            "range": "stddev: 0.7708855952294622",
            "extra": "mean: 756.4105243333282 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.107257533380177,
            "unit": "iter/sec",
            "range": "stddev: 0.7973369395370132",
            "extra": "mean: 903.1322613333259 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.7641916140920825,
            "unit": "iter/sec",
            "range": "stddev: 0.7771726966623705",
            "extra": "mean: 1.3085723286666469 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.275832062553906,
            "unit": "iter/sec",
            "range": "stddev: 0.12038416360986151",
            "extra": "mean: 783.8022176666755 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.0553000576989393,
            "unit": "iter/sec",
            "range": "stddev: 0.05835274843434929",
            "extra": "mean: 947.5977876666472 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.4808084686699567,
            "unit": "iter/sec",
            "range": "stddev: 0.08476931204953586",
            "extra": "mean: 2.0798302550000094 sec\nrounds: 3"
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
        "date": 1674783797935,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.842261038525565,
            "unit": "iter/sec",
            "range": "stddev: 0.017286184936080282",
            "extra": "mean: 206.51509533333487 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.8379513285488915,
            "unit": "iter/sec",
            "range": "stddev: 0.018251718362040075",
            "extra": "mean: 206.69906166665442 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.838717591064051,
            "unit": "iter/sec",
            "range": "stddev: 0.01781596839919945",
            "extra": "mean: 206.66632866666154 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.473613531357008,
            "unit": "iter/sec",
            "range": "stddev: 0.028665696223355425",
            "extra": "mean: 223.5329433333201 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.535082577973273,
            "unit": "iter/sec",
            "range": "stddev: 0.026226494972059717",
            "extra": "mean: 220.50315133333243 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.4967379763369095,
            "unit": "iter/sec",
            "range": "stddev: 0.027736347208697967",
            "extra": "mean: 222.38342666668132 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.0205918733340553,
            "unit": "iter/sec",
            "range": "stddev: 0.10393863774461083",
            "extra": "mean: 494.9044946666845 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.8448231598823674,
            "unit": "iter/sec",
            "range": "stddev: 0.0680224580457703",
            "extra": "mean: 542.0573753333429 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.3755328546049426,
            "unit": "iter/sec",
            "range": "stddev: 0.06639178754343834",
            "extra": "mean: 726.9909960000215 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 4.441072906901349,
            "unit": "iter/sec",
            "range": "stddev: 0.02800572468998968",
            "extra": "mean: 225.1708136666745 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.958875392449062,
            "unit": "iter/sec",
            "range": "stddev: 0.03229244043886675",
            "extra": "mean: 252.59698800001235 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.7734469222801765,
            "unit": "iter/sec",
            "range": "stddev: 0.020487912208568736",
            "extra": "mean: 360.5621553333549 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 2.070760260868637,
            "unit": "iter/sec",
            "range": "stddev: 0.0634869163017731",
            "extra": "mean: 482.91442466667905 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.7362101685325793,
            "unit": "iter/sec",
            "range": "stddev: 0.042327861729984664",
            "extra": "mean: 575.9671370000016 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.3142041313719426,
            "unit": "iter/sec",
            "range": "stddev: 0.07784894724820111",
            "extra": "mean: 760.9167983333501 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.3536452184167387,
            "unit": "iter/sec",
            "range": "stddev: 0.8090938046477116",
            "extra": "mean: 738.7460069999937 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.1592836364122079,
            "unit": "iter/sec",
            "range": "stddev: 0.791751531880422",
            "extra": "mean: 862.601669333344 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.6653413591672385,
            "unit": "iter/sec",
            "range": "stddev: 0.6671675467140403",
            "extra": "mean: 1.5029878816666837 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.7376331570877812,
            "unit": "iter/sec",
            "range": "stddev: 0.12564712070743245",
            "extra": "mean: 575.49546399999 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.1034362201491617,
            "unit": "iter/sec",
            "range": "stddev: 0.05848018862914794",
            "extra": "mean: 906.2599013333283 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.4785569363667714,
            "unit": "iter/sec",
            "range": "stddev: 0.13564385140905694",
            "extra": "mean: 2.089615517000027 sec\nrounds: 3"
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
        "date": 1674784554165,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.748526707462824,
            "unit": "iter/sec",
            "range": "stddev: 0.01794150445947398",
            "extra": "mean: 210.59163433331682 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.760391184193327,
            "unit": "iter/sec",
            "range": "stddev: 0.018081098282454154",
            "extra": "mean: 210.06677000000687 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.75932105493022,
            "unit": "iter/sec",
            "range": "stddev: 0.018575604858208583",
            "extra": "mean: 210.11400333333086 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.382925788975441,
            "unit": "iter/sec",
            "range": "stddev: 0.030308052904788288",
            "extra": "mean: 228.158095333337 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.486813577945288,
            "unit": "iter/sec",
            "range": "stddev: 0.025892586897573507",
            "extra": "mean: 222.8753173333189 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.3687143856668,
            "unit": "iter/sec",
            "range": "stddev: 0.030914069364211816",
            "extra": "mean: 228.9002923333404 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.537936654116299,
            "unit": "iter/sec",
            "range": "stddev: 0.060078254724172934",
            "extra": "mean: 394.0208666666649 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 2.2161683627124615,
            "unit": "iter/sec",
            "range": "stddev: 0.045545738107763634",
            "extra": "mean: 451.2292553333168 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.553642124670367,
            "unit": "iter/sec",
            "range": "stddev: 0.021215461736187307",
            "extra": "mean: 643.6488713333309 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 4.053837332623339,
            "unit": "iter/sec",
            "range": "stddev: 0.028286501562313375",
            "extra": "mean: 246.67985366666775 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.8003357751202476,
            "unit": "iter/sec",
            "range": "stddev: 0.030145036863905555",
            "extra": "mean: 263.1346436666793 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.683160980219466,
            "unit": "iter/sec",
            "range": "stddev: 0.018997346919555548",
            "extra": "mean: 372.69474599999813 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 2.028969753227476,
            "unit": "iter/sec",
            "range": "stddev: 0.056966819162199436",
            "extra": "mean: 492.8609696666513 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 2.0090136500175952,
            "unit": "iter/sec",
            "range": "stddev: 0.02227118203144468",
            "extra": "mean: 497.7566976666594 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.4523453151120425,
            "unit": "iter/sec",
            "range": "stddev: 0.06111050537716207",
            "extra": "mean: 688.5414849999734 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.327432632744093,
            "unit": "iter/sec",
            "range": "stddev: 0.745490260046763",
            "extra": "mean: 753.3338983333427 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.114679282890156,
            "unit": "iter/sec",
            "range": "stddev: 0.8320296302805626",
            "extra": "mean: 897.1190326666753 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.7564421464982735,
            "unit": "iter/sec",
            "range": "stddev: 0.775485225389158",
            "extra": "mean: 1.3219781639999912 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.357194054638796,
            "unit": "iter/sec",
            "range": "stddev: 0.22961075156343766",
            "extra": "mean: 736.8143093333401 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.0410637902405757,
            "unit": "iter/sec",
            "range": "stddev: 0.05362112874879588",
            "extra": "mean: 960.5559326666366 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.5186493108101881,
            "unit": "iter/sec",
            "range": "stddev: 0.0811392433260752",
            "extra": "mean: 1.9280850839999932 sec\nrounds: 3"
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
        "date": 1674787119741,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 3.6716944471982895,
            "unit": "iter/sec",
            "range": "stddev: 0.023113056724955998",
            "extra": "mean: 272.3538176666788 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 3.6431391907899005,
            "unit": "iter/sec",
            "range": "stddev: 0.025492695004350672",
            "extra": "mean: 274.4885516666689 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 3.3723040271425697,
            "unit": "iter/sec",
            "range": "stddev: 0.01295402404851465",
            "extra": "mean: 296.5331689999857 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 3.3369554538771276,
            "unit": "iter/sec",
            "range": "stddev: 0.04267492274372531",
            "extra": "mean: 299.6743629999988 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 3.2635319403850747,
            "unit": "iter/sec",
            "range": "stddev: 0.02571245158388707",
            "extra": "mean: 306.4164893333346 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 3.26492382341218,
            "unit": "iter/sec",
            "range": "stddev: 0.0475612812759504",
            "extra": "mean: 306.2858596666729 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 1.4393600766307484,
            "unit": "iter/sec",
            "range": "stddev: 0.1446685033983458",
            "extra": "mean: 694.7531866666736 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.2491247825047131,
            "unit": "iter/sec",
            "range": "stddev: 0.055919663638493766",
            "extra": "mean: 800.5605316666807 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 0.910829558514082,
            "unit": "iter/sec",
            "range": "stddev: 0.027535646382450978",
            "extra": "mean: 1.0979002499999997 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.9135760136195885,
            "unit": "iter/sec",
            "range": "stddev: 0.05322534814711974",
            "extra": "mean: 343.22083766665895 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 2.054650761137521,
            "unit": "iter/sec",
            "range": "stddev: 0.028051965751189147",
            "extra": "mean: 486.7007176666694 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 1.6012497562197232,
            "unit": "iter/sec",
            "range": "stddev: 0.12191587231717668",
            "extra": "mean: 624.5121950000035 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.446571638164351,
            "unit": "iter/sec",
            "range": "stddev: 0.06840348507985979",
            "extra": "mean: 691.2896490000074 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.388215288269493,
            "unit": "iter/sec",
            "range": "stddev: 0.09127470513362765",
            "extra": "mean: 720.3493639999957 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.083184594336353,
            "unit": "iter/sec",
            "range": "stddev: 0.05120064122012615",
            "extra": "mean: 923.2036766666548 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 0.9146692883259182,
            "unit": "iter/sec",
            "range": "stddev: 1.040667487300553",
            "extra": "mean: 1.0932913270000124 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.8328998392752804,
            "unit": "iter/sec",
            "range": "stddev: 0.9714374918600093",
            "extra": "mean: 1.2006245563333475 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.5563318840409954,
            "unit": "iter/sec",
            "range": "stddev: 0.9267434211166768",
            "extra": "mean: 1.7974882056666577 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 0.8976858909106542,
            "unit": "iter/sec",
            "range": "stddev: 0.2775298532565234",
            "extra": "mean: 1.113975400666656 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.6995927849960837,
            "unit": "iter/sec",
            "range": "stddev: 0.08663714863990359",
            "extra": "mean: 1.4294029633333025 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.30588321325510837,
            "unit": "iter/sec",
            "range": "stddev: 0.09777359376985084",
            "extra": "mean: 3.26922157433332 sec\nrounds: 3"
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
        "date": 1674818368877,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.783440791816071,
            "unit": "iter/sec",
            "range": "stddev: 0.017222125956598847",
            "extra": "mean: 209.05453699999535 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.780656225764227,
            "unit": "iter/sec",
            "range": "stddev: 0.018867063050888297",
            "extra": "mean: 209.1763040000103 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.811746088104828,
            "unit": "iter/sec",
            "range": "stddev: 0.017141325466537922",
            "extra": "mean: 207.82476499998856 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.403967507316138,
            "unit": "iter/sec",
            "range": "stddev: 0.03099821416677025",
            "extra": "mean: 227.06797866667708 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.4711495076340455,
            "unit": "iter/sec",
            "range": "stddev: 0.02824445799697642",
            "extra": "mean: 223.65613100000323 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.469561432955342,
            "unit": "iter/sec",
            "range": "stddev: 0.024888479162968144",
            "extra": "mean: 223.7355979999999 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.507498295438227,
            "unit": "iter/sec",
            "range": "stddev: 0.07597035382746103",
            "extra": "mean: 398.8038603333261 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.9369008751580212,
            "unit": "iter/sec",
            "range": "stddev: 0.059106441373638165",
            "extra": "mean: 516.2886820000097 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.3592363894055695,
            "unit": "iter/sec",
            "range": "stddev: 0.09503506869728484",
            "extra": "mean: 735.707201333336 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 4.037804721967955,
            "unit": "iter/sec",
            "range": "stddev: 0.04973535319868442",
            "extra": "mean: 247.65932699999857 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.6522079370126614,
            "unit": "iter/sec",
            "range": "stddev: 0.03663580068347671",
            "extra": "mean: 273.80697299999684 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.693310401411184,
            "unit": "iter/sec",
            "range": "stddev: 0.03719387308796149",
            "extra": "mean: 371.2902900000093 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 2.0066292314287066,
            "unit": "iter/sec",
            "range": "stddev: 0.02407102945743217",
            "extra": "mean: 498.3481673333377 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.9236124839203173,
            "unit": "iter/sec",
            "range": "stddev: 0.05170226400913532",
            "extra": "mean: 519.855224666666 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.6109801459729924,
            "unit": "iter/sec",
            "range": "stddev: 0.04565545416905487",
            "extra": "mean: 620.74011433333 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.363169211124325,
            "unit": "iter/sec",
            "range": "stddev: 0.7674663966447132",
            "extra": "mean: 733.58464366666 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.1572454957256666,
            "unit": "iter/sec",
            "range": "stddev: 0.7530448791825382",
            "extra": "mean: 864.120883333347 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.6721705728868497,
            "unit": "iter/sec",
            "range": "stddev: 0.7425203288460509",
            "extra": "mean: 1.4877176126666523 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.5672656352266576,
            "unit": "iter/sec",
            "range": "stddev: 0.0998765181794555",
            "extra": "mean: 638.0539313333315 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.0272027851066816,
            "unit": "iter/sec",
            "range": "stddev: 0.05328007014354717",
            "extra": "mean: 973.5176096666672 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.47438561370002824,
            "unit": "iter/sec",
            "range": "stddev: 0.24296911924667175",
            "extra": "mean: 2.1079897263333485 sec\nrounds: 3"
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
        "date": 1674821325978,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.776657301175676,
            "unit": "iter/sec",
            "range": "stddev: 0.017060802817099634",
            "extra": "mean: 209.35142233332726 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.768872099180875,
            "unit": "iter/sec",
            "range": "stddev: 0.01856637073880232",
            "extra": "mean: 209.69318933333625 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.723044050254181,
            "unit": "iter/sec",
            "range": "stddev: 0.021379521992199613",
            "extra": "mean: 211.727858000008 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.321755086868284,
            "unit": "iter/sec",
            "range": "stddev: 0.0336696153682471",
            "extra": "mean: 231.3874756666602 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.461284597514878,
            "unit": "iter/sec",
            "range": "stddev: 0.027382155544547003",
            "extra": "mean: 224.15068533333246 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.5147828279075135,
            "unit": "iter/sec",
            "range": "stddev: 0.02564659541841639",
            "extra": "mean: 221.4945963333245 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.7069413436381136,
            "unit": "iter/sec",
            "range": "stddev: 0.07540734632765232",
            "extra": "mean: 369.42063866666786 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 2.209052974188984,
            "unit": "iter/sec",
            "range": "stddev: 0.06237220375938702",
            "extra": "mean: 452.6826706666611 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.5483167971981313,
            "unit": "iter/sec",
            "range": "stddev: 0.0316489224673883",
            "extra": "mean: 645.8626566666604 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 4.233260690297655,
            "unit": "iter/sec",
            "range": "stddev: 0.03635606909334909",
            "extra": "mean: 236.22452600000088 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.908384222059092,
            "unit": "iter/sec",
            "range": "stddev: 0.03561588975094795",
            "extra": "mean: 255.8602080000109 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.83797423318056,
            "unit": "iter/sec",
            "range": "stddev: 0.01560238039886538",
            "extra": "mean: 352.3640166666648 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 2.1860149632972186,
            "unit": "iter/sec",
            "range": "stddev: 0.007675971635386511",
            "extra": "mean: 457.4534103333292 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 2.0673704596627074,
            "unit": "iter/sec",
            "range": "stddev: 0.06422364539995568",
            "extra": "mean: 483.70624399999923 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.7274477218623479,
            "unit": "iter/sec",
            "range": "stddev: 0.07916092886471754",
            "extra": "mean: 578.8887196666698 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.2478256829847048,
            "unit": "iter/sec",
            "range": "stddev: 0.9330068852165951",
            "extra": "mean: 801.3939876666711 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.1215689443726422,
            "unit": "iter/sec",
            "range": "stddev: 0.7824396939059921",
            "extra": "mean: 891.6081396666679 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.6690179786706748,
            "unit": "iter/sec",
            "range": "stddev: 0.6547537146988324",
            "extra": "mean: 1.4947281416666556 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.6299545625607383,
            "unit": "iter/sec",
            "range": "stddev: 0.10401481933039514",
            "extra": "mean: 613.5140346666788 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.1236161704764238,
            "unit": "iter/sec",
            "range": "stddev: 0.039281893779417924",
            "extra": "mean: 889.9836316666665 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.45624908767101585,
            "unit": "iter/sec",
            "range": "stddev: 0.16605370743374337",
            "extra": "mean: 2.1917852046666724 sec\nrounds: 3"
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
        "date": 1674899589251,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.80546868487335,
            "unit": "iter/sec",
            "range": "stddev: 0.01718512554843736",
            "extra": "mean: 208.09624733333484 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.815443017892601,
            "unit": "iter/sec",
            "range": "stddev: 0.017760452038178855",
            "extra": "mean: 207.66521299999377 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.830601777240197,
            "unit": "iter/sec",
            "range": "stddev: 0.017298661343108375",
            "extra": "mean: 207.01354533333452 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.448789534342457,
            "unit": "iter/sec",
            "range": "stddev: 0.029661035966327822",
            "extra": "mean: 224.78024466666588 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.515175790287165,
            "unit": "iter/sec",
            "range": "stddev: 0.027271140614147343",
            "extra": "mean: 221.47531933333653 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.5053094057652565,
            "unit": "iter/sec",
            "range": "stddev: 0.026902674102355778",
            "extra": "mean: 221.96033833333217 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.649382855936826,
            "unit": "iter/sec",
            "range": "stddev: 0.07630625788673831",
            "extra": "mean: 377.44639199999597 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 2.4742112446509346,
            "unit": "iter/sec",
            "range": "stddev: 0.035288047676234405",
            "extra": "mean: 404.16920833333353 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.551045438955641,
            "unit": "iter/sec",
            "range": "stddev: 0.05107433418899302",
            "extra": "mean: 644.726437333342 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 4.016051687377633,
            "unit": "iter/sec",
            "range": "stddev: 0.05951424907084582",
            "extra": "mean: 249.00077933333856 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 4.024316125324159,
            "unit": "iter/sec",
            "range": "stddev: 0.03113758143742856",
            "extra": "mean: 248.48942499999302 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.83411435541829,
            "unit": "iter/sec",
            "range": "stddev: 0.021530917114189613",
            "extra": "mean: 352.843913333345 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.9630848708485373,
            "unit": "iter/sec",
            "range": "stddev: 0.039125723126418675",
            "extra": "mean: 509.40232633332505 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 2.0354516223862613,
            "unit": "iter/sec",
            "range": "stddev: 0.028797317089420432",
            "extra": "mean: 491.2914603333339 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.5647208278299634,
            "unit": "iter/sec",
            "range": "stddev: 0.08643621621870623",
            "extra": "mean: 639.0916399999943 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.2808687779742784,
            "unit": "iter/sec",
            "range": "stddev: 0.8558875565376491",
            "extra": "mean: 780.7200996666666 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.1420854098584292,
            "unit": "iter/sec",
            "range": "stddev: 0.7851484943941268",
            "extra": "mean: 875.5912573333356 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.7642539555069735,
            "unit": "iter/sec",
            "range": "stddev: 0.7737335308940161",
            "extra": "mean: 1.3084655863333314 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.2425980999223676,
            "unit": "iter/sec",
            "range": "stddev: 0.18216304321093332",
            "extra": "mean: 804.765434666668 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.0999018952037143,
            "unit": "iter/sec",
            "range": "stddev: 0.022174505945609806",
            "extra": "mean: 909.1719946666595 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.4843392075923852,
            "unit": "iter/sec",
            "range": "stddev: 0.08309763095540658",
            "extra": "mean: 2.0646686956666733 sec\nrounds: 3"
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
        "date": 1674994628939,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.720126621487554,
            "unit": "iter/sec",
            "range": "stddev: 0.0193021714536583",
            "extra": "mean: 211.8587233333263 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.7491734866946596,
            "unit": "iter/sec",
            "range": "stddev: 0.018964671613554782",
            "extra": "mean: 210.5629543333407 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.717344909089738,
            "unit": "iter/sec",
            "range": "stddev: 0.01718929943827353",
            "extra": "mean: 211.98365166666613 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.328478203415623,
            "unit": "iter/sec",
            "range": "stddev: 0.033351520488213514",
            "extra": "mean: 231.028077999999 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.477352106858778,
            "unit": "iter/sec",
            "range": "stddev: 0.02730413792537747",
            "extra": "mean: 223.34629400000003 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.472700107823892,
            "unit": "iter/sec",
            "range": "stddev: 0.025736467894892756",
            "extra": "mean: 223.57859366666352 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 3.3526786392504153,
            "unit": "iter/sec",
            "range": "stddev: 0.04526539821267701",
            "extra": "mean: 298.26896866667124 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 2.7231944489851614,
            "unit": "iter/sec",
            "range": "stddev: 0.034845633535873125",
            "extra": "mean: 367.21578966667795 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.7155355073908207,
            "unit": "iter/sec",
            "range": "stddev: 0.010276967957883121",
            "extra": "mean: 582.9083663333279 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 4.431974542383829,
            "unit": "iter/sec",
            "range": "stddev: 0.03135691399820768",
            "extra": "mean: 225.63306499999194 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.9938608820091424,
            "unit": "iter/sec",
            "range": "stddev: 0.029513767329793515",
            "extra": "mean: 250.38428466665624 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.8221224329973396,
            "unit": "iter/sec",
            "range": "stddev: 0.0209329265547928",
            "extra": "mean: 354.3432376666639 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 2.1496963588288014,
            "unit": "iter/sec",
            "range": "stddev: 0.04016467933159429",
            "extra": "mean: 465.18197600000616 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 2.1320576555806183,
            "unit": "iter/sec",
            "range": "stddev: 0.05920207261703738",
            "extra": "mean: 469.03046800001863 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.5817262983597058,
            "unit": "iter/sec",
            "range": "stddev: 0.08513179030155245",
            "extra": "mean: 632.220632000004 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.4108818915209735,
            "unit": "iter/sec",
            "range": "stddev: 0.7575553117829628",
            "extra": "mean: 708.7765503333306 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.1281483795260852,
            "unit": "iter/sec",
            "range": "stddev: 0.7723590132667812",
            "extra": "mean: 886.4082226666691 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.6960441997254609,
            "unit": "iter/sec",
            "range": "stddev: 0.6731670464999717",
            "extra": "mean: 1.4366903716666666 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.5633814882243044,
            "unit": "iter/sec",
            "range": "stddev: 0.11058339171191392",
            "extra": "mean: 639.639145999998 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.1009975450265013,
            "unit": "iter/sec",
            "range": "stddev: 0.04468630543076117",
            "extra": "mean: 908.2672386666673 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.49802397185996605,
            "unit": "iter/sec",
            "range": "stddev: 0.16333625213113276",
            "extra": "mean: 2.007935473999993 sec\nrounds: 3"
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
        "date": 1675063416543,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.633365044238062,
            "unit": "iter/sec",
            "range": "stddev: 0.017613595755128324",
            "extra": "mean: 215.82586100000375 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.56166512746972,
            "unit": "iter/sec",
            "range": "stddev: 0.020187299897886264",
            "extra": "mean: 219.21819599999517 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.565955081896451,
            "unit": "iter/sec",
            "range": "stddev: 0.02046122243092221",
            "extra": "mean: 219.01222899999576 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.294042243255953,
            "unit": "iter/sec",
            "range": "stddev: 0.03330717711277384",
            "extra": "mean: 232.88080166667177 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.315440252662739,
            "unit": "iter/sec",
            "range": "stddev: 0.031366237923767644",
            "extra": "mean: 231.7260676666706 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.384597616539325,
            "unit": "iter/sec",
            "range": "stddev: 0.028788914840030606",
            "extra": "mean: 228.07109966667363 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.955263848291043,
            "unit": "iter/sec",
            "range": "stddev: 0.05211710601048856",
            "extra": "mean: 338.37926199999896 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 2.370788457100089,
            "unit": "iter/sec",
            "range": "stddev: 0.042242989207081943",
            "extra": "mean: 421.800602666669 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.6576408536595248,
            "unit": "iter/sec",
            "range": "stddev: 0.029488184414283573",
            "extra": "mean: 603.2669849999953 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 3.997610686724021,
            "unit": "iter/sec",
            "range": "stddev: 0.05650812490686445",
            "extra": "mean: 250.14942133334256 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.8142589783463676,
            "unit": "iter/sec",
            "range": "stddev: 0.046186383572960094",
            "extra": "mean: 262.1741223333345 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.8016180113527236,
            "unit": "iter/sec",
            "range": "stddev: 0.0172959840714742",
            "extra": "mean: 356.9365973333258 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 2.1139931738300897,
            "unit": "iter/sec",
            "range": "stddev: 0.058706244949423135",
            "extra": "mean: 473.0384243333295 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.9841335047349713,
            "unit": "iter/sec",
            "range": "stddev: 0.061680099711348656",
            "extra": "mean: 503.99834366668495 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.5867910939382082,
            "unit": "iter/sec",
            "range": "stddev: 0.05354090036282622",
            "extra": "mean: 630.2026800000059 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.3713176467195123,
            "unit": "iter/sec",
            "range": "stddev: 0.7981617666967413",
            "extra": "mean: 729.2256483333498 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.1527804779045332,
            "unit": "iter/sec",
            "range": "stddev: 0.7757839021473698",
            "extra": "mean: 867.4678476666694 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.6715806366614075,
            "unit": "iter/sec",
            "range": "stddev: 1.0411013105012084",
            "extra": "mean: 1.4890244676666764 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.6299269638040115,
            "unit": "iter/sec",
            "range": "stddev: 0.15107911846884026",
            "extra": "mean: 613.5244230000012 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.0921245846667886,
            "unit": "iter/sec",
            "range": "stddev: 0.06931488503522558",
            "extra": "mean: 915.6464510000054 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.4600190468647569,
            "unit": "iter/sec",
            "range": "stddev: 0.08847230047126761",
            "extra": "mean: 2.173823033666679 sec\nrounds: 3"
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
        "date": 1675154872010,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.839588468627231,
            "unit": "iter/sec",
            "range": "stddev: 0.017279049214911267",
            "extra": "mean: 206.62913933333962 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.863223752922675,
            "unit": "iter/sec",
            "range": "stddev: 0.019235780013684138",
            "extra": "mean: 205.62492099999 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.854038378308713,
            "unit": "iter/sec",
            "range": "stddev: 0.015337001178227333",
            "extra": "mean: 206.01402833333773 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.41835990074003,
            "unit": "iter/sec",
            "range": "stddev: 0.03224627177103783",
            "extra": "mean: 226.3283259999961 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.4899279265244205,
            "unit": "iter/sec",
            "range": "stddev: 0.02321789840601516",
            "extra": "mean: 222.7207243333377 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.545079080603811,
            "unit": "iter/sec",
            "range": "stddev: 0.02575289171660625",
            "extra": "mean: 220.01817399998913 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.37847356600473,
            "unit": "iter/sec",
            "range": "stddev: 0.07792140639054836",
            "extra": "mean: 420.4377186666666 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 2.109988304201219,
            "unit": "iter/sec",
            "range": "stddev: 0.03586394565659309",
            "extra": "mean: 473.9362763333285 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.5006040524049764,
            "unit": "iter/sec",
            "range": "stddev: 0.048487976422912006",
            "extra": "mean: 666.3983069999896 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 3.9196402003385002,
            "unit": "iter/sec",
            "range": "stddev: 0.031206284294410396",
            "extra": "mean: 255.12545766666034 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.6198176342391126,
            "unit": "iter/sec",
            "range": "stddev: 0.04693456366624276",
            "extra": "mean: 276.25701100000316 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.4507129841312305,
            "unit": "iter/sec",
            "range": "stddev: 0.015182346189710526",
            "extra": "mean: 408.0445186666755 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.9888513162758896,
            "unit": "iter/sec",
            "range": "stddev: 0.07626772053706717",
            "extra": "mean: 502.8027946666688 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.8057123468126048,
            "unit": "iter/sec",
            "range": "stddev: 0.065113054572953",
            "extra": "mean: 553.7980629999973 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.3801842387789627,
            "unit": "iter/sec",
            "range": "stddev: 0.07942535676320633",
            "extra": "mean: 724.5409503333349 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.2752283666844366,
            "unit": "iter/sec",
            "range": "stddev: 0.7204930824298398",
            "extra": "mean: 784.1732713333348 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.0921100370582701,
            "unit": "iter/sec",
            "range": "stddev: 0.7584159391025043",
            "extra": "mean: 915.658647999995 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.6501247768447758,
            "unit": "iter/sec",
            "range": "stddev: 0.5600941598680964",
            "extra": "mean: 1.5381662653333403 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.4800274805582398,
            "unit": "iter/sec",
            "range": "stddev: 0.0753859972781339",
            "extra": "mean: 675.6631300000038 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.9424424192664468,
            "unit": "iter/sec",
            "range": "stddev: 0.04992369920394955",
            "extra": "mean: 1.0610727823333264 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.4168733799905289,
            "unit": "iter/sec",
            "range": "stddev: 0.15918686576782862",
            "extra": "mean: 2.3988099216666683 sec\nrounds: 3"
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
        "date": 1675160319702,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 3.2982514488155674,
            "unit": "iter/sec",
            "range": "stddev: 0.014320951445745763",
            "extra": "mean: 303.19095299999316 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 3.3604570759296286,
            "unit": "iter/sec",
            "range": "stddev: 0.030152661166145116",
            "extra": "mean: 297.57856666666765 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 3.295706425185859,
            "unit": "iter/sec",
            "range": "stddev: 0.01971864568399566",
            "extra": "mean: 303.42508433335524 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 2.6471409316126833,
            "unit": "iter/sec",
            "range": "stddev: 0.09272149686008108",
            "extra": "mean: 377.7660599999801 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 2.8103433284780954,
            "unit": "iter/sec",
            "range": "stddev: 0.004741390457250521",
            "extra": "mean: 355.82841066665577 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 3.0980160670673538,
            "unit": "iter/sec",
            "range": "stddev: 0.03462637742410545",
            "extra": "mean: 322.7872219999881 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 1.2060561414454538,
            "unit": "iter/sec",
            "range": "stddev: 0.1441188502645476",
            "extra": "mean: 829.1487979999866 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.245393665562704,
            "unit": "iter/sec",
            "range": "stddev: 0.07116604760136772",
            "extra": "mean: 802.9589579999765 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 0.8629094949088786,
            "unit": "iter/sec",
            "range": "stddev: 0.03467716095754267",
            "extra": "mean: 1.1588700853333382 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.2216118730326495,
            "unit": "iter/sec",
            "range": "stddev: 0.14001487441438862",
            "extra": "mean: 450.1236296666586 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 2.191689814149973,
            "unit": "iter/sec",
            "range": "stddev: 0.07424331378506413",
            "extra": "mean: 456.26894533332535 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 1.6006734430141867,
            "unit": "iter/sec",
            "range": "stddev: 0.02198255980766244",
            "extra": "mean: 624.7370469999964 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.2491421199001342,
            "unit": "iter/sec",
            "range": "stddev: 0.06105087332396765",
            "extra": "mean: 800.5494203333304 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.1809137214660765,
            "unit": "iter/sec",
            "range": "stddev: 0.08105153128853546",
            "extra": "mean: 846.801914333355 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 0.8914852086759324,
            "unit": "iter/sec",
            "range": "stddev: 0.08932177651978904",
            "extra": "mean: 1.121723602666653 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 0.9184943948642241,
            "unit": "iter/sec",
            "range": "stddev: 0.9467815192648187",
            "extra": "mean: 1.0887382716666707 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.763915369502366,
            "unit": "iter/sec",
            "range": "stddev: 1.0591151618254318",
            "extra": "mean: 1.3090455303333215 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.474397543986227,
            "unit": "iter/sec",
            "range": "stddev: 1.2364390626412445",
            "extra": "mean: 2.1079367140000045 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 0.8978028340583103,
            "unit": "iter/sec",
            "range": "stddev: 0.18854010719961742",
            "extra": "mean: 1.1138302999999798 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.5815250432345752,
            "unit": "iter/sec",
            "range": "stddev: 0.05174084544027208",
            "extra": "mean: 1.7196163976666792 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.29057658729721836,
            "unit": "iter/sec",
            "range": "stddev: 0.15722719721737752",
            "extra": "mean: 3.4414334936666555 sec\nrounds: 3"
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
        "date": 1675160817506,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.867047077770241,
            "unit": "iter/sec",
            "range": "stddev: 0.01725284633592952",
            "extra": "mean: 205.46339166666408 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.745628258831915,
            "unit": "iter/sec",
            "range": "stddev: 0.018345937313376696",
            "extra": "mean: 210.7202556666626 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.877575441532447,
            "unit": "iter/sec",
            "range": "stddev: 0.018722252938629124",
            "extra": "mean: 205.01989400000298 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.35681746584444,
            "unit": "iter/sec",
            "range": "stddev: 0.032839610120911966",
            "extra": "mean: 229.52533766667216 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.481739180598921,
            "unit": "iter/sec",
            "range": "stddev: 0.01612511731605002",
            "extra": "mean: 223.12766533334147 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.588636998515884,
            "unit": "iter/sec",
            "range": "stddev: 0.02689417382526173",
            "extra": "mean: 217.92963800000584 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.708364983775503,
            "unit": "iter/sec",
            "range": "stddev: 0.05816230304353129",
            "extra": "mean: 369.22645433333895 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.5465274005682992,
            "unit": "iter/sec",
            "range": "stddev: 0.2662007528650022",
            "extra": "mean: 646.6099466666625 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.458708200371897,
            "unit": "iter/sec",
            "range": "stddev: 0.029388913656687003",
            "extra": "mean: 685.5380670000008 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 3.862994779904073,
            "unit": "iter/sec",
            "range": "stddev: 0.032534453271522976",
            "extra": "mean: 258.86651600001187 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.3923966131031995,
            "unit": "iter/sec",
            "range": "stddev: 0.024556597802336984",
            "extra": "mean: 294.7768536666615 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.5016460914670393,
            "unit": "iter/sec",
            "range": "stddev: 0.01356437801697364",
            "extra": "mean: 399.7367986666613 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.8038041988844833,
            "unit": "iter/sec",
            "range": "stddev: 0.04859577311096184",
            "extra": "mean: 554.3838963333295 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.7237583416156612,
            "unit": "iter/sec",
            "range": "stddev: 0.07409932384718385",
            "extra": "mean: 580.1277220000051 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.3305813823397834,
            "unit": "iter/sec",
            "range": "stddev: 0.030794071640412476",
            "extra": "mean: 751.5511739999946 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.3069595312737006,
            "unit": "iter/sec",
            "range": "stddev: 0.7411815115050382",
            "extra": "mean: 765.1346320000035 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.0810820090584972,
            "unit": "iter/sec",
            "range": "stddev: 0.7924657881264102",
            "extra": "mean: 924.9992060000048 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.7637791718163786,
            "unit": "iter/sec",
            "range": "stddev: 0.7730054497338151",
            "extra": "mean: 1.3092789603333301 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.1708943416852842,
            "unit": "iter/sec",
            "range": "stddev: 0.15392544262639557",
            "extra": "mean: 854.0480250000068 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.9466818781866984,
            "unit": "iter/sec",
            "range": "stddev: 0.07449814610594226",
            "extra": "mean: 1.0563210546666728 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.44306160925359905,
            "unit": "iter/sec",
            "range": "stddev: 0.05680077478363252",
            "extra": "mean: 2.25702245266667 sec\nrounds: 3"
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
        "date": 1675161257298,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.909047234636621,
            "unit": "iter/sec",
            "range": "stddev: 0.018036225074673028",
            "extra": "mean: 203.70551599999467 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.8972334896272836,
            "unit": "iter/sec",
            "range": "stddev: 0.01559255912852255",
            "extra": "mean: 204.19692100000475 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.9188025714239325,
            "unit": "iter/sec",
            "range": "stddev: 0.01751499124665596",
            "extra": "mean: 203.30151200000537 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.484956297217945,
            "unit": "iter/sec",
            "range": "stddev: 0.031927545717953205",
            "extra": "mean: 222.9676129999992 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.49610352831088,
            "unit": "iter/sec",
            "range": "stddev: 0.026909519967235777",
            "extra": "mean: 222.41480733333674 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.471453620788513,
            "unit": "iter/sec",
            "range": "stddev: 0.027914355426672813",
            "extra": "mean: 223.64091966666896 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 1.5242466293540176,
            "unit": "iter/sec",
            "range": "stddev: 0.08762870989330279",
            "extra": "mean: 656.0618083333433 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.2242977805524293,
            "unit": "iter/sec",
            "range": "stddev: 0.07741806901162558",
            "extra": "mean: 816.7947503333531 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 0.8534261305060317,
            "unit": "iter/sec",
            "range": "stddev: 0.06306696509000273",
            "extra": "mean: 1.1717475763333596 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 3.4876745946029617,
            "unit": "iter/sec",
            "range": "stddev: 0.04413421295501279",
            "extra": "mean: 286.72399700002416 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 2.56314376650397,
            "unit": "iter/sec",
            "range": "stddev: 0.03882746755848606",
            "extra": "mean: 390.1458876666766 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.241544406402824,
            "unit": "iter/sec",
            "range": "stddev: 0.041557115384683006",
            "extra": "mean: 446.1209856666528 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.8194842756001666,
            "unit": "iter/sec",
            "range": "stddev: 0.012077811569902454",
            "extra": "mean: 549.6062886666854 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.685615808009357,
            "unit": "iter/sec",
            "range": "stddev: 0.04467469023253693",
            "extra": "mean: 593.2549963333335 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.4379253465855832,
            "unit": "iter/sec",
            "range": "stddev: 0.0303252400971911",
            "extra": "mean: 695.4463960000036 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.29844870040227,
            "unit": "iter/sec",
            "range": "stddev: 0.738728911731163",
            "extra": "mean: 770.1497946666601 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.9866919716408731,
            "unit": "iter/sec",
            "range": "stddev: 0.8792352150264027",
            "extra": "mean: 1.0134875206666532 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.7322312447807637,
            "unit": "iter/sec",
            "range": "stddev: 0.7707551019108715",
            "extra": "mean: 1.365688786333351 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.3360619453292657,
            "unit": "iter/sec",
            "range": "stddev: 0.07732295406157146",
            "extra": "mean: 748.4682903333161 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.7550770470777673,
            "unit": "iter/sec",
            "range": "stddev: 0.028400741999829674",
            "extra": "mean: 1.3243681606666655 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.41495240991103916,
            "unit": "iter/sec",
            "range": "stddev: 0.04321847372459159",
            "extra": "mean: 2.409914911000006 sec\nrounds: 3"
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
        "date": 1675161722710,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.91406773035923,
            "unit": "iter/sec",
            "range": "stddev: 0.017393120761887617",
            "extra": "mean: 203.49739866668415 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.9344860134761115,
            "unit": "iter/sec",
            "range": "stddev: 0.01860651024585959",
            "extra": "mean: 202.65535199998416 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.915581499208293,
            "unit": "iter/sec",
            "range": "stddev: 0.018014385943357893",
            "extra": "mean: 203.4347309999968 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.330385997082833,
            "unit": "iter/sec",
            "range": "stddev: 0.028235518517383863",
            "extra": "mean: 230.92629633331777 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.59926206495873,
            "unit": "iter/sec",
            "range": "stddev: 0.027802701620751036",
            "extra": "mean: 217.4261840000137 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.59912174588575,
            "unit": "iter/sec",
            "range": "stddev: 0.02695938838590921",
            "extra": "mean: 217.43281766667147 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.630498767661368,
            "unit": "iter/sec",
            "range": "stddev: 0.05896620603315269",
            "extra": "mean: 380.15604199999115 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 2.1470272463999036,
            "unit": "iter/sec",
            "range": "stddev: 0.043034328093726114",
            "extra": "mean: 465.7602746666498 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.3741202396131196,
            "unit": "iter/sec",
            "range": "stddev: 0.0021140360186332747",
            "extra": "mean: 727.7383529999876 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 3.660093080120138,
            "unit": "iter/sec",
            "range": "stddev: 0.07852882820473436",
            "extra": "mean: 273.2170953333177 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.6902285562247212,
            "unit": "iter/sec",
            "range": "stddev: 0.04248310755714039",
            "extra": "mean: 270.98592533332067 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.3391807101902042,
            "unit": "iter/sec",
            "range": "stddev: 0.02914069517675773",
            "extra": "mean: 427.50010533332744 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.7528955116865146,
            "unit": "iter/sec",
            "range": "stddev: 0.04295579068706661",
            "extra": "mean: 570.4846599999959 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.896937632005916,
            "unit": "iter/sec",
            "range": "stddev: 0.037815009157867945",
            "extra": "mean: 527.1654603333218 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.4257045756450606,
            "unit": "iter/sec",
            "range": "stddev: 0.05158626757554002",
            "extra": "mean: 701.4075826666613 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.2108786050719769,
            "unit": "iter/sec",
            "range": "stddev: 0.7683522284906248",
            "extra": "mean: 825.8466173333355 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.0988235247777505,
            "unit": "iter/sec",
            "range": "stddev: 0.7164103807407713",
            "extra": "mean: 910.0642436666627 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.7574731651042279,
            "unit": "iter/sec",
            "range": "stddev: 0.7669463301934866",
            "extra": "mean: 1.32017878133333 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.3798293979484704,
            "unit": "iter/sec",
            "range": "stddev: 0.1289904503555043",
            "extra": "mean: 724.7272753333126 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.8024263202162566,
            "unit": "iter/sec",
            "range": "stddev: 0.18747234351334685",
            "extra": "mean: 1.2462203380000005 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.43078088143477733,
            "unit": "iter/sec",
            "range": "stddev: 0.10911124089808424",
            "extra": "mean: 2.321365787333358 sec\nrounds: 3"
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
        "date": 1675446929592,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 3.524302690897104,
            "unit": "iter/sec",
            "range": "stddev: 0.023677910723988452",
            "extra": "mean: 283.74407299999876 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 3.6435573965918002,
            "unit": "iter/sec",
            "range": "stddev: 0.02081446048274905",
            "extra": "mean: 274.45704599999016 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 3.6439234170558805,
            "unit": "iter/sec",
            "range": "stddev: 0.038340364361415406",
            "extra": "mean: 274.429477666672 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 3.232597555123183,
            "unit": "iter/sec",
            "range": "stddev: 0.022373719345924775",
            "extra": "mean: 309.348745999993 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 3.4663561766707316,
            "unit": "iter/sec",
            "range": "stddev: 0.03594884471237937",
            "extra": "mean: 288.4873766666563 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 3.3583453115622595,
            "unit": "iter/sec",
            "range": "stddev: 0.036884653444029095",
            "extra": "mean: 297.76568733332925 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 1.4152897457404412,
            "unit": "iter/sec",
            "range": "stddev: 0.15251279041820676",
            "extra": "mean: 706.5690986666672 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.2454732682465435,
            "unit": "iter/sec",
            "range": "stddev: 0.060361123625215785",
            "extra": "mean: 802.907638000022 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 0.8856079457751095,
            "unit": "iter/sec",
            "range": "stddev: 0.023187091998280104",
            "extra": "mean: 1.1291678273333143 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.958949192949488,
            "unit": "iter/sec",
            "range": "stddev: 0.04015210640510743",
            "extra": "mean: 337.95781366668126 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 2.497651202564999,
            "unit": "iter/sec",
            "range": "stddev: 0.04652914120890536",
            "extra": "mean: 400.37616099999696 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 1.8544645118899812,
            "unit": "iter/sec",
            "range": "stddev: 0.009135506847270264",
            "extra": "mean: 539.2392216666622 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.378338489448787,
            "unit": "iter/sec",
            "range": "stddev: 0.02077497152677848",
            "extra": "mean: 725.5111916666502 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.3745590679685376,
            "unit": "iter/sec",
            "range": "stddev: 0.06673204864769484",
            "extra": "mean: 727.5060223333298 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.1123064825819844,
            "unit": "iter/sec",
            "range": "stddev: 0.10081905484532623",
            "extra": "mean: 899.0327896666676 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 0.9780123667218819,
            "unit": "iter/sec",
            "range": "stddev: 0.9667358231481933",
            "extra": "mean: 1.0224819583333253 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.8287593007119044,
            "unit": "iter/sec",
            "range": "stddev: 0.9943423024206554",
            "extra": "mean: 1.2066229593333067 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.5141912752129253,
            "unit": "iter/sec",
            "range": "stddev: 0.7546304025541158",
            "extra": "mean: 1.9448015713333575 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 0.9702293541049489,
            "unit": "iter/sec",
            "range": "stddev: 0.17075690141253067",
            "extra": "mean: 1.030684132333344 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.6814373932090092,
            "unit": "iter/sec",
            "range": "stddev: 0.13064707651212867",
            "extra": "mean: 1.4674862429999962 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.3239722245510452,
            "unit": "iter/sec",
            "range": "stddev: 0.18229352298917262",
            "extra": "mean: 3.086684364333337 sec\nrounds: 3"
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
        "date": 1675447416845,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 3.842129033735876,
            "unit": "iter/sec",
            "range": "stddev: 0.011001447123292473",
            "extra": "mean: 260.27236233335316 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 3.84954061276149,
            "unit": "iter/sec",
            "range": "stddev: 0.02591608428091791",
            "extra": "mean: 259.7712559999839 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 3.8137367706810283,
            "unit": "iter/sec",
            "range": "stddev: 0.03115525079473135",
            "extra": "mean: 262.2100213333359 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 3.5767355826553886,
            "unit": "iter/sec",
            "range": "stddev: 0.04569018942194831",
            "extra": "mean: 279.58454766667273 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 3.6831687736904155,
            "unit": "iter/sec",
            "range": "stddev: 0.038644828658626604",
            "extra": "mean: 271.50534266667137 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 3.793824755530518,
            "unit": "iter/sec",
            "range": "stddev: 0.028318426226997352",
            "extra": "mean: 263.58623933333547 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 1.7814091362285855,
            "unit": "iter/sec",
            "range": "stddev: 0.15530889064980827",
            "extra": "mean: 561.3533576666706 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.6459269871846711,
            "unit": "iter/sec",
            "range": "stddev: 0.038712365621144634",
            "extra": "mean: 607.5603643333428 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 0.8693855799028776,
            "unit": "iter/sec",
            "range": "stddev: 0.3304481615220674",
            "extra": "mean: 1.1502376196666546 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.878051459696082,
            "unit": "iter/sec",
            "range": "stddev: 0.09760800804694894",
            "extra": "mean: 347.4573036666963 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 2.892805802373235,
            "unit": "iter/sec",
            "range": "stddev: 0.06436940603858193",
            "extra": "mean: 345.6851473332942 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.075939633577021,
            "unit": "iter/sec",
            "range": "stddev: 0.044460472578271806",
            "extra": "mean: 481.70957566666556 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.5425619616378898,
            "unit": "iter/sec",
            "range": "stddev: 0.03914035586714907",
            "extra": "mean: 648.2721763333265 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.2950538853920515,
            "unit": "iter/sec",
            "range": "stddev: 0.04491352161179731",
            "extra": "mean: 772.1686419999969 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.1902930105222482,
            "unit": "iter/sec",
            "range": "stddev: 0.05527483943392263",
            "extra": "mean: 840.129271666683 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.0921658501243081,
            "unit": "iter/sec",
            "range": "stddev: 0.8902946513328278",
            "extra": "mean: 915.6118550000277 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.8926017487757064,
            "unit": "iter/sec",
            "range": "stddev: 0.9156142841120253",
            "extra": "mean: 1.1203204579999995 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.5737032767273769,
            "unit": "iter/sec",
            "range": "stddev: 0.874718885757537",
            "extra": "mean: 1.7430613360000013 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.173370388599647,
            "unit": "iter/sec",
            "range": "stddev: 0.16707307317785772",
            "extra": "mean: 852.245812333346 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.8105607335462978,
            "unit": "iter/sec",
            "range": "stddev: 0.04928337641282773",
            "extra": "mean: 1.2337138460000194 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.3507977053816486,
            "unit": "iter/sec",
            "range": "stddev: 0.04018408339606476",
            "extra": "mean: 2.8506457843333237 sec\nrounds: 3"
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
        "date": 1675611805353,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.671856842147164,
            "unit": "iter/sec",
            "range": "stddev: 0.010533958911732264",
            "extra": "mean: 214.0476546666624 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.835220215970821,
            "unit": "iter/sec",
            "range": "stddev: 0.02043455745616602",
            "extra": "mean: 206.81581299999152 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.831022647686105,
            "unit": "iter/sec",
            "range": "stddev: 0.01986178331393156",
            "extra": "mean: 206.99551066666308 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.495369023674455,
            "unit": "iter/sec",
            "range": "stddev: 0.029877317978201444",
            "extra": "mean: 222.4511479999952 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.521457975955537,
            "unit": "iter/sec",
            "range": "stddev: 0.029459091129531996",
            "extra": "mean: 221.16759799999386 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.441546312445105,
            "unit": "iter/sec",
            "range": "stddev: 0.03234388684440112",
            "extra": "mean: 225.14681366667824 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 1.5577645086693237,
            "unit": "iter/sec",
            "range": "stddev: 0.17219913904950396",
            "extra": "mean: 641.945553666659 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.0930303193486972,
            "unit": "iter/sec",
            "range": "stddev: 0.01689376188189267",
            "extra": "mean: 914.8877046666636 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 0.4226802201707402,
            "unit": "iter/sec",
            "range": "stddev: 0.10118933600018501",
            "extra": "mean: 2.3658547343333303 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.0773256814958874,
            "unit": "iter/sec",
            "range": "stddev: 0.060490377266629564",
            "extra": "mean: 481.3881659999974 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 1.016043879144608,
            "unit": "iter/sec",
            "range": "stddev: 0.01493227311657948",
            "extra": "mean: 984.2094623333443 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 0.3558144772911395,
            "unit": "iter/sec",
            "range": "stddev: 0.09457040340654223",
            "extra": "mean: 2.810453378999995 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.1633854482729007,
            "unit": "iter/sec",
            "range": "stddev: 0.04935747953042269",
            "extra": "mean: 859.5603473333332 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 0.7150411653215056,
            "unit": "iter/sec",
            "range": "stddev: 0.01614039505957322",
            "extra": "mean: 1.3985208803333269 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 0.313399534196884,
            "unit": "iter/sec",
            "range": "stddev: 0.1603613279852591",
            "extra": "mean: 3.1908152083333334 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 0.8971740825998248,
            "unit": "iter/sec",
            "range": "stddev: 0.7247472860104873",
            "extra": "mean: 1.1146108869999978 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.5558816336630437,
            "unit": "iter/sec",
            "range": "stddev: 0.8213982046379882",
            "extra": "mean: 1.7989441266666593 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.23359142182757342,
            "unit": "iter/sec",
            "range": "stddev: 0.7812299800119615",
            "extra": "mean: 4.2809791223333304 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 0.9953199118824869,
            "unit": "iter/sec",
            "range": "stddev: 0.1026363198897687",
            "extra": "mean: 1.0047020943333298 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.4527966670996936,
            "unit": "iter/sec",
            "range": "stddev: 0.3079255694282261",
            "extra": "mean: 2.208496821333332 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.21538029696989894,
            "unit": "iter/sec",
            "range": "stddev: 0.26577719456107796",
            "extra": "mean: 4.642950232999993 sec\nrounds: 3"
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
        "date": 1675612652542,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.771084791004865,
            "unit": "iter/sec",
            "range": "stddev: 0.019492441376153826",
            "extra": "mean: 209.59593966666526 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.708792896609081,
            "unit": "iter/sec",
            "range": "stddev: 0.02294787949415688",
            "extra": "mean: 212.36865199999025 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.753194856754045,
            "unit": "iter/sec",
            "range": "stddev: 0.021049684753525637",
            "extra": "mean: 210.38481066667222 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.4305061639444,
            "unit": "iter/sec",
            "range": "stddev: 0.029510751886549186",
            "extra": "mean: 225.7078453333463 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.4328904536900025,
            "unit": "iter/sec",
            "range": "stddev: 0.0289958628641833",
            "extra": "mean: 225.5864453333345 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.439300570970522,
            "unit": "iter/sec",
            "range": "stddev: 0.03001509934878282",
            "extra": "mean: 225.26071033333514 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 1.9389492862256148,
            "unit": "iter/sec",
            "range": "stddev: 0.07203547675557591",
            "extra": "mean: 515.7432466666592 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.0490040838099497,
            "unit": "iter/sec",
            "range": "stddev: 0.20211441886608872",
            "extra": "mean: 953.2851353333456 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 0.6400239760149667,
            "unit": "iter/sec",
            "range": "stddev: 0.031306344503815565",
            "extra": "mean: 1.562441467000004 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.2490440938491774,
            "unit": "iter/sec",
            "range": "stddev: 0.059890954125119945",
            "extra": "mean: 444.63334566665935 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 1.1754791407259362,
            "unit": "iter/sec",
            "range": "stddev: 0.07214459918184647",
            "extra": "mean: 850.716924999991 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 0.4627149064286824,
            "unit": "iter/sec",
            "range": "stddev: 0.04681762703472561",
            "extra": "mean: 2.161157953000005 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.1771916661417425,
            "unit": "iter/sec",
            "range": "stddev: 0.05319489614674785",
            "extra": "mean: 849.479340333346 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 0.9795064653499649,
            "unit": "iter/sec",
            "range": "stddev: 0.06936860632030169",
            "extra": "mean: 1.020922306666667 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 0.4969740045536297,
            "unit": "iter/sec",
            "range": "stddev: 0.08772859281973008",
            "extra": "mean: 2.012177680999988 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.0091139868764205,
            "unit": "iter/sec",
            "range": "stddev: 0.788543525709646",
            "extra": "mean: 990.9683276666973 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.6293244336565456,
            "unit": "iter/sec",
            "range": "stddev: 0.8004781435527257",
            "extra": "mean: 1.5890055216666685 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.28687313742935927,
            "unit": "iter/sec",
            "range": "stddev: 0.7739183874398459",
            "extra": "mean: 3.4858614123333305 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.0207318088525013,
            "unit": "iter/sec",
            "range": "stddev: 0.03175335909398596",
            "extra": "mean: 979.6892693333348 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.5749451453269318,
            "unit": "iter/sec",
            "range": "stddev: 0.1806673322747065",
            "extra": "mean: 1.739296362666683 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.2212039940046635,
            "unit": "iter/sec",
            "range": "stddev: 0.6111831571902651",
            "extra": "mean: 4.5207140336666685 sec\nrounds: 3"
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
        "date": 1675615309554,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.82110889747206,
            "unit": "iter/sec",
            "range": "stddev: 0.018680687727016677",
            "extra": "mean: 207.42116000000502 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.804103342238912,
            "unit": "iter/sec",
            "range": "stddev: 0.017951619354104796",
            "extra": "mean: 208.1553890000123 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.825734840903848,
            "unit": "iter/sec",
            "range": "stddev: 0.019713073588218815",
            "extra": "mean: 207.22232633335125 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.506834558272308,
            "unit": "iter/sec",
            "range": "stddev: 0.02896360301875111",
            "extra": "mean: 221.88522499999408 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.533202542179646,
            "unit": "iter/sec",
            "range": "stddev: 0.028214637599288696",
            "extra": "mean: 220.59459966665904 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.5155745507782905,
            "unit": "iter/sec",
            "range": "stddev: 0.029338101721918163",
            "extra": "mean: 221.45576133332648 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.0156751274152778,
            "unit": "iter/sec",
            "range": "stddev: 0.07887995873315287",
            "extra": "mean: 496.11169300000785 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.3168311656840839,
            "unit": "iter/sec",
            "range": "stddev: 0.042727757542572416",
            "extra": "mean: 759.3987946666706 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 0.6480210168249942,
            "unit": "iter/sec",
            "range": "stddev: 0.015491794074313225",
            "extra": "mean: 1.543159826666643 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.269085660126405,
            "unit": "iter/sec",
            "range": "stddev: 0.04356396907897372",
            "extra": "mean: 440.70614766667404 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 1.2728632870409629,
            "unit": "iter/sec",
            "range": "stddev: 0.03690666312628342",
            "extra": "mean: 785.6303266666677 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 0.44185820165139683,
            "unit": "iter/sec",
            "range": "stddev: 0.24856071787741343",
            "extra": "mean: 2.263169488000017 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.1940055243984822,
            "unit": "iter/sec",
            "range": "stddev: 0.0084717932119662",
            "extra": "mean: 837.517063000007 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 0.956262413015247,
            "unit": "iter/sec",
            "range": "stddev: 0.04049229894964463",
            "extra": "mean: 1.0457380593333596 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 0.4976631146036517,
            "unit": "iter/sec",
            "range": "stddev: 0.047251823827496535",
            "extra": "mean: 2.0093914349999977 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.053489108361873,
            "unit": "iter/sec",
            "range": "stddev: 0.7660341999776995",
            "extra": "mean: 949.2267096666561 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.5743772796391705,
            "unit": "iter/sec",
            "range": "stddev: 1.0138234251265967",
            "extra": "mean: 1.7410159409999817 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.2816551592478455,
            "unit": "iter/sec",
            "range": "stddev: 0.686693946164925",
            "extra": "mean: 3.550440910333331 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.008902274540932,
            "unit": "iter/sec",
            "range": "stddev: 0.04413789687073061",
            "extra": "mean: 991.1762766666546 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.5896222637247296,
            "unit": "iter/sec",
            "range": "stddev: 0.2354660395753097",
            "extra": "mean: 1.6960010866666646 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.21573537479537924,
            "unit": "iter/sec",
            "range": "stddev: 0.5524258620157706",
            "extra": "mean: 4.635308423333356 sec\nrounds: 3"
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
        "date": 1675658025225,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.326656284479753,
            "unit": "iter/sec",
            "range": "stddev: 0.021410799737709228",
            "extra": "mean: 231.1253620000097 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.14196665828947,
            "unit": "iter/sec",
            "range": "stddev: 0.01905931225936948",
            "extra": "mean: 241.431204666668 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.191042257390474,
            "unit": "iter/sec",
            "range": "stddev: 0.03372152949503026",
            "extra": "mean: 238.60413200000608 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.1185586412117825,
            "unit": "iter/sec",
            "range": "stddev: 0.017631861901257168",
            "extra": "mean: 242.80338999999648 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 3.985977315858974,
            "unit": "iter/sec",
            "range": "stddev: 0.0412509529417943",
            "extra": "mean: 250.8795009999953 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 3.8288810372890514,
            "unit": "iter/sec",
            "range": "stddev: 0.03068806512396711",
            "extra": "mean: 261.17290933333 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 1.4413001909064167,
            "unit": "iter/sec",
            "range": "stddev: 0.1461632322562049",
            "extra": "mean: 693.8179889999958 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.097630029656654,
            "unit": "iter/sec",
            "range": "stddev: 0.09300822293318818",
            "extra": "mean: 911.0537913333209 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 0.6656117789386771,
            "unit": "iter/sec",
            "range": "stddev: 0.05949027157120072",
            "extra": "mean: 1.5023772589999946 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 1.7019029079662629,
            "unit": "iter/sec",
            "range": "stddev: 0.0869496420267125",
            "extra": "mean: 587.5775846666708 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 0.918263883617091,
            "unit": "iter/sec",
            "range": "stddev: 0.22616275870570643",
            "extra": "mean: 1.089011577000008 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 0.40645832526089887,
            "unit": "iter/sec",
            "range": "stddev: 0.10295738865012097",
            "extra": "mean: 2.460276830000017 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.2153685004646237,
            "unit": "iter/sec",
            "range": "stddev: 0.13413228682547185",
            "extra": "mean: 822.795719666677 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 0.8830330649302858,
            "unit": "iter/sec",
            "range": "stddev: 0.1308195749184639",
            "extra": "mean: 1.1324604249999954 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 0.5187934383443726,
            "unit": "iter/sec",
            "range": "stddev: 0.046578006323892265",
            "extra": "mean: 1.92754943700002 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 0.5780482644330963,
            "unit": "iter/sec",
            "range": "stddev: 0.8813153086227126",
            "extra": "mean: 1.7299593503333501 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.5180383834175146,
            "unit": "iter/sec",
            "range": "stddev: 0.9039807209116216",
            "extra": "mean: 1.9303588923333639 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.2829825257334836,
            "unit": "iter/sec",
            "range": "stddev: 0.8162097572823711",
            "extra": "mean: 3.5337871036666493 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 0.6045061328283706,
            "unit": "iter/sec",
            "range": "stddev: 0.21800113137377977",
            "extra": "mean: 1.654242935999984 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.3543298647843868,
            "unit": "iter/sec",
            "range": "stddev: 0.15081203196980783",
            "extra": "mean: 2.822228943666687 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.1891367803108976,
            "unit": "iter/sec",
            "range": "stddev: 0.9810455570567501",
            "extra": "mean: 5.287178931333339 sec\nrounds: 3"
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
        "date": 1675663526330,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 5.493159268055707,
            "unit": "iter/sec",
            "range": "stddev: 0.018723586734703788",
            "extra": "mean: 182.0446033333288 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 5.532415928822119,
            "unit": "iter/sec",
            "range": "stddev: 0.017558761702817376",
            "extra": "mean: 180.7528596666638 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 5.559109360339317,
            "unit": "iter/sec",
            "range": "stddev: 0.017261170037507694",
            "extra": "mean: 179.88493033332986 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 5.124796026285051,
            "unit": "iter/sec",
            "range": "stddev: 0.021973846526705667",
            "extra": "mean: 195.12971733333492 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 5.15290279752935,
            "unit": "iter/sec",
            "range": "stddev: 0.024252618528858134",
            "extra": "mean: 194.06537233333174 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 5.120425005652822,
            "unit": "iter/sec",
            "range": "stddev: 0.026160821556766314",
            "extra": "mean: 195.29628866666826 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.2232523044204537,
            "unit": "iter/sec",
            "range": "stddev: 0.06858898527695129",
            "extra": "mean: 449.7915050000027 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.2725606179573605,
            "unit": "iter/sec",
            "range": "stddev: 0.34595772104293027",
            "extra": "mean: 785.817183000006 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 0.8880459898415457,
            "unit": "iter/sec",
            "range": "stddev: 0.044372861761238655",
            "extra": "mean: 1.1260678066666685 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.4671114694851557,
            "unit": "iter/sec",
            "range": "stddev: 0.0480513346916913",
            "extra": "mean: 405.3323136666715 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 1.448608516032922,
            "unit": "iter/sec",
            "range": "stddev: 0.025890913671665038",
            "extra": "mean: 690.3176316666588 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 0.5385052083895294,
            "unit": "iter/sec",
            "range": "stddev: 0.030234183802279626",
            "extra": "mean: 1.8569922526666574 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.370122620653905,
            "unit": "iter/sec",
            "range": "stddev: 0.09350448782655482",
            "extra": "mean: 729.8616816666671 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.0876569972782486,
            "unit": "iter/sec",
            "range": "stddev: 0.017289948352951556",
            "extra": "mean: 919.4074993333364 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 0.7195792707504806,
            "unit": "iter/sec",
            "range": "stddev: 0.2113266710085364",
            "extra": "mean: 1.3897009553333248 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.0631259311395156,
            "unit": "iter/sec",
            "range": "stddev: 0.7374630738443728",
            "extra": "mean: 940.622338999996 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.72688906923066,
            "unit": "iter/sec",
            "range": "stddev: 0.7357058972209197",
            "extra": "mean: 1.375725736333332 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.3606020661426672,
            "unit": "iter/sec",
            "range": "stddev: 0.9962116147642807",
            "extra": "mean: 2.773139962000007 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 0.9624435172016038,
            "unit": "iter/sec",
            "range": "stddev: 0.1373015669351109",
            "extra": "mean: 1.0390220123333525 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.5377954232025494,
            "unit": "iter/sec",
            "range": "stddev: 0.2543955086636772",
            "extra": "mean: 1.8594431206666684 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.2603864384457132,
            "unit": "iter/sec",
            "range": "stddev: 0.7910997917825904",
            "extra": "mean: 3.840445784999995 sec\nrounds: 3"
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
        "date": 1675862039404,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 5.211171512854544,
            "unit": "iter/sec",
            "range": "stddev: 0.01871111115467292",
            "extra": "mean: 191.89543033332748 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 5.304345345344601,
            "unit": "iter/sec",
            "range": "stddev: 0.015458458692707004",
            "extra": "mean: 188.52467833333245 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 5.280704898906586,
            "unit": "iter/sec",
            "range": "stddev: 0.018219966051157093",
            "extra": "mean: 189.36865800000646 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.862903721508839,
            "unit": "iter/sec",
            "range": "stddev: 0.02404727003174622",
            "extra": "mean: 205.63845333333575 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.531543092654598,
            "unit": "iter/sec",
            "range": "stddev: 0.024124792552551393",
            "extra": "mean: 220.67538133333642 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.687803762359021,
            "unit": "iter/sec",
            "range": "stddev: 0.02749151542593006",
            "extra": "mean: 213.3195096666706 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 1.8486915786447053,
            "unit": "iter/sec",
            "range": "stddev: 0.05819137480095307",
            "extra": "mean: 540.9231110000027 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.349357408947215,
            "unit": "iter/sec",
            "range": "stddev: 0.026364120777771453",
            "extra": "mean: 741.0934963333489 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 0.7420073212220081,
            "unit": "iter/sec",
            "range": "stddev: 0.02108790615897118",
            "extra": "mean: 1.3476955973333322 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.2121958492852603,
            "unit": "iter/sec",
            "range": "stddev: 0.04864299047139042",
            "extra": "mean: 452.0395426666634 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 1.1492674955712046,
            "unit": "iter/sec",
            "range": "stddev: 0.03562822469182046",
            "extra": "mean: 870.119448999977 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 0.4718384539142527,
            "unit": "iter/sec",
            "range": "stddev: 0.10674156265462278",
            "extra": "mean: 2.119369440333344 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.2250113772625526,
            "unit": "iter/sec",
            "range": "stddev: 0.07741252783039383",
            "extra": "mean: 816.3189489999922 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.1519506920868812,
            "unit": "iter/sec",
            "range": "stddev: 0.14760838266444468",
            "extra": "mean: 868.0927116666718 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 0.5975989728229814,
            "unit": "iter/sec",
            "range": "stddev: 0.12221516082429738",
            "extra": "mean: 1.6733629833333339 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 0.8547045591511536,
            "unit": "iter/sec",
            "range": "stddev: 0.8998235516658235",
            "extra": "mean: 1.1699949289999647 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.6117957793018794,
            "unit": "iter/sec",
            "range": "stddev: 0.9522255000259243",
            "extra": "mean: 1.6345323616666672 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.3323778259680124,
            "unit": "iter/sec",
            "range": "stddev: 0.7858742955899514",
            "extra": "mean: 3.0086242880000023 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 0.8276458005906039,
            "unit": "iter/sec",
            "range": "stddev: 0.05028595670768764",
            "extra": "mean: 1.2082463286666894 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.5153556891120001,
            "unit": "iter/sec",
            "range": "stddev: 0.3398357714245826",
            "extra": "mean: 1.940407413999992 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.17344185970911108,
            "unit": "iter/sec",
            "range": "stddev: 0.5068479639753417",
            "extra": "mean: 5.7656208350000115 sec\nrounds: 3"
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
        "date": 1675864289618,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 5.409227312018824,
            "unit": "iter/sec",
            "range": "stddev: 0.01749232333479364",
            "extra": "mean: 184.86928766666702 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 5.418689787180287,
            "unit": "iter/sec",
            "range": "stddev: 0.017435594643582377",
            "extra": "mean: 184.5464566666711 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 5.457331650568701,
            "unit": "iter/sec",
            "range": "stddev: 0.016541274161127186",
            "extra": "mean: 183.2397340000019 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 5.045647671747438,
            "unit": "iter/sec",
            "range": "stddev: 0.02575647071547784",
            "extra": "mean: 198.19061200000002 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.728241126074962,
            "unit": "iter/sec",
            "range": "stddev: 0.03480093986383257",
            "extra": "mean: 211.49513599999636 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.691105789145431,
            "unit": "iter/sec",
            "range": "stddev: 0.04303757218007454",
            "extra": "mean: 213.16935599999928 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 1.9173099975079906,
            "unit": "iter/sec",
            "range": "stddev: 0.09895814847511274",
            "extra": "mean: 521.5640669999857 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.635808595205339,
            "unit": "iter/sec",
            "range": "stddev: 0.027306602015059883",
            "extra": "mean: 611.3184653333311 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 0.8876736071725727,
            "unit": "iter/sec",
            "range": "stddev: 0.04168385199283221",
            "extra": "mean: 1.1265401966666673 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.5515849745452295,
            "unit": "iter/sec",
            "range": "stddev: 0.03569683723312347",
            "extra": "mean: 391.9132656666591 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 1.4595805559666166,
            "unit": "iter/sec",
            "range": "stddev: 0.060560314247392",
            "extra": "mean: 685.1283376666686 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 0.6004084959657003,
            "unit": "iter/sec",
            "range": "stddev: 0.10281555767501771",
            "extra": "mean: 1.6655327276666771 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.8556284084615255,
            "unit": "iter/sec",
            "range": "stddev: 0.10029776650192444",
            "extra": "mean: 538.900997333343 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.2335825936364497,
            "unit": "iter/sec",
            "range": "stddev: 0.02332675519732763",
            "extra": "mean: 810.6469766666559 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 0.8149327720476254,
            "unit": "iter/sec",
            "range": "stddev: 0.07024233073191394",
            "extra": "mean: 1.227095086000001 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.083858612704752,
            "unit": "iter/sec",
            "range": "stddev: 0.7636070062510513",
            "extra": "mean: 922.6295646666642 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.7528190848264332,
            "unit": "iter/sec",
            "range": "stddev: 0.7282785413127308",
            "extra": "mean: 1.3283403943333287 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.41849968733407245,
            "unit": "iter/sec",
            "range": "stddev: 0.9376989288002479",
            "extra": "mean: 2.3894880456666576 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.1363019906893912,
            "unit": "iter/sec",
            "range": "stddev: 0.09675678149634756",
            "extra": "mean: 880.0477409999985 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.6074678609530175,
            "unit": "iter/sec",
            "range": "stddev: 0.28579545786410593",
            "extra": "mean: 1.6461776239999988 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.25474081411788824,
            "unit": "iter/sec",
            "range": "stddev: 0.7005788889966189",
            "extra": "mean: 3.925558625000008 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}