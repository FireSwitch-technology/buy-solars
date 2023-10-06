import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import NBar from '@/components/navb';

const RegisterPage = () => {
  return (
    <>
      <NBar />
      <div className=" md:flex justify-center items-center w-full bg-white shadow-md">
  <div className="w-full sm:w-full lg:w-full xl:w-full flex flex-col md:flex-row gap-3 justify-center items-center">
    <div className="w-full h-auto">
      <img
        src="/images/Side Image.png"
        alt="Login Background"
        className="w-full h-full"
      />
          </div>
          <div className="w-full flex flex-col md:w-full justify-center px-1 sm:px-5">
      <div className="flex flex-col w-full sm:w-full lg:w-full xl:w-full px-4 md:px-10 lg:px-10 bg-white border border-white rounded-lg gap-3">
              <h2 className="text-xl sm:text-3xl font-medium">Create an account</h2>
              <h2 className="text-base font-medium">Enter your details below</h2>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full py-2 px-4 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email or Phone Number"
                  className="w-full py-2 px-4 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full py-2 px-4 border border-gray-300 rounded"
                />
              </div>
              <button className="py-2 px-4 bg-black text-white rounded cursor-pointer">
                Create Account
              </button>
              <button className="py-2 px-4 bg-white text-black border border-black rounded cursor-pointer flex items-center justify-center">
                <FcGoogle className="mr-2" /> Signup with Google
              </button>
              <div className="flex flex-col xs:flex-row items-center justify-center xs:justify-between gap-2 text-black">
                <h5 className='text-center xs:text-start'>Already have an account?</h5>
                <Link href="/login" style={{ textDecoration: 'none' }}>
                  <h5>Log in</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
