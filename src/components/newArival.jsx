// import React from 'react';
// import { BsArrowRight } from 'react-icons/bs';
import React, { useState, useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Styles from '@/styles/mynew.module.css'

const ArrivalSection = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(1);
  const [currentIndex3, setCurrentIndex3] = useState(2);
  const [currentIndex4, setCurrentIndex4] = useState(3);

  const carouselItems = [
    // Add your carousel items here
    {
     
      image1: "/images/AppleLogo.png",
      image2: "/images/Herobg.png",
      pText: "iPhone 14 Series",
      hText: "Up to 10% off Voucher",
      shopNow: "Shop Now",
      icon: <BsArrowRight />
    },

    {
      image1: "/images/AppleLogo.png",
      image2: "/images/batt.png",
      pText: "iPhone 14 Series",
       hText: "Up to 10% off Voucher",
       shopNow: "Shop Now",
       icon: <BsArrowRight />
    },

    {
      image1: "/images/AppleLogo.png",
      image2: "/images/battery.png",
      pText: "iPhone 14 Series",
      hText: "Up to 10% off Voucher",
      shopNow: "Shop Now",
      icon: <BsArrowRight />
    },

    {
      image1: "/images/AppleLogo.png",
      image2: "/images/Mono-Solar-Panel.png",
      pText: "iPhone 14 Series",
      hText: "Up to 10% off Voucher",
      shopNow: "Shop Now",
      icon: <BsArrowRight />
    },

    {
      image1: "/images/AppleLogo.png",
      image2: "/images/Herobg.png",
      pText: "iPhone 14 Series",
      hText: "Up to 10% off Voucher",
      shopNow: "Shop Now",
      icon: <BsArrowRight />
    }
  ];

  const nextSlide = () => {
    setCurrentIndex1((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentIndex2((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentIndex3((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentIndex4((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (

    <div className={Styles.gen1}>
    <div className={Styles.gen2}>
        <div className={Styles.gen3}>
   <div className={Styles.gen4}>
        <div style={carouselContainer}>
          <div style={{ ...carousel, transform: `translateX(-${currentIndex1 * 100}%)` }}>
            {carouselItems.map((item, index) => (
              <div key={index} style={{  minWidth: '100%', display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',}}>
               <div className={Styles.carousel2}>
                  <img src={item.image2} alt='iPhone' style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center',}} />
                </div>
                <div className={Styles.rowInnerDivStyle}>
             
                  <h1 className={Styles.h1_text}>{item.hText}</h1>
                  <div className={Styles.shop_now}>
                    <p>{item.shopNow}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className={Styles.carousel2}>
      <div className={Styles.carousel21}>
  
        <div style={carouselContainer}>
          <div style={{ ...carousel, transform: `translateX(-${currentIndex2 * 100}%)` }}>
            {carouselItems.map((item, index) => (
              <div key={index} style={carouselItem}>
                <div style={rowInnerDivStyle}>
                
                  <h1 className={Styles.h1_text}>{item.hText}</h1>
                  <div className={Styles.shop_now}>
                    <p>{item.shopNow}</p>
                  
                  </div>
                </div>
                <div className={Styles.rowInnerDivStyle}>
                  <img src={item.image2} alt='iPhone' style={heroImage} />
                </div>
              </div>
            ))}
        </div>
      </div>
</div>
<div className={Styles.test}>
<div className={Styles.test2}>

<div style={carouselContainer}>
          <div style={{ ...carousel, transform: `translateX(-${currentIndex3 * 100}%)` }}>
            {carouselItems.map((item, index) => (
              <div key={index} style={{  minWidth: '100%',display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',}}>
                  <div style={{display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center', gap: '15px', color: '#fff',}}>
                  <img src={item.image2} alt='iPhone' style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center',}} />
                </div>
                <div className={Styles.rowInnerDivStyle}>
           
                <h1 className={Styles.hText}>{item.hText}</h1>            
                <div className={Styles.shop_now}>
                    <p>{item.shopNow}</p>
                   
                  </div>
                </div>
              
              </div>
            ))}
       
        </div>
      </div>
</div>
<div className={Styles.test2}>

        <div style={carouselContainer}>
          <div style={{ ...carousel, transform: `translateX(-${currentIndex4 * 100}%)` }}>
            {carouselItems.map((item, index) => (
              <div key={index} style={{  minWidth: '100%',display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column', textAlign: 'center'}}>
                  <div style={{display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center', alignItems: 'center', gap: '15px', color: '#fff',}}>
                  <img src={item.image2} alt='iPhone' style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'flex-start',}} />
                </div>
                <div className={Styles.rowInnerDivStyle}>
           
                  <h1 className={Styles.hText}>{item.hText}</h1>
                  <div className={Styles.shop_now}>
                    <p>{item.shopNow}</p>
                   
                  </div>
                </div>
              
              </div>
            ))}
       
        </div>
      </div>
</div>
</div>
      </div>
    </div>
    </div>
    </div>
  
  );
};

const carouselContainer = {
  width: '70%',
  overflow: 'hidden',
  
};

const carousel = {
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
  
};

const carouselItem = {
  minWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const rowInnerDivStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
//   alignItems: 'center',
  gap: '25px',
  color: 'white',
  padding: '25px',
  width: '100%'
};



const heroImage = {
  maxWidth: '100%',
  height: 'auto',
};

export default ArrivalSection;
