import React from 'react'
import CompaniesIndex from './section/Companies'
import Features from './section/Features'
import OneToOneIndex from './section/OneToOne'

const PackagesMain = () => {
  return (
    <div>
      <OneToOneIndex />
      <CompaniesIndex />
      <Features />
    </div>
  )
}

export default PackagesMain
