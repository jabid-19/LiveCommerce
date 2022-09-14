import React from 'react'
import CompaniesIndex from '../../Shared/Companies'
import Faq from '../../Shared/Faq'
import ChatWithCustomer from './section/ChatWithCustomer'
import Header from './section/Header'
import ManyToMany from './section/ManyToMany'

const PackagesManyToManyMain = () => {
  return (
    <div>
      <Header />
      <ManyToMany />
      <CompaniesIndex />
      <ChatWithCustomer />
      <Faq />
    </div>
  )
}

export default PackagesManyToManyMain
