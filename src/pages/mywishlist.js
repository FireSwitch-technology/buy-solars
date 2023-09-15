import { Inter } from 'next/font/google'
import React from 'react';
import WishList from '@/components/wishlist';



const inter = Inter({ subsets: ['latin'] })

function WishlistPage() {
  return (

    <>
<WishList/>
  
    </>
  )
}

export default WishlistPage;