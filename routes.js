const mongoose = require('mongoose')
const {mongourl} = require('./config/keys')
const Wish = require('./models/wish');

mongoose.connect(mongourl);


var data = ['sleep','eat']
module.exports = (app)=>{

app.get('/',(req,res)=>{
	// res.render('home',{name:'Harsh',age:20})
	res.render('home',{wish:data})
})

app.get('/profile/:id',(req,res)=>{
	res.send(`you requested user ${req.params.id}`)
})

app.get('/about',(req,res)=>{
	res.render('about')
})

app.get('/home',(req,res)=>{
	res.render('home',{name:'Harsh',age:20})
	
})

app.get('/contact',(req,res)=>{
	// res.send({msg: "This is a test message from server"})
	res.sendFile(__dirname+'/index.html')
})


app.post('/sent',(req,res)=>{
	const Item = new Wish({
		wish: req.body.item
	});
	Item.save().then(data=>{
		console.log('saved')
		res.send('done')
	})
	// data.push(req.body.item)
	// res.send(data)
})

app.delete('/remove/:id',(req,res)=>{
	data = data.map(item=>{
		if(item!=req.params.id){
			return item
		}
	})
	res.send(data)
})
}
