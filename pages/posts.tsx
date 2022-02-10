import type { NextPage } from "next"
import Link from "next/link"
import Layout from "@components/Layout"

const Posts: NextPage = () => (
  <Layout title="Posts">
    <main>
      <h1>Posts</h1>

      <Link href="/">
        <a>Start</a>
      </Link>
    </main>
  </Layout>
)

export default Posts
