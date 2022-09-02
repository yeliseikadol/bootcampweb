import Button from './Sk/Button'
import React from 'react'
import titleVideo from '../TitleVideo.mp4'

function SectionTitle() {

      var EmbedVideo = function(props) {
        return (
            <div dangerouslySetInnerHTML={{ __html: `
            <video
              loop
              muted
              autoplay
              playsinline
              class="${props.className}"
            >
              <source src="${props.src}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            
          ` }}></div>
        )
    }

    return (
        <section className='title--section flex flex--column no--margin'>
          <EmbedVideo src={titleVideo} className='video--div'/>
          <div className='hero--banner flex flex--column gap--64'>
            <div className="flex flex--column gap--32">
            <h4>Интенсивный курс</h4>
            <h1 className='text--primary'>Ваша карьера UX/UI-дизайнера начинается здесь</h1>
            <div className='features flex flex--list gap--8'>
              <div className='feature'>Онлайн</div>
              <div className='dot'></div>
              <div className='feature'>10&nbsp;недель</div>
              <div className='dot'></div>
              <div className='feature'>Сертификат IBM</div>
              <div className='dot hidden'></div>
              <div className='feature'>Сообщество</div>
              <div className='dot'></div>
              <div className='feature'>Помощь в поиске работы</div>
            </div>
            </div>
              
            <div className='button--bar flex gap--32'>
              <Button>Поступить</Button>
                <div className='groups flex flex--column'>
                  <h4>1560 BYN</h4>
                  <div className="text--small">или 560 BYN в месяц</div>
              </div>
            </div>
        </div>
      </section>
    )
}

export default SectionTitle
