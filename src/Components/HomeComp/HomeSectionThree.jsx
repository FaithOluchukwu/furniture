'use client'
import React from 'react'
import './HomeSectionThree.css'
import Image from 'next/image'
import { dataFive } from '../module'
import bannerImage from '../images/product-banner-img-6.png'
import bannerImage1 from '../images/product-banner-img-7.png'
import { IoMdStar } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const HomeSectionThree = () => {
  return (
    <div className='bannerThreeSection'>
        <h2>Featured Brand Products</h2>
        <h4>
            Collaboratively pursue proactive vortals whereas granular best practices 
            <br/>Collaboratively promote functionalmarkets through process-centric users.
        </h4>


        <div className='bannerThreeDiv'>

            <div className='leftBanner'>

                {dataFive.slice(0, 3).map((data, index)=>(
                    <div className='eachLeftBanner' key={index}>
                        <div>
                            <Image src={data.image} alt='' className='myBannImage'/>
                        </div>
                        <div>
                        {data.rating === 5 && (

                              <div className='starDiv1'>
                                  <p><IoMdStar/></p>
                                  <p><IoMdStar/></p>
                                  <p><IoMdStar/></p>
                                  <p><IoMdStar/></p>
                                  <p><IoMdStar/></p>
                              </div>
                              )}
                                  {data.rating === 3 && (
                                  <div className='starDiv1'>
                                      <p><IoMdStar/></p>
                                      <p><IoMdStar/></p>
                                      <p><IoMdStar/></p>
                                  </div>
                                  )}
                            <h3>{data.category}</h3>
                            <p><span>{data.price}</span>{data.discountPrice}</p>
                            <h5>Shop Now<FaArrowRight/></h5>
                        </div>
                    </div>
                ))}
            </div>


            <div className='middleBanner'>
                <Image src={bannerImage} alt='' className='middleBannerImage'/>
              <div className='middleBanDiv'>
              <h4>UP TO  <span className='text'>20% OFF</span></h4>
              <h2>Furniture</h2>
              <button>Shop Now<FaArrowRight/> </button>
            </div>
            </div>


            <div className='rightBanner'>
            {dataFive.slice(3, 6).map((data, index)=>(
                    <div className='eachLeftBanner' key={index}>
                        <div>
                            <Image src={data.image} alt='' className='myBannImage'/>
                        </div>

                        <div>
                        {data.rating === 5 && (

                                  <div className='starDiv1'>
                                      <p><IoMdStar/></p>
                                      <p><IoMdStar/></p>
                                      <p><IoMdStar/></p>
                                      <p><IoMdStar/></p>
                                      <p><IoMdStar/></p>
                                  </div>
                                  )}

                                    {data.rating === 4 && (

                                    <div className='starDiv1'>
                                        <p><IoMdStar/></p>
                                        <p><IoMdStar/></p>
                                        <p><IoMdStar/></p>
                                        <p><IoMdStar/></p>
                                    </div>
                                    )}
                            <h3>{data.category}</h3>
                            <p><span>{data.price}</span>{data.discountPrice}</p>
                            <h5>Shop Now <FaArrowRight/></h5>
                        </div>
                    </div>
                ))}
            </div>

        </div>

        <div className='bannerSectionSeven'>
            <div className='bannerDivSeven'>
            <Image src={bannerImage1} alt='' className='bann7image'/>

            <div className='bannerSevenText'>
              <p>Subscribe Our Newsletter to <br/>Get Latest Update & News</p>
              <div className='placeholderDiv'>
              <input type="text" placeholder="Enter Email Address" />
                  <button>Subscribe Now</button>
              </div>
            </div>
            
          </div>
                
</div>
    </div>
  )
}

export default HomeSectionThree
