const fs = require("fs"),
  http = require("http"),
  index = fs.readFileSync("./4-xhr.html");

http
  .createServer((req, res) => {
    if (req.url == "/person") {
      res.end(JSON.stringify({ name: "August" }));
    } else {
      res.end(index);
    }
  })
  .listen(8000);
