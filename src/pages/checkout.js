import { Inter } from 'next/font/google'
import React from 'react';
import Checkout from '@/components/checkout';



const inter = Inter({ subsets: ['latin'] })

function CheckOutPage() {
  return (

    <>
<Checkout/>
  
    </>
  )
}

export default CheckOutPage;