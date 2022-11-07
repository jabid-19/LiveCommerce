import { forwardRef } from 'react'

const InputField = forwardRef(
  ({ type, name, label, className, placeholder, errorMsg, ...rest }, ref) => {
    return (
      <div>
        {label && (
          <label htmlFor={name} className="text-sm leading-[18px] font-medium">
            {label} <span className="text-[#F0676F]">*</span>
          </label>
        )}
        <input
          ref={ref}
          id={name}
          name={name}
          placeholder={placeholder}
          type={type || 'text'}
          {...rest}
          className={`
              w-full
              mt-2
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

        {errorMsg && <div className="text-[#F0676F] text-xs font-bold pl-2 pt-1">{errorMsg}</div>}
      </div>
    )
  }
)

InputField.displayName = 'InputField'

export default InputField
