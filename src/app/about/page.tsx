import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export const metadata: Metadata = {
  title: "about",
  description: "신입 프론트엔드 개발자 입니다.",
};

const ICONS = [
  { icon: <AiFillGithub />, url: "/about" },
  { icon: <AiFillLinkedin />, url: "/about" },
  { icon: <AiFillInstagram />, url: "/about" },
];
export default function AboutPage() {
  return (
    <div className='w-full h-screen'>
      <div className='p-16 flex justify-center'>
        <div className='max-w-4xl w-full'>
          <Hero />
        </div>
      </div>
      <div className='max-w-4xl pl-16 m-auto'>
        <ul className='flex gap-4 mb-4'>
          {ICONS.map((icons, index) => (
            <a
              key={index}
              href={icons.url}
              target='_blank'
              rel='noreferre'
              className='text-2xl hover:text-gray-400'
            >
              {icons.icon}
            </a>
          ))}
        </ul>
      </div>
      <section className='max-w-4xl pl-16 pr-16 m-auto'>
        <h2 className='font-courier-prime text-2xl font-bold text-gray-800 dark:text-gray-200 my-2'>
          About
        </h2>
        <p className='text-gray-900 dark:text-gray-200 text-sm'>
          👩‍💻 안녕하세요! 꾸준한 학습과 함께 성장하는 신입 프론트엔드 개발자
          입니다.
          <br />
          함께 학습하고 기록하며 발전해 나가는 것을 중요한 가치로 여기고
          있습니다.
          <br />
          아름다운 UI와 함께 사용자 경험을 중요하게 생각합니다.
          <br />
        </p>
      </section>
    </div>
  );
}
