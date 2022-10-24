import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Base( props

) {
  return (
    <div>
      <div className='p-1'>
        <img className='img-fluid support-img p-2 ' src="Assests/support.svg" alt="" />
      </div>
        <Header/>
        {
          props.children
        }
        <Footer/>
    </div>
  )
}

export default Base