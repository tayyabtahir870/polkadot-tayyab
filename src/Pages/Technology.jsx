import React from 'react'
import Built from '../Components/Technology/Built'
import Connecting from '../Components/Technology/Connecting'
import Github from '../Components/Technology/Github'
import Groundbreaking from '../Components/Technology/Groundbreaking'
import Hero from '../Components/Technology/Hero'
import Network from '../Components/Technology/Network'
import Parachains from '../Components/Technology/Parachains'
import Roadmap from '../Components/Technology/Roadmap'
import Secuirtymodel from '../Components/Technology/Secuirtymodel'
import Teams from '../Components/Technology/Teams'

function Technology() {
  return (
    <div>
        <Hero/>
        <Github/>
        <Network/>
        <Connecting/>
        <Built/>
        <Parachains/>
        <Groundbreaking/>
        <Secuirtymodel/>
        <Roadmap/>
        <Teams/>
    </div>
  )
}

export default Technology