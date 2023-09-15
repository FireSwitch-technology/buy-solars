import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import Navbar from '@/components/navbar';
import Link from 'next/link';

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-full bg-white shadow-md">
  <div className="w-4/5 sm:w-4/5 md:w-3/4 lg:w-full xl:w-full flex  :flex-col gap-5 justify-center items-center ">
    <div className="w-1/2 h-auto">
      <img
        src="/images/Side Image.png"
        alt="Login Background"
        className="w-full h-full"
      />
          </div>
          <div className="w-1/2 flex flex-col justify-center gap-3 px-4">
      <div className="flex flex-col w-full sm:w-full md:w-full lg:w-full xl:w-full p-3 bg-white border border-white rounded-lg gap-3">
              <h2 className="text-3xl font-medium">Create an account</h2>
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
              <div className="flex items-center justify-center gap-2 text-black">
                <h5>Already have an account?</h5>
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
