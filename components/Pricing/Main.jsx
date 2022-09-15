import React from 'react'
import Comparisons from './Sections/Comparisons'
import Pricing from './Sections/Pricing'
import TalkToSales from './Sections/TalkToSales'

const PricingMain = () => {
  return (
    <div className="relative w-full bg-base-200">
      <TalkToSales />
      <Pricing />
      <Comparisons />
    </div>
  )
}

export default PricingMain
