window.BENCHMARK_DATA = {
  "lastUpdate": 1674194892110,
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
      }
    ]
  }
}