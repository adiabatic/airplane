import { Application } from "https://deno.land/x/oak/mod.ts"; // probably 4.0, but I'm not picky yet
import Feed from "./json_feed.ts";

const app = new Application();

const aFeed: Feed = {
  version: "https://jsonfeed.org/version/1.1",
  title: "Here Comes the Airplane",
  items: [
    {
      id: "d2f2aef9-3227-48c5-a8ba-be7ac2c63a2f",
      title: "First post!",
      content_text: "This is my first post.",
    },
  ],
};

app.use((ctx) => {
  const accepts = ctx.request.accepts()
  console.log(accepts);
  
  ctx.response.body = aFeed;
});

const SERVER = "127.0.0.1";
const PORT = 3000;
const LISTEN_TARGET = `${SERVER}:${PORT}`;
console.log(`Listening on <http://${LISTEN_TARGET}>`);

await app.listen(LISTEN_TARGET);
