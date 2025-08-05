import React from 'react'
import './title.css'

const HomeTitle = ({text1 ,text2}) => {
    return (
        <div className='title'>
            <h2>{text1}</h2>
            <p>{text2}</p>
        </div>
    )
}

export default HomeTitle
