import React from 'react'
import './commonTitle.css'

const CommonTitle = ({word1 , word2}) => {
    return (
        <div className='commonTitle'>
            <span>{word1}</span>
            <span>{word2}</span>
        </div>
    )
}

export default CommonTitle
