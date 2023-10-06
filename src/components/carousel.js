
import React,  { useState, useEffect }  from "react"
import {AiTwotoneStar, AiOutlineHeart, AiOutlineEye} from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {  Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import 'swiper/swiper-bundle.css';
import Styles from '@/styles/mycarousel.module.css'

// Add Swiper modules
SwiperCore.use([Navigation, Pagination]);

  const productsArray = [
    // Add your carousel items here
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

// Install required Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const Carousels = () =>{
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    // Any initialization or event listeners related to Swiper can go here
    // You can customize Swiper's behavior as needed.
  }, [hoverIndex]);

  return (
    <div className={Styles.genSect1}>
      <div className={Styles.genSect2}>
        <div className={Styles.genSect3}>
          <div className="wrapper">
            <Swiper
              navigation
              pagination
              mousewheel
              keyboard
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
              }}
            >
              {productsArray.map((product, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={Styles.productContainer}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                        <button className={Styles.btnStyle}>{product.percentilePrice}</button>
                        <div className={Styles.iconContainer}>
                          {product.favouriteIcon && (
                            <div className={Styles.favouriteIcon}>{product.favouriteIcon}</div>
                          )}
                          {product.viewIcon && <div className={Styles.viewIcon}>{product.viewIcon}</div>}
                        </div>
                        <div className="product-image-container">
                          <img src={product.image} alt={product.name} className={Styles.productImage} />
                          <button
                            className={Styles.btnStyle}
                            style={{
                              display: hoverIndex === index ? 'flex' : 'none',
                            }}
                          >
                            Add to Cart
                          </button>
                        </div>
                        <div className={Styles.productDetails}>
                          <div className={Styles.productName}>{product.name}</div>
                          <div className={Styles.productPrice}>
                            <div>{product.flashPrice}</div>
                            <div className={Styles.actualPrice}>{product.actualPrice}</div>
                          </div>
                          <div className={Styles.rateContainer}>
                            {Array.from({ length: 5 }, (_, i) => (
                              <div key={i} className={Styles.rateIcon}>
                                {product.rateIcon}
                              </div>
                            ))}
                            <div className={Styles.rateCount}>({product.rateCount})</div>
                          </div>
                        </div>
                        </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Carousels;
