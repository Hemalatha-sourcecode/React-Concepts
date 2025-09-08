import React from 'react'

const DynamicHtml = ({htmlString}) => {
  return (
    <div dangerouslySetInnerHTML={{__html: htmlString}}></div>
  )
}

export default DynamicHtml;