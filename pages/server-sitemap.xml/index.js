import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps = async (ctx) => {
  let blogs = await fetch('https://dev-golaiv.pantheonsite.io/wp-json/wp/v2/blogs?_embed')
  blogs = await blogs.json()
  const newsSitemaps = blogs.map((item) => ({
    loc: `https://www.golaiv.com/${item.slug.toString()}`,
    lastmod: new Date().toISOString(),
  }))

  const fields = [...newsSitemaps]

  return getServerSideSitemap(ctx, fields)
}

export default function Site() {}
