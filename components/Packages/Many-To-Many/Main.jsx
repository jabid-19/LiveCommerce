import React from 'react'
import Heading from '../../About/Sections/Heading'
import CompaniesIndex from '../../Shared/Companies'
import Faq from '../../Shared/Faq'
import ChatWithCustomer from './section/ChatWithCustomer'
// import Header from './section/Header'
import ManyToMany from './section/ManyToMany'

const PackagesManyToManyMain = () => {
  const headingContent = {
    pageTitle: '',
    title: 'Connect anywhere anytime!',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium architecto blanditiis ex beatae voluptates fugiat animi vitae a quasi quia.',
    buttonContent1: 'Start free trial',
    buttonContent2: '',
  }
  return (
    <div className="bg-[#e8e4d9]">
      {/* <Header /> */}
      <Heading headingContent={headingContent} />
      <ManyToMany />
      {/* <CompaniesIndex /> */}
      <ChatWithCustomer />
      <Faq />
    </div>
  )
}

export default PackagesManyToManyMain
