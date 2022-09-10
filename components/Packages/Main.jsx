import React from 'react'
import CompaniesIndex from '../Shared/Companies'
import Faq from '../Shared/Faq'
import Features from './section/Features'
import OneToOneIndex from './section/OneToOne'

const PackagesMain = () => {
  return (
    <div>
      <OneToOneIndex />
      <CompaniesIndex />
      <Features />
      <Faq />
    </div>
  )
}

export default PackagesMain
