import React from 'react'
import Easybuild from '../Components/Build/Easybuild'
import Herobuild from '../Components/Build/Herobuild'
import Substrate from '../Components/Build/Substrate'

function Build() {
  return (
    <div>
        <Herobuild/>
        <Easybuild/>
        <Substrate/>
    </div>
  )
}

export default Build