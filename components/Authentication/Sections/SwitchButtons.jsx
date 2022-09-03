import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { useState } from 'react'

const SwitchButtons = () => {
  const [visibleLoginItem, setVisibleLoginItem] = useState(true)
  const [visibleRegisterItem, setVisibleRegisterItem] = useState(false)

  const loadRegisterForm = () => {
    setVisibleLoginItem(false)
    setVisibleRegisterItem(true)
    // setKey('register')
  }

  const loadLoginForm = () => {
    setVisibleRegisterItem(false)
    setVisibleLoginItem(true)
    // setKey('login')
  }
  return (
    <div>
      <div className="btn-group">
        <button className="btn btn-primary w-1/2 text-white" onClick={loadLoginForm}>
          Login
        </button>
        <button className="btn w-1/2" onClick={loadRegisterForm}>
          Create Account
        </button>
      </div>
      {visibleLoginItem && !visibleRegisterItem && <LoginForm />}
      {!visibleLoginItem && visibleRegisterItem && <RegisterForm />}
    </div>
  )
}

export default SwitchButtons
