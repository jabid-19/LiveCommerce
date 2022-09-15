import AuthenticationMain from '../components/Authentication/Main'
import Head from 'next/head'

const Login = () => {
  return (
    <div>
      <Head>
        <title>Go Laiv | Login</title>
        <meta name="description" content="LiveCommerce Pricing Sections" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthenticationMain />
    </div>
  )
}

export default Login
