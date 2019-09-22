const https = require("https");
const fs = require("fs");
const url = "https://ietf.org/";
https.get(url, res => {
  console.log(res.req._header);
  console.dir(res.headers);
  if (res.statusCode != 200) {
    const { codeStatus, codeMessage } = res;
    console.log(`statusCode:${codeStatus} ,${codeMessage}`);
    return;
  }
  res.setEncoding("utf8");
  const buffer = [];
  res.on("data", chunk => {
    buffer.push(chunk);
  });

  res.on("end", () => {
    const data = buffer.join();
    console.log({
      size: data.length,
      chunks: buffer.length,
    });

    fs.writeFile("content.html", data, () => {
      console.log("saved to content.html");
    });
  });
});
