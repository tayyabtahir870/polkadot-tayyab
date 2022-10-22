import React from 'react'
import Grant from '../Components/Community/Grant'
import Involved from '../Components/Community/Involved'
import Join from '../Components/Community/Join'
import Twitter from '../Components/Community/Twitter'
import Upcoming from '../Components/Community/Upcoming'
import Validator from '../Components/Community/Validator'

function Community() {
  return (
    <div>
        <Join/>
        <Twitter/>
        <Involved/>
        <Validator/>
        <Grant/>
        <Upcoming/>
    </div>
  )
}

export default Community