let current = new Date();
let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
let dateTime = cDate + ' ' + cTime;
console.log(dateTime);

const http = require('http');

const hostname = '127.0.01.1';
const port = 8080;

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

dfgdfgdfgdf
1231212123
123123123sfdfsdf
kfjdsfjkdshfj 
skldjfkldsjf
12312312sdfsdfsd
312312


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});