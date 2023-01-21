window.BENCHMARK_DATA = {
  "lastUpdate": 1674275815903,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark with pytest-benchmark": [
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
          "id": "a40faaac6a9955291a8f20949a662e319b591561",
          "message": "update workflow",
          "timestamp": "2023-01-20T10:22:38+08:00",
          "tree_id": "0ed6afa154dab3f43a3a2875a5338db0ee4d3e3c",
          "url": "https://github.com/Yiling-J/cacheme/commit/a40faaac6a9955291a8f20949a662e319b591561"
        },
        "date": 1674181521332,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 6.2385900736526905,
            "unit": "iter/sec",
            "range": "stddev: 0.010296970371894391",
            "extra": "mean: 160.292628333328 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.516099418058066,
            "unit": "iter/sec",
            "range": "stddev: 0.018593725751578884",
            "extra": "mean: 153.46604399998873 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.468321244698137,
            "unit": "iter/sec",
            "range": "stddev: 0.019943004396979682",
            "extra": "mean: 154.59961900000962 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 6.031960851255098,
            "unit": "iter/sec",
            "range": "stddev: 0.0038500060168246975",
            "extra": "mean: 165.78356933333302 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 6.517447093988553,
            "unit": "iter/sec",
            "range": "stddev: 0.009298340651112994",
            "extra": "mean: 153.43431033331476 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 6.464305755249046,
            "unit": "iter/sec",
            "range": "stddev: 0.01743913899276636",
            "extra": "mean: 154.695653000014 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.836114864331169,
            "unit": "iter/sec",
            "range": "stddev: 0.07798853401797717",
            "extra": "mean: 352.59502799997716 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.4781698902379246,
            "unit": "iter/sec",
            "range": "stddev: 0.02404027273480796",
            "extra": "mean: 403.5235856666759 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.4247373890206942,
            "unit": "iter/sec",
            "range": "stddev: 0.09518310910536405",
            "extra": "mean: 701.883735000005 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 1.0935406443774784,
            "unit": "iter/sec",
            "range": "stddev: 0.3306415532342814",
            "extra": "mean: 914.460752000006 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.9963321049813975,
            "unit": "iter/sec",
            "range": "stddev: 0.3168916232539944",
            "extra": "mean: 1.0036813979999881 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.7684899075206711,
            "unit": "iter/sec",
            "range": "stddev: 0.18715585056033743",
            "extra": "mean: 1.301253263333327 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9603760562194174,
            "unit": "iter/sec",
            "range": "stddev: 0.8409255455989516",
            "extra": "mean: 1.0412587793333425 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.9284400777545994,
            "unit": "iter/sec",
            "range": "stddev: 1.0103620965791684",
            "extra": "mean: 1.0770754343333238 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.7186327609862855,
            "unit": "iter/sec",
            "range": "stddev: 1.0564679056795285",
            "extra": "mean: 1.3915313276666552 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.6656488108870093,
            "unit": "iter/sec",
            "range": "stddev: 0.284618559439334",
            "extra": "mean: 600.3666519999911 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 1.0384985641706743,
            "unit": "iter/sec",
            "range": "stddev: 0.3862908840613145",
            "extra": "mean: 962.9286303333325 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.7419822395307457,
            "unit": "iter/sec",
            "range": "stddev: 0.8742763225311577",
            "extra": "mean: 1.3477411543333346 sec\nrounds: 3"
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
          "id": "c44808df1d94e8f4f40d8f8de0392bb9f63a44cc",
          "message": "exclude test creation from benchmark",
          "timestamp": "2023-01-20T10:33:10+08:00",
          "tree_id": "2d5fe1cd1b24d45857d7e66a413ce858f49cbc51",
          "url": "https://github.com/Yiling-J/cacheme/commit/c44808df1d94e8f4f40d8f8de0392bb9f63a44cc"
        },
        "date": 1674182166125,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 7.191299844633986,
            "unit": "iter/sec",
            "range": "stddev: 0.015105417692325984",
            "extra": "mean: 139.0569190000027 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 7.186960094595732,
            "unit": "iter/sec",
            "range": "stddev: 0.01988582490668088",
            "extra": "mean: 139.14088666666657 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.899837680628526,
            "unit": "iter/sec",
            "range": "stddev: 0.01730829606206779",
            "extra": "mean: 144.93094566666778 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 6.699789398150012,
            "unit": "iter/sec",
            "range": "stddev: 0.013685459894050202",
            "extra": "mean: 149.2584230000015 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 6.991866471273363,
            "unit": "iter/sec",
            "range": "stddev: 0.014839833325605104",
            "extra": "mean: 143.02332633333017 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 6.911580359804097,
            "unit": "iter/sec",
            "range": "stddev: 0.021858426774284838",
            "extra": "mean: 144.68471000000704 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.4739136586832147,
            "unit": "iter/sec",
            "range": "stddev: 0.21305410414707576",
            "extra": "mean: 404.2178256666678 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.497279713208404,
            "unit": "iter/sec",
            "range": "stddev: 0.02568113694126677",
            "extra": "mean: 400.43571999999966 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.4818167569750262,
            "unit": "iter/sec",
            "range": "stddev: 0.012228990050992296",
            "extra": "mean: 674.8472746666702 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 1.1258552396078547,
            "unit": "iter/sec",
            "range": "stddev: 0.287511712390368",
            "extra": "mean: 888.2136573333431 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 1.004698217359731,
            "unit": "iter/sec",
            "range": "stddev: 0.21411513600914908",
            "extra": "mean: 995.3237526666688 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.7409679877555129,
            "unit": "iter/sec",
            "range": "stddev: 0.10655056814650972",
            "extra": "mean: 1.3495859693333425 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 1.1154661541442805,
            "unit": "iter/sec",
            "range": "stddev: 0.9341904016401483",
            "extra": "mean: 896.4861876666627 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.9742060838550297,
            "unit": "iter/sec",
            "range": "stddev: 0.9810052208697336",
            "extra": "mean: 1.0264768580000048 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.5903658107701176,
            "unit": "iter/sec",
            "range": "stddev: 1.278722518659796",
            "extra": "mean: 1.6938650269999964 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.5806593531128565,
            "unit": "iter/sec",
            "range": "stddev: 0.20506683546575222",
            "extra": "mean: 632.6473809999982 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 1.2766423040972972,
            "unit": "iter/sec",
            "range": "stddev: 0.4090313061194138",
            "extra": "mean: 783.3047650000063 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.7126575662895902,
            "unit": "iter/sec",
            "range": "stddev: 0.9118085970935782",
            "extra": "mean: 1.4031984606666583 sec\nrounds: 3"
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
          "id": "0c2f89ceeeaae611f84c4ccee7737d3f9d58a7e7",
          "message": "add read only bench",
          "timestamp": "2023-01-20T11:57:56+08:00",
          "tree_id": "e3c636c197995f0715958ca1d71c0e7fede46bb5",
          "url": "https://github.com/Yiling-J/cacheme/commit/0c2f89ceeeaae611f84c4ccee7737d3f9d58a7e7"
        },
        "date": 1674187395184,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 6.973792114971983,
            "unit": "iter/sec",
            "range": "stddev: 0.01629909447430597",
            "extra": "mean: 143.39400766666208 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.980986027974581,
            "unit": "iter/sec",
            "range": "stddev: 0.0208819785068127",
            "extra": "mean: 143.24624000001526 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.396450423736711,
            "unit": "iter/sec",
            "range": "stddev: 0.02227559771900618",
            "extra": "mean: 156.3367076666585 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 6.231843031972216,
            "unit": "iter/sec",
            "range": "stddev: 0.01786350026538743",
            "extra": "mean: 160.46617266666394 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 6.615947314935312,
            "unit": "iter/sec",
            "range": "stddev: 0.024579176301178476",
            "extra": "mean: 151.14993400000762 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 6.717341574992439,
            "unit": "iter/sec",
            "range": "stddev: 0.026438056875277966",
            "extra": "mean: 148.86841599998965 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.7640800158338683,
            "unit": "iter/sec",
            "range": "stddev: 0.10926806773741442",
            "extra": "mean: 361.7840273333475 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.097057409043502,
            "unit": "iter/sec",
            "range": "stddev: 0.06395256517976701",
            "extra": "mean: 476.8586666666958 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.1250457401408571,
            "unit": "iter/sec",
            "range": "stddev: 0.04189502168027255",
            "extra": "mean: 888.8527500000123 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 1.0455203100443948,
            "unit": "iter/sec",
            "range": "stddev: 0.35718601375087866",
            "extra": "mean: 956.461572666664 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.9724631534351348,
            "unit": "iter/sec",
            "range": "stddev: 0.298393634967507",
            "extra": "mean: 1.0283165963333356 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.7217594168785785,
            "unit": "iter/sec",
            "range": "stddev: 0.06461488176689642",
            "extra": "mean: 1.3855032253333661 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9864162158437599,
            "unit": "iter/sec",
            "range": "stddev: 0.936816078888275",
            "extra": "mean: 1.0137708443333129 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.8769049571256657,
            "unit": "iter/sec",
            "range": "stddev: 0.9846359062271189",
            "extra": "mean: 1.1403744406666572 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.5772918995032027,
            "unit": "iter/sec",
            "range": "stddev: 1.0528668176147222",
            "extra": "mean: 1.7322259343333333 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.4189674447292495,
            "unit": "iter/sec",
            "range": "stddev: 0.20126647808105078",
            "extra": "mean: 704.7378033333302 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 1.2470790597297232,
            "unit": "iter/sec",
            "range": "stddev: 0.399378048396484",
            "extra": "mean: 801.8737803333238 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.72122561052929,
            "unit": "iter/sec",
            "range": "stddev: 0.9271722081664254",
            "extra": "mean: 1.386528688666677 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.099453095384621,
            "unit": "iter/sec",
            "range": "stddev: 0.022273247314723674",
            "extra": "mean: 196.09946033331957 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.276386907532947,
            "unit": "iter/sec",
            "range": "stddev: 0.025303626552527655",
            "extra": "mean: 189.52362999997754 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.410095578102938,
            "unit": "iter/sec",
            "range": "stddev: 0.026423111444205824",
            "extra": "mean: 184.8396179999933 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.042456790905541,
            "unit": "iter/sec",
            "range": "stddev: 0.023452912042992307",
            "extra": "mean: 165.49559799998784 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.9420216153912255,
            "unit": "iter/sec",
            "range": "stddev: 0.02499866629656035",
            "extra": "mean: 168.2928916666621 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.113511562180001,
            "unit": "iter/sec",
            "range": "stddev: 0.02336044407353756",
            "extra": "mean: 163.5721123333269 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 2.86155933331208,
            "unit": "iter/sec",
            "range": "stddev: 0.038773630869703146",
            "extra": "mean: 349.45981666665676 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 1.90565388266231,
            "unit": "iter/sec",
            "range": "stddev: 0.11944752478032086",
            "extra": "mean: 524.7542636666745 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.1781770520228987,
            "unit": "iter/sec",
            "range": "stddev: 0.04141044988514325",
            "extra": "mean: 848.7688656666895 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.2927374525716722,
            "unit": "iter/sec",
            "range": "stddev: 0.05865638713289637",
            "extra": "mean: 773.5522770000026 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.1512812378447712,
            "unit": "iter/sec",
            "range": "stddev: 0.05151556919895896",
            "extra": "mean: 868.5974956666769 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.708458440521005,
            "unit": "iter/sec",
            "range": "stddev: 0.17432262137931048",
            "extra": "mean: 1.411515401333342 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.6100777937745374,
            "unit": "iter/sec",
            "range": "stddev: 0.048728740406979325",
            "extra": "mean: 621.0880020000028 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.5625681792443764,
            "unit": "iter/sec",
            "range": "stddev: 0.1927598796368046",
            "extra": "mean: 639.9720750000029 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.1567907259309893,
            "unit": "iter/sec",
            "range": "stddev: 0.06358893333925021",
            "extra": "mean: 864.4605956666851 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.1066810340628273,
            "unit": "iter/sec",
            "range": "stddev: 0.013730639085223683",
            "extra": "mean: 474.68030699999036 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.6978351172111834,
            "unit": "iter/sec",
            "range": "stddev: 0.01289256932569934",
            "extra": "mean: 588.9853436666878 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.8698450977414268,
            "unit": "iter/sec",
            "range": "stddev: 0.09094044071723366",
            "extra": "mean: 1.1496299773333476 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yiling-J",
            "username": "Yiling-J"
          },
          "committer": {
            "name": "Yiling-J",
            "username": "Yiling-J"
          },
          "id": "154746970dafd1d432e90d20da9ff49ed4c427d4",
          "message": "add set by keys to storages",
          "timestamp": "2023-01-18T13:36:28Z",
          "url": "https://github.com/Yiling-J/cacheme/pull/10/commits/154746970dafd1d432e90d20da9ff49ed4c427d4"
        },
        "date": 1674194891756,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 7.8477803710769045,
            "unit": "iter/sec",
            "range": "stddev: 0.013276603508497034",
            "extra": "mean: 127.42456499999832 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 7.760864643310758,
            "unit": "iter/sec",
            "range": "stddev: 0.020589593866293086",
            "extra": "mean: 128.85162233333367 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 7.384677370460961,
            "unit": "iter/sec",
            "range": "stddev: 0.01774393150518241",
            "extra": "mean: 135.41553000000306 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 7.112757544830078,
            "unit": "iter/sec",
            "range": "stddev: 0.012636284651339397",
            "extra": "mean: 140.59244866667106 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 7.582545198319798,
            "unit": "iter/sec",
            "range": "stddev: 0.014803678322532985",
            "extra": "mean: 131.88183833333275 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 7.728616474886281,
            "unit": "iter/sec",
            "range": "stddev: 0.016726226406944822",
            "extra": "mean: 129.38926433333128 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 3.0427715211791013,
            "unit": "iter/sec",
            "range": "stddev: 0.07704495340833728",
            "extra": "mean: 328.6477453333371 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.3415862298038737,
            "unit": "iter/sec",
            "range": "stddev: 0.05247513864571562",
            "extra": "mean: 427.0609330000023 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.4671928618884191,
            "unit": "iter/sec",
            "range": "stddev: 0.10097529521190939",
            "extra": "mean: 681.5736539999951 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 1.0980074615975388,
            "unit": "iter/sec",
            "range": "stddev: 0.2962280723156316",
            "extra": "mean: 910.7406233333393 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 1.0439523412330034,
            "unit": "iter/sec",
            "range": "stddev: 0.21329206073807988",
            "extra": "mean: 957.8981343333245 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.7568905951704574,
            "unit": "iter/sec",
            "range": "stddev: 0.13037511938827176",
            "extra": "mean: 1.3211949076666656 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 1.167266329316199,
            "unit": "iter/sec",
            "range": "stddev: 0.8137450299411262",
            "extra": "mean: 856.702514999995 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 1.0011303255266257,
            "unit": "iter/sec",
            "range": "stddev: 0.8523674194558205",
            "extra": "mean: 998.8709506666567 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.678895485373601,
            "unit": "iter/sec",
            "range": "stddev: 0.9839359899359087",
            "extra": "mean: 1.4729807776666728 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.441258845285363,
            "unit": "iter/sec",
            "range": "stddev: 0.2551861273589463",
            "extra": "mean: 693.8378926666738 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 1.2627114754559658,
            "unit": "iter/sec",
            "range": "stddev: 0.3536858066804577",
            "extra": "mean: 791.9465526666727 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.7161832205841963,
            "unit": "iter/sec",
            "range": "stddev: 0.9676023114564537",
            "extra": "mean: 1.3962907413333312 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.444215649265543,
            "unit": "iter/sec",
            "range": "stddev: 0.015458369241029633",
            "extra": "mean: 183.68118833332878 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.400193916643604,
            "unit": "iter/sec",
            "range": "stddev: 0.013341581008162507",
            "extra": "mean: 185.17853533332604 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.347183231849359,
            "unit": "iter/sec",
            "range": "stddev: 0.023305643363005016",
            "extra": "mean: 187.0143506666674 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 5.922612082615723,
            "unit": "iter/sec",
            "range": "stddev: 0.018644370587839507",
            "extra": "mean: 168.84441966665995 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.085747142663041,
            "unit": "iter/sec",
            "range": "stddev: 0.012934346023449981",
            "extra": "mean: 164.3183616666685 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.0304014851348615,
            "unit": "iter/sec",
            "range": "stddev: 0.011467957101560459",
            "extra": "mean: 165.82643833334032 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.0102932462114373,
            "unit": "iter/sec",
            "range": "stddev: 0.023816689529588566",
            "extra": "mean: 332.1935499999995 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.0947963850093116,
            "unit": "iter/sec",
            "range": "stddev: 0.060464450630814466",
            "extra": "mean: 477.3733653333352 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.2244908174935616,
            "unit": "iter/sec",
            "range": "stddev: 0.01915822329428625",
            "extra": "mean: 816.6659853333348 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.3539920701414494,
            "unit": "iter/sec",
            "range": "stddev: 0.0766881967439977",
            "extra": "mean: 738.5567626666614 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.202974344925236,
            "unit": "iter/sec",
            "range": "stddev: 0.0314208504748315",
            "extra": "mean: 831.2729229999908 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.7489428720042939,
            "unit": "iter/sec",
            "range": "stddev: 0.04128082451374958",
            "extra": "mean: 1.3352153246666678 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.8659584389068342,
            "unit": "iter/sec",
            "range": "stddev: 0.03404214990109115",
            "extra": "mean: 535.917617000005 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 2.0515655376601596,
            "unit": "iter/sec",
            "range": "stddev: 0.01849035254024613",
            "extra": "mean: 487.432636999993 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.0369331933751624,
            "unit": "iter/sec",
            "range": "stddev: 0.1487004730876909",
            "extra": "mean: 964.3822826666906 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.6991959899506783,
            "unit": "iter/sec",
            "range": "stddev: 0.0035913796313697724",
            "extra": "mean: 370.4806926666606 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.9252769382683477,
            "unit": "iter/sec",
            "range": "stddev: 0.03654082874262998",
            "extra": "mean: 519.4057956666901 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.0454925402533686,
            "unit": "iter/sec",
            "range": "stddev: 0.045952006546973845",
            "extra": "mean: 956.4869776666759 msec\nrounds: 3"
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
          "id": "8f41d8268ae02c6baf59d6d59adc11f9143a61e0",
          "message": "add set by keys to storages (#10)\n\n* add set by keys to storages\r\n\r\n* fix test",
          "timestamp": "2023-01-20T14:15:02+08:00",
          "tree_id": "3c05d4c15634cfa9c8fa260c5b92f33fa8a43a58",
          "url": "https://github.com/Yiling-J/cacheme/commit/8f41d8268ae02c6baf59d6d59adc11f9143a61e0"
        },
        "date": 1674195672950,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 5.560614035846672,
            "unit": "iter/sec",
            "range": "stddev: 0.018881755779885035",
            "extra": "mean: 179.8362543333288 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 5.879617247500544,
            "unit": "iter/sec",
            "range": "stddev: 0.023542010209822738",
            "extra": "mean: 170.079098333332 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.068667015833822,
            "unit": "iter/sec",
            "range": "stddev: 0.006011906483724526",
            "extra": "mean: 164.78083199999105 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.4217778459203645,
            "unit": "iter/sec",
            "range": "stddev: 0.025888025032049903",
            "extra": "mean: 184.44134533333076 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 6.1230807565653,
            "unit": "iter/sec",
            "range": "stddev: 0.007881873145124904",
            "extra": "mean: 163.31648066666085 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.6520490854915355,
            "unit": "iter/sec",
            "range": "stddev: 0.02181979735166594",
            "extra": "mean: 176.92698433333476 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.3534813124300116,
            "unit": "iter/sec",
            "range": "stddev: 0.08408817048991611",
            "extra": "mean: 424.90246033331874 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.2521644053046859,
            "unit": "iter/sec",
            "range": "stddev: 0.13368612014972128",
            "extra": "mean: 798.6171750000134 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.2122956989432532,
            "unit": "iter/sec",
            "range": "stddev: 0.12488765252663897",
            "extra": "mean: 824.8812569999965 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.837050240977556,
            "unit": "iter/sec",
            "range": "stddev: 0.42809107494955073",
            "extra": "mean: 1.1946714200000013 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.7053671484607573,
            "unit": "iter/sec",
            "range": "stddev: 0.403263722505881",
            "extra": "mean: 1.4177014086666588 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.5902545670280118,
            "unit": "iter/sec",
            "range": "stddev: 0.27348776190940594",
            "extra": "mean: 1.6941842653333385 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.8053061525756399,
            "unit": "iter/sec",
            "range": "stddev: 1.0859424789387118",
            "extra": "mean: 1.2417637650000113 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.6909544604948825,
            "unit": "iter/sec",
            "range": "stddev: 1.0796068464751927",
            "extra": "mean: 1.4472733836666596 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.5386524493752844,
            "unit": "iter/sec",
            "range": "stddev: 1.379390943475587",
            "extra": "mean: 1.8564846426666672 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.184088500075418,
            "unit": "iter/sec",
            "range": "stddev: 0.28814428736201486",
            "extra": "mean: 844.531468666664 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.9235399863102274,
            "unit": "iter/sec",
            "range": "stddev: 0.4216078140515974",
            "extra": "mean: 1.082790149666664 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.548206366085936,
            "unit": "iter/sec",
            "range": "stddev: 1.3391698541676758",
            "extra": "mean: 1.8241305863333253 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 4.505771810332269,
            "unit": "iter/sec",
            "range": "stddev: 0.023431313357591695",
            "extra": "mean: 221.9375596666661 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 4.400147927106437,
            "unit": "iter/sec",
            "range": "stddev: 0.020573938794724723",
            "extra": "mean: 227.2650866666671 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 4.815057648277557,
            "unit": "iter/sec",
            "range": "stddev: 0.019842979721704932",
            "extra": "mean: 207.68183333333923 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 5.7650390093672,
            "unit": "iter/sec",
            "range": "stddev: 0.01947454648077771",
            "extra": "mean: 173.45936399999573 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.604267652806686,
            "unit": "iter/sec",
            "range": "stddev: 0.007288142322215081",
            "extra": "mean: 178.43544633332917 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 5.508013655886085,
            "unit": "iter/sec",
            "range": "stddev: 0.00670222896324535",
            "extra": "mean: 181.55365299999934 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 2.4724798569126634,
            "unit": "iter/sec",
            "range": "stddev: 0.03927861300010021",
            "extra": "mean: 404.45223333333047 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 1.877359986999057,
            "unit": "iter/sec",
            "range": "stddev: 0.061741226732037115",
            "extra": "mean: 532.6628919999999 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.124787877238426,
            "unit": "iter/sec",
            "range": "stddev: 0.05159364992711996",
            "extra": "mean: 889.0565236666627 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.0188796109620935,
            "unit": "iter/sec",
            "range": "stddev: 0.08476588913575374",
            "extra": "mean: 981.4702240000012 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.8738899638125703,
            "unit": "iter/sec",
            "range": "stddev: 0.03753193425987029",
            "extra": "mean: 1.1443088276666344 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.6615865610528067,
            "unit": "iter/sec",
            "range": "stddev: 0.051732263770959144",
            "extra": "mean: 1.5115180066666767 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.695631207211958,
            "unit": "iter/sec",
            "range": "stddev: 0.04823658072774475",
            "extra": "mean: 589.7508820000136 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.254638263308644,
            "unit": "iter/sec",
            "range": "stddev: 0.12455245584358186",
            "extra": "mean: 797.0424856666417 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.8732007774386037,
            "unit": "iter/sec",
            "range": "stddev: 0.03442257982408792",
            "extra": "mean: 1.1452119899999882 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.6428646321293618,
            "unit": "iter/sec",
            "range": "stddev: 0.07485965140733435",
            "extra": "mean: 608.6928773333398 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.1629550764161112,
            "unit": "iter/sec",
            "range": "stddev: 0.07474326142670948",
            "extra": "mean: 859.8784426666839 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.8242999537847969,
            "unit": "iter/sec",
            "range": "stddev: 0.12473752131673393",
            "extra": "mean: 1.2131506200000028 sec\nrounds: 3"
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
          "id": "b9a6a0e558e11235e03c215ac3978f00084144ce",
          "message": "ignore empty pending nodes",
          "timestamp": "2023-01-20T22:33:17+08:00",
          "tree_id": "71c5f7164258f7db948cc88558bf3809f546f2cd",
          "url": "https://github.com/Yiling-J/cacheme/commit/b9a6a0e558e11235e03c215ac3978f00084144ce"
        },
        "date": 1674225516304,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 7.181412831758119,
            "unit": "iter/sec",
            "range": "stddev: 0.008929253351015918",
            "extra": "mean: 139.2483656666741 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 7.229352768481534,
            "unit": "iter/sec",
            "range": "stddev: 0.014740837144323289",
            "extra": "mean: 138.3249693333255 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.960267032593626,
            "unit": "iter/sec",
            "range": "stddev: 0.012438457068992595",
            "extra": "mean: 143.67264866666574 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 6.770117079629375,
            "unit": "iter/sec",
            "range": "stddev: 0.00905513899438957",
            "extra": "mean: 147.7079329999924 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 7.120825275545998,
            "unit": "iter/sec",
            "range": "stddev: 0.009345042456465802",
            "extra": "mean: 140.43316066666497 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 7.111853154493706,
            "unit": "iter/sec",
            "range": "stddev: 0.01438621610148694",
            "extra": "mean: 140.6103273333391 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.841775862148888,
            "unit": "iter/sec",
            "range": "stddev: 0.08657524712220518",
            "extra": "mean: 351.8926363333321 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.1195932174481094,
            "unit": "iter/sec",
            "range": "stddev: 0.08916654296219491",
            "extra": "mean: 471.78863933333065 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.7567212227177897,
            "unit": "iter/sec",
            "range": "stddev: 0.10207600811909849",
            "extra": "mean: 569.2422833333334 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 1.3406742110641063,
            "unit": "iter/sec",
            "range": "stddev: 0.18981745066324518",
            "extra": "mean: 745.8933659999994 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 1.1775156564689586,
            "unit": "iter/sec",
            "range": "stddev: 0.22205819109086722",
            "extra": "mean: 849.245608333329 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.8901384700205128,
            "unit": "iter/sec",
            "range": "stddev: 0.07164360925659767",
            "extra": "mean: 1.123420718999995 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 1.112270441715218,
            "unit": "iter/sec",
            "range": "stddev: 0.9934123459896098",
            "extra": "mean: 899.0619209999977 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 1.0558690026070034,
            "unit": "iter/sec",
            "range": "stddev: 0.9407110595733549",
            "extra": "mean: 947.0871836666674 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.7827216424532462,
            "unit": "iter/sec",
            "range": "stddev: 1.034143676666684",
            "extra": "mean: 1.2775933943333275 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.7655512719214494,
            "unit": "iter/sec",
            "range": "stddev: 0.1734531431556801",
            "extra": "mean: 566.3953326666634 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 1.3221501297779052,
            "unit": "iter/sec",
            "range": "stddev: 0.4473072692655696",
            "extra": "mean: 756.3437596666726 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.8975555493771095,
            "unit": "iter/sec",
            "range": "stddev: 0.7834353133550779",
            "extra": "mean: 1.114137170333341 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.828843540304773,
            "unit": "iter/sec",
            "range": "stddev: 0.013181469981137462",
            "extra": "mean: 171.5606180000009 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.859116786892161,
            "unit": "iter/sec",
            "range": "stddev: 0.013983674477538866",
            "extra": "mean: 170.67418800000192 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.829867829939209,
            "unit": "iter/sec",
            "range": "stddev: 0.014030070321634582",
            "extra": "mean: 171.53047533333657 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.64750745703023,
            "unit": "iter/sec",
            "range": "stddev: 0.014612772390555383",
            "extra": "mean: 150.43232466665776 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.508619522125394,
            "unit": "iter/sec",
            "range": "stddev: 0.01678661916704523",
            "extra": "mean: 153.64241166665238 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.652031089597389,
            "unit": "iter/sec",
            "range": "stddev: 0.014888439022514804",
            "extra": "mean: 150.3300250000071 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.1846163903662568,
            "unit": "iter/sec",
            "range": "stddev: 0.011568626997069753",
            "extra": "mean: 314.0095626666645 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.82122809418774,
            "unit": "iter/sec",
            "range": "stddev: 0.02183589709346402",
            "extra": "mean: 354.4555656666641 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.6404035407801991,
            "unit": "iter/sec",
            "range": "stddev: 0.017025520130389184",
            "extra": "mean: 609.6060970000016 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.5899532010472215,
            "unit": "iter/sec",
            "range": "stddev: 0.024285648931225045",
            "extra": "mean: 628.9493296666535 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.4387039664360384,
            "unit": "iter/sec",
            "range": "stddev: 0.033166243532555685",
            "extra": "mean: 695.0700236666497 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.9700893931587723,
            "unit": "iter/sec",
            "range": "stddev: 0.040903869919837875",
            "extra": "mean: 1.0308328356666532 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 3.125541822442245,
            "unit": "iter/sec",
            "range": "stddev: 0.02689299939009428",
            "extra": "mean: 319.94452699999937 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 2.314558943538262,
            "unit": "iter/sec",
            "range": "stddev: 0.04850766337873044",
            "extra": "mean: 432.0477570000018 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.3521524718461173,
            "unit": "iter/sec",
            "range": "stddev: 0.033887802977194625",
            "extra": "mean: 739.5615663333311 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.294461265038083,
            "unit": "iter/sec",
            "range": "stddev: 0.08458896499552138",
            "extra": "mean: 435.83215599998465 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 2.17573993031335,
            "unit": "iter/sec",
            "range": "stddev: 0.0611177813055245",
            "extra": "mean: 459.61375533333165 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.1708989820598854,
            "unit": "iter/sec",
            "range": "stddev: 0.018900685160970977",
            "extra": "mean: 854.0446403333325 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 5.485145686109275,
            "unit": "iter/sec",
            "range": "stddev: 0.0021681746022719456",
            "extra": "mean: 182.31056333333603 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 5.2599062668224335,
            "unit": "iter/sec",
            "range": "stddev: 0.013685374785638131",
            "extra": "mean: 190.11745633332566 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 5.489088658741038,
            "unit": "iter/sec",
            "range": "stddev: 0.002299383003266403",
            "extra": "mean: 182.17960433332792 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 5.205593817287014,
            "unit": "iter/sec",
            "range": "stddev: 0.0056748062667485374",
            "extra": "mean: 192.1010426666688 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 5.161374485173703,
            "unit": "iter/sec",
            "range": "stddev: 0.013524375204790162",
            "extra": "mean: 193.7468406666767 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 5.160951835171797,
            "unit": "iter/sec",
            "range": "stddev: 0.01123416949162834",
            "extra": "mean: 193.76270733336773 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 4.822886897883186,
            "unit": "iter/sec",
            "range": "stddev: 0.07112731152441402",
            "extra": "mean: 207.3446923333222 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.6737531724418755,
            "unit": "iter/sec",
            "range": "stddev: 0.014727751315194921",
            "extra": "mean: 272.20119400000914 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 1.8212181619315422,
            "unit": "iter/sec",
            "range": "stddev: 0.15415909250365653",
            "extra": "mean: 549.0830373333324 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 2.693536866100946,
            "unit": "iter/sec",
            "range": "stddev: 0.10954861973013916",
            "extra": "mean: 371.259073000014 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 2.282434532500558,
            "unit": "iter/sec",
            "range": "stddev: 0.11996174228646263",
            "extra": "mean: 438.12866733331174 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.5365832199214695,
            "unit": "iter/sec",
            "range": "stddev: 0.06884479997533735",
            "extra": "mean: 650.7945596666787 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.5222058807839254,
            "unit": "iter/sec",
            "range": "stddev: 0.8197667657252801",
            "extra": "mean: 656.9413590000105 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.176874738558467,
            "unit": "iter/sec",
            "range": "stddev: 0.9254251037825932",
            "extra": "mean: 849.7081016666925 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.8539254643478739,
            "unit": "iter/sec",
            "range": "stddev: 0.9268363854450851",
            "extra": "mean: 1.1710623956666761 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 3.3983119886565,
            "unit": "iter/sec",
            "range": "stddev: 0.16940426726415198",
            "extra": "mean: 294.26374133333866 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 2.130324607530311,
            "unit": "iter/sec",
            "range": "stddev: 0.24245370923733556",
            "extra": "mean: 469.4120306666794 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.9722127246941079,
            "unit": "iter/sec",
            "range": "stddev: 0.5844403510877465",
            "extra": "mean: 1.0285814766666779 sec\nrounds: 3"
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
          "id": "64e8f17d8634d028ba83912ae22e5627a00918ff",
          "message": "port public methods to init",
          "timestamp": "2023-01-21T09:46:14+08:00",
          "tree_id": "0ed88f14f4043c7d3a5c05d5746dd5ae1c70f1ac",
          "url": "https://github.com/Yiling-J/cacheme/commit/64e8f17d8634d028ba83912ae22e5627a00918ff"
        },
        "date": 1674265991966,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 5.947324298897118,
            "unit": "iter/sec",
            "range": "stddev: 0.01886262092278379",
            "extra": "mean: 168.14284033333138 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.598702552545839,
            "unit": "iter/sec",
            "range": "stddev: 0.011605459820315715",
            "extra": "mean: 151.54494266667484 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 5.981469109624894,
            "unit": "iter/sec",
            "range": "stddev: 0.01838821057715078",
            "extra": "mean: 167.18300833333424 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 6.116477263118181,
            "unit": "iter/sec",
            "range": "stddev: 0.014487693077256322",
            "extra": "mean: 163.4928009999991 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 6.449426381245978,
            "unit": "iter/sec",
            "range": "stddev: 0.009420086397894286",
            "extra": "mean: 155.05254899999463 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.186783849299719,
            "unit": "iter/sec",
            "range": "stddev: 0.03274810564907958",
            "extra": "mean: 192.79770066666893 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.3781776440735793,
            "unit": "iter/sec",
            "range": "stddev: 0.12818981726871176",
            "extra": "mean: 420.49003466667045 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.0115336080276407,
            "unit": "iter/sec",
            "range": "stddev: 0.023163600252503507",
            "extra": "mean: 497.1331306666684 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.3177856623412378,
            "unit": "iter/sec",
            "range": "stddev: 0.06842319354957932",
            "extra": "mean: 758.8487480000007 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.8624625560048597,
            "unit": "iter/sec",
            "range": "stddev: 0.3728330780657239",
            "extra": "mean: 1.1594706263333308 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.8234939413294271,
            "unit": "iter/sec",
            "range": "stddev: 0.404568460954203",
            "extra": "mean: 1.214338017333347 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.6541677854516753,
            "unit": "iter/sec",
            "range": "stddev: 0.1968321801897483",
            "extra": "mean: 1.5286598059999885 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.7292099808026923,
            "unit": "iter/sec",
            "range": "stddev: 1.2284614849393691",
            "extra": "mean: 1.3713471103333366 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.7530357295031342,
            "unit": "iter/sec",
            "range": "stddev: 1.1705541074501777",
            "extra": "mean: 1.3279582373333294 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.5981981117156415,
            "unit": "iter/sec",
            "range": "stddev: 1.2595982456088144",
            "extra": "mean: 1.6716869886666548 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.1232385134943235,
            "unit": "iter/sec",
            "range": "stddev: 0.37864244591026597",
            "extra": "mean: 890.2828633333305 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.9958963870275387,
            "unit": "iter/sec",
            "range": "stddev: 0.4187624801275338",
            "extra": "mean: 1.0041205219999938 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.5982486272633394,
            "unit": "iter/sec",
            "range": "stddev: 1.042119842249881",
            "extra": "mean: 1.6715458329999915 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 4.9487045494026365,
            "unit": "iter/sec",
            "range": "stddev: 0.009303008233893387",
            "extra": "mean: 202.07308599999388 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 4.431544625086246,
            "unit": "iter/sec",
            "range": "stddev: 0.020069062695125046",
            "extra": "mean: 225.65495433334112 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 4.385795097372189,
            "unit": "iter/sec",
            "range": "stddev: 0.026245928205493114",
            "extra": "mean: 228.00882800000485 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 5.254879560297368,
            "unit": "iter/sec",
            "range": "stddev: 0.03610816567297494",
            "extra": "mean: 190.29931866667008 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.282803928906729,
            "unit": "iter/sec",
            "range": "stddev: 0.02478260160066814",
            "extra": "mean: 189.2934156666589 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 5.592380803194116,
            "unit": "iter/sec",
            "range": "stddev: 0.028215661802950782",
            "extra": "mean: 178.81471866666251 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 2.624452830453845,
            "unit": "iter/sec",
            "range": "stddev: 0.008914583671513217",
            "extra": "mean: 381.0318053333314 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 1.1813636742682452,
            "unit": "iter/sec",
            "range": "stddev: 0.2618984642133985",
            "extra": "mean: 846.4793879999869 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.1996735256454374,
            "unit": "iter/sec",
            "range": "stddev: 0.01704758090518847",
            "extra": "mean: 833.5601133333247 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.072268215650266,
            "unit": "iter/sec",
            "range": "stddev: 0.07497833736366241",
            "extra": "mean: 932.6024826666716 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.0093383829056837,
            "unit": "iter/sec",
            "range": "stddev: 0.03081115510949505",
            "extra": "mean: 990.7480156666585 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.7518430537770111,
            "unit": "iter/sec",
            "range": "stddev: 0.06145892632823833",
            "extra": "mean: 1.3300648253333331 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.981630530702573,
            "unit": "iter/sec",
            "range": "stddev: 0.03756492849186238",
            "extra": "mean: 504.63493800000003 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.2899234838673208,
            "unit": "iter/sec",
            "range": "stddev: 0.0975574876405928",
            "extra": "mean: 775.2397816666606 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.9467944168714912,
            "unit": "iter/sec",
            "range": "stddev: 0.04369874470205525",
            "extra": "mean: 1.0561954973333247 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.8602210668113257,
            "unit": "iter/sec",
            "range": "stddev: 0.03466958191140572",
            "extra": "mean: 537.5705166666762 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.5997827332936916,
            "unit": "iter/sec",
            "range": "stddev: 0.025501953484332342",
            "extra": "mean: 625.0848813333315 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.8300467204579397,
            "unit": "iter/sec",
            "range": "stddev: 0.037310998312869194",
            "extra": "mean: 1.2047514619999902 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.412112263537227,
            "unit": "iter/sec",
            "range": "stddev: 0.015803012795228742",
            "extra": "mean: 226.64881133334802 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.309938108139427,
            "unit": "iter/sec",
            "range": "stddev: 0.011394201810962231",
            "extra": "mean: 232.0218933333346 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.50222029695304,
            "unit": "iter/sec",
            "range": "stddev: 0.012896379469768947",
            "extra": "mean: 222.11263199998635 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.415121119914924,
            "unit": "iter/sec",
            "range": "stddev: 0.01779388182150779",
            "extra": "mean: 226.49435266665327 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.457322726161186,
            "unit": "iter/sec",
            "range": "stddev: 0.01329052914368958",
            "extra": "mean: 224.34992066666837 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.675168723839104,
            "unit": "iter/sec",
            "range": "stddev: 0.006873125926555676",
            "extra": "mean: 213.8960236666776 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 3.7244588298935972,
            "unit": "iter/sec",
            "range": "stddev: 0.07855350455318041",
            "extra": "mean: 268.4953829999965 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 2.3633715209294013,
            "unit": "iter/sec",
            "range": "stddev: 0.10002590389332067",
            "extra": "mean: 423.1243336666542 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 1.3369519917679589,
            "unit": "iter/sec",
            "range": "stddev: 0.22568958773769862",
            "extra": "mean: 747.970013999994 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.9415423536737935,
            "unit": "iter/sec",
            "range": "stddev: 0.18950599354723854",
            "extra": "mean: 515.0544349999867 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.7268914366034724,
            "unit": "iter/sec",
            "range": "stddev: 0.13839855760416175",
            "extra": "mean: 579.0751976666494 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.0074107725474157,
            "unit": "iter/sec",
            "range": "stddev: 0.05186897211827842",
            "extra": "mean: 992.6437430000116 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.1408795279409194,
            "unit": "iter/sec",
            "range": "stddev: 0.9557139183160808",
            "extra": "mean: 876.516736000004 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.0042324746748652,
            "unit": "iter/sec",
            "range": "stddev: 0.9921210654168007",
            "extra": "mean: 995.7853636666792 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.6186916564333027,
            "unit": "iter/sec",
            "range": "stddev: 1.2260046677265293",
            "extra": "mean: 1.6163140226666428 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 2.1985321136853124,
            "unit": "iter/sec",
            "range": "stddev: 0.17638350711033432",
            "extra": "mean: 454.84893933331705 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.4505214155728121,
            "unit": "iter/sec",
            "range": "stddev: 0.4241978366476083",
            "extra": "mean: 689.4072636666996 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.7321970736950255,
            "unit": "iter/sec",
            "range": "stddev: 0.8172600358503066",
            "extra": "mean: 1.3657525219999986 sec\nrounds: 3"
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
          "id": "ba306349789e88e2c5968266f2ed46590870f234",
          "message": "clean",
          "timestamp": "2023-01-21T12:28:38+08:00",
          "tree_id": "44704fec312221b0d0eed5eb779e693c91f1c1d8",
          "url": "https://github.com/Yiling-J/cacheme/commit/ba306349789e88e2c5968266f2ed46590870f234"
        },
        "date": 1674275815612,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 4.796878467793302,
            "unit": "iter/sec",
            "range": "stddev: 0.020051540914319325",
            "extra": "mean: 208.46890466666915 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 4.936769502411407,
            "unit": "iter/sec",
            "range": "stddev: 0.010929720384009233",
            "extra": "mean: 202.561614333329 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 4.776247727692232,
            "unit": "iter/sec",
            "range": "stddev: 0.00556283558054014",
            "extra": "mean: 209.3693746666645 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 4.831667164049007,
            "unit": "iter/sec",
            "range": "stddev: 0.016044843784349904",
            "extra": "mean: 206.96789866667586 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.065950408374747,
            "unit": "iter/sec",
            "range": "stddev: 0.021510267955049664",
            "extra": "mean: 197.3963263333284 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 4.8437253628452,
            "unit": "iter/sec",
            "range": "stddev: 0.024332479504155406",
            "extra": "mean: 206.4526629999932 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 1.983912098367602,
            "unit": "iter/sec",
            "range": "stddev: 0.12055781827647566",
            "extra": "mean: 504.05459033332056 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.726653153629685,
            "unit": "iter/sec",
            "range": "stddev: 0.055873701139520636",
            "extra": "mean: 579.1551116666653 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 0.8474931729933135,
            "unit": "iter/sec",
            "range": "stddev: 0.18944358626664695",
            "extra": "mean: 1.1799505080000092 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.7456769963358109,
            "unit": "iter/sec",
            "range": "stddev: 0.5640597853204791",
            "extra": "mean: 1.3410632283333257 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.6867764743025586,
            "unit": "iter/sec",
            "range": "stddev: 0.36990698672623185",
            "extra": "mean: 1.4560778323333352 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.5232406458155846,
            "unit": "iter/sec",
            "range": "stddev: 0.15862246302738303",
            "extra": "mean: 1.9111665120000036 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.7493770653269011,
            "unit": "iter/sec",
            "range": "stddev: 1.2476209842252404",
            "extra": "mean: 1.3344416933333416 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.5782192221383009,
            "unit": "iter/sec",
            "range": "stddev: 1.1538107529789174",
            "extra": "mean: 1.7294478663333261 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.48822022708046575,
            "unit": "iter/sec",
            "range": "stddev: 1.4340362912833744",
            "extra": "mean: 2.0482559806666623 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.0393731213372104,
            "unit": "iter/sec",
            "range": "stddev: 0.25534566986356283",
            "extra": "mean: 962.1183956666547 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.7484344467160676,
            "unit": "iter/sec",
            "range": "stddev: 0.5519631281582004",
            "extra": "mean: 1.3361223609999986 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.5140195091039867,
            "unit": "iter/sec",
            "range": "stddev: 1.2442230687911529",
            "extra": "mean: 1.945451451333336 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 4.276185149204016,
            "unit": "iter/sec",
            "range": "stddev: 0.019741933281687742",
            "extra": "mean: 233.8532980000044 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 4.1065017393360534,
            "unit": "iter/sec",
            "range": "stddev: 0.014660258795335866",
            "extra": "mean: 243.51627333334136 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 4.29403377986423,
            "unit": "iter/sec",
            "range": "stddev: 0.012003585298583254",
            "extra": "mean: 232.88126066665882 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 4.803588818849843,
            "unit": "iter/sec",
            "range": "stddev: 0.02830830770545315",
            "extra": "mean: 208.1776849999907 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 4.9883982245155565,
            "unit": "iter/sec",
            "range": "stddev: 0.020460577303692037",
            "extra": "mean: 200.4651503333245 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 4.828318450803154,
            "unit": "iter/sec",
            "range": "stddev: 0.028026181416848286",
            "extra": "mean: 207.11144266668194 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 2.2013894772662796,
            "unit": "iter/sec",
            "range": "stddev: 0.024308002754672785",
            "extra": "mean: 454.25855366666684 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 1.3349585320229285,
            "unit": "iter/sec",
            "range": "stddev: 0.13336036320965375",
            "extra": "mean: 749.0869386666645 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 0.9636883210732614,
            "unit": "iter/sec",
            "range": "stddev: 0.04397738644061391",
            "extra": "mean: 1.037679899333322 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 0.9220983384129108,
            "unit": "iter/sec",
            "range": "stddev: 0.0832304937236592",
            "extra": "mean: 1.0844830300000012 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.8207058419971314,
            "unit": "iter/sec",
            "range": "stddev: 0.03505849824847647",
            "extra": "mean: 1.2184633626666634 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.571077160240177,
            "unit": "iter/sec",
            "range": "stddev: 0.08071146894395098",
            "extra": "mean: 1.7510768589999846 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.7514333402062816,
            "unit": "iter/sec",
            "range": "stddev: 0.06882771589655798",
            "extra": "mean: 570.9609249999895 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.2056567282086519,
            "unit": "iter/sec",
            "range": "stddev: 0.08394972151199111",
            "extra": "mean: 829.4234806666623 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.663176620268686,
            "unit": "iter/sec",
            "range": "stddev: 0.18923093902328816",
            "extra": "mean: 1.5078939296666551 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.3444161208382945,
            "unit": "iter/sec",
            "range": "stddev: 0.10493563774640066",
            "extra": "mean: 743.8173230000112 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.2444142428979317,
            "unit": "iter/sec",
            "range": "stddev: 0.07534776516330442",
            "extra": "mean: 803.5909309999928 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.7422790736161872,
            "unit": "iter/sec",
            "range": "stddev: 0.14032908893266216",
            "extra": "mean: 1.3472021986666884 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.122326210267161,
            "unit": "iter/sec",
            "range": "stddev: 0.00552334380993163",
            "extra": "mean: 242.58148166668056 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.058594260854115,
            "unit": "iter/sec",
            "range": "stddev: 0.00612973437237695",
            "extra": "mean: 246.39072933335152 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 3.709472849904138,
            "unit": "iter/sec",
            "range": "stddev: 0.02678690200080723",
            "extra": "mean: 269.58008333336164 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 3.8775725388253193,
            "unit": "iter/sec",
            "range": "stddev: 0.003803798092644452",
            "extra": "mean: 257.8933056666794 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.032986576923107,
            "unit": "iter/sec",
            "range": "stddev: 0.0016869867394270315",
            "extra": "mean: 247.9552016666844 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 3.8241153809646766,
            "unit": "iter/sec",
            "range": "stddev: 0.004810377437706624",
            "extra": "mean: 261.49838599999003 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.870228798815124,
            "unit": "iter/sec",
            "range": "stddev: 0.03738441020850294",
            "extra": "mean: 348.40428066668966 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 2.0277628281714106,
            "unit": "iter/sec",
            "range": "stddev: 0.045286922993744406",
            "extra": "mean: 493.15432066667125 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 1.0147914187485485,
            "unit": "iter/sec",
            "range": "stddev: 0.1636409142008028",
            "extra": "mean: 985.4241783333274 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.6257900911718082,
            "unit": "iter/sec",
            "range": "stddev: 0.19673450518565647",
            "extra": "mean: 615.0855546666776 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.4435600556099997,
            "unit": "iter/sec",
            "range": "stddev: 0.153138748799616",
            "extra": "mean: 692.7318306666734 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 0.8934124457558781,
            "unit": "iter/sec",
            "range": "stddev: 0.12464349928383617",
            "extra": "mean: 1.1193038609999917 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 0.9604936977563134,
            "unit": "iter/sec",
            "range": "stddev: 1.1090028689950737",
            "extra": "mean: 1.0411312456666526 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.8466461041520522,
            "unit": "iter/sec",
            "range": "stddev: 1.1133876959892113",
            "extra": "mean: 1.1811310476666488 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.6130719491595892,
            "unit": "iter/sec",
            "range": "stddev: 1.0454996913376586",
            "extra": "mean: 1.6311299210000054 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.845362427556891,
            "unit": "iter/sec",
            "range": "stddev: 0.2657909409724447",
            "extra": "mean: 541.8989706666556 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.1207335697325285,
            "unit": "iter/sec",
            "range": "stddev: 0.5187672197307128",
            "extra": "mean: 892.2727283333339 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.6199250557267197,
            "unit": "iter/sec",
            "range": "stddev: 0.9762864467868791",
            "extra": "mean: 1.6130982136666983 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}