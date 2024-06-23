import React, { useEffect, useState } from 'react'
import './About.css'
import Lottie from 'lottie-react'
import lab from '../../assets/animations/lab.json'
import CV from '../../assets/cv.pdf'

const About = () => {
   


    useEffect(() => {
        // delete the animation when the page size is small
        window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
                document.getElementById('lottie-animation').style.display = 'none';
            }else{
                document.getElementById('lottie-animation').style.display = 'block';
            }
        })
    }, [])
    return (
        <section className='about' id='About'>
            <h2 className='section-title text-center mb-5'>
                About  
                <span> Me</span> 
            </h2>

            <div className='about-content d-flex'>

                <div className='about-info'>
                    <h3 className='sub-title'>
                        Personal Info
                    </h3>

                    <ul className='info-list-about d-grid'>
                        <li className="info_item">
                            <span className='info_title'>Frist Name : </span>
                            <span className='info_desc'>Nader</span>
                        </li>
                        <li className="info_item">
                            <span className='info_title'>Last Name : </span>
                            <span className='info_desc'>Mamdouh</span>
                        </li>
                        <li className="info_item">
                            <span className='info_title'>Age : </span>
                            <span className='info_desc'>22</span>
                        </li>
                        <li className="info_item">
                            <span className='info_title'>Freelance : </span>
                            <span className='info_desc'>Available </span>
                        </li>
                        <li className="info_item">
                            <span className='info_title'>Phone : </span>
                            <span className='info_desc'>+201125257350</span>
                        </li>
                        <li className="info_item">
                            <span className='info_title'>Nationality : </span>
                            <span className='info_desc'>Egyptian </span>
                        </li>
                        <li className="info_item">
                            <span className='info_title'>Address : </span>
                            <span className='info_desc'>Cairo</span>
                        </li>
                        <li className="info_item">
                            <span className='info_title'>Language : </span>
                            <span className='info_desc'>Arabic & English </span>
                        </li>
                        <li className="info_item">
                            <span className='info_title'>Email : </span>
                            <span className='info_desc'>Nadermamdouh68@gmail.com</span>
                        </li>
                    </ul>
                    <a className='icon-cv cv-btn' href={CV} download>
                    Download CV
                        <span className='icon-send cv-icon'></span>
                    </a>
                </div>

                <div className='about-img animation' id='lottie-animation'>
                    <Lottie animationData={lab} loop={true} height={37} width={37} style={{width: '420px'}} />
                </div>
            </div>

        </section>
    )
}

export default About
