window.BENCHMARK_DATA = {
  "lastUpdate": 1678083506966,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Cacheme Benchmark: test_write_only": [
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
          "id": "45349048b0682e7dc7c2275d0c3e5ec5baf5f9f7",
          "message": "Refactor (#18)\n\n* core refactor and update benchmark\r\n\r\n* update benchmark ci\r\n\r\n* fix bench\r\n\r\n* update params\r\n\r\n* update bench\r\n\r\n* update bench\r\n\r\n* fix bench\r\n\r\n* remove too slow bench\r\n\r\n* add with theine bench\r\n\r\n* update\r\n\r\n* optimize bench\r\n\r\n* update\r\n\r\n* update bench\r\n\r\n* simplify benchmark\r\n\r\n* update bench\r\n\r\n* update\r\n\r\n* update readme\r\n\r\n* add trace script\r\n\r\n* update trace script\r\n\r\n* update readme\r\n\r\n* update readme\r\n\r\n* fix python 3.7 test\r\n\r\n* reduce benchmark requests count",
          "timestamp": "2023-03-05T23:34:28+08:00",
          "tree_id": "60e6ca61c4238d70710fcfa1cdd64d59addb93ab",
          "url": "https://github.com/Yiling-J/cacheme/commit/45349048b0682e7dc7c2275d0c3e5ec5baf5f9f7"
        },
        "date": 1678030789453,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-small]",
            "value": 144.27051992070915,
            "unit": "iter/sec",
            "range": "stddev: 0.0052913749349071445",
            "extra": "mean: 6.931422999997494 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-medium]",
            "value": 203.23293468299624,
            "unit": "iter/sec",
            "range": "stddev: 0.003158949663871446",
            "extra": "mean: 4.920462333330988 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-large]",
            "value": 208.60034177114602,
            "unit": "iter/sec",
            "range": "stddev: 0.0030639694282057067",
            "extra": "mean: 4.793855999992047 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-small]",
            "value": 2.2103142866218874,
            "unit": "iter/sec",
            "range": "stddev: 0.13213884806988951",
            "extra": "mean: 452.42434800000336 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-medium]",
            "value": 1.8785014127492352,
            "unit": "iter/sec",
            "range": "stddev: 0.16821030960044647",
            "extra": "mean: 532.339232333328 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-large]",
            "value": 1.26769472970958,
            "unit": "iter/sec",
            "range": "stddev: 0.03731736322576513",
            "extra": "mean: 788.8334443333159 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-small]",
            "value": 0.8392857375559101,
            "unit": "iter/sec",
            "range": "stddev: 0.591103135445449",
            "extra": "mean: 1.1914893286666672 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-medium]",
            "value": 0.7514424313190413,
            "unit": "iter/sec",
            "range": "stddev: 0.5564400214382051",
            "extra": "mean: 1.3307739333333284 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-large]",
            "value": 0.6150441894981121,
            "unit": "iter/sec",
            "range": "stddev: 0.5239661414575699",
            "extra": "mean: 1.6258994346666686 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-small]",
            "value": 1.0980698905629167,
            "unit": "iter/sec",
            "range": "stddev: 0.5384809907029361",
            "extra": "mean: 910.6888446666707 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-medium]",
            "value": 0.8019352033014313,
            "unit": "iter/sec",
            "range": "stddev: 0.734456174305802",
            "extra": "mean: 1.2469835416666701 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-large]",
            "value": 0.5424817080167945,
            "unit": "iter/sec",
            "range": "stddev: 1.184183230498821",
            "extra": "mean: 1.8433801273333283 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-small]",
            "value": 0.6849062327147312,
            "unit": "iter/sec",
            "range": "stddev: 1.5126803975431755",
            "extra": "mean: 1.4600538763333286 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-medium]",
            "value": 0.4931583247240873,
            "unit": "iter/sec",
            "range": "stddev: 2.323267375333104",
            "extra": "mean: 2.0277463643333626 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-large]",
            "value": 0.31372349145346085,
            "unit": "iter/sec",
            "range": "stddev: 3.7574382262504793",
            "extra": "mean: 3.1875203076666785 sec\nrounds: 3"
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
          "id": "7b68b544a8c74554c6450994d77583d5e1ed6362",
          "message": "Update README.md",
          "timestamp": "2023-03-05T23:50:48+08:00",
          "tree_id": "b1ac9eb7c2a84fe78e6f9d1e9cb5e507a2d8b7c8",
          "url": "https://github.com/Yiling-J/cacheme/commit/7b68b544a8c74554c6450994d77583d5e1ed6362"
        },
        "date": 1678031732253,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-small]",
            "value": 238.25362002586144,
            "unit": "iter/sec",
            "range": "stddev: 0.0026635924566067613",
            "extra": "mean: 4.1972079999936796 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-medium]",
            "value": 245.38219339962862,
            "unit": "iter/sec",
            "range": "stddev: 0.0025068058202817388",
            "extra": "mean: 4.075275333330334 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-large]",
            "value": 243.5178392244698,
            "unit": "iter/sec",
            "range": "stddev: 0.002583732700883511",
            "extra": "mean: 4.106475333325458 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-small]",
            "value": 3.140587313884601,
            "unit": "iter/sec",
            "range": "stddev: 0.10262286743786093",
            "extra": "mean: 318.4117809999994 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-medium]",
            "value": 2.78702605925103,
            "unit": "iter/sec",
            "range": "stddev: 0.09748653120264968",
            "extra": "mean: 358.8054000000038 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-large]",
            "value": 1.8304790485397373,
            "unit": "iter/sec",
            "range": "stddev: 0.043198255881004",
            "extra": "mean: 546.3050783333188 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-small]",
            "value": 1.1772541903227727,
            "unit": "iter/sec",
            "range": "stddev: 0.39506992181000666",
            "extra": "mean: 849.4342243333411 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-medium]",
            "value": 1.086422475813156,
            "unit": "iter/sec",
            "range": "stddev: 0.3764229874256751",
            "extra": "mean: 920.4522386666648 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-large]",
            "value": 0.849145268318185,
            "unit": "iter/sec",
            "range": "stddev: 0.37098714458612325",
            "extra": "mean: 1.177654798666661 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-small]",
            "value": 1.3436264157895612,
            "unit": "iter/sec",
            "range": "stddev: 0.537957636656658",
            "extra": "mean: 744.2544953333368 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-medium]",
            "value": 1.2562528672637077,
            "unit": "iter/sec",
            "range": "stddev: 0.46849305420591353",
            "extra": "mean: 796.0180836666572 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-large]",
            "value": 0.7966480464109444,
            "unit": "iter/sec",
            "range": "stddev: 0.7439827847836826",
            "extra": "mean: 1.255259464333335 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-small]",
            "value": 1.0599755792084973,
            "unit": "iter/sec",
            "range": "stddev: 0.9015682147671406",
            "extra": "mean: 943.4179613333337 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-medium]",
            "value": 0.8155150460966873,
            "unit": "iter/sec",
            "range": "stddev: 1.28205794534545",
            "extra": "mean: 1.2262189456666874 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-large]",
            "value": 0.5066535355130666,
            "unit": "iter/sec",
            "range": "stddev: 2.11297633178632",
            "extra": "mean: 1.9737353633333328 sec\nrounds: 3"
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
          "id": "e063613e80ed54fd86217204d3ba5e012548e38e",
          "message": "Update README.md",
          "timestamp": "2023-03-06T00:02:50+08:00",
          "tree_id": "733ee1d5735f9d698f6b6ceeffb1b99ef52287bb",
          "url": "https://github.com/Yiling-J/cacheme/commit/e063613e80ed54fd86217204d3ba5e012548e38e"
        },
        "date": 1678032501811,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-small]",
            "value": 242.5787871641424,
            "unit": "iter/sec",
            "range": "stddev: 0.0026028658998356467",
            "extra": "mean: 4.1223720000023905 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-medium]",
            "value": 246.57847705313463,
            "unit": "iter/sec",
            "range": "stddev: 0.0024817022587111074",
            "extra": "mean: 4.0555039999882565 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-large]",
            "value": 254.17479990763934,
            "unit": "iter/sec",
            "range": "stddev: 0.002492051295896673",
            "extra": "mean: 3.934300333327201 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-small]",
            "value": 2.690656138248788,
            "unit": "iter/sec",
            "range": "stddev: 0.09163954900484944",
            "extra": "mean: 371.6565583333325 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-medium]",
            "value": 2.2140711537109508,
            "unit": "iter/sec",
            "range": "stddev: 0.09408832202243748",
            "extra": "mean: 451.65666799999826 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-large]",
            "value": 1.5758552741365712,
            "unit": "iter/sec",
            "range": "stddev: 0.033535317163300264",
            "extra": "mean: 634.5760403333429 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-small]",
            "value": 1.010561493371229,
            "unit": "iter/sec",
            "range": "stddev: 0.4208154558791799",
            "extra": "mean: 989.5488860000038 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-medium]",
            "value": 0.9389686067602242,
            "unit": "iter/sec",
            "range": "stddev: 0.4593388126106561",
            "extra": "mean: 1.0649983319999972 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-large]",
            "value": 0.7329502363859687,
            "unit": "iter/sec",
            "range": "stddev: 0.5095966926595302",
            "extra": "mean: 1.364349106333331 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-small]",
            "value": 1.2361395606112997,
            "unit": "iter/sec",
            "range": "stddev: 0.41170152444215974",
            "extra": "mean: 808.9701453333286 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-medium]",
            "value": 1.0205706523456015,
            "unit": "iter/sec",
            "range": "stddev: 0.5453777341981547",
            "extra": "mean: 979.8439703333391 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-large]",
            "value": 0.6758200436227769,
            "unit": "iter/sec",
            "range": "stddev: 0.8951679994554848",
            "extra": "mean: 1.4796838440000026 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-small]",
            "value": 0.964430134667307,
            "unit": "iter/sec",
            "range": "stddev: 0.9447112751524828",
            "extra": "mean: 1.0368817440000082 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-medium]",
            "value": 0.6874890510350518,
            "unit": "iter/sec",
            "range": "stddev: 1.535923136239762",
            "extra": "mean: 1.454568619666664 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-large]",
            "value": 0.43041785037654934,
            "unit": "iter/sec",
            "range": "stddev: 2.6369798521834324",
            "extra": "mean: 2.323323717000013 sec\nrounds: 3"
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
          "id": "13ac995177cd41ff7ad44c2a427df5fb7009e5da",
          "message": "Update README.md",
          "timestamp": "2023-03-06T00:15:28+08:00",
          "tree_id": "fe1b483039b123ab6ad819b7a914ef1879f68b91",
          "url": "https://github.com/Yiling-J/cacheme/commit/13ac995177cd41ff7ad44c2a427df5fb7009e5da"
        },
        "date": 1678033237434,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-small]",
            "value": 241.87801833514976,
            "unit": "iter/sec",
            "range": "stddev: 0.002667964782486095",
            "extra": "mean: 4.134315333336265 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-medium]",
            "value": 249.76603167020832,
            "unit": "iter/sec",
            "range": "stddev: 0.002539045275820056",
            "extra": "mean: 4.0037469999939885 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-large]",
            "value": 213.8356665779892,
            "unit": "iter/sec",
            "range": "stddev: 0.003758248323891648",
            "extra": "mean: 4.676488333321534 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-small]",
            "value": 2.916246335526231,
            "unit": "iter/sec",
            "range": "stddev: 0.08543426577663552",
            "extra": "mean: 342.9065603333375 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-medium]",
            "value": 2.1943465232140924,
            "unit": "iter/sec",
            "range": "stddev: 0.07009623457032463",
            "extra": "mean: 455.7165376666603 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-large]",
            "value": 1.5629240318721687,
            "unit": "iter/sec",
            "range": "stddev: 0.023700723772873807",
            "extra": "mean: 639.826363666657 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-small]",
            "value": 0.9840641071790421,
            "unit": "iter/sec",
            "range": "stddev: 0.3984731940176215",
            "extra": "mean: 1.0161939579999928 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-medium]",
            "value": 0.9400665199655478,
            "unit": "iter/sec",
            "range": "stddev: 0.4498422202903375",
            "extra": "mean: 1.0637545096666656 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-large]",
            "value": 0.7791975127878262,
            "unit": "iter/sec",
            "range": "stddev: 0.4698054383717484",
            "extra": "mean: 1.2833716529999986 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-small]",
            "value": 1.3342420055087718,
            "unit": "iter/sec",
            "range": "stddev: 0.3885018236241163",
            "extra": "mean: 749.4892199999962 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-medium]",
            "value": 0.9629326420210487,
            "unit": "iter/sec",
            "range": "stddev: 0.6469868569240368",
            "extra": "mean: 1.0384942376666686 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-large]",
            "value": 0.6824464050645398,
            "unit": "iter/sec",
            "range": "stddev: 0.8416342488819754",
            "extra": "mean: 1.4653165326666624 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-small]",
            "value": 1.0289654843684175,
            "unit": "iter/sec",
            "range": "stddev: 0.850993062534697",
            "extra": "mean: 971.8498969999985 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-medium]",
            "value": 0.668379974515457,
            "unit": "iter/sec",
            "range": "stddev: 1.5906155987764794",
            "extra": "mean: 1.4961549390000073 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-large]",
            "value": 0.43349220818910295,
            "unit": "iter/sec",
            "range": "stddev: 2.5949808079120196",
            "extra": "mean: 2.3068465386666617 sec\nrounds: 3"
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
          "id": "247a978ad81a8226b5cb1afbb65f74be39a0ef62",
          "message": "Merge branch 'master' of github.com:Yiling-J/cacheme",
          "timestamp": "2023-03-06T13:48:30+08:00",
          "tree_id": "db0be119480bb0676dc288005c3e5d65ad4d92f0",
          "url": "https://github.com/Yiling-J/cacheme/commit/247a978ad81a8226b5cb1afbb65f74be39a0ef62"
        },
        "date": 1678082053497,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-small]",
            "value": 198.53832117200514,
            "unit": "iter/sec",
            "range": "stddev: 0.0038873762988860337",
            "extra": "mean: 5.036810999996533 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-medium]",
            "value": 198.12660726043651,
            "unit": "iter/sec",
            "range": "stddev: 0.0037909844736186897",
            "extra": "mean: 5.047277666676564 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-large]",
            "value": 231.54708648929602,
            "unit": "iter/sec",
            "range": "stddev: 0.0027956880218756447",
            "extra": "mean: 4.31877600000045 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-small]",
            "value": 1.8280357406993775,
            "unit": "iter/sec",
            "range": "stddev: 0.15858435724102452",
            "extra": "mean: 547.0352563333449 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-medium]",
            "value": 1.549200826602151,
            "unit": "iter/sec",
            "range": "stddev: 0.15703342389401642",
            "extra": "mean: 645.4941043333235 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-large]",
            "value": 1.064134369660022,
            "unit": "iter/sec",
            "range": "stddev: 0.12117643026684831",
            "extra": "mean: 939.7309480000047 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-small]",
            "value": 0.7307774916559961,
            "unit": "iter/sec",
            "range": "stddev: 0.6653385134250749",
            "extra": "mean: 1.3684055836666857 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-medium]",
            "value": 0.6894223633570143,
            "unit": "iter/sec",
            "range": "stddev: 0.5963890610761668",
            "extra": "mean: 1.450489646333324 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-large]",
            "value": 0.5652191026812992,
            "unit": "iter/sec",
            "range": "stddev: 0.6771152831377008",
            "extra": "mean: 1.7692254123333366 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-small]",
            "value": 0.8587913104985313,
            "unit": "iter/sec",
            "range": "stddev: 0.6065953971338349",
            "extra": "mean: 1.164427245333324 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-medium]",
            "value": 0.6935853938190436,
            "unit": "iter/sec",
            "range": "stddev: 0.8358801707977891",
            "extra": "mean: 1.441783533666656 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-large]",
            "value": 0.5107486007919493,
            "unit": "iter/sec",
            "range": "stddev: 1.074554681013547",
            "extra": "mean: 1.9579104053333367 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-small]",
            "value": 0.5796321093086767,
            "unit": "iter/sec",
            "range": "stddev: 1.8396392835511983",
            "extra": "mean: 1.7252322359999919 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-medium]",
            "value": 0.44361380591842503,
            "unit": "iter/sec",
            "range": "stddev: 2.4583966013875505",
            "extra": "mean: 2.254212981333334 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-large]",
            "value": 0.31354578339357053,
            "unit": "iter/sec",
            "range": "stddev: 3.691538023518855",
            "extra": "mean: 3.1893268956667007 sec\nrounds: 3"
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
          "id": "434e9e22535541cdec2dc736be32a3d23d7ca830",
          "message": "clean ci",
          "timestamp": "2023-03-06T14:12:24+08:00",
          "tree_id": "7982f3ab114b010b024fb9275675f64398bfb0bb",
          "url": "https://github.com/Yiling-J/cacheme/commit/434e9e22535541cdec2dc736be32a3d23d7ca830"
        },
        "date": 1678083506671,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-small]",
            "value": 240.3894116156498,
            "unit": "iter/sec",
            "range": "stddev: 0.002621498357394943",
            "extra": "mean: 4.159917000000253 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-medium]",
            "value": 248.58633096747317,
            "unit": "iter/sec",
            "range": "stddev: 0.002565560364445098",
            "extra": "mean: 4.022747333323196 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-large]",
            "value": 242.30777804763483,
            "unit": "iter/sec",
            "range": "stddev: 0.0026317862863858713",
            "extra": "mean: 4.126982666662116 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-small]",
            "value": 2.891400899224011,
            "unit": "iter/sec",
            "range": "stddev: 0.09148101382513979",
            "extra": "mean: 345.85311233332544 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-medium]",
            "value": 2.2749719427331656,
            "unit": "iter/sec",
            "range": "stddev: 0.07683825348316398",
            "extra": "mean: 439.56586066665676 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-large]",
            "value": 1.5780638370565951,
            "unit": "iter/sec",
            "range": "stddev: 0.05021586368936573",
            "extra": "mean: 633.6879260000027 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-small]",
            "value": 1.0222455710985732,
            "unit": "iter/sec",
            "range": "stddev: 0.44407754727372584",
            "extra": "mean: 978.238525333334 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-medium]",
            "value": 0.9340487569777148,
            "unit": "iter/sec",
            "range": "stddev: 0.40309128790147974",
            "extra": "mean: 1.0706079233333412 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-large]",
            "value": 0.7548106707010876,
            "unit": "iter/sec",
            "range": "stddev: 0.49656778427119036",
            "extra": "mean: 1.324835536666664 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-small]",
            "value": 1.2413567274120059,
            "unit": "iter/sec",
            "range": "stddev: 0.4742501799783496",
            "extra": "mean: 805.5702103333431 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-medium]",
            "value": 1.0474925496254384,
            "unit": "iter/sec",
            "range": "stddev: 0.5378727435080844",
            "extra": "mean: 954.6607280000027 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-large]",
            "value": 0.6704668378392654,
            "unit": "iter/sec",
            "range": "stddev: 0.8990481639974239",
            "extra": "mean: 1.491498077999997 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-small]",
            "value": 1.0083069387313641,
            "unit": "iter/sec",
            "range": "stddev: 0.8647568525982096",
            "extra": "mean: 991.7614979999883 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-medium]",
            "value": 0.6932465317687082,
            "unit": "iter/sec",
            "range": "stddev: 1.399030349159816",
            "extra": "mean: 1.4424882840000066 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-large]",
            "value": 0.45245653129448665,
            "unit": "iter/sec",
            "range": "stddev: 2.457103132838345",
            "extra": "mean: 2.2101570666666723 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}