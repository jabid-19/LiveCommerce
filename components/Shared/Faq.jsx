import React from 'react'
import { FaqData } from '../../assets/data/Faq'

const Faq = () => {
  return (
    <div className="lg:min-h-[75vh] min-h-[800px] flex items-center bg-slate-200">
      <div className="mx-6 mt-16 h-full w-auto flex flex-col-reverse items-center lg:flex-row lg:justify-between md:items-center md:gap-2 lg:mt-0 2xl:w-[1400px] 2xl:mx-auto">
        <div className="space-y-4 w-[100vw]">
          {FaqData?.map((item, index) => (
            <details className="p-6 group border-b-2 border-b-neutral" key={index}>
              <summary className="flex items-center justify-between cursor-pointer">
                <h5 className="text-2xl font-bold text-gray-900">{item.title}</h5>
                <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 rounded-full sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-lg text-gray-700">{item.description}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
