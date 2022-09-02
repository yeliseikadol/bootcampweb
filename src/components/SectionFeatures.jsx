import React from 'react'
import featurePractice from '../assets/images/features_practice-2-time-week.jpg'

function SectionFeatures() {

    const handleClick = event => {
        event.currentTarget.classList.toggle('is-flipped');
      };

    return (
        <section className='section--features'>
            <div className="section--inner">

            <div className="section--title">
                <h3>Особенности</h3>
            </div>
            <div className='grid'>
                <div className='feature--block feature--1'>
                    <div className='card' onClick={handleClick}>
                        <div className="card--face card--face--front">
                            <h2>Сертификат IBM в конце курса</h2>
                        </div>
                        <div className="card--face card--face--back">
                            <p>Сертификат IBM в конце курса</p>
                        </div>
                    </div>
                    
                </div>
                <div className='feature--block feature--2'>
                    <div className="card" onClick={handleClick}>
                        <div className="card--face card--face--front">
                            <h4>Практика с 1 занятия, 2 фидбека в неделю</h4>
                            <div className="card--image">
                                <div className='features--image--practice'/>
                            </div>
                        </div>
                        <div className="card--face card--face--back">
                            <p>Практика с 1 занятия, 2 фидбека в неделю</p>
                        </div>
                    </div>
                </div>
                <div className='feature--block feature--3'>
                    <div className="card" onClick={handleClick}>
                        <div className="card--face card--face--front">
                            <h3>Инструкции для работы пока не хватает опыта</h3>
                        </div>
                        <div className="card--face card--face--back">
                            <p>Инструкции для работы пока не хватает опыта</p>
                        </div>
                    </div>
                </div>
                <div className='feature--block feature--4'>
                    <div className="card" onClick={handleClick}>
                        <div className="card--face card--face--front">
                            <h3>Инструкции для работы пока не хватает опыта</h3>
                        </div>
                        <div className="card--face card--face--back">
                            <p>Инструкции для работы пока не хватает опыта</p>
                        </div>
                    </div>
                </div>
                <div className='feature--block feature--5'>
                    <div className="card" onClick={handleClick}>
                        <div className="card--face card--face--front">
                            <h3>2 проекта: мобильное и десктоп приложения</h3>
                        </div>
                        <div className="card--face card--face--back">
                            <p>2 проекта: мобильное и десктоп приложения</p>
                        </div>
                    </div>
                </div>
                <div className='feature--block feature--6'>
                    <div className="card" onClick={handleClick}>
                        <div className="card--face card--face--front">
                            <h3>Поиск работы уже на 6 неделе после начала обучения</h3>
                        </div>
                        <div className="card--face card--face--back">
                            <p>Поиск работы уже на 6 неделе после начала обучения</p>
                        </div>
                    </div>
                </div>
                <div className='feature--block feature--7'>
                    <div className="card" onClick={handleClick}>
                        <div className="card--face card--face--front">
                            <h3>Живой проект на React в конце курса</h3>
                        </div>
                        <div className="card--face card--face--back">
                            <p>Живой проект на React в конце курса</p>
                        </div>
                    </div>
                </div>
            </div>


            </div>
            
        </section>
    )
}

export default SectionFeatures