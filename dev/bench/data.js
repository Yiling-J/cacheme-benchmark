window.BENCHMARK_DATA = {
  "lastUpdate": 1674529782894,
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
          "id": "6f136455cabebf63b70630d838ae1dd18bbbc6d0",
          "message": "update read only with local warmup",
          "timestamp": "2023-01-23T11:56:52+08:00",
          "tree_id": "78682210ef40e4fd78a1c48628a0cdb718d6d457",
          "url": "https://github.com/Yiling-J/cacheme/commit/6f136455cabebf63b70630d838ae1dd18bbbc6d0"
        },
        "date": 1674448973207,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 5.983146016155758,
            "unit": "iter/sec",
            "range": "stddev: 0.010558634515308135",
            "extra": "mean: 167.1361516666631 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 5.981820565374347,
            "unit": "iter/sec",
            "range": "stddev: 0.013021497149991975",
            "extra": "mean: 167.17318566666486 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 5.802068255148283,
            "unit": "iter/sec",
            "range": "stddev: 0.012156839713565482",
            "extra": "mean: 172.3523329999921 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.7540765896825,
            "unit": "iter/sec",
            "range": "stddev: 0.03337691394318954",
            "extra": "mean: 173.78983133333273 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.751296677763688,
            "unit": "iter/sec",
            "range": "stddev: 0.02342149276122737",
            "extra": "mean: 173.87383333332687 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.60795364700286,
            "unit": "iter/sec",
            "range": "stddev: 0.01184117973171844",
            "extra": "mean: 178.31816433333833 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.6291162103955497,
            "unit": "iter/sec",
            "range": "stddev: 0.04759061387920054",
            "extra": "mean: 380.35595233333197 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.794970826015226,
            "unit": "iter/sec",
            "range": "stddev: 0.0270247122692",
            "extra": "mean: 357.78548766667956 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 2.106633832915149,
            "unit": "iter/sec",
            "range": "stddev: 0.058322746326490274",
            "extra": "mean: 474.6909426666737 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.9205291660069773,
            "unit": "iter/sec",
            "range": "stddev: 0.05703618472279247",
            "extra": "mean: 1.086331684999995 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.8640079050225935,
            "unit": "iter/sec",
            "range": "stddev: 0.07729733947641376",
            "extra": "mean: 1.1573968180000047 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.7844396261019038,
            "unit": "iter/sec",
            "range": "stddev: 0.028518902249165357",
            "extra": "mean: 1.274795365666667 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9695021369806492,
            "unit": "iter/sec",
            "range": "stddev: 0.805416696427294",
            "extra": "mean: 1.0314572416666674 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.7361978261011614,
            "unit": "iter/sec",
            "range": "stddev: 1.0868470124680303",
            "extra": "mean: 1.3583305526666816 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.6205225855430988,
            "unit": "iter/sec",
            "range": "stddev: 0.8092905990204031",
            "extra": "mean: 1.6115448869999984 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.4825625675700238,
            "unit": "iter/sec",
            "range": "stddev: 0.17204604641374446",
            "extra": "mean: 674.5077893333283 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.9241141371263835,
            "unit": "iter/sec",
            "range": "stddev: 0.12449643913341799",
            "extra": "mean: 1.082117413666661 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.4693094215969681,
            "unit": "iter/sec",
            "range": "stddev: 0.14522344102212087",
            "extra": "mean: 2.13079037833333 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.1966937541803264,
            "unit": "iter/sec",
            "range": "stddev: 0.05898311149936706",
            "extra": "mean: 455.2295913333353 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.473883388303145,
            "unit": "iter/sec",
            "range": "stddev: 0.05150608894075787",
            "extra": "mean: 404.2227716666578 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 2.174392178673038,
            "unit": "iter/sec",
            "range": "stddev: 0.0394639573819911",
            "extra": "mean: 459.8986373333389 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.9625161604658654,
            "unit": "iter/sec",
            "range": "stddev: 0.04766026949758027",
            "extra": "mean: 1.0389435949999968 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.8420902133215991,
            "unit": "iter/sec",
            "range": "stddev: 0.03765635681259847",
            "extra": "mean: 1.1875212230000045 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.7843510370177621,
            "unit": "iter/sec",
            "range": "stddev: 0.025452265810204554",
            "extra": "mean: 1.2749393483333336 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.8386251233208359,
            "unit": "iter/sec",
            "range": "stddev: 0.7704611728333173",
            "extra": "mean: 1.1924279063333358 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8317958725727005,
            "unit": "iter/sec",
            "range": "stddev: 0.8263204887391039",
            "extra": "mean: 1.2022180356666752 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.6150984926369018,
            "unit": "iter/sec",
            "range": "stddev: 0.7579343657794386",
            "extra": "mean: 1.6257558943333474 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.711615996176273,
            "unit": "iter/sec",
            "range": "stddev: 0.014712821720024204",
            "extra": "mean: 175.0817983333377 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.060283375126826,
            "unit": "iter/sec",
            "range": "stddev: 0.011970346111734215",
            "extra": "mean: 197.6173913333336 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.471936282847965,
            "unit": "iter/sec",
            "range": "stddev: 0.018399850217237744",
            "extra": "mean: 182.75066599999454 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.26358961451887,
            "unit": "iter/sec",
            "range": "stddev: 0.01255221859519468",
            "extra": "mean: 159.6528606666728 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.440463380778196,
            "unit": "iter/sec",
            "range": "stddev: 0.01267777136308719",
            "extra": "mean: 155.26833099999257 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.4606597303110656,
            "unit": "iter/sec",
            "range": "stddev: 0.011901350817727642",
            "extra": "mean: 154.7829543333421 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.6036078846465633,
            "unit": "iter/sec",
            "range": "stddev: 0.01581208348912507",
            "extra": "mean: 277.49967033332723 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.788485746360947,
            "unit": "iter/sec",
            "range": "stddev: 0.026006704944422726",
            "extra": "mean: 358.61757633333013 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.5157831511771764,
            "unit": "iter/sec",
            "range": "stddev: 0.003313942618666713",
            "extra": "mean: 659.7249739999995 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.5707383771677146,
            "unit": "iter/sec",
            "range": "stddev: 0.028530935270497416",
            "extra": "mean: 636.6432593333305 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.3929057052211402,
            "unit": "iter/sec",
            "range": "stddev: 0.025704222527472845",
            "extra": "mean: 717.9236873333347 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.9057079717997476,
            "unit": "iter/sec",
            "range": "stddev: 0.06488977923170572",
            "extra": "mean: 1.1041086433333287 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.677474567646386,
            "unit": "iter/sec",
            "range": "stddev: 0.0375110959675991",
            "extra": "mean: 373.4862739999964 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 2.2553521101235092,
            "unit": "iter/sec",
            "range": "stddev: 0.011930566748792332",
            "extra": "mean: 443.38974633332856 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.3561918732179312,
            "unit": "iter/sec",
            "range": "stddev: 0.0140428409287286",
            "extra": "mean: 737.3587910000007 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.7107312635275878,
            "unit": "iter/sec",
            "range": "stddev: 0.019070257860386845",
            "extra": "mean: 368.90414533333643 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.8378237499750205,
            "unit": "iter/sec",
            "range": "stddev: 0.06577032037113881",
            "extra": "mean: 544.1218180000078 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.9214887545041572,
            "unit": "iter/sec",
            "range": "stddev: 0.06305150660770482",
            "extra": "mean: 1.0852004380000153 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 3.376234359300215,
            "unit": "iter/sec",
            "range": "stddev: 0.01973106783652533",
            "extra": "mean: 296.1879696666756 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.125232338236298,
            "unit": "iter/sec",
            "range": "stddev: 0.04415490691890718",
            "extra": "mean: 319.9762103333228 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.335576865893391,
            "unit": "iter/sec",
            "range": "stddev: 0.008015281601907837",
            "extra": "mean: 428.1597470000141 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.3309253615647547,
            "unit": "iter/sec",
            "range": "stddev: 0.03998497332487949",
            "extra": "mean: 429.0141660000207 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.1334175352461795,
            "unit": "iter/sec",
            "range": "stddev: 0.027988146302586215",
            "extra": "mean: 468.7314993333492 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.6278075013016302,
            "unit": "iter/sec",
            "range": "stddev: 0.044166033481132495",
            "extra": "mean: 614.3232533333199 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 3.648258249519489,
            "unit": "iter/sec",
            "range": "stddev: 0.006585644083003991",
            "extra": "mean: 274.1034026666587 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.6326221931919713,
            "unit": "iter/sec",
            "range": "stddev: 0.03247427938610527",
            "extra": "mean: 379.84941500000485 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.3945323440020094,
            "unit": "iter/sec",
            "range": "stddev: 0.02266006168095965",
            "extra": "mean: 417.6180799999922 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.966648286260067,
            "unit": "iter/sec",
            "range": "stddev: 0.012228494605070193",
            "extra": "mean: 201.34302700000717 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 5.010363385523055,
            "unit": "iter/sec",
            "range": "stddev: 0.013240593406203057",
            "extra": "mean: 199.58632199999707 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.7246314544146895,
            "unit": "iter/sec",
            "range": "stddev: 0.02180795280137158",
            "extra": "mean: 211.6567206666673 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.761483378184047,
            "unit": "iter/sec",
            "range": "stddev: 0.017780479742793846",
            "extra": "mean: 210.0185846666515 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.669799816967376,
            "unit": "iter/sec",
            "range": "stddev: 0.022084303181804835",
            "extra": "mean: 214.14194166665843 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.77403143069859,
            "unit": "iter/sec",
            "range": "stddev: 0.017552322711484738",
            "extra": "mean: 209.46657233332644 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 4.152034855468857,
            "unit": "iter/sec",
            "range": "stddev: 0.01992605444763025",
            "extra": "mean: 240.84576233334096 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.7241899068562576,
            "unit": "iter/sec",
            "range": "stddev: 0.04111762247904236",
            "extra": "mean: 268.5147709999948 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.344006848212827,
            "unit": "iter/sec",
            "range": "stddev: 0.03536253669863941",
            "extra": "mean: 426.619914000014 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.799038135625419,
            "unit": "iter/sec",
            "range": "stddev: 0.030461393576554655",
            "extra": "mean: 555.8525859999955 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.6327913850904574,
            "unit": "iter/sec",
            "range": "stddev: 0.0853226255036746",
            "extra": "mean: 612.4481113333408 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.2879336669924715,
            "unit": "iter/sec",
            "range": "stddev: 0.12212104331024741",
            "extra": "mean: 776.4375026667002 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.3082956263418197,
            "unit": "iter/sec",
            "range": "stddev: 0.833556946965869",
            "extra": "mean: 764.3532393333317 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.107620821503711,
            "unit": "iter/sec",
            "range": "stddev: 0.8139793355623239",
            "extra": "mean: 902.8360433333091 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.6245517130447397,
            "unit": "iter/sec",
            "range": "stddev: 0.8280228214797575",
            "extra": "mean: 1.6011484383333443 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 2.3352928936880097,
            "unit": "iter/sec",
            "range": "stddev: 0.06358676686434303",
            "extra": "mean: 428.2118113333316 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.287972591280401,
            "unit": "iter/sec",
            "range": "stddev: 0.05456093488432386",
            "extra": "mean: 776.4140376666546 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.5903477939690585,
            "unit": "iter/sec",
            "range": "stddev: 0.05118726210749909",
            "extra": "mean: 1.693916722000002 sec\nrounds: 3"
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
          "id": "26d0726f049884682d585379d2509b7d6b558ef3",
          "message": "update nodes api",
          "timestamp": "2023-01-23T13:07:22+08:00",
          "tree_id": "aec08df15ccc75d33bcb1aee60c73325a27ed07d",
          "url": "https://github.com/Yiling-J/cacheme/commit/26d0726f049884682d585379d2509b7d6b558ef3"
        },
        "date": 1674450975252,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 4.700634851760789,
            "unit": "iter/sec",
            "range": "stddev: 0.018113681022759686",
            "extra": "mean: 212.73722200000597 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 4.656189013187894,
            "unit": "iter/sec",
            "range": "stddev: 0.035720829987620085",
            "extra": "mean: 214.76791366666248 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 4.342743107551686,
            "unit": "iter/sec",
            "range": "stddev: 0.027121021225577274",
            "extra": "mean: 230.26920433333467 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 4.493697869593799,
            "unit": "iter/sec",
            "range": "stddev: 0.053025524982972146",
            "extra": "mean: 222.53387500001054 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 4.2659388254563595,
            "unit": "iter/sec",
            "range": "stddev: 0.052560055872827416",
            "extra": "mean: 234.41498833331784 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 4.1658371269908585,
            "unit": "iter/sec",
            "range": "stddev: 0.018697362187158235",
            "extra": "mean: 240.04779100001392 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 1.3833085702424408,
            "unit": "iter/sec",
            "range": "stddev: 0.06254127615856969",
            "extra": "mean: 722.9045070000097 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.9207259483599255,
            "unit": "iter/sec",
            "range": "stddev: 0.04090105998069905",
            "extra": "mean: 520.6364816666754 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.4263010222284676,
            "unit": "iter/sec",
            "range": "stddev: 0.055902402012593715",
            "extra": "mean: 701.114270000024 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.6751793709367979,
            "unit": "iter/sec",
            "range": "stddev: 0.03828456122838475",
            "extra": "mean: 1.481087905 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.6396637511116329,
            "unit": "iter/sec",
            "range": "stddev: 0.08676371366635442",
            "extra": "mean: 1.563321351666654 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.5632114978338549,
            "unit": "iter/sec",
            "range": "stddev: 0.03375737811548617",
            "extra": "mean: 1.775531934000033 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.6770068770426334,
            "unit": "iter/sec",
            "range": "stddev: 0.9575895021186938",
            "extra": "mean: 1.4770898699999861 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.6036201539256368,
            "unit": "iter/sec",
            "range": "stddev: 0.9927635165782382",
            "extra": "mean: 1.6566709933333261 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.4377959585320229,
            "unit": "iter/sec",
            "range": "stddev: 0.89222458160187",
            "extra": "mean: 2.2841690986666663 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 0.9652602821245789,
            "unit": "iter/sec",
            "range": "stddev: 0.3177680247518788",
            "extra": "mean: 1.0359900003333375 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.635378647719691,
            "unit": "iter/sec",
            "range": "stddev: 0.17591855090073394",
            "extra": "mean: 1.573864661000016 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.3192489472539554,
            "unit": "iter/sec",
            "range": "stddev: 0.2422979092691986",
            "extra": "mean: 3.1323517543333423 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.6377763885297707,
            "unit": "iter/sec",
            "range": "stddev: 0.12968721679993628",
            "extra": "mean: 610.5839643333107 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 1.6954931923080234,
            "unit": "iter/sec",
            "range": "stddev: 0.06509489176181239",
            "extra": "mean: 589.7988883333293 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.4381093160714262,
            "unit": "iter/sec",
            "range": "stddev: 0.035839140556423496",
            "extra": "mean: 695.3574313333585 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.6030699480750465,
            "unit": "iter/sec",
            "range": "stddev: 0.15212962603183694",
            "extra": "mean: 1.6581824433333547 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.6051788431254852,
            "unit": "iter/sec",
            "range": "stddev: 0.10978956807391953",
            "extra": "mean: 1.652404097333336 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.545169541721528,
            "unit": "iter/sec",
            "range": "stddev: 0.02272771542417345",
            "extra": "mean: 1.8342917633333211 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.6962578268410773,
            "unit": "iter/sec",
            "range": "stddev: 0.9303841010463489",
            "extra": "mean: 1.4362495636666683 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.59832925076931,
            "unit": "iter/sec",
            "range": "stddev: 0.9526386614461992",
            "extra": "mean: 1.6713205960000057 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.4116051560052502,
            "unit": "iter/sec",
            "range": "stddev: 1.3941030855488736",
            "extra": "mean: 2.4295128119999654 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 4.534851752862052,
            "unit": "iter/sec",
            "range": "stddev: 0.02516547402784235",
            "extra": "mean: 220.51437499999338 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 4.533083163956852,
            "unit": "iter/sec",
            "range": "stddev: 0.023048818268277725",
            "extra": "mean: 220.600409000023 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 4.711095085431727,
            "unit": "iter/sec",
            "range": "stddev: 0.03273975552482307",
            "extra": "mean: 212.26487299998098 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 5.228399622463943,
            "unit": "iter/sec",
            "range": "stddev: 0.028636832148866007",
            "extra": "mean: 191.2631153333185 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.393264923123455,
            "unit": "iter/sec",
            "range": "stddev: 0.031939950225206785",
            "extra": "mean: 185.41644333333807 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 4.9676299709796625,
            "unit": "iter/sec",
            "range": "stddev: 0.0293873959057236",
            "extra": "mean: 201.30323833334765 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 2.105851824019104,
            "unit": "iter/sec",
            "range": "stddev: 0.07753437526017715",
            "extra": "mean: 474.8672193333429 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 1.869234239507279,
            "unit": "iter/sec",
            "range": "stddev: 0.038516826486196615",
            "extra": "mean: 534.9784306666644 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 0.9083590068037393,
            "unit": "iter/sec",
            "range": "stddev: 0.07009750031324759",
            "extra": "mean: 1.100886315333317 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.0508086409102642,
            "unit": "iter/sec",
            "range": "stddev: 0.05966051959002574",
            "extra": "mean: 951.6480556666806 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.8522769048823102,
            "unit": "iter/sec",
            "range": "stddev: 0.10312373003544979",
            "extra": "mean: 1.1733275819999942 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.6559012997485383,
            "unit": "iter/sec",
            "range": "stddev: 0.11856492537942724",
            "extra": "mean: 1.524619634666654 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.6476581164593862,
            "unit": "iter/sec",
            "range": "stddev: 0.06247758756781872",
            "extra": "mean: 606.9220246666683 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.3309803960203748,
            "unit": "iter/sec",
            "range": "stddev: 0.09467856470765636",
            "extra": "mean: 751.3258669999914 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.700916250643052,
            "unit": "iter/sec",
            "range": "stddev: 0.20933439474140259",
            "extra": "mean: 1.4267039736666902 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.604801158516811,
            "unit": "iter/sec",
            "range": "stddev: 0.07475816391179976",
            "extra": "mean: 623.1301583332728 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.2225589222848368,
            "unit": "iter/sec",
            "range": "stddev: 0.18650913267404606",
            "extra": "mean: 817.9564859999573 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.735912626777617,
            "unit": "iter/sec",
            "range": "stddev: 0.032641491340976436",
            "extra": "mean: 1.3588569669999515 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 2.2703448330578837,
            "unit": "iter/sec",
            "range": "stddev: 0.05718856342395231",
            "extra": "mean: 440.4617243333557 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 2.2946056404355937,
            "unit": "iter/sec",
            "range": "stddev: 0.02437628850561416",
            "extra": "mean: 435.80473366663836 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 1.6430395885157938,
            "unit": "iter/sec",
            "range": "stddev: 0.023801553432233793",
            "extra": "mean: 608.6280616666878 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 1.6582792945161318,
            "unit": "iter/sec",
            "range": "stddev: 0.013757362316324379",
            "extra": "mean: 603.0347259999947 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.5372010060458263,
            "unit": "iter/sec",
            "range": "stddev: 0.0626416705861921",
            "extra": "mean: 650.5330116666528 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.1173564857998808,
            "unit": "iter/sec",
            "range": "stddev: 0.06840184104173655",
            "extra": "mean: 894.9695220000725 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 2.1707822092415237,
            "unit": "iter/sec",
            "range": "stddev: 0.05792442350149827",
            "extra": "mean: 460.66344 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.402860218710457,
            "unit": "iter/sec",
            "range": "stddev: 0.0034771671505041245",
            "extra": "mean: 416.17069199999906 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.3556871968595092,
            "unit": "iter/sec",
            "range": "stddev: 0.06597845886210996",
            "extra": "mean: 737.6332846666477 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 3.891852209304997,
            "unit": "iter/sec",
            "range": "stddev: 0.023478973007029474",
            "extra": "mean: 256.9470643333034 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 3.8801327607093112,
            "unit": "iter/sec",
            "range": "stddev: 0.005416611019944824",
            "extra": "mean: 257.72314033326893 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 3.6507208372625795,
            "unit": "iter/sec",
            "range": "stddev: 0.04431501970313216",
            "extra": "mean: 273.9185066667081 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 3.718777907685344,
            "unit": "iter/sec",
            "range": "stddev: 0.019549200170390513",
            "extra": "mean: 268.9055449999766 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 3.8001870611681046,
            "unit": "iter/sec",
            "range": "stddev: 0.022722682876220673",
            "extra": "mean: 263.14494099998836 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 3.7937867581103766,
            "unit": "iter/sec",
            "range": "stddev: 0.025890180034578034",
            "extra": "mean: 263.58887933334546 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.989443205819488,
            "unit": "iter/sec",
            "range": "stddev: 0.015671022912270554",
            "extra": "mean: 334.51045266667734 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 2.658423196441155,
            "unit": "iter/sec",
            "range": "stddev: 0.04910254567274181",
            "extra": "mean: 376.16283266663686 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 1.6133339694960098,
            "unit": "iter/sec",
            "range": "stddev: 0.048663660196946",
            "extra": "mean: 619.834466333335 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.4327758841593115,
            "unit": "iter/sec",
            "range": "stddev: 0.034297304727684295",
            "extra": "mean: 697.9458623333509 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.1602673217698014,
            "unit": "iter/sec",
            "range": "stddev: 0.0701134555531736",
            "extra": "mean: 861.8703476666573 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 0.8558635199337574,
            "unit": "iter/sec",
            "range": "stddev: 0.1249698722047677",
            "extra": "mean: 1.1684105896666779 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 0.9350300850121981,
            "unit": "iter/sec",
            "range": "stddev: 1.0955453143138545",
            "extra": "mean: 1.0694843043333246 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.8252800522867096,
            "unit": "iter/sec",
            "range": "stddev: 0.9891944468884456",
            "extra": "mean: 1.2117098883332649 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.4892014235456135,
            "unit": "iter/sec",
            "range": "stddev: 1.3066358531168076",
            "extra": "mean: 2.0441477720000116 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.5647413216145558,
            "unit": "iter/sec",
            "range": "stddev: 0.014995338877344333",
            "extra": "mean: 639.0832696666848 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.8591095552828024,
            "unit": "iter/sec",
            "range": "stddev: 0.09448056629136761",
            "extra": "mean: 1.1639958999999938 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.3405724610000406,
            "unit": "iter/sec",
            "range": "stddev: 0.09580892515504874",
            "extra": "mean: 2.936232709666683 sec\nrounds: 3"
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
          "id": "832934873f115419d9896df505a5081d96097ced",
          "message": "basic introduction readme",
          "timestamp": "2023-01-23T15:24:58+08:00",
          "tree_id": "a29050ec2fb98b8d7c545160d24f991ae38383b1",
          "url": "https://github.com/Yiling-J/cacheme/commit/832934873f115419d9896df505a5081d96097ced"
        },
        "date": 1674459060671,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 6.2351227762285,
            "unit": "iter/sec",
            "range": "stddev: 0.009246446258496112",
            "extra": "mean: 160.38176566667062 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.244257858525826,
            "unit": "iter/sec",
            "range": "stddev: 0.012120763567747881",
            "extra": "mean: 160.14713400001787 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.061831530264739,
            "unit": "iter/sec",
            "range": "stddev: 0.013301244835213518",
            "extra": "mean: 164.96664333334365 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.856598045994612,
            "unit": "iter/sec",
            "range": "stddev: 0.03228077557708188",
            "extra": "mean: 170.74758966665135 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.832596841608532,
            "unit": "iter/sec",
            "range": "stddev: 0.02028430090787528",
            "extra": "mean: 171.45021800001814 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.848547590699094,
            "unit": "iter/sec",
            "range": "stddev: 0.01212087740548572",
            "extra": "mean: 170.982621666667 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.157362055688455,
            "unit": "iter/sec",
            "range": "stddev: 0.06358922425717826",
            "extra": "mean: 463.5290573333464 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.6735229412022985,
            "unit": "iter/sec",
            "range": "stddev: 0.024098687959603852",
            "extra": "mean: 374.03830899999474 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 2.1148061009573165,
            "unit": "iter/sec",
            "range": "stddev: 0.05479845208957206",
            "extra": "mean: 472.8565893333325 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.9596738543032031,
            "unit": "iter/sec",
            "range": "stddev: 0.049574577095944136",
            "extra": "mean: 1.0420206776666607 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.991423014108824,
            "unit": "iter/sec",
            "range": "stddev: 0.02120822875215514",
            "extra": "mean: 1.008651187000017 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.8916098984291347,
            "unit": "iter/sec",
            "range": "stddev: 0.08660641431755184",
            "extra": "mean: 1.1215667319999814 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9946923428785056,
            "unit": "iter/sec",
            "range": "stddev: 0.8069833780523099",
            "extra": "mean: 1.0053359786666647 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.881781852047825,
            "unit": "iter/sec",
            "range": "stddev: 0.793153852559375",
            "extra": "mean: 1.134067340666661 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.545554540146212,
            "unit": "iter/sec",
            "range": "stddev: 0.5698229007378132",
            "extra": "mean: 1.832997301666656 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.6089080821373227,
            "unit": "iter/sec",
            "range": "stddev: 0.09313141568169794",
            "extra": "mean: 621.5395466666868 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 1.0342857175619304,
            "unit": "iter/sec",
            "range": "stddev: 0.04833454507022555",
            "extra": "mean: 966.8508256666731 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.47066674405745706,
            "unit": "iter/sec",
            "range": "stddev: 0.09067706079157892",
            "extra": "mean: 2.1246455430000046 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.160693709556636,
            "unit": "iter/sec",
            "range": "stddev: 0.031521225852914454",
            "extra": "mean: 462.81432466668093 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.7212166349134637,
            "unit": "iter/sec",
            "range": "stddev: 0.03776178549578033",
            "extra": "mean: 367.48268666665734 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 2.185667675102105,
            "unit": "iter/sec",
            "range": "stddev: 0.047091627191401204",
            "extra": "mean: 457.5260966666785 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.9163032930803158,
            "unit": "iter/sec",
            "range": "stddev: 0.037602510237056366",
            "extra": "mean: 1.0913417070000075 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.970777915019901,
            "unit": "iter/sec",
            "range": "stddev: 0.07256876493834197",
            "extra": "mean: 1.0301017199999858 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.8620853441478799,
            "unit": "iter/sec",
            "range": "stddev: 0.07064610942770318",
            "extra": "mean: 1.15997796133333 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 1.0053807340143355,
            "unit": "iter/sec",
            "range": "stddev: 0.7589516794700354",
            "extra": "mean: 994.6480633333294 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8516894487215942,
            "unit": "iter/sec",
            "range": "stddev: 0.8522842714275536",
            "extra": "mean: 1.1741368893333402 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5407941837311538,
            "unit": "iter/sec",
            "range": "stddev: 0.6532787097938104",
            "extra": "mean: 1.8491323133333328 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 6.244681508837042,
            "unit": "iter/sec",
            "range": "stddev: 0.011692949868015558",
            "extra": "mean: 160.13626933333094 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 6.230319976772796,
            "unit": "iter/sec",
            "range": "stddev: 0.01220053701946531",
            "extra": "mean: 160.5054000000147 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 6.222192064409577,
            "unit": "iter/sec",
            "range": "stddev: 0.01158425878126671",
            "extra": "mean: 160.71506466666582 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 7.0525773023118905,
            "unit": "iter/sec",
            "range": "stddev: 0.008952965261731803",
            "extra": "mean: 141.79213600001125 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 7.058866546974905,
            "unit": "iter/sec",
            "range": "stddev: 0.011925347629388688",
            "extra": "mean: 141.66580333333437 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 7.097686670620247,
            "unit": "iter/sec",
            "range": "stddev: 0.010744233870852252",
            "extra": "mean: 140.89097566666928 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.7065778940269594,
            "unit": "iter/sec",
            "range": "stddev: 0.032635367390237285",
            "extra": "mean: 269.79063400002207 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.4868237508676985,
            "unit": "iter/sec",
            "range": "stddev: 0.04480283509381227",
            "extra": "mean: 402.1193700000178 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.6886139195012688,
            "unit": "iter/sec",
            "range": "stddev: 0.009657660937769163",
            "extra": "mean: 592.2016799999786 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.8174380344199104,
            "unit": "iter/sec",
            "range": "stddev: 0.04353060133323485",
            "extra": "mean: 550.2250866666714 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.4259887856505682,
            "unit": "iter/sec",
            "range": "stddev: 0.09762142091975765",
            "extra": "mean: 701.2677870000061 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.9607682613538039,
            "unit": "iter/sec",
            "range": "stddev: 0.024845939433760695",
            "extra": "mean: 1.0408337163333385 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.982160435948934,
            "unit": "iter/sec",
            "range": "stddev: 0.041380838831988585",
            "extra": "mean: 335.3273646666821 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 2.3212462412669996,
            "unit": "iter/sec",
            "range": "stddev: 0.07403118271098123",
            "extra": "mean: 430.80306699998044 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.5694390663909226,
            "unit": "iter/sec",
            "range": "stddev: 0.0460946085879002",
            "extra": "mean: 637.1703249999996 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.892411568507733,
            "unit": "iter/sec",
            "range": "stddev: 0.023739033594632277",
            "extra": "mean: 345.7322640000105 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.809020034026737,
            "unit": "iter/sec",
            "range": "stddev: 0.022517461566950083",
            "extra": "mean: 552.785475666667 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.4837472118331285,
            "unit": "iter/sec",
            "range": "stddev: 0.023305834003242716",
            "extra": "mean: 673.9692529999957 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 3.6201655238630432,
            "unit": "iter/sec",
            "range": "stddev: 0.0028008265572065654",
            "extra": "mean: 276.23046333332013 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.7619872478943392,
            "unit": "iter/sec",
            "range": "stddev: 0.011003824829540772",
            "extra": "mean: 265.8169563333104 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.542420230700884,
            "unit": "iter/sec",
            "range": "stddev: 0.014254872891337658",
            "extra": "mean: 393.326007999993 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.5030581404854684,
            "unit": "iter/sec",
            "range": "stddev: 0.018026557721696968",
            "extra": "mean: 399.5112953333357 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.305613561184826,
            "unit": "iter/sec",
            "range": "stddev: 0.0100612364386595",
            "extra": "mean: 433.72402766668 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.5847135973949438,
            "unit": "iter/sec",
            "range": "stddev: 0.028958952778978923",
            "extra": "mean: 631.0288506666856 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 3.957215885093532,
            "unit": "iter/sec",
            "range": "stddev: 0.00201885957856036",
            "extra": "mean: 252.7029176666626 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 3.3106185796682923,
            "unit": "iter/sec",
            "range": "stddev: 0.013754997682157056",
            "extra": "mean: 302.0583543333449 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.9825263943270375,
            "unit": "iter/sec",
            "range": "stddev: 0.04263746695057617",
            "extra": "mean: 504.40690366669594 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.965361957731324,
            "unit": "iter/sec",
            "range": "stddev: 0.013978504958071215",
            "extra": "mean: 201.3951870000028 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.727322983586807,
            "unit": "iter/sec",
            "range": "stddev: 0.031050372319898985",
            "extra": "mean: 211.53621266665823 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 5.006378142441814,
            "unit": "iter/sec",
            "range": "stddev: 0.013488462114932629",
            "extra": "mean: 199.74519933331672 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.8119234072672326,
            "unit": "iter/sec",
            "range": "stddev: 0.017411526429870507",
            "extra": "mean: 207.81710666669065 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.790539267476934,
            "unit": "iter/sec",
            "range": "stddev: 0.018392694572180093",
            "extra": "mean: 208.7447663333061 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.682089311749622,
            "unit": "iter/sec",
            "range": "stddev: 0.024087901622765032",
            "extra": "mean: 213.579864333326 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 4.462822931094595,
            "unit": "iter/sec",
            "range": "stddev: 0.02530312028830343",
            "extra": "mean: 224.07342066666538 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 4.176623138740334,
            "unit": "iter/sec",
            "range": "stddev: 0.021942842251667347",
            "extra": "mean: 239.42787433333024 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.6054885404698354,
            "unit": "iter/sec",
            "range": "stddev: 0.041007898744147356",
            "extra": "mean: 383.805180666684 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 2.06404035397044,
            "unit": "iter/sec",
            "range": "stddev: 0.02353526158864861",
            "extra": "mean: 484.48665166665705 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.5530819267675544,
            "unit": "iter/sec",
            "range": "stddev: 0.09928789579658717",
            "extra": "mean: 643.8810360000199 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.499286337454478,
            "unit": "iter/sec",
            "range": "stddev: 0.16572269469816106",
            "extra": "mean: 666.984000999984 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.3707551098870074,
            "unit": "iter/sec",
            "range": "stddev: 0.8094424985100471",
            "extra": "mean: 729.5249113333094 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.1305815549355336,
            "unit": "iter/sec",
            "range": "stddev: 0.7823906125153642",
            "extra": "mean: 884.5005436666801 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.7553172620679417,
            "unit": "iter/sec",
            "range": "stddev: 0.8160195436297021",
            "extra": "mean: 1.3239469693333301 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 2.3854166674202553,
            "unit": "iter/sec",
            "range": "stddev: 0.042862542698812456",
            "extra": "mean: 419.2139736666907 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.131746429022557,
            "unit": "iter/sec",
            "range": "stddev: 0.08852948551892513",
            "extra": "mean: 883.5901526666703 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.5328904682912811,
            "unit": "iter/sec",
            "range": "stddev: 0.047798087476540775",
            "extra": "mean: 1.8765582413333657 sec\nrounds: 3"
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
          "id": "4e41acd1110453eccc2abb8a3da285a06f028add",
          "message": "Update README.md",
          "timestamp": "2023-01-23T20:07:19+08:00",
          "tree_id": "0e026dc42e275c8bd78fb32ba8976d481a1b1258",
          "url": "https://github.com/Yiling-J/cacheme/commit/4e41acd1110453eccc2abb8a3da285a06f028add"
        },
        "date": 1674476016943,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 5.669406830203425,
            "unit": "iter/sec",
            "range": "stddev: 0.03094260270641423",
            "extra": "mean: 176.38529566665775 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 5.476230161039568,
            "unit": "iter/sec",
            "range": "stddev: 0.009366659460442395",
            "extra": "mean: 182.60737233333657 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 5.81879109145409,
            "unit": "iter/sec",
            "range": "stddev: 0.013421002317615924",
            "extra": "mean: 171.85700333333406 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.776072349203476,
            "unit": "iter/sec",
            "range": "stddev: 0.03444339091291233",
            "extra": "mean: 173.12802533332197 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.778583439866212,
            "unit": "iter/sec",
            "range": "stddev: 0.0238700507642956",
            "extra": "mean: 173.05279233333218 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.79434709098991,
            "unit": "iter/sec",
            "range": "stddev: 0.011493676399502911",
            "extra": "mean: 172.58199833333757 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.903954830260456,
            "unit": "iter/sec",
            "range": "stddev: 0.053891193088735356",
            "extra": "mean: 344.35797333332135 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.9330369680672894,
            "unit": "iter/sec",
            "range": "stddev: 0.017968979794452358",
            "extra": "mean: 340.94353766667496 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 2.1571363500691327,
            "unit": "iter/sec",
            "range": "stddev: 0.06510952865027861",
            "extra": "mean: 463.5775573333376 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.9396019456348733,
            "unit": "iter/sec",
            "range": "stddev: 0.12535545880980994",
            "extra": "mean: 1.0642804696666701 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.9313313090300924,
            "unit": "iter/sec",
            "range": "stddev: 0.08690683906783456",
            "extra": "mean: 1.073731754000003 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.8228626459368211,
            "unit": "iter/sec",
            "range": "stddev: 0.12903598147843368",
            "extra": "mean: 1.2152696503333307 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9794587931288831,
            "unit": "iter/sec",
            "range": "stddev: 0.8239764394239388",
            "extra": "mean: 1.0209719969999942 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.7492087147872859,
            "unit": "iter/sec",
            "range": "stddev: 0.9655689296889859",
            "extra": "mean: 1.3347415483333218 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.6296204534323144,
            "unit": "iter/sec",
            "range": "stddev: 0.7572460956841495",
            "extra": "mean: 1.5882584413333423 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.4764829218269278,
            "unit": "iter/sec",
            "range": "stddev: 0.1410436718324804",
            "extra": "mean: 677.2851790000042 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.8982248807440378,
            "unit": "iter/sec",
            "range": "stddev: 0.01989872827211173",
            "extra": "mean: 1.1133069473333421 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.47196548091039986,
            "unit": "iter/sec",
            "range": "stddev: 0.17350365612651802",
            "extra": "mean: 2.1187990233333287 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.4353633085821427,
            "unit": "iter/sec",
            "range": "stddev: 0.08296460023284676",
            "extra": "mean: 410.61635299999466 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.72587288003587,
            "unit": "iter/sec",
            "range": "stddev: 0.021376991837890158",
            "extra": "mean: 366.854964999997 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 2.1648134946714643,
            "unit": "iter/sec",
            "range": "stddev: 0.029148193454801786",
            "extra": "mean: 461.93355799999836 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.9346455737249322,
            "unit": "iter/sec",
            "range": "stddev: 0.08707684722252841",
            "extra": "mean: 1.0699242880000004 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.8601141337050956,
            "unit": "iter/sec",
            "range": "stddev: 0.017381492894739177",
            "extra": "mean: 1.1626363999999871 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.7919869535165456,
            "unit": "iter/sec",
            "range": "stddev: 0.012086241583379719",
            "extra": "mean: 1.2626470620000039 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.8661412680681094,
            "unit": "iter/sec",
            "range": "stddev: 0.8633844047005295",
            "extra": "mean: 1.1545460733333452 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8587395161870413,
            "unit": "iter/sec",
            "range": "stddev: 0.8559102981934645",
            "extra": "mean: 1.164497476999988 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.6240980814071434,
            "unit": "iter/sec",
            "range": "stddev: 0.799958173813234",
            "extra": "mean: 1.6023122483333339 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.771532722859526,
            "unit": "iter/sec",
            "range": "stddev: 0.015722352575072204",
            "extra": "mean: 173.26419999998657 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.361751895669187,
            "unit": "iter/sec",
            "range": "stddev: 0.00700501624747487",
            "extra": "mean: 186.50620533332093 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.05234321885121,
            "unit": "iter/sec",
            "range": "stddev: 0.03493059086993885",
            "extra": "mean: 197.92796266667287 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.442554270128546,
            "unit": "iter/sec",
            "range": "stddev: 0.018127351048881076",
            "extra": "mean: 155.21793966666073 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.5095441221740264,
            "unit": "iter/sec",
            "range": "stddev: 0.01601367197178797",
            "extra": "mean: 153.62058866666453 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.468187627065108,
            "unit": "iter/sec",
            "range": "stddev: 0.016719499236502174",
            "extra": "mean: 154.60281266666698 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.7358092576884627,
            "unit": "iter/sec",
            "range": "stddev: 0.01920920524728089",
            "extra": "mean: 267.67961933333595 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.8625184049914902,
            "unit": "iter/sec",
            "range": "stddev: 0.024317847495910108",
            "extra": "mean: 349.34273199999666 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.566947627410139,
            "unit": "iter/sec",
            "range": "stddev: 0.048160730926898994",
            "extra": "mean: 638.183422666657 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.8182131652787032,
            "unit": "iter/sec",
            "range": "stddev: 0.04721061622947823",
            "extra": "mean: 549.9905176666763 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.3808765972830102,
            "unit": "iter/sec",
            "range": "stddev: 0.08096878512207502",
            "extra": "mean: 724.177672333345 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.8722529297848496,
            "unit": "iter/sec",
            "range": "stddev: 0.06411663724610345",
            "extra": "mean: 1.1464564530000037 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.8341947627408564,
            "unit": "iter/sec",
            "range": "stddev: 0.017610207771097366",
            "extra": "mean: 352.83390299999456 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 2.4758945564870185,
            "unit": "iter/sec",
            "range": "stddev: 0.01520991343438799",
            "extra": "mean: 403.8944216666778 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.4373855135015385,
            "unit": "iter/sec",
            "range": "stddev: 0.026608089890307277",
            "extra": "mean: 695.7075820000114 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.2862680642583775,
            "unit": "iter/sec",
            "range": "stddev: 0.08257263806306146",
            "extra": "mean: 437.39402899999885 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 2.0876997501117214,
            "unit": "iter/sec",
            "range": "stddev: 0.0297673588476427",
            "extra": "mean: 478.9960816666697 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.1147497944030702,
            "unit": "iter/sec",
            "range": "stddev: 0.10061558445111751",
            "extra": "mean: 897.0622870000019 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 4.230303337158127,
            "unit": "iter/sec",
            "range": "stddev: 0.003191328733104205",
            "extra": "mean: 236.3896676666665 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.647415313605905,
            "unit": "iter/sec",
            "range": "stddev: 0.00813939250395052",
            "extra": "mean: 274.1667493333466 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.5421528989554827,
            "unit": "iter/sec",
            "range": "stddev: 0.011560564839383058",
            "extra": "mean: 393.3673700000024 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.4700017525567413,
            "unit": "iter/sec",
            "range": "stddev: 0.005811316225031104",
            "extra": "mean: 404.8580123333447 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.133229903728932,
            "unit": "iter/sec",
            "range": "stddev: 0.05724172875008711",
            "extra": "mean: 468.77272733331665 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.6607654025312424,
            "unit": "iter/sec",
            "range": "stddev: 0.020387814162384398",
            "extra": "mean: 602.1320039999978 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 3.691283918688167,
            "unit": "iter/sec",
            "range": "stddev: 0.012131398858482564",
            "extra": "mean: 270.90844866665975 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 3.4216934103028565,
            "unit": "iter/sec",
            "range": "stddev: 0.013698190571233579",
            "extra": "mean: 292.25295200001256 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.321315221053633,
            "unit": "iter/sec",
            "range": "stddev: 0.0370710262325017",
            "extra": "mean: 430.79026533333337 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.974239252243015,
            "unit": "iter/sec",
            "range": "stddev: 0.01270175185568427",
            "extra": "mean: 201.035766333329 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.997177227842297,
            "unit": "iter/sec",
            "range": "stddev: 0.013440573671400377",
            "extra": "mean: 200.11297466665687 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.755542593214995,
            "unit": "iter/sec",
            "range": "stddev: 0.005758256975871382",
            "extra": "mean: 210.28094699998215 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.795112031583146,
            "unit": "iter/sec",
            "range": "stddev: 0.018310501590585816",
            "extra": "mean: 208.54570099999137 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.772928393081616,
            "unit": "iter/sec",
            "range": "stddev: 0.017502821785118652",
            "extra": "mean: 209.51498066669197 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.814270352338338,
            "unit": "iter/sec",
            "range": "stddev: 0.01851766830672199",
            "extra": "mean: 207.715796333351 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 4.420301217595779,
            "unit": "iter/sec",
            "range": "stddev: 0.013362258731263319",
            "extra": "mean: 226.2289266666547 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 4.015776352205542,
            "unit": "iter/sec",
            "range": "stddev: 0.030546322839713806",
            "extra": "mean: 249.01785166665982 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.5832883174535133,
            "unit": "iter/sec",
            "range": "stddev: 0.011009054546782067",
            "extra": "mean: 387.1035196666526 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.893542893947144,
            "unit": "iter/sec",
            "range": "stddev: 0.05545850013547552",
            "extra": "mean: 528.1105610000054 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.4798274407159262,
            "unit": "iter/sec",
            "range": "stddev: 0.25712245662073707",
            "extra": "mean: 675.7544646666437 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.3866394502745387,
            "unit": "iter/sec",
            "range": "stddev: 0.22778718533328243",
            "extra": "mean: 721.168000666656 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.3699755781485812,
            "unit": "iter/sec",
            "range": "stddev: 0.8045708908579355",
            "extra": "mean: 729.9400193333554 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.1355810846405738,
            "unit": "iter/sec",
            "range": "stddev: 0.784649202814033",
            "extra": "mean: 880.6064256666559 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.7479593460689311,
            "unit": "iter/sec",
            "range": "stddev: 0.7461159027329974",
            "extra": "mean: 1.336971060333326 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.7732085078948474,
            "unit": "iter/sec",
            "range": "stddev: 0.0754371355748107",
            "extra": "mean: 563.9494710000008 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.2931146175533703,
            "unit": "iter/sec",
            "range": "stddev: 0.020537047423386218",
            "extra": "mean: 773.3266536666671 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.5295637628071982,
            "unit": "iter/sec",
            "range": "stddev: 0.011096980431368485",
            "extra": "mean: 1.8883467303333532 sec\nrounds: 3"
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
          "id": "d6dc336839395ad489591e9dbeb6c4e4c99bf619",
          "message": "Update README.md",
          "timestamp": "2023-01-23T20:37:41+08:00",
          "tree_id": "e86dfe7caa3f01a06741c0e599c7fb1900ebe04b",
          "url": "https://github.com/Yiling-J/cacheme/commit/d6dc336839395ad489591e9dbeb6c4e4c99bf619"
        },
        "date": 1674477982240,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 4.6180104871937,
            "unit": "iter/sec",
            "range": "stddev: 0.01946836601742198",
            "extra": "mean: 216.54346666667834 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 4.645706520030437,
            "unit": "iter/sec",
            "range": "stddev: 0.008702471886457494",
            "extra": "mean: 215.25251233335516 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 4.41848908746469,
            "unit": "iter/sec",
            "range": "stddev: 0.019916323778080412",
            "extra": "mean: 226.32170866666002 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 4.257174884680419,
            "unit": "iter/sec",
            "range": "stddev: 0.0562690771560155",
            "extra": "mean: 234.8975616666659 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 4.528404553412728,
            "unit": "iter/sec",
            "range": "stddev: 0.03297689539619208",
            "extra": "mean: 220.82832666670052 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 4.467065033073681,
            "unit": "iter/sec",
            "range": "stddev: 0.0152931091497525",
            "extra": "mean: 223.86063166667705 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 1.7454989600881305,
            "unit": "iter/sec",
            "range": "stddev: 0.11847945596711007",
            "extra": "mean: 572.9020886666755 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.887347287826409,
            "unit": "iter/sec",
            "range": "stddev: 0.040746474252621664",
            "extra": "mean: 529.8441926666632 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.3356993436591913,
            "unit": "iter/sec",
            "range": "stddev: 0.1317923785718426",
            "extra": "mean: 748.6714766666486 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.6538451812682079,
            "unit": "iter/sec",
            "range": "stddev: 0.05096399972754157",
            "extra": "mean: 1.5294140396666762 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.6052049183193697,
            "unit": "iter/sec",
            "range": "stddev: 0.06942599348407083",
            "extra": "mean: 1.6523329036666798 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.5626664899548716,
            "unit": "iter/sec",
            "range": "stddev: 0.09482668249205",
            "extra": "mean: 1.777251743000022 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.629511590750595,
            "unit": "iter/sec",
            "range": "stddev: 1.1233823560252278",
            "extra": "mean: 1.5885331020000042 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.5836392880724331,
            "unit": "iter/sec",
            "range": "stddev: 0.967749961108872",
            "extra": "mean: 1.7133870533333493 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.4015364354832112,
            "unit": "iter/sec",
            "range": "stddev: 1.1457434060388247",
            "extra": "mean: 2.490434022000007 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 0.9348918839061018,
            "unit": "iter/sec",
            "range": "stddev: 0.08644767127276302",
            "extra": "mean: 1.0696424016666697 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.6409407330868014,
            "unit": "iter/sec",
            "range": "stddev: 0.08452331596093367",
            "extra": "mean: 1.5602066593333082 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.3258938916668264,
            "unit": "iter/sec",
            "range": "stddev: 0.051648812107023635",
            "extra": "mean: 3.068483410000018 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.4055345565569397,
            "unit": "iter/sec",
            "range": "stddev: 0.08068231404813515",
            "extra": "mean: 711.4730799999999 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 1.4074961132686905,
            "unit": "iter/sec",
            "range": "stddev: 0.13390316017138326",
            "extra": "mean: 710.481535666664 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.086821810569512,
            "unit": "iter/sec",
            "range": "stddev: 0.25852097958952897",
            "extra": "mean: 920.114033666645 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.6384187017730928,
            "unit": "iter/sec",
            "range": "stddev: 0.02685813335055454",
            "extra": "mean: 1.5663701536666774 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.5869532178432616,
            "unit": "iter/sec",
            "range": "stddev: 0.07502319720566847",
            "extra": "mean: 1.7037132936666808 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.5496971321068171,
            "unit": "iter/sec",
            "range": "stddev: 0.03149046012884319",
            "extra": "mean: 1.8191835860000083 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.6950528779664036,
            "unit": "iter/sec",
            "range": "stddev: 0.8499043414652977",
            "extra": "mean: 1.438739456666686 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.49571788407304496,
            "unit": "iter/sec",
            "range": "stddev: 1.1257357466621678",
            "extra": "mean: 2.0172764229999984 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.45113720591636364,
            "unit": "iter/sec",
            "range": "stddev: 0.9311344969115555",
            "extra": "mean: 2.216620546666661 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 4.352498658273846,
            "unit": "iter/sec",
            "range": "stddev: 0.012382664722017036",
            "extra": "mean: 229.75308633330846 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 4.137456950398247,
            "unit": "iter/sec",
            "range": "stddev: 0.05074117162877502",
            "extra": "mean: 241.69435766666916 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 4.23384008546334,
            "unit": "iter/sec",
            "range": "stddev: 0.009067528496954842",
            "extra": "mean: 236.19219900001553 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 4.285005356063936,
            "unit": "iter/sec",
            "range": "stddev: 0.04933217450753",
            "extra": "mean: 233.3719369999964 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.155255564894595,
            "unit": "iter/sec",
            "range": "stddev: 0.018276325678157283",
            "extra": "mean: 193.97680433335532 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 4.8574867547148735,
            "unit": "iter/sec",
            "range": "stddev: 0.004887301748956619",
            "extra": "mean: 205.86777699998038 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 2.214528667483962,
            "unit": "iter/sec",
            "range": "stddev: 0.05377071873485641",
            "extra": "mean: 451.56335733334646 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 1.273010564486396,
            "unit": "iter/sec",
            "range": "stddev: 0.016821859177323113",
            "extra": "mean: 785.5394353333244 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 0.9138897193599378,
            "unit": "iter/sec",
            "range": "stddev: 0.14905261123305408",
            "extra": "mean: 1.0942239296666685 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.0582728046177377,
            "unit": "iter/sec",
            "range": "stddev: 0.04253627680197372",
            "extra": "mean: 944.9359330000107 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.9112104763321747,
            "unit": "iter/sec",
            "range": "stddev: 0.060125824483408606",
            "extra": "mean: 1.0974412893333085 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.6675003600797368,
            "unit": "iter/sec",
            "range": "stddev: 0.041621287549923294",
            "extra": "mean: 1.4981265326666555 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.875001267969561,
            "unit": "iter/sec",
            "range": "stddev: 0.026151844863433464",
            "extra": "mean: 533.3329726666799 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.544438734963314,
            "unit": "iter/sec",
            "range": "stddev: 0.06546748903389973",
            "extra": "mean: 647.4844080000063 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.9671012592887006,
            "unit": "iter/sec",
            "range": "stddev: 0.0916451198194316",
            "extra": "mean: 1.034017886333326 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.9270486407368597,
            "unit": "iter/sec",
            "range": "stddev: 0.012346609973310505",
            "extra": "mean: 518.928261000004 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.467139492339524,
            "unit": "iter/sec",
            "range": "stddev: 0.0625239285546173",
            "extra": "mean: 681.5984473333098 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.7575183615955206,
            "unit": "iter/sec",
            "range": "stddev: 0.1422956932477708",
            "extra": "mean: 1.3201000143333204 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 3.1203417393279738,
            "unit": "iter/sec",
            "range": "stddev: 0.008056531996025258",
            "extra": "mean: 320.47771800000646 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 2.5861194634195814,
            "unit": "iter/sec",
            "range": "stddev: 0.012492974436388173",
            "extra": "mean: 386.67973933335514 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 1.7353017916621154,
            "unit": "iter/sec",
            "range": "stddev: 0.013020828475580684",
            "extra": "mean: 576.2686379999499 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 1.5667650502679076,
            "unit": "iter/sec",
            "range": "stddev: 0.06192465198068293",
            "extra": "mean: 638.2577910000009 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.4940466923148206,
            "unit": "iter/sec",
            "range": "stddev: 0.009244200227799346",
            "extra": "mean: 669.3231243333079 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.15666960080199,
            "unit": "iter/sec",
            "range": "stddev: 0.07220562617826186",
            "extra": "mean: 864.5511210000146 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 2.396293809561447,
            "unit": "iter/sec",
            "range": "stddev: 0.034601329686733795",
            "extra": "mean: 417.3110976666976 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.382804347551074,
            "unit": "iter/sec",
            "range": "stddev: 0.025879711955736618",
            "extra": "mean: 419.6735670000559 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.2068968720372841,
            "unit": "iter/sec",
            "range": "stddev: 0.1255487822162082",
            "extra": "mean: 828.5712086667066 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 3.5819966555611886,
            "unit": "iter/sec",
            "range": "stddev: 0.039679665744692574",
            "extra": "mean: 279.17390666668024 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 3.8031623238949974,
            "unit": "iter/sec",
            "range": "stddev: 0.021077104146707607",
            "extra": "mean: 262.93907933328836 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 3.9498862708584452,
            "unit": "iter/sec",
            "range": "stddev: 0.022379635661746455",
            "extra": "mean: 253.17184633335427 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 3.7969693557564272,
            "unit": "iter/sec",
            "range": "stddev: 0.02284818046090988",
            "extra": "mean: 263.36794066666397 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 3.486708762662505,
            "unit": "iter/sec",
            "range": "stddev: 0.016462994204245414",
            "extra": "mean: 286.80342066665315 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 3.6904753542613844,
            "unit": "iter/sec",
            "range": "stddev: 0.02084270970365438",
            "extra": "mean: 270.96780333333 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.9938221611499727,
            "unit": "iter/sec",
            "range": "stddev: 0.0439722826223008",
            "extra": "mean: 334.02117633329453 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 2.5024612853702264,
            "unit": "iter/sec",
            "range": "stddev: 0.04893267820322344",
            "extra": "mean: 399.606581666679 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 1.5637506225916182,
            "unit": "iter/sec",
            "range": "stddev: 0.07399706973510398",
            "extra": "mean: 639.488154666689 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.135750914662914,
            "unit": "iter/sec",
            "range": "stddev: 0.09232824422324896",
            "extra": "mean: 880.4747476666535 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.082403606273548,
            "unit": "iter/sec",
            "range": "stddev: 0.11747623850341528",
            "extra": "mean: 923.86979699999 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 0.9412258309807244,
            "unit": "iter/sec",
            "range": "stddev: 0.25433286223688983",
            "extra": "mean: 1.0624442796666926 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.0653586868856526,
            "unit": "iter/sec",
            "range": "stddev: 0.8573217937492685",
            "extra": "mean: 938.6510030000181 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.727678675655566,
            "unit": "iter/sec",
            "range": "stddev: 0.7839480557083315",
            "extra": "mean: 1.374232931999965 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.5947584233956883,
            "unit": "iter/sec",
            "range": "stddev: 0.9192498383821871",
            "extra": "mean: 1.6813549176666431 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.6715819319784724,
            "unit": "iter/sec",
            "range": "stddev: 0.09220385357808822",
            "extra": "mean: 598.2357076666934 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.9010975904805135,
            "unit": "iter/sec",
            "range": "stddev: 0.04114854208082252",
            "extra": "mean: 1.1097577116666646 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.36364300164183316,
            "unit": "iter/sec",
            "range": "stddev: 0.11646149590632845",
            "extra": "mean: 2.7499498009999948 sec\nrounds: 3"
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
          "id": "357e918fdd72e4957e5bc2e17fce40f04c309ac2",
          "message": "use zlib as default compressor",
          "timestamp": "2023-01-24T10:59:42+08:00",
          "tree_id": "eabfe581e9344697df8be2c6820927810f65e262",
          "url": "https://github.com/Yiling-J/cacheme/commit/357e918fdd72e4957e5bc2e17fce40f04c309ac2"
        },
        "date": 1674529782196,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 4.755376965365671,
            "unit": "iter/sec",
            "range": "stddev: 0.024125080588009048",
            "extra": "mean: 210.2882710000055 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 4.19572304523892,
            "unit": "iter/sec",
            "range": "stddev: 0.01818556968268866",
            "extra": "mean: 238.33794300001423 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 4.185417166995851,
            "unit": "iter/sec",
            "range": "stddev: 0.025662588215413364",
            "extra": "mean: 238.92480966664684 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 4.202841286301306,
            "unit": "iter/sec",
            "range": "stddev: 0.05383211094687135",
            "extra": "mean: 237.93427633334355 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 3.7640136769901074,
            "unit": "iter/sec",
            "range": "stddev: 0.03648962401762106",
            "extra": "mean: 265.67384866668436 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 4.123964554464563,
            "unit": "iter/sec",
            "range": "stddev: 0.01772696747477439",
            "extra": "mean: 242.4851103333102 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 1.6991375447984978,
            "unit": "iter/sec",
            "range": "stddev: 0.09364326213401421",
            "extra": "mean: 588.5338730000171 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.8400094623589995,
            "unit": "iter/sec",
            "range": "stddev: 0.02459850160740622",
            "extra": "mean: 543.4754660000181 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.1664862563469665,
            "unit": "iter/sec",
            "range": "stddev: 0.08386355170759996",
            "extra": "mean: 857.2754239999844 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.5722470734216025,
            "unit": "iter/sec",
            "range": "stddev: 0.0543659345595642",
            "extra": "mean: 1.7474969229999904 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.5490353403682754,
            "unit": "iter/sec",
            "range": "stddev: 0.058898245367220305",
            "extra": "mean: 1.8213763786666846 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.48662818222298054,
            "unit": "iter/sec",
            "range": "stddev: 0.08004032563134031",
            "extra": "mean: 2.0549570216666666 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.5628782742880444,
            "unit": "iter/sec",
            "range": "stddev: 1.0807405223481263",
            "extra": "mean: 1.7765830476666526 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.4934164939663295,
            "unit": "iter/sec",
            "range": "stddev: 0.8450267477960074",
            "extra": "mean: 2.026685391000001 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.4033072522370949,
            "unit": "iter/sec",
            "range": "stddev: 1.178802743194135",
            "extra": "mean: 2.4794991769999797 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 0.8609051894292282,
            "unit": "iter/sec",
            "range": "stddev: 0.15175174782213116",
            "extra": "mean: 1.1615680939999795 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.5089739844778219,
            "unit": "iter/sec",
            "range": "stddev: 0.5570835766055878",
            "extra": "mean: 1.9647369620000177 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.32264264368600176,
            "unit": "iter/sec",
            "range": "stddev: 0.05344805927343552",
            "extra": "mean: 3.099404308666673 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.0672941878343658,
            "unit": "iter/sec",
            "range": "stddev: 0.055080905104295134",
            "extra": "mean: 936.9487919999718 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 1.454928061474785,
            "unit": "iter/sec",
            "range": "stddev: 0.07630452452526242",
            "extra": "mean: 687.3192060000216 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.3368817269992086,
            "unit": "iter/sec",
            "range": "stddev: 0.03924802925852335",
            "extra": "mean: 748.0093263333174 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.5696557378857693,
            "unit": "iter/sec",
            "range": "stddev: 0.04452052951358874",
            "extra": "mean: 1.7554461993333348 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.5299407818009034,
            "unit": "iter/sec",
            "range": "stddev: 0.2563831885021452",
            "extra": "mean: 1.887003292333323 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.49631109647211064,
            "unit": "iter/sec",
            "range": "stddev: 0.0894414507741683",
            "extra": "mean: 2.0148652873333313 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.574660236205853,
            "unit": "iter/sec",
            "range": "stddev: 1.0066042509204438",
            "extra": "mean: 1.740158683333334 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.5249865144089123,
            "unit": "iter/sec",
            "range": "stddev: 0.9593401466693064",
            "extra": "mean: 1.904810833333329 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.33742907238367564,
            "unit": "iter/sec",
            "range": "stddev: 1.3910308914795044",
            "extra": "mean: 2.9635857780000188 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 3.4510521621318686,
            "unit": "iter/sec",
            "range": "stddev: 0.06791833337311613",
            "extra": "mean: 289.76670100003804 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 4.004080937936966,
            "unit": "iter/sec",
            "range": "stddev: 0.04502107444837239",
            "extra": "mean: 249.7452013333259 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 3.525635386131116,
            "unit": "iter/sec",
            "range": "stddev: 0.04946263839915675",
            "extra": "mean: 283.63681733333124 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 4.588891385194769,
            "unit": "iter/sec",
            "range": "stddev: 0.037776733786511654",
            "extra": "mean: 217.91755700000218 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 4.227526639248633,
            "unit": "iter/sec",
            "range": "stddev: 0.032291900153068154",
            "extra": "mean: 236.54493166664756 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 4.735237542607685,
            "unit": "iter/sec",
            "range": "stddev: 0.03624257650356831",
            "extra": "mean: 211.1826473333167 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 1.9995020586703773,
            "unit": "iter/sec",
            "range": "stddev: 0.0862330479615001",
            "extra": "mean: 500.12451633332 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 1.089370671743118,
            "unit": "iter/sec",
            "range": "stddev: 0.21942674430556858",
            "extra": "mean: 917.9611916666394 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 0.8377456973358248,
            "unit": "iter/sec",
            "range": "stddev: 0.0220168583837707",
            "extra": "mean: 1.1936796609999571 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 0.9311940273781452,
            "unit": "iter/sec",
            "range": "stddev: 0.08604486996250567",
            "extra": "mean: 1.0738900493333101 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 0.8032806816307554,
            "unit": "iter/sec",
            "range": "stddev: 0.06436270917839709",
            "extra": "mean: 1.2448948703333447 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.5841741621905847,
            "unit": "iter/sec",
            "range": "stddev: 0.04325032875579311",
            "extra": "mean: 1.7118182636666386 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.5416123601166962,
            "unit": "iter/sec",
            "range": "stddev: 0.03780327848006155",
            "extra": "mean: 648.6714986666963 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 0.9804480020274456,
            "unit": "iter/sec",
            "range": "stddev: 0.12624045016889116",
            "extra": "mean: 1.0199419020000278 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.7059986344047235,
            "unit": "iter/sec",
            "range": "stddev: 0.1258032573190863",
            "extra": "mean: 1.4164333346666733 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.5705549123409144,
            "unit": "iter/sec",
            "range": "stddev: 0.02051864154700408",
            "extra": "mean: 636.7176289999937 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.1769780208463938,
            "unit": "iter/sec",
            "range": "stddev: 0.07826350965237903",
            "extra": "mean: 849.6335380000346 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.7650824849351411,
            "unit": "iter/sec",
            "range": "stddev: 0.06180664720066664",
            "extra": "mean: 1.3070486120000169 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 3.0607090788797637,
            "unit": "iter/sec",
            "range": "stddev: 0.0046924580386368455",
            "extra": "mean: 326.72167599999585 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 2.4036330163107587,
            "unit": "iter/sec",
            "range": "stddev: 0.023015586544372697",
            "extra": "mean: 416.0368880000078 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 1.1942336490356529,
            "unit": "iter/sec",
            "range": "stddev: 0.032109920472343526",
            "extra": "mean: 837.3570789999955 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 1.555013680629384,
            "unit": "iter/sec",
            "range": "stddev: 0.014938408549907597",
            "extra": "mean: 643.081159 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.368490847297399,
            "unit": "iter/sec",
            "range": "stddev: 0.014929005433412001",
            "extra": "mean: 730.7319606666548 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 0.9822430590899061,
            "unit": "iter/sec",
            "range": "stddev: 0.0907713374327353",
            "extra": "mean: 1.0180779500000199 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 2.229798356896783,
            "unit": "iter/sec",
            "range": "stddev: 0.03936674300620763",
            "extra": "mean: 448.4710453333112 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 1.6488913631102469,
            "unit": "iter/sec",
            "range": "stddev: 0.06383691042488014",
            "extra": "mean: 606.4680926666597 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.3048389413677404,
            "unit": "iter/sec",
            "range": "stddev: 0.07979074158914778",
            "extra": "mean: 766.378108666648 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 3.3966177144267626,
            "unit": "iter/sec",
            "range": "stddev: 0.05883160246114048",
            "extra": "mean: 294.410523666708 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 3.7962954048693067,
            "unit": "iter/sec",
            "range": "stddev: 0.012594800119362645",
            "extra": "mean: 263.41469600004075 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 3.772033892771048,
            "unit": "iter/sec",
            "range": "stddev: 0.027391059963449007",
            "extra": "mean: 265.1089646666378 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 3.5691178565451307,
            "unit": "iter/sec",
            "range": "stddev: 0.014032074709704285",
            "extra": "mean: 280.18127733332676 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 3.368527415834517,
            "unit": "iter/sec",
            "range": "stddev: 0.05514457640659112",
            "extra": "mean: 296.8656260000368 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 3.5223780192069447,
            "unit": "iter/sec",
            "range": "stddev: 0.022677150550876313",
            "extra": "mean: 283.89911433331844 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.7410027714690877,
            "unit": "iter/sec",
            "range": "stddev: 0.0672256537331768",
            "extra": "mean: 364.8299849999906 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 2.41881824728958,
            "unit": "iter/sec",
            "range": "stddev: 0.05635405309658438",
            "extra": "mean: 413.4250273333085 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 1.4617649860110913,
            "unit": "iter/sec",
            "range": "stddev: 0.12216048804125643",
            "extra": "mean: 684.1044966666155 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.058699742376763,
            "unit": "iter/sec",
            "range": "stddev: 0.20851555512451078",
            "extra": "mean: 944.554872333318 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.0139288064210732,
            "unit": "iter/sec",
            "range": "stddev: 0.13444324300467733",
            "extra": "mean: 986.2625399999843 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 0.7850901205067176,
            "unit": "iter/sec",
            "range": "stddev: 0.3518388261371677",
            "extra": "mean: 1.2737391209999867 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 0.8899512224765683,
            "unit": "iter/sec",
            "range": "stddev: 1.0003426521914656",
            "extra": "mean: 1.1236570889999864 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.7775908206087879,
            "unit": "iter/sec",
            "range": "stddev: 0.9957163282966666",
            "extra": "mean: 1.2860234116666713 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.45485330056870554,
            "unit": "iter/sec",
            "range": "stddev: 1.3809817134275375",
            "extra": "mean: 2.198511033666667 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.3449153425822824,
            "unit": "iter/sec",
            "range": "stddev: 0.12617318986008433",
            "extra": "mean: 743.5412239999929 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.7537951575433723,
            "unit": "iter/sec",
            "range": "stddev: 0.17785304998512388",
            "extra": "mean: 1.3266203556666671 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.37277647573830064,
            "unit": "iter/sec",
            "range": "stddev: 0.10215899039759524",
            "extra": "mean: 2.6825727080000283 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}