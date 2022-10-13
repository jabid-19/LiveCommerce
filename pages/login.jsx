import AuthenticationMain from '../components/Authentication/Main'
import Head from 'next/head'

const Login = () => {
  return (
    <div>
      <Head>
        <title>Go Laiv | Login</title>
        <meta name="description" content="Go Laiv Login Section" />
        <meta property="og:site_name" content="Go Laiv" />
        <meta property="og:title" content="Go Laiv Login" />
        <meta property="og:description" content="Login/Register to get started…" />
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
      <AuthenticationMain />
    </div>
  )
}

export default Login
