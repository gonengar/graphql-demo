import {find} from 'lodash';

const persons = [
    {id: 1, name: 'Tom', age: 40, children: [2, 3]},
    {id: 2, name: 'Sashko', age: 20, children: [4]},
    {id: 3, name: 'Mikhail', age: 20, children: [5]},
    {id: 4, name: 'Jose', age: 10, children: []},
    {id: 5, name: 'Hernan', age: 10, children: []},
];

export const resolvers = {
    Query: {
        persons: () => persons,
        person: (_, {id}) => find(persons, {id}),
    },
    Person: {
        children: person =>
            person.children.map(childrenId => find(persons, {id: childrenId}))
    }
};
