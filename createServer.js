const http = require("http");
const path = require("path");
const { fetchData } = require(path.resolve(__dirname, "fetchData.js"));
const fs = require("fs");

http
  .createServer(async (request, response) => {
    await fetchData();
    response.setHeader("Content-Type", "application/json");
    if (request.url === "/posts") {
      fs.readFile(
        path.resolve(__dirname, "posts.json"),
        "utf-8",
        (err, data) => {
          if (err) throw err;
          else response.write(data);
          response.end();
        }
      );
    } else {
      response.write("hello");
      response.end();
    }
  })
  .listen(3000);
