import { getSession, signIn } from 'next-auth/react'
import React from 'react'
import { BsFacebook, BsGoogle, BsTwitter } from 'react-icons/bs'

const SocialLogin = () => {
  return (
    <div className="flex flex-col gap-y-2 md:flex-row md:gap-[2%] my-7">
      <button
        className="pl-[14px] lg:pl-0 w-full lg:w-[32%] py-[7px] border-[1px] rounded-[10px] border-[#EAEBEB] flex lg:justify-center items-center"
        onClick={() => signIn('facebook')}>
        <BsFacebook className="w-4 h-4" />
        <p className="pl-[14px] text-[16px] leading-5 font-bold">Facebook</p>
      </button>
      <button
        className="pl-[14px] lg:pl-0 w-full lg:w-[32%] py-[7px] border-[1px] rounded-[10px] border-[#EAEBEB] flex lg:justify-center items-center"
        onClick={() => signIn('google')}>
        <BsGoogle className="w-4 h-4" />
        <p className="pl-[14px] text-[16px] leading-5 font-bold">Google</p>
      </button>
      <button className="pl-[14px] lg:pl-0 w-full lg:w-[32%] py-[7px] border-[1px] rounded-[10px] border-[#EAEBEB] flex lg:justify-center items-center">
        <BsTwitter className="w-4 h-4" />
        <p className="pl-[14px] text-[16px] leading-5 font-bold">Twitter</p>
      </button>
    </div>
  )
}

export default SocialLogin

export const getServerSideProps = async (context) => {
  const { req } = context
  const session = await getSession({ req })
  if (session) {
    return {
      redirect: { destination: '/' },
    }
  }
}
