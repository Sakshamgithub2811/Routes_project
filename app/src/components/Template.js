import React from 'react'

const Template = ({title,desc1,desc2,image,formType,setIsLoggedIn}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
        </div>
      
    </div>
  )
}

export default Template
