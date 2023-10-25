import React from "react";
import Link from "next/link";
import DarkMode from "./DarkMode";

export default function Header() {
  return (
    <section className='flex justify-center pt-16 pl-16 pr-16'>
      <header className='flex justify-between items-center max-w-4xl w-full'>
        <Link href='/'>
          <h1 className='text-md'>{"devlog"}</h1>
        </Link>
        <nav className='flex gap-4'>
          <DarkMode />
          <Link href='/'>home</Link>
          <Link href='/about'>about</Link>
          <Link href='/posts'>posts</Link>
        </nav>
      </header>
    </section>
  );
}
