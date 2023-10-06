import NBar from '@/components/navb';
import React from 'react';

const LoginPage = () => {
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
    <div className="flex flex-col w-full sm:w-full lg:w-full xl:w-full px-4 md:px-[20px] bg-white border border-white rounded-lg gap-3">
        <h2 className="text-xl sm:text-3xl font-medium">Log in to Buy Solar</h2>
        <h2 className="w-full text-base font-medium">Enter your details below</h2>
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
        <div className="flex flex-col xs:flex-row items-center justify-center xs:justify-between gap-2 text-black">
          <h5 className="text-black">Forgot password?</h5>
          <button className="py-2 px-4 bg-black text-white rounded cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</div>




    </>
  );
};

export default LoginPage;
