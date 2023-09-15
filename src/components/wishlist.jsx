import React from "react"
import Navbar from '../components/navbar'
import {AiOutlineShoppingCart, AiTwotoneDelete, AiTwotoneStar, AiOutlineEye} from 'react-icons/ai'
import FooterSect from "./footer"

const WishList = () => {
    const wishItems = [
        {
            image: "/images/bag.png",
            title: "Gucci duffle bag",
            flashPrice: '$980',
            actualPrice: '$1160',
            deleteIcon: <AiTwotoneDelete/>,
            cartIcon: <AiOutlineShoppingCart/>,
            rateCount: 0,
            percentilePrice: '0%', 
        },
        {
            image: "/images/bag.png",
            title: "Gucci duffle bag",
            flashPrice: '$980',
            actualPrice: '$1160',
            deleteIcon: <AiTwotoneDelete/>,
            cartIcon: <AiOutlineShoppingCart/>,
            rateCount: 0,
            percentilePrice: '0%', 
        },
        {
            image: "/images/speaker.png",
            title: "RGB liquid CPU Cooler",
            flashPrice: '$1080',
            actualPrice: '$1960',
            deleteIcon: <AiTwotoneDelete/>,
            cartIcon: <AiOutlineShoppingCart/>,
            rateCount: 0,
            percentilePrice: '0%', 
        },
        {
            image: "/images/pad.png",
            title: "GP11 Shooter USB Gamepad",
            flashPrice: '$550',
            actualPrice: '$1000',
            deleteIcon: <AiTwotoneDelete/>,
            cartIcon: <AiOutlineShoppingCart/>,
            rateCount: 0,
            percentilePrice: '0%', 
        },
        {
            image: "/images/jacket.png",
            title: "Quilted Satin Jacket",
            flashPrice: '$750',
            actualPrice: '$1110',
            deleteIcon: <AiTwotoneDelete/>,
            cartIcon: <AiOutlineShoppingCart/>,
            rateCount: 0,
            percentilePrice: '0%', 
        },
    
    ]

    const yourItems = [
        {
            image: "/images/gamepad.png",
            title: "Gucci duffle bag",
            flashPrice: '$980',
            actualPrice: '$1160',
            viewIcon: <AiOutlineEye />,
            cartIcon: <AiOutlineShoppingCart/>,
            rateIcon: <AiTwotoneStar/>,
            rateCount: 0,
            percentilePrice: '0%', 
        },
        {
            image: "/images/ideapad.png",
            title: "Gucci duffle bag",
            flashPrice: '$980',
            actualPrice: '$1160',
            viewIcon: <AiOutlineEye />,
            cartIcon: <AiOutlineShoppingCart/>,
            rateIcon: <AiTwotoneStar/>,
            rateCount: 0,
            percentilePrice: '0%', 
        },
        {
            image: "/images/keyboard.png",
            title: "RGB liquid CPU Cooler",
            flashPrice: '$1080',
            actualPrice: '$1960',
            viewIcon: <AiOutlineEye />,
            cartIcon: <AiOutlineShoppingCart/>,
            rateIcon: <AiTwotoneStar/>,
            rateCount: 0,
            percentilePrice: '0%', 
        },
        {
            image: "/images/TV.png",
            title: "GP11 Shooter USB Gamepad",
            flashPrice: '$550',
            actualPrice: '$1000',
            viewIcon: <AiOutlineEye />,
            cartIcon: <AiOutlineShoppingCart/>,
            rateIcon: <AiTwotoneStar/>,
            rateCount: 0,
            percentilePrice: '0%', 
        },
        {
            image: "/images/jacket.png",
            title: "Quilted Satin Jacket",
            flashPrice: '$750',
            actualPrice: '$1110',
            viewIcon: <AiOutlineEye />,
            cartIcon: <AiOutlineShoppingCart/>,
            rateIcon: <AiTwotoneStar/>,
            rateCount: 0,
            percentilePrice: '0%', 
        },
    
    ]
    return(
   <>
        <Navbar/>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',  }}>
  <div style={{ display: 'flex', flexDirection: 'column', width: '90%', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '25px 0' }}>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', gap: '20px', color: '#000',  }}>
        <h2 style={{fontFamily: 'Poppins', fontSize: '18px'}}>Wishlist (4)</h2>
        <button style={{ display: 'flex', justifyContent: "center", alignContent: "center", padding: '10px 25px', fontFamily: 'Poppins', fontSize: '15px', fontWeight: '500',color: '#000', backgroundColor: 'white', border: 'none', boxShadow: '5px 2px 5px grey', borderRadius: '5px' }}>Move All To Bag</button>
      </div>

      <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px', color: '#fff',}}>
        
      {wishItems.map((product, index) => (
  <>
    <div key={index} style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5' }}>

  <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center',  padding: '10px'}}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#DB4444', padding: '5px 10px', border: 'none', borderRadius: '5px' }}>{product.percentilePrice}</div>
              <div style={{ color: '#000' }}>{product.deleteIcon}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '15px'}}>
                 <div style={{width: '100%', height: '10rem', overflow: 'hidden', display: "flex", justifyContent: 'center', alignItems: 'center'}}> <img style={{width: '100%'}} src={product.image} alt="Gucci-Hand-Bag"  /></div>
                  <button style={{ display: "flex",  backgroundColor: '#000', width: '100%', justifyContent: "center", alignItems: "center", padding: '10px 0', border: 'none', gap: '10px', fontSize: '20px' }}>
                 <div style={{color: 'white'}}> {product.cartIcon}</div>
                      <h5 style={{ color: '#fff', fontFamily: 'Poppins', fontSize: '12px', fontWeight: 400 }}>Add To Cart</h5>
                  </button>
                  <div style={productDetailsStyle}>
                      <div>{product.title}</div>
                      <div style={productPriceStyle}>
                          <div>{product.flashPrice}</div>
                          <div style={{ marginLeft: '10px', textDecoration: 'line-through' }}>{product.actualPrice}</div>
                      </div>
                  </div>
              </div>
              </div>
              </>
))}

      </div>

