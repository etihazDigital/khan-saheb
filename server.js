const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

if (req.url === "/") {
fs.readFile("index.html", (err, data) => {
res.writeHead(200, {"Content-Type": "text/html"});
res.write(data);
res.end();
});
}

else if (req.url === "/order" && req.method === "POST") {
let body = "";

req.on("data", chunk => {
  body += chunk.toString();
});

req.on("end", () => {
  console.log("New Order:", body);

  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify({message: "Order Received"}));
});

}

});

server.listen(3000, () => {
console.log("Server running on http://localhost:3000");
});