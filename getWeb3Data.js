const Web3 = require('web3');
const web3 = new Web3('https://matic-mainnet.chainstacklabs.com/');

web3.eth
	.getTransaction(
		'0x2b1cb0ee5c14b33d1871a671c235dce2972861a1ad1410659251f0b9d7fac39f'
	)
	.then(console.log);

web3.eth
	.getPastLogs({
		address: '0x831753dd7087cac61ab5644b308642cc1c33dc13'
	})
	.then(console.log);
