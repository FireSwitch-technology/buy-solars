import FooterSect from "@/components/footer";
import {TiDelete} from 'react-icons/ti'
import React from "react";
import Link from "next/link";
import NBar from "@/components/navb";

const CartPage = () => {
    return(
<>
<NBar/>

<div className="flex flex-col w-full justify-center items-center gap-[15px] py-[15px] px-0 bg-white">
<div className="flex flex-col w-[90%] justify-center items-center">
<div className="flex flex-col w-full justify-center items-center gap-[15px] py-[15px] px-0 bg-white">
<div className="flex w-full justify-start gap-2 text-black py-[20px] px-3 text-[18px] items-center">
    <h3 className="text-sm"><Link href='/' style={links}>Home</Link></h3>
    <h3 >/</h3>
    <h3 className="text-sm"><Link href='/cart' style={links}>Cart</Link></h3>
   
</div>

<div className="w-full flex justify-center items-center sm:flex-col sm:gap-4 ">
<div className="w-full flex gap-4 flex-col sm:flex-row justify-between sm:items-center text-black  px-3 xs:py-[10px] sm:shadow-xl">
<h3 className=" text-[14px] ">Product</h3>
<h3 className=" text-[14px]">Price</h3>
<h3 className=" text-[14px] ">Quantity</h3>
<h3 className=" text-[14px]">Subtotal</h3>
</div>

<div className="flex flex-col sm:flex-row w-full md:justify-between justify-center xs:justify-end sm:items-center items-end  text-black bg-white text-[18px] xs:py-[0px] sm:px-[20px] lg:p-3  sm:shadow-xl md:gap-[9rem] gap-4 ">
<div className="flex justify-between items-center sm:justify-start sm:items-start p-1 md:w-[20%] xs:flex-col md:gap-[20px] gap-2 w-2/5  lg:w-1/5">
<div className="hidden sm:block items-end relative sm:w-2/5 md:w-full gap-0 w-full">
<div className=" sm:w-10">
<img src="/images/TV.png" alt="" className=" w-full h-full "/>
</div>
<div className="flex justify-start absolute -top-[5px] -left-[3px] text-white bg-[red] rounded-[50%] border-none md:max-w-[auto] w-100%"><TiDelete/></div>
</div>
<h6 className="md:text-[18px] whitespace-wrap text-[10px] xs:text-[15px] xs:flex flex my-0">LCD Monitor</h6>
</div>

<div className="flex flex-col sm:flex-row w-full md:w-[68%] p-0 justify-between items-end sm:items-center gap-3">
<h6 className="flex text-sm">$500</h6>
<input type="number" className="border border-solid border-gray-400 md:w-[10%] sm:w-[15%] w-[30%] py-0 px-0 bg-white text-black"/>
<h6 className="flex text-sm">$500</h6>

</div>
</div>
</div>
<div className="flex flex-col sm:flex-row w-full justify-between items-center text-black py-2 gap-3 ">
<button className="w-full sm:w-3/5 md:w-2/5 lg:w-1/5 py-2 px-6 border border-solid border-gray-400 rounded-sm bg-white text-black">Return To Shop</button>
<button className="w-full sm:w-3/5 md:w-2/5 lg:w-1/5 py-2 px-6 border border-solid border-gray-400 rounded-sm bg-white text-black">Update Cart</button>

</div>
<div className="flex flex-col md:flex-row w-full items-start text-black font-2xl md:justify-between md:py-8 md:gap-0 gap-5">
<div className="flex flex-col md:flex-row justify-between w-full items-start gap-3 sm:gap-5 md:w-2/3 font-2xl md:justify-start text-black">
<input type="text" className="w-full flex md:justify-center md:items-center border border-solid rounded-2 p-2 bg-white" placeholder="Coupon Code"/>
<button className="w-full flex xxs:justify-center py-2 px-4 rounded-2 bg-black text-white ">Apply Coupon</button>
</div>
<div className="flex flex-col w-full md:w-1/2 justify-center p-4 text-black border-solid border border-black gap-3">
<h1 className="text-black font-normal text-2xl">Cart Total</h1>
<div className="flex justify-between text-black w-full">
<h5 className="flex text-sm">Subtotal:</h5>
<h2 className="flex text-sm">$500</h2>
</div>
<hr/>
<div className="flex justify-between text-black w-full">
<h5 className="flex text-sm">Shipping:</h5>
<h2 className="flex text-sm">Free</h2>
</div>
<hr/>
<div className="flex justify-between text-black w-full">
<h5 className="flex text-sm">Total:</h5>
<h2 className="flex text-sm">$786</h2>

</div>
<div className="flex justify-center items-center">
<button className="py-2 border-none border rounded-sm bg-black sm:w-1/2 md:w-full w-full text-white text-[13px] xs:text-[18px]">Procees to checkout</button>

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