import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
const tableHead = [
  { title: 'Features' },
  { title: 'Lite' },
  { title: 'Standard' },
  { title: 'Enterprise' },
]
const tableData = [
  {
    key: 1,
    head: 'Dashboard',
    lite: 1,
    standard: 1,
    enterprise: 5,
    tooltip:
      'The dashboard provides access to your user data: Key Performance Indicators (KPIs) and Key Metrics.',
  },
  {
    key: 2,
    head: 'Onboarding',
    lite: 'Optional al cost',
    standard: 'Optional al cost',
    enterprise: 'One season',
    tooltip:
      'Our Live Video Shopping experts will support you getting started by teaching you the LiveCommerce player, app and tools, as well as best practices and benchmarks on how to optimize.',
  },
  {
    key: 3,
    head: 'Dashboard integration included',
    lite: 1,
    standard: 1,
    enterprise: 1,
    tooltip: 'This is the number of integrations to a Dashboard you"ll get.',
  },
  {
    key: 4,
    head: 'Users',
    lite: 5,
    standard: 5,
    enterprise: 'Unlimited',
    tooltip: 'This is the number of users you are allowed to have per Dashboard.',
  },
  {
    key: 5,
    head: 'Languages',
    lite: 'All available',
    standard: 'All available',
    enterprise: 'All available',
    tooltip: 'This is the number of languages you can live video stream in.',
  },
  {
    key: 6,
    head: 'Payment method',
    lite: 'Invoice',
    standard: 'Invoice',
    enterprise: 'Invoice',
    tooltip: 'This is the payment method/s that are available to you.',
  },
]
const Comparisons = () => {
  return (
    <div className="w-auto pb-12 lg:pb-36 mx-6 mt-12 lg:mt-36 2xl:w-[1400px] 2xl:mx-auto lg:mb-0">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-white text-2xl">
              {tableHead.map((head, index) => (
                <th className="bg-primary" key={index}>
                  {head.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr key={data.key}>
                <th>{data.head}</th>
                <td className="text-neutral">
                  <div className="relative inline-block mr-5">
                    <AiOutlineInfoCircle className="text-gray-400 " />
                  </div>
                  {data.lite}
                </td>
                <td className="text-neutral">{data.standard}</td>
                <td className="text-neutral">{data.enterprise}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Comparisons
