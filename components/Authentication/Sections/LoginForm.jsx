const LoginForm = () => {
  return (
    <div data-aos="zoom-in">
      <form>
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
          value="Sign In"
          className="btn btn-secondary text-white w-full max-w-4xl mt-10"
        />
      </form>
    </div>
  )
}

export default LoginForm
