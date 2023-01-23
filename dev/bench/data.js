window.BENCHMARK_DATA = {
  "lastUpdate": 1674441555813,
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
          "id": "d42511e667fd5fa01fb1ec8e766f07ec31ebcc49",
          "message": "add makefile and update stats test",
          "timestamp": "2023-01-21T21:52:56+08:00",
          "tree_id": "40a73dcc49ea5144279f9e2f9b72996e9d503641",
          "url": "https://github.com/Yiling-J/cacheme/commit/d42511e667fd5fa01fb1ec8e766f07ec31ebcc49"
        },
        "date": 1674311739904,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 6.370018311254909,
            "unit": "iter/sec",
            "range": "stddev: 0.015385683280008508",
            "extra": "mean: 156.9854199999933 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.569412586382423,
            "unit": "iter/sec",
            "range": "stddev: 0.010695192547715717",
            "extra": "mean: 152.22061133332923 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.109808471659013,
            "unit": "iter/sec",
            "range": "stddev: 0.01189030783470377",
            "extra": "mean: 163.67125166666105 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.792000112998474,
            "unit": "iter/sec",
            "range": "stddev: 0.0009119744000050977",
            "extra": "mean: 172.65193033332102 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 6.572001569850614,
            "unit": "iter/sec",
            "range": "stddev: 0.02014976946878022",
            "extra": "mean: 152.16064533331064 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 6.123366772297797,
            "unit": "iter/sec",
            "range": "stddev: 0.0319162060911137",
            "extra": "mean: 163.30885233332992 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.4039441685056087,
            "unit": "iter/sec",
            "range": "stddev: 0.11919812592430626",
            "extra": "mean: 415.98303866667646 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.065296593333377,
            "unit": "iter/sec",
            "range": "stddev: 0.02818948424934935",
            "extra": "mean: 484.191957333356 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.1534652224000828,
            "unit": "iter/sec",
            "range": "stddev: 0.026728929715612013",
            "extra": "mean: 866.9528830000104 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.8638800570407196,
            "unit": "iter/sec",
            "range": "stddev: 0.4481139983095475",
            "extra": "mean: 1.1575681043333361 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.8144520033946052,
            "unit": "iter/sec",
            "range": "stddev: 0.4221904188317224",
            "extra": "mean: 1.227819436666664 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.6717685634983132,
            "unit": "iter/sec",
            "range": "stddev: 0.2473102343225362",
            "extra": "mean: 1.4886079139999993 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.7217537468749322,
            "unit": "iter/sec",
            "range": "stddev: 1.1495698761282116",
            "extra": "mean: 1.3855141096666632 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.8034300483402215,
            "unit": "iter/sec",
            "range": "stddev: 1.1376252988843576",
            "extra": "mean: 1.2446634303333137 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.6001093359602881,
            "unit": "iter/sec",
            "range": "stddev: 1.1646774141885872",
            "extra": "mean: 1.666363011000006 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.1394712069871313,
            "unit": "iter/sec",
            "range": "stddev: 0.44851827382885284",
            "extra": "mean: 877.600060333331 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 1.0665398104307466,
            "unit": "iter/sec",
            "range": "stddev: 0.45061524745686343",
            "extra": "mean: 937.6115079999939 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.655124576046855,
            "unit": "iter/sec",
            "range": "stddev: 0.9309542376512079",
            "extra": "mean: 1.526427242333341 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.290821959825364,
            "unit": "iter/sec",
            "range": "stddev: 0.010114317512202684",
            "extra": "mean: 189.00654899999836 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.269807457976286,
            "unit": "iter/sec",
            "range": "stddev: 0.022460903314985323",
            "extra": "mean: 189.76025366665303 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.503603394430771,
            "unit": "iter/sec",
            "range": "stddev: 0.01743257169380776",
            "extra": "mean: 181.69913933331827 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 5.586844263009954,
            "unit": "iter/sec",
            "range": "stddev: 0.021919365116050277",
            "extra": "mean: 178.99192333334213 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.3761550727415175,
            "unit": "iter/sec",
            "range": "stddev: 0.022040178259684528",
            "extra": "mean: 186.00653933333433 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 5.510622106179457,
            "unit": "iter/sec",
            "range": "stddev: 0.006121308160116307",
            "extra": "mean: 181.46771466666678 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 2.9530929214281274,
            "unit": "iter/sec",
            "range": "stddev: 0.010314260677348698",
            "extra": "mean: 338.6280170000191 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 1.8683134207015137,
            "unit": "iter/sec",
            "range": "stddev: 0.08417840180416426",
            "extra": "mean: 535.2421006666646 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.1486019883743475,
            "unit": "iter/sec",
            "range": "stddev: 0.1200602136775625",
            "extra": "mean: 870.6236016666935 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.1770176046283867,
            "unit": "iter/sec",
            "range": "stddev: 0.043703471766790354",
            "extra": "mean: 849.6049643333284 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.9853087328087641,
            "unit": "iter/sec",
            "range": "stddev: 0.05333329314763902",
            "extra": "mean: 1.0149103186666746 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.7246685690194067,
            "unit": "iter/sec",
            "range": "stddev: 0.03160849239005084",
            "extra": "mean: 1.3799411796666732 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.0589227791788427,
            "unit": "iter/sec",
            "range": "stddev: 0.029472082399803503",
            "extra": "mean: 485.6908719999827 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.6845781979793055,
            "unit": "iter/sec",
            "range": "stddev: 0.0477066630429819",
            "extra": "mean: 593.6204096666605 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.9995895845100257,
            "unit": "iter/sec",
            "range": "stddev: 0.0873413828451777",
            "extra": "mean: 1.000410584000008 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.6356641038666766,
            "unit": "iter/sec",
            "range": "stddev: 0.07974116536508913",
            "extra": "mean: 611.3724680000132 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.4065059416663357,
            "unit": "iter/sec",
            "range": "stddev: 0.01984217475624512",
            "extra": "mean: 710.9817103333853 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.9054255256939194,
            "unit": "iter/sec",
            "range": "stddev: 0.023494691314225945",
            "extra": "mean: 1.1044530683333658 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.250783237629865,
            "unit": "iter/sec",
            "range": "stddev: 0.014534296111630719",
            "extra": "mean: 235.2507629999915 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.37150266490167,
            "unit": "iter/sec",
            "range": "stddev: 0.025190309734633404",
            "extra": "mean: 228.75429266665984 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 5.054505768403418,
            "unit": "iter/sec",
            "range": "stddev: 0.017430397041744337",
            "extra": "mean: 197.84328000002915 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.674013127816693,
            "unit": "iter/sec",
            "range": "stddev: 0.022255670510743866",
            "extra": "mean: 213.948906999993 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 5.040171544858788,
            "unit": "iter/sec",
            "range": "stddev: 0.011625952654671683",
            "extra": "mean: 198.40594533335812 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.846533929611718,
            "unit": "iter/sec",
            "range": "stddev: 0.018865357930045547",
            "extra": "mean: 206.3330236666919 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.74680953997511,
            "unit": "iter/sec",
            "range": "stddev: 0.09179669494511329",
            "extra": "mean: 364.0587326666491 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 1.9943000551151757,
            "unit": "iter/sec",
            "range": "stddev: 0.19074445168083584",
            "extra": "mean: 501.4290589999746 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 1.4303281460214976,
            "unit": "iter/sec",
            "range": "stddev: 0.15889275437864384",
            "extra": "mean: 699.1402656666802 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 2.1026111691017744,
            "unit": "iter/sec",
            "range": "stddev: 0.18436601209998288",
            "extra": "mean: 475.59910966667 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.785121576472542,
            "unit": "iter/sec",
            "range": "stddev: 0.13073360408837806",
            "extra": "mean: 560.1859353333415 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.0538182563235412,
            "unit": "iter/sec",
            "range": "stddev: 0.10585762512248406",
            "extra": "mean: 948.9302296666438 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.0038805558366257,
            "unit": "iter/sec",
            "range": "stddev: 1.1608390225252943",
            "extra": "mean: 996.1344446666848 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.0011339129690062,
            "unit": "iter/sec",
            "range": "stddev: 0.9282703290328723",
            "extra": "mean: 998.8673713333279 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.6910435761810384,
            "unit": "iter/sec",
            "range": "stddev: 0.9391133046872041",
            "extra": "mean: 1.4470867459999681 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 2.458172907677291,
            "unit": "iter/sec",
            "range": "stddev: 0.20432992632952698",
            "extra": "mean: 406.80620833336434 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.2683626043955234,
            "unit": "iter/sec",
            "range": "stddev: 0.5356159452064153",
            "extra": "mean: 788.4180726666727 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.7205700506916274,
            "unit": "iter/sec",
            "range": "stddev: 0.9048652838770125",
            "extra": "mean: 1.3877901239999726 sec\nrounds: 3"
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
          "id": "c192e5259c0de3fe0a5a16b61f8f127e190c12bb",
          "message": "cache poetry dependencies",
          "timestamp": "2023-01-21T23:06:44+08:00",
          "tree_id": "b287445af23c4a7ef22d8e22f697f0d953b9b7d8",
          "url": "https://github.com/Yiling-J/cacheme/commit/c192e5259c0de3fe0a5a16b61f8f127e190c12bb"
        },
        "date": 1674313960806,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 6.916484045359104,
            "unit": "iter/sec",
            "range": "stddev: 0.014134558047113142",
            "extra": "mean: 144.58213066666303 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 7.078191025586477,
            "unit": "iter/sec",
            "range": "stddev: 0.013696490620679758",
            "extra": "mean: 141.27903533334538 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.7825810675454345,
            "unit": "iter/sec",
            "range": "stddev: 0.003537194861213315",
            "extra": "mean: 147.43649799999994 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 6.9742750818173525,
            "unit": "iter/sec",
            "range": "stddev: 0.007243235602814543",
            "extra": "mean: 143.38407766666705 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 6.99545804496354,
            "unit": "iter/sec",
            "range": "stddev: 0.013024025017301872",
            "extra": "mean: 142.9498960000141 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 7.0259102478327415,
            "unit": "iter/sec",
            "range": "stddev: 0.012704042219665158",
            "extra": "mean: 142.33031233333313 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 3.158069979807461,
            "unit": "iter/sec",
            "range": "stddev: 0.10739531180502408",
            "extra": "mean: 316.6490946666632 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.934803171457851,
            "unit": "iter/sec",
            "range": "stddev: 0.03397834948073635",
            "extra": "mean: 340.7383533333359 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.4787155174526851,
            "unit": "iter/sec",
            "range": "stddev: 0.04032508450271494",
            "extra": "mean: 676.2625996666713 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 1.39605073905462,
            "unit": "iter/sec",
            "range": "stddev: 0.21270673380363542",
            "extra": "mean: 716.3063433333244 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 1.253776203620695,
            "unit": "iter/sec",
            "range": "stddev: 0.17699807251773766",
            "extra": "mean: 797.5905086666728 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.9359735888245518,
            "unit": "iter/sec",
            "range": "stddev: 0.17094184750849123",
            "extra": "mean: 1.0684062156666794 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 1.0441354229986242,
            "unit": "iter/sec",
            "range": "stddev: 0.9657945616485933",
            "extra": "mean: 957.7301736666755 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 1.0657588686093182,
            "unit": "iter/sec",
            "range": "stddev: 0.9708842495078931",
            "extra": "mean: 938.2985489999953 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.7631614171217525,
            "unit": "iter/sec",
            "range": "stddev: 1.024611320942034",
            "extra": "mean: 1.3103387796666652 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 2.056253399942196,
            "unit": "iter/sec",
            "range": "stddev: 0.23366454495511305",
            "extra": "mean: 486.32138433332744 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 1.5850998684880802,
            "unit": "iter/sec",
            "range": "stddev: 0.3043431156088232",
            "extra": "mean: 630.8750759999953 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.8214720156117821,
            "unit": "iter/sec",
            "range": "stddev: 0.8840285138075099",
            "extra": "mean: 1.2173269216666636 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.9720139363473645,
            "unit": "iter/sec",
            "range": "stddev: 0.012485078839710026",
            "extra": "mean: 167.44770033333603 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 6.012209294023942,
            "unit": "iter/sec",
            "range": "stddev: 0.012571773634176844",
            "extra": "mean: 166.32820833333048 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 6.021600831019455,
            "unit": "iter/sec",
            "range": "stddev: 0.012326633690142415",
            "extra": "mean: 166.06879599999994 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.6324796974545865,
            "unit": "iter/sec",
            "range": "stddev: 0.005678808289801973",
            "extra": "mean: 150.7731716666664 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.869772340828131,
            "unit": "iter/sec",
            "range": "stddev: 0.013642866415094105",
            "extra": "mean: 145.565231333336 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.911113933712079,
            "unit": "iter/sec",
            "range": "stddev: 0.013065186833198019",
            "extra": "mean: 144.69447466667398 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 4.1662503541000895,
            "unit": "iter/sec",
            "range": "stddev: 0.003710678887961976",
            "extra": "mean: 240.02398199999675 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.74718561479107,
            "unit": "iter/sec",
            "range": "stddev: 0.044832393446116225",
            "extra": "mean: 364.0088950000025 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.7634754847604441,
            "unit": "iter/sec",
            "range": "stddev: 0.004126337999283469",
            "extra": "mean: 567.0620366666697 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.750220193160575,
            "unit": "iter/sec",
            "range": "stddev: 0.01949069789858391",
            "extra": "mean: 571.3566806666677 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.5894270549380163,
            "unit": "iter/sec",
            "range": "stddev: 0.016986606770925096",
            "extra": "mean: 629.1575300000147 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 1.0477875717097749,
            "unit": "iter/sec",
            "range": "stddev: 0.032263547693429706",
            "extra": "mean: 954.3919273333282 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 3.274762467342241,
            "unit": "iter/sec",
            "range": "stddev: 0.016885067383824313",
            "extra": "mean: 305.3656593333282 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 2.0813626601410413,
            "unit": "iter/sec",
            "range": "stddev: 0.054759070144890024",
            "extra": "mean: 480.4544730000278 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.5074630394784856,
            "unit": "iter/sec",
            "range": "stddev: 0.04002165613070037",
            "extra": "mean: 663.3661813333447 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 3.0528383149086094,
            "unit": "iter/sec",
            "range": "stddev: 0.012361955661388155",
            "extra": "mean: 327.5640229999984 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 2.0138860855781333,
            "unit": "iter/sec",
            "range": "stddev: 0.04912938586969526",
            "extra": "mean: 496.5524153333263 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.5394794786087267,
            "unit": "iter/sec",
            "range": "stddev: 0.0037698967023325532",
            "extra": "mean: 649.5702046666642 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 5.477228300105043,
            "unit": "iter/sec",
            "range": "stddev: 0.005657488327663827",
            "extra": "mean: 182.5740949999878 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.510990889461596,
            "unit": "iter/sec",
            "range": "stddev: 0.028242339857675245",
            "extra": "mean: 221.68078466665975 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 5.403705409420344,
            "unit": "iter/sec",
            "range": "stddev: 0.005145342683007846",
            "extra": "mean: 185.05820066665515 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 5.424336564808842,
            "unit": "iter/sec",
            "range": "stddev: 0.0030065503324124138",
            "extra": "mean: 184.3543423333358 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 5.347492209305422,
            "unit": "iter/sec",
            "range": "stddev: 0.004261438846723119",
            "extra": "mean: 187.0035450000008 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 5.267045001669951,
            "unit": "iter/sec",
            "range": "stddev: 0.00919451721061481",
            "extra": "mean: 189.85977899997883 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 5.115671767353952,
            "unit": "iter/sec",
            "range": "stddev: 0.03972072684792005",
            "extra": "mean: 195.47774866667092 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.7964546818077087,
            "unit": "iter/sec",
            "range": "stddev: 0.0028950338023862386",
            "extra": "mean: 263.4036446666717 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 1.8789309772600797,
            "unit": "iter/sec",
            "range": "stddev: 0.16612563524307208",
            "extra": "mean: 532.2175280000087 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 2.7793675399819677,
            "unit": "iter/sec",
            "range": "stddev: 0.11723528648301806",
            "extra": "mean: 359.7940846666461 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 2.503294746844426,
            "unit": "iter/sec",
            "range": "stddev: 0.06823426091597237",
            "extra": "mean: 399.4735343333294 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.3844959882373857,
            "unit": "iter/sec",
            "range": "stddev: 0.04376671308938352",
            "extra": "mean: 722.2845053333155 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.4256826391239363,
            "unit": "iter/sec",
            "range": "stddev: 0.901995760879844",
            "extra": "mean: 701.4183749999839 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.2429077179085308,
            "unit": "iter/sec",
            "range": "stddev: 0.8560358768912523",
            "extra": "mean: 804.5649613333504 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.8488139658972156,
            "unit": "iter/sec",
            "range": "stddev: 0.9244050089958022",
            "extra": "mean: 1.1781144516666586 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 3.245072836357249,
            "unit": "iter/sec",
            "range": "stddev: 0.16703416276431698",
            "extra": "mean: 308.15949300002404 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 2.0275842414263066,
            "unit": "iter/sec",
            "range": "stddev: 0.2637333203079615",
            "extra": "mean: 493.1977569999996 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.8792979956330053,
            "unit": "iter/sec",
            "range": "stddev: 0.7827243520488674",
            "extra": "mean: 1.1372708740000046 sec\nrounds: 3"
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
          "id": "fb6ba31d3f716f6641d011b0fde74fa73f8f8146",
          "message": "test poetry dependencies cache",
          "timestamp": "2023-01-21T23:21:22+08:00",
          "tree_id": "9b5aa5e5513dc380fce001dfb915ab77e49e9f7c",
          "url": "https://github.com/Yiling-J/cacheme/commit/fb6ba31d3f716f6641d011b0fde74fa73f8f8146"
        },
        "date": 1674314891346,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 5.941133020170147,
            "unit": "iter/sec",
            "range": "stddev: 0.02168124564797153",
            "extra": "mean: 168.3180626666664 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 5.689033999542983,
            "unit": "iter/sec",
            "range": "stddev: 0.027590117672148428",
            "extra": "mean: 175.77676633332354 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 5.366836110683207,
            "unit": "iter/sec",
            "range": "stddev: 0.0034111267441646483",
            "extra": "mean: 186.32952066663697 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.792580046722454,
            "unit": "iter/sec",
            "range": "stddev: 0.01477924689883555",
            "extra": "mean: 172.6346449999975 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.412615594524124,
            "unit": "iter/sec",
            "range": "stddev: 0.03409923435166636",
            "extra": "mean: 184.753560000028 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.777484283287706,
            "unit": "iter/sec",
            "range": "stddev: 0.022398994495155485",
            "extra": "mean: 173.08571533334316 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.443780820194992,
            "unit": "iter/sec",
            "range": "stddev: 0.10129788253873641",
            "extra": "mean: 409.2020003333232 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.116364819111453,
            "unit": "iter/sec",
            "range": "stddev: 0.040872753022478656",
            "extra": "mean: 472.5083269999952 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.2426070436392467,
            "unit": "iter/sec",
            "range": "stddev: 0.1419958529915241",
            "extra": "mean: 804.7596423333326 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.8915563125777366,
            "unit": "iter/sec",
            "range": "stddev: 0.42909915227092726",
            "extra": "mean: 1.1216341423333347 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.8297162553829238,
            "unit": "iter/sec",
            "range": "stddev: 0.3405228345026474",
            "extra": "mean: 1.2052312986666607 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.6729608639443634,
            "unit": "iter/sec",
            "range": "stddev: 0.1190446723220016",
            "extra": "mean: 1.485970512666654 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9113732337389616,
            "unit": "iter/sec",
            "range": "stddev: 1.1296980540601225",
            "extra": "mean: 1.0972453030000036 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.6846118215759763,
            "unit": "iter/sec",
            "range": "stddev: 1.2888719048761201",
            "extra": "mean: 1.4606817593333403 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.5571571634583664,
            "unit": "iter/sec",
            "range": "stddev: 1.1567138641290018",
            "extra": "mean: 1.7948257073333405 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.497669211851999,
            "unit": "iter/sec",
            "range": "stddev: 0.31617854684079144",
            "extra": "mean: 667.7041846666611 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.9772473251499829,
            "unit": "iter/sec",
            "range": "stddev: 0.41916063490422345",
            "extra": "mean: 1.0232824119999766 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.6367583063205999,
            "unit": "iter/sec",
            "range": "stddev: 1.0614471856530272",
            "extra": "mean: 1.5704545823333358 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.251214541596826,
            "unit": "iter/sec",
            "range": "stddev: 0.023187310218885367",
            "extra": "mean: 190.43213566664008 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.354091904358306,
            "unit": "iter/sec",
            "range": "stddev: 0.023866431311713288",
            "extra": "mean: 186.7730359999958 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.158423463844838,
            "unit": "iter/sec",
            "range": "stddev: 0.02621003004239373",
            "extra": "mean: 193.8576789999805 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.020358939458746,
            "unit": "iter/sec",
            "range": "stddev: 0.021349134560736723",
            "extra": "mean: 166.10305300000996 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.949764460823509,
            "unit": "iter/sec",
            "range": "stddev: 0.025421899504126766",
            "extra": "mean: 168.07388033333837 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 5.793315923131708,
            "unit": "iter/sec",
            "range": "stddev: 0.026478897796740217",
            "extra": "mean: 172.6127166666629 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 2.6734213353891048,
            "unit": "iter/sec",
            "range": "stddev: 0.027919786017825608",
            "extra": "mean: 374.0525246666569 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.065255537771301,
            "unit": "iter/sec",
            "range": "stddev: 0.05022020286905726",
            "extra": "mean: 484.2015826666852 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.0340522024606194,
            "unit": "iter/sec",
            "range": "stddev: 0.12251699556145712",
            "extra": "mean: 967.0691649999981 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.1632264571837618,
            "unit": "iter/sec",
            "range": "stddev: 0.07266562007455753",
            "extra": "mean: 859.6778329999969 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.0449803858261164,
            "unit": "iter/sec",
            "range": "stddev: 0.04678868869775596",
            "extra": "mean: 956.9557606666876 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.7003966960504239,
            "unit": "iter/sec",
            "range": "stddev: 0.03184627593695122",
            "extra": "mean: 1.4277623033333195 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.1063723883760397,
            "unit": "iter/sec",
            "range": "stddev: 0.04388521468979658",
            "extra": "mean: 474.7498616666614 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.7739102162047502,
            "unit": "iter/sec",
            "range": "stddev: 0.0548333400008337",
            "extra": "mean: 563.7263886666611 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.9574375793216378,
            "unit": "iter/sec",
            "range": "stddev: 0.04927858182714816",
            "extra": "mean: 1.0444545123333455 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.4003017827713806,
            "unit": "iter/sec",
            "range": "stddev: 0.2123872580494507",
            "extra": "mean: 714.1317766666475 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.420163417333395,
            "unit": "iter/sec",
            "range": "stddev: 0.10996649547277308",
            "extra": "mean: 704.1443173333354 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.8348418612700862,
            "unit": "iter/sec",
            "range": "stddev: 0.03159385009263897",
            "extra": "mean: 1.197831644999989 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.826851069710737,
            "unit": "iter/sec",
            "range": "stddev: 0.0029458563253999567",
            "extra": "mean: 207.174405333357 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.4616688857295665,
            "unit": "iter/sec",
            "range": "stddev: 0.02142209311027196",
            "extra": "mean: 224.1313790000087 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.878148627862083,
            "unit": "iter/sec",
            "range": "stddev: 0.0032754920048167833",
            "extra": "mean: 204.9958039999827 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.824394911806908,
            "unit": "iter/sec",
            "range": "stddev: 0.0016548132814124836",
            "extra": "mean: 207.27988033331712 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.652373208372831,
            "unit": "iter/sec",
            "range": "stddev: 0.005446273121276373",
            "extra": "mean: 214.9440629999996 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.389704529807408,
            "unit": "iter/sec",
            "range": "stddev: 0.014542712881410496",
            "extra": "mean: 227.80576533333866 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.8071730566503676,
            "unit": "iter/sec",
            "range": "stddev: 0.09768651364070044",
            "extra": "mean: 356.2302643333434 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 2.2400481771639367,
            "unit": "iter/sec",
            "range": "stddev: 0.11087404740666193",
            "extra": "mean: 446.41897000004366 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 1.3003269776211517,
            "unit": "iter/sec",
            "range": "stddev: 0.24902027283437286",
            "extra": "mean: 769.0373399999922 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 2.0289492672719,
            "unit": "iter/sec",
            "range": "stddev: 0.1414566126588695",
            "extra": "mean: 492.8659460000138 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.7286418527408598,
            "unit": "iter/sec",
            "range": "stddev: 0.1291206780810223",
            "extra": "mean: 578.4888283333203 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 0.9931265144542502,
            "unit": "iter/sec",
            "range": "stddev: 0.08829693544185209",
            "extra": "mean: 1.0069210573332914 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.2220189374710222,
            "unit": "iter/sec",
            "range": "stddev: 0.9654036648671114",
            "extra": "mean: 818.3179240000223 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.9867475673806602,
            "unit": "iter/sec",
            "range": "stddev: 0.9610949418945168",
            "extra": "mean: 1.0134304183333522 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.6441717032237159,
            "unit": "iter/sec",
            "range": "stddev: 0.9825634744501341",
            "extra": "mean: 1.5523811353332728 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 2.2172748496985224,
            "unit": "iter/sec",
            "range": "stddev: 0.24262374192582697",
            "extra": "mean: 451.0040783333504 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.3546641624236122,
            "unit": "iter/sec",
            "range": "stddev: 0.46906172336884594",
            "extra": "mean: 738.1903410000253 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.7136928202625865,
            "unit": "iter/sec",
            "range": "stddev: 0.8919316739856019",
            "extra": "mean: 1.4011630376666442 sec\nrounds: 3"
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
          "id": "62fc653ebb317108f9b10e4fa40b2ae27192b564",
          "message": "fix redis storage",
          "timestamp": "2023-01-22T14:27:25+08:00",
          "tree_id": "f16cc11a33e3da6c8b88a640e9762da0e9b136ef",
          "url": "https://github.com/Yiling-J/cacheme/commit/62fc653ebb317108f9b10e4fa40b2ae27192b564"
        },
        "date": 1674369178566,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 6.824594626074235,
            "unit": "iter/sec",
            "range": "stddev: 0.014845938208026033",
            "extra": "mean: 146.52884966667065 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.861341559050973,
            "unit": "iter/sec",
            "range": "stddev: 0.013808326894985937",
            "extra": "mean: 145.74409266667013 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.616229210633622,
            "unit": "iter/sec",
            "range": "stddev: 0.0005575902448240169",
            "extra": "mean: 151.14349399999583 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 6.806290517081056,
            "unit": "iter/sec",
            "range": "stddev: 0.009355384579307804",
            "extra": "mean: 146.92290866668145 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 6.801380491614127,
            "unit": "iter/sec",
            "range": "stddev: 0.013364496563964766",
            "extra": "mean: 147.0289746666822 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 6.788228420861912,
            "unit": "iter/sec",
            "range": "stddev: 0.014321123158542958",
            "extra": "mean: 147.31384066669762 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 3.1164230842681713,
            "unit": "iter/sec",
            "range": "stddev: 0.08835994330697577",
            "extra": "mean: 320.88069333334107 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.8780898334207614,
            "unit": "iter/sec",
            "range": "stddev: 0.02550850172213139",
            "extra": "mean: 347.45267100000393 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.7901782293926736,
            "unit": "iter/sec",
            "range": "stddev: 0.09152253264039766",
            "extra": "mean: 558.6035979999906 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 1.1991160135933405,
            "unit": "iter/sec",
            "range": "stddev: 0.2740162834214078",
            "extra": "mean: 833.9476653333501 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 1.1202228234919644,
            "unit": "iter/sec",
            "range": "stddev: 0.25772463436455334",
            "extra": "mean: 892.6795446666537 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.944185193501063,
            "unit": "iter/sec",
            "range": "stddev: 0.04028514203506788",
            "extra": "mean: 1.0591142573333248 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 1.1301677979267017,
            "unit": "iter/sec",
            "range": "stddev: 0.8687526454441302",
            "extra": "mean: 884.824361333339 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.8677365958200944,
            "unit": "iter/sec",
            "range": "stddev: 1.1900768950035396",
            "extra": "mean: 1.152423448333309 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.7608678158830503,
            "unit": "iter/sec",
            "range": "stddev: 1.1167765908596679",
            "extra": "mean: 1.3142887359999804 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.982854596037101,
            "unit": "iter/sec",
            "range": "stddev: 0.17229311041168138",
            "extra": "mean: 504.32341433334693 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 1.3343901305815917,
            "unit": "iter/sec",
            "range": "stddev: 0.3759985715582525",
            "extra": "mean: 749.4060223333273 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.7905784693545543,
            "unit": "iter/sec",
            "range": "stddev: 0.8799150949844171",
            "extra": "mean: 1.2648965773333316 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.858517265014297,
            "unit": "iter/sec",
            "range": "stddev: 0.011534226460697955",
            "extra": "mean: 170.6916536666654 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.883741296461767,
            "unit": "iter/sec",
            "range": "stddev: 0.011816631056769578",
            "extra": "mean: 169.95988599997722 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.794658555597755,
            "unit": "iter/sec",
            "range": "stddev: 0.012297913256219664",
            "extra": "mean: 172.57272199998397 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.646212489879899,
            "unit": "iter/sec",
            "range": "stddev: 0.009787140697637352",
            "extra": "mean: 150.46163533331006 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.641332109893832,
            "unit": "iter/sec",
            "range": "stddev: 0.009683790486770497",
            "extra": "mean: 150.57220199999696 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.513571479957613,
            "unit": "iter/sec",
            "range": "stddev: 0.01260266948235686",
            "extra": "mean: 153.5256046666594 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.9115302092627258,
            "unit": "iter/sec",
            "range": "stddev: 0.002517541615256781",
            "extra": "mean: 255.65442333333976 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.320555308204497,
            "unit": "iter/sec",
            "range": "stddev: 0.016959526919261364",
            "extra": "mean: 430.93133633334446 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.6406868408197206,
            "unit": "iter/sec",
            "range": "stddev: 0.0584508099114858",
            "extra": "mean: 609.5008353333166 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.7004878730883226,
            "unit": "iter/sec",
            "range": "stddev: 0.0845669690066181",
            "extra": "mean: 588.0665283333428 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.3906925069738787,
            "unit": "iter/sec",
            "range": "stddev: 0.01789337780144748",
            "extra": "mean: 719.0662170000337 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.9969141406706076,
            "unit": "iter/sec",
            "range": "stddev: 0.12247010640035752",
            "extra": "mean: 1.0030954113333337 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.9758574989924482,
            "unit": "iter/sec",
            "range": "stddev: 0.021436885727946733",
            "extra": "mean: 336.03759600000177 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 2.127666144580466,
            "unit": "iter/sec",
            "range": "stddev: 0.08239442505607744",
            "extra": "mean: 469.99854866665675 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.4227367040489238,
            "unit": "iter/sec",
            "range": "stddev: 0.011824268475758477",
            "extra": "mean: 702.8707399999803 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.712022178440077,
            "unit": "iter/sec",
            "range": "stddev: 0.020500163502348467",
            "extra": "mean: 368.7285479999976 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 2.146223506691521,
            "unit": "iter/sec",
            "range": "stddev: 0.041067987984858",
            "extra": "mean: 465.93469733333376 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.1645933084615927,
            "unit": "iter/sec",
            "range": "stddev: 0.042287400097373556",
            "extra": "mean: 858.6688526666725 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 5.408402859208929,
            "unit": "iter/sec",
            "range": "stddev: 0.000889855494524675",
            "extra": "mean: 184.89746899998258 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 5.489374768941138,
            "unit": "iter/sec",
            "range": "stddev: 0.00354953869043311",
            "extra": "mean: 182.17010900002606 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 5.254468055467164,
            "unit": "iter/sec",
            "range": "stddev: 0.013987195014826124",
            "extra": "mean: 190.3142219999836 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 5.431785158744902,
            "unit": "iter/sec",
            "range": "stddev: 0.002758464127132024",
            "extra": "mean: 184.10153766668222 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 5.378155117107545,
            "unit": "iter/sec",
            "range": "stddev: 0.0036068722887056667",
            "extra": "mean: 185.93736666669733 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 5.36144832992708,
            "unit": "iter/sec",
            "range": "stddev: 0.001496381366406427",
            "extra": "mean: 186.51676533337044 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 5.103575152383095,
            "unit": "iter/sec",
            "range": "stddev: 0.031304890081279485",
            "extra": "mean: 195.9410746666587 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.1214253631826194,
            "unit": "iter/sec",
            "range": "stddev: 0.053519586667025894",
            "extra": "mean: 320.36646200003815 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 1.8800500258752377,
            "unit": "iter/sec",
            "range": "stddev: 0.14172563448721026",
            "extra": "mean: 531.9007399999691 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 2.5269035291472286,
            "unit": "iter/sec",
            "range": "stddev: 0.16543396390692558",
            "extra": "mean: 395.74126533333737 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 2.247248798354925,
            "unit": "iter/sec",
            "range": "stddev: 0.10845672568697638",
            "extra": "mean: 444.98855700002576 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.3907995861013092,
            "unit": "iter/sec",
            "range": "stddev: 0.08665608158607739",
            "extra": "mean: 719.0108553333706 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.5165794175663458,
            "unit": "iter/sec",
            "range": "stddev: 0.8344395971927032",
            "extra": "mean: 659.3785913333173 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.2250505860750482,
            "unit": "iter/sec",
            "range": "stddev: 0.8641948792621337",
            "extra": "mean: 816.2928220000367 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.8391677813670163,
            "unit": "iter/sec",
            "range": "stddev: 0.8989983537325407",
            "extra": "mean: 1.1916568083333534 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 3.212869342637546,
            "unit": "iter/sec",
            "range": "stddev: 0.1743924779036988",
            "extra": "mean: 311.2482623333411 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.7466322364388063,
            "unit": "iter/sec",
            "range": "stddev: 0.37087350801111524",
            "extra": "mean: 572.5303696666515 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.9530346019032564,
            "unit": "iter/sec",
            "range": "stddev: 0.6820695294602227",
            "extra": "mean: 1.0492798456666226 sec\nrounds: 3"
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
          "id": "04e48ff0a8e925ad6021cbb53c0afb2f50138171",
          "message": "add with_local_storage benchmark",
          "timestamp": "2023-01-23T10:07:42+08:00",
          "tree_id": "3616b8b1548ba174d003812e80481147c52e9bfa",
          "url": "https://github.com/Yiling-J/cacheme/commit/04e48ff0a8e925ad6021cbb53c0afb2f50138171"
        },
        "date": 1674440206698,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 5.020051499670772,
            "unit": "iter/sec",
            "range": "stddev: 0.02066539075313702",
            "extra": "mean: 199.20114366667008 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 5.178647000135801,
            "unit": "iter/sec",
            "range": "stddev: 0.019548796789183896",
            "extra": "mean: 193.1006303333239 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 4.85691763493362,
            "unit": "iter/sec",
            "range": "stddev: 0.004606837439238142",
            "extra": "mean: 205.8919000000022 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 4.816524176649208,
            "unit": "iter/sec",
            "range": "stddev: 0.01787833837524275",
            "extra": "mean: 207.61859866666063 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 4.71043869563832,
            "unit": "iter/sec",
            "range": "stddev: 0.03524105624063845",
            "extra": "mean: 212.2944516666697 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 4.709792352367178,
            "unit": "iter/sec",
            "range": "stddev: 0.018408427101834424",
            "extra": "mean: 212.3235856666573 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 1.7295207991297876,
            "unit": "iter/sec",
            "range": "stddev: 0.2138267357412545",
            "extra": "mean: 578.1948390000006 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.0908425721223796,
            "unit": "iter/sec",
            "range": "stddev: 0.17987088938021936",
            "extra": "mean: 916.7225643333362 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.108395363894759,
            "unit": "iter/sec",
            "range": "stddev: 0.1215394580144267",
            "extra": "mean: 902.2051450000012 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.7197691224800794,
            "unit": "iter/sec",
            "range": "stddev: 0.47576565713518976",
            "extra": "mean: 1.3893343973333288 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.65773508304567,
            "unit": "iter/sec",
            "range": "stddev: 0.3795868755601903",
            "extra": "mean: 1.5203689536666616 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.5245050903323072,
            "unit": "iter/sec",
            "range": "stddev: 0.2483964356700196",
            "extra": "mean: 1.9065591896666565 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.757842863120349,
            "unit": "iter/sec",
            "range": "stddev: 1.2077947407172354",
            "extra": "mean: 1.3195347593333413 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.5660785755344871,
            "unit": "iter/sec",
            "range": "stddev: 1.5799548324081063",
            "extra": "mean: 1.7665392106666598 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.4795241132881036,
            "unit": "iter/sec",
            "range": "stddev: 1.3858569258992932",
            "extra": "mean: 2.0854008636666586 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 0.9383630051248473,
            "unit": "iter/sec",
            "range": "stddev: 0.24879569842246754",
            "extra": "mean: 1.0656856616666726 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.7809546834100837,
            "unit": "iter/sec",
            "range": "stddev: 0.6227823888060172",
            "extra": "mean: 1.2804840296666669 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.5153355321263272,
            "unit": "iter/sec",
            "range": "stddev: 1.2074324126088265",
            "extra": "mean: 1.940483311666668 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.3187297771354523,
            "unit": "iter/sec",
            "range": "stddev: 0.2717322189461925",
            "extra": "mean: 431.2706076666662 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 1.9838334817365249,
            "unit": "iter/sec",
            "range": "stddev: 0.3673875896530655",
            "extra": "mean: 504.0745653333071 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.9286153363924992,
            "unit": "iter/sec",
            "range": "stddev: 0.41228054143206666",
            "extra": "mean: 518.5067136666627 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 1.2008031970850375,
            "unit": "iter/sec",
            "range": "stddev: 0.9505963488929322",
            "extra": "mean: 832.7759306666659 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 1.161466615828375,
            "unit": "iter/sec",
            "range": "stddev: 1.0025500810029067",
            "extra": "mean: 860.9804073333484 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 1.0675284591433298,
            "unit": "iter/sec",
            "range": "stddev: 1.0977063725398728",
            "extra": "mean: 936.7431766666717 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.7944082118625084,
            "unit": "iter/sec",
            "range": "stddev: 1.6852020171389515",
            "extra": "mean: 1.2587986693333353 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.7915235629772113,
            "unit": "iter/sec",
            "range": "stddev: 1.725813465477037",
            "extra": "mean: 1.2633862676666656 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.6881105736147543,
            "unit": "iter/sec",
            "range": "stddev: 2.0184593462050646",
            "extra": "mean: 1.4532548086666377 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 3.0377284322037936,
            "unit": "iter/sec",
            "range": "stddev: 0.044203335176491665",
            "extra": "mean: 329.19335033333635 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 3.3156193496043898,
            "unit": "iter/sec",
            "range": "stddev: 0.03497444730319308",
            "extra": "mean: 301.60277600000046 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 3.381383007538987,
            "unit": "iter/sec",
            "range": "stddev: 0.0203684307738996",
            "extra": "mean: 295.736980333326 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 4.2402384072347745,
            "unit": "iter/sec",
            "range": "stddev: 0.03603886079150713",
            "extra": "mean: 235.83579600000348 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 4.39460999677602,
            "unit": "iter/sec",
            "range": "stddev: 0.033085396993517764",
            "extra": "mean: 227.5514780000094 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 4.352778981683893,
            "unit": "iter/sec",
            "range": "stddev: 0.029360653853383743",
            "extra": "mean: 229.73829000000023 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 1.5665175913698686,
            "unit": "iter/sec",
            "range": "stddev: 0.09284429781909016",
            "extra": "mean: 638.3586149999966 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 1.6861117286323621,
            "unit": "iter/sec",
            "range": "stddev: 0.03701856846047933",
            "extra": "mean: 593.0805076666653 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 0.895207170383128,
            "unit": "iter/sec",
            "range": "stddev: 0.03806004716585435",
            "extra": "mean: 1.117059863999998 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 0.9295710612486335,
            "unit": "iter/sec",
            "range": "stddev: 0.02301101619059667",
            "extra": "mean: 1.0757649863333352 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.8124531580808676,
            "unit": "iter/sec",
            "range": "stddev: 0.06350215053982568",
            "extra": "mean: 1.2308401906666784 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.5345260847215685,
            "unit": "iter/sec",
            "range": "stddev: 0.1000953179661612",
            "extra": "mean: 1.870816090333354 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.5203955667880094,
            "unit": "iter/sec",
            "range": "stddev: 0.022453997871676054",
            "extra": "mean: 657.7235700000111 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 0.9997755603844367,
            "unit": "iter/sec",
            "range": "stddev: 0.12198021048705944",
            "extra": "mean: 1.0002244900000126 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.6932415435929655,
            "unit": "iter/sec",
            "range": "stddev: 0.032326200516777384",
            "extra": "mean: 1.4424986633333485 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.2663258191167492,
            "unit": "iter/sec",
            "range": "stddev: 0.13722717817699434",
            "extra": "mean: 789.6861809999981 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.3054100848136625,
            "unit": "iter/sec",
            "range": "stddev: 0.03274756308970979",
            "extra": "mean: 766.042802666675 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.6148122252029431,
            "unit": "iter/sec",
            "range": "stddev: 0.014261158393952304",
            "extra": "mean: 1.626512875000022 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 3.424648702875245,
            "unit": "iter/sec",
            "range": "stddev: 0.014277169463918668",
            "extra": "mean: 292.0007529999869 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 3.484261244114235,
            "unit": "iter/sec",
            "range": "stddev: 0.007388258492671865",
            "extra": "mean: 287.00488566672294 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 3.5219044276503357,
            "unit": "iter/sec",
            "range": "stddev: 0.00812513170798177",
            "extra": "mean: 283.93729033333176 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 3.2573651855325982,
            "unit": "iter/sec",
            "range": "stddev: 0.024969292891728383",
            "extra": "mean: 306.99658866664475 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 3.4373994796977594,
            "unit": "iter/sec",
            "range": "stddev: 0.013744729183609276",
            "extra": "mean: 290.9175979999645 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 3.4025341677526884,
            "unit": "iter/sec",
            "range": "stddev: 0.015675944186569923",
            "extra": "mean: 293.89859166659943 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.842008003361603,
            "unit": "iter/sec",
            "range": "stddev: 0.07112673220356944",
            "extra": "mean: 351.86389300001036 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 2.0134114166674024,
            "unit": "iter/sec",
            "range": "stddev: 0.003660248780033399",
            "extra": "mean: 496.6694793333393 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 0.9127013165373458,
            "unit": "iter/sec",
            "range": "stddev: 0.2637326475801521",
            "extra": "mean: 1.095648687999983 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.630992616653551,
            "unit": "iter/sec",
            "range": "stddev: 0.23966618304223747",
            "extra": "mean: 613.1235603333304 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.4462291565717837,
            "unit": "iter/sec",
            "range": "stddev: 0.12272330536048476",
            "extra": "mean: 691.4533533333346 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 0.8000262933441559,
            "unit": "iter/sec",
            "range": "stddev: 0.21410116495772108",
            "extra": "mean: 1.2499589179999855 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 0.9005772110044319,
            "unit": "iter/sec",
            "range": "stddev: 1.2087642848187707",
            "extra": "mean: 1.1103989616666847 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.8112650122183753,
            "unit": "iter/sec",
            "range": "stddev: 1.1270768456478468",
            "extra": "mean: 1.232642829333334 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.5417125515555876,
            "unit": "iter/sec",
            "range": "stddev: 1.0736609348294257",
            "extra": "mean: 1.8459974706666646 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.5249603907931486,
            "unit": "iter/sec",
            "range": "stddev: 0.38708198090887475",
            "extra": "mean: 655.7547370000142 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.0302548495712434,
            "unit": "iter/sec",
            "range": "stddev: 0.6372957102472291",
            "extra": "mean: 970.6336256666646 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.5700809555375491,
            "unit": "iter/sec",
            "range": "stddev: 1.0008200791613635",
            "extra": "mean: 1.7541368296667013 sec\nrounds: 3"
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
          "id": "c9195d2a84512385f01694cedc5af8b28211a8e9",
          "message": "read&write bench update uuid in each round",
          "timestamp": "2023-01-23T10:32:54+08:00",
          "tree_id": "773e92fee2e96dee641518ea5ab8d316bf684b56",
          "url": "https://github.com/Yiling-J/cacheme/commit/c9195d2a84512385f01694cedc5af8b28211a8e9"
        },
        "date": 1674441555192,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 6.193888211776376,
            "unit": "iter/sec",
            "range": "stddev: 0.01021500813417319",
            "extra": "mean: 161.44947500000248 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.169475199946477,
            "unit": "iter/sec",
            "range": "stddev: 0.012133191344401903",
            "extra": "mean: 162.08834100000522 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 5.944736528395417,
            "unit": "iter/sec",
            "range": "stddev: 0.013623781481470643",
            "extra": "mean: 168.21603366666218 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.889223759967452,
            "unit": "iter/sec",
            "range": "stddev: 0.032003042898500665",
            "extra": "mean: 169.80166499999427 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.831352730576152,
            "unit": "iter/sec",
            "range": "stddev: 0.022443844525846822",
            "extra": "mean: 171.48679666667968 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.814388575913884,
            "unit": "iter/sec",
            "range": "stddev: 0.013716039721574811",
            "extra": "mean: 171.98712933334073 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.8430700745498663,
            "unit": "iter/sec",
            "range": "stddev: 0.07536145934104957",
            "extra": "mean: 351.73244899998696 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.924379688037788,
            "unit": "iter/sec",
            "range": "stddev: 0.020394974287822724",
            "extra": "mean: 341.95286066666125 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 2.399690864143766,
            "unit": "iter/sec",
            "range": "stddev: 0.016206069020841322",
            "extra": "mean: 416.7203430000181 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.916976081447327,
            "unit": "iter/sec",
            "range": "stddev: 0.027135862772140952",
            "extra": "mean: 1.0905409860000173 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.9720760226634745,
            "unit": "iter/sec",
            "range": "stddev: 0.023474347156731624",
            "extra": "mean: 1.0287261249999915 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.8340464604329771,
            "unit": "iter/sec",
            "range": "stddev: 0.04716453579098532",
            "extra": "mean: 1.1989739749999917 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9576748567716427,
            "unit": "iter/sec",
            "range": "stddev: 0.8655672990145503",
            "extra": "mean: 1.0441957339999892 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.8746807173386656,
            "unit": "iter/sec",
            "range": "stddev: 0.8405492222540296",
            "extra": "mean: 1.143274317333341 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.6306794085313857,
            "unit": "iter/sec",
            "range": "stddev: 0.76838031706445",
            "extra": "mean: 1.585591643666665 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.590956972567062,
            "unit": "iter/sec",
            "range": "stddev: 0.1099390469077976",
            "extra": "mean: 628.5525110000094 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.9008025876310901,
            "unit": "iter/sec",
            "range": "stddev: 0.10437138371145836",
            "extra": "mean: 1.1101211450000126 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.4836323665438253,
            "unit": "iter/sec",
            "range": "stddev: 0.010346395030885651",
            "extra": "mean: 2.067686261666656 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.497748519077636,
            "unit": "iter/sec",
            "range": "stddev: 0.05533782173129101",
            "extra": "mean: 400.3605616666637 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.8262731843723845,
            "unit": "iter/sec",
            "range": "stddev: 0.024547345576243298",
            "extra": "mean: 353.82283833332434 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 2.0050876948127954,
            "unit": "iter/sec",
            "range": "stddev: 0.06889106775597807",
            "extra": "mean: 498.7313036666781 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.9720388800738143,
            "unit": "iter/sec",
            "range": "stddev: 0.05627541463384918",
            "extra": "mean: 1.028765433666668 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.9466819546630141,
            "unit": "iter/sec",
            "range": "stddev: 0.0672822177440049",
            "extra": "mean: 1.056320969333323 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.8692214126083064,
            "unit": "iter/sec",
            "range": "stddev: 0.0498013855054794",
            "extra": "mean: 1.1504548616666739 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.8786995470011345,
            "unit": "iter/sec",
            "range": "stddev: 0.8204915606327675",
            "extra": "mean: 1.1380454256666515 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8725145053377081,
            "unit": "iter/sec",
            "range": "stddev: 0.8212185025446874",
            "extra": "mean: 1.1461127509999944 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.6325235581833814,
            "unit": "iter/sec",
            "range": "stddev: 0.7849655112745183",
            "extra": "mean: 1.5809687829999841 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.412533380287975,
            "unit": "iter/sec",
            "range": "stddev: 0.013310666897627948",
            "extra": "mean: 184.7563663333555 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 4.5352051056029286,
            "unit": "iter/sec",
            "range": "stddev: 0.023965356382504324",
            "extra": "mean: 220.49719400001777 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 4.363187288534313,
            "unit": "iter/sec",
            "range": "stddev: 0.017436746067633572",
            "extra": "mean: 229.19025333334275 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 5.955047029298691,
            "unit": "iter/sec",
            "range": "stddev: 0.015783929453911674",
            "extra": "mean: 167.9247863333444 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.941006306422238,
            "unit": "iter/sec",
            "range": "stddev: 0.01532979021963039",
            "extra": "mean: 168.3216526666532 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 5.906765777864373,
            "unit": "iter/sec",
            "range": "stddev: 0.015593359173367143",
            "extra": "mean: 169.29738500001199 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.937958353493952,
            "unit": "iter/sec",
            "range": "stddev: 0.005168151371804631",
            "extra": "mean: 253.93869366666877 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.9422576031443564,
            "unit": "iter/sec",
            "range": "stddev: 0.023859800549481686",
            "extra": "mean: 339.87506700001785 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.7047551549273006,
            "unit": "iter/sec",
            "range": "stddev: 0.007749391467214808",
            "extra": "mean: 586.5945013333279 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.6044172868081314,
            "unit": "iter/sec",
            "range": "stddev: 0.02201269868757",
            "extra": "mean: 623.2792480000171 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.2827531393351108,
            "unit": "iter/sec",
            "range": "stddev: 0.20581372151126537",
            "extra": "mean: 779.5732236666595 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.923880865728656,
            "unit": "iter/sec",
            "range": "stddev: 0.023010414490585666",
            "extra": "mean: 1.0823906383333413 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 3.4421656105894516,
            "unit": "iter/sec",
            "range": "stddev: 0.02260437869681698",
            "extra": "mean: 290.51478433333006 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 2.350659005528368,
            "unit": "iter/sec",
            "range": "stddev: 0.02928028506998955",
            "extra": "mean: 425.41261733333613 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.5895616832935047,
            "unit": "iter/sec",
            "range": "stddev: 0.027335655044613168",
            "extra": "mean: 629.1042433333208 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.6606668274950027,
            "unit": "iter/sec",
            "range": "stddev: 0.006439957757501648",
            "extra": "mean: 375.8456300000148 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.7282653584715004,
            "unit": "iter/sec",
            "range": "stddev: 0.034810166182970954",
            "extra": "mean: 578.6148493333295 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.3084419260825795,
            "unit": "iter/sec",
            "range": "stddev: 0.03721488513254039",
            "extra": "mean: 764.2677753333373 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 3.974347341920151,
            "unit": "iter/sec",
            "range": "stddev: 0.03444413198795581",
            "extra": "mean: 251.61363966664868 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 3.9978415653388844,
            "unit": "iter/sec",
            "range": "stddev: 0.03346189719521364",
            "extra": "mean: 250.13497499999932 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.0165598531973545,
            "unit": "iter/sec",
            "range": "stddev: 0.032226389188592885",
            "extra": "mean: 248.9692763333172 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 3.4987940240131055,
            "unit": "iter/sec",
            "range": "stddev: 0.04163899002191971",
            "extra": "mean: 285.8127666666708 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 3.6372557780521277,
            "unit": "iter/sec",
            "range": "stddev: 0.054502168719620284",
            "extra": "mean: 274.93254833332986 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 3.629567603187071,
            "unit": "iter/sec",
            "range": "stddev: 0.05623831823052136",
            "extra": "mean: 275.51491233333536 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 4.302546252321978,
            "unit": "iter/sec",
            "range": "stddev: 0.014892113608454546",
            "extra": "mean: 232.42051133333538 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.96006633206135,
            "unit": "iter/sec",
            "range": "stddev: 0.019672123712975578",
            "extra": "mean: 252.5210226666748 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.7550721465966936,
            "unit": "iter/sec",
            "range": "stddev: 0.02012775911634922",
            "extra": "mean: 362.9669013333417 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 2.061456977239775,
            "unit": "iter/sec",
            "range": "stddev: 0.01178633971706457",
            "extra": "mean: 485.09380066663726 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.9008840217014857,
            "unit": "iter/sec",
            "range": "stddev: 0.025720334551621354",
            "extra": "mean: 526.0710220000154 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.6872924387751431,
            "unit": "iter/sec",
            "range": "stddev: 0.05916268149232928",
            "extra": "mean: 592.6654900000207 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.3291512675649928,
            "unit": "iter/sec",
            "range": "stddev: 0.7991329337341694",
            "extra": "mean: 752.3598136666578 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.1120668287575501,
            "unit": "iter/sec",
            "range": "stddev: 0.806273069031848",
            "extra": "mean: 899.226533999979 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.7660081354899996,
            "unit": "iter/sec",
            "range": "stddev: 0.8054973395731083",
            "extra": "mean: 1.3054691636666764 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 2.038930288273343,
            "unit": "iter/sec",
            "range": "stddev: 0.04638807217109371",
            "extra": "mean: 490.45325666668305 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.1599496904455333,
            "unit": "iter/sec",
            "range": "stddev: 0.13279392257033043",
            "extra": "mean: 862.1063553333101 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.5758912624048185,
            "unit": "iter/sec",
            "range": "stddev: 0.07197095638235175",
            "extra": "mean: 1.7364389170000247 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}