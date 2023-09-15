import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import styled, { css } from "styled-components"; // Assuming you are using styled-components
import {BsTelephone, BsFillEnvelopeFill} from 'react-icons/bs'
import FooterSect from "@/components/footer";

// Define the Poppins font family
const poppinsFont = css`
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background-color: #fff;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

const BreadcrumbContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  color: grey;
`;

const BreadcrumbItem = styled.h3`
  font-weight: 400;
  font-size: 15px;
  ${({ isPoppins }) => isPoppins && poppinsFont}
`;

const links = {
  textDecoration: 'none',
  fontStyle: 'none',
  color: 'grey',
};

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center',}}>
            <div style={{ display: 'flex',flexDirection: 'column',  width: '90%', justifyContent: 'center', alignItems: 'center',  }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '20px', color: '#000', padding: '10px 0' }}>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-Start', gap: '10px', padding: '20px'}}>
            <div><Link href='/' style={links}>Home</Link></div>
            <div isPoppins>/</div>
            <div><Link href='/contact' style={links}><em>Contact</em></Link></div>
            </div>
   
        <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-Start', gap: '30px',}}>
        <div style={{ display: 'flex',flexDirection: 'column',  width: '30%', justifyContent: 'center', gap: '15px', boxShadow: '0px 1px 13px 0px rgba(0, 0, 0, 0.05)', backgroundColor: '#fff', padding: '20px' }}>
          <div style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', gap: '10px', }}>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-start', gap: '15px'}}>
<div style={{padding: '8px', backgroundColor: 'red', borderRadius: '50%', color: '#fff',  display: "flex", justifyContent: 'center'}}><BsTelephone/></div>                 
       <h5>Call To Us</h5>
                    
                    </div>
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>
                    </div>
                    <hr/>
                    <div style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', gap: '10px', }}>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems:'center', gap: '15px'}}>
<div style={{padding: '8px', backgroundColor: 'red', borderRadius: '50%', color: '#fff', display: "flex", justifyContent: 'center'}}><BsFillEnvelopeFill/></div>                 
       <h5>Write To Us</h5>
                    
                    </div>
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Email: customer@exclusive.com</p>
                    <p>Email: customer@exclusive.com</p>
                    </div>
                    </div>
                    <div style={{ display: 'flex',flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '15px', boxShadow: '0px 1px 13px 0px rgba(0, 0, 0, 0.05)', backgroundColor: '#fff', padding: '40px 20px 20px' }}>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-Start', alignItems: 'center', gap: '20px', paddingBottom: '20px' }}>
                    <input type="text" style={inputStyle} placeholder="Your Name *"/>
                    <input type="text" style={inputStyle} placeholder="Your Email *"/>
                    <input type="text" style={inputStyle} placeholder="Your Phone *"/>

</div>
<textarea typeof="text" style={inputStyle2} placeholder="Your Massage"/>
<button style={{marginTop:'20px', width: '100%', backgroundColor: '#000', borderRadius: '5px', color: '#fff', fontSize: '18px', border: 'none', padding: '10px 0' }}>Send Massage</button>
</div>
</div>
     </div>
     </div>
</div>
      <FooterSect/>
    </>
  )
}
const inputStyle = {padding: '12px', backgroundColor: '#F5F5F5', width: '100%',border: 'none',}
const inputStyle2 = {padding: '10px 0 100px 10px', backgroundColor: '#F5F5F5', width: '100%',border: 'none',}

export default ContactPage;
