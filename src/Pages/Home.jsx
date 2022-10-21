import React from 'react'
import Hero from '../Components/Elements/Hero'
import Cards from '../Components/Elements/Cards'
import Powering from '../Components/Elements/Powering'
import Source from '../Components/Elements/Source'
import Founded from '../Components/Elements/Founded'
import Blog from '../Components/Elements/Blog'


function Home() {
  return (
    <div>
      <Hero/>
      <Cards/>
      <Powering/>
      <Source/>
      <Founded/>
      <Blog/>
     
    </div>
  )
}

export default Home