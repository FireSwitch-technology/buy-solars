import React, {useState, useEffect} from "react";
import {AiOutlineShoppingCart,AiTwotoneStar, AiTwotoneDelete, AiOutlineHeart} from 'react-icons/ai';
import {TbTruckDelivery} from 'react-icons/tb'
import {GiReturnArrow} from 'react-icons/gi'
import Link from "next/link";
import Products from "@/components/product";
import FooterSect from "@/components/footer";
import NBar from "@/components/navb";

const ProductDetails = () => {

    const [selectedImage, setSelectedImage] = useState();
    const [selectedImageDetails, setSelectedImageDetails] = useState()

    const productsArray = [
        {
            image: "/images/batt.png",
           details:[
            {
                title: "Gucci duffle bag",
                desc: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
                flashPrice: '$980.00',
                actualPrice: '$1160.00',
                deleteIcon: <AiTwotoneDelete/>,
                cartIcon: <AiOutlineShoppingCart/>,
                rateIcon: <AiTwotoneStar/>,
                stockStatus: [ "In Stock", "Out of Stock"],                    
                rateCount: 0,
                percentilePrice: '0%', 
               }
           ]
        },
        {
            image: "/images/batt1.png",
            details: [
                {
                    title: "Carbon double cell Battery",
                    desc: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
                    flashPrice: '$980.00',
                    actualPrice: '$1160.00',
                    deleteIcon: <AiTwotoneDelete/>,
                    cartIcon: <AiOutlineShoppingCart/>,
                    rateIcon: <AiTwotoneStar/>,
                    stockStatus: [ "In Stock", "Out of Stock"],                    
                    rateCount: 0,
                    percentilePrice: '0%', 
                   }
            ]
        },
        {
            image: "/images/battery.png",
            details: [
                {
                    title: "Dry cell durable 50amp Battery",
                    desc: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
                    flashPrice: '$980.00',
                    actualPrice: '$1160.00',
                    deleteIcon: <AiTwotoneDelete/>,
                    cartIcon: <AiOutlineShoppingCart/>,
                    rateIcon: <AiTwotoneStar/>,
                    stockStatus: [ "In Stock", "Out of Stock"],                    
                    rateCount: 0,
                    percentilePrice: '0%', 
                   }
            ]
        },
        {
            image: "/images/buysolar.png",
            details: [
                {
                    title: "Durable 50inch Solar Panel",
                    desc: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
                    flashPrice: '$980.00',
                    actualPrice: '$1160.00',
                    deleteIcon: <AiTwotoneDelete/>,
                    cartIcon: <AiOutlineShoppingCart/>,
                    rateIcon: <AiTwotoneStar/>,
                    stockStatus: [ "In Stock", "Out of Stock"],                    
                    rateCount: 0,
                    percentilePrice: '0%', 
                }
            ]
        },
        {
            image: "/images/Mono.png",
            details: [
                {
                    title: "20inch Solar panel ",
                    desc: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
                    flashPrice: '$980.00',
                    actualPrice: '$1160.00',
                    deleteIcon: <AiTwotoneDelete/>,
                    cartIcon: <AiOutlineShoppingCart/>,
                    rateIcon: <AiTwotoneStar/>,
                    stockStatus: [ "In Stock", "Out of Stock"],                    
                    rateCount: 0,
                    percentilePrice: '0%', 
                   }
            ]
        },
      ];

  // Set initial values for selectedImage and selectedImageDetails
  useEffect(() => {
    if (productsArray.length > 0) {
      setSelectedImage(productsArray[0].image);
      setSelectedImageDetails(productsArray[0].details);
    }
  }, []);

  const handleImageClick = (image, details) => {
    setSelectedImage(image);
    setSelectedImageDetails(details);
  };

    return(
        <>
         <NBar />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
            <div style={{ display: 'flex',flexDirection: 'column',  width: '90%', justifyContent: 'center', alignItems: 'center',  }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'flex-start', gap: '20px', color: '#000', padding: '10px 0' }}>
                <div className="hidden sm:flex w-full justify-start items-center gap-[10px] text-black py-[20px] text-[18px]">
                    <h3 style={{fontWeight: '400', fontSize: '15px'}}><Link href='/account' style={links}>Account</Link></h3>
                    <h3>/</h3>
                    <h3 style={{fontWeight: '400', fontSize: '15px'}}><Link href='/product' style={links}>Product</Link></h3>
                    <h3>/</h3>
                    <h3 style={{fontWeight: '400', fontSize: '15px'}}><Link href='/product' style={links}>Havic HV G-92 Gamepad</Link></h3>
                 
                </div>
                <div className="flex flex-col md:flex-row  w-full justify-between items-start gap-5 text-black py-0 md:py-5 text-[18px]">

                <div className="flex w-full md:w-[20%] md:flex-col justify-center items-start gap-[10px] md:gap-[20px] py-[10px]">
                    {productsArray.map((product, index) => (
                <div key={index} className="flex flex-col w-[30%] md:w-[40%] justify-between gap-[10px]  text-black py-0 md:py-5 text-[18px]">
                <img
                      src={product.image}
                      alt={product.name}
                      onClick={() => handleImageClick(product.image, product.details)}
                      style={{ cursor: 'pointer' }}
                    />                    </div>
                    ))}
                    </div>
                    
                    <div className="flex w-full md:w-[30%] md:h-[50vh] justify-center items-center gap-[10px] py-[10px] text-[18px]">
              {/* Display selected image */}
              {selectedImage && (
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <img src={selectedImage} alt="Selected" className="flex justify-center items-center w-2/3 md:w-full shadow-xl p-2" />
                </div>
              )}
            
                    </div>

      <div className="flex w-full md:w-[40%] flex-col justify-center items-center md:items-start md:justify-start gap-[10px] py-0 md:py-[10px] text-[18px] text-black">
      {selectedImageDetails && (
                  <div className="flex flex-col w-full justify-center items-start">
                    {/* Display selected image details */}
                    <h3>{selectedImageDetails[0].title}</h3>
                    <div className="flex flex-col sm:flex justify-start sm:items-start gap-0 sm:gap-1">
                    <p className="flex my-0">{Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                style={{
                  marginLeft: '5px',
                  color: '#FFAD33',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                }}
              >
 {selectedImageDetails[0].rateIcon}              </div>
            ))}
                        
                       </p>
                    <p className="my-0">({selectedImageDetails[0].rateCount} Review)</p>
                    <p className="text-[#00ff66] my-0">{selectedImageDetails[0].stockStatus[0]}</p>
                    </div>
                    <p >{selectedImageDetails[0].actualPrice}</p>
                    <p className="text-start text-black text-[15px]w-full md:w-[80%] md:text-start">{selectedImageDetails[0].desc}</p>
                  </div>
                )} 

