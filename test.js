function sum(a,b){
	return a+b;
}

function mul(b,c){
	return b*c;
}

// module.exports = (a,b)=>{
// 	return a+b;
// }

// module.exports = (a,b)=>{return sum(a,b)}

module.exports ={
	sum:(a,b)=>{return sum(a,b)},
	mul:(b,c)=>{return mul(b,c)}
}

const ejsLint = require('ejs-lint');
ejsLint(__dirname+'views/home.ejs');