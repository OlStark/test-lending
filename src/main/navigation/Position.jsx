import React from 'react';
import './index.css'

const Position = () => {
  return (

    <div className='map'>
      
        <a className='map_place' href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" >
          Москва
          </a>
          <a className='map_point' href="https://yandex.ru/maps/213/moscow/?ll=37.618970%2C55.751679&utm_medium=mapframe&utm_source=maps&z=17.25" >
            Россия — Яндекс Карты
          </a>
            <iframe title='map' src="https://yandex.ru/map-widget/v1/?ll=37.618970%2C55.751679&z=17.25">
              </iframe>
      </div>
  )
}

export default Position;

