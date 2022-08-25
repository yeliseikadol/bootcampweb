import React from 'react'

function ToolTag(props) {

const {iconUrl, altText, toolname} = props

    return (
        <div className='tooltag'>
            <img className='tooltag--icon' src={iconUrl} alt={altText}/>
            <div className='tooltag--name'>{toolname}</div>
        </div>
    )
}

export default ToolTag
