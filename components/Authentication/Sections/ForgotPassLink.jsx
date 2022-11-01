import Link from 'next/link'

const ForgotPassLink = () => {
  return (
    <div className="text-xs flex items-center mt-4">
      <p className="mr-1">Forgot your account?</p>
      <Link href="/forgot-password">
        <a className="text-[#CC955C]">Find Now</a>
      </Link>
    </div>
  )
}

export default ForgotPassLink
