import { useForm } from 'react-hook-form'
const RegisterForm = () => {
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
        {/* <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 max-w-4xl mt-10">
          <input type="text" placeholder="Fist Name" className="input input-bordered w-full" />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full mt-10 lg:mt-0"
          />
        </div> */}
        {/* <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-4xl my-10"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-4xl"
        />
        <br />
        <input
          type="submit"
          value="Sign Up"
          className="btn btn-primary text-white w-full max-w-4xl mt-10"
        /> */}
        <div className="mb-5 flex flex-col-reverse md:flex-row gap-4">
          <div className="md:w-1/2">
            <label className="text-xl font-semibold text-neutral pl-2">First Name*</label>
            <input
              name="firstName"
              placeholder="John"
              type="text"
              {...register('firstName', { required: 'First Name is required' })}
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
                    errors.firstName?.message &&
                    'border-2 border-error outline-error focus:border-error focus:outline-error'
                  }
                  `}
            />
            <div className="text-error text-xs font-bold pl-2 pt-2">
              {errors.firstName?.message}
            </div>
          </div>
          <div className="md:w-1/2">
            <label className="text-xl font-semibold text-neutral pl-2">Last Name*</label>
            <input
              name="LastName"
              placeholder="Doe"
              type="text"
              {...register('LastName', { required: 'Last Name is required' })}
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
                    errors.LastName?.message &&
                    'border-2 border-error outline-error focus:border-error focus:outline-error'
                  }
                  `}
            />
            <div className="text-error text-xs font-bold pl-2 pt-2">{errors.LastName?.message}</div>
          </div>
        </div>
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
            placeholder="8 characters, one uppercase letter, one number"
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
        <div className="mb-5">
          <label className="text-xl font-semibold text-neutral pl-2">Confirm Password*</label>
          <input
            name="confirmPassword"
            type="password"
            {...register('confirmPassword', { required: 'Confirm Password is required' })}
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
                    errors.confirmPassword?.message &&
                    'border-2 border-error outline-error focus:border-error focus:outline-error'
                  }
                  `}
          />
          <div className="text-error text-xs font-bold pl-2 pt-2">
            {errors.confirmPassword?.message}
          </div>
        </div>
        <input
          className="btn btn-primary font-bold w-full min-w-xs normal-case text-white rounded cursor-pointer h-14 text-xl border-2"
          type="submit"
          value="Sing Up"
        />
      </form>
    </div>
  )
}

export default RegisterForm
