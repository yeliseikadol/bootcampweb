import React from 'react'

const tagTypes = [
    "tag-outlined",
    "tag-filled"
]

export default function SkTag({
    tagType,
    children
}) {

    const checkTagType = tagTypes.includes(tagType) ? tagType : tagTypes[0];

  return (
    <div className={`tag ${checkTagType}`}>
      {children}
    </div>
  )
}
