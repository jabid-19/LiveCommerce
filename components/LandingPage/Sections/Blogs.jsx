import SingleBlog from './SingleBlog'

const Blogs = ({ propData }) => {
  return (
    <div className="py-8">
      <div>
        <h3 className="text-2xl lg:text-4xl font-bold text-black">Blogs</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-14 my-14">
          {propData.map((prop) => (
            <SingleBlog key={prop.id} prop={prop}></SingleBlog>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
