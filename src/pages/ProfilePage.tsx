import React from 'react'
import "./ProfilePage.css"
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
const ProfilePage = () => {
  return (
    <div className='profile-page'>
         <div className='profile-page-header'>
            <img src="https://placehold.co/150x150" alt="profile-page"/>
            <div className='profile-page-orders'>
                <p>On Going Orders <span>3</span></p>
            </div>
            <div className='profile-page-links'>
                 <ul>
                    <li>
                          <Link to={"/profileDetails"}>Profile Details <Icon icon="mingcute:right-line" className='arrow-icon'/></Link>
                    </li>
                    <li>
                    <Link to={"/settings"}>Settings <Icon icon="mingcute:right-line" className='arrow-icon'/></Link>
                    
                    </li>
                    <li>
                    <Link to={"/orderHistory"}>Order History <Icon icon="mingcute:right-line" className='arrow-icon'/></Link>
                    </li>
                    <li>
                    <Link to={"/signout"}>Sign Out</Link>
                    </li>
                 </ul>
            </div>
         </div>
    </div>
  )
}

export default ProfilePage
