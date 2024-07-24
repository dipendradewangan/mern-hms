import React from 'react'
import "./Header.css"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const info = {
    logoUrl : 'https://marketplace.canva.com/EAE8eSD-Zyo/1/0/1600w/canva-blue%2C-white-and-green-medical-care-logo-oz1ox2GedbU.jpg',
    orgName : "Dhamtari Christian Hospital",
    tagline : "To Serve Not to be served!"
}

const Header = () => {
    return (
        <div className='header w-full bg-white flex items-center justify-between pr-3 '>
            <div className='org-info flex gap-3 font-extrabold text-["50px"] items-center'>
                <img src={info.logoUrl} className='w-20'/>
                <h1>{info.orgName}</h1>
            </div>
            <div>
            <Button color="secondary" endIcon={<SendIcon />}>Logout</Button>
            </div>
        </div>
    )
}

export default Header
