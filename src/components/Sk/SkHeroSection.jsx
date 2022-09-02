import React from 'react'
import titleVideo from '../../TitleVideo.mp4'
import Button from './Button'
import Section from './Section'
import SkSectionHeader from './SkSectionHeader'
import SkTag from './SkTag'

export default function HeroSection() {

    var EmbedVideo = function(props) {
        return (
            <div className='video-bg' dangerouslySetInnerHTML={{ __html: `
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
        <div className='title--section'>
            <EmbedVideo src={titleVideo} className='video-div'/>
            <Section>
                <SkSectionHeader
                    eyebrow='Интенсивный курс'
                    title='Ваша карьера UX/UI-дизайнера начинается здесь'
                >
                <div className="tag-rows-stack">
                    <div className='tag-row'>
                        <SkTag>Онлайн</SkTag>
                        <SkTag>10&nbsp;недель</SkTag>
                        <SkTag>Сертификат IBM</SkTag>
                    </div>
                    <div className='tag-row'>
                        <SkTag>Сообщество</SkTag>
                        <SkTag>Помощь в поиске работы</SkTag>
                    </div>
                </div>
                </SkSectionHeader>
                    
                <div className='row button-bar'>
                    <Button>Поступить</Button>
                    <div className='stack'>
                        <h4>1560 BYN</h4>
                        <div className="text--small">или 560 BYN в месяц</div>
                    </div>
                </div>
            </Section>
      </div>
    )
}
