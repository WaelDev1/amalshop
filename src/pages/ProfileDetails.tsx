import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import './ProfileDetails.css'
const ProfileDetails = () => {

    const [edit,setEdit] = useState(false)
  return (
    <div className='profile-details'>
        <div className='profile-details-links'>
            <Link to={"/profilePage"}><Icon icon="mingcute:left-line" className='arrow-icon'/> Profile Details</Link>
        </div>
        <div className='profile-details-img'>
            <img src="https://placehold.co/150x150" alt="profile-img"/>

        </div>
        <div className='profile-details-username'>
           <h3> Hello, Nicole</h3> 
           {!edit && (
             <Icon icon="uil:edit" onClick={() => setEdit(true)} className='edit-icon'/>
           )}
        </div>
        <div className="user-details">
            <div className="user-details-wrapper">
               <div>
                   <Icon icon="ph:user-light" className='icon'/>
               </div>
               <div>
               {edit ? (
                    <input value="username here"  type="text"/>  
                ) : (
                    <p>username here</p>
                )}              
               </div>
            </div>
            <div className="user-details-wrapper">
               <div>
                   <Icon icon="entypo:email" className='icon'/>
               </div>
               <div>
               {edit ? (
                    <input value="email here"  type="email"/>  
                ) : (
                    <p>email here</p>
                )}
               </div>
            </div>
            <div className="user-details-wrapper">
               <div>
                   <Icon icon="clarity:date-line" className='icon'/>
               </div>
               <div>
               {edit ? (
                    <input value="username here"  type="date"/>  
                ) : (
                    <p>date here</p>
                )}
               </div>
            </div>
            <div className="user-details-wrapper">
               <div>
                   <Icon icon="ep:location" className='icon'/>
               </div>
               <div>
               {edit ? (
                    <input value="location here"  type="text"/>  
                ) : (
                    <p>location here</p>
                )}
               </div>
            </div>
            <div className="user-details-wrapper">
               <div>
                   <Icon icon="ph:phone" className='icon'/>
               </div>
               <div>
               {edit ? (
                    <input value="12345678"  type="number"/>  
                ) : (
                    <p>phone here</p>
                )}
               </div>
            </div>
            {
                edit && (
                    <div className='form-btns'>
                       <button type='submit'>Update</button>
                       <button className='' onClick={() => setEdit(false)}>Cancel</button>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default ProfileDetails
