import React, { useState } from 'react'
import { ReactComponent as CloseMenu } from '../icons/x.svg'
import { ReactComponent as OpenMenu } from '../icons/menu.svg'

export default function Navbar(){

    const [click, setClick] = useState(false)

    function handleClick(){
        setClick(!click)
    }

    function closeMenu(){
        setClick(false)
    }

    return (
        <div className='header'>
            <div>
                <img className='logo' src='https://pocketrn.com/static/media/Logo.b9fcd954.png' alt='logo' />
            </div>
            <div className='menu' onClick={handleClick}>
                {click ? (
                    <CloseMenu />
                ) : (
                    <OpenMenu />
                )}
            </div>
            <div className='list'>
                <ul onClick={closeMenu} className= {click ? 'options active' : 'options'} >
                    <li className='home'>Home</li>
                    <li>Patients</li>
                    <li>Caregivers</li>
                    <li>Nurses</li>
                    <li>Healthcare Providers</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li className='signup' >
                        <button>SIGN UP / LOG IN</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}