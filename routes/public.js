const { IncomingMessage, ServerResponse, get, req } = require("http");

const path = require("path");
const fs = require("fs").promises;

module.exports = {
  /**
   * @function get
   * @param {IncomingMessage} req
   * @param {ServerResponse} res
   */
   get:async function (req, res) {
    // do the split
    try {
      const splitPath = req.url.split('/').slice(1);
      console.log("handling public get for path", splitPath);
      let filePath = path.join(req.app.publicDirectory, ...splitPath.slice(1));

      const fileType = req.url.split('.');
      const extension = fileType[fileType.length - 1];
      switch(extension) {
        case "html":
          res.setHeader("Content-Type", "text/html");
          break;
        case "css":
          res.setHeader("Content-Type", "text/css");
          break;
        case "js":
          res.setHeader("Content-Type", "text/javascript");
          break;
        case "ico":
          res.setHeader("Content-Type", "image/ico");
          break;
        case "svg":
          res.setHeader("Content-Type", "image/svg+xml");
          break;
        default:
      }

      await fs.readFile(filePath, 'utf8').then((data) => {
        res.write(data);
      });
      return res.end();
    } catch (err) {
      if (err.code === "ENOENT") {
        res.statusCode = 404;
        res.writeHead(404);
        res.end('NOT_FOUND');
        return;
      } else if (err.code === "EISDIR") {
        res.statusCode = 500;
        res.writeHead(500);
        res.end('IS_DIRECTORY');
        return;
      }
      res.statusCode = 500;
      res.writeHead(500);
      res.end('INTERNAL_SERVER_ERROR');
      return;
    }
  },
};

