const mongoose = require('mongoose');
const Transaction = require('./models/transaction');
const Logs = require('./models/logs');

mongoose
	.connect('mongodb://localhost:27017/challenge', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('Conexion a la base de datos abierta!');
	})
	.catch((err) => {
		console.error(`Ocurrio un error al conectarse a la base de datos: ${err}`);
	});

const t = new Transaction({
	blockHash:
		'0x530fb333ca16c4da91b1e258c51f88951842494bc4a899c8a5d03bb33fb86574',
	blockNumber: 15833583,
	from: '0xAC92f8ef4F6E3872D0ef54e6680Be091E0c7A10a',
	gas: 350000,
	gasPrice: '3000000000',
	hash: '0x2b1cb0ee5c14b33d1871a671c235dce2972861a1ad1410659251f0b9d7fac39f',
	input: '0x3d18b912',
	nonce: 841,
	to: '0x1fdDd7F3A4c1f0e7494aa8B637B8003a64fdE21A',
	transactionIndex: 17,
	value: '0',
	type: 0,
	v: '0x136',
	r: '0x8ddfbe299692e7c2e3809df040e20ce4baef5d1ec7243caf8c2e9f58efd296ed',
	s: '0x5c27f119177db9971526de4fa4c656252c92eda3e2bd0053699b8e4b8c3967f8'
});

t.save()
	.then((t) => {
		console.log(t);
	})
	.catch((err) => {
		console.log(err);
	});

const l = new Logs({
	address: '0x831753DD7087CaC61aB5644b308642cc1c33Dc13',
	topics: [
		'0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
		'0x0000000000000000000000001f1e4c845183ef6d50e9609f16f6f9cae43bc9cb',
		'0x000000000000000000000000976b7b7fe4293111cacd946c422a64f24a223564'
	],
	data: '0x00000000000000000000000000000000000000000000000004b4e9f1512e5220',
	blockNumber: 17809618,
	transactionHash:
		'0x0ea6eabbb90f492317d9d2746b6c9ac6c8dbde807bda8c72dca954f634fb7478',
	transactionIndex: 252,
	blockHash:
		'0x642673cea03aaf94896287055526e9c9f8a6e0a257c8d986854c2f00b2f6f875',
	logIndex: 285,
	removed: false,
	id: 'log_2127d6c9'
});

l.save()
	.then((tl) => {
		console.log(l);
	})
	.catch((err) => {
		console.log(err);
	});
