import React from 'react'
import Desription from './description/Description'
import {Projects} from './projects/Projects'
import SignUp from './components/SignUp'
import Position from './navigation/Position'

const MainPage = () => {
  return (
    <div className='main_page'>
        <Desription/>
        <Projects/>
        <SignUp/>
        <Position/>
    </div>
  )
}

export default MainPage;