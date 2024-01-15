import React from "react";
import Link from "next/link";
import FooterSect from "@/components/footer";
import NBar from "@/components/navb";
import AccountNav from "@/components/accountnav";
import Styles from '@/styles/myaccount.module.css';


const AccountPage = () => {

  


    return(
        <>
       <div className={Styles.nBar}> <NBar/></div>
       <div className={Styles.accountNav}> <AccountNav/></div>
        <div className={Styles.outer}>
        <div className={Styles.second}>
        <div className={Styles.third}>
        <div className={Styles.fourth}>
        <div className={Styles.fifth}>
                    <h3 className={Styles.fifthH3}><Link href='/' className={Styles.links}>Home</Link></h3>
                    <h3>/</h3>
                    <h3 className={Styles.fifthH3}><Link href='/cart' className={Styles.links}>My Account</Link></h3>
                 
                </div>
                    <h3 className={Styles.welcome}>Welcome <em style={{color: '#A51717'}}>Timothy</em></h3>

                 
            
                   </div>
                   <div className={Styles.gen1}>
                   <div className={Styles.gen2}>
                   <div className={Styles.gen3}>
                   <h3 className={Styles.h3Style}>Manage My Account
      </h3>
      
        <ul className={Styles.selectStyle}>
          <Link href='/account' className={Styles.links}><li className={Styles.listStyle} value="profile">
            My Profile
          </li></Link>
          <Link href='/contact' className={Styles.links}><li className={Styles.listStyle} value="address">
            Address Book
          </li></Link>
         <Link href='/payment' className={Styles.links}> <li className={Styles.listStyle} value="payment">
            My Payment Options
          </li></Link>
        </ul>
    
</div>
<div className={Styles.gen3}>
        <h3 className={Styles.h3Style}>My Orders
    
      </h3>
     
        <ul className={Styles.selectStyle}>
          <Link href='/profile' className={Styles.links}><li className={Styles.listStyle} value="My Returns">
            My Returns
          </li></Link>
          <Link href='/contact' className={Styles.links}><li className={Styles.listStyle} value="My Cancellations">
            My Cancellations
          </li></Link>
      
        </ul>
</div>
<div className={Styles.gen3}>
                   <h3 className={Styles.h3Style}>My WishList
           
      </h3>
        <ul className={Styles.selectStyle}>
          <Link href='/profile' className={Styles.links}><li className={Styles.listStyle} value="My Returns">
            My Returns
          </li></Link>
          <Link href='/contact' className={Styles.links}><li className={Styles.listStyle} value="My Cancellations">
            My Cancellations
          </li></Link>
      
        </ul>
</div>

     </div>
     <div className={Styles.gen5}>
<h3 className={Styles.edit}>Edit Your Profile</h3>
<div className={Styles.gen6}>
<div className={Styles.gen7}>
<h3 className={Styles.name}>First Name</h3>
<input type="text" className={Styles.inputStyle}/>
</div>
<div className={Styles.gen7}>
<h3 className={Styles.name}>Last Name</h3>
<input type="text" className={Styles.inputStyle}/>
</div>
</div>
<div className={Styles.gen6}>
<div className={Styles.gen7}>
<h3 className={Styles.name}>Email</h3>
<input type="text" className={Styles.inputStyle}/>
</div>
<div className={Styles.gen7}>
<h3 className={Styles.name}>Address</h3>
<input type="text" className={Styles.inputStyle}/>
</div>

</div>
<h3 className={Styles.name}>Password Changes</h3>
<div className={Styles.gen8}>
<input type="text" className={Styles.inputStyle} placeholder="Current Passwod"/>
<input type="text" className={Styles.inputStyle} placeholder="New Passwod"/>
<input type="text" className={Styles.inputStyle} placeholder="Confirm New Passwod"/>
<div className={Styles.cancel}>
<p>Cancel</p>
<button className={Styles.buttonStyle}>Save Changes</button>
</div>
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


export default AccountPage;