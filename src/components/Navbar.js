import React, { useState } from 'react'
import { ReactComponent as CloseMenu } from '../icons/x.svg'
import { ReactComponent as OpenMenu } from '../icons/menu.svg'

export default function Navbar(){

    //state to toggle the hamburger and close/X icon
    const [click, setClick] = useState(false)

    //function to handle toggling the icons
    function handleClick(){
        setClick(!click)
    }

    //function that closes the menu once something 
    //is clicked in the menu by setting click to false
    function closeMenu(){
        setClick(false)
    }

    return (
        <div className='header'>
            <div>
                <img className='logo' src='https://pocketrn.com/static/media/Logo.b9fcd954.png' alt='logo' />
            </div>
            {/* this div checks click in state and uses a ternary to show the 
            close/X icon or the hamburger icon */}
            <div className='menu' onClick={handleClick}>
                {click ? (
                    <CloseMenu />
                ) : (
                    <OpenMenu />
                )}
            </div>
            {/* the ul here uses a ternary to toggle between 2 classes and
             changes the name of the class depending on the state of click. 
             If its active then it is displayed using opacity set to 1. */}
            <div className='list'>
                <ul onClick={closeMenu} className= {click ? 'options active' : 'options'} >
                    <li className='home'><span>Home</span></li>
                    <li><span>Patients</span></li>
                    <li><span>Caregivers</span></li>
                    <li><span>Nurses</span></li>
                    <li><span>Healthcare Providers</span></li>
                    <li><span>About</span></li>
                    <li><span>Contact</span></li>
                    <li className='signup' >
                        <button>SIGN UP / LOG IN</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}