
import {TbTruckDelivery} from 'react-icons/tb'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {SiAdguard} from 'react-icons/si'
import ScrollToTopButton from './scroltop'
import styles from '@/styles/myaddons.module.css'
import Link from 'next/link'

const Addons = () => {
    return (
      <div className={styles.flexContainer}>
        <div className={styles.flexContainerInner}>
          <div className={styles.flexItems}>
            <div className={styles.flexColumn}>
              <Link href="">
                <div className={styles.iconLink}><TbTruckDelivery /></div>
              </Link>
              <h1 className={styles.textH1}>FREE AND FAST DELIVERY</h1>
              <p className={styles.textP}>Free delivery for all orders over $140</p>
            </div>
            <div className={styles.flexColumn}>
              <Link href=''>
                <div className={styles.iconLink}><RiCustomerService2Fill /></div>
              </Link>
              <h1 className={styles.textH1}>24/7 CUSTOMER SERVICE</h1>
              <p className={styles.textP}>Friendly 24/7 customer support</p>
            </div>
            <div className={styles.flexColumn}>
              <Link href=''>
                <div className={styles.iconLink}><SiAdguard /></div>
              </Link>
              <h1 className={styles.textH1}>MONEY BACK GUARANTEE</h1>
              <p className={styles.textP}>We return money within 30 days</p>
            </div>
            <ScrollToTopButton/>
          </div>
        </div>
      </div>
    );
  };
 export default Addons;

