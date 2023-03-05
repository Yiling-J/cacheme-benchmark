# cacheme-benchmark
Github pages are generated automatically using [github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark). Source code of all benchmarks can be found here [benchmark_test.py](https://github.com/Yiling-J/cacheme/blob/master/benchmarks/benchmark_test.py).

Charts below can be used to evaluate base performance of difference storages and payload size under cocurrency workloads. Each iteration in benchmarks will call Cacheme API N times concurrently. All keys are generated using a bounded [zipf](https://en.wikipedia.org/wiki/Zipf%27s_law) generator([zipf.py](https://github.com/Yiling-J/cacheme/blob/master/benchmarks/zipf.py)). **Y axis in the chart shows how many iterations can be finished per second. If each iteration contains 10k requests, then value of 3 means 30k requests/second.**

Cocurerency level is controlled by WORKERS param, default is 500. All tasks will be stored in asyncio queue and consumed by workers.
Cacheme is optimized for skewed workloads and concurrency requests. You can increase worker count and see benchmark results.

Benchmarks are parameterized by storage and payload size, `[redis-small]` in chart title means storage is `redis` and payload size is small. Different payloads json can be found here: https://github.com/Yiling-J/cacheme/tree/master/benchmarks

### Theine Benchmarks
Theine is the in-memory cache library used by Cacheme:

https://github.com/Yiling-J/theine

10k requests, zipf, read/write\
https://yiling-j.github.io/cacheme-benchmark/dev/theine/

### Cacheme Benchmarks

All benchmarks below run sequentially without concurrency. See Cacheme readme benchmarks section to get an idea of parallel performance.
 
1k requests read only\
https://yiling-j.github.io/cacheme-benchmark/dev/test_read_only/

1k requests write only\
https://yiling-j.github.io/cacheme-benchmark/dev/test_write_only/

1k requests zipf\
https://yiling-j.github.io/cacheme-benchmark/dev/test_zipf/

1k requests batch zipf, each request get 20 unique numbers\
https://yiling-j.github.io/cacheme-benchmark/dev/test_read_only_batch/
