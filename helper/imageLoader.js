const imageLoader = ({ src, width, quality }) => {
  // return `http://localhost:3000/${src}?w=${width}&q=${quality || 80}}`
  return `https://live-commerce-jade.vercel.app/${src}?w=${width}&q=${quality || 80}}`
}
export default imageLoader
