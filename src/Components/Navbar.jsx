'use client'

import React, { useEffect, useState } from 'react'
import './Navbar.css'

import { IoMailUnreadOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbCaretDownFilled } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { RiShoppingBasketLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import Image from 'next/image';
import logo from './images/logo.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Link from 'next/link';

const Navbar = () => {
    const [showSideBar, setShowSideBar] = useState(false);

    // Ensure AOS is initialized only on the client side
    useEffect(() => {
        if (typeof window !== 'undefined') {
            AOS.init();
        }
    }, []);

    const handleShowSideBar = () => {
        setShowSideBar(true);
    }

    const handleHideSideBar = () => {
        setShowSideBar(false);
    }

    return (
        <div>
            <div className='myNavBar'>
                <div className='topNav'>
                    <ul>
                        <li><IoMailUnreadOutline />groshop@gmail.com</li>
                        <li><MdOutlineLocationOn />Washington, New York City</li>
                        <li>English <TbCaretDownFilled /></li>
                        <li>$USDC <TbCaretDownFilled /></li>
                        <li>Dark <IoMdMoon /></li>
                    </ul>
                </div>

                <div className='bottomNav'>
                    <Image src={logo} alt='' width={180} />

                    <div className='bottomNavRight'>
                        <ul>
                            <li><span>Browse Category </span>  <IoIosArrowDown /></li>
                            <li className='blogDrop2'>Home <IoIosArrowDown />
                                <div className='blogDropDown2' data-aos="fade-up" data-aos-duration="1000">
                                    <Link href={'/products'}>
                                        <p>Grocery Store</p>
                                    </Link>
                                    <p>Natural Store</p>
                                    <p>Organic Store</p>
                                    <p>Halel Meat Store</p>
                                    <p>Meat Store</p>
                                    <p>Medicine Store</p>
                                    <p>Furniture Store</p>
                                </div>
                            </li>
                            <li className='blogDrop'>Product <IoIosArrowDown />
                                <div className='blogDropDown' data-aos="fade-up" data-aos-duration="1000">
                                    <p>Shop Grid</p>
                                    <p>Shop Grid V2</p>
                                    <p>Product Details</p>
                                </div>
                            </li>
                            <li className='blogDrop'>Blog <IoIosArrowDown />
                                <div className='blogDropDown' data-aos="fade-up" data-aos-duration="1000">
                                    <p>Blog Grid</p>
                                    <p>Blog List</p>
                                    <p>Blog Details</p>
                                </div>
                            </li>
                            <li className='pageDrop'>Pages<IoIosArrowDown />
                                <div className='pageDropDown' data-aos="fade-up" data-aos-duration="1000">
                                    <div>
                                        <p>About Us</p>
                                        <p>Service Details</p>
                                        <p>Cart</p>
                                        <p>Checkout</p>
                                        <p>Contact</p>
                                        <p>Login</p>
                                        <p>404 page</p>
                                        <p>All Campaigns</p>
                                        <p>All Coupons</p>
                                    </div>
                                    <div>
                                        <p>Services</p>
                                        <p>My Account</p>
                                        <p>Wishlist</p>
                                        <p>Invoice</p>
                                        <p>Team</p>
                                        <p>Sign Up</p>
                                        <p>500 Error Page</p>
                                        <p>Campaigns <br /> Details</p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div className='bottomNavIcons'>
                            <p><FiSearch /></p>
                            <p><IoPersonOutline /></p>
                            <p><RiShoppingBasketLine /></p>
                            <p><IoCallOutline /></p>
                        </div>

                        <div className='bottomNavContact'>
                            <p className='menu' onClick={handleShowSideBar}><CgMenuGridO /></p>
                        </div>
                        <p className='menu2' onClick={handleShowSideBar}><CgMenuGridO /></p>
                    </div>
                </div>
            </div>

            {showSideBar && (
                <div className='sideBar'>
                    <div className='closeDiv'>
                        <Image src={logo} alt='' />
                        <p onClick={handleHideSideBar}><IoMdClose /></p>
                    </div>

                    <div className='aboutDiv'>
                        <h2>About Us</h2>
                        <p className='myP' data-aos="fade-up" data-aos-duration="2000">
                            Explain to you how all this 
                            mistaken denouncing pleasure 
                            and praising pain was born and 
                            we will give you a complete 
                            account of the system, and 
                            expound the actual teachings.
                        </p>
                        <p className='myP' data-aos="fade-up" data-aos-duration="2000">
                            Mistaken denouncing pleasure and 
                            praising pain was born and we will 
                            give you complete account of the 
                            system expound.
                        </p>

                        <div data-aos="fade-up" data-aos-duration="2000">
                            <button>About Us</button>
                            <h3>Contact Info</h3>
                        </div>

                        <div className='contactDiv' data-aos="fade-up" data-aos-duration="3000">
                            <p>Chicago 12, Melborne City, USA</p>
                            <p className='contactP'>+8801682648101</p>
                            <p className='contactP'>info@example.com</p>
                        </div>

                        <div className='iconDiv' data-aos="fade-up" data-aos-duration="3000">
                            <p><FaFacebook /></p>
                            <p><FaInstagram /></p>
                            <p><FaLinkedin /></p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Navbar;