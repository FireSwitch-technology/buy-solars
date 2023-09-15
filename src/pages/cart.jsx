import FooterSect from "@/components/footer";
import Navbar from "@/components/navbar";
import {TiDelete} from 'react-icons/ti'
import React from "react";
import Link from "next/link";

const CartPage = () => {
    return(
<>
<Navbar/>

<div style={{display: 'flex', flexDirection: 'column', width: '100%' ,justifyContent: 'center',alignItems: 'center', gap: '15px', padding: '15px 0', backgroundColor: '#fff'}}>
<div style={{display: 'flex', flexDirection: 'column', width: '90%' ,justifyContent: 'center', alignItems: 'center',gap: '15px',}}>
<div style={{display: 'flex', flexDirection: 'column', width: '100%' ,justifyContent: 'center', alignItems: 'center' ,gap: '15px', color: '#fff', padding: '15px 0'}}>
<div style={{display: 'flex', width: '100%' ,justifyContent: 'flex-start', gap: '10px', color: '#000', padding: '20px 0',fontFamily: 'Poppins', fontSize: '18px',display: 'flex', width: '100%' }}>
    <h3 style={{fontWeight: '400', fontSize: '20px'}}><Link href='/' style={links}>Home</Link></h3>
    <h3>/</h3>
    <h3 style={{fontWeight: '400', fontSize: '20px'}}><Link href='/cart' style={links}>Cart</Link></h3>
   
</div>

<div style={{display: 'flex', width: '100%' ,justifyContent: 'space-between', alignItems: 'center', color: '#000', fontFamily: 'Poppins', fontSize: '16px',display: 'flex', width: '100%',padding: '10px 20px', boxShadow: '4px 2px 15px 2px rgba(0, 0, 0, 0.1)',  }}>
<p>Product</p>
<p>Price</p>
<p>Quantity</p>
<p>Subtotal</p>
</div>

<div style={{display: 'flex', width: '100%' ,justifyContent: 'space-between', alignItems: 'center', color: '#000', fontFamily: 'Poppins', fontSize: '18px',display: 'flex', width: '100%', padding: '10px 20px', boxShadow: '0px 1px 13px 0px rgba(0, 0, 0, 0.1)',}}>
<div style={{display: "flex", justifyContent: "flex-start", alignItems: "center", padding: 0, width: '20%'}}>
<div style={{ position: "relative", width: '60%', gap: 0}}>
<img src="/images/TV.png" alt="" style={{width: '50%', gap: 0, padding: 0}}/>
<div style={{display: "flex", justifyContent:'flex-start', position: "absolute", top: '-5px', left: '-3px', color: '#fff', backgroundColor: 'red', borderRadius: '50%', border: 'none', maxWidth: '30%'}}><TiDelete/></div>
</div>
<h6 style={{ fontFamily: 'Poppins', fontSize: '15px' }}>LCD Monitor</h6>
</div>

<div style={{width: '68%', padding: 0, display: "flex", justifyContent: "space-between", alignItems: "center",}}>
<h6 style={{ fontFamily: 'Poppins', fontSize: '15px' }}>$500</h6>
<input type="number" style={{border: '1px solid grey', borderRadius: '5px', width: '7%', padding: '7px 0', backgroundColor: '#fff', color: '#000'}}/>
<h6 style={{ fontFamily: 'Poppins', fontSize: '15px' }}>$500</h6>

</div>
</div>
<div style={{display: "flex", width: '100%', justifyContent: 'space-between', alignItems: 'center',color: '#000', fontFamily: 'Poppins', fontSize: '18px' }}>
<button style={{padding: '10px 30px', border: '2px solid grey', borderRadius: '5px', backgroundColor: '#fff', color: '#000'}}>Return To Shop</button>
<button style={{padding: '10px 30px', border: '2px solid grey', borderRadius: '5px', backgroundColor: '#fff', color: '#000'}}>Update Cart</button>

</div>
<div style={{display: "flex", width: '100%', justifyContent: 'space-between',color: '#000', fontFamily: 'Poppins', fontSize: '18px', padding: '40px 0' }}>
<div style={{display: "flex", justifyContent: 'center', alignItems: 'flex-start',color: '#000', fontFamily: 'Poppins', fontSize: '18px', gap: '10px' }}>
<input type="text" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black',padding: '10px', backgroundColor: '#fff', color:'#000' }} placeholder="Coupon Code"/>
<button style={{padding: '10px 30px', border: 'none', borderRadius: '5px', backgroundColor: '#000', color: '#fff'}}>Apply Coupon</button>
</div>
<div style={{display: "flex", flexDirection: "column",width: '40%', justifyContent: 'center', padding: '20px', color: '#000', border: '1px solid grey', gap: '15px'}}>
<h1 style={{ fontFamily: 'Poppins', fontSize: '20px' }}>Cart Total</h1>
<div style={{display: "flex", justifyContent: "space-between", color: '#000', width: '100%'}}>
<h5 style={{ fontFamily: 'Poppins', fontSize: '15px' }}>Subtotal:</h5>
<h2 style={{ fontFamily: 'Poppins', fontSize: '15px' }}>$500</h2>
</div>
<hr/>
<div style={{display: "flex", justifyContent: "space-between", color: '#000', width: '100%'}}>
<h5 style={{ fontFamily: 'Poppins', fontSize: '15px' }}>Shipping:</h5>
<h2 style={{ fontFamily: 'Poppins', fontSize: '15px' }}>Free</h2>
</div>
<hr/>
<div style={{display: "flex", justifyContent: "space-between", color: '#000', width: '100%'}}>
<h5 style={{ fontFamily: 'Poppins', fontSize: '15px' }}>Total:</h5>
<h2 style={{ fontFamily: 'Poppins', fontSize: '15px' }}>$786</h2>

</div>
<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
<button style={{padding: '10px 0', border: 'none', borderRadius: '5px', backgroundColor: '#000', width: '50%', color: '#fff'}}>Procees to checkout</button>

</div>
</div>
</div>

    </div>
    
    </div>
    </div>
    <FooterSect/>
</>
    )
}
const links={textDecoration: 'none', fontStyle: 'none', color: '#000'}


export default CartPage;