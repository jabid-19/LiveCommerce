import React from 'react'
import CompaniesIndex from '../../Shared/Companies'
import Faq from '../../Shared/Faq'
import Features from './section/Features'
import OneToOneIndex from './section/OneToOne'

const PackagesOneToOneMain = () => {
  return (
    <div>
      <OneToOneIndex />
      <CompaniesIndex />
      <Features />
      <Faq />
    </div>
  )
}

export default PackagesOneToOneMain
