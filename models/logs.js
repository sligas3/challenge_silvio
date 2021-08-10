const mongoose = require('mongoose');

const logsSchema = new mongoose.Schema({
	address: { type: String },
	topics: [{ type: String }],
	data: { type: String },
	blockNumber: { type: Number },
	transactionHash: { type: String },
	transactionIndex: { type: Number },
	blockHash: { type: String },
	logIndex: { type: Number },
	removed: Boolean,
	id: { type: String }
});

const Logs = mongoose.model('Logs', logsSchema);

module.exports = Logs;
