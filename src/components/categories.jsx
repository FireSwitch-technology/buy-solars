import React, { useState, useEffect } from 'react';
import Styles from '@/styles/mycategory.module.css'

const CategorySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const initialTimeRemaining = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
}
const [timeRemaining, setTimeRemaining] = useState(initialTimeRemaining)
const targetTime = new Date(2023, 10, 1, 0 , 0 ,0)

const handleTimeChange = () => {
    setInterval( () => {
        const currentTime = new Date()
        const timeDiff = targetTime > currentTime ? targetTime - currentTime : 0
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))  
        const afterdays = timeDiff % (1000 * 60 * 60 * 24)

        const hours = Math.floor(afterdays / (1000 * 60 * 60))
        let afterhours = afterdays % (1000 * 60 * 60)

        const minutes = Math.floor(afterhours / 60000)
        let afterminutes = afterhours % 60000
        const seconds = Math.floor(afterminutes/1000)

        setTimeRemaining( (prevVal) => ({
            ...prevVal,
            days,
            hours,
            minutes,
            seconds
        }) )
    }, 1000 )
}

  const carouselItems = [
    {
      image2: "/images/batt.png"
    },
    {
      image2: "/images/batt1.png"
    },
    {
      image2: "/images/battery.png"
    },
    {
      image2: "/images/batt.png"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    handleTimeChange()
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);


  return (
    <section className={Styles.gen1}>
    <div className={Styles.gen2}>
        <div className={Styles.gen3}>
   <div className={Styles.gen4}>
<div className={Styles.gen5}>
<h6 style={{fontFamily: 'Poppins', fontSize: '15px', fontStyle: 'normal', fontweight: 600, lineHeight: '20px', color: '#00FF66'}}>Categories</h6>
<h1 className={Styles.h1Style}>Enhance Your Light Experience</h1>
  
   <div className={Styles.gen6}>
   <div className={Styles.circleStyle}>
<h6 className={Styles.circleTextStyle}>{timeRemaining.seconds}</h6>
<h6 className={Styles.circleTextStyle}>Seconds</h6>
</div>
<div className={Styles.circleStyle}>
<h6 className={Styles.circleTextStyle}>{timeRemaining.minutes}</h6>
<h6 className={Styles.circleTextStyle}>Minute</h6>
</div>

<div className={Styles.circleStyle}>
<h6 className={Styles.circleTextStyle}>{timeRemaining.hours}</h6>
<h6 className={Styles.circleTextStyle}>Hours</h6>
</div>
<div className={Styles.circleStyle}>
<h6 className={Styles.circleTextStyle}>{timeRemaining.days}</h6>
<h6 className={Styles.circleTextStyle}>Day</h6>
</div>
   </div>
   <button className={Styles.buyBtn}>Buy Now</button>
   
</div>
   <div style={rightDivStyle}>
        <div style={carouselContainer}>
          <div style={{ ...carousel, transform: `translateX(-${currentIndex * 100}%)` }}>
            {carouselItems.map((item, index) => (
              <div key={index} style={carouselItem}>
                <div style={rowInnerDivStyle}>
                  <img src={item.image2} alt='Product' style={heroImage} />
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div> </div>
    </div>
    
    </section>

  );
};
  
  const carouselContainer = {
    width: '100%',
    overflow: 'hidden',
  };
  
  const carousel = {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
  };
  
  const carouselItem = {
    flex: '0 0 100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  const rightDivStyle = {
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: '20px',
    // padding: '25px'
  };
  
  const rowInnerDivStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '25px',
    color: 'white',
    // padding: '25px',
    width: '75%'
  };
  
  const heroImage = {
    maxWidth: '100%',
    // height: 'auto',
  };
  

export default CategorySection;
