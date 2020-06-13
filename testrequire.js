let getsum = require('./test.js');

console.log(getsum.sum(5,4));
console.log(getsum.mul(5,4));


const http = require('http');

http.createServer((req,res)=>{
	res.write("hello world")
	res.end()
}).listen(3000)


console.log('server is running...')