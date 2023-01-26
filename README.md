# cacheme-benchmark
Github pages are generated automatically using [github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark). Source code of all benchmarks can be found here [benchmark_test.py](https://github.com/Yiling-J/cacheme/blob/master/benchmarks/benchmark_test.py).

Charts below can be used to evaluate basic performance of difference storages under cocurrency workloads. Each iteration in benchmarks will call Cacheme API N times concurrently using `asyncio.gather`. All keys are generated using a bounded [zipf](https://en.wikipedia.org/wiki/Zipf%27s_law) generator([zipf.py](https://github.com/Yiling-J/cacheme/blob/master/benchmarks/zipf.py)). Y axis in the chart shows how many iterations can be finished per second. If each iteration contains 10k requests, then value of 3 means 30k requests/second with 10k concurrency.

Cacheme is optimized for skewed workloads and concurrency requests. That's why zipf and `asyncio.gather` is used here.

Benchmarks are parameterized by storage and payload size, `[redis-small]` in chart title means storage is `redis` and payload size is small. Different payloads json can be found here: https://github.com/Yiling-J/cacheme/tree/master/benchmarks

 ### Benchmarks
 
10k requests, 1k keys, zipf, read only\
https://yiling-j.github.io/cacheme-benchmark/dev/test_read_only_async/

10k requests, 1k keys, zipf, read only, local_cache + remote_cache\
https://yiling-j.github.io/cacheme-benchmark/dev/test_read_only_with_local_async/

10k requests, 1k keys, zipf, cold start\
https://yiling-j.github.io/cacheme-benchmark/dev/test_read_write_async/

10k requests, 1k keys, zipf, cold start, local_cache + remote_cache\
https://yiling-j.github.io/cacheme-benchmark/dev/test_read_write_with_local_async/

1k requests(each request get 20 random keys), 1k keys, zipf, cold start\
https://yiling-j.github.io/cacheme-benchmark/dev/test_read_write_batch_async/
