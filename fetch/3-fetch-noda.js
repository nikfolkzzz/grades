const https = require("https");
const http = require("http");
const fs = require("fs");

const fetch = url =>
  new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;
    protocol.get(url, res => {
      if (res.statusCode != 200) {
        const { statusCode, statusMessage } = res;
        reject(
          new Error(
            `statusCode: ${statusCode} statusMessage: ${statusMessage}`,
          ),
        );
      }
      res.setEncoding("utf8");
      const buffer = [];
      res.on("data", chunk => buffer.push(chunk));
      res.on("end", () => resolve(buffer.join()));
    });
  });

fetch("https://ietf.org")
  .then(body =>
    fs.writeFile("content.txt", body, () => console.log("to content.txt")),
  )
  .catch(error => console.log(error));
