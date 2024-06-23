import React from 'react'
import parse from 'html-react-parser'
const Items = ({ icon, title, year, desc ,org}) => {
    return (
        <div className="exp-item">
            <div className="exp-icon">
                {icon}
            </div>
            <div className="exp-date">
                {year}
            </div>
            <div className="exp-subtitle">
            {title}
            </div>
            <div className="exp-org">
            {org}
            </div>
            <div className="exp-desc">
                {desc}
            </div>
        </div>
    )
}

export default Items
