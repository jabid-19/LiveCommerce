import { useForm } from 'react-hook-form'
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    console.log(data)
  }
  return (
    <div data-aos="zoom-in">
      <form className="mt-10 max-w-4xl" onSubmit={handleSubmit(onSubmit)}>
        {/* <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-4xl my-10"
        />
        <br /> */}
        <div className="mb-5">
          <label className="text-xl font-semibold text-neutral pl-2">Email*</label>
          <input
            name="email"
            placeholder="example@example.com"
            type="email"
            {...register('email', { required: 'Email is required' })}
            className={`w-full
                  px-3
                  py-2
                  h-14
                  text-gray-800
                  border-2
                  border-gray-300
                  rounded
                  outline-primary
                  min-w-xs
                  ${
                    errors.email?.message &&
                    'border-2 border-error outline-error focus:border-error focus:outline-error'
                  }
                  `}
          />
          <div className="text-error text-xs font-bold pl-2 pt-2">{errors.email?.message}</div>
        </div>
        <div className="mb-5">
          <label className="text-xl font-semibold text-neutral pl-2">Password*</label>
          <input
            name="password"
            type="password"
            {...register('password', { required: 'Password is required' })}
            className={`w-full
                  px-3
                  py-2
                  h-14
                  text-gray-800
                  border-2
                  border-gray-300
                  rounded
                  outline-primary
                  min-w-xs
                  ${
                    errors.password?.message &&
                    'border-2 border-error outline-error focus:border-error focus:outline-error'
                  }
                  `}
          />
          <div className="text-error text-xs font-bold pl-2 pt-2">{errors.password?.message}</div>
        </div>
        <input
          className="btn btn-primary font-bold w-full min-w-xs normal-case text-white rounded cursor-pointer h-14 text-xl border-2"
          type="submit"
          value="Login"
        />
        {/* <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-4xl"
        />
        <br /> */}
        {/* <input
          type="submit"
          value="Sign In"
          className="btn btn-primary text-white w-full max-w-4xl mt-10"
        /> */}
      </form>
    </div>
  )
}

export default LoginForm
