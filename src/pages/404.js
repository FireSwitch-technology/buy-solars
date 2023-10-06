import FooterSect from "@/components/footer";
import React from "react";
import Link from "next/link";
import Styles from '@/styles/my404.module.css'
import NBar from "@/components/navb";

const Error404 = () => {
    return(
        <>
        <NBar/>
        <div className={Styles.mainContainer}>
            <div className={Styles.navLinks}>
                <div className={Styles.linkItem }>
                <div className={Styles.navLink}>
                <div><Link href='/' className={Styles.links}>Home</Link></div>
            <div isPoppins>/</div>
            <div><Link href='/contact' className={Styles.links}><em>Error404</em></Link></div>
                 
                </div>
                   <h1 className={Styles.Error}>404 Not Found</h1>
                   <p className={Styles.pText}>Your visited page not found. You may go home page.</p>
<button className={Styles.btnHome}><Link className={Styles.links} href="/">Back to home page</Link></button>
                    </div>
                    </div>
                    </div>
                    <FooterSect/>
                    </>
)}

export default Error404;