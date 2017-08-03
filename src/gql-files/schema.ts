export const typeDefs = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    posts: [Post] # the list of Posts by this author
  }
  
  type Post {
    id: Int!
    title: String
    author: Author
    votes: Int
  }
  
  # the schema allows the following query:
  type Query {
    posts: [Post]
    author(id: Int!): Author
  }
`;

export const typeDefs2 = `
type Service {
id: Int
type: String
}

type Plan {
name: String
}

type Domain {
records: [Record]
}

type Record {
id: Int
}
  # the schema allows the following query:
  type Query {
  getSingleInvoice(id: Int, type: String): Service [    a, b,c]
   
  getServiceInvoice(id: Int): Service 
  getServiceDomain(id: Int): Domain
   
    premiumPlans: [Mailbox | Domain | Whatever]
    author(id: Int!): Author
  }
`;
