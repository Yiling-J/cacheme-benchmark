window.BENCHMARK_DATA = {
  "lastUpdate": 1674448973485,
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
      }
    ]
  }
}