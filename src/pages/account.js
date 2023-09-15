import Navbar from "@/components/navbar";
import React from "react";
import Link from "next/link";
import FooterSect from "@/components/footer";


const AccountPage = () => {

  


    return(
        <>
        <Navbar/>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', padding: '10px 0', backgroundColor: '#fff' }}>
            <div style={{ display: 'flex',flexDirection: 'column',  width: '90%', justifyContent: 'center', alignItems: 'center', padding: '10px 0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '20px', color: '#fff', }}>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', color: '#000', }}>
                <div style={{display: 'flex', width: '100%' ,justifyContent: 'flex-start', alignItems: 'center', gap: '10px', color: '#000', padding: '20px 0',fontFamily: 'Poppins', fontSize: '18px' }}>
                    <h3 style={{fontWeight: '400', fontSize: '15px'}}><Link href='/' style={links}>Home</Link></h3>
                    <h3>/</h3>
                    <h3 style={{fontWeight: '400', fontSize: '15px'}}><Link href='/cart' style={links}>My Account</Link></h3>
                 
                </div>
                    <h3 style={{fontWeight: '400', fontSize: '15px', display: 'flex', gap: '10px'}}>Welcome <em style={{color: '#A51717'}}>Timothy</em></h3>

                 
            
                   </div>
                   <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-start', gap:'100px', color: '#000', }}>
                   <div style={{ display: 'flex', flexDirection: 'column', width: '25%', justifyContent: 'flex-start', gap:'20px', color: '#000', padding: '25px 15px', borderRadius: '10px'}}>
                   <div style={{ display: 'flex',flexDirection: 'column', justifyContent: 'flex-start', gap:'10px', color: '#000', }}>
                   <h3 style={h3Style}>Manage My Account
      </h3>
      
        <ul style={selectStyle}>
          <Link href='/profile' style={links}><li style={listStyle} value="profile">
            My Profile
          </li></Link>
          <Link href='/contact' style={links}><li style={listStyle} value="address">
            Address Book
          </li></Link>
         <Link href='/payment' style={links}> <li style={listStyle} value="payment">
            My Payment Options
          </li></Link>
        </ul>
    
</div>
<div style={{ display: 'flex',flexDirection: 'column', justifyContent: 'flex-start', gap:'10px', color: '#000', }}>
                   <h3 style={h3Style}>My Orders
    
      </h3>
     
        <ul style={selectStyle}>
          <Link href='/profile' style={links}><li style={listStyle} value="My Returns">
            My Returns
          </li></Link>
          <Link href='/contact' style={links}><li style={listStyle} value="My Cancellations">
            My Cancellations
          </li></Link>
      
        </ul>
</div>
<div style={{ display: 'flex',flexDirection: 'column', justifyContent: 'flex-start', gap:'10px', color: '#000', }}>
                   <h3 style={h3Style}>My WishList
           
      </h3>
        <ul style={selectStyle}>
          <Link href='/profile' style={links}><li style={listStyle} value="My Returns">
            My Returns
          </li></Link>
          <Link href='/contact' style={links}><li style={listStyle} value="My Cancellations">
            My Cancellations
          </li></Link>
      
        </ul>
</div>

     </div>
     <div style={{ display: 'flex', flexDirection: 'column', width: '75%', justifyContent: 'flex-start',gap:'15px', color: 'grey', boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.1)', padding: '60px', borderRadius: '10px' }}>
<h3 style={{color: 'red', font: 'Poppin 20px 500 '}}>Edit Your Profile</h3>
<div style={{display: 'flex', width: '100%', justifyContent: 'space-between',}}>
<div style={{display: 'flex', width:'40%', flexDirection: 'column', justifyContent: 'center',gap: '10px'}}>
<h3 style={{fontSize: '15px'}}>First Name</h3>
<input type="text" style={inputStyle}/>
</div>
<div style={{display: 'flex',width: '40%', flexDirection: 'column', justifyContent: 'center', gap: '10px'}}>
<h3 style={{fontSize: '15px'}}>Last Name</h3>
<input type="text" style={inputStyle}/>
</div>
</div>
<div style={{display: 'flex', width: '100%', justifyContent: 'space-between',}}>
<div style={{display: 'flex',width: '40%', flexDirection: 'column', justifyContent: 'flex-start',gap: '10px'}}>
<h3 style={{fontSize: '15px'}}>Email</h3>
<input type="text" style={inputStyle}/>
</div>
<div style={{display: 'flex',width: '40%', flexDirection: 'column', justifyContent: 'flex-start', gap: '10px'}}>
<h3 style={{fontSize: '15px'}}>Address</h3>
<input type="text" style={inputStyle}/>
</div>

</div>
<h3 style={{fontSize: '15px'}}>Password Changes</h3>
<input type="text" style={inputStyle} placeholder="Current Passwod"/>
<input type="text" style={inputStyle} placeholder="New Passwod"/>
<input type="text" style={inputStyle} placeholder="Confirm New Passwod"/>
<div style={{display: 'flex',width: '100%', justifyContent: 'space-between', alignItems: 'center', gap: '10px'}}>
<p>Cancel</p>
<button style={{backgroundColor: '#000', padding: '10px 0', width: '50%', border: 'none', borderRadius: '5px',color: '#fff', font: 'Poppins 20px 500',}}>Save Changes</button>
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


const h3Style = { fontWeight: '600', fontSize: '16px', display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', padding: '0 30px', color: 'grey' }

const selectStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: '',
    flexDirection: 'column',
    gap: '10px'
}
const listStyle = {fontWeight: '400', fontSize: '15px', fontFamily: 'Poppins',listStyle: 'none',textDecoration: 'none',color: 'grey',paddingLeft: '50px'}

const inputStyle = {padding: '12px', backgroundColor: '#F5F5F5', width: '100%',border: 'none',}

const links={textDecoration: 'none', fontStyle: 'none', color: 'grey'}


export default AccountPage;