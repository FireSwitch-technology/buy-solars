import React from "react";
import {LuAsterisk} from 'react-icons/lu'
import {TiDelete} from 'react-icons/ti'
import Link from "next/link";
import NBar from "./navb";

const Checkout = () => {
    return(
        <>
         <NBar/>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', padding: '10px 0', backgroundColor: '#fff' }}>
            <div style={{ display: 'flex',flexDirection: 'column',  width: '90%', justifyContent: 'center', alignItems: 'center', padding: '10px 0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '20px', color: '#fff', }}>
                <div className="hidden whitespace-wrap sm:flex w-full justify-start gap-[10px] text-black py-[20px] text-[18px] ">
                    <h3 style={{fontWeight: '400', fontSize: '15px'}}><Link href='/'>Account</Link></h3>
                    <h3>/</h3>
                    <h3 style={{fontWeight: '400', fontSize: '15px'}}><Link href='/cart'>My Account</Link></h3>
                    <h3>/</h3>
                    <h3 style={{fontWeight: '400', fontSize: '15px'}}><Link href='/cart'>Product</Link></h3>
                    <h3>/</h3>
                    <h3 style={{fontWeight: '400', fontSize: '15px'}}><Link href='/cart'>ViewCart</Link></h3>
                    <h3>/</h3>
                    <h3 style={{fontWeight: '500', fontSize: '15px'}}><Link href='/cart'>CheckOut</Link></h3>
                </div>

                <h1 style={{display: 'flex', width: '100%' ,justifyContent: 'flex-start', color: '#000',fontFamily: 'Poppins', fontSize: '20px', }}>Billing Details</h1>

<div className="flex lg:flex-row flex-col w-full justify-between text-black text-[18px]">
<div className="lg:flex w-full lg:w-[45%] lg:flex-col justify-between text-black text-[18px] ">

<div style={{display: 'flex',  flexDirection: 'column', width: '100%' ,justifyContent: 'space-between', color: '#000', padding: '10px 0',fontFamily: 'Poppins', fontSize: '18px' }}>
<div style={{display: 'flex', flexDirection: 'column',  width: '100%' ,justifyContent: 'center', color: '#000',fontFamily: 'Poppins', fontSize: '18px', position: "relative" }}>
<h3 style={{fontFamily: 'Poppins', fontSize: '20px',fontWeight: '400' }}> First Name</h3>
<div style={{position: "absolute", width: '0.1rem', bottom: '5px', left: '98px', color: 'red',}}><LuAsterisk /></div>
</div>
<input type="text" style={{padding: '10px', backgroundColor: '#F5F5F5', width: '100%',border: 'none'}}/>
</div>
<div style={{display: 'flex', flexDirection: 'column', width: '100%' ,justifyContent: 'space-between', color: '#000', padding: '20px 0',fontFamily: 'Poppins', fontSize: '18px' }}>
<h3 style={{fontFamily: 'Poppins', fontSize: '20px',fontWeight: '400' }}> Company Name</h3>
<input type="text" style={{padding: '10px', backgroundColor: '#F5F5F5', width: '100%', border: 'none'}}/>
</div>
<div style={{display: 'flex', flexDirection: 'column', width: '100%' ,justifyContent: 'space-between', color: '#000', padding: '20px 0',fontFamily: 'Poppins', fontSize: '18px' }}>
<div style={{display: 'flex', flexDirection: 'column',  width: '100%' ,justifyContent: 'center', color: '#000',fontFamily: 'Poppins', fontSize: '18px', position: "relative" }}>
<h3 style={{fontFamily: 'Poppins', fontSize: '20px',fontWeight: '400' }}>Street Address</h3>
<div style={{position: "absolute", bottom: '5px', left: '8rem', color: 'red',}}><LuAsterisk /></div>
</div>
<input type="text" style={{padding: '10px', backgroundColor: '#F5F5F5', width: '100%',border: 'none'}}/>
</div>
<div style={{display: 'flex', flexDirection: 'column', width: '100%' ,justifyContent: 'space-between', color: '#000', padding: '20px 0',fontFamily: 'Poppins', fontSize: '18px' }}>
<h3 style={{fontFamily: 'Poppins', fontSize: '20px',fontWeight: '400' }}>Apartment, floor, etc. (optional)</h3>
<input type="text" style={{padding: '10px', backgroundColor: '#F5F5F5', width: '100%', border: 'none'}}/>
</div>
<div style={{display: 'flex',  flexDirection: 'column', width: '100%' ,justifyContent: 'space-between', color: '#000', padding: '20px 0',fontFamily: 'Poppins', fontSize: '18px' }}>
<div style={{display: 'flex', flexDirection: 'column',  width: '100%' ,justifyContent: 'center', color: '#000',fontFamily: 'Poppins', fontSize: '18px', position: "relative" }}>
<h3 style={{fontFamily: 'Poppins', fontSize: '20px',fontWeight: '400' }}>Town/City</h3>
<div style={{position: "absolute", bottom: '5px', left: '5.7rem', color: 'red',}}><LuAsterisk /></div>
</div>
<input type="text" style={{padding: '10px', backgroundColor: '#F5F5F5', width: '100%',border: 'none'}}/>
</div>
<div style={{display: 'flex', flexDirection: 'column', width: '100%' ,justifyContent: 'space-between', color: '#000', padding: '20px 0',fontFamily: 'Poppins', fontSize: '18px' }}>
<div style={{display: 'flex', flexDirection: 'column',  width: '100%' ,justifyContent: 'center', color: '#000',fontFamily: 'Poppins', fontSize: '18px', position: "relative" }}>
<h3 style={{fontFamily: 'Poppins', fontSize: '20px',fontWeight: '400' }}>Phone Number</h3>
<div style={{position: "absolute", width: '0.1rem', bottom: '5px', left: '8.3rem', color: 'red',}}><LuAsterisk /></div>
</div>
<input type="text" style={{padding: '10px', backgroundColor: '#F5F5F5', width: '100%',border: 'none'}}/>
</div>
<div style={{display: 'flex', flexDirection: 'column', width: '100%' ,justifyContent: 'space-between', color: '#000', padding: '20px 0',fontFamily: 'Poppins', fontSize: '18px' }}>
<div style={{display: 'flex', flexDirection: 'column',  width: '100%' ,justifyContent: 'center', color: '#000',fontFamily: 'Poppins', fontSize: '18px', position: "relative" }}>
<h3 style={{fontFamily: 'Poppins', fontSize: '20px',fontWeight: '400' }}>Email Address</h3>
<div style={{position: "absolute", bottom: '5px', left: '7.2rem', color: 'red',}}><LuAsterisk /></div>
</div>
<input type="email" style={{padding: '10px', backgroundColor: '#F5F5F5', width: '100%',border: 'none'}}/>
</div>
<div style={{display: "flex", justifyContent: "flex-start", alignItems: 'center', gap: '10px', width: '100%'}}>
<input type="checkbox"/>
<h3 style={{fontFamily: 'Poppins', fontSize: '18px',fontWeight: '400' }}>Save this information for faster check-out next time</h3>
</div>
</div>

<div className="lg:flex lg:w-[45%] w-full flex-col justify-start text-black px-0 py-5 lg:px-5 gap-5 text-[18px]">
<div style={{display: 'flex', width: '100%' ,justifyContent: 'space-between', alignItems: 'center', color: '#000', fontFamily: 'Poppins', fontSize: '18px',display: 'flex',padding: '10px 0',}}>
<div style={{display: "flex", justifyContent: "flex-start", alignItems: "center", padding: 0,  gap:'10px',}}>
<div style={{ position: "relative", width: '30%',}}>
<img src="/images/TV.png" alt="" style={{width: '80%', gap: 0, padding: 0}}/>
<div style={{display: "flex", justifyContent:'flex-start', position: "absolute", top: '-5px', left: '-3px', color: 'red', borderRadius: '50%', border: 'none', width: '30%'}}><TiDelete/></div>
</div>
<h6 style={{ fontFamily: 'Poppins', fontSize: '15px' }}>LCD Monitor</h6>
</div>

<div style={{ padding: 0, display: "flex", justifyContent: "space-between", alignItems: "center",}}>
<h6 style={{ fontFamily: 'Poppins', fontSize: '15px' }}>$500</h6>
</div>

</div>
<div style={{display: "flex", justifyContent: "space-between", color: '#000',}}>
<h5 style={{ fontFamily: 'Poppins', fontSize: '15px' }}>Subtotal:</h5>
<h2 style={{ fontFamily: 'Poppins', fontSize: '15px' }}>$500</h2>
</div>
<hr/>
<div style={{display: "flex", justifyContent: "space-between", color: '#000',}}>
<h5 style={{ fontFamily: 'Poppins', fontSize: '15px' }}>Shipping:</h5>
<h2 style={{ fontFamily: 'Poppins', fontSize: '15px' }}>Free</h2>
</div>
<hr/>
<div style={{display: "flex", justifyContent: "space-between", color: '#000', }}>
<h5 style={{ fontFamily: 'Poppins', fontSize: '15px' }}>Total:</h5>
<h2 style={{ fontFamily: 'Poppins', fontSize: '15px' }}>$786</h2>

</div>
<div className="flex flex-col lg:flex-row justify-start text-black gap-2">
<div className="flex justify-start items-center text-black lg:w-[40%] gap-[10px]">
<input type="radio" />
<h5 className="whitespace-nowrap text-[16px]">Bank</h5>
    </div>
    <div className="flex w-full lg:justify-between lg:items-center gap-3 lg:gap-1">
<img src="/images/image 32.png" alt="" />
<img src="/images/image 31.png" alt="" />
<img src="/images/image 30.png" alt="" />
<img src="/images/image 33.png" alt="" />

    </div>
</div>
<div className="flex justify-start items-center text-black w-[40%] gap-[10px] lg:m-0 my-3">
<input type="radio" />
<h5 className="whitespace-nowrap text-[16px]">Cash on delivery</h5>
    </div>
    <div className="flex flex-col sm:flex-row justify-between items-start text-black text-[18px] gap-[10px] " >
<input type="text" className="flex w-full sm:w-[50%] justify-center items-center border border-solid p-[10px] bg-white text-black" placeholder="Coupon Code"/>
<button className="w-full sm:w-[45%] py-[10px] px-[30px] border-none border rounded-sm bg-black text-white">Apply Coupon</button>
</div>
<button className="py-[10px] px-[30px] border-none rounded-sm bg-black text-white w-full lg:m-0 my-3">Place Order</button>

</div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Checkout;