import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import Styles from '@/styles/myhero.module.css' 

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    // Add your carousel items here
    {
      image1: "/images/AppleLogo.png",
      image2: "/images/Herobg.png",
      pText: "iPhone 14 Series",
      hText: "Up to 10% off Voucher",
      shopNow: "Shop Now",
      icon: <BsArrowRight />,
    },

    {
      image1: "/images/AppleLogo.png",
      image2: "/images/batt.png",
      pText: "iPhone 14 Series",
      hText: "Up to 10% off Voucher",
      shopNow: "Shop Now",
      icon: <BsArrowRight />,
    },

    {
      image1: "/images/AppleLogo.png",
      image2: "/images/battery.png",
      pText: "iPhone 14 Series",
      hText: "Up to 10% off Voucher",
      shopNow: "Shop Now",
      icon: <BsArrowRight />,
    },

    {
      image1: "/images/AppleLogo.png",
      image2: "/images/Mono-Solar-Panel.png",
      pText: "iPhone 14 Series",
      hText: "Up to 10% off Voucher",
      shopNow: "Shop Now",
      icon: <BsArrowRight />,
    },

    {
      image1: "/images/AppleLogo.png",
      image2: "/images/Herobg.png",
      pText: "iPhone 14 Series",
      hText: "Up to 10% off Voucher",
      shopNow: "Shop Now",
      icon: <BsArrowRight />,
    },
  ];

  const category = ["GreatJoe", "Battery", "Charge Controller", "Solar Electronics", "Cables"]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
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
    <div className={Styles.heroSectionStyle}>
      <div className={Styles.leftDivStyle}>
        {/* Left content */}
        <div className={Styles.leftDivStyle}>
          {category.map((cats, index) => (
 <ul key={index} className={Styles.columnListStyle}>
 <li className={Styles.clickableItemStyle}>{cats}</li>
</ul>
          ))}
         
        </div>
      </div>
      <div className={Styles.rightDivStyle}>
        <div className={Styles.carouselContainer} >
          <div
         className={Styles.carousel}
         style={{
           transform: `translateX(-${currentIndex * 100}%)`, // Translate based on currentIndex
           transition: 'transform 0.5s ease-in-out', // Add transition for smooth animation
         }}
          >
            {carouselItems.map((item, index) => (
              <div key={index} className={Styles.carouselItem}>
                <div className={Styles.rowInnerDivStyle}>
                  <div className={Styles.apple}>
                    <img src={item.image1} className={Styles.appleLogo} alt="" />
                    <p className={Styles.p_text}>{item.pText}</p>
                  </div>
                  <h1 className={Styles.h1_text}>{item.hText}</h1>
                  <div className={Styles.shop_now}>
                    <p>{item.shopNow}</p>
                    <div >{item.icon}</div>
                  </div>
                </div>
                <div className={Styles.rowInnerDivStyle}>
                  <img src={item.image2} alt="iPhone" className={Styles. heroImage} />
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
  );
};

export default HeroSection;
