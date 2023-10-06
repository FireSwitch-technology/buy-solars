import React, {useState, useEffect} from "react";
import Styles from '@/styles/myflash.module.css'


const SectionTwo = () => {
    const initialTimeRemaining = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }
    const [timeRemaining, setTimeRemaining] = useState(initialTimeRemaining)
    const targetTime = new Date(2023, 10, 1, 0 , 0 ,0)

    const handleTimeChange = () => {
        setInterval( () => {
            const currentTime = new Date()
            const timeDiff = targetTime > currentTime ? targetTime - currentTime : 0
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))  
            const afterdays = timeDiff % (1000 * 60 * 60 * 24)

            const hours = Math.floor(afterdays / (1000 * 60 * 60))
            let afterhours = afterdays % (1000 * 60 * 60)

            const minutes = Math.floor(afterhours / 60000)
            let afterminutes = afterhours % 60000
            const seconds = Math.floor(afterminutes/1000)

            setTimeRemaining( (prevVal) => ({
                ...prevVal,
                days,
                hours,
                minutes,
                seconds
            }) )
        }, 1000 )
    }
    useEffect( () => {
        handleTimeChange()
    }, [] )

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
<h2>{timeRemaining.days}</h2>
<h2 className={Styles.colonStyle}>: </h2>
</div>
</div>
<div className={Styles.dayStyle}>
<h3 className={Styles.h3Style}>Hours</h3>
<div className={Styles.dayStyle2}>
<h2>{timeRemaining.hours}</h2>
<h2 className={Styles.colonStyle}>: </h2>
</div>
</div>
<div className={Styles.dayStyle}>
<h3 className={Styles.h3Style}>Minutes</h3>
<div className={Styles.dayStyle2}>
<h2>{timeRemaining.minutes}</h2>
<h2 className={Styles.colonStyle}>: </h2>
</div>
</div>
<div className={Styles.dayStyle}>
<h3 className={Styles.h3Style}>Seconds</h3>
<div className={Styles.dayStyle2}>
<h2>{timeRemaining.seconds}</h2>
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

export default SectionTwo;