<hr className="h-px my-1 bg-gray-200 border-1 w-full md:w-[80%] border-solid dark:bg-gray-700" />
<div className="flex flex-col w-full justify-start items-start gap-3 py-3">
<div className="flex flex-col sm:flex justify-start items-star md:items-start gap-2 w-full">
<h5 className="text-gray-500 text-[18px] my-0">Colours: </h5>
<div className="flex flex-col xxs:flex-row justify-start items-start xxs:items-center gap-3">
<div className="flex justify-center gap-2">
<h6>Red</h6>
    <input type="radio" name="color" id="" />
</div>
<div className="flex justify-center gap-2">
<h6>White</h6>
<input type="radio" name="color" id="" />
</div>
<div className="flex justify-center gap-2">
<h6>Black</h6>
<input type="radio" name="color" id="" />
</div>
</div>
</div>
<div className="flex flex-col sm:flex justify-start items-start gap-0 sm:gap-2">
<h5 className="text-gray-500 text-[18px]">Size: </h5>
<div className="flex justify-center items-center gap-3">
<button type="submit" className="text-[15px] border-1 border-solid dark:bg-gray-700 px-[5px]">XS</button>
<button type="submit" className="text-[15px] border-1 border-solid dark:bg-gray-700 px-[10px]">S</button>
<button type="submit" className="text-[15px] border-1 border-solid dark:bg-gray-700 px-[5px]">M</button>
<button type="submit" className="text-[15px] border-1 border-solid dark:bg-gray-700 px-[10px]">L</button>
<button type="submit" className="text-[15px] border-1 border-solid dark:bg-gray-700 px-[5px]">XL</button>
</div>
</div>

<div className="flex justify-start gap-2 w-full">
<div className="flex justify-start items-start gap-0 w-2/4 sm:w-1/3">
<button type="submit" className=" text-black border-1 border-solid dark:bg-gray-700 px-[10px] left-0"> - </button>
<input type="text" name="input" id="" className="border-solid dark:bg-gray-700 border-1 w-[90%] sm:w-[60%] text-center " />
<button type="submit" className="bg-black border-1 border-none rounded-sm text-white px-[10px] py-[1px] right-0"> + </button>
</div>
<button className="text-white text-[16px] bg-black border-none rounded-sm w-[35%] ">Buy Now</button>
<div className="border border-solid rounded-sm flex justify-center items-center p-1"><AiOutlineHeart /></div>
</div>
<div className="flex flex-col sm:flex-row md:flex-col xl:flex-row gap-4 md:gap-0 my-1">
<div className="border-1 border-solid dark:bg-gray-700 gap-2 w-full sm:w-[82%] md:w-full">
<div type="submit" className="flex justify-start items-center gap-3 p-3">
<div className="text-black"><TbTruckDelivery/></div>
<div className="text-black flex flex-col justify-start gap-1">
    <h5 className="text-[12px] my-0">Free Delivery</h5>
    <h5 className="text-[12px]">Enter your postal code for Delivery Availability</h5>
</div>
</div>
</div>
<div className="border-1 border-solid dark:bg-gray-700 gap-2 w-full sm:w-[82%] md:w-full">
<div type="submit" className="flex justify-start items-center gap-3 p-3">
<div className="text-black"><GiReturnArrow/></div>
<div className="text-black flex flex-col justify-start gap-1">
    <h5 className="text-[12px] my-0">Return Delivery</h5>
    <h5 className="text-[12px]">Free 30 Days Delivery Returns. Details</h5>
</div>
</div>
</div>
</div>

</div>
                     </div>


                    </div>

            <div style={{display: 'flex', flexDirection: 'column', padding: '0 0 50px', }}>
            <div style={todayStyle}>
    <div style={rectangle}></div>
    <h3 style={{fontSize: '20px'}}>Related Item</h3>
    </div>
                    <Products/>
            </div>
                    </div>
                    </div>
                </div>
        <FooterSect/>
        </>
    )
}
const links={textDecoration: 'none', fontStyle: 'none', color: '#000'}
const todayStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '15px',
    width: '80%',
    color: 'red',
    padding: '0'
     }
    
    const rectangle ={
        backgroundColor: '#DB4444', 
        color: 'red',
        border: '1px solid #DB4444 ',
        padding: '18px 8px',
        borderRadius: '3px'
    }
export default ProductDetails;

