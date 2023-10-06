import React, { useState, useEffect } from "react"; // import {  FaEye } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react'
import { AiTwotoneStar, AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import SwiperCore, { Autoplay, EffectCards, Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Autoplay, EffectCards, Navigation])
import Styles from "@/styles/myproducts.module.css";

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
    image: "/images/Panel.png",
    favouriteIcon: <AiOutlineHeart />,
    viewIcon: <AiOutlineEye />,
    name: "HAVIT HV-G92 Gamepad",
    flashPrice: "$120",
    actualPrice: "$160",
    rateIcon: <AiTwotoneStar />,
    rateCount: 0,
    percentilePrice: "0%",
  },
  {
    image: "/images/Panel.png",
    favouriteIcon: <AiOutlineHeart />,
    viewIcon: <AiOutlineEye />,
    name: "AK-900 Wired Keyboard",
    flashPrice: "$120",
    actualPrice: "$160",
    rateIcon: <AiTwotoneStar />,
    rateCount: 0,
    percentilePrice: "0%",
  },

  {
    image: "/images/Panel.png",
    favouriteIcon: <AiOutlineHeart />,
    viewIcon: <AiOutlineEye />,
    name: "IPS LCD Gaming Monitor",
    flashPrice: "$120",
    actualPrice: "$160",
    rateIcon: <AiTwotoneStar />,
    rateCount: 0,
    percentilePrice: "0%",
  },
  {
    image: "/images/Panel.png",
    favouriteIcon: <AiOutlineHeart />,
    viewIcon: <AiOutlineEye />,
    name: "IPS LCD Gaming Monitor",
    flashPrice: "$120",
    actualPrice: "$160",
    rateIcon: <AiTwotoneStar />,
    rateCount: 0,
    percentilePrice: "0%",
  },
  {
    image: "/images/Panel.png",
    favouriteIcon: <AiOutlineHeart />,
    viewIcon: <AiOutlineEye />,
    name: "S-Series Comfort Chair ",
    flashPrice: "$120",
    actualPrice: "$160",
    rateIcon: <AiTwotoneStar />,
    rateCount: 0,
    percentilePrice: "0%",
  },
  {
    image: "/images/Panel.png",
    favouriteIcon: <AiOutlineHeart />,
    viewIcon: <AiOutlineEye />,
    name: "S-Series Comfort Chair ",
    flashPrice: "$120",
    actualPrice: "$160",
    rateIcon: <AiTwotoneStar />,
    rateCount: 0,
    percentilePrice: "0%",
  },
  {
    image: "/images/Panel.png",
    favouriteIcon: <AiOutlineHeart />,
    viewIcon: <AiOutlineEye />,
    name: "S-Series Comfort Chair ",
    flashPrice: "$120",
    actualPrice: "$160",
    rateIcon: <AiTwotoneStar />,
    rateCount: 0,
    percentilePrice: "0%",
  },
  {
    image: "/images/Panel.png",
    favouriteIcon: <AiOutlineHeart />,
    viewIcon: <AiOutlineEye />,
    name: "S-Series Comfort Chair ",
    flashPrice: "$120",
    actualPrice: "$160",
    rateIcon: <AiTwotoneStar />,
    rateCount: 0,
    percentilePrice: "0%",
  },
  {
    image: "/images/Panel.png",
    favouriteIcon: <AiOutlineHeart />,
    viewIcon: <AiOutlineEye />,
    name: "S-Series Comfort Chair ",
    flashPrice: "$120",
    actualPrice: "$160",
    rateIcon: <AiTwotoneStar />,
    rateCount: 0,
    percentilePrice: "0%",
  },
  {
    image: "/images/Panel.png",
    favouriteIcon: <AiOutlineHeart />,
    viewIcon: <AiOutlineEye />,
    name: "S-Series Comfort Chair ",
    flashPrice: "$120",
    actualPrice: "$160",
    rateIcon: <AiTwotoneStar />,
    rateCount: 0,
    percentilePrice: "0%",
  },
  {
    image: "/images/Panel.png",
    favouriteIcon: <AiOutlineHeart />,
    viewIcon: <AiOutlineEye />,
    name: "S-Series Comfort Chair ",
    flashPrice: "$120",
    actualPrice: "$160",
    rateIcon: <AiTwotoneStar />,
    rateCount: 0,
    percentilePrice: "0%",
  },
  {
    image: "/images/Panel.png",
    favouriteIcon: <AiOutlineHeart />,
    viewIcon: <AiOutlineEye />,
    name: "S-Series Comfort Chair ",
    flashPrice: "$120",
    actualPrice: "$160",
    rateIcon: <AiTwotoneStar />,
    rateCount: 0,
    percentilePrice: "0%",
  },
  {
    image: "/images/Panel.png",
    favouriteIcon: <AiOutlineHeart />,
    viewIcon: <AiOutlineEye />,
    name: "S-Series Comfort Chair ",
    flashPrice: "$120",
    actualPrice: "$160",
    rateIcon: <AiTwotoneStar />,
    rateCount: 0,
    percentilePrice: "0%",
  },
  {
    image: "/images/Panel.png",
    favouriteIcon: <AiOutlineHeart />,
    viewIcon: <AiOutlineEye />,
    name: "S-Series Comfort Chair ",
    flashPrice: "$120",
    actualPrice: "$160",
    rateIcon: <AiTwotoneStar />,
    rateCount: 0,
    percentilePrice: "0%",
  },
  {
    image: "/images/Panel.png",
    favouriteIcon: <AiOutlineHeart />,
    viewIcon: <AiOutlineEye />,
    name: "S-Series Comfort Chair ",
    flashPrice: "$120",
    actualPrice: "$160",
    rateIcon: <AiTwotoneStar />,
    rateCount: 0,
    percentilePrice: "0%",
  },
];

