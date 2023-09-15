import FooterSect from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import Link from "next/link";
import {AiOutlineInstagram} from 'react-icons/ai'
import {LuTwitter} from 'react-icons/lu'
import {LiaLinkedinIn} from 'react-icons/lia'
import styled from "styled-components";

import { css } from "styled-components"; // Assuming you are using styled-components

// Define the Poppins font family
const poppinsFont = css`
  font-family: 'Poppins', sans-serif;
  fontSize: '15px';
`;


const partners =[
    {
        image: "/images/image 46.png",
        name: "Tom Cruise",
        post: "Founder & Chairman",
        icon1: {
icon: <LuTwitter/>,
link: "https://twitter.com/"
        }, 
        icon2: {
            icon: <AiOutlineInstagram/>,
            link: "https://instagram.com/"
                    }, 
                    icon3: {
                        icon: <LiaLinkedinIn/>,
                        link: "https://linkedin.com/"
                                }, 
        
    },
    {
        image: "/images/image 47.png",
        name: "Emma Watson",
        post: "Managing Director",
        icon1: {
icon: <LuTwitter/>,
link: "https://twitter.com/"
        }, 
        icon2: {
            icon: <AiOutlineInstagram/>,
            link: "https://instagram.com/"
                    }, 
                    icon3: {
                        icon: <LiaLinkedinIn/>,
                        link: "https://linkedin.com/"
                                }, 
        
    },
    {
        image: "/images/image 51.png",
        name: "Will Smith",
        post: "Product Designer",
        icon1: {
icon: <LuTwitter/>,
link: "https://twitter.com/"
        }, 
        icon2: {
            icon: <AiOutlineInstagram/>,
            link: "https://instagram.com/"
                    }, 
                    icon3: {
                        icon: <LiaLinkedinIn/>,
                        link: "https://linkedin.com/"
                                }, 
        
    },
    
]

const AboutPage = () => {
    return(
        <>
        <Navbar/>
        <section style={{ display: 'flex', width: '100%', justifyContent: 'center', padding: '0', backgroundColor: '#fff' }}>
            <div style={{ display: 'flex',flexDirection: 'column',  width: '90%', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '20px', }}>
                <div style={{ display: 'flex', width: '90%', justifyContent: 'space-around', gap: '20px'}}>
              <div style={{ display: 'flex', flexDirection: 'column', width: '90%', justifyContent: 'center', gap: '20px', color: 'grey', }}>
               <div style={{display: 'flex', width: '80%' ,justifyContent: 'flex-start', alignItems: 'center', gap: '10px', color: '#000', padding: '20px 0'  }}>
                    <h3 style={{fontWeight: '400', fontSize: '15px'}}><Link href='/' style={links}>Home</Link></h3>
                    <h3 style={{...poppinsFont}}>/</h3>
                    <h3 style={{fontWeight: '400', fontSize: '15px'}}><Link href='/about' style={links}>About Us </Link></h3>
                 
                </div>
                <div style={{ color: 'grey', width: '100%', display: 'flex', flexDirection: "column", justifyContent: "center",gap: '20px' }}>
<h1>Our Story</h1>
<p style={{fontSize: '20px'}}>
Founded in 2021, BuySolar was born out of a passion for sustainability and a commitment to reducing our carbon footprint. Our journey began with a vision to transform the energy landscape by promoting solar energy as a clean and affordable alternative to traditional power sources.
</p>
<p>Over the years, we have grown into a team of dedicated professionals who share the same values and are driven by a common purpose – to make solar energy a reality for homes, businesses, and communities worldwide. With unwavering dedication and a focus on innovation, we have become a trusted name in the solar industry.</p>
                </div>
               </div>    
              </div>
        
                    </div>
                    </div>
                    <img
                  src="/images/Side Image.png"
                  alt="Login Background"
                  style={imageStyle}
                />
                </section>

                <div style={{ display: 'flex',width: '100%', justifyContent: 'center', alignItems: 'center', padding: '0', backgroundColor: '#fff' }}>
            <div style={{ display: 'flex', width: '90%', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
                <div style={{ display: 'flex',width: '100%', justifyContent: 'center', alignItems: 'center', }}>
                <div style={{display: 'flex', width: '100%' ,justifyContent: 'center', alignItems: 'center', gap: '100px', color: '#000', padding: '20px 0',  }}>
                    {partners.map((partner, index) => (
                   
              <div key={index} style={{display: 'flex',flexDirection: 'column',justifyContent: 'center', color: '#000', padding: '20px 0'}}>
             <div style={{width: '100%'}}> <img
                  src={partner.image}
                  alt="Login Background"
                  style={imageStyle2}
                /></div>
              <div style={{display: 'flex',flexDirection: 'column', width: '100%' ,justifyContent: 'flex-start', color: '#000',  }}>
<h3 style={{fontSize: '18px', fontFamily: 'Poppins'}}>{partner.name}</h3>
<h3 style={{fontSize: '18px', fontFamily: 'Poppins'}}>{partner.post}</h3>
<div style={{display: 'flex', width: '100%' ,justifyContent: 'flex-start', alignItems: 'flex-start',gap: '20px',}}>
    <div style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href={partner.icon1.link} style={links}>{partner.icon1.icon}</Link></div>
    <div style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href={partner.icon2.link} style={links}>{partner.icon2.icon}</Link></div>
    <div style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href={partner.icon3.link} style={links}>{partner.icon3.icon} </Link></div>

</div>
                </div>
</div>
 ))}
              </div>
              </div>
              </div>
              </div>
        <FooterSect/>
        </>
    )
}

const links={textDecoration: 'none', fontStyle: 'none', color: '#000'}
const imageStyle = {
    width: '70%',
    objectFit: 'cover',
    paddingBottom: '10px'
  };

  const imageStyle2 = {
    width: '100%',
    backgroundColor: '#F5F5F5',
    padding: '20px 20px 0'


  };
export default AboutPage;