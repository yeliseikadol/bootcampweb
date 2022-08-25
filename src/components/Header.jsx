import React from 'react'
import PhoneNumber from './PhoneNumber'

export default function Header() {
  return (
    <header className='section--header'>
        <div className='left flex gap--32'>
            <div className="logo h3">bootcamp.by</div>
            <div className="logo--description">Интенсивные курсы в Беларуси</div>
        </div>
        
        <div className='right'>
            <PhoneNumber/>
        </div>
    </header>
  )
}
