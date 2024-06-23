import React from 'react'
import './EduAndExp.css'
import {EduAndExpData} from './EduAndExpData'
import Items from './Items'
const EduAndExp = () => {
    return (
        <section className='EduAndExp' id='EduAndExp'>
            <h2 className='section-title text-center mb-5'>
                Education 
                <span> & Experience</span> 
            </h2>
            <div className="exp-container d-grid ">
                <div className="exp-data">
                    {EduAndExpData.map((item) => {
                        if (item.category === "Experience") {
                            return <Items key={item.id} {...item} />
                        }   
                    })}
                </div>
                <div className="exp-data">
                    {EduAndExpData.map((item) => {
                        if (item.category === "Education") {
                            return <Items key={item.id} {...item} />
                        }   
                    })}
                </div>
            </div>
        </section>
    )
}
export default EduAndExp
