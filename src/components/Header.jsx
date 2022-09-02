import React from 'react'
import { ReactComponent as PromoBannerHorn } from '../assets/icons/promo--banner--horn.svg'
import PhoneNumber from './PhoneNumber'

export default function Header() {
  return (
    <header className='section--header'>
      <div className="promo--banner text--small flex gap--8">
        <PromoBannerHorn/>
        Открыта запись в группы с 26 сентября и 17 ноября
      </div>
      <div className="section--header--menu">
        <div className='left flex gap--32'>
            <div className="logotype">Школа<br/>Кадола</div>
        </div>
        
        <div className='right flex gap--32'>
          <a href="https://instagram.com/shkolakadola">@shkolakadola</a>
          <PhoneNumber/>

        </div>
        </div>
    </header>
  )
}
