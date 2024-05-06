'use client'
import React, { useState } from 'react'
import './HomeSectionTwo.css'
import { TiStarFullOutline } from "react-icons/ti";
import { dataFour, dataOne, dataThree } from '../module';
import { dataTwo } from '../module';
import Image from 'next/image';
import banner1 from '../images/bann4.png'
import banner2 from '../images/bann5.png'
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6"; 
import { FaLongArrowAltRight } from "react-icons/fa";
import { RiShareForward2Fill } from "react-icons/ri";


const HomeSectionTwo = () => {
    
   

    const [showDetailsOne, setShowDetailsOne] = useState(true)
    const [showDetailsTwo, setShowDetailsTwo] = useState(false)
    const [showDetailsThree, setShowDetailsThree] = useState(false)
    const [showDetailsFour, setShowDetailsFour] = useState(false)

    const handClickOne = () => {
        setShowDetailsOne(true)
        setShowDetailsTwo(false)
        setShowDetailsThree(false)
        setShowDetailsFour(false)
    }

    const handClickTwo = () => {
        setShowDetailsOne(false)
        setShowDetailsTwo(true)
        setShowDetailsThree(false)
        setShowDetailsFour(false)
    }


    const handClickThree = () => {
        setShowDetailsOne(false)
        setShowDetailsTwo(false)
        setShowDetailsThree(true)
        setShowDetailsFour(false)
    }


    const handClickFour = () => {
        setShowDetailsOne(false)
        setShowDetailsTwo(false)
        setShowDetailsThree(false)
        setShowDetailsFour(true)
    }


    // console.log(dataOne);
    // console.log(dataTwo);

  return (
    <div className='homeSectionTwo'>

        <div className='featuredDiv'>
            <h2>Featured Collections</h2>
            <p>
                Globally drive principle-centered 
                strategic theme areas vis-<br />a-vis 
                goal-oriented  best practices state 
                of the Dynamically.
            </p>
        </div>


        {/* ======= Sectiom Two First Div ==== */}
        <div>
            <ul className='listClass'>
                
                <li onClick={handClickOne} className={showDetailsOne === true ? 'activeList' : ''}>Gaming Chair <sup>12</sup></li>
                <li onClick={handClickTwo} className={showDetailsTwo === true ? 'activeList' : ''}>Dining Set <sup>10</sup></li>
                <li onClick={handClickThree} className={showDetailsThree === true ? 'activeList' : ''}>Office Table <sup>20</sup></li>
                <li onClick={handClickFour} className={showDetailsFour === true ? 'activeList' : ''}>Office Desk <sup>09</sup></li>
                <p className='allFuniture'>All Furniture <span className='furnarrow'> <FaLongArrowAltRight /></span></p>
              
            </ul>

            <div className='productDiv'>

                {showDetailsOne === true && (
                    <>
                        {dataOne.map((firstData, index)=>(
                            <div key={index} className='eachProduct' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                                <Image src={firstData.image} alt=""/>
                                <p>{firstData.category}</p>
                                <h2>{firstData.name}</h2>
                                
                                {firstData.rating === 3 && (

                                    <div className='starDiv'>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                    </div>
                                )}

                                {firstData.rating === 5 && (

                                    <div className='starDiv'>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                    </div>
                                )}

                                {firstData.rating === 4 && (

                                <div className='starDiv'>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                </div>
                                )}

                                <div className='cartDiv'>
                                    <h2>{firstData.price}</h2>
                                    <button>Add to cart</button>
                                </div>
                            </div>  
                        ))}
                    </>
                )}


                {showDetailsTwo === true && (
                    <>
                        {dataTwo.map((firstData, index)=>(
                            <div key={index} className='eachProduct' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                                <Image src={firstData.image} alt=""/>
                                <p>{firstData.category}</p>
                                <h2>{firstData.name}</h2>
                                
                                {firstData.rating === 3 && (

                                    <div className='starDiv'>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                    </div>
                                )}

                                {firstData.rating === 5 && (

                                    <div className='starDiv'>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                    </div>
                                )}

                                {firstData.rating === 4 && (

                                <div className='starDiv'>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                </div>
                                )}

                                <div className='cartDiv'>
                                    <h2>{firstData.price}</h2>
                                    <button>Add to cart</button>
                                </div>
                            </div>  
                        ))}
                    </>
                )}


                {showDetailsThree === true && (
                    <>
                        {dataThree.map((firstData, index)=>(
                            <div key={index} className='eachProduct' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                                <Image src={firstData.image} alt=""/>
                                <p>{firstData.category}</p>
                                <h2>{firstData.name}</h2>
                                
                                {firstData.rating === 3 && (

                                    <div className='starDiv'>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                    </div>
                                )}

                                {firstData.rating === 5 && (

                                    <div className='starDiv'>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                    </div>
                                )}

                                {firstData.rating === 4 && (

                                <div className='starDiv'>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                </div>
                                )}

                                <div className='cartDiv'>
                                    <h2>{firstData.price}</h2>
                                    <button>Add to cart</button>
                                </div>
                            </div>  
                        ))}
                    </>
                )}


                {showDetailsFour === true && (
                    <>
                        {dataFour.map((firstData, index)=>(
                            <div key={index} className='eachProduct' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                                <Image src={firstData.image} alt=""/>
                                <p>{firstData.category}</p>
                                <h2>{firstData.name}</h2>
                                
                                {firstData.rating === 3 && (

                                    <div className='starDiv'>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                    </div>
                                )}

                                {firstData.rating === 5 && (

                                    <div className='starDiv'>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                        <p><TiStarFullOutline /></p>
                                    </div>
                                )}

                                {firstData.rating === 4 && (

                                <div className='starDiv'>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                    <p><TiStarFullOutline /></p>
                                </div>
                                )}

                                <div className='cartDiv'>
                                    <h2>{firstData.price}</h2>
                                    <button>Add to cart</button>
                                </div>
                                


                                <div className='displayIcons showDisplayIcons'>
                                    <div>
                                        <MdFavoriteBorder />
                                    </div>

                                    <div>
                                        <FaRegEye />
                                    </div>

                                    <div>
                                        <RiShareForward2Fill />
                                    </div>
                                </div>
                            </div>  
                        ))}
                    </>
                )}
            </div>
        </div>


        {/* ====== Section Two second div == */}
        
        
        <div className='bansection'>
          <div className='banDivOne'>
            <Image src={banner1} alt='' className='banImage'/>

            <div className='banDivOneText'>
              <h4>MEGA SALE <span className='textChange'>20% OFF</span></h4>
              <h2>New Sofa Collection</h2>
              <p>Assertively target market-driven intellectual capital <br/>free text quiz Bibendum holistic.</p>
              <button>Shop Now <FaLongArrowAltRight /> </button>
            </div>
          </div>

          <div className='banDivTwo'>
            <Image src={banner2} alt='' className='banImage'/>

            <div className='banDivTwoText'>
              <h4>MEGA SALE<span className='textChange'>20% OFF</span></h4>
              <h2>Chair Collection</h2>
              <button>Shop Now <FaLongArrowAltRight /> </button>
            </div>
          </div>
        </div>
        </div>
    
  )
}



export default HomeSectionTwo
