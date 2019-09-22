const fs = require("fs"),
  http = require("http"),
  index = fs.readFileSync("5-fetch.html");

http
  .createServer((req, res) => {
    if (req.url == "/person") {
      res.end(JSON.stringify({ name: "July" }));
    } else {
      res.end(index);
    }
  })
  .listen(8000);
