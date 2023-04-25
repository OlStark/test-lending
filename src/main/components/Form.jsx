import { useState } from "react";
import './Form.css'

const Form = ({handleClick}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');


    return (
        <div className="form">

            <span>Ваше имя:</span>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Иван Иванов"
            />
         
            <span>Ваш номер телефона:</span>
            <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7-999-999-99-99"
            />

            <span>Ваш емейл:</span>
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exampe@mail.com"
            />

            <button
                type="submit"
                onClick={() => handleClick(name, email, phone)}
            >Связаться с нами
            </button>
        </div>
    )
}

export default Form;