window.BENCHMARK_DATA = {
  "lastUpdate": 1674821326649,
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
      }
    ]
  }
}