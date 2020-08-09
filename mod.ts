import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello world!";
});

const SERVER = "127.0.0.1";
const PORT = 8000;
const LISTEN_TARGET = `${SERVER}:${PORT}`;
console.log(`Listening on <http://${LISTEN_TARGET}>`);

await app.listen(LISTEN_TARGET);
