 export const typeDefs = `
 type Person {
 id: Int!
 name: String!
 age: Int!
 children: [Person]
 }

 type Query {
 persons: [Person]
 person(id: Int!): Person
 }
 `;


