window.BENCHMARK_DATA = {
  "lastUpdate": 1678156991425,
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
          "id": "d108fc3c71056e37bd5891b5263eb8dbd3745c2e",
          "message": "add local+redis bench result",
          "timestamp": "2023-03-06T15:24:40+08:00",
          "tree_id": "6494af6b80aaebfcef874cd53f8e3874485b7ea2",
          "url": "https://github.com/Yiling-J/cacheme/commit/d108fc3c71056e37bd5891b5263eb8dbd3745c2e"
        },
        "date": 1678087841240,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-small]",
            "value": 208.12481828114377,
            "unit": "iter/sec",
            "range": "stddev: 0.003111114335713816",
            "extra": "mean: 4.804808999997097 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-medium]",
            "value": 218.00158240097517,
            "unit": "iter/sec",
            "range": "stddev: 0.002926880114509178",
            "extra": "mean: 4.58712266666339 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-large]",
            "value": 212.3457688442959,
            "unit": "iter/sec",
            "range": "stddev: 0.002906356796144749",
            "extra": "mean: 4.709300333331612 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-small]",
            "value": 2.3654615813178297,
            "unit": "iter/sec",
            "range": "stddev: 0.1090601138883231",
            "extra": "mean: 422.75047200000887 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-medium]",
            "value": 2.0210384402299644,
            "unit": "iter/sec",
            "range": "stddev: 0.09301478599986455",
            "extra": "mean: 494.79514099999733 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-large]",
            "value": 1.3760154817666543,
            "unit": "iter/sec",
            "range": "stddev: 0.04802492614838528",
            "extra": "mean: 726.736009333346 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-small]",
            "value": 0.8706773487110191,
            "unit": "iter/sec",
            "range": "stddev: 0.5190892533836068",
            "extra": "mean: 1.1485310850000114 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-medium]",
            "value": 0.827621600562373,
            "unit": "iter/sec",
            "range": "stddev: 0.48944632666849736",
            "extra": "mean: 1.2082816583333436 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-large]",
            "value": 0.6637281432057496,
            "unit": "iter/sec",
            "range": "stddev: 0.5318086784319109",
            "extra": "mean: 1.5066409496666608 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-small]",
            "value": 1.0739144005963404,
            "unit": "iter/sec",
            "range": "stddev: 0.5619478262041414",
            "extra": "mean: 931.1729123333331 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-medium]",
            "value": 0.8701909979697845,
            "unit": "iter/sec",
            "range": "stddev: 0.6264814867034739",
            "extra": "mean: 1.1491730003333391 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-large]",
            "value": 0.5794505234361689,
            "unit": "iter/sec",
            "range": "stddev: 0.9515767713691708",
            "extra": "mean: 1.7257728823333405 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-small]",
            "value": 0.8190856604436109,
            "unit": "iter/sec",
            "range": "stddev: 1.1068448286769212",
            "extra": "mean: 1.2208735279999985 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-medium]",
            "value": 0.571155932374479,
            "unit": "iter/sec",
            "range": "stddev: 1.870392938183067",
            "extra": "mean: 1.750835355666671 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-large]",
            "value": 0.36344925458545935,
            "unit": "iter/sec",
            "range": "stddev: 3.1217076456460715",
            "extra": "mean: 2.7514157406666677 sec\nrounds: 3"
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
          "id": "b9c4773d4ebf3d05f6a1bdd63c4774a050d995b2",
          "message": "fix lint",
          "timestamp": "2023-03-06T19:53:28+08:00",
          "tree_id": "f68b3ad56b2a40dad85d90505edb3a9c3b1a13ab",
          "url": "https://github.com/Yiling-J/cacheme/commit/b9c4773d4ebf3d05f6a1bdd63c4774a050d995b2"
        },
        "date": 1678103924291,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-small]",
            "value": 240.5351618710736,
            "unit": "iter/sec",
            "range": "stddev: 0.002606131530297711",
            "extra": "mean: 4.157396333331083 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-medium]",
            "value": 237.38331423176973,
            "unit": "iter/sec",
            "range": "stddev: 0.002468510186491443",
            "extra": "mean: 4.212596000002122 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-large]",
            "value": 240.47541026672044,
            "unit": "iter/sec",
            "range": "stddev: 0.002585690436545809",
            "extra": "mean: 4.158429333339579 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-small]",
            "value": 3.1873644407927766,
            "unit": "iter/sec",
            "range": "stddev: 0.0972459298908302",
            "extra": "mean: 313.73883299999267 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-medium]",
            "value": 2.7649145861295734,
            "unit": "iter/sec",
            "range": "stddev: 0.08275964176393069",
            "extra": "mean: 361.6748253333337 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-large]",
            "value": 1.8005589403095816,
            "unit": "iter/sec",
            "range": "stddev: 0.053861547280007964",
            "extra": "mean: 555.3830966666737 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-small]",
            "value": 1.1164563418478182,
            "unit": "iter/sec",
            "range": "stddev: 0.43874880257571625",
            "extra": "mean: 895.6910920000022 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-medium]",
            "value": 1.0585352659748122,
            "unit": "iter/sec",
            "range": "stddev: 0.40057227309511745",
            "extra": "mean: 944.7016383333183 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-large]",
            "value": 0.8628467921470206,
            "unit": "iter/sec",
            "range": "stddev: 0.4933105475788057",
            "extra": "mean: 1.1589543000000049 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-small]",
            "value": 1.474720973832845,
            "unit": "iter/sec",
            "range": "stddev: 0.38616182723771764",
            "extra": "mean: 678.0943769999889 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-medium]",
            "value": 1.2715119956999719,
            "unit": "iter/sec",
            "range": "stddev: 0.45175969427173324",
            "extra": "mean: 786.4652503333218 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-large]",
            "value": 0.7807045024498374,
            "unit": "iter/sec",
            "range": "stddev: 0.7661858308067742",
            "extra": "mean: 1.2808943676666615 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-small]",
            "value": 1.1045910053731045,
            "unit": "iter/sec",
            "range": "stddev: 0.6879631304599012",
            "extra": "mean: 905.3124596666654 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-medium]",
            "value": 0.8558349471912815,
            "unit": "iter/sec",
            "range": "stddev: 1.1764925249892149",
            "extra": "mean: 1.1684495979999951 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-large]",
            "value": 0.5288212629750781,
            "unit": "iter/sec",
            "range": "stddev: 1.9935529521210382",
            "extra": "mean: 1.8909980933333372 sec\nrounds: 3"
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
          "id": "37a5a826b51bd6e3e7d48a35ff3fad587611d4fd",
          "message": "release 0.3.0",
          "timestamp": "2023-03-06T20:39:05+08:00",
          "tree_id": "2cff7f6f9c4e2902e0dfce78c193d0fea14593fa",
          "url": "https://github.com/Yiling-J/cacheme/commit/37a5a826b51bd6e3e7d48a35ff3fad587611d4fd"
        },
        "date": 1678106703356,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-small]",
            "value": 234.03294622208273,
            "unit": "iter/sec",
            "range": "stddev: 0.0027389274640059135",
            "extra": "mean: 4.272902666665838 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-medium]",
            "value": 243.186580769842,
            "unit": "iter/sec",
            "range": "stddev: 0.0025057798439832462",
            "extra": "mean: 4.112069000001384 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-large]",
            "value": 237.7008056783775,
            "unit": "iter/sec",
            "range": "stddev: 0.002689681899309819",
            "extra": "mean: 4.206969333343598 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-small]",
            "value": 3.222931728200995,
            "unit": "iter/sec",
            "range": "stddev: 0.07956745060476908",
            "extra": "mean: 310.27650733333684 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-medium]",
            "value": 2.813889059626848,
            "unit": "iter/sec",
            "range": "stddev: 0.08695394250479348",
            "extra": "mean: 355.38003766666293 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-large]",
            "value": 1.8944631723425496,
            "unit": "iter/sec",
            "range": "stddev: 0.03731870324759798",
            "extra": "mean: 527.8540193333375 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-small]",
            "value": 1.1548891484501318,
            "unit": "iter/sec",
            "range": "stddev: 0.37929757438399425",
            "extra": "mean: 865.8839693333391 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-medium]",
            "value": 1.0938752761229695,
            "unit": "iter/sec",
            "range": "stddev: 0.389973029981217",
            "extra": "mean: 914.1810056666676 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-large]",
            "value": 0.8320499104450939,
            "unit": "iter/sec",
            "range": "stddev: 0.5290084000643677",
            "extra": "mean: 1.2018509796666688 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-small]",
            "value": 1.4098958256031107,
            "unit": "iter/sec",
            "range": "stddev: 0.43962687254618676",
            "extra": "mean: 709.2722610000143 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-medium]",
            "value": 1.1730743108509871,
            "unit": "iter/sec",
            "range": "stddev: 0.5574879753076563",
            "extra": "mean: 852.4609146666648 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-large]",
            "value": 0.720843657944006,
            "unit": "iter/sec",
            "range": "stddev: 0.9014324301052761",
            "extra": "mean: 1.3872633670000027 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-small]",
            "value": 0.8252689958927885,
            "unit": "iter/sec",
            "range": "stddev: 1.3582261130845699",
            "extra": "mean: 1.211726121999997 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-medium]",
            "value": 0.6295465974620255,
            "unit": "iter/sec",
            "range": "stddev: 1.901593970783805",
            "extra": "mean: 1.5884447696666655 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-large]",
            "value": 0.41096140787789726,
            "unit": "iter/sec",
            "range": "stddev: 2.943567323313482",
            "extra": "mean: 2.4333185083333055 sec\nrounds: 3"
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
          "id": "d85a594d6dd37f2c843052cb08e5971c43a64b3c",
          "message": "remove wrong dependency",
          "timestamp": "2023-03-06T22:05:49+08:00",
          "tree_id": "3c90ccb6edbd97af6a4341e9692f542bbc26eefb",
          "url": "https://github.com/Yiling-J/cacheme/commit/d85a594d6dd37f2c843052cb08e5971c43a64b3c"
        },
        "date": 1678111922842,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-small]",
            "value": 241.275769760288,
            "unit": "iter/sec",
            "range": "stddev: 0.0026108585943914664",
            "extra": "mean: 4.144634999998213 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-medium]",
            "value": 251.0922092619992,
            "unit": "iter/sec",
            "range": "stddev: 0.0024830367871724684",
            "extra": "mean: 3.982600666660119 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-large]",
            "value": 251.5575394688425,
            "unit": "iter/sec",
            "range": "stddev: 0.002554799968510172",
            "extra": "mean: 3.97523366666519 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-small]",
            "value": 2.773101186556865,
            "unit": "iter/sec",
            "range": "stddev: 0.09682126071377192",
            "extra": "mean: 360.6071083333309 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-medium]",
            "value": 2.2715267003111674,
            "unit": "iter/sec",
            "range": "stddev: 0.070690149066288",
            "extra": "mean: 440.23255366666564 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-large]",
            "value": 1.579670363592741,
            "unit": "iter/sec",
            "range": "stddev: 0.03127337949606531",
            "extra": "mean: 633.0434646666655 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-small]",
            "value": 0.9823610182990025,
            "unit": "iter/sec",
            "range": "stddev: 0.4682847572872708",
            "extra": "mean: 1.0179557020000043 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-medium]",
            "value": 0.9376500861330997,
            "unit": "iter/sec",
            "range": "stddev: 0.4501618082276214",
            "extra": "mean: 1.066495929333333 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-large]",
            "value": 0.7658584515539854,
            "unit": "iter/sec",
            "range": "stddev: 0.46222826011529833",
            "extra": "mean: 1.3057243123333346 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-small]",
            "value": 1.1510728505631191,
            "unit": "iter/sec",
            "range": "stddev: 0.4571591871831803",
            "extra": "mean: 868.7547443333301 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-medium]",
            "value": 1.0189488621357243,
            "unit": "iter/sec",
            "range": "stddev: 0.5351928038861525",
            "extra": "mean: 981.4035200000054 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-large]",
            "value": 0.6853546662571552,
            "unit": "iter/sec",
            "range": "stddev: 0.8317550000025836",
            "extra": "mean: 1.4590985503333325 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-small]",
            "value": 0.9271309529359497,
            "unit": "iter/sec",
            "range": "stddev: 0.9597821913033114",
            "extra": "mean: 1.0785962833333258 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-medium]",
            "value": 0.7024567929697106,
            "unit": "iter/sec",
            "range": "stddev: 1.4848463559760183",
            "extra": "mean: 1.4235751010000115 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-large]",
            "value": 0.41867526175829717,
            "unit": "iter/sec",
            "range": "stddev: 2.653422819658683",
            "extra": "mean: 2.3884859969999943 sec\nrounds: 3"
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
          "id": "1f01adf27b95584f3e594d8403fd62b57f0e4ba1",
          "message": "remove awaitable, future is enough and faster (#19)",
          "timestamp": "2023-03-07T10:02:48+08:00",
          "tree_id": "9d5dd4a51a8a88cb8fa86eeb6110aec1f051742b",
          "url": "https://github.com/Yiling-J/cacheme/commit/1f01adf27b95584f3e594d8403fd62b57f0e4ba1"
        },
        "date": 1678154873286,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-small]",
            "value": 248.24552475370783,
            "unit": "iter/sec",
            "range": "stddev: 0.0024781858773136474",
            "extra": "mean: 4.028270000001537 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-medium]",
            "value": 235.8097920487911,
            "unit": "iter/sec",
            "range": "stddev: 0.002296001742166967",
            "extra": "mean: 4.240705999999743 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-large]",
            "value": 253.18376474308803,
            "unit": "iter/sec",
            "range": "stddev: 0.002441663736529114",
            "extra": "mean: 3.9497003333319 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-small]",
            "value": 2.6862420310661106,
            "unit": "iter/sec",
            "range": "stddev: 0.10392865571567367",
            "extra": "mean: 372.26727466665466 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-medium]",
            "value": 2.294499045843608,
            "unit": "iter/sec",
            "range": "stddev: 0.08576180148243288",
            "extra": "mean: 435.8249796666769 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-large]",
            "value": 1.584152627985751,
            "unit": "iter/sec",
            "range": "stddev: 0.046182158570956776",
            "extra": "mean: 631.2523063333231 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-small]",
            "value": 1.0126800251660726,
            "unit": "iter/sec",
            "range": "stddev: 0.43560148443392976",
            "extra": "mean: 987.478744666665 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-medium]",
            "value": 0.9423974347916769,
            "unit": "iter/sec",
            "range": "stddev: 0.426170116501629",
            "extra": "mean: 1.0611234316666582 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-large]",
            "value": 0.7327278727856641,
            "unit": "iter/sec",
            "range": "stddev: 0.5921702608156209",
            "extra": "mean: 1.3647631503333268 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-small]",
            "value": 1.2904419051717422,
            "unit": "iter/sec",
            "range": "stddev: 0.4428761398457208",
            "extra": "mean: 774.9283373333355 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-medium]",
            "value": 1.0378254099627102,
            "unit": "iter/sec",
            "range": "stddev: 0.5472371239607388",
            "extra": "mean: 963.5532049999919 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-large]",
            "value": 0.6639977613076435,
            "unit": "iter/sec",
            "range": "stddev: 0.9543537623653485",
            "extra": "mean: 1.5060291740000007 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-small]",
            "value": 0.9411865807775824,
            "unit": "iter/sec",
            "range": "stddev: 1.0006857578672377",
            "extra": "mean: 1.0624885866666602 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-medium]",
            "value": 0.6417423619323478,
            "unit": "iter/sec",
            "range": "stddev: 1.5754774028651015",
            "extra": "mean: 1.5582577360000112 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-large]",
            "value": 0.42519737828127213,
            "unit": "iter/sec",
            "range": "stddev: 2.685327159595502",
            "extra": "mean: 2.3518489319999767 sec\nrounds: 3"
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
          "id": "f402c45267ad107a647395a74e67e53760c13755",
          "message": "update bench result",
          "timestamp": "2023-03-07T10:37:44+08:00",
          "tree_id": "536e38111b61656d41c455cf40208c3a2fcaa89c",
          "url": "https://github.com/Yiling-J/cacheme/commit/f402c45267ad107a647395a74e67e53760c13755"
        },
        "date": 1678156990701,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-small]",
            "value": 223.60666216649796,
            "unit": "iter/sec",
            "range": "stddev: 0.0025892867580869497",
            "extra": "mean: 4.472138666670844 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-medium]",
            "value": 269.9474034478339,
            "unit": "iter/sec",
            "range": "stddev: 0.00220881943137512",
            "extra": "mean: 3.704425333334408 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[theine-tlfu-large]",
            "value": 250.31855121619245,
            "unit": "iter/sec",
            "range": "stddev: 0.002648934653998453",
            "extra": "mean: 3.9949096666684154 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-small]",
            "value": 2.757377516810537,
            "unit": "iter/sec",
            "range": "stddev: 0.09435784363131942",
            "extra": "mean: 362.6634343333232 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-medium]",
            "value": 2.050505417973576,
            "unit": "iter/sec",
            "range": "stddev: 0.06663594153983621",
            "extra": "mean: 487.68464166666564 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[redis-large]",
            "value": 1.4632107068269986,
            "unit": "iter/sec",
            "range": "stddev: 0.05138961407415053",
            "extra": "mean: 683.4285693333394 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-small]",
            "value": 0.9208093628726103,
            "unit": "iter/sec",
            "range": "stddev: 0.505137028444562",
            "extra": "mean: 1.0860011206666513 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-medium]",
            "value": 0.828603022352392,
            "unit": "iter/sec",
            "range": "stddev: 0.5196444518681471",
            "extra": "mean: 1.206850534000002 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mongo-large]",
            "value": 0.7208187037500887,
            "unit": "iter/sec",
            "range": "stddev: 0.4965967520494215",
            "extra": "mean: 1.387311393000014 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-small]",
            "value": 1.0529824559781522,
            "unit": "iter/sec",
            "range": "stddev: 0.6747458187023582",
            "extra": "mean: 949.6834390000023 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-medium]",
            "value": 0.9048375990374228,
            "unit": "iter/sec",
            "range": "stddev: 0.6564450631334406",
            "extra": "mean: 1.1051706970000055 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[postgres-large]",
            "value": 0.612918680590522,
            "unit": "iter/sec",
            "range": "stddev: 0.9596502048206184",
            "extra": "mean: 1.6315378070000104 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-small]",
            "value": 0.8566906143286259,
            "unit": "iter/sec",
            "range": "stddev: 1.1181408041065892",
            "extra": "mean: 1.1672825443333277 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-medium]",
            "value": 0.60563753337351,
            "unit": "iter/sec",
            "range": "stddev: 1.791142288573794",
            "extra": "mean: 1.651152619999986 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_write_only[mysql-large]",
            "value": 0.39087034565155676,
            "unit": "iter/sec",
            "range": "stddev: 2.7657306740382137",
            "extra": "mean: 2.558393111999995 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}