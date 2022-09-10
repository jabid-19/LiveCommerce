import React from 'react'
import CompaniesIndex from '../Shared/Companies'
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
