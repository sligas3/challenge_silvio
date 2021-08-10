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

Transaction.find().then(
	(data) => {
		console.log(data);
	},
	(err) => {
		console.log(`Error al consultar la transaccion: ${err}`);
	}
);

Logs.find().then((data) => {
	console.log(data);
}),
	(err) => {
		console.log(`Error al consultar los logs: ${err}`);
	};
