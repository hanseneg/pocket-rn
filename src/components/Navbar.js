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
                <div className='logo'>
                    <img src='https://pocketrn.com/static/media/Logo.b9fcd954.png' alt='logo' />
                </div>

                <div onClick={handleClick}>
                    {click ? (
                        <OpenMenu />
                    ) : (
                        <CloseMenu />
                    )}
                </div>

                <ul className={click ? 'options-open' : 'options-closed'}>
                    <li>Home</li>
                    <li>Patients</li>
                    <li>Caregivers</li>
                    <li>Nurses</li>
                    <li>Healthcare Providers</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>SIGN UP / LOG IN</li>
                </ul>

            </div>

        </div>
        
    )
}