import React from 'react'
import {ReactComponent as ChatIcon} from '../assets/icons/phone--chat.svg'

export default function PhoneNumber() {
  return (
      <div className="phone--number flex gap--8"><ChatIcon/><a href='tel:+375296976057'>+375&nbsp;29&nbsp;6976057</a></div>
  )
}
