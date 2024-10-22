import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FiFacebook } from 'react-icons/fi'
import { ModeToggle } from './theme-provider'

export default function Navbar() {
  return (
    <div className=''>
      <div className='flex justify-end items-center gap-28 p-2 pr-16'>
        <div className='flex gap-4'>
          <FiFacebook className='fill-white' />
          <BsTwitter />
          <BsLinkedin />
        </div>
        <ModeToggle />
      </div>
      <div className='flex gap-10 justify-end p-6 pr-16 shadow-lg bg-white dark:bg-black'>
        <TopBarLink href={"/"}>
          Home
        </TopBarLink>
        <TopBarLink href={"/about"}>
          About
        </TopBarLink>
        <TopBarLink href={"/contact"}>
          Contact
        </TopBarLink>
        <TopBarLink href={"/booking"}>
          Booking
        </TopBarLink>
      </div>
    </div>
  )
}

function TopBarLink({ href, className, children, ...props }: React.ComponentPropsWithRef<typeof Link>) {
  return (
    <Link
      href={href}
      className={cn(
        'relative p-4 tracking-widest text-foreground',
        'before:absolute before:bottom-0 before:bg-white before:h-[2px] before:w-full',
        'before:left-0 before:scale-x-0 before:hover:scale-x-100',
        'before:transition-transform',
        className)}
      {...props}
    >
      { children }
    </Link>
  )
}
