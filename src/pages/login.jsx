import Navbar from '@/components/navbar';
import React from 'react';

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-full bg-white shadow-md">
  <div className="w-4/5 sm:w-4/5 md:w-3/4 lg:w-full xl:w-full flex gap-5 justify-center items-center">
    <div className="w-1/2 h-auto">
      <img
        src="/images/Side Image.png"
        alt="Login Background"
        className="w-full h-full"
      />
    </div>
    <div className="w-1/2 flex flex-col justify-center gap-3 px-4">
      <div className="flex flex-col w-full sm:w-full md:w-full lg:w-full xl:w-full p-3 bg-white border border-white rounded-lg gap-3">
        <h2 className="w-full text-3xl font-medium">Log in to Buy Solar</h2>
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
        <div style={{ display: 'flex', justifyContent: 'space-between',alignItems: 'center', width: '100%' }}>
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
