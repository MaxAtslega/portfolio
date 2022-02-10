import GhostContentAPI from "@tryghost/content-api"

const api = new GhostContentAPI({
  url: "https://ghost-cms.atslega.network",
  key: "b343c980ff341b8c6f0d72e692",
  version: "v4",
})

export async function getAllPosts() {
  const posts = await api.posts.browse({ limit: "all" })
  return posts
}

export async function getRecentPosts() {
  const posts = await api.posts.browse({ limit: 10 })
  return posts
}
