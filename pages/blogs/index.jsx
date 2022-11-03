import React from 'react'
import Blogs from '../../components/LandingPage/Sections/Blogs'

export const getStaticProps = async () => {
  const res = await fetch('https://dev-golaiv.pantheonsite.io/wp-json/wp/v2/posts?_embed')
  const data = await res.json()
  return {
    props: { propData: data },
  }
}

const blogs = ({ propData }) => {
  return (
    <div className="text-center bg-[#e8e4d9]">
      <Blogs propData={propData} />
    </div>
  )
}

export default blogs
