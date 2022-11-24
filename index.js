const http = require("http");
const path = require("path");
const { readBody } = require("./utils.js");

const server = http
  .createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;
    req.app = {
      publicDirectory: path.join(__dirname, "public")
    };
    /* 2aii. Check the values for the matched path */
    for (const [route, handlers] of Object.entries(routes)) {
      /* 2bi. If the extracted path includes the current key.. */
      if (pathname.includes(route)) {
        if ("get" === req.method.toLowerCase() && handlers.get) {
          return handlers.get(req, res);
        }
        else if ("post" === req.method.toLowerCase() && handlers.post) {
          readBody(req).then((data) => {
            handlers.post(req,res,data)
          })
          return;
        }
        else {
          return res.writeHead(405).end();
        }
      }
    }
    return res.writeHead(404).end();
  });
server.listen(8080);



const PublicHandler = require('./routes/public.js');
const EventHandler = require('./routes/event.js');
const routes = {
  "/public/": PublicHandler,
  "/api/events/": EventHandler
};