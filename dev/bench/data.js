window.BENCHMARK_DATA = {
  "lastUpdate": 1674459061147,
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
      }
    ]
  }
}