const Products = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
  
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
             style={{width: "100%", backgroundColor: "white"}}
       
          >
            {productsArray.map((product, index) => (
              <SwiperSlide key={index}>
                 <div
                  className={{
                    ...productContainerStyle,
                    width: '200px',
                  }}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <button style={btnStyle}>{product.percentilePrice}</button>
                  <div style={iconContainerStyle}>
                    {product.favouriteIcon && (
                      <div style={favouriteIconStyle}>{product.favouriteIcon}</div>
                    )}
                    {product.viewIcon && <div style={viewIconStyle}>{product.viewIcon}</div>}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'relative',
                    }}
                  >
                    <img src={product.image} alt={product.name} style={productImageStyle} />
                    <button
                      style={{
                        ...btnStyle,
                        display: hoverIndex === index ? 'flex' : 'none',
                        padding: '8px 50px',
                        whiteSpace: 'nowrap',
                        color: '#fff',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        alignItems: 'center',
                        position: 'absolute',
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div style={productDetailsStyle}>
                    <div>{product.name}</div>
                    <div style={productPriceStyle}>
                      <div>{product.flashPrice}</div>
                      <div style={{ marginLeft: '10px', textDecoration: 'line-through' }}>
                        {product.actualPrice}
                      </div>
                    </div>
                    <div style={rateContainerStyle}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <div
                          key={i}
                          style={{
                            marginLeft: '5px',
                            color: '#FFAD33',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                          }}
                        >
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
  );
};


const productContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: '100%'
 };

const productImageStyle = {
  width: "100%",
};

const iconContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  position: "relative",
  top: "50px",
  right: "30px",
};

const btnStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  top: "80px",
  left: "20px",
  width: "15%",
  backgroundColor: "#DB4444",
  border: "1px solid #DB4444",
  borderRadius: "5px",
};

const favouriteIconStyle = {
  color: "black",
};

const viewIconStyle = {
  color: "black",
};

const productDetailsStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: 'center',
  color: "black",
  width: "100%",
  padding: "10px 0",
  gap: "5px",
};

const productPriceStyle = {
  display: "flex",
  alignItems: "center",
  marginTop: "5px",
};

const rateContainerStyle = {
  display: "flex",
  alignItems: "center",
  color: "#FFAD33",
};

export default Products;
