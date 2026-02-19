# Extension Development
## Preamble
First you will need an HTTP server with cors support.

I would reccomend these two choices at the time of writing, the NPM module [http-server](https://www.npmjs.com/package/http-server) by [http-party](https://github.com/http-party/http-server#readme),
or for a more local solution you can use [commandable-http-server](https://github.com/David-Orangemoon/commandable-http-server) which is a small python application that is similar to simpleHTTPServer.

Either way you will want to turn on cors headers.
For either one appending `--cors` as an argument should do the job.
