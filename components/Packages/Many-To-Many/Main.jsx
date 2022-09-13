import React from 'react'
import CompaniesIndex from '../../Shared/Companies'
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
    </div>
  )
}

export default PackagesManyToManyMain
