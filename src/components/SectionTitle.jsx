import React from 'react'

function SectionTitle() {
    return (
        <section className='title--section flex flex--column no--margin'>
          <video src=''></video>
          <div className='hero--banner flex flex--column gap--32'>
            <h4>Интенсивный курс</h4>
            <h1>UX/UI-дизайнер с&nbsp;нуля</h1>
            <div className='features flex flex--list gap--8'>
              <div className='feature'>Онлайн</div>
              <div className='dot'></div>
              <div className='feature'>10&nbsp;недель</div>
              <div className='dot'></div>
              <div className='feature'>Сертификат IBM</div>
              <div className='dot hidden'></div>
              <div className='feature'>1560&nbsp;BYN</div>
              <div className='dot'></div>
              <div className='feature'>Рассрочка на&nbsp;3&nbsp;платежа</div>
            </div>
            <div className='button--bar'>
              <button>Записаться</button>
            </div>
            <div className='groups'>
              Идёт набор в&nbsp;группы 26&nbsp;сентября и&nbsp;7&nbsp;ноября 2022
            </div>
        </div>
      </section>
    )
}

export default SectionTitle
