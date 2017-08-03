/*
/!*
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { queryData } from './utils/show-your-way-queries';

let app = express();

app.use(cors());
app.use(bodyParser.json());

let server = app.listen(3000, () => {
	let port = server.address().port;
	console.log('Service started at port: ' + port);
});

export class ServerInstance {
	init() {
		app.get('/items', (req, res) => {
			const queryString = req.query.queryString;
			queryData('items', queryString).then((data) =>
				res.send(data));
		});

		app.get('/tags', (req, res) => {
			const queryString = req.query.queryString;
			queryData('tags', queryString).then((data) =>
				res.send(data));
		});
	}
}
*!/

import express from 'express';
import bodyParser from 'body-parser';
import {graphqlExpress, graphiqlExpress} from 'graphql-server-express';
import {makeExecutableSchema} from 'graphql-tools';
import {schemaTypes} from './gql-files/schema';
import {resolvers} from './gql-files/resolver';

export const schema = makeExecutableSchema({
	schema: schemaTypes,
	resolvers,
});


const PORT = 3000;
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

app.use('/graphiql', graphiqlExpress({
	endpointURL: '/graphql',
}));

app.listen(PORT);

*/
