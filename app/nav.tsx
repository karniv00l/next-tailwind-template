'use client';

import { FC, ReactNode, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink, scrollSpy } from 'react-scroll';
import { Routes, ScrollElements } from './routes';
import logoDesktop from './assets/images/dynam-logo-2.svg';
import logoMobile from './assets/images/bolt.svg';

export const navHeight = 64;

const logoHeight = 24;
const scrollDuration = 500;

export const NavScrollLink: FC<{ to: ScrollElements; className?: string; children: ReactNode }> = ({
  to,
  className,
  children,
}) => (
  <ScrollLink
    activeClass="border-b-2"
    offset={-navHeight}
    to={to}
    href={`#${to}`}
    spy
    hashSpy
    smooth
    duration={scrollDuration}
    className={className}
  >
    {children}
  </ScrollLink>
);

const NavScrollLiLink: FC<{ name: string; to: ScrollElements }> = ({ name, to }) => (
  <li className="mr-8 list-none uppercase">
    <NavScrollLink
      to={to}
      className="py-1 transition-all hover:border-b-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-brand-600"
    >
      {name}
    </NavScrollLink>
  </li>
);

export default function Nav() {
  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <nav
      style={{ height: navHeight }}
      className="w-100 sticky left-0 top-0 z-20 bg-black bg-opacity-30 pl-5 pr-5 font-mono font-bold backdrop-blur-lg backdrop-filter"
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
              alt="Dynam Labs Logo Bolt"
              height={logoHeight}
              priority
            />
          </Link>
        </li>
        <NavScrollLiLink name="Home" to={ScrollElements.home} />
        <NavScrollLiLink name="Products" to={ScrollElements.products} />
        <NavScrollLiLink name="Company" to={ScrollElements.company} />
        <NavScrollLiLink name="Contact" to={ScrollElements.contact} />

        {/* <li className="mr-8 list-none uppercase">
          <Link href={Routes.contact}>Contact</Link>
        </li> */}
      </ul>
    </nav>
  );
}
