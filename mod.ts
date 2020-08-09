import { Application } from "https://deno.land/x/oak/mod.ts";
import Feed from './json_feed.ts';

const app = new Application();

const aFeed: Feed = {
  version: "https://jsonfeed.org/version/1.1",
  title: 'Here Comes the Airplane',
  items: [

  ]
}

app.use((ctx) => {
  ctx.response.body = aFeed;
});

const SERVER = "127.0.0.1";
const PORT = 8000;
const LISTEN_TARGET = `${SERVER}:${PORT}`;
console.log(`Listening on <http://${LISTEN_TARGET}>`);

await app.listen(LISTEN_TARGET);
