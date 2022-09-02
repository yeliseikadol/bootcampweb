import './components/Sk/style.sass'
import SkSectionHeader from './components/Sk/SkSectionHeader';
import Section from './components/Sk/Section';
import SkHeader from './components/Sk/SkHeader';
//import SkHeroSection from './components/Sk/SkHeroSection';
import SkTag from './components/Sk/SkTag';
import Button from './components/Sk/Button';
import SkFooter from './components/Sk/SkFooter';
import {ReactComponent as Figma} from './assets/icons/figma.svg'
import {ReactComponent as Notion} from './assets/icons/notion.svg'
import {ReactComponent as Web} from './assets/icons/web.svg'
import {ReactComponent as Ios} from './assets/icons/ios.svg'
import {ReactComponent as Android} from './assets/icons/android.svg'
import {ReactComponent as Html} from './assets/icons/html.svg'
import CurriculumWeek from './components/Sk/CurriculumWeek';

function App() {
  return (
    <div className="App">
      
      <SkHeader/>

      <main>
        {/* шапка 
        <SkHeroSection/>*/}

        {/* видео */}
        <Section>
          <SkSectionHeader
            eyebrow='Что это за&nbsp;курс'
            title='Интенсивный практический курс, нацеленный на&nbsp;уверенное выполнение частных заказов и&nbsp;работе в&nbsp;компании'
            />
            <div className='tag-row'>
              <SkTag tagType='tag-filled'><Figma/>Figma</SkTag>
              <SkTag tagType='tag-filled'><Notion/>Notion</SkTag>
              <SkTag tagType='tag-filled'><Web/>Web</SkTag>
              <SkTag tagType='tag-filled'><Ios/>iOS</SkTag>
              <SkTag tagType='tag-filled'><Android/>Android</SkTag>
              <SkTag tagType='tag-filled'><Html/>HTML/CSS</SkTag>
            </div>
        </Section>

        {/* особенности */}
        <Section>
          <SkSectionHeader eyebrow='Особенности'/>
          <div className='cards-grid features'>

            <div className='cards-row'>
              <div className='card card-2-1 feature-1'>Практика с преподавателем 2 раза в неделю</div>
              <div className='card card-1-2 feature-2'>Сертификат IBM в середине курса</div>
            </div>

            <div className='cards-row'>
              <div className='card feature-3'>2 крепких проекта в портфолио: сайт и мобильное приложение</div>
            </div>

            <div className='cards-row cols-1-2'>
              <div className='card card-1-2 feature-4'>Помощь с поиском работыво время и после учёбы</div>
              <div className='card card-2-1 feature-5'>Инструкции для работы пока не хватает опыта</div>
            </div>

            <div className='cards-row'> 
              <div className='card feature-7'>Обучение вёрстке компонентов и стилей</div>
              <div className='card feature-6'>Мастерклассы каждую неделю</div>
            </div>

            <div className='cards-row'>         
              <div className='card feature-8'>Поддержка и фидбек от комьюнити навсегда</div>
            </div>
          </div>
        </Section>




        {/* как проходит обучение */}
        <Section className='process-section add-top'>
          <SkSectionHeader
            eyebrow='Как проходит обучение'
            title='Практика с преподавателем, теория — в удобное время'
            text1='В дистанционных курсах время с преподавателем уходит на практику, а теорию вы изучаете дома. У вас будут учебники по дизайну от Бюро Горбунова, а два раза в неделю вы будете работать с преподавателем на практических занятиях.'
            text2='Студенты работают в одном файле, поэтому могут смотреть на работу других и комментировать. Преподаватель даёт фидбек, поэтому студенты избегают базовых ошибок при обучении.'
            />
            <div className='process-1'></div>
            <div className='caption'>Занятия устроены так, чтобы студенты видели экран преподавателя и могли работать сами.</div> 
        </Section>

        {/* мастерклассы */}
        <Section className='process-section'>
          <SkSectionHeader
            title='Мастерклассы'
            text1='В конце недели преподаватель в деталях разбирает определённый навык работы, отвечает на вопросы и разбирает частые ошибки.'
            />
            <div className='process-2'/>
            <div className='caption'>На мастерклассах преподаватель показывает качественные примеры и учит хитростям.</div> 
        </Section>

        {/* домашка */}
        <Section className='process-section'>
          <SkSectionHeader
            title='Домашние задания'
            text1='Студенты получают домашние задания на неделю, специально под тему занятий и мастеркласса. Срок сдачи — в пятницу в 23:59. Если студент не сдаст работу в срок 2 раза, то он лишается проверки домашних заданий. Кроме 2 практических занятий, и обсуждения задания в чатах, по четвергам можно задать вопросы лично преподавателю.'
            text2='Задания по дизайну проверит личный наставник. Он укажет на ошибки, поможет понять сложные моменты и даст советы по дальнейшей подготовке. Все наставники школы — опытные практики.'
            />
            <div className='process-3'/>
            <div className='caption'>Все задания связаны друг с другом и погружают вас в контекст работы в компании и на фрилансе.</div> 
        </Section>

        {/* комьюнити 
        <Section className='process-section'>
          <SkSectionHeader
            title='Комьюнити'
            text1='Студенты занимаются в командах по 20–30 человек, чтобы им было нескучно и интересно. 
            Вместе они обсуждают сложные вопросы, поддерживают друг друга, участвуют в предметных викторинах и марафонах, а некоторые даже устраиваются на одну работу.'
            />
            <div className='img'/>
            <div className='caption'>Студенты выполняют задания одновременно в общем файле.</div> 
        </Section>
        */}

        {/* книги */}
        <Section className='process-section'>
          <SkSectionHeader
            title='Книги'
            text1='Дома студенты работают с интерактивными книгами по изучаемой теме. В них есть объяснения по каждой теме, примеры и тесты в конце каждой главы.'
            text2='Кроме того, преподаватели готовят авторские методички по самым важным и сложным темам работы.'
            />
            <div className='process-4'/>
        </Section>

        <Section className='process-section process-books add-bottom'>
          <div className='row'>
            <SkSectionHeader className='books-text'
              title='В стоимость курса включена годовая подписка на&nbsp;учебники'
              text1='Типографика и&nbsp;вёрстка, Пользовательский интерфейс, Информационный стиль, Как написать, Кунг-фу редактора и&nbsp;Управление проектами, людьми и&nbsp;собой.'>
                <p>Подробнее о&nbsp;книгах <a href='https://bureau.ru/projects/bookshelf-bureau/'>на&nbsp;сайте Бюро Горбунова</a></p>
              </SkSectionHeader>
            <div className='books-img'>
            </div>
          </div>
        </Section>
        
        <Section className='add-top'>
          <SkSectionHeader
            eyebrow='Расписание'
            title='Ценность Школы Кадола в практических занятиях,
            у нас нет сонных лекций по презентациям'
             text1='Работать и учиться тяжело, поэтому студенты посещают только практические занятия. По вторникам вы можете поработать с остальными студентами в общей комнате.'
            />
            <div className='schedule-img'/>
            <div className='caption'>Все занятия записываются, поэтому ничего страшного, если вы пропустите одно или несколько.</div>
        </Section>

        <Section>
          <SkSectionHeader
            eyebrow='Программа'
            title='От простого к сложному'
            />
          <div className='curruculum-rows'>
            <div className='curriculum-row'>
              <CurriculumWeek
                week='1 неделя'
                title='Основы'
                text='В чём заключается работа дизайнера, отличия между фрилансом и работой в компании, азы работы в Фигме.'
                task='Задание. Виджет'
              />
              <CurriculumWeek
                week='2 неделя'
                title='Понимание задачи'
                text='Сбор информации о пользователях, задачи пользователей и сценарии, обратная связь, жизненный цикл пользователя.'
                task='Задание. Экран'
              />
              <CurriculumWeek
                week='3 неделя'
                title='Поиск решения'
                text='Исследование конкурентов. Генерация идейи выбор лучших. Критерии оценки. Быстрое прототипирование.'
                task='Задание. Серия экранов'
              />
            </div>
            <div className='curriculum-row'>
              <CurriculumWeek
                week='4 неделя'
                title='Проверка решения'
                text='Сбор обратной связи. Столкновение с реальностью. Тестирование на пользователях. Визуальное решение.'
                task='Задание. Библиотека стилей'
              />
              <CurriculumWeek
                week='5 неделя'
                title='Передача в разработку'
                text='Знакомство с кодом. Возможности и ограничения платформ. Стоимость разработки. Правила передачи макетов в разработку.'
                task='Задание. Публикация проекта'
              />
              <CurriculumWeek
                week='2 недели'
                title='Перерыв'
                text='Время передохнуть, подтянуть хвосты, полирнуть проект и позаниматься своими делами.'
                weekStyle='week-rest'
              />
            </div>
            <div className='curriculum-row'>
              <CurriculumWeek
                week='6 неделя'
                title='Карьера'
                text='Поиск работы, подготовка портфолио, оформление профиля в соцсетях, примеры выполнения тестовых заданий.'
                task='Задание. Портфолио'
              />
              <CurriculumWeek
                week='7 неделя'
                title='Мобильный дизайн'
                text='Особенности мобильных платформ. Дизайн для iOS, iPadOS и Android. Фирменные библиотеки компонентов.'
                task='Задание. Мобильное приложение'
              />
              <CurriculumWeek
                week='8 неделя'
                title='Веб дизайн'
                text='Композиция для больших экранов. Адаптивная вёрстка. Принцип Mobile first. Аналитика. Дашборды и таблицы.'
                task='Задание. Веб приложение'
              />
            </div>
            <div className='curriculum-row'>
              <CurriculumWeek
                week='9 неделя'
                title='Запуск'
                text='Вёрстка проекта в HTML, публикация
                в интернете'
                task='Задание. Публикация проекта'
                weekStyle='week-launch'
              />
              <CurriculumWeek
                week='10 неделя'
                title='Устранение пробелов'
                text='Публикация проекта, обновление портфолио'
                task='Задание. Портфолио'
              />
              <CurriculumWeek
                week='Навсегда'
                title='Помощь и фидбек'
                text='Доступ к материалам, чатам с фидбеком и мастерклассам'
                weekStyle='week-rest'
              />
            </div>

          </div>
        </Section>

        <Section>
          <SkSectionHeader
            eyebrow='Результат'
            title='Продвинутое владение Фигмой и портфолио для работы'
            text1='Про­грамма курса наце­лена на то, чтобы вы начали работать самостоятельно. Поэтому все упраж­не­ния, зада­ния и темы наце­лены именно на технические скиллы, а не на тео­рию и общую дизайнерскую обра­зо­ван­ность. Смотрите, какие работы создают наши уче­ники в конце курса:'
            />
        </Section>

        <Section>
          <SkSectionHeader
            title='Сертификаты'
            text1='Все ученики получают сертификаты в конце обучения:'
            />
        </Section>

        <Section>
          <SkSectionHeader
            eyebrow='Преподаватели'
            title='Опытные дизайнеры из Беларуси'
            text1='Нам важно, чтобы преподаватели были в схожих со студентами условиях, и знали специфику поиска работы для белорусских дизайнеров в локальных и международных компаниях.'
            />
        </Section>

        <Section>
          <SkSectionHeader
            eyebrow='Нужен только компьютер или ноутбук'
            text1='Для выпол­не­ния зада­ний нужен ком­пью­тер с нормальным интер­не­том. Все программы включены в стоимость курса и работают в браузере, поэтому вам не надо покупать макбук или айфон. Нач­ните работать на том обо­ру­до­ва­нии, кото­рое у вас уже есть.'
            />
        </Section>

        <Section>
          <SkSectionHeader
            eyebrow='Стоимость и группы'
            title='Поступить в Bootcamp'
            />
            <Button>Поступить</Button>
        </Section>

        <Section>
          <SkSectionHeader
            eyebrow='Вопросы и ответы'
            title='Популярные вопросы'
            />
        </Section>

        <Section></Section>
        <SkFooter/>
        
      </main>
    </div>
  );
}

export default App;
