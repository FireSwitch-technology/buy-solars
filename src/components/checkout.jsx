import React from "react";
import Navbar from "./navbar";
// import {PiAsteriskSimpleFill} from 'react-icons/pi'
import {LuAsterisk} from 'react-icons/lu'
import {TiDelete} from 'react-icons/ti'
import Link from "next/link";

const Checkout = () => {
    return(
        <>
        <Navbar />
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', padding: '10px 0', backgroundColor: '#fff' }}>
            <div style={{ display: 'flex',flexDirection: 'column',  width: '90%', justifyContent: 'center', alignItems: 'center', padding: '10px 0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '20px', color: '#fff', }}>
                <div style={{display: 'flex', width: '100%' ,justifyContent: 'flex-start', gap: '10px', color: '#000', padding: '20px 0',fontFamily: 'Poppins', fontSize: '18px' }}>
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

<div style={{display: 'flex', width: '100%' ,justifyContent: 'space-between', color: '#000',fontFamily: 'Poppins', fontSize: '18px' }}>
<div style={{display: 'flex', width: '45%', flexDirection: 'column' ,justifyContent: 'space-between', color: '#000',fontFamily: 'Poppins', fontSize: '18px' }}>

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
<div style={{display: "flex", justifyContent: "flex-start", gap: '10px', width: '100%'}}>
<input type="checkbox"/>
<h3 style={{fontFamily: 'Poppins', fontSize: '20px',fontWeight: '400' }}>Save this information for faster check-out next time</h3>
</div>
</div>

<div style={{display: 'flex', width: '40%', flexDirection: 'column' ,justifyContent: 'flex-start', color: '#000', padding: '5px 70px 0 0',fontFamily: 'Poppins', fontSize: '18px', gap: '20px'}}>
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
<div style={{display: "flex", justifyContent: "space-between", color: '#000', }}>
<div style={{display: "flex", justifyContent: "flex-start", alignItems: 'center', color: '#000', width: '40%', gap: '10px' }}>
<input type="radio" />
<h5>Bank</h5>
    </div>
    <div style={{display: "flex", justifyContent: "center", alignItems: 'center',gap: '5px' }}>
<img src="/images/image 32.png" alt="" />
<img src="/images/image 31.png" alt="" />
<img src="/images/image 30.png" alt="" />
<img src="/images/image 33.png" alt="" />

    </div>
</div>
<div style={{display: "flex", justifyContent: "flex-start", alignItems: 'center', color: '#000', width: '40%', gap: '10px' }}>
<input type="radio" />
<h5>Cash on delivery</h5>
    </div>
    <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'flex-start',color: '#000', fontFamily: 'Poppins', fontSize: '18px', gap: '10px' }}>
<input type="text" style={{display: 'flex',  width:'60%', justifyContent: 'center', alignItems: 'center', border: '1px solid black',padding: '10px', backgroundColor: '#fff', color:'#000' }} placeholder="Coupon Code"/>
<button style={{padding: '10px 30px', border: 'none', borderRadius: '5px', backgroundColor: '#000', color: '#fff'}}>Apply Coupon</button>
</div>
<button style={{padding: '10px 30px', border: 'none', borderRadius: '5px', backgroundColor: '#000', color: '#fff', width: '100%'}}>Place Order</button>

</div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Checkout;