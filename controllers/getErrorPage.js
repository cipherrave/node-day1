const path = require("path");
const fs = require("fs");

const errorHtmlContent = fs.readFileSync(
  path.resolve(__dirname, "../pages/error.html"),
  "utf-8"
);

function getErrorPage(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(errorHtmlContent);
}

module.exports = getErrorPage;
