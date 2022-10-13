import React from 'react'

const PrimaryButton = ({
  children,
  textClass,
  bgClass,
  borderClass,
  hoverText,
  hoverBg,
  hoverBorder,
  horizontalPadding,
}) => {
  return (
    <button
      className={`${bgClass} ${textClass} ${borderClass} ${hoverText} ${hoverBg} ${hoverBorder} ${horizontalPadding} py-3 flex justify-center items-center rounded-md border-2 duration-500 normal-case`}>
      {children}
    </button>
  )
}

export default PrimaryButton
