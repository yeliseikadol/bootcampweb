import React from 'react'
import ToolTag from './ToolTag'
import logoFigma from '../assets/icons/logo_figma_32.png'
import logoMiro from '../assets/icons/logo_miro_32.png'
import logoNotion from '../assets/icons/logo_notion_32.png'
import logoAgile from '../assets/icons/logo_agile_32.png'
import logoApple from '../assets/icons/logo_apple_32.png'
import logoMaterial from '../assets/icons/logo_material_32.png'
import logoCode from '../assets/icons/logo_code_32.png'

function SectionLead() {
    return (
        <section className='flex flex--column'>
            <div className='section--inner'>
                <div className='section--title'>
                    <h3>Что это за курс</h3>
                    <h2>Буткемп — это интенсивный практический курс, нацеленный на&nbsp;уверенное выполнение частных заказов и&nbsp;работе в&nbsp;компании</h2>
                </div>
                <div className='flex flex--list gap--16 flex--wrap'>
                    <ToolTag iconUrl={logoFigma} toolname='Figma'/>
                    <ToolTag iconUrl={logoMiro} toolname='Miro'/>
                    <ToolTag iconUrl={logoNotion} toolname='Notion'/>
                    <ToolTag iconUrl={logoAgile} toolname='Web'/>
                    <ToolTag iconUrl={logoApple} toolname='iOS'/>
                    <ToolTag iconUrl={logoMaterial} toolname='Android'/>
                    <ToolTag iconUrl={logoCode} toolname='HTML/CSS/React'/>
                </div>
            </div> 
        </section>
    )
}

export default SectionLead
