import React, { useState, useEffect } from 'react';// import {  FaEye } from 'react-icons/fa';
import {AiTwotoneStar, AiOutlineHeart, AiOutlineEye} from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {  Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

// Add Swiper modules
SwiperCore.use([Navigation, Pagination]);


const productsArray = [

  {
    image: '/images/Panel.png',   
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
    image: '/images/Panel.png',
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
    image: '/images/Panel.png',
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
    image: '/images/Panel.png',
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
    image: '/images/Panel.png',
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


const Products = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4, // Number of items to show on desktop
      slidesToSlide: 4, // Number of items to slide on each transition
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2, // Number of items to show on tablet
      slidesToSlide: 2, // Number of items to slide on each transition
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Number of items to show on mobile
      slidesToSlide: 1, // Number of items to slide on each transition
    },
  };

  return (
    <div style={genSect1}>
      <div style={genSect2}>
        <div style={genSect3}>
        <Swiper
  slidesPerView={5}
  speed={500}
  loop={true}
  cssMode={true}
  navigation = {false}  // Optional: Add navigation buttons
  pagination={{ clickable: true }}  // Optional: Add pagination
  breakpoints={responsive}
  autoplay={{   // Enable automatic sliding
    delay: 3000, // Time in milliseconds between slides
    disableOnInteraction: true, // Prevent autoplay from stopping on user interaction
  }}
>           
{productsArray.map((product, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{
                    ...productContainerStyle,
                    width: '100%',
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
                        padding: '10px 50px',
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
        </div>
      </div>
    </div>
  );
};


    


  const genSect1 = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 0,
  };
  
  const genSect2 = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
  };
  
  const genSect3 = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '10px 30px',
    backgroundColor: 'white',
    paddingLeft: '20px',
  };
  
  const productContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };
  
  const productImageStyle = {
    width: '100%',
  };
  
  const iconContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'relative',
    top: '40px',
    right: '50px',
  };
  
  const btnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: '80px',
    left: '40px',
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
    // alignItems: 'center',
    color: 'black',
    width: '70%',
    padding: '10px',
    gap: '5px',
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

export default Products;
