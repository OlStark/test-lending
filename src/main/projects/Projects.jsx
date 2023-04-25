import React, { useState } from 'react';
import './index.css'
import User from '../../image/user.jpg'


const Projects = () => {
    const [exampl] = useState([
        {id: 1, order: " Большой частный дом", user: "Иван", review: "«Работу выполнили в срок, качество на высоте!»"},
        {id: 2, order: " Хозпостройка", user: "Дмитрий", review: "«Работу выполнили в срок, качество на высоте!»"},
        {id: 3, order: " Ларек шаурмы", user: "Сергей", review: "«Работу выполнили в срок, качество на высоте!»"}
    ])
  return (
    <div className='projects'>
        <h2>Что говорят о нас наши клиенты:</h2>
        <div className='examples'>
        {exampl.map(card => 
            <div className='example'>
                <h3>Объект:{card.order}</h3>
                <div className='user'>
                    <img src={User} alt="" className='user_icon'/>
                    <h4>{card.user}</h4>
                </div>
                <div className='user_review'>
                <h5>{card.review}</h5>
                </div>
            </div>)}
    </div>
    </div>
  )
}

export {Projects};