import { css } from '@emotion/react'
import tw from 'twin.macro'
import { Layout } from 'systems/Core'
import { useQuery, gql } from '@apollo/client'
import { Spinner } from '@chakra-ui/spinner'
import { Event } from 'strapi-types'

type QueryResult = {
  events: Event[]
}

const EVENTS_QUERY = gql`
  query EventsQuery {
    events {
      id
      title
    }
  }
`

export default function Home() {
  const { data, loading } = useQuery<QueryResult>(EVENTS_QUERY)

  return (
    <Layout title="Events App">
        <div css={styles.root}>
          {loading ?
            <Spinner /> :
            data?.events.map(({ id, title }) => <h1>{id} : {title}</h1>)
          }
        </div>
    </Layout>
  )
}

const styles = {
  root: css`
    ${tw`flex flex-col items-center justify-center width[100vw] height[100vh]`}
    h1 {
      ${tw`sm:(text-3xl) md:(text-5xl) hover:(text-primary-500) cursor-pointer`}
    }
  `,
}
