const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    password: String
    location: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!, location: String!): Auth
    updateUserInfo(username: String, firstName: String, lastName: String, email: String, location: String): User
    updateUserPW(password: String!, password: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

// export the typeDefs
module.exports = typeDefs;