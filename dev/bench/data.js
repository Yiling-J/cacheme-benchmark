window.BENCHMARK_DATA = {
  "lastUpdate": 1674655009817,
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
          "id": "6c6bae188b95fd609b9ce2c6f48cd245af333a2f",
          "message": "fix lint",
          "timestamp": "2023-01-24T22:08:35+08:00",
          "tree_id": "57ade5f192181e858c91d1a2e77fb96d4073f106",
          "url": "https://github.com/Yiling-J/cacheme/commit/6c6bae188b95fd609b9ce2c6f48cd245af333a2f"
        },
        "date": 1674569736311,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 6.024899572404952,
            "unit": "iter/sec",
            "range": "stddev: 0.00832955124274545",
            "extra": "mean: 165.9778703333359 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.0964172158717265,
            "unit": "iter/sec",
            "range": "stddev: 0.013794951010681728",
            "extra": "mean: 164.0307683333333 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 5.771132612688089,
            "unit": "iter/sec",
            "range": "stddev: 0.013225260972305947",
            "extra": "mean: 173.2762123333392 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.793460402150119,
            "unit": "iter/sec",
            "range": "stddev: 0.034757839125404824",
            "extra": "mean: 172.60841199999768 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.632108911228845,
            "unit": "iter/sec",
            "range": "stddev: 0.02546352267027343",
            "extra": "mean: 177.5533846666709 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.560084336916368,
            "unit": "iter/sec",
            "range": "stddev: 0.0036158780588733254",
            "extra": "mean: 179.85338699998957 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-small]",
            "value": 1.8216386037572092,
            "unit": "iter/sec",
            "range": "stddev: 0.16886987790454167",
            "extra": "mean: 548.956306666677 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-medium]",
            "value": 1.6767943227232065,
            "unit": "iter/sec",
            "range": "stddev: 0.029907569563861997",
            "extra": "mean: 596.3760649999964 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-large]",
            "value": 1.3897124472830111,
            "unit": "iter/sec",
            "range": "stddev: 0.059459079333463144",
            "extra": "mean: 719.5733203333342 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.88383424819678,
            "unit": "iter/sec",
            "range": "stddev: 0.052623995495284",
            "extra": "mean: 346.7605673333291 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.620145354729651,
            "unit": "iter/sec",
            "range": "stddev: 0.04528970143527059",
            "extra": "mean: 381.65821533331723 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 2.1169224761079777,
            "unit": "iter/sec",
            "range": "stddev: 0.03451565360000686",
            "extra": "mean: 472.383854999985 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.8837522474526577,
            "unit": "iter/sec",
            "range": "stddev: 0.11081011044292456",
            "extra": "mean: 1.13153884800001 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.8934816389235753,
            "unit": "iter/sec",
            "range": "stddev: 0.0396217552835709",
            "extra": "mean: 1.1192171796666723 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.8317304418328799,
            "unit": "iter/sec",
            "range": "stddev: 0.05438791969217783",
            "extra": "mean: 1.2023126119999954 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.8901538777289307,
            "unit": "iter/sec",
            "range": "stddev: 0.7984065924963907",
            "extra": "mean: 1.1234012736666632 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.8236806857293252,
            "unit": "iter/sec",
            "range": "stddev: 0.8487778621951073",
            "extra": "mean: 1.2140627033333355 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.6087144616625023,
            "unit": "iter/sec",
            "range": "stddev: 0.8355028169845261",
            "extra": "mean: 1.6428063780000077 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.5391775449117002,
            "unit": "iter/sec",
            "range": "stddev: 0.1146932882130766",
            "extra": "mean: 649.6976280000032 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.9384028012652382,
            "unit": "iter/sec",
            "range": "stddev: 0.14065055006579452",
            "extra": "mean: 1.0656404676666682 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.48308219215150644,
            "unit": "iter/sec",
            "range": "stddev: 0.02707397542512133",
            "extra": "mean: 2.0700411156666596 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 2.349275941173579,
            "unit": "iter/sec",
            "range": "stddev: 0.039157953557172075",
            "extra": "mean: 425.663066000008 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.683157505336448,
            "unit": "iter/sec",
            "range": "stddev: 0.03187562091431266",
            "extra": "mean: 372.6952286666479 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.6780823082121403,
            "unit": "iter/sec",
            "range": "stddev: 0.10829324128374997",
            "extra": "mean: 595.9183260000032 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.9013174868659981,
            "unit": "iter/sec",
            "range": "stddev: 0.06680188206561373",
            "extra": "mean: 1.1094869616666756 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.8938709587950502,
            "unit": "iter/sec",
            "range": "stddev: 0.056576380641859624",
            "extra": "mean: 1.1187297116666741 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.773186039289788,
            "unit": "iter/sec",
            "range": "stddev: 0.07437038682791014",
            "extra": "mean: 1.293349787999991 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9270838264421373,
            "unit": "iter/sec",
            "range": "stddev: 0.8535294366024688",
            "extra": "mean: 1.0786511116666684 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.8382072814275187,
            "unit": "iter/sec",
            "range": "stddev: 0.7867020236345467",
            "extra": "mean: 1.1930223253333452 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5308941687198427,
            "unit": "iter/sec",
            "range": "stddev: 0.5960808612636661",
            "extra": "mean: 1.883614586333323 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.966810559021737,
            "unit": "iter/sec",
            "range": "stddev: 0.013767856829911707",
            "extra": "mean: 167.59372366666034 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 6.010139285278268,
            "unit": "iter/sec",
            "range": "stddev: 0.013519457641172296",
            "extra": "mean: 166.38549500000485 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 6.059809826078949,
            "unit": "iter/sec",
            "range": "stddev: 0.014114802697788273",
            "extra": "mean: 165.02168033333456 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.813331020706656,
            "unit": "iter/sec",
            "range": "stddev: 0.011934244626793227",
            "extra": "mean: 146.7710870000095 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.838096905114314,
            "unit": "iter/sec",
            "range": "stddev: 0.01195900106426685",
            "extra": "mean: 146.2395186666754 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.876835709687546,
            "unit": "iter/sec",
            "range": "stddev: 0.012946751428856554",
            "extra": "mean: 145.41571766667025 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.2971103593975792,
            "unit": "iter/sec",
            "range": "stddev: 0.006006453791981849",
            "extra": "mean: 303.2958836666637 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.6373687514211537,
            "unit": "iter/sec",
            "range": "stddev: 0.014628122538895352",
            "extra": "mean: 379.1657876666458 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.7360750132087777,
            "unit": "iter/sec",
            "range": "stddev: 0.021767184889033418",
            "extra": "mean: 576.0119766666681 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.662200764612297,
            "unit": "iter/sec",
            "range": "stddev: 0.016189285273704782",
            "extra": "mean: 273.05985233331853 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.621837221390328,
            "unit": "iter/sec",
            "range": "stddev: 0.0452276579678955",
            "extra": "mean: 381.4119320000013 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.3197450784629474,
            "unit": "iter/sec",
            "range": "stddev: 0.05492790203163928",
            "extra": "mean: 757.7220906666753 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.5249975237979505,
            "unit": "iter/sec",
            "range": "stddev: 0.0338545415396837",
            "extra": "mean: 655.7387696666789 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.3599160468702085,
            "unit": "iter/sec",
            "range": "stddev: 0.0326896684716222",
            "extra": "mean: 735.3395103333469 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.9715619626111782,
            "unit": "iter/sec",
            "range": "stddev: 0.041043437281045245",
            "extra": "mean: 1.0292704309999863 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.6650268176275302,
            "unit": "iter/sec",
            "range": "stddev: 0.013891590234071004",
            "extra": "mean: 375.230745666651 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 2.4046327963247602,
            "unit": "iter/sec",
            "range": "stddev: 0.003281050557903371",
            "extra": "mean: 415.86391133332273 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.3614229325288625,
            "unit": "iter/sec",
            "range": "stddev: 0.01677965494168975",
            "extra": "mean: 734.5256026666789 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.300198051882829,
            "unit": "iter/sec",
            "range": "stddev: 0.0457027941546271",
            "extra": "mean: 434.74517299997234 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.4941765537155012,
            "unit": "iter/sec",
            "range": "stddev: 0.06889219626632667",
            "extra": "mean: 669.2649523333406 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.089816259227343,
            "unit": "iter/sec",
            "range": "stddev: 0.12085651425706073",
            "extra": "mean: 917.5858696666713 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 4.182249956543349,
            "unit": "iter/sec",
            "range": "stddev: 0.01280505170913701",
            "extra": "mean: 239.10574699999643 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.498924507582667,
            "unit": "iter/sec",
            "range": "stddev: 0.022982507324032016",
            "extra": "mean: 285.80210800000333 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.4139275314655566,
            "unit": "iter/sec",
            "range": "stddev: 0.013860190474586984",
            "extra": "mean: 414.262643333321 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.3684378878621755,
            "unit": "iter/sec",
            "range": "stddev: 0.0013453051225890745",
            "extra": "mean: 422.21922099997755 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 2.1295372705465367,
            "unit": "iter/sec",
            "range": "stddev: 0.006785673569775084",
            "extra": "mean: 469.58558266667677 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.8239254667010734,
            "unit": "iter/sec",
            "range": "stddev: 0.05475599718827644",
            "extra": "mean: 548.2680176666955 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 3.9068716453409635,
            "unit": "iter/sec",
            "range": "stddev: 0.0044943004860863054",
            "extra": "mean: 255.95926633333949 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 3.1857985595677047,
            "unit": "iter/sec",
            "range": "stddev: 0.014006976017176367",
            "extra": "mean: 313.89304166666915 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.99412773916335,
            "unit": "iter/sec",
            "range": "stddev: 0.04355277535303228",
            "extra": "mean: 501.4723883333355 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.974642687499783,
            "unit": "iter/sec",
            "range": "stddev: 0.013068723021661803",
            "extra": "mean: 201.01946266669302 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.653409103097476,
            "unit": "iter/sec",
            "range": "stddev: 0.012647625749817528",
            "extra": "mean: 214.8962143333506 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.998937017701031,
            "unit": "iter/sec",
            "range": "stddev: 0.014221898482409203",
            "extra": "mean: 200.0425283333319 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.781337331126385,
            "unit": "iter/sec",
            "range": "stddev: 0.018736848081356387",
            "extra": "mean: 209.14650666666526 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.7947471282088845,
            "unit": "iter/sec",
            "range": "stddev: 0.017229471699465655",
            "extra": "mean: 208.5615723333376 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.682858029175429,
            "unit": "iter/sec",
            "range": "stddev: 0.02233877396383439",
            "extra": "mean: 213.5448039999801 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.4607408544123204,
            "unit": "iter/sec",
            "range": "stddev: 0.03374228241009199",
            "extra": "mean: 406.3816790000108 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 2.2502265770016185,
            "unit": "iter/sec",
            "range": "stddev: 0.015326314419605528",
            "extra": "mean: 444.39969300001775 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.589597438677018,
            "unit": "iter/sec",
            "range": "stddev: 0.002844853703751816",
            "extra": "mean: 629.0900926666533 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 4.05238145003936,
            "unit": "iter/sec",
            "range": "stddev: 0.019631599527056273",
            "extra": "mean: 246.76847733331897 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.242717870363699,
            "unit": "iter/sec",
            "range": "stddev: 0.018314396969712016",
            "extra": "mean: 308.3832883333268 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.345553864691677,
            "unit": "iter/sec",
            "range": "stddev: 0.06647890233187445",
            "extra": "mean: 426.33853566669205 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.9547289785701158,
            "unit": "iter/sec",
            "range": "stddev: 0.04680333163211838",
            "extra": "mean: 511.5798716666594 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.816984085397931,
            "unit": "iter/sec",
            "range": "stddev: 0.05298563102777586",
            "extra": "mean: 550.3625530000136 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.4291613196700572,
            "unit": "iter/sec",
            "range": "stddev: 0.09003019661253195",
            "extra": "mean: 699.7110726666355 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.3104616058023528,
            "unit": "iter/sec",
            "range": "stddev: 0.8071056630541511",
            "extra": "mean: 763.0898879999867 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.8800772392631006,
            "unit": "iter/sec",
            "range": "stddev: 0.8444593010038829",
            "extra": "mean: 1.1362639043333427 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.5961926161775065,
            "unit": "iter/sec",
            "range": "stddev: 0.8732207541722696",
            "extra": "mean: 1.677310273333319 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 2.480349146579155,
            "unit": "iter/sec",
            "range": "stddev: 0.09513334871147841",
            "extra": "mean: 403.16904633332723 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.2631675517192573,
            "unit": "iter/sec",
            "range": "stddev: 0.04255087204392465",
            "extra": "mean: 791.6606143333335 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.5307035690251751,
            "unit": "iter/sec",
            "range": "stddev: 0.1480215099709009",
            "extra": "mean: 1.8842910776666788 sec\nrounds: 3"
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
          "id": "4402b1ae55d601d0eca24d39a10d3fd4fc06ca64",
          "message": "Feature/readme",
          "timestamp": "2023-01-23T12:08:53Z",
          "url": "https://github.com/Yiling-J/cacheme/pull/11/commits/4402b1ae55d601d0eca24d39a10d3fd4fc06ca64"
        },
        "date": 1674624476135,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 6.182256927974825,
            "unit": "iter/sec",
            "range": "stddev: 0.011933612705816757",
            "extra": "mean: 161.7532256666626 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.085639591095376,
            "unit": "iter/sec",
            "range": "stddev: 0.012347361456698385",
            "extra": "mean: 164.32126566667193 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 5.60676980524149,
            "unit": "iter/sec",
            "range": "stddev: 0.015783236006673664",
            "extra": "mean: 178.3558153333047 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.635430784379884,
            "unit": "iter/sec",
            "range": "stddev: 0.04299648080833662",
            "extra": "mean: 177.44872366665732 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.129005130259803,
            "unit": "iter/sec",
            "range": "stddev: 0.026755913887394425",
            "extra": "mean: 194.96958466667516 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 4.856036697768022,
            "unit": "iter/sec",
            "range": "stddev: 0.02967444032736003",
            "extra": "mean: 205.92925100002427 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-small]",
            "value": 2.0211124462954264,
            "unit": "iter/sec",
            "range": "stddev: 0.16543869933447233",
            "extra": "mean: 494.777023333332 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-medium]",
            "value": 1.8802939052054086,
            "unit": "iter/sec",
            "range": "stddev: 0.04042416779359822",
            "extra": "mean: 531.8317509999891 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-large]",
            "value": 1.4211476543729193,
            "unit": "iter/sec",
            "range": "stddev: 0.015234867192669956",
            "extra": "mean: 703.6566516666767 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.8881327581901237,
            "unit": "iter/sec",
            "range": "stddev: 0.05104423118171442",
            "extra": "mean: 346.244471333326 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.6215976993536807,
            "unit": "iter/sec",
            "range": "stddev: 0.01637486541448075",
            "extra": "mean: 381.44677966666524 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.9856556763448912,
            "unit": "iter/sec",
            "range": "stddev: 0.0679400687243675",
            "extra": "mean: 503.6119866666695 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.8955374210587741,
            "unit": "iter/sec",
            "range": "stddev: 0.08498043249929851",
            "extra": "mean: 1.1166479216666592 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.7927725180998891,
            "unit": "iter/sec",
            "range": "stddev: 0.025655266988671467",
            "extra": "mean: 1.261395894999983 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.6943554992730184,
            "unit": "iter/sec",
            "range": "stddev: 0.0495753727160934",
            "extra": "mean: 1.4401844603333416 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.8544318934161964,
            "unit": "iter/sec",
            "range": "stddev: 0.6677904857004603",
            "extra": "mean: 1.1703682970000007 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.822997567724783,
            "unit": "iter/sec",
            "range": "stddev: 0.7986137560848348",
            "extra": "mean: 1.215070419666669 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.6012717781978368,
            "unit": "iter/sec",
            "range": "stddev: 0.7844901225740942",
            "extra": "mean: 1.6631414216666751 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.1355705311072315,
            "unit": "iter/sec",
            "range": "stddev: 0.0417452432725878",
            "extra": "mean: 880.6146096666984 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.8695318316536357,
            "unit": "iter/sec",
            "range": "stddev: 0.08262307119618614",
            "extra": "mean: 1.1500441543333106 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.4397710697345856,
            "unit": "iter/sec",
            "range": "stddev: 0.06902846085536443",
            "extra": "mean: 2.2739103793333393 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.9417576033446091,
            "unit": "iter/sec",
            "range": "stddev: 0.05425197850228188",
            "extra": "mean: 514.9973396666686 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 1.9021379000940497,
            "unit": "iter/sec",
            "range": "stddev: 0.04411686526198199",
            "extra": "mean: 525.7242389999988 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.9833178914294858,
            "unit": "iter/sec",
            "range": "stddev: 0.044640319974103435",
            "extra": "mean: 504.20560633335754 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.819839777630067,
            "unit": "iter/sec",
            "range": "stddev: 0.06659104257272697",
            "extra": "mean: 1.2197505260000032 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.7896351059904663,
            "unit": "iter/sec",
            "range": "stddev: 0.033125540650458515",
            "extra": "mean: 1.2664077273333305 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.6923238782008991,
            "unit": "iter/sec",
            "range": "stddev: 0.04930548195942842",
            "extra": "mean: 1.444410674666661 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.9591189459701847,
            "unit": "iter/sec",
            "range": "stddev: 0.7410152176521188",
            "extra": "mean: 1.0426235496666816 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.795785012845145,
            "unit": "iter/sec",
            "range": "stddev: 0.7121496644826457",
            "extra": "mean: 1.256620800666667 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5359245752443457,
            "unit": "iter/sec",
            "range": "stddev: 1.0971411360802745",
            "extra": "mean: 1.8659342120000133 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.517446400008975,
            "unit": "iter/sec",
            "range": "stddev: 0.005721876051135088",
            "extra": "mean: 181.24326499997778 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.291291412689486,
            "unit": "iter/sec",
            "range": "stddev: 0.009056857347631645",
            "extra": "mean: 188.98977999998579 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.419284299906523,
            "unit": "iter/sec",
            "range": "stddev: 0.01109935239988744",
            "extra": "mean: 184.52621133333955 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 5.80453387729769,
            "unit": "iter/sec",
            "range": "stddev: 0.007181925256948719",
            "extra": "mean: 172.2791219999825 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.942718351743857,
            "unit": "iter/sec",
            "range": "stddev: 0.0016793867735569782",
            "extra": "mean: 168.27316066670997 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.272662961394474,
            "unit": "iter/sec",
            "range": "stddev: 0.005771838706107022",
            "extra": "mean: 159.42192433334412 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.473914903341805,
            "unit": "iter/sec",
            "range": "stddev: 0.05467297260496214",
            "extra": "mean: 287.85967066666745 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.5775363951982317,
            "unit": "iter/sec",
            "range": "stddev: 0.009617114354012215",
            "extra": "mean: 387.9673636666894 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.6044336019674266,
            "unit": "iter/sec",
            "range": "stddev: 0.011506978925016596",
            "extra": "mean: 623.2729099999877 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.0410079927828586,
            "unit": "iter/sec",
            "range": "stddev: 0.025776938021225854",
            "extra": "mean: 328.8383333333134 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.7105997518096454,
            "unit": "iter/sec",
            "range": "stddev: 0.03041816249247265",
            "extra": "mean: 368.9220436666763 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.1400278841928606,
            "unit": "iter/sec",
            "range": "stddev: 0.036297938480646434",
            "extra": "mean: 877.1715269999731 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.3739817372683811,
            "unit": "iter/sec",
            "range": "stddev: 0.027583493805028475",
            "extra": "mean: 727.811711666637 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.2754023637144867,
            "unit": "iter/sec",
            "range": "stddev: 0.027383071070815352",
            "extra": "mean: 784.0662903333472 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.8000567587999765,
            "unit": "iter/sec",
            "range": "stddev: 0.04932654214717982",
            "extra": "mean: 1.2499113206667023 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.168218754261315,
            "unit": "iter/sec",
            "range": "stddev: 0.03167950105768913",
            "extra": "mean: 461.2080760000102 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 2.0584429923208627,
            "unit": "iter/sec",
            "range": "stddev: 0.01885620789182372",
            "extra": "mean: 485.804078000001 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.1164465961621928,
            "unit": "iter/sec",
            "range": "stddev: 0.09757013175839775",
            "extra": "mean: 895.6989106666811 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 2.56191138975648,
            "unit": "iter/sec",
            "range": "stddev: 0.028708711412681713",
            "extra": "mean: 390.33356266668306 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.5544453298248626,
            "unit": "iter/sec",
            "range": "stddev: 0.04307731237005543",
            "extra": "mean: 643.3162883333239 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 1.0775436810778105,
            "unit": "iter/sec",
            "range": "stddev: 0.08180918579132739",
            "extra": "mean: 928.0366240000149 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 4.082013729870183,
            "unit": "iter/sec",
            "range": "stddev: 0.006307862723247577",
            "extra": "mean: 244.97712799995952 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.5134121898707806,
            "unit": "iter/sec",
            "range": "stddev: 0.009494703984275498",
            "extra": "mean: 284.6235926667002 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.3157785807490994,
            "unit": "iter/sec",
            "range": "stddev: 0.006975790251309988",
            "extra": "mean: 431.82021300003726 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.1880161058204535,
            "unit": "iter/sec",
            "range": "stddev: 0.0039619030980362945",
            "extra": "mean: 457.0350269999608 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.98730349292165,
            "unit": "iter/sec",
            "range": "stddev: 0.008655134948044858",
            "extra": "mean: 503.1944056666665 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.552766056537676,
            "unit": "iter/sec",
            "range": "stddev: 0.03938330742726774",
            "extra": "mean: 644.0120170000228 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 3.500313894148297,
            "unit": "iter/sec",
            "range": "stddev: 0.017395306146538586",
            "extra": "mean: 285.6886640000387 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.7597422895252066,
            "unit": "iter/sec",
            "range": "stddev: 0.02956536510643666",
            "extra": "mean: 362.3526746666054 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.066042086212477,
            "unit": "iter/sec",
            "range": "stddev: 0.02479853950855392",
            "extra": "mean: 484.0172456666778 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 4.793675332144343,
            "unit": "iter/sec",
            "range": "stddev: 0.01363652876246042",
            "extra": "mean: 208.6082036666994 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 5.198035807813834,
            "unit": "iter/sec",
            "range": "stddev: 0.013330301392699771",
            "extra": "mean: 192.38035999997768 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 5.16945624914201,
            "unit": "iter/sec",
            "range": "stddev: 0.013127536579792758",
            "extra": "mean: 193.44394299999598 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.619506167215106,
            "unit": "iter/sec",
            "range": "stddev: 0.0025674275694239274",
            "extra": "mean: 216.47335533331594 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.954349746170922,
            "unit": "iter/sec",
            "range": "stddev: 0.01960060344614728",
            "extra": "mean: 201.84283533330927 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.759578015749599,
            "unit": "iter/sec",
            "range": "stddev: 0.02238652659788455",
            "extra": "mean: 210.10265966666944 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.8506796171294755,
            "unit": "iter/sec",
            "range": "stddev: 0.055903683215338035",
            "extra": "mean: 350.7935419999815 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 2.4554250143486973,
            "unit": "iter/sec",
            "range": "stddev: 0.040287044929353394",
            "extra": "mean: 407.26146966668847 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.4636725532419488,
            "unit": "iter/sec",
            "range": "stddev: 0.04089025040462073",
            "extra": "mean: 683.2129206666195 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 3.8634164825552038,
            "unit": "iter/sec",
            "range": "stddev: 0.05316113167536105",
            "extra": "mean: 258.83826000002347 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.83139771397556,
            "unit": "iter/sec",
            "range": "stddev: 0.0008331888615881101",
            "extra": "mean: 261.0013563333193 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.3782599962233597,
            "unit": "iter/sec",
            "range": "stddev: 0.029930310520611247",
            "extra": "mean: 420.47547433332966 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.834127688736645,
            "unit": "iter/sec",
            "range": "stddev: 0.03802822076919599",
            "extra": "mean: 545.2183106666931 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.7353168481541419,
            "unit": "iter/sec",
            "range": "stddev: 0.008346002840466542",
            "extra": "mean: 576.2636380000004 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.2142005509240548,
            "unit": "iter/sec",
            "range": "stddev: 0.04993286806817264",
            "extra": "mean: 823.587173666624 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.201942777034839,
            "unit": "iter/sec",
            "range": "stddev: 0.9306279297812804",
            "extra": "mean: 831.9863633333474 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.1046162819841097,
            "unit": "iter/sec",
            "range": "stddev: 0.7693185996411981",
            "extra": "mean: 905.2917436666803 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.756687978564162,
            "unit": "iter/sec",
            "range": "stddev: 0.7840899241315968",
            "extra": "mean: 1.3215486809999675 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 2.101623632455082,
            "unit": "iter/sec",
            "range": "stddev: 0.031359439573240486",
            "extra": "mean: 475.82259000000704 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.0158775119641412,
            "unit": "iter/sec",
            "range": "stddev: 0.03635364084930388",
            "extra": "mean: 984.3706433333258 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.5237888385901288,
            "unit": "iter/sec",
            "range": "stddev: 0.04027515507531064",
            "extra": "mean: 1.909166302000017 sec\nrounds: 3"
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
          "id": "5b06fe1291f966044f74c8625603b50e76512a9e",
          "message": "Feature/readme (#11)\n\n* update\r\n\r\n* update\r\n\r\n* update readme\r\n\r\n* update readme\r\n\r\n* update\r\n\r\n* update\r\n\r\n* update",
          "timestamp": "2023-01-25T15:33:54+08:00",
          "tree_id": "a8329d3d246632145a10a5c3353bfae4a11bcdf8",
          "url": "https://github.com/Yiling-J/cacheme/commit/5b06fe1291f966044f74c8625603b50e76512a9e"
        },
        "date": 1674632483615,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 5.921984487005922,
            "unit": "iter/sec",
            "range": "stddev: 0.013933823279240955",
            "extra": "mean: 168.8623133333446 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 5.871608496302528,
            "unit": "iter/sec",
            "range": "stddev: 0.017764590255086005",
            "extra": "mean: 170.31108266665265 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 5.617282931069975,
            "unit": "iter/sec",
            "range": "stddev: 0.013515700474232",
            "extra": "mean: 178.02201033329843 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.657332688780225,
            "unit": "iter/sec",
            "range": "stddev: 0.03749535913077186",
            "extra": "mean: 176.76174533331354 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.639532592605917,
            "unit": "iter/sec",
            "range": "stddev: 0.026679285293864204",
            "extra": "mean: 177.31965966667454 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.648218151536547,
            "unit": "iter/sec",
            "range": "stddev: 0.012159638515073732",
            "extra": "mean: 177.04698599999347 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-small]",
            "value": 1.732429546936743,
            "unit": "iter/sec",
            "range": "stddev: 0.09391852529443624",
            "extra": "mean: 577.2240503333516 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-medium]",
            "value": 1.4609335741290346,
            "unit": "iter/sec",
            "range": "stddev: 0.050165485143689105",
            "extra": "mean: 684.4938180000213 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-large]",
            "value": 1.013888650258942,
            "unit": "iter/sec",
            "range": "stddev: 0.07711718554533199",
            "extra": "mean: 986.3016019999881 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.4819453594285332,
            "unit": "iter/sec",
            "range": "stddev: 0.038993339769484776",
            "extra": "mean: 402.9097563333342 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.3251763406180004,
            "unit": "iter/sec",
            "range": "stddev: 0.030322113585411113",
            "extra": "mean: 430.0749076666648 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.906101534704542,
            "unit": "iter/sec",
            "range": "stddev: 0.04342472920235377",
            "extra": "mean: 524.631023999992 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.8465793854250655,
            "unit": "iter/sec",
            "range": "stddev: 0.0663496539387601",
            "extra": "mean: 1.1812241323333221 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.8304700132156023,
            "unit": "iter/sec",
            "range": "stddev: 0.13236485772370843",
            "extra": "mean: 1.2041373970000109 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.6803971570467482,
            "unit": "iter/sec",
            "range": "stddev: 0.04463772905198404",
            "extra": "mean: 1.469729833000012 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.8694836893080892,
            "unit": "iter/sec",
            "range": "stddev: 0.791890455673653",
            "extra": "mean: 1.150107830999995 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.6814305929245577,
            "unit": "iter/sec",
            "range": "stddev: 0.9594442992104897",
            "extra": "mean: 1.46750088766665 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.5554725135463043,
            "unit": "iter/sec",
            "range": "stddev: 0.7603008858216489",
            "extra": "mean: 1.8002690963333141 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.4285857647697136,
            "unit": "iter/sec",
            "range": "stddev: 0.17270211737854213",
            "extra": "mean: 699.9929753333353 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.789131419431627,
            "unit": "iter/sec",
            "range": "stddev: 0.21425719153765818",
            "extra": "mean: 1.267216049666672 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.4284932310053004,
            "unit": "iter/sec",
            "range": "stddev: 0.16895568377992826",
            "extra": "mean: 2.3337591533333466 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.7482409949396,
            "unit": "iter/sec",
            "range": "stddev: 0.14931734865963955",
            "extra": "mean: 572.0035183333229 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 1.6654941125477911,
            "unit": "iter/sec",
            "range": "stddev: 0.025724647694650302",
            "extra": "mean: 600.4224166666367 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.6380588578168087,
            "unit": "iter/sec",
            "range": "stddev: 0.022103708282357203",
            "extra": "mean: 610.4786743333458 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.8147121289808722,
            "unit": "iter/sec",
            "range": "stddev: 0.08650556057802478",
            "extra": "mean: 1.2274274119999973 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.7815494732723532,
            "unit": "iter/sec",
            "range": "stddev: 0.059751107971002644",
            "extra": "mean: 1.2795095309999927 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.750218160064981,
            "unit": "iter/sec",
            "range": "stddev: 0.17569062664765112",
            "extra": "mean: 1.3329456059999718 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.909465620777279,
            "unit": "iter/sec",
            "range": "stddev: 0.7373562371573044",
            "extra": "mean: 1.0995467856666703 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.751495080675618,
            "unit": "iter/sec",
            "range": "stddev: 0.7227305725774632",
            "extra": "mean: 1.3306807000000163 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5054235666938927,
            "unit": "iter/sec",
            "range": "stddev: 0.8416646865501332",
            "extra": "mean: 1.97853852866668 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.376375554198414,
            "unit": "iter/sec",
            "range": "stddev: 0.017450443105363735",
            "extra": "mean: 185.99891133332372 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.510003459033682,
            "unit": "iter/sec",
            "range": "stddev: 0.017642294970398563",
            "extra": "mean: 181.4880893333187 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.531405225232166,
            "unit": "iter/sec",
            "range": "stddev: 0.019098223880529046",
            "extra": "mean: 180.78588699999423 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.070965052523926,
            "unit": "iter/sec",
            "range": "stddev: 0.020197717384715982",
            "extra": "mean: 164.7184576666708 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 5.936002156209722,
            "unit": "iter/sec",
            "range": "stddev: 0.030566604917107693",
            "extra": "mean: 168.46355066665333 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 6.027438551806274,
            "unit": "iter/sec",
            "range": "stddev: 0.014638373495663801",
            "extra": "mean: 165.90795433332536 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.258009302189931,
            "unit": "iter/sec",
            "range": "stddev: 0.04999264817298356",
            "extra": "mean: 306.9358946666701 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.2429749257108123,
            "unit": "iter/sec",
            "range": "stddev: 0.021705379768079992",
            "extra": "mean: 445.8364596666608 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.4639895378388554,
            "unit": "iter/sec",
            "range": "stddev: 0.01286725467427958",
            "extra": "mean: 683.0649906666698 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 2.909545255213826,
            "unit": "iter/sec",
            "range": "stddev: 0.036947642761513674",
            "extra": "mean: 343.69632100000064 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 1.7673795731315276,
            "unit": "iter/sec",
            "range": "stddev: 0.05874638099373406",
            "extra": "mean: 565.8094136666705 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.3256306667902726,
            "unit": "iter/sec",
            "range": "stddev: 0.02723423900539848",
            "extra": "mean: 754.3579256666438 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.299969079758768,
            "unit": "iter/sec",
            "range": "stddev: 0.025270393619896418",
            "extra": "mean: 769.2490656666754 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.1110341761093334,
            "unit": "iter/sec",
            "range": "stddev: 0.024558029162159663",
            "extra": "mean: 900.0623216666858 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.6995995625261197,
            "unit": "iter/sec",
            "range": "stddev: 0.15465912834408446",
            "extra": "mean: 1.4293891156666707 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 2.5099514093318973,
            "unit": "iter/sec",
            "range": "stddev: 0.025919633372655158",
            "extra": "mean: 398.41408733334066 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.5983072945455543,
            "unit": "iter/sec",
            "range": "stddev: 0.1411083776505815",
            "extra": "mean: 625.6619133333364 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 0.9689989913059759,
            "unit": "iter/sec",
            "range": "stddev: 0.07866604870656996",
            "extra": "mean: 1.0319928183333218 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.9774034566510517,
            "unit": "iter/sec",
            "range": "stddev: 0.05339428271414135",
            "extra": "mean: 505.71369066665284 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.798761620257949,
            "unit": "iter/sec",
            "range": "stddev: 0.12644899167385304",
            "extra": "mean: 555.9380346666482 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.9041592856979518,
            "unit": "iter/sec",
            "range": "stddev: 0.11204293732208646",
            "extra": "mean: 1.105999812000012 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 3.866593262916968,
            "unit": "iter/sec",
            "range": "stddev: 0.003913092226705291",
            "extra": "mean: 258.62559933329976 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 3.162958313476873,
            "unit": "iter/sec",
            "range": "stddev: 0.01180522633233677",
            "extra": "mean: 316.15971533331805 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 1.984080375297139,
            "unit": "iter/sec",
            "range": "stddev: 0.0020848942004838456",
            "extra": "mean: 504.01183966664576 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.099311934139109,
            "unit": "iter/sec",
            "range": "stddev: 0.010201249856356091",
            "extra": "mean: 476.3465513332979 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.9399282503440667,
            "unit": "iter/sec",
            "range": "stddev: 0.029230330538448746",
            "extra": "mean: 515.4829823333102 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.3785183039847355,
            "unit": "iter/sec",
            "range": "stddev: 0.012866438581125074",
            "extra": "mean: 725.4165556666218 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 3.1582774801787243,
            "unit": "iter/sec",
            "range": "stddev: 0.006373749745578265",
            "extra": "mean: 316.62829066666137 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.182894027887018,
            "unit": "iter/sec",
            "range": "stddev: 0.017349784212626958",
            "extra": "mean: 458.1074423333196 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 1.9866536528138345,
            "unit": "iter/sec",
            "range": "stddev: 0.040426001637310416",
            "extra": "mean: 503.35900199998684 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 5.1560215028512495,
            "unit": "iter/sec",
            "range": "stddev: 0.011198877680477311",
            "extra": "mean: 193.94798866665042 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 4.710534158746445,
            "unit": "iter/sec",
            "range": "stddev: 0.02347914212457589",
            "extra": "mean: 212.2901493333226 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 5.059798187621258,
            "unit": "iter/sec",
            "range": "stddev: 0.01654190257911713",
            "extra": "mean: 197.63634100002037 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.982809001671213,
            "unit": "iter/sec",
            "range": "stddev: 0.015031635036492061",
            "extra": "mean: 200.69001233332528 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.940191920560649,
            "unit": "iter/sec",
            "range": "stddev: 0.01567403773278746",
            "extra": "mean: 202.4212856666736 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.647967244758945,
            "unit": "iter/sec",
            "range": "stddev: 0.006529978395166391",
            "extra": "mean: 215.14781566664473 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.1845618055597105,
            "unit": "iter/sec",
            "range": "stddev: 0.05130528312453258",
            "extra": "mean: 457.7577056666466 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.7207723021571195,
            "unit": "iter/sec",
            "range": "stddev: 0.026447549899074087",
            "extra": "mean: 581.1344120000209 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.2320097091235997,
            "unit": "iter/sec",
            "range": "stddev: 0.010203209333365056",
            "extra": "mean: 811.6819149999704 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 3.9214726308268677,
            "unit": "iter/sec",
            "range": "stddev: 0.008080266744500478",
            "extra": "mean: 255.0062423332899 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.5547217515955953,
            "unit": "iter/sec",
            "range": "stddev: 0.03854651132635971",
            "extra": "mean: 281.31597066665864 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.048708786195419,
            "unit": "iter/sec",
            "range": "stddev: 0.0263996821029788",
            "extra": "mean: 488.11232066664917 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.737259911425825,
            "unit": "iter/sec",
            "range": "stddev: 0.06574662349897667",
            "extra": "mean: 575.6191076666634 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.6079744926491222,
            "unit": "iter/sec",
            "range": "stddev: 0.027475156015729207",
            "extra": "mean: 621.900412333351 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.1188297100903628,
            "unit": "iter/sec",
            "range": "stddev: 0.05353691118982978",
            "extra": "mean: 893.7910666666463 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.2348373396931196,
            "unit": "iter/sec",
            "range": "stddev: 0.7671929816776133",
            "extra": "mean: 809.8232599999923 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.053213720843375,
            "unit": "iter/sec",
            "range": "stddev: 0.7684722017059544",
            "extra": "mean: 949.4749073333727 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.7495947055740102,
            "unit": "iter/sec",
            "range": "stddev: 0.6894654106509152",
            "extra": "mean: 1.3340542463333425 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.6496591990506133,
            "unit": "iter/sec",
            "range": "stddev: 0.20541551938755198",
            "extra": "mean: 606.1858113333377 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.8137265196079746,
            "unit": "iter/sec",
            "range": "stddev: 0.2730507158103005",
            "extra": "mean: 1.2289141080000263 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.4582232766175983,
            "unit": "iter/sec",
            "range": "stddev: 0.23841380233616274",
            "extra": "mean: 2.1823422140000353 sec\nrounds: 3"
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
          "id": "5016fdf73acae8bfe8c8a843654915fd42308577",
          "message": "refactor node cache config (#12)",
          "timestamp": "2023-01-25T21:49:30+08:00",
          "tree_id": "b1820054f17f30bd0d77b3244abdbf88eaf247a2",
          "url": "https://github.com/Yiling-J/cacheme/commit/5016fdf73acae8bfe8c8a843654915fd42308577"
        },
        "date": 1674655009238,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 6.0221265938854955,
            "unit": "iter/sec",
            "range": "stddev: 0.011352987552243373",
            "extra": "mean: 166.05429733332736 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.080793940239066,
            "unit": "iter/sec",
            "range": "stddev: 0.015108992252729141",
            "extra": "mean: 164.45220966666815 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 5.830433899044697,
            "unit": "iter/sec",
            "range": "stddev: 0.014580124265874829",
            "extra": "mean: 171.51382166665977 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 5.810740115304711,
            "unit": "iter/sec",
            "range": "stddev: 0.036752951988675155",
            "extra": "mean: 172.09511700000726 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 5.737080599830287,
            "unit": "iter/sec",
            "range": "stddev: 0.02314731585636636",
            "extra": "mean: 174.30468033333568 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 5.783506978053596,
            "unit": "iter/sec",
            "range": "stddev: 0.012223289342636414",
            "extra": "mean: 172.9054713333369 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-small]",
            "value": 2.0147530994152785,
            "unit": "iter/sec",
            "range": "stddev: 0.09271957672974673",
            "extra": "mean: 496.33873266665773 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-medium]",
            "value": 1.5587326827422758,
            "unit": "iter/sec",
            "range": "stddev: 0.04671227896850871",
            "extra": "mean: 641.546822666669 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[sqlite-large]",
            "value": 1.261520467197588,
            "unit": "iter/sec",
            "range": "stddev: 0.028290793202387542",
            "extra": "mean: 792.6942336666608 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.5231378829680087,
            "unit": "iter/sec",
            "range": "stddev: 0.08203337755009857",
            "extra": "mean: 396.33188766667143 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.5174948859524777,
            "unit": "iter/sec",
            "range": "stddev: 0.03504551000601764",
            "extra": "mean: 397.2202706666697 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 2.029360509147535,
            "unit": "iter/sec",
            "range": "stddev: 0.019338197456347045",
            "extra": "mean: 492.7660686666589 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.829138562198623,
            "unit": "iter/sec",
            "range": "stddev: 0.08626865858230577",
            "extra": "mean: 1.2060710303333433 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.9302187121584876,
            "unit": "iter/sec",
            "range": "stddev: 0.08769798167709558",
            "extra": "mean: 1.0750160010000134 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.7424407785189621,
            "unit": "iter/sec",
            "range": "stddev: 0.1260169573407311",
            "extra": "mean: 1.3469087756666909 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.8720899141538742,
            "unit": "iter/sec",
            "range": "stddev: 0.9134570819519474",
            "extra": "mean: 1.1466707546666537 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.6666763669559524,
            "unit": "iter/sec",
            "range": "stddev: 0.84742621333472",
            "extra": "mean: 1.4999781746666752 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.578530174002088,
            "unit": "iter/sec",
            "range": "stddev: 0.6923364090992017",
            "extra": "mean: 1.7285183123333354 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.340311151044555,
            "unit": "iter/sec",
            "range": "stddev: 0.05808298603401658",
            "extra": "mean: 746.0954116666585 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.7899537482501789,
            "unit": "iter/sec",
            "range": "stddev: 0.1045817837281919",
            "extra": "mean: 1.2658968986666537 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.42694503580154525,
            "unit": "iter/sec",
            "range": "stddev: 0.10852658449034153",
            "extra": "mean: 2.3422218696666732 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-small]",
            "value": 1.8864667122330794,
            "unit": "iter/sec",
            "range": "stddev: 0.027772707056655813",
            "extra": "mean: 530.0915163333381 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-medium]",
            "value": 2.3314249366437827,
            "unit": "iter/sec",
            "range": "stddev: 0.04344407466980742",
            "extra": "mean: 428.9222373333435 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[redis-large]",
            "value": 1.3328231712736998,
            "unit": "iter/sec",
            "range": "stddev: 0.17200667454094715",
            "extra": "mean: 750.2870760000064 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-small]",
            "value": 0.7596325192102954,
            "unit": "iter/sec",
            "range": "stddev: 0.04719038545460651",
            "extra": "mean: 1.3164260016666844 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-medium]",
            "value": 0.7662759249737139,
            "unit": "iter/sec",
            "range": "stddev: 0.04125922072073562",
            "extra": "mean: 1.3050129430000084 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[mongo-large]",
            "value": 0.6903343623991214,
            "unit": "iter/sec",
            "range": "stddev: 0.09607116636742696",
            "extra": "mean: 1.4485734079999968 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-small]",
            "value": 0.931358661153207,
            "unit": "iter/sec",
            "range": "stddev: 0.7308900268210827",
            "extra": "mean: 1.0737002206666564 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-medium]",
            "value": 0.7922659559362095,
            "unit": "iter/sec",
            "range": "stddev: 0.7785080585649827",
            "extra": "mean: 1.2622024113333434 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_with_local_async[postgres-large]",
            "value": 0.5155879689655881,
            "unit": "iter/sec",
            "range": "stddev: 0.857042207671407",
            "extra": "mean: 1.9395332323333225 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-small]",
            "value": 5.031415327119107,
            "unit": "iter/sec",
            "range": "stddev: 0.013363010684375488",
            "extra": "mean: 198.75123299999586 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-medium]",
            "value": 5.3878470041967494,
            "unit": "iter/sec",
            "range": "stddev: 0.0007830336497609542",
            "extra": "mean: 185.60289466665836 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-lru-large]",
            "value": 5.3110299439781095,
            "unit": "iter/sec",
            "range": "stddev: 0.0024750674576335414",
            "extra": "mean: 188.28739633333194 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-small]",
            "value": 6.174581919829391,
            "unit": "iter/sec",
            "range": "stddev: 0.00031165744506247284",
            "extra": "mean: 161.95428500001677 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-medium]",
            "value": 6.03004401895972,
            "unit": "iter/sec",
            "range": "stddev: 0.007801830494701473",
            "extra": "mean: 165.8362686666616 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[local-tlfu-large]",
            "value": 5.950710632772253,
            "unit": "iter/sec",
            "range": "stddev: 0.0050638271738422495",
            "extra": "mean: 168.04715633334885 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-small]",
            "value": 3.122670760846341,
            "unit": "iter/sec",
            "range": "stddev: 0.005557478972880262",
            "extra": "mean: 320.23869199997534 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-medium]",
            "value": 2.525026244217988,
            "unit": "iter/sec",
            "range": "stddev: 0.00971828959196581",
            "extra": "mean: 396.03548766666563 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[sqlite-large]",
            "value": 1.592660035531754,
            "unit": "iter/sec",
            "range": "stddev: 0.004814015685510695",
            "extra": "mean: 627.8803873333345 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-small]",
            "value": 3.372244531405778,
            "unit": "iter/sec",
            "range": "stddev: 0.009913968461341148",
            "extra": "mean: 296.538400666672 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-medium]",
            "value": 2.444448175577746,
            "unit": "iter/sec",
            "range": "stddev: 0.035729822977531495",
            "extra": "mean: 409.09028466666086 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[redis-large]",
            "value": 1.3317905250389273,
            "unit": "iter/sec",
            "range": "stddev: 0.02995539496222917",
            "extra": "mean: 750.8688349999867 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-small]",
            "value": 1.524979881868086,
            "unit": "iter/sec",
            "range": "stddev: 0.1008401010706053",
            "extra": "mean: 655.7463556666789 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-medium]",
            "value": 1.314501680602231,
            "unit": "iter/sec",
            "range": "stddev: 0.06286644782749969",
            "extra": "mean: 760.744557999999 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mongo-large]",
            "value": 0.7572941615664958,
            "unit": "iter/sec",
            "range": "stddev: 0.06451097010578381",
            "extra": "mean: 1.3204908353333356 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-small]",
            "value": 1.763481006827261,
            "unit": "iter/sec",
            "range": "stddev: 0.03788053923655044",
            "extra": "mean: 567.0602609999946 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-medium]",
            "value": 1.7490020568840823,
            "unit": "iter/sec",
            "range": "stddev: 0.1310068691121095",
            "extra": "mean: 571.7546163333509 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[postgres-large]",
            "value": 1.1766546091717973,
            "unit": "iter/sec",
            "range": "stddev: 0.021851828016505495",
            "extra": "mean: 849.8670656666718 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-small]",
            "value": 1.9468548965066486,
            "unit": "iter/sec",
            "range": "stddev: 0.11014696038130306",
            "extra": "mean: 513.6489636666587 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-medium]",
            "value": 1.53803609559284,
            "unit": "iter/sec",
            "range": "stddev: 0.07799725438862529",
            "extra": "mean: 650.1797993333488 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_async[mysql-large]",
            "value": 0.9493353823079302,
            "unit": "iter/sec",
            "range": "stddev: 0.06084280113036419",
            "extra": "mean: 1.0533685130000094 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-small]",
            "value": 3.333536667958315,
            "unit": "iter/sec",
            "range": "stddev: 0.017439514825395727",
            "extra": "mean: 299.9817009999977 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-medium]",
            "value": 2.7461262947967,
            "unit": "iter/sec",
            "range": "stddev: 0.023672884837980097",
            "extra": "mean: 364.1493116666841 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[redis-large]",
            "value": 2.239812505116043,
            "unit": "iter/sec",
            "range": "stddev: 0.017328630402073004",
            "extra": "mean: 446.46594199999373 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-small]",
            "value": 2.190738516947714,
            "unit": "iter/sec",
            "range": "stddev: 0.012557577523792912",
            "extra": "mean: 456.46707366667744 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-medium]",
            "value": 1.9237267814136882,
            "unit": "iter/sec",
            "range": "stddev: 0.04527989729948421",
            "extra": "mean: 519.8243376666672 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[mongo-large]",
            "value": 1.5025662607141752,
            "unit": "iter/sec",
            "range": "stddev: 0.004556524114625439",
            "extra": "mean: 665.528054333322 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-small]",
            "value": 3.1919268865904744,
            "unit": "iter/sec",
            "range": "stddev: 0.0075442325584756",
            "extra": "mean: 313.29038400004566 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-medium]",
            "value": 2.9396297210066558,
            "unit": "iter/sec",
            "range": "stddev: 0.02995989000638528",
            "extra": "mean: 340.1788983333442 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_only_with_local_async[postgres-large]",
            "value": 2.178858189498706,
            "unit": "iter/sec",
            "range": "stddev: 0.030303105822664975",
            "extra": "mean: 458.95598199994464 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 5.0401226608616945,
            "unit": "iter/sec",
            "range": "stddev: 0.016309477272176437",
            "extra": "mean: 198.40786966661503 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 5.046024783641126,
            "unit": "iter/sec",
            "range": "stddev: 0.017466937540737828",
            "extra": "mean: 198.1758003333501 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 4.73505274378451,
            "unit": "iter/sec",
            "range": "stddev: 0.03416322731027619",
            "extra": "mean: 211.19088933331417 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 4.692113410539922,
            "unit": "iter/sec",
            "range": "stddev: 0.018453386011711745",
            "extra": "mean: 213.12357833331438 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 4.734090925695676,
            "unit": "iter/sec",
            "range": "stddev: 0.024400038856565623",
            "extra": "mean: 211.2337966666852 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 4.738689598130002,
            "unit": "iter/sec",
            "range": "stddev: 0.024534740969231555",
            "extra": "mean: 211.02880433329574 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 2.2849274507087727,
            "unit": "iter/sec",
            "range": "stddev: 0.07829718314759791",
            "extra": "mean: 437.6506569999871 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 2.027647895552589,
            "unit": "iter/sec",
            "range": "stddev: 0.045463090697367634",
            "extra": "mean: 493.1822740000295 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 1.4148943696648526,
            "unit": "iter/sec",
            "range": "stddev: 0.030137496820664543",
            "extra": "mean: 706.7665413333089 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 4.00380002795898,
            "unit": "iter/sec",
            "range": "stddev: 0.021711929011098467",
            "extra": "mean: 249.76272366673888 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 3.6969733864744647,
            "unit": "iter/sec",
            "range": "stddev: 0.03414131947687104",
            "extra": "mean: 270.49153333333226 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 2.540423080806876,
            "unit": "iter/sec",
            "range": "stddev: 0.02392183332373946",
            "extra": "mean: 393.63522066662426 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.8609231688123928,
            "unit": "iter/sec",
            "range": "stddev: 0.06050141483689668",
            "extra": "mean: 537.3676983333932 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.8379095663154046,
            "unit": "iter/sec",
            "range": "stddev: 0.02720223595023671",
            "extra": "mean: 544.0964116666388 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.3561157138876085,
            "unit": "iter/sec",
            "range": "stddev: 0.051222664624523295",
            "extra": "mean: 737.400201000014 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.3067467950326683,
            "unit": "iter/sec",
            "range": "stddev: 0.7807874617181835",
            "extra": "mean: 765.2591946667068 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 1.0681809032039755,
            "unit": "iter/sec",
            "range": "stddev: 0.7929713014819316",
            "extra": "mean: 936.1710146666459 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.7492028593956233,
            "unit": "iter/sec",
            "range": "stddev: 0.7404159203536358",
            "extra": "mean: 1.3347519800000403 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 1.993989652581486,
            "unit": "iter/sec",
            "range": "stddev: 0.018543974699281037",
            "extra": "mean: 501.5071160000085 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 1.0099342390140507,
            "unit": "iter/sec",
            "range": "stddev: 0.15668110054122478",
            "extra": "mean: 990.1634793333187 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.47443696987678174,
            "unit": "iter/sec",
            "range": "stddev: 0.052869290538875346",
            "extra": "mean: 2.1077615436666215 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}