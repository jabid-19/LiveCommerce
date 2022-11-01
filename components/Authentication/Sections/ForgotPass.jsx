import Link from 'next/link'

const ForgotPass = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] md:min-h-[60vh] lg:min-h-[65vh] 2xl:min-h-[75vh]">
      <div className="w-full md:w-2/3 lg:w-1/3 p-10 py-16 mx-auto bg-white rounded-2xl">
        <h1 className="text-[#1A1A1A] text-xl md:text-3xl font-bold mb-7">Forgot Password?</h1>
        <label className="text-sm leading-[18px] font-semibold">
          Email <span className="text-[#F0676F]">*</span>
        </label>
        <input
          name="email"
          placeholder="email@email.com"
          type="email"
          className={`
          w-full
          mt-3
          pl-[14px]
          h-11
          border-[0.5px]
          border-[#EAEBEB]
          rounded-[10px]
          outline-[0.5px]
          outline-[#CC955C]/40
          min-w-xs
          `}
        />

        <button className="mt-6 text-[16px] font-bold rounded-[10px] w-full h-11 bg-[#CC955C]/40 cursor-pointer">
          Find Now
        </button>

        <div className="text-xs flex items-center mt-4">
          <p className="mr-1">Or go back to</p>
          <Link href="/login">
            <a className="text-[#CC955C]">login</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPass
