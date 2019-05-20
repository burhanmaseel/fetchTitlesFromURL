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
          if (error) {
            let title = url + " - NO RESPONSE"; 
            resolve(title);
          } else {
            let title = url + " - " + body
              .split("<title>")
              .pop()
              .split("</title>")[0];
            resolve(title);
          }
        });
      });
    })
  );

  res.status(200).render('index' , {
    titles : titles
  });
};
