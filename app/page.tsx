'use client';

import { Element as ScrollElement } from 'react-scroll';
import Nav, { navHeight } from './nav';
import Hero from './index/hero';
import Products from './index/products';
import { ScrollElements } from './routes';
import Company from './index/company';

const sectionStyle = {
  height: `calc(100vh - ${navHeight}px)`,
  width: '100%',
};

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center justify-between">
        <ScrollElement style={sectionStyle} name={ScrollElements.home}>
          <Hero />
        </ScrollElement>
        <ScrollElement style={sectionStyle} name={ScrollElements.products}>
          <Products />
        </ScrollElement>
        <ScrollElement style={sectionStyle} name={ScrollElements.company}>
          <Company />
        </ScrollElement>
      </main>
    </>
  );
}
