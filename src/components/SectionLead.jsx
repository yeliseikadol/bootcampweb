import React from 'react'
import ToolTag from './ToolTag'

function SectionLead() {
    return (
        <section className='flex flex--column'>
            <div className='section--inner'>
                <div className='section--title'>
                    <h3>Что это за курс</h3>
                    <h2>Буткемп — это интенсивный практический курс, нацеленный на&nbsp;уверенное выполнение частных заказов и&nbsp;работе в&nbsp;компании</h2>
                </div>
                <div className='flex flex--list gap--16 flex--wrap'>
                    <ToolTag toolname='Figma'/>
                    <ToolTag toolname='Miro'/>
                    <ToolTag toolname='Notion'/>
                    <ToolTag toolname='Web'/>
                    <ToolTag toolname='iOS'/>
                    <ToolTag toolname='Android'/>
                    <ToolTag toolname='HTML/CSS/React'/>
                </div>
            </div> 
        </section>
    )
}

export default SectionLead
