import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaqData } from '../../assets/data/Faq'

const Faq = () => {
  return (
    <div className="min-h-[75vh] py-20 md:py-36 max-w-7xl p-8 mx-auto">
      <h1 className="text-6xl text-center text-black font-bold mb-4">
        <span
          className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block"
          data-aos="fade-up">
          <span className="relative text-white">FAQs</span>
        </span>
      </h1>
      {FaqData?.map((item, index) => (
        <details className="p-6 group border-b-2 border-b-neutral" key={index}>
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-xl font-bold text-gray-900 md:text-2xl">{item.title}</h5>
            <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 rounded-full sm:p-3">
              <AiOutlinePlus className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45" />
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-lg text-gray-700">{item.description}</p>
        </details>
      ))}
    </div>
  )
}

export default Faq
