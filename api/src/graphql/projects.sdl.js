import gql from 'graphql-tag'

export const schema = gql`
  type Project {
    id: Int!
    title: String!
    body: String
    website: String!
    createdAt: DateTime!
  }

  type Query {
    projects: [Project!]!
    project(id: Int!): Project!
  }

  input CreateProjectInput {
    title: String!
    body: String
    website: String!
  }

  input UpdateProjectInput {
    title: String
    body: String
    website: String
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project!
    updateProject(id: Int!, input: UpdateProjectInput!): Project!
    deleteProject(id: Int!): Project!
  }
`
