import React from 'react'

function SectionProcess() {
    return (
        <section className='section--process'>
            <div className='section--inner'>
                <div className='section--title'>
                    <h3>Процесс обучения</h3>
                    <h2>Практика с преподавателем, теория — в удобное время</h2>
                    <p>В дистанционных курсах время с преподавателем уходит на практику, а теорию вы изучаете дома. У вас будут учебники по дизайну от Бюро Горбунова, а два раза в неделю вы будете работать с преподавателем на практических занятиях.</p>
                </div>
                <div className='flex flex--column gap--32'>
                    <img src='' alt=''/>
                    <caption>Занятия устроены так, чтобы вы видели экран преподавателя и могли работать сами</caption>
                </div>
            </div>
            <div className='section--inner'>
                <div className='section--title'>
                    <h2>Совместная работа</h2>
                    <p>Студенты выполняют задания в одном файле, поэтому вы всегда можете посмотреть на работу других. И даже прокомментировать.</p>
                </div>
                <div className='flex flex--column gap--32'>
                    <img src='' alt=''/>
                    <caption>Студенты выполняют задания одновременно в общем файле</caption>
                </div>
            </div>

            <div className='section--inner'>
                <div className='process--books'>
                    <h2>Учите теорию по учебникам Бюро Горбунова</h2>
                    <p>В стоимость курса включена годовая подписка на учебники</p>
                    <div className='process--books--img'>
                        <img src='' alt='' />
                        <div className='factoid'><div className='caption'>Можно читать на телефоне</div></div>
                    </div>
                </div>
            </div>

            <div className='section--inner'>
                <div className='section--title'>
                    <h2>Ценность bootcamp.by не в теории, а обратной связи. Мы даём фидбек два раза в неделю</h2>
                    <p>Работать и учиться тяжело, поэтому постарались сделать занятия как можно короче. На практике и мастерклассах присутствуют несколько групп, поэтому у вас будет возможность пообщаться с другими дизайнерами потока.</p>
                </div>    
                <div className='schedule flex flex--column gap--32'>
                    <div className='flex--grid gap--16'>
                        <div className='col'>
                            <div className='day caption'>Пн</div>
                            <div className='lesson lesson--live lesson--2hours'>
                                <div className="title">Практика с учителем</div>
                                <div className="duration">2 часа</div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='day caption'>Вт</div>
                            <div className='lesson lesson--group lesson--1hour'>
                                <div className="title">Групповая комната</div>
                                <div className="duration">1 час</div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='day caption'>Ср</div>
                            <div className='lesson lesson--live lesson--2hours'>
                                <div className="title">Практика с учителем</div>
                                <div className="duration">2 часа</div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='day caption'>Чт</div> 
                            <div className='lesson lesson--group lesson--1hour'>
                                <div className="title">Ответы на вопросы</div>
                                <div className="duration">1 час</div>
                            </div>
                            <div className='lesson lesson--live lesson--1hour'>
                                <div className="title">Мастеркласс</div>
                                <div className="duration">1 час</div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='day caption'>Пт</div>
                            <div className='lesson lesson--duedate lesson--2hours'>
                                <div className="title">Срок сдачи домашней работы</div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='day weekdays caption'>Сб и Вс</div>
                            <div className='lesson lesson--weekdays lesson--2hours'>
                                <div className="title">Наслаждайтесь отдыхом с семьей и друзьями</div>
                            </div>
                        </div>
                    </div>
                    <div className='caption'>Все занятия записываются, поэтому ничего страшного, если вы пропустите одно или несколько.</div>
                </div>
            </div>
            
            <div className='section--inner'>
                <div className='section--title'>
                    <h2>Нужен только компьютер или ноутбук</h2>
                    <p>Для выпол­не­ния зада­ний нужен ком­пью­тер с нормальным интер­не­том. Все программы работают в браузере, поэтому вам не надо покупать макбук или айфон. Нач­ните работать на том обо­ру­до­ва­нии, кото­рое у вас уже есть.</p>
                </div>
            </div>

        </section>
    )
}

export default SectionProcess
