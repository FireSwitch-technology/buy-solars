import {AiOutlineSend, AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'
import {LuTwitter} from 'react-icons/lu'
import {LiaLinkedinIn} from 'react-icons/lia'
import Link from 'next/link';
const FooterSect = () => {
    return(

<div style={{display: 'flex', width: '100%' ,justifyContent: 'center', alignItems: 'center', padding: '15px 0', backgroundColor: '#000'}}>
<div style={{display: 'flex', width: '90%' ,justifyContent: 'center', alignItems: 'center', padding: '15px 0'}}>
<div style={{display: 'flex', width: '100%' ,justifyContent: 'center', alignItems: 'center',gap: '25px', color: '#fff',}}>
<div style={ulStyle}>
<h1 style={{fontFamily: 'Poppins',fontSize: '20px',fontWeight: '600',}}>Exclusive</h1>
<ul style={ulStyle}>
    <li style={{fontFamily: 'Poppins',fontSize: '16px',fontWeight: '400', listStyle: 'none'}}><Link href="" style={links}>Subscribe</Link></li>
    <li style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href="" style={links}>Get 10% off your first order</Link></li>
</ul>
<div style={{width: '100%', position: "relative", display: 'flex', justifyContent: 'center', alignItems:'center'}}>
<input type="email" placeholder="Enter your email" style={{width: '100%',padding: '3px 0', display: 'flex', justifyContent: 'center', alignItems:'center'}}/>
<div style={{position: "absolute", right: '3px', color: '#000', bottom: '5px', }}><AiOutlineSend/></div>
</div>
    </div>
    <div style={ulStyle}>
<h1 style={{fontFamily: 'Poppins',fontSize: '20px',fontWeight: '600',}}>Support</h1>
<ul style={ulStyle}>
    <li style={{fontFamily: 'Poppins',fontSize: '16px',fontWeight: '400', listStyle: 'none'}}><Link href="" style={links}>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</Link></li>
    <li style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href="" style={links}>exclusive@gmail.com</Link></li>
    <li style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href=""style={links}>+88015-88888-9999</Link></li>

</ul>

    </div>
    <div style={ulStyle}>
<h1 style={{fontFamily: 'Poppins',fontSize: '20px',fontWeight: '600',}}>Account</h1>
<ul style={ulStyle}>
    <li style={{fontFamily: 'Poppins',fontSize: '16px',fontWeight: '400',listStyle: 'none'}}><Link href="" style={links}>My Account</Link></li>
    <li style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href="" style={links}>Login/Register</Link></li>
    <li style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href="" style={links}>Cart</Link></li>

</ul>

    </div>
    <div style={ulStyle}>
<h1 style={{display: 'flex', justifyContent:'flex-start', fontFamily: 'Poppins',fontSize: '20px',fontWeight: '600',}}>Quick Links</h1>

    <div style={{fontFamily: 'Poppins',fontSize: '16px',fontWeight: '400', listStyle: 'none'}}><Link href="" style={links}>Privacy Policy</Link></div>
    <div style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href="" style={links}>Terms of Use</Link></div>
    <div style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400',listStyle: 'none'}}><Link href="" style={links}>FAQ</Link></div>
    <div style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href="" style={links}>Contact</Link></div>



    </div>
    <div style={ulStyle}>
<h1 style={{fontFamily: 'Poppins',fontSize: '20px',fontWeight: '600',}}>Follow</h1>
<div style={{display: 'flex', width: '100%' ,justifyContent: 'flex-start', alignItems: 'flex-start',gap: '20px',}}>
    <div style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href=""style={links}><BiLogoFacebook/></Link></div>
    <div style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href="" style={links}><LuTwitter/></Link></div>
    <div style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href="" style={links}><AiOutlineInstagram/></Link></div>
    <div style={{fontFamily: 'Poppins',fontSize: '14px',fontWeight: '400', listStyle: 'none'}}><Link href="" style={links}><LiaLinkedinIn/></Link></div>

</div>

</div>
</div>
    </div>
    </div>
    )
}
const links={textDecoration: 'none', fontStyle: 'none', color: '#fff'}

const ulStyle ={display: 'flex', flexDirection: 'column', width: '100%' ,justifyContent: 'center', gap: '5px', color: '#fff', padding: '10px 0'}

export default FooterSect;