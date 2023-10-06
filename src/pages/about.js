import FooterSect from "@/components/footer";
import React from "react";
import Link from "next/link";
import {AiOutlineInstagram} from 'react-icons/ai'
import {LuTwitter} from 'react-icons/lu'
import {LiaLinkedinIn} from 'react-icons/lia'
import { css } from "styled-components"; // Assuming you are using styled-components
import NBar from "@/components/navb";
import Styles from '@/styles/myabout.module.css'

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
        <NBar/>
        <section className={Styles.container}>
  <div className={Styles.innerContainer}>
    <div className={Styles.contentContainer}>
    <div className={Styles.linkRow}>
            <h3 className={Styles.headerStyle}>
              <Link href='/' className={Styles.links}>Home</Link>
            </h3>
            <h3 className={Styles.poppinsFont}>/</h3>
            <h3 className={Styles.headerStyle}>
              <Link href='/about' className={Styles.links}>About Us</Link>
            </h3>
          </div>
      <div className={Styles.linkContainer}>
        
          
          <div className={Styles.wraps}>
          <div className={Styles.linkRow2}>
            <h1 className={Styles.story}>Our Story</h1>
            <p className={Styles.paragraphStyle}>
              Founded in 2021, BuySolar was born out of a passion for
              sustainability and a commitment to reducing our carbon footprint.
              Our journey began with a vision to transform the energy landscape
              by promoting solar energy as a clean and affordable alternative to
              traditional power sources.
            </p>
            <p className={Styles.paragraphStyle}>
              Over the years, we have grown into a team of dedicated
              professionals who share the same values and are driven by a common
              purpose – to make solar energy a reality for homes, businesses,
              and communities worldwide. With unwavering dedication and a focus
              on innovation, we have become a trusted name in the solar industry.
            </p>
          </div>
        </div>
    <img
      src="/images/Side Image.png"
      alt="Login Background"
      className={Styles.imageStyle}
    />
          </div>
       
  </div>
  </div>

</section>

<div className={Styles.container1}>
  <div className={Styles.innerContainer1}>
    <div className={Styles.contentContainer}>
      <div className={Styles.imageFlex}>
        {partners.map((partner, index) => (
          <div key={index} className={Styles.partnerColumn}>
            <div className={Styles.imageContainer}>
              <img
                src={partner.image}
                alt="Login Background"
                className={Styles.imageStyle2}
              />
            </div>
            <div className={Styles.partnerDetails}>
              <h3 className={Styles.partnerName}>{partner.name}</h3>
              <h3 className={Styles.partnerPost}>{partner.post}</h3>
              <div className={Styles.partnerLinks}>
                <div className={Styles.partnerLink}>
                  <Link href={partner.icon1.link} className={Styles.links}>{partner.icon1.icon}</Link>
                </div>
                <div className={Styles.partnerLink}>
                  <Link href={partner.icon2.link} className={Styles.links}>{partner.icon2.icon}</Link>
                </div>
                <div className={Styles.partnerLink}>
                  <Link href={partner.icon3.link} className={Styles.links}>{partner.icon3.icon}</Link>
                </div>
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

export default AboutPage;