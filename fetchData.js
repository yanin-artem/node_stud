const axios = require("axios");
const fs = require("fs");

const fetchData = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  fs.writeFile("posts.json", JSON.stringify(data), "utf-8", (err) => {
    if (err) throw err;
  });
};

module.exports = {
  fetchData,
};
