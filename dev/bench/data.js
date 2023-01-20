window.BENCHMARK_DATA = {
  "lastUpdate": 1674179635141,
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
      }
    ]
  }
}