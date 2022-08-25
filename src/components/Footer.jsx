import React from 'react'
import PhoneNumber from './PhoneNumber'

export default function Footer() {
  return (
    <footer>
        <h2>bootcamp.by</h2>
        <div className="flex--grid gap--32">
            <div className="col">
                <div><a href="mailto:school@bootcamp.by">school@bootcamp.by</a></div>
                <div><PhoneNumber/></div>
            </div>
            <div className="col">
                <div>ИП Кадол Е. Н.</div>
                <div><a href="/" target='blank_'>Реквизиты</a></div>
            </div>
            <div className="col">
                <div>Сухаревская улица, 62</div>
                <div>Минск, Беларусь, 220059</div>
            </div>
            <div className="col"></div>
        </div>
    </footer>
  )
}
