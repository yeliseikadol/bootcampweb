import React from 'react'

export default function SectionEnroll() {
  return (
    <section className='section--enroll'>
        <div className="section--inner">
            <div className="section--title">
                <div className='text--inverted'>Стоимость и группы</div>
                <h2 className='accent--inverted'>Поступить в Bootcamp</h2>
            </div>
            <div className="enroll--form">
                <div>Интенсивный курс</div>
                <h2 className='enroll--form--title'>UX/UI-дизайнер с нуля</h2>
                <p>Вечерняя форма:<br/>Практикумы с 18:00 до 20:00 по Минскому времени</p>
                <div className="prices">
                    <div className="price--old">1690 BYN</div>
                    <div className="price--new">1560 BYN</div>
                </div>
                <div className="price--alert">Каждый поток дорожает. Раньше запись — ниже цена.</div>
                <button>Поступить</button>
            </div>
            
        </div>
    </section>
  )
}
