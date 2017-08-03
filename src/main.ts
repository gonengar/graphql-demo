import * as express from 'express';
import * as bodyParser from 'body-parser';
import {graphqlExpress, graphiqlExpress} from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import {typeDefs} from './gql-files/schema_children';
import {resolvers} from './gql-files/resolver_children';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});


const PORT = 3000;
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));

app.listen(PORT);
