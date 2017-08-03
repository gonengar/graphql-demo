# GraphQL Demo

This is a NodeJS GraphQL demo with several schemas/resolvers which demonstrates some of GraphQL benefits.

## Getting Started


 * Clone the repo
 * ``` npm install```
 * ``` npm start ```

Now you will have a GraphiQL instance running with schema/resolver as imported int ``` src/main.ts ``` file.

## Examples

### Example #1
Query authors by authorId:
``` 
//Put this in the query tab in GrapiQL
query authorById($id: Int!) {
  author(id:$id) {
    firstName
    lastName
  }
}
```

```
// Put this in the variables tab
{
  "id" : 1
}
```

In this case you are going to get the author which it's id is 1.

### Example #2

```
//Put this in the query tab in GrapiQL
query {
  posts {
    title
    author {
      firstName
      lastName
    }
  }
}
```

The thing that is interesting in this case is even though there is a relation between ``` posts``` & ``` authors``` and the data is normalized(check out ``` src/gql-files/resolver.ts ```) we get the author data of the post in the same query.

### Example 3

Under ``` src/main.ts``` file:
Rename ``` import {resolvers} from './gql-files/resolver``` to ``` import {resolvers} from './gql-files/resolver_slow' ```

Run this query:
```javascript
query {
  posts {
    title
    author {
      firstName
      lastName
    }
  }
}
```
See that it takes 5 seconds to render? That's because the calculation of the authors field this time is "heavy"(a Promise which is resolved after 5 seconds).
By removing the author fields:
```
query {
  posts {
    title
  }
}
```
The response is answered immediately!
The point is that if our schema expose a calculated value which is a heavy calculation - in case we don't query it - it won't run.

### Example 4
Under ``` src/main.ts``` file:

Rename:  ``` import {typeDefs} from './gql-files/schema_children' ``` to

``` import {typeDefs} from './gql-files/schema_children' ```

Rename ``` import {resolvers} from './gql-files/resolver_slow``` to

``` import {resolvers} from './gql-files/resolver_children' ```

Now, Check out ``` schema_children``` & ``` resolver_children ``` files in order to understand the logic(pretty simple!).
This is a father-child use case.

Run this query:
```
query {
  persons {
    name
    children {
      name
      age
      children {
        name
      }
    }
  }
}
```

As you can see - we are asking a person's name, it's children name and it's grand children name. All in 1 query! **If you'll open the network tab you can see that there is only 1 request and only 1 response.**

You can also ask just for the person's details:
```
query {
  persons {
    name
    age
  }
}
```

