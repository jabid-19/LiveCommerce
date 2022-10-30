const wpImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 80}`
}
export default wpImageLoader
