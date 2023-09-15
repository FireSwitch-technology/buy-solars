import FooterSect from "@/components/footer";
import React from "react";
import Navbar from "@/components/navbar";
import Link from "next/link";

const Error404 = () => {
    return(
        <>
        <Navbar/>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center',}}>
            <div style={{ display: 'flex',flexDirection: 'column',  width: '90%', justifyContent: 'center', alignItems: 'center',  }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '20px', color: '#000', padding: '40px 0' }}>
                <div style={{display: 'flex', width: '100%' ,justifyContent: 'flex-start', alignItems: 'center', gap: '10px', color: '#000',fontFamily: 'Poppins', fontSize: '18px', padding: '20px 0' }}>
                    <h3 style={{fontWeight: '400', fontSize: '15px'}}><Link href='/' style={links}>Home</Link></h3>
                    <h3>/</h3>
                    <h3 style={{fontWeight: '400', fontSize: '15px'}}><Link href='/cart' style={links}>404 Error</Link></h3>
                 
                </div>
                   <h1 style={{fontWeight: '400', fontSize: '65px', padding: '30px 0'}}>404 Not Found</h1>
                   <p>Your visited page not found. You may go home page.</p>
                   <button style={{backgroundColor: '#000', padding: '10px 0', width: '30%', border: 'none', borderRadius: '5px',color: '#fff', font: 'Poppins 20px 500', marginBottom: '30px'}}>Back to home page</button>

                    </div>
                    </div>
                    </div>
                    <FooterSect/>
                    </>
)}


const links={textDecoration: 'none', fontStyle: 'none', color: 'grey'}

export default Error404;