import { Injectable } from '@angular/core';

import { Config } from './inc/config';
import { app } from './inc/app';

app.locals.environment = 'dev';
app.locals.config = Config.getConfig();

import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { generateLetter } from './utils/letter-generator';
import { DB } from './db/db';

if (app.locals.environment === 'dev') {
	require('source-map-support').install();
}

/**
 * Disable the HTTP Header X-Powered-By for safety reasons!
 */
app.disable('x-powered-by');

/**
 * Enable All CORS Requests
 * Package documentation can be found here: https://github.com/expressjs/cors
 */
app.use(cors());

/**
 * The bodyParser object exposes various factories to create middlewares. All middlewares will populate the req.body
 * property with the parsed body or provide an error to the callback.
 *
 * Full module description: https://github.com/expressjs/body-parser/blob/master/README.md
 */
app.use(bodyParser.urlencoded({extended: true, limit: '10mb'}));
app.use(bodyParser.json({limit: '10mb'}));

/**
 * Stating server
 */
let server = app.listen(process.env.PORT || 3000, () => {
	//let host = server.address().address;
	let port = server.address().port;
	if (app.locals.config.debug) {
		console.log('Service started at port: ' + port);
	}
});

app.get('/', (req, res) => {
	res.send('you have entered the right place');
});

app.get('/letter', (req, res) => {
	res.send(generateLetter());
});

app.post('/postLetter', (req, res) => {
	console.log(req.body);
	res.send('blat');
});

const webSocket = require('ws');

const wss = new webSocket.Server({port: 8888});

setInterval(() => wss.clients.forEach(function each(client) {
	if (client.readyState === WebSocket.OPEN) {
		client.send('dedi');
	}
}), 3000);

@Injectable()
export class ServerInstance {
	private db: DB;

	constructor(db: DB) {
		this.db = db;
	}

	init() {
		app.post('/postData', (req, res) => {
			this.db.getCollection('gavno').insertOne(req.body, (err, result) => {
				res.send('succees!');
			});
		});

		app.get('/printData', (req, res) => {
			this.db.getCollection('gavno').find({}).toArray((err, items) => {
				console.log(items);
				res.send('succees!');
			});
		});
	}
}
