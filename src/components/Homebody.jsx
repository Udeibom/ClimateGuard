import React from 'react'
import Header from './Header'
import Popular from './Popular'
import Recommended from './Recommended'
import Subscription from './Subscription'

function Homebody() {
  return (
    <div className='home-body'>
      <Header />
      <Popular />
      <Recommended />
      <Subscription />
    </div>
  )
}

export default Homebody
