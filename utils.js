module.exports = {
  VALID_MONTHS: ["september", "october", "november", "december"],
  VALID_TYPES: ["office-hours", "homework", "lab", "quiz"],
  // the body of a request may be longer than a single
  // chunk of data, so have to waiit until the end of the
  // stream has been read before converting to JSON
  readBody: function (request) {
    return new Promise(function (resolve) {
      let body = [];
      request
        .on("data", (chunk) => {
          body.push(chunk);
        })
        .on("end", () => {
          resolve(Buffer.concat(body).toString());
        });
    });
  },
};
