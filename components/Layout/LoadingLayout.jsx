import Head from 'next/head'

const LoadingLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Go Laiv | Loading</title>
        <meta name="description" content="Go Laiv Login Section" />
        <meta property="og:site_name" content="Go Laiv" />
        <meta property="og:title" content="Go Laiv loading" />
        <meta property="og:description" content="Page loading or authenticating..." />
        <meta property="og:url" content="https://www.golaiv.com/login" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://live-commerce-jade.vercel.app/_next/static/media/camera.3f4e1679.avif?q=80%7D&w=640"
        />
        <meta
          property="og:image:secure_url"
          content="https://live-commerce-jade.vercel.app/_next/static/media/camera.3f4e1679.avif?q=80%7D&w=640"
        />
        {/* recommended dimensions 1200×630 pixels */}
        <meta property="og:image:width" content="407" />
        <meta property="og:image:height" content="581" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://live-commerce-jade.vercel.app/_next/static/media/camera.3f4e1679.avif?q=80%7D&w=640"
        />
        {/* <meta property="twitter:site" content="@golaiv" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center py-[5%] lg:py-[2%] md:px-[15%] min-h-[70vh]">
        {children}
      </div>
    </>
  )
}

export default LoadingLayout
