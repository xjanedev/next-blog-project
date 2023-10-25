import React from "react";
import Image from "next/image";
import profileImage from "../../public/profile2.jpeg";

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
          <h2 className='text-xl font-bold mt-4'>blue</h2>
          <h3 className='text-md font-400'>frontend developer</h3>
        </div>
      </div>
      <hr className='mt-14 border-gray-300' />
    </section>
  );
}
