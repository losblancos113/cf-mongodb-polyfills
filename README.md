# cf-tcp-mock
This package allows the use of the `mongodb` npm package in a cloudflare worker. It does this by polyfilling the `net` and `tls` modules in the `mongodb` package to use the `cf-tcp-mock` package instead.


## Description

Currently cloudflare's workerd does not support using `mongodb` package to connect to mongodb. This is due to the fact that `net.createConnection` and `tls.connect` arent
implemented in the worker runtime ([ref](https://developers.cloudflare.com/workers/runtime-apis/nodejs/#nodejs-api-polyfills)) even with the `nodejs_compat` or `nodejs_compat_v2` compatiblity flags enabled.

However, thru the use of the [`module aliasing`](https://developers.cloudflare.com/workers/wrangler/configuration/#module-aliasing) feature in `wrangler.toml`, we can replace the `net` and `tls` modules in the `mongodb` package with polyfills in this package. This package provides polyfills for the `net` and `tls` modules which will use `cloudflare:sockets` npm package to create a tcp connection to the mongodb server.


## Installation

To install the package, run:

```sh
npm install cf-tcp-mock
```

## Usage

To use the package, you must create aliases in the wrangler.toml to point to the polyfills that are in this package.

```toml
# wrangler.toml
[alias]
"net" = "cf-tcp-mock/net"
"dns" = "cf-tcp-mock/dns"
"tls" = "cf-tcp-mock/tls"
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
