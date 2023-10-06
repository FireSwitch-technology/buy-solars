'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';
import { GrFavorite } from 'react-icons/gr';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPersonDown } from 'react-icons/bs';

export default function NBar() {
	const [nav, setNav] = useState(false);

	return (
		<>
			<header className='w-full shadow-2xl px-3'>
				<nav className='max-w-6x px-3 py-4'>
					{/* desktop nav */}
					<div>
						<div className='flex justify-between items-center gap-2'>
							{/* logo */}
							<Link href='/' className='no-underline'>
								<div className="w-full text-2xl font-bold text-black xs:px-2">BuySolar</div>
							</Link>

							{/* links */}
							<div className='hidden md:flex gap-5 justify-center items-center'>
								<ul className='flex md:gap-5 lg:gap-7 items-center font-medium lg:font-normal m-0 text-xs lg:text-base text-black'>
								<li>
										<Link href='/' className='no-underline text-black'>Home</Link>
									</li>
									<li>
										<Link href='/contact' className='no-underline text-black'>Contact</Link>
									</li>
									<li>
										<Link href='/about' className='no-underline text-black'>About</Link>
									</li>
									<li>
										<Link href='register' className='no-underline text-black'>Signup</Link>
									</li>
								</ul>
								<div className="flex justify-center items-center gap-1">
            <div className="flex relative lg:flex md:flex">
              <input
                type="text"
                className="py-1 px-6 border border-black rounded-full bg-F5F5F5 text-black"
                placeholder="Search"
              />
              <FaSearch className="absolute top-1/2 transform -translate-y-1/2 right-2 text-black text-lg" />
            </div>
            <GrFavorite className="text-black text-3xl" />
            <Link href="/cart" className="text-black no-underline">
              <AiOutlineShoppingCart className="text-3xl" />
            </Link>
            <BsPersonDown className="text-3xl cursor-pointer" />
          </div>
							</div>

							<div className='md:hidden'>
								<div
									onClick={() => setNav(true)}
									className=' hover:animate-pulse cursor-pointer '>
									<HiMenuAlt3 size={30} />
								</div>
							</div>
						</div>
					</div>
					{/* mobile nav */}
					<div className={nav ? 'md:hidden relative' : ''}>
						<div
							className={
								nav
									? 'fixed left-0 top-0 w-full h-screen z-[99999] text-black bg-white p-4 ease-in duration-500'
									: 'fixed left-0 top-[-120vh] w-full h-screen z-[99999] text-black bg-white p-4 ease-out duration-500'
							}>
							{/* logo */}
							<div className='flex justify-between items-center py-1 px-0'>
								{/* logo */}
								<Link href='/' className='no-underline text-black'>
								<div className="w-full text-2xl font-bold ">BuySolar</div>
								</Link>

								{/* close */}
								<div className='cursor-pointer' onClick={() => setNav(false)}>
									<HiX size={30} />
								</div>
							</div>

							{/* links */}
							<div className=' flex w-full flex-col justify-start items-start'>
								<ul className='flex flex-col no-underline gap-2 items-start justify-start text-black px-0 py-1'>
								<li>
										<Link href='/' className='no-underline text-black'>Home</Link>
									</li>
									<li>
										<Link href='/contact' className='no-underline text-black'>Contact</Link>
									</li>
									<li>
										<Link href='/about' className='no-underline text-black'>About</Link>
									</li>
									<li>
										<Link href='register' className='no-underline text-black'>Signup</Link>
									</li>
								</ul>
								<div className="flex lg:flex items-start gap-3 flex-col">
            <div className="w-full flex relative lg:flex md:flex xs:w-auto xs:gap-2">
              <input
                type="text"
                className="w-full py-1 px-3 xs:w-auto border border-black rounded-full bg-F5F5F5 text-black"
              />
              <FaSearch className="absolute top-1/2 transform -translate-y-1/2 right-2 text-black text-lg" />
            </div>
           <div className="flex w-full gap-2">
		   <GrFavorite className="text-black text-3xl cursor-pointer" />
            <Link href="/cart" className="text-black no-underline">
              <AiOutlineShoppingCart className="text-3xl" />
            </Link>
            <BsPersonDown className="text-3xl cursor-pointer" />
		   </div>
          </div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}
