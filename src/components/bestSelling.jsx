import React, { useState, useEffect } from 'react';// import {  FaEye } from 'react-icons/fa';
import {AiTwotoneStar, AiOutlineHeart, AiOutlineEye} from 'react-icons/ai';
import Styles from '@/styles/mybestsell.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, EffectCards, Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Autoplay, EffectCards, Navigation])
// import Styles from "@/styles/myproducts.module.css";

const settings = {
  modules: [Autoplay, EffectCards],
  effect: 'slide',
  loop: true,
  speed: 1000,
  autoplay: {
      delay: 2000,
  },
  navigation: false,
  navigationprevclassname: 'swiper-button-prev',
  navigationnextclassname: 'swiper-button-next',
  slidesPerView: 5,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
};

const productsArray = [
    {
      image: '/images/batt.png',   
       favouriteIcon: <AiOutlineHeart />,
      viewIcon: <AiOutlineEye />,
      name: 'HAVIT HV-G92 Gamepad',
      flashPrice: '$120',
      actualPrice: '$160',
      rateIcon: <AiTwotoneStar/>,
      rateCount: 0,
      percentilePrice: '0%', 
  
    },
    {
      image: '/images/battery.png',
      favouriteIcon: <AiOutlineHeart />,
      viewIcon: <AiOutlineEye />,
      name: 'AK-900 Wired Keyboard',
      flashPrice: '$120',
      actualPrice: '$160',
      rateIcon: <AiTwotoneStar/>,
      rateCount: 0,
      percentilePrice: '0%', 
    },
    {
      image: '/images/battery.png',
      favouriteIcon: <AiOutlineHeart />,
      viewIcon: <AiOutlineEye />,
      name: 'AK-900 Wired Keyboard',
      flashPrice: '$120',
      actualPrice: '$160',
      rateIcon: <AiTwotoneStar/>,
      rateCount: 0,
      percentilePrice: '0%', 
    },
    {
      image: '/images/battery.png',
      favouriteIcon: <AiOutlineHeart />,
      viewIcon: <AiOutlineEye />,
      name: 'AK-900 Wired Keyboard',
      flashPrice: '$120',
      actualPrice: '$160',
      rateIcon: <AiTwotoneStar/>,
      rateCount: 0,
      percentilePrice: '0%', 
    },
    {
      image: '/images/battery.png',
      favouriteIcon: <AiOutlineHeart />,
      viewIcon: <AiOutlineEye />,
      name: 'AK-900 Wired Keyboard',
      flashPrice: '$120',
      actualPrice: '$160',
      rateIcon: <AiTwotoneStar/>,
      rateCount: 0,
      percentilePrice: '0%', 
    },
    
    {
      image: '/images/batt.png',   
       favouriteIcon: <AiOutlineHeart />,
      viewIcon: <AiOutlineEye />,
      name: 'HAVIT HV-G92 Gamepad',
      flashPrice: '$120',
      actualPrice: '$160',
      rateIcon: <AiTwotoneStar/>,
      rateCount: 0,
      percentilePrice: '0%', 
  
    },
    {
      image: '/images/battery.png',
      favouriteIcon: <AiOutlineHeart />,
      viewIcon: <AiOutlineEye />,
      name: 'AK-900 Wired Keyboard',
      flashPrice: '$120',
      actualPrice: '$160',
      rateIcon: <AiTwotoneStar/>,
      rateCount: 0,
      percentilePrice: '0%', 
    },
    {
      image: '/images/batt.png',
      favouriteIcon: <AiOutlineHeart />,
      viewIcon: <AiOutlineEye />,
      name: 'IPS LCD Gaming Monitor',
      flashPrice: '$120',
      actualPrice: '$160',
      rateIcon: <AiTwotoneStar/>,
      rateCount: 0,
      percentilePrice: '0%', 
    },
    {
      image: '/images/battery.png',
      favouriteIcon: <AiOutlineHeart />,
      viewIcon: <AiOutlineEye />,
      name: 'S-Series Comfort Chair ',
      flashPrice: '$120',
      actualPrice: '$160',
      rateIcon: <AiTwotoneStar/>,
      rateCount: 0,
      percentilePrice: '0%', 
  
    },
  ];

  const BestSell = () => {

    const [hoverIndex, setHoverIndex] = useState(null); // Add hover state
  
   
  return(
      <>
      <section className={Styles.gen1}>
      <div  className={Styles.gen2}>
          <div  className={Styles.gen3}>
          <div  className={Styles.topBox}>
          <div  className={Styles.box}></div>
  <h3 className={Styles.month}>This Month</h3>
</div>
<div className={Styles.bestCont}>
  <h1 className={Styles.bestSell}>
      Best Selling Products
  </h1>
  <button className={Styles.viewBtn}>View All</button>
</div>

<Swiper   
          {...settings}
          breakpoints={{
            2000: {
              slidesPerView: 5,
            },
            1075: {
              slidesPerView: 4,
            },
            700: {
              slidesPerView: 3,
            },
            500: {
              slidesPerView: 3,
            },
            100: {
              slidesPerView: 1,
              centeredSlides: true, // set this to true
              spaceBetween: 10, // set this to 0 to center the card
            },
          }}
             style={{width: "100%"}}
       
          >
            {productsArray.map((product, index) => (
              <SwiperSlide key={index}>
                 <div
                  className={{
                    ...productContainerStyle,
                    width: '150px',
                    height: '150px'
                  }}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
             
              <div style={iconContainerStyle}>
                {product.favouriteIcon && <div style={favouriteIconStyle}>{product.favouriteIcon}</div>}
                {product.viewIcon && <div style={viewIconStyle}>{product.viewIcon}</div>}
              </div>
              <button style={btnStyle}>{product.percentilePrice}</button>
             <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative'}}> <img src={product.image} alt='' style={productImageStyle} />
              <button style={{ ...btnStyle, display: hoverIndex === index ? 'flex' : 'none', padding: '8px 50px', whiteSpace: 'nowrap', color: '#fff', justifyContent: 'center',cursor: 'pointer', alignItems: 'center', position: 'absolute', top: '70px'}}>{/* Button visibility */}
                Add to Cart
              </button>
              </div>
              <div style={productDetailsStyle}>
                <div>{product.name}</div>
                <div style={productPriceStyle}>
                  <div>{product.flashPrice}</div>
                  <div style={{ marginLeft: '10px', textDecoration: 'line-through' }}>{product.actualPrice}</div>
                </div>
                <div style={rateContainerStyle}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <div key={i} style={{ marginLeft: '5px', color: '#FFAD33', backgroundColor: 'white', borderRadius: '50%' }}>
                      {product.rateIcon}
                    </div>
                  ))}
                  <div style={{ marginLeft: '5px', color: 'black' }}>({product.rateCount})</div>
                </div>
              </div>
            </div>
            </SwiperSlide>
          ))}
          </Swiper>
          </div>

          </div>

      </section>
      </>
  )
}


const productContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    
  };
  
  const productImageStyle = {
    width: '80%',
    height: 'auto'
  };
  
  const iconContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: '20px',
    left: '80px',
  };
  
  const btnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: '-10px',
    left: '16px',
    width: '15%',
    backgroundColor: '#DB4444',
    border: '1px solid #DB4444',
    borderRadius: '5px',
  };
  
  const favouriteIconStyle = {
    color: 'black',
  };
  
  const viewIconStyle = {
    color: 'black',
  };
  
  const productDetailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    width: '100%',
    padding: '10px',
    gap: '5px',
    textAlign: 'center'
  };
  
  const productPriceStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5px',
  };
  
  const rateContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    color: '#FFAD33',
  };
export default BestSell;