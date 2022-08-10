const RegisterForm = () => {
  return (
    <div data-aos="zoom-in">
      <form>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 max-w-4xl mt-10">
          <input type="text" placeholder="Fist Name" className="input input-bordered w-full" />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full mt-10 lg:mt-0"
          />
        </div>
        <input
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
          className="btn btn-secondary text-white w-full max-w-4xl mt-10"
        />
      </form>
    </div>
  )
}

export default RegisterForm
