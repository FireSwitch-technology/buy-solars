import React from "react";
import {BsArrowRightShort, BsArrowLeftShort} from 'react-icons/bs'
import Styles from '@/styles/myflash.module.css'


const SectionTwo = () => {
    return(
        <>
<div className={Styles.genSect1}>
<div className={Styles.genSect2}>
<div className={Styles.genSect3}>
<div className={Styles.todayStyle}>
    <div className={Styles.rectangle}></div>
    <h3>Today's</h3>
    </div>
    <div className={Styles.flashStyle}>
<div className={Styles.flashStyle1}>
<h1 className={Styles.H1_flash}>Flash Sales</h1>
<div className={Styles.timeStyle}>
<div className={Styles.dayStyle}>
<h3 className={Styles.h3Style}>Days</h3>
<div className={Styles.dayStyle2}>
<h2>03</h2>
<h2 className={Styles.colonStyle}>:</h2>
</div>
</div>
<div className={Styles.dayStyle}>
<h3 className={Styles.h3Style}>Hours</h3>
<div className={Styles.dayStyle2}>
<h2>03</h2>
<h2 className={Styles.colonStyle}>:</h2>
</div>
</div>
<div className={Styles.dayStyle}>
<h3 className={Styles.h3Style}>Minutes</h3>
<div className={Styles.dayStyle2}>
<h2>03</h2>
<h2 className={Styles.colonStyle}>:</h2>
</div>
</div>
<div className={Styles.dayStyle}>
<h3 className={Styles.h3Style}>Seconds</h3>
<div className={Styles.dayStyle2}>
<h2>03</h2>
<h2 className={Styles.colonStyle}></h2>

</div>
</div>
</div>
</div>
{/* <div className={Styles.iconStyle}>
    <div className={Styles.arrowIcon}><BsArrowLeftShort/></div>
    <div className={Styles.arrowIcon}><BsArrowRightShort/></div>

</div> */}
    </div>

   </div>    
   </div>    
    </div>        
   
        </>
    )
}


const h3Style = {fontSize: '20px'}

const genSect1 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',    
    backgroundColor: '#fff',
    padding: '0 0 0 30px',
    color: 'black'

}

const genSect2 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',    
}
const genSect3 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',   
    padding: '5px 20px 0', 
    gap: '15px',

}

const todayStyle = {
display: 'flex',
flexDirection: 'row',
alignItems: 'center',
gap: '15px',
width: '80%'
}

const rectangle ={
    backgroundColor: '#DB4444', 
    color: 'red',
    border: '1px solid #DB4444 ',
    padding: '18px 8px',
    borderRadius: '3px'
}

const flashStyle ={
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
width: '100%',
}

const flashStyle1 ={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '200px'

    }



const H1_flash = {
    fontFamily: 'Inter',
fontSize: '30px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: '48px', /* 133.333% */
letterSpacing: '1.44px', 
}

 const timeStyle ={
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px'
 }

 const dayStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '12px',
    
 }

 const dayStyle2 = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   gap: '35px',
   fontFamily: 'Poppins',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '18px'
 }

 const iconStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
   
 }

 const arrowIcon ={
    borderRadius: '50%',
    backgroundColor: '#F5F5F5',
    padding: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    
 }

const colonStyle = {
    color: '#FFAD33'
}




export default SectionTwo;

