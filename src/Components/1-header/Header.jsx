import React, { useEffect, useState } from 'react'
import './Header.css'
import { Navbar, Offcanvas } from 'react-bootstrap'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.setAttribute('class', theme);
    }, [theme]);


    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }


    return (
        <header className="d-flex justify-content-between align-items-center px-5 mt-5">
            <button className="menu-show" onClick={handleShow}>
                <MenuRoundedIcon />
            </button>
            <nav>
                <ul className="">
                    <li><a href="#About">About</a></li>
                    <li><a href="#EduAndExp">Education</a></li>
                    <li><a href="#EduAndExp">Experience</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>

            <button className="toggle-night-mode" onClick={toggleTheme}>
                {theme === 'light' ? <LightModeRoundedIcon style={{ color: "rgba(9, 166, 33, 0.4)"}} /> : <DarkModeOutlinedIcon className="moon-icon-style icon-color" />}
                {/* <DarkModeOutlinedIcon 
                    className="moon-icon-style icon-color"
                /> */}
            </button>

            {show &&
                (
                <div className='over-layer-nav'>
                    <ul className="model-list">
                        <li>
                            <button onClick={handleClose} className="close-menu-btn">
                                <CloseRoundedIcon className="icon-color"/>
                            </button>
                        </li>
                        <li><a href="">About</a></li>
                        <li><a href="">Article</a></li>
                        <li><a href="">Project</a></li>
                        <li><a href="">Speaking</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                )}
        </header>
    )
}

export default Header
