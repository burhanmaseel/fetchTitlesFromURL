var async = require("async");
const { extractTitle } = require("../helpers/getTitleHelpers");
const request = require("request");

exports.getTitles = async (req, res) => {
  let address = req.query.address;
  if (!Array.isArray(req.query.address)) {
    address = [req.query.address];
  }
  let titles = await Promise.all(
    address.map(url => {
      return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
          let title = body
            .split("<title>")
            .pop()
            .split("</title>")[0];
          resolve(title);
        });
      });
    })
  );
  console.log(titles);
};
