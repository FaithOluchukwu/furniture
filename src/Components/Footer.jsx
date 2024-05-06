'use client'
import React from 'react'
import Image from 'next/image'
import './Footer.css'
import { LuCopyright } from "react-icons/lu";
import logo from './images/logo.png'
import payment1 from '../Components/images/payment-img-1.png'
import payment2 from '../Components/images/payment-img-2.png'
import payment3 from '../Components/images/payment-img-3.png'
import payment4 from '../Components/images/payment-img-4.png'
// import payment1 from '../Images/payment-img-1.png'
// import payment2  from '../Images/payment-img-2.png'
// import payment3 from '../Images/payment-img-3.png'
// import payment4 from '../Images/payment-img-4.png'




const Footer = () => {
  return (
    <div className='footerSection'>
      <div className='footerSection1'>
      <div className='footerDivCatergory'>
          <h1>Category</h1>
          <ul>
            <li>About Us</li>
            <li>Delivery Info</li>
            <li>Privacy policy</li>
            <li>Brands</li>
            <li>Contact Us</li>
            <li>Returns</li>
            <li>Site Map</li>
          </ul>
      </div>

      <div className='footerDivQuick'>
          <h1>Quick Links</h1>
          <ul>
            <li>Store Location</li>
            <li>Order History</li>
            <li>Wish List</li>
            <li>Newsletter</li>
            <li>Specials</li>
            <li>Gift Certificate</li>
            <li>Affiliate</li>
          </ul>
      </div>


      <div className='footerDiveContact'>
          <h1>Contact Us</h1>
          <ul>
            <li>About Us</li>
            <li>Delivery Info</li>
            <li>Privacy policy</li>
            <li>Brands</li>
            <li>Contact Us</li>
            <li>Returns</li>
            <li>Site Map</li>
          </ul>
      </div>


      <div className='footerDivSupport'>
          <h1>Support</h1>
          <ul>
            <li>Store Location</li>
            <li>Order History</li>
            <li>Wish List</li>
            <li>Newsletter</li>
            <li>Specials</li>
            <li>Gift Certificate</li>
            <li>Affliate</li>
          </ul>
      </div>
    </div>


       <div className='footerpaymentsection'>
        
       <div className='footerSubDiv'>
              <p><LuCopyright /> All rights reserved Made by <span>ThemeTags</span></p>
          
                      <div className='logoDiv'>
                            <Image src={logo} alt='' width={170}/>
                      </div>
                    <div className='footerpaymentDiv'>
                             <Image src={payment1}  alt='' className='paymentimg'/>
                              <Image src={payment2}  alt='' className='paymentimg'/>
                              <Image src={payment3}  alt='' className='paymentimg'/>
                              <Image src={payment4}  alt='' className='paymentimg'/>
                    </div>
           
           
            </div>
                    
        
        </div> 

 
    </div>
  )
}

export default Footer
