import { forwardRef, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const PasswordField = forwardRef((props, ref) => {
  const { label, name, className, errorMsg, placeholder, ...rest } = props
  const [showPass, setShowPass] = useState(false)

  return (
    <div>
      {label && (
        <label htmlFor={name} className="text-sm leading-[18px] font-medium">
          {label} <span className="text-[#F0676F]">*</span>
        </label>
      )}
      <div className="mt-2 relative">
        <input
          ref={ref}
          id={name}
          name={name}
          placeholder={placeholder}
          type={showPass ? 'text' : 'password'}
          {...rest}
          className={`
              w-full
              mt-0
              pl-[14px]
              h-11
              border-[0.5px]
              border-[#EAEBEB]
              rounded-[10px]
              outline-[0.5px]
              outline-[#CC955C]/40
              min-w-xs
              ${className}
              `}
        />
        <span className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer text-xl">
          {!showPass ? (
            <AiOutlineEye onClick={() => setShowPass(true)} />
          ) : (
            <AiOutlineEyeInvisible onClick={() => setShowPass(false)} />
          )}
        </span>
      </div>

      {errorMsg && <div className="text-[#F0676F] text-xs font-bold pl-2 pt-1">{errorMsg}</div>}
    </div>
  )
})

export default PasswordField
