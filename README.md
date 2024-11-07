# Vaka Consultancy Website
Server - Keystone.js App
WebApp - Next.js App

## Running the example

1 - Install dependencies

Make sure you are at the root of the repo and install dependencies.

```shell
pnpm install
```

2 - Start
Navigate from repo root and start the servers.

```shell
pnpm dev
```

The GraphQL Server and Admin UI will start on:
- [localhost:3000](http://localhost:3000).
- [localhost:3000/api/graphql](http://localhost:3000/api/graphql).


The Next.js server will start and the homepage will be served at [localhost:8000](http://localhost:8000).

_You can alternatively open two terminals and navigate to `examples/framework-nextjs-two-servers/keystone-server` and `examples/framwork-nextjs-two-servers/nextjs-frontend` and run `pnpm dev` separately._