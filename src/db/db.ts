import { MongoClient } from 'mongodb';
import { Injectable } from '@angular/core';

import { config } from '../config';

@Injectable()
export class DB {
	private db;

	constructor() {

		MongoClient.connect(`${config.mongoUrl}/${config.mongoDbName}`, (err, db) => {
			this.db = db;
		});
	}

	getCollection(collectionName) {
		return this.db.collection(collectionName);
	}
}
