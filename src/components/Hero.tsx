import React from "react";
import Image from "next/image";
import profileImage from "../../public/profile.png";

export default function Hero() {
  return (
    <section className='text-center font-courier-prime'>
      <div className='flex items-center justify-start'>
        <div className='relative rounded-full h-48 w-48'>
          <Image
            src={profileImage}
            alt='profileImage'
            className='rounded-full'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='ml-8 text-left'>
          <h2 className='text-2xl font-bold mt-4'>SL</h2>
          <h3 className='text-xl font-400'>Frontend Dev</h3>
        </div>
      </div>
      <hr className='mt-14 border-gray-300' />
    </section>
  );
}
