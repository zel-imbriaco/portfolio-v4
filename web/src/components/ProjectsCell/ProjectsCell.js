import { Link, routes } from '@redwoodjs/router'

import Projects from 'src/components/Projects'

export const QUERY = gql`
  query POSTS {
    projects {
      id
      title
      body
      website
      createdAt
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No projects yet. '}
      <Link
        to={routes.newProject()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ projects }) => {
  return <Projects projects={projects} />
}
