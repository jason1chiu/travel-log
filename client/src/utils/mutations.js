import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        firstName
        lastName
        email
        location
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!, $location: String!) {
    addUser(username: $username, firstName: $firstName, lastName: $lastName, email: $email, password: $password, location: $location) {
      token
      user {
        _id
        username
        firstName
        lastName
        email
        location
      }
    }
  }
`;

export const UPDATE_USER_ACCOUNT = gql`
  mutation UpdateUserAccount($username: String, $firstName: String, $lastName: String, $email: String, $location: String) {
    updateUserAccount(username: $username, firstName: $firstName, lastName: $lastName, email: $email, location: $location) {
      _id
      username
      firstName
      lastName
      email
      location
    }
  }
`;