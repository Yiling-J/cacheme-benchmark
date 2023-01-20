window.BENCHMARK_DATA = {
  "lastUpdate": 1674180589497,
  "repoUrl": "https://github.com/Yiling-J/cacheme",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "410fdc284ea65a41670118268dc50e729dbdf7d9",
          "message": "update token",
          "timestamp": "2023-01-20T09:51:17+08:00",
          "tree_id": "24dc84f1846404d90a21672c5bb8e9a359d355e8",
          "url": "https://github.com/Yiling-J/cacheme/commit/410fdc284ea65a41670118268dc50e729dbdf7d9"
        },
        "date": 1674179634799,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 6.441634202315935,
            "unit": "iter/sec",
            "range": "stddev: 0.007526505881943693",
            "extra": "mean: 155.24010966665477 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.351202616198126,
            "unit": "iter/sec",
            "range": "stddev: 0.012554139454415955",
            "extra": "mean: 157.45049566669422 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.260057186164445,
            "unit": "iter/sec",
            "range": "stddev: 0.025115387600262818",
            "extra": "mean: 159.74294966667912 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 6.116468371714,
            "unit": "iter/sec",
            "range": "stddev: 0.001476237144285505",
            "extra": "mean: 163.49303866665346 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 6.4232585403825535,
            "unit": "iter/sec",
            "range": "stddev: 0.011785535656256039",
            "extra": "mean: 155.68422066667154 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 6.41986335166815,
            "unit": "iter/sec",
            "range": "stddev: 0.018002483186587023",
            "extra": "mean: 155.76655533332465 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.7415695564117715,
            "unit": "iter/sec",
            "range": "stddev: 0.06992343845398838",
            "extra": "mean: 364.75456100002174 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.4672010842973218,
            "unit": "iter/sec",
            "range": "stddev: 0.02733610451443728",
            "extra": "mean: 405.3175910000088 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.4124121203711109,
            "unit": "iter/sec",
            "range": "stddev: 0.16860484555396305",
            "extra": "mean: 708.0086510000001 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 1.185093440576618,
            "unit": "iter/sec",
            "range": "stddev: 0.17811735075551724",
            "extra": "mean: 843.8153193333354 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 1.0054371032285716,
            "unit": "iter/sec",
            "range": "stddev: 0.20639307585535627",
            "extra": "mean: 994.5922989999948 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.7293029645783305,
            "unit": "iter/sec",
            "range": "stddev: 0.11889062153638423",
            "extra": "mean: 1.3711722680000094 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9258468883202093,
            "unit": "iter/sec",
            "range": "stddev: 0.8683043843353622",
            "extra": "mean: 1.0800921973333288 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.9570238866233229,
            "unit": "iter/sec",
            "range": "stddev: 0.9671050535060692",
            "extra": "mean: 1.0449059986666687 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.7193040301350562,
            "unit": "iter/sec",
            "range": "stddev: 1.0453355532027626",
            "extra": "mean: 1.3902327223333373 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.5876346596128574,
            "unit": "iter/sec",
            "range": "stddev: 0.1555372873029568",
            "extra": "mean: 629.8678313333426 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 1.0709392703678275,
            "unit": "iter/sec",
            "range": "stddev: 0.3887928341195407",
            "extra": "mean: 933.7597636666525 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.7468045402472009,
            "unit": "iter/sec",
            "range": "stddev: 0.842823647194398",
            "extra": "mean: 1.3390384579999857 sec\nrounds: 3"
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
          "id": "410fdc284ea65a41670118268dc50e729dbdf7d9",
          "message": "update token",
          "timestamp": "2023-01-20T09:51:17+08:00",
          "tree_id": "24dc84f1846404d90a21672c5bb8e9a359d355e8",
          "url": "https://github.com/Yiling-J/cacheme/commit/410fdc284ea65a41670118268dc50e729dbdf7d9"
        },
        "date": 1674179638827,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 4.104804441677515,
            "unit": "iter/sec",
            "range": "stddev: 0.013839741262839374",
            "extra": "mean: 243.61696500000107 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 4.185181812186948,
            "unit": "iter/sec",
            "range": "stddev: 0.0029951359005111976",
            "extra": "mean: 238.93824566666902 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 4.263302766925622,
            "unit": "iter/sec",
            "range": "stddev: 0.01528759493213173",
            "extra": "mean: 234.55993033333775 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 4.167248651880193,
            "unit": "iter/sec",
            "range": "stddev: 0.0014175781338376559",
            "extra": "mean: 239.96648233332962 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 4.112496638188217,
            "unit": "iter/sec",
            "range": "stddev: 0.0013258941133406394",
            "extra": "mean: 243.161293 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 4.157050876809904,
            "unit": "iter/sec",
            "range": "stddev: 0.014533243373948568",
            "extra": "mean: 240.55515066666544 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.2361546900287714,
            "unit": "iter/sec",
            "range": "stddev: 0.09622113336334136",
            "extra": "mean: 447.19625366666094 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.703746449734588,
            "unit": "iter/sec",
            "range": "stddev: 0.01088561085414513",
            "extra": "mean: 586.9417953333264 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.404938861661916,
            "unit": "iter/sec",
            "range": "stddev: 0.05989369865296736",
            "extra": "mean: 711.7747449999996 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 1.033910647016334,
            "unit": "iter/sec",
            "range": "stddev: 0.3631543647233361",
            "extra": "mean: 967.2015689999967 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.9420514592142911,
            "unit": "iter/sec",
            "range": "stddev: 0.3193973425513273",
            "extra": "mean: 1.061513137333326 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.7632437727435368,
            "unit": "iter/sec",
            "range": "stddev: 0.04986827514143096",
            "extra": "mean: 1.310197391333342 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9241896935352341,
            "unit": "iter/sec",
            "range": "stddev: 1.1545597915378014",
            "extra": "mean: 1.0820289460000083 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.8602350746094071,
            "unit": "iter/sec",
            "range": "stddev: 1.1211287530234013",
            "extra": "mean: 1.1624729443333308 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.5458868621430525,
            "unit": "iter/sec",
            "range": "stddev: 1.6337630172364181",
            "extra": "mean: 1.8318814196666722 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.2700352409124758,
            "unit": "iter/sec",
            "range": "stddev: 0.25501300354003137",
            "extra": "mean: 787.3797259999927 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 1.064767918377091,
            "unit": "iter/sec",
            "range": "stddev: 0.26577178735107754",
            "extra": "mean: 939.1717976666598 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.6548849736827502,
            "unit": "iter/sec",
            "range": "stddev: 0.8540836407777144",
            "extra": "mean: 1.5269857153333248 sec\nrounds: 3"
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
          "id": "410fdc284ea65a41670118268dc50e729dbdf7d9",
          "message": "update token",
          "timestamp": "2023-01-20T09:51:17+08:00",
          "tree_id": "24dc84f1846404d90a21672c5bb8e9a359d355e8",
          "url": "https://github.com/Yiling-J/cacheme/commit/410fdc284ea65a41670118268dc50e729dbdf7d9"
        },
        "date": 1674179641745,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 4.6032654355876135,
            "unit": "iter/sec",
            "range": "stddev: 0.018704229807276693",
            "extra": "mean: 217.23709266666447 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 4.510777912910671,
            "unit": "iter/sec",
            "range": "stddev: 0.0016435063038220744",
            "extra": "mean: 221.69125133334924 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 4.582293274317892,
            "unit": "iter/sec",
            "range": "stddev: 0.01679950839413642",
            "extra": "mean: 218.2313396666776 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 4.439775155934234,
            "unit": "iter/sec",
            "range": "stddev: 0.0009485778268251384",
            "extra": "mean: 225.2366313333217 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 4.355146716190178,
            "unit": "iter/sec",
            "range": "stddev: 0.0009636541095760644",
            "extra": "mean: 229.6133896666485 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 4.468740909324035,
            "unit": "iter/sec",
            "range": "stddev: 0.0071486043031556545",
            "extra": "mean: 223.7766790000061 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 1.8162723875324116,
            "unit": "iter/sec",
            "range": "stddev: 0.1664714686025548",
            "extra": "mean: 550.5782099999882 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.861744663078467,
            "unit": "iter/sec",
            "range": "stddev: 0.03414194496133889",
            "extra": "mean: 537.1305850000189 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.1865315085619104,
            "unit": "iter/sec",
            "range": "stddev: 0.10230415599364139",
            "extra": "mean: 842.79262100002 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.8619509678973533,
            "unit": "iter/sec",
            "range": "stddev: 0.3958180934443011",
            "extra": "mean: 1.1601587993333358 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.8641288975865302,
            "unit": "iter/sec",
            "range": "stddev: 0.3474792621533651",
            "extra": "mean: 1.1572347630000006 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.6342857319514773,
            "unit": "iter/sec",
            "range": "stddev: 0.24752109182788398",
            "extra": "mean: 1.5765765326666685 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9167491517573044,
            "unit": "iter/sec",
            "range": "stddev: 1.0155829420699454",
            "extra": "mean: 1.0908109356666575 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.6825001241535886,
            "unit": "iter/sec",
            "range": "stddev: 1.185717628618621",
            "extra": "mean: 1.465201198666686 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.6387045542835866,
            "unit": "iter/sec",
            "range": "stddev: 1.1236112977952073",
            "extra": "mean: 1.56566912400001 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.2065057109249728,
            "unit": "iter/sec",
            "range": "stddev: 0.1939265656877331",
            "extra": "mean: 828.8398396666897 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.897469575557036,
            "unit": "iter/sec",
            "range": "stddev: 0.42762521491260563",
            "extra": "mean: 1.1142438999999815 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.6136063012507432,
            "unit": "iter/sec",
            "range": "stddev: 0.9913363460688506",
            "extra": "mean: 1.629709469999985 sec\nrounds: 3"
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
          "id": "410fdc284ea65a41670118268dc50e729dbdf7d9",
          "message": "update token",
          "timestamp": "2023-01-20T09:51:17+08:00",
          "tree_id": "24dc84f1846404d90a21672c5bb8e9a359d355e8",
          "url": "https://github.com/Yiling-J/cacheme/commit/410fdc284ea65a41670118268dc50e729dbdf7d9"
        },
        "date": 1674179645574,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 4.01010435082871,
            "unit": "iter/sec",
            "range": "stddev: 0.015646465221669445",
            "extra": "mean: 249.3700693333191 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 3.9898817503189092,
            "unit": "iter/sec",
            "range": "stddev: 0.004177019873019693",
            "extra": "mean: 250.6339943333084 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 4.058356646991059,
            "unit": "iter/sec",
            "range": "stddev: 0.012058520998518132",
            "extra": "mean: 246.40515533335852 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 3.9922689126976785,
            "unit": "iter/sec",
            "range": "stddev: 0.0035849984785619226",
            "extra": "mean: 250.48412866664194 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 3.948373011832342,
            "unit": "iter/sec",
            "range": "stddev: 0.0020496446353345573",
            "extra": "mean: 253.26887733333098 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 4.000027221518715,
            "unit": "iter/sec",
            "range": "stddev: 0.0033957731629038874",
            "extra": "mean: 249.99829866665854 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 1.8198511102523365,
            "unit": "iter/sec",
            "range": "stddev: 0.1373668869853719",
            "extra": "mean: 549.4955023333432 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.0651947763739185,
            "unit": "iter/sec",
            "range": "stddev: 0.04282579679751607",
            "extra": "mean: 484.21582866668206 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.404072104050486,
            "unit": "iter/sec",
            "range": "stddev: 0.055061741116378383",
            "extra": "mean: 712.2141356666702 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 1.0304746620408396,
            "unit": "iter/sec",
            "range": "stddev: 0.2803931866645731",
            "extra": "mean: 970.4265780000014 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.9431389748792539,
            "unit": "iter/sec",
            "range": "stddev: 0.27028260752729966",
            "extra": "mean: 1.060289126666646 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.7560188735908275,
            "unit": "iter/sec",
            "range": "stddev: 0.12449174649434881",
            "extra": "mean: 1.322718301000009 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.8853155081343397,
            "unit": "iter/sec",
            "range": "stddev: 1.1495259805466136",
            "extra": "mean: 1.1295408143333436 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.7528581329236697,
            "unit": "iter/sec",
            "range": "stddev: 1.197868506392115",
            "extra": "mean: 1.3282714979999923 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.610937461245251,
            "unit": "iter/sec",
            "range": "stddev: 1.330437930991904",
            "extra": "mean: 1.6368287483333195 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.341090899269852,
            "unit": "iter/sec",
            "range": "stddev: 0.2604113237549849",
            "extra": "mean: 745.6616106666919 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 1.036196866921196,
            "unit": "iter/sec",
            "range": "stddev: 0.32579615439491355",
            "extra": "mean: 965.0675773333054 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.6637498633222837,
            "unit": "iter/sec",
            "range": "stddev: 1.080764265512863",
            "extra": "mean: 1.506591647333342 sec\nrounds: 3"
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
          "id": "410fdc284ea65a41670118268dc50e729dbdf7d9",
          "message": "update token",
          "timestamp": "2023-01-20T09:51:17+08:00",
          "tree_id": "24dc84f1846404d90a21672c5bb8e9a359d355e8",
          "url": "https://github.com/Yiling-J/cacheme/commit/410fdc284ea65a41670118268dc50e729dbdf7d9"
        },
        "date": 1674179660162,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 3.8066317699791608,
            "unit": "iter/sec",
            "range": "stddev: 0.017486075105887084",
            "extra": "mean: 262.69943099998727 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 3.669255298964715,
            "unit": "iter/sec",
            "range": "stddev: 0.00950659496602628",
            "extra": "mean: 272.53486566665214 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 3.5323242533219608,
            "unit": "iter/sec",
            "range": "stddev: 0.013224896905802927",
            "extra": "mean: 283.09971799999784 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 3.4062283728268343,
            "unit": "iter/sec",
            "range": "stddev: 0.014957314746894908",
            "extra": "mean: 293.5798456666892 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 3.441873135371822,
            "unit": "iter/sec",
            "range": "stddev: 0.023283035048438087",
            "extra": "mean: 290.5394709999882 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 3.4908734215452126,
            "unit": "iter/sec",
            "range": "stddev: 0.0065231550201487205",
            "extra": "mean: 286.46126033333985 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 1.6057682982604469,
            "unit": "iter/sec",
            "range": "stddev: 0.08700665219131488",
            "extra": "mean: 622.7548526666737 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.4965347625333214,
            "unit": "iter/sec",
            "range": "stddev: 0.023540792649598217",
            "extra": "mean: 668.2103383333432 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.0743185920361344,
            "unit": "iter/sec",
            "range": "stddev: 0.10635387360793395",
            "extra": "mean: 930.8225766666851 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.7221770538589874,
            "unit": "iter/sec",
            "range": "stddev: 0.38679704811084276",
            "extra": "mean: 1.3847019850000113 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.6213650971597443,
            "unit": "iter/sec",
            "range": "stddev: 0.5056301114008924",
            "extra": "mean: 1.6093597863333382 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.5102107840495927,
            "unit": "iter/sec",
            "range": "stddev: 0.18119170592206305",
            "extra": "mean: 1.9599742523333248 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.6657112783743662,
            "unit": "iter/sec",
            "range": "stddev: 1.507193299946976",
            "extra": "mean: 1.5021527086666613 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.6172077451453722,
            "unit": "iter/sec",
            "range": "stddev: 1.3402933182756296",
            "extra": "mean: 1.6202000183333212 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.4517607781104491,
            "unit": "iter/sec",
            "range": "stddev: 1.8547147666879973",
            "extra": "mean: 2.2135609120000104 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 0.883583125375434,
            "unit": "iter/sec",
            "range": "stddev: 0.31831131313781813",
            "extra": "mean: 1.1317554299999795 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.7724426123513222,
            "unit": "iter/sec",
            "range": "stddev: 0.47261119570870963",
            "extra": "mean: 1.2945945550000033 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.4738345466065365,
            "unit": "iter/sec",
            "range": "stddev: 1.3448922775155945",
            "extra": "mean: 2.1104413073333412 sec\nrounds: 3"
          }
        ]
      }
    ],
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
          "id": "a06a0fd387c2bf2003c864da78bba99474fec0a5",
          "message": "update bench title",
          "timestamp": "2023-01-20T10:06:49+08:00",
          "tree_id": "f2a872a9424df5ceaf57048362aa269a83fc2253",
          "url": "https://github.com/Yiling-J/cacheme/commit/a06a0fd387c2bf2003c864da78bba99474fec0a5"
        },
        "date": 1674180566734,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 5.9980597956018515,
            "unit": "iter/sec",
            "range": "stddev: 0.020776196100651404",
            "extra": "mean: 166.72057866666515 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 6.641050908408102,
            "unit": "iter/sec",
            "range": "stddev: 0.012924378090578652",
            "extra": "mean: 150.57857766666416 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 6.577251951916603,
            "unit": "iter/sec",
            "range": "stddev: 0.009125640981152141",
            "extra": "mean: 152.03918099999214 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 6.334075282279418,
            "unit": "iter/sec",
            "range": "stddev: 0.0013425858028425512",
            "extra": "mean: 157.87624166666583 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 6.55644223666208,
            "unit": "iter/sec",
            "range": "stddev: 0.0064177010931399485",
            "extra": "mean: 152.52174333333338 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 6.524148399158322,
            "unit": "iter/sec",
            "range": "stddev: 0.012708293408430557",
            "extra": "mean: 153.27670966666082 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 3.0331007348472485,
            "unit": "iter/sec",
            "range": "stddev: 0.0942005455499",
            "extra": "mean: 329.69561099999584 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 2.8767791681694677,
            "unit": "iter/sec",
            "range": "stddev: 0.023160586641743353",
            "extra": "mean: 347.61097100001354 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.6430819586024297,
            "unit": "iter/sec",
            "range": "stddev: 0.11109277345600041",
            "extra": "mean: 608.6123669999873 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 1.2783124622895359,
            "unit": "iter/sec",
            "range": "stddev: 0.27341132341422314",
            "extra": "mean: 782.2813510000041 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 1.1052168443645645,
            "unit": "iter/sec",
            "range": "stddev: 0.308870606671248",
            "extra": "mean: 904.7998183333353 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.9481731882361445,
            "unit": "iter/sec",
            "range": "stddev: 0.03130106354638955",
            "extra": "mean: 1.0546596470000036 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 1.0965658133826848,
            "unit": "iter/sec",
            "range": "stddev: 0.89483804214653",
            "extra": "mean: 911.9379683333383 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.9815038100024766,
            "unit": "iter/sec",
            "range": "stddev: 0.9925594147446141",
            "extra": "mean: 1.0188447459999945 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.7836956156406367,
            "unit": "iter/sec",
            "range": "stddev: 1.0492054690352146",
            "extra": "mean: 1.2760056073333317 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.868748163752513,
            "unit": "iter/sec",
            "range": "stddev: 0.19952974582523536",
            "extra": "mean: 535.1175826666577 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 1.4559434320162745,
            "unit": "iter/sec",
            "range": "stddev: 0.3418231563783569",
            "extra": "mean: 686.8398716666775 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.6638537146010499,
            "unit": "iter/sec",
            "range": "stddev: 1.0455149170268465",
            "extra": "mean: 1.5063559606666672 sec\nrounds: 3"
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
          "id": "a06a0fd387c2bf2003c864da78bba99474fec0a5",
          "message": "update bench title",
          "timestamp": "2023-01-20T10:06:49+08:00",
          "tree_id": "f2a872a9424df5ceaf57048362aa269a83fc2253",
          "url": "https://github.com/Yiling-J/cacheme/commit/a06a0fd387c2bf2003c864da78bba99474fec0a5"
        },
        "date": 1674180576966,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 4.475498656591913,
            "unit": "iter/sec",
            "range": "stddev: 0.0195405578158551",
            "extra": "mean: 223.4387889999946 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 4.509125911713643,
            "unit": "iter/sec",
            "range": "stddev: 0.002498635610392408",
            "extra": "mean: 221.77247200000258 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 4.563649095277015,
            "unit": "iter/sec",
            "range": "stddev: 0.016765619137476036",
            "extra": "mean: 219.1228946666636 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 4.465627655331953,
            "unit": "iter/sec",
            "range": "stddev: 0.0016925268592494905",
            "extra": "mean: 223.93268700000135 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 4.413964580391348,
            "unit": "iter/sec",
            "range": "stddev: 0.0029043466194849",
            "extra": "mean: 226.5536983333334 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 4.6200597675879855,
            "unit": "iter/sec",
            "range": "stddev: 0.00768954916184802",
            "extra": "mean: 216.44741633333334 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 2.2414410450415674,
            "unit": "iter/sec",
            "range": "stddev: 0.08130887588479428",
            "extra": "mean: 446.14155800000316 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.576042887279045,
            "unit": "iter/sec",
            "range": "stddev: 0.10970359959139028",
            "extra": "mean: 634.5005000000015 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.3247307672385802,
            "unit": "iter/sec",
            "range": "stddev: 0.0834979435718233",
            "extra": "mean: 754.8703666666654 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.9731207212082494,
            "unit": "iter/sec",
            "range": "stddev: 0.31257398252948226",
            "extra": "mean: 1.0276217310000106 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 1.0130173882476194,
            "unit": "iter/sec",
            "range": "stddev: 0.17793436249096772",
            "extra": "mean: 987.1498866666665 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.8211181073466676,
            "unit": "iter/sec",
            "range": "stddev: 0.13807290519190463",
            "extra": "mean: 1.217851599000009 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.9498095790412185,
            "unit": "iter/sec",
            "range": "stddev: 0.9940564744018231",
            "extra": "mean: 1.052842614000004 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.8433415860623255,
            "unit": "iter/sec",
            "range": "stddev: 1.010869728322334",
            "extra": "mean: 1.1857591473333287 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.5835603602618326,
            "unit": "iter/sec",
            "range": "stddev: 1.2266354344247687",
            "extra": "mean: 1.7136187926666555 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.3948522367258274,
            "unit": "iter/sec",
            "range": "stddev: 0.20547932406532665",
            "extra": "mean: 716.9218170000041 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 1.196124342306988,
            "unit": "iter/sec",
            "range": "stddev: 0.33577744120512826",
            "extra": "mean: 836.0334830000037 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.7008133140109709,
            "unit": "iter/sec",
            "range": "stddev: 0.8313895919928319",
            "extra": "mean: 1.4269135303333371 sec\nrounds: 3"
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
          "id": "a06a0fd387c2bf2003c864da78bba99474fec0a5",
          "message": "update bench title",
          "timestamp": "2023-01-20T10:06:49+08:00",
          "tree_id": "f2a872a9424df5ceaf57048362aa269a83fc2253",
          "url": "https://github.com/Yiling-J/cacheme/commit/a06a0fd387c2bf2003c864da78bba99474fec0a5"
        },
        "date": 1674180580519,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 4.058865416664102,
            "unit": "iter/sec",
            "range": "stddev: 0.013994569231301048",
            "extra": "mean: 246.37426900000037 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 4.072039935288516,
            "unit": "iter/sec",
            "range": "stddev: 0.0033511010655224173",
            "extra": "mean: 245.57715933332247 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 4.100243193897772,
            "unit": "iter/sec",
            "range": "stddev: 0.022447794780679334",
            "extra": "mean: 243.88797266666037 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 3.7983481672589763,
            "unit": "iter/sec",
            "range": "stddev: 0.024053389067710654",
            "extra": "mean: 263.27233733331923 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 3.986088190808721,
            "unit": "iter/sec",
            "range": "stddev: 0.0034223777740881203",
            "extra": "mean: 250.87252266666837 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 4.105877120073242,
            "unit": "iter/sec",
            "range": "stddev: 0.012847935871144587",
            "extra": "mean: 243.5533190000001 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 1.66182136059847,
            "unit": "iter/sec",
            "range": "stddev: 0.03341718670015998",
            "extra": "mean: 601.7493959999834 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.697858748495453,
            "unit": "iter/sec",
            "range": "stddev: 0.07932570358015181",
            "extra": "mean: 588.9771460000096 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.1816295964917203,
            "unit": "iter/sec",
            "range": "stddev: 0.15167091538196584",
            "extra": "mean: 846.2888903333313 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.9335976969982133,
            "unit": "iter/sec",
            "range": "stddev: 0.37444306837369545",
            "extra": "mean: 1.071125178666667 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.8133061699844276,
            "unit": "iter/sec",
            "range": "stddev: 0.25341747467584225",
            "extra": "mean: 1.2295492606666774 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.6452954504384987,
            "unit": "iter/sec",
            "range": "stddev: 0.06472798339083587",
            "extra": "mean: 1.5496777473333623 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.8624593562578602,
            "unit": "iter/sec",
            "range": "stddev: 1.18455724908612",
            "extra": "mean: 1.1594749279999899 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.6999819362428247,
            "unit": "iter/sec",
            "range": "stddev: 0.9289373533866598",
            "extra": "mean: 1.4286082943333251 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.6136972072651655,
            "unit": "iter/sec",
            "range": "stddev: 1.1824973498395834",
            "extra": "mean: 1.6294680636666499 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.1986762428501223,
            "unit": "iter/sec",
            "range": "stddev: 0.2801860207639165",
            "extra": "mean: 834.2536243333521 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.9227368667174669,
            "unit": "iter/sec",
            "range": "stddev: 0.40276823492551805",
            "extra": "mean: 1.0837325743333395 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.617317402107362,
            "unit": "iter/sec",
            "range": "stddev: 0.9745279275902665",
            "extra": "mean: 1.6199122146666507 sec\nrounds: 3"
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
          "id": "a06a0fd387c2bf2003c864da78bba99474fec0a5",
          "message": "update bench title",
          "timestamp": "2023-01-20T10:06:49+08:00",
          "tree_id": "f2a872a9424df5ceaf57048362aa269a83fc2253",
          "url": "https://github.com/Yiling-J/cacheme/commit/a06a0fd387c2bf2003c864da78bba99474fec0a5"
        },
        "date": 1674180586291,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 3.823943046559398,
            "unit": "iter/sec",
            "range": "stddev: 0.020852360323312447",
            "extra": "mean: 261.5101709999976 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 3.817108964879684,
            "unit": "iter/sec",
            "range": "stddev: 0.0034235097410085947",
            "extra": "mean: 261.9783739999993 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 3.862942978833389,
            "unit": "iter/sec",
            "range": "stddev: 0.018016052956959204",
            "extra": "mean: 258.8699873333364 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 3.728684114998355,
            "unit": "iter/sec",
            "range": "stddev: 0.002029170621064068",
            "extra": "mean: 268.1911283333373 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 3.6637521107470756,
            "unit": "iter/sec",
            "range": "stddev: 0.0009393616291229206",
            "extra": "mean: 272.94423033333715 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 3.809489478162817,
            "unit": "iter/sec",
            "range": "stddev: 0.010861695640588274",
            "extra": "mean: 262.50236566666274 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 1.9184863014159608,
            "unit": "iter/sec",
            "range": "stddev: 0.10127850017090423",
            "extra": "mean: 521.2442743333318 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.5969392593719167,
            "unit": "iter/sec",
            "range": "stddev: 0.09254965965761885",
            "extra": "mean: 626.197893333341 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.1321499257222634,
            "unit": "iter/sec",
            "range": "stddev: 0.12943561638155254",
            "extra": "mean: 883.2752423333355 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.888946851384302,
            "unit": "iter/sec",
            "range": "stddev: 0.32052954154116414",
            "extra": "mean: 1.1249266459999963 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.7751674405533174,
            "unit": "iter/sec",
            "range": "stddev: 0.3391605612463104",
            "extra": "mean: 1.2900438636666631 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.6042351228890751,
            "unit": "iter/sec",
            "range": "stddev: 0.25984882562681383",
            "extra": "mean: 1.6549848926666566 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.725192502821254,
            "unit": "iter/sec",
            "range": "stddev: 1.1419106247947874",
            "extra": "mean: 1.3789442059999903 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.7522864371453568,
            "unit": "iter/sec",
            "range": "stddev: 1.2522057948974967",
            "extra": "mean: 1.3292809103333336 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.563868655162336,
            "unit": "iter/sec",
            "range": "stddev: 1.198809485607554",
            "extra": "mean: 1.773462650999998 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 0.9464376815841921,
            "unit": "iter/sec",
            "range": "stddev: 0.31004076393505065",
            "extra": "mean: 1.0565936029999914 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.9283398344172474,
            "unit": "iter/sec",
            "range": "stddev: 0.4067746400218894",
            "extra": "mean: 1.0771917383333403 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.6079059040639611,
            "unit": "iter/sec",
            "range": "stddev: 0.8687848461695822",
            "extra": "mean: 1.644991426000009 sec\nrounds: 3"
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
          "id": "a06a0fd387c2bf2003c864da78bba99474fec0a5",
          "message": "update bench title",
          "timestamp": "2023-01-20T10:06:49+08:00",
          "tree_id": "f2a872a9424df5ceaf57048362aa269a83fc2253",
          "url": "https://github.com/Yiling-J/cacheme/commit/a06a0fd387c2bf2003c864da78bba99474fec0a5"
        },
        "date": 1674180589008,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-small]",
            "value": 4.097311777507387,
            "unit": "iter/sec",
            "range": "stddev: 0.022521094279102816",
            "extra": "mean: 244.06246199998805 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-medium]",
            "value": 3.940948123940295,
            "unit": "iter/sec",
            "range": "stddev: 0.002505143191300093",
            "extra": "mean: 253.74604499999504 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-lru-large]",
            "value": 4.045742066044964,
            "unit": "iter/sec",
            "range": "stddev: 0.021262367710175607",
            "extra": "mean: 247.17344399999774 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-small]",
            "value": 3.9110197075096003,
            "unit": "iter/sec",
            "range": "stddev: 0.0005978294330525436",
            "extra": "mean: 255.68779366667133 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-medium]",
            "value": 3.9639618731820705,
            "unit": "iter/sec",
            "range": "stddev: 0.019803732013144826",
            "extra": "mean: 252.27286033335378 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[local-tlfu-large]",
            "value": 3.209322553120537,
            "unit": "iter/sec",
            "range": "stddev: 0.07629808124990117",
            "extra": "mean: 311.59223899999233 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-small]",
            "value": 1.6792224714997446,
            "unit": "iter/sec",
            "range": "stddev: 0.1936073239715675",
            "extra": "mean: 595.5137076666688 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-medium]",
            "value": 1.6376851297545123,
            "unit": "iter/sec",
            "range": "stddev: 0.0181403191415016",
            "extra": "mean: 610.617988666661 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[redis-large]",
            "value": 1.0835506961613648,
            "unit": "iter/sec",
            "range": "stddev: 0.1316328200362029",
            "extra": "mean: 922.8917516666684 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-small]",
            "value": 0.8369981410865525,
            "unit": "iter/sec",
            "range": "stddev: 0.33876612932030514",
            "extra": "mean: 1.194745783666671 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-medium]",
            "value": 0.7149379816550244,
            "unit": "iter/sec",
            "range": "stddev: 0.3849170921106201",
            "extra": "mean: 1.3987227223333132 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mongo-large]",
            "value": 0.5927153005240814,
            "unit": "iter/sec",
            "range": "stddev: 0.004898167856411728",
            "extra": "mean: 1.6871506423333358 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-small]",
            "value": 0.7260178333444848,
            "unit": "iter/sec",
            "range": "stddev: 1.211698110669219",
            "extra": "mean: 1.377376634666651 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-medium]",
            "value": 0.7217332128060944,
            "unit": "iter/sec",
            "range": "stddev: 1.2542281017810695",
            "extra": "mean: 1.385553529000011 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[postgres-large]",
            "value": 0.5359839990838688,
            "unit": "iter/sec",
            "range": "stddev: 1.2255717157518864",
            "extra": "mean: 1.865727338333329 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-small]",
            "value": 1.0445223876102794,
            "unit": "iter/sec",
            "range": "stddev: 0.37797858339872403",
            "extra": "mean: 957.3753629999828 msec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-medium]",
            "value": 0.9343693534346929,
            "unit": "iter/sec",
            "range": "stddev: 0.4682750110755724",
            "extra": "mean: 1.070240581333337 sec\nrounds: 3"
          },
          {
            "name": "benchmarks/benchmark_test.py::test_read_write_async[mysql-large]",
            "value": 0.5592103914675969,
            "unit": "iter/sec",
            "range": "stddev: 1.0453432352121825",
            "extra": "mean: 1.7882357253333414 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}