{/* Second Section Starts Here*/}

      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', gap: '20px', color: '#000', padding: '15px' }}>
      <div style={{display: "flex", gap: '5px', justifyContent: 'center', alignItems: 'flex-end'}}>
      <div style={rectangle}></div>
        <h2 style={{fontFamily: 'Poppins', fontSize: '18px'}}>Just For You</h2>
      </div>
        <button style={{ display: 'flex', justifyContent: "center", alignContent: "center", padding: '10px 25px', fontFamily: 'Poppins', fontSize: '15px', fontWeight: '500',color: '#000', backgroundColor: 'white', border: 'grey', boxShadow: '5px 2px 5px grey', borderRadius: '5px' }}>See All</button>
      </div>

      <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px', color: '#fff',}}>
        
      {yourItems.map((product, index) => (
  <>
    <div key={index} style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5' }}>

  <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center',  padding: '10px'}}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#DB4444', padding: '5px 10px', border: 'none', borderRadius: '5px' }}>{product.percentilePrice}</div>
              <div style={{ color: '#000' }}>{product.deleteIcon}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '15px'}}>
                 <div style={{width: '100%', height: '10rem', overflow: 'hidden', display: "flex", justifyContent: 'center', alignItems: 'center'}}> <img style={{width: '100%'}} src={product.image} alt="Gucci-Hand-Bag"  /></div>
                  <button style={{ display: "flex",  backgroundColor: '#000', width: '100%', justifyContent: "center", alignItems: "center", padding: '10px 0', border: 'none', gap: '10px', fontSize: '20px' }}>
                 <div style={{color: 'white'}}> {product.cartIcon}</div>
                      <h5 style={{ color: '#fff', fontFamily: 'Poppins', fontSize: '12px', fontWeight: 400 }}>Add To Cart</h5>
                  </button>
                  <div style={productDetailsStyle}>
                      <div>{product.title}</div>
                      <div style={productPriceStyle}>
                          <div>{product.flashPrice}</div>
                          <div style={{ marginLeft: '10px', textDecoration: 'line-through' }}>{product.actualPrice}</div>
                      </div>
                      <div style={rateContainerStyle}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} style={{ marginLeft: '5px', color: '#FFAD33', borderRadius: '50%' }}>
                        {product.rateIcon}
                      </div>
                    ))}
                    <div style={{ marginLeft: '5px', color: 'black' }}>({product.rateCount})</div>
                  </div>
                  </div>
              </div>
              </div>
              </>
))}

      </div>
      <FooterSect/>
    </div>
  </div>
</div>

   </>

    )
}


const rateContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    color: '#FFAD33',
  };

const rectangle ={
    backgroundColor: '#DB4444', 
    color: 'red',
    border: '1px solid #DB4444 ',
    padding: '18px 8px',
    borderRadius: '3px'
}

const productDetailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    color: 'black',
    width: '100%',
    padding: '10px',
    gap: '5px',
  };
  
  const productPriceStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5px',
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
export default WishList;