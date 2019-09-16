const express = require('express');
const bodyP = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const fs = require('fs');

const app = express();

app.use(bodyP.urlencoded({extended: false}));
app.use(bodyP.json());
app.use(cors());

let knex = require('knex')({
  client: 'mysql',
  version: '8.0',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'admin',
    database : 'testdb'
  }
});

app.post('/login', (req, res) => {
	if(!req.body.email.includes('@') || req.body.password.length < 5 || req.body.password.length > 30 || !req.body.email.includes('.')){
		throw new Error('Wrong data!');
	}
	knex.select('email', 'hash').from('users')
	.where('email', '=', req.body.email)
	.then(data => {
		const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
		if(isValid){
			res.json('success');
		}else{
			res.status(400).json('wrong password');
		}
	})
	.catch(err => res.status(400).json('no such user'));
});

app.post('/register', (req, res) => {
	if(!req.body.email.includes('@') || req.body.password.length < 5 || req.body.password.length > 30 || !req.body.email.includes('.')){
		throw new Error('Wrong data!');
	}
	let hash = bcrypt.hashSync(req.body.password, 10);
	knex('users')
	.insert({
		email: req.body.email,
		hash: hash
	})
	.then(data => res.json(data))
	.catch(err => res.status(400).json('error'));
});

app.post('/order', (req, res) => {
	knex('orders')
	.insert({
		name: req.body.name,
		location: req.body.location,
		phonenumber: req.body.phonenumber,
		foodname: req.body.foodname,
		price: req.body.price
	})
	.then(data => res.json(data))
	.catch(err => res.status(400).json('error'));
});

app.get('/home', (req, res) => {
	knex.select('*').from('menuitems').then(data => {
		res.json(data);
	});
});

app.listen(3000, () => {
	console.log('Server is running on port 3000...');
});
