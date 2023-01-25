window.BENCHMARK_DATA = {
  "lastUpdate": 1674658970581,
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
          "id": "c5427aac52e33e92ce0d3ba26689a5dbc44cc410",
          "message": "Merge branch 'master' of github.com:Yiling-J/cacheme",
          "timestamp": "2023-01-25T22:29:22+08:00",
          "tree_id": "35c75fc9b853e779e8962005ca5d3ed12c3e21ea",
          "url": "https://github.com/Yiling-J/cacheme/commit/c5427aac52e33e92ce0d3ba26689a5dbc44cc410"
        },
        "date": 1674657172962,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 3.8340543129754647,
            "unit": "iter/sec",
            "range": "stddev: 0.024021522924035407",
            "extra": "mean: 260.82050966668174 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 3.6134381277926804,
            "unit": "iter/sec",
            "range": "stddev: 0.03848775477208597",
            "extra": "mean: 276.7447413333362 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 3.792789650734348,
            "unit": "iter/sec",
            "range": "stddev: 0.02301908432646246",
            "extra": "mean: 263.6581756666582 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 3.4895852392164146,
            "unit": "iter/sec",
            "range": "stddev: 0.04153221813411796",
            "extra": "mean: 286.56700766666177 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 3.5685820876780765,
            "unit": "iter/sec",
            "range": "stddev: 0.034584743327784606",
            "extra": "mean: 280.22334233332913 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 3.6055749587504056,
            "unit": "iter/sec",
            "range": "stddev: 0.03090846013696842",
            "extra": "mean: 277.3482763333182 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 1.2359073659398925,
            "unit": "iter/sec",
            "range": "stddev: 0.2600935388746083",
            "extra": "mean: 809.1221296666617 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.362576274340115,
            "unit": "iter/sec",
            "range": "stddev: 0.04694050340259208",
            "extra": "mean: 733.9038693333274 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 0.9629174213198831,
            "unit": "iter/sec",
            "range": "stddev: 0.05499554001744225",
            "extra": "mean: 1.0385106530000126 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.6105671541463686,
            "unit": "iter/sec",
            "range": "stddev: 0.07754814743044285",
            "extra": "mean: 383.0585236666669 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 2.4144663679591547,
            "unit": "iter/sec",
            "range": "stddev: 0.06020037849768395",
            "extra": "mean: 414.1701923333301 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 1.5542074774351449,
            "unit": "iter/sec",
            "range": "stddev: 0.06376960054008304",
            "extra": "mean: 643.4147400000066 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.4216103045354955,
            "unit": "iter/sec",
            "range": "stddev: 0.030902064826811713",
            "extra": "mean: 703.4276529999867 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.2390554725729912,
            "unit": "iter/sec",
            "range": "stddev: 0.018151777761299392",
            "extra": "mean: 807.0663679999939 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 1.0116277979444368,
            "unit": "iter/sec",
            "range": "stddev: 0.029936673188560397",
            "extra": "mean: 988.505853666671 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 1.0029051313404358,
            "unit": "iter/sec",
            "range": "stddev: 0.9121217236354306",
            "extra": "mean: 997.1032840000001 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.7040635915192475,
            "unit": "iter/sec",
            "range": "stddev: 1.0264059564173589",
            "extra": "mean: 1.4203262489999986 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.5437354771040673,
            "unit": "iter/sec",
            "range": "stddev: 1.0956920890908195",
            "extra": "mean: 1.839129580666679 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 0.9005163771627472,
            "unit": "iter/sec",
            "range": "stddev: 0.14144337925284187",
            "extra": "mean: 1.1104739740000014 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.5914620117595855,
            "unit": "iter/sec",
            "range": "stddev: 0.26720382281089916",
            "extra": "mean: 1.6907256596666684 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.33579602564176975,
            "unit": "iter/sec",
            "range": "stddev: 0.20341019965666415",
            "extra": "mean: 2.9779983193333237 sec\nrounds: 3"
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
          "id": "4dd6fd46b4962a65a13a756fc4c5f99b1f283095",
          "message": "update readme",
          "timestamp": "2023-01-25T22:58:41+08:00",
          "tree_id": "346a90057ca69fd36d4590efb0afa7139ca39659",
          "url": "https://github.com/Yiling-J/cacheme/commit/4dd6fd46b4962a65a13a756fc4c5f99b1f283095"
        },
        "date": 1674658970267,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-small]",
            "value": 3.8285981871179966,
            "unit": "iter/sec",
            "range": "stddev: 0.016076987317459678",
            "extra": "mean: 261.1922043333455 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-medium]",
            "value": 3.7226961641859515,
            "unit": "iter/sec",
            "range": "stddev: 0.02962221855829449",
            "extra": "mean: 268.62251333333614 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-lru-large]",
            "value": 3.6526563787668276,
            "unit": "iter/sec",
            "range": "stddev: 0.0292632078124321",
            "extra": "mean: 273.7733573333306 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-small]",
            "value": 3.4233601549986536,
            "unit": "iter/sec",
            "range": "stddev: 0.0354297806551669",
            "extra": "mean: 292.1106616666786 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-medium]",
            "value": 3.507459335983878,
            "unit": "iter/sec",
            "range": "stddev: 0.042132455474909986",
            "extra": "mean: 285.1066553333226 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[local-tlfu-large]",
            "value": 3.564626127491936,
            "unit": "iter/sec",
            "range": "stddev: 0.031648115992985365",
            "extra": "mean: 280.5343293333256 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-small]",
            "value": 1.25638495725214,
            "unit": "iter/sec",
            "range": "stddev: 0.37732811890208784",
            "extra": "mean: 795.9343943333389 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-medium]",
            "value": 1.3269003265279677,
            "unit": "iter/sec",
            "range": "stddev: 0.07959591702871839",
            "extra": "mean: 753.6361096666914 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[sqlite-large]",
            "value": 0.9449025734579023,
            "unit": "iter/sec",
            "range": "stddev: 0.08613327672035156",
            "extra": "mean: 1.058310166666672 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-small]",
            "value": 2.7498645545046703,
            "unit": "iter/sec",
            "range": "stddev: 0.08912718679392809",
            "extra": "mean: 363.6542746666767 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-medium]",
            "value": 2.4267594571904563,
            "unit": "iter/sec",
            "range": "stddev: 0.07523869542754913",
            "extra": "mean: 412.0721553333245 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[redis-large]",
            "value": 1.4573486471800698,
            "unit": "iter/sec",
            "range": "stddev: 0.03582607781210767",
            "extra": "mean: 686.1776020000244 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-small]",
            "value": 1.3405092928680107,
            "unit": "iter/sec",
            "range": "stddev: 0.03386648464753834",
            "extra": "mean: 745.9851306666488 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-medium]",
            "value": 1.3513724218040502,
            "unit": "iter/sec",
            "range": "stddev: 0.05719328259321293",
            "extra": "mean: 739.9884620000042 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mongo-large]",
            "value": 0.9334413262303497,
            "unit": "iter/sec",
            "range": "stddev: 0.011802059525204033",
            "extra": "mean: 1.0713046143333333 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-small]",
            "value": 0.8816538275504785,
            "unit": "iter/sec",
            "range": "stddev: 0.9814301372364646",
            "extra": "mean: 1.1342320179999963 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-medium]",
            "value": 0.8193231784956541,
            "unit": "iter/sec",
            "range": "stddev: 1.0396174037340966",
            "extra": "mean: 1.2205196023333353 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[postgres-large]",
            "value": 0.5942209062401812,
            "unit": "iter/sec",
            "range": "stddev: 0.9278437906105127",
            "extra": "mean: 1.6828758286666623 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-small]",
            "value": 0.9295575186577029,
            "unit": "iter/sec",
            "range": "stddev: 0.024856559722008845",
            "extra": "mean: 1.0757806590000125 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-medium]",
            "value": 0.6407760331570654,
            "unit": "iter/sec",
            "range": "stddev: 0.1840384562338257",
            "extra": "mean: 1.560607682333341 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_batch_async[mysql-large]",
            "value": 0.3010695577931496,
            "unit": "iter/sec",
            "range": "stddev: 0.16818348944915312",
            "extra": "mean: 3.321491576000028 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}