import React from 'react'
import Blogabout from '../Components/About/Blogabout'
import Building from '../Components/About/Building'
import Foundedpic from '../Components/About/Foundedpic'
import Touch from '../Components/About/Touch'
import Web3 from '../Components/About/Web3'

function Aboutpage() {
  return (
    <div>
        <Web3/>
        <Building/>
        <Foundedpic/>
        <Touch/>
        <Blogabout/>
    </div>
  )
}

export default Aboutpage