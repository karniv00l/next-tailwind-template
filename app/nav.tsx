'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink, scrollSpy } from 'react-scroll';
import { Routes } from './routes';
import logoDesktop from './assets/images/dynam-logo-2.svg';
import logoMobile from './assets/images/bolt.svg';

export const navHeight = 64;

const logoHeight = 24;
const scrollDuration = 500;
const activeStyle = { textDecoration: 'underline' };

export default function Nav() {
  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <nav
      style={{ height: navHeight }}
      className="w-100 sticky left-0 top-0 z-20 bg-black bg-opacity-30 pl-5 pr-5 font-bold backdrop-blur-lg backdrop-filter"
    >
      <ul className="m-0 flex items-center justify-end p-5">
        <li className="mr-auto list-none uppercase">
          <Link href={Routes.index}>
            <Image
              className="hidden md:block"
              src={logoDesktop as string}
              alt="Dynam Labs Logo"
              height={logoHeight}
              priority
            />
            <Image
              className="md:hidden"
              src={logoMobile as string}
              alt="Dynam Labs Logo"
              height={logoHeight}
              priority
            />
          </Link>
        </li>
        <li className="mr-8 list-none uppercase">
          <ScrollLink
            activeStyle={activeStyle}
            offset={-navHeight}
            to="home"
            href="#home"
            spy
            smooth
            duration={scrollDuration}
          >
            Home
          </ScrollLink>
        </li>
        <li className="mr-8 list-none uppercase">
          <ScrollLink
            activeStyle={activeStyle}
            offset={-navHeight}
            to="products"
            href="#products"
            spy
            smooth
            duration={scrollDuration}
          >
            Products
          </ScrollLink>
        </li>
        <li className="mr-8 list-none uppercase">
          <ScrollLink
            activeStyle={activeStyle}
            offset={-navHeight}
            to="profile"
            href="#profile"
            spy
            smooth
            duration={scrollDuration}
          >
            Profile
          </ScrollLink>
        </li>
        <li className="mr-8 list-none uppercase">
          <Link href={Routes.contact}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
