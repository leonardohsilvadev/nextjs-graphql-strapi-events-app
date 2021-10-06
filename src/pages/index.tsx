import { css } from '@emotion/react'
import tw from 'twin.macro'
import { Layout } from 'systems/Core'

export default function Home() {
  return (
    <Layout title="Events App">
      <div css={styles.root}>
        <h1>Hello World</h1>
      </div>
    </Layout>
  )
}

const styles = {
  root: css`
    ${tw`flex items-center justify-center width[100vw] height[100vh]`}
    h1 {
      ${tw`sm:(text-3xl) md:(text-5xl) hover:(text-primary-500) cursor-pointer`}
    }
  `,
}
