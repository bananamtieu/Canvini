const { VALID_MONTHS, VALID_TYPES } = require("../utils");

const events = {
    september: {},
    october: {},
    november: {},
    december: {},
}

module.exports = {
    /**
     * @function get
     * @param {IncomingMessage} req
     * @param {ServerResponse} res
     */
    get: function (req, res) {
      // do the split
      const monthPath = req.url.split('/');
      const month = monthPath[monthPath.length - 1].toLowerCase();

      if (!month) {
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(events));
      }
      else if (!VALID_MONTHS.includes(month)) {
        return res.end('MONTH_NOT_FOUND');
      }
      else {
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(events[month]));
      }
    },
    /**
     * @function post
     * @param {IncomingMessage} req
     * @param {ServerResponse} res
     * @param {Body} body
     */
    post: function (req, res, body) {
      try {
        const input = JSON.parse(body);
        let bodyType = input.type.toLowerCase().trim();
        let bodyMonth = input.month.toLowerCase().trim();
        if (!input.type || !input.date || !input.month) {
          res.statusCode = 400;
          return res.end();
        }
        else if (!VALID_MONTHS.includes(bodyMonth)) {
          res.statusCode = 400;
          return res.end();
        }
        else if (!VALID_TYPES.includes(bodyType)) {
          res.statusCode = 400;
          return res.end();
        }
        events[bodyMonth][input.date] = {type: bodyType};
        res.statusCode = 201;
        return res.end('CREATED');
      }
      catch(err) {
        if (err instanceof SyntaxError) {
          console.log("error parsing JSON", err);
          res.statusCode = 400;
          return res.end();
        }
        console.log(err);
        res.statusCode = 500;
        return res.end();
      }
    }
};