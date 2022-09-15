import React from 'react'
import { TiTick } from 'react-icons/ti'
import { pricingPlans } from '../../../data/plans'
const Pricing = () => {
  return (
    <div className="w-auto mx-6 mt-12 lg:min-h-[85vh] lg:mt-16 2xl:w-[1400px] 2xl:mx-auto">
      <h1 className="text-5xl font-extrabold text-center">Plans & Pricing</h1>
      <p className="text-center mt-5 font-bold">Select plan below</p>
      <div className="flex flex-col justify-between items-center gap-5 mt-10 md:flex-row">
        {pricingPlans?.map((plan) => (
          <div
            className="bg-white px-5 py-5 shadow-lg rounded-xl flex flex-col max-w-[1/3]"
            key={plan.key}>
            <h1 className="text-xl font-bold">{plan.title}</h1>
            <p className="py-4 border-b text-neutral">{plan.details}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature} className="py-3">
                  <TiTick className="inline-block mr-2 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
