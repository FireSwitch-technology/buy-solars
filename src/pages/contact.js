import React from "react";
import Link from "next/link";
import {BsTelephone, BsFillEnvelopeFill} from 'react-icons/bs'
import FooterSect from "@/components/footer";
import NBar from "@/components/navb";
import Styles from '@/styles/mycontact.module.css'


const ContactPage = () => {
  return (
    <>
      <NBar />
      <div className={Styles.mainContainer}>
            <div className={Styles.navLinks}>
                <div className={Styles.linkItem }>
                <div className={Styles.navLink}>
            <div><Link href='/' className={Styles.links}>Home</Link></div>
            <div isPoppins>/</div>
            <div><Link href='/contact' className={Styles.links}><em>Contact</em></Link></div>
            </div>
   
        <div className={Styles.wrap1}>
                  <div className={Styles.wrap2 }>
                    <div className={Styles.wrap3}>
          <div className={Styles.wrap4}>
<div className={Styles.icon1}><BsTelephone/></div>                 
       <h5>Call To Us</h5>
                    
                    </div>
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>
                    </div>
                     <hr/> 
                    <div className={Styles.wrap3}>
          <div className={Styles.wrap5}>
<div className={Styles.icon1}><BsFillEnvelopeFill/></div>                 
       <h5>Write To Us</h5>
                    
                    </div>
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p className={Styles.pText}>Email:</p>
                    <p className={Styles.pText}> customer@exclusive.com</p>
                    <p className={Styles.pText}>Email:</p>
                    <p className={Styles.pText}>customer@exclusive.com</p>
                    </div>
                  </div>
                    
                    <div className={Styles.wrap6}>
                    <div className={Styles.wrap7}>
                    <input type="text" className={Styles.inputStyle} placeholder="Your Name *"/>
                    <input type="text" className={Styles.inputStyle} placeholder="Your Email *"/>
                    <input type="text" className={Styles.inputStyle} placeholder="Your Phone *"/>

</div>
<textarea typeof="text" className={Styles.inputStyle2} placeholder="Your Massage"/>
<button className={Styles.btnStyle}>Send Massage</button>
</div>
</div>
     </div>
     </div>
</div>
      <FooterSect/>
    </>
  )
}

export default ContactPage;
