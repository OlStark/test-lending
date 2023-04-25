import React from 'react'
import Desription from './description/Description'
import {Projects} from './projects/Projects'
import Form from './components/Form'
import Position from './navigation/Position'

const MainPage = () => {
  return (
    <div className='main_page'>
        <Desription/>
        <Projects/>
        <Form/>
        <Position/>
    </div>
  )
}

export default MainPage;