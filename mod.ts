import { Application } from "./deps.ts";
import Feed from "./json_feed.ts";

const app = new Application();




function feedToHTML(feed: Feed): string {
  const template = `
  <!DOCTYPE html>
  <html lang='en-US'>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <title>${feed.title}</title>
    <style>
      :root {
        color-scheme: light dark;
        --color-text: black;
        --color-background: white;
  
        --color-text-link-unvisited: hsl(180 100% 25%);
        --color-text-link-visited:   hsl(270 100% 25%);
      }
  
      @media (prefers-color-scheme: dark) {
        :root {
          --color-text: white;
          --color-background: black;
          
          --color-text-link-unvisited: hsl(180 80% 50%);
          --color-text-link-visited:   hsl(270 80% 70%);
        }
      }
  
      html {
        font: normal 1em/1.3 system-ui, ui-sans-serif, sans-serif;
        color: var(--color-text);
        background: var(--color-background);
      }
  
      a:link { color: var(--color-text-link-unvisited) }
      a:visited { color: var(--color-text-link-visited) }
    </style>
  </head>
  <body>
      <h1>${feed.title}</h1>
      <main>
        ${
    feed.items.map((i) => {
      return (`
            <article>
              <h2>${i.title}</h2>
              <div>${i.content_text}</div>
            </article>
          `);
    })
  }
      </main>
  </body>
  </html>
  `;
  return template;
}

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
  const accepts = ctx.request.accepts();
  if (accepts && accepts.includes("text/html")) {
    ctx.response.body = feedToHTML(aFeed);
  } else {
    ctx.response.body = aFeed;
  }
});

const SERVER = "127.0.0.1";
const PORT = 3000;
const LISTEN_TARGET = `${SERVER}:${PORT}`;
console.log(`Listening on <http://${LISTEN_TARGET}>`);

await app.listen(LISTEN_TARGET);
