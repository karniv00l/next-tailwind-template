/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import Image from 'next/image';
// import Vanta, { Effects } from '../Vanta';
import logoBolt from '../assets/images/bolt.svg';
import { NavScrollLink } from '../nav';
import { ScrollElements } from '../routes';

// const enabled = false;

export default function Hero() {
  return (
    <div className="relative h-full">
      {/* text */}
      <div className="absolute z-10 h-full w-full">
        <div className="flex h-full items-center justify-center">
          <div className="max-w-3xl px-5 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Your EV{' '}
              <Image
                className="inline h-10 w-8 pb-2 sm:h-14"
                src={logoBolt as string}
                alt="Dynam Labs Logo Bolt"
                priority
              />{' '}
              Your Way
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              We focus on your needs. Our in-house designed VCUs offer flexibility like no other.
              <br />
              No frills, just pure performance tailored to you.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <NavScrollLink
                to={ScrollElements.products}
                className="rounded-md bg-accent-brand-800 px-3.5 py-2.5 text-sm font-semibold shadow-sm transition hover:bg-accent-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-brand-600"
              >
                Products
              </NavScrollLink>
              <NavScrollLink to={ScrollElements.company} className="text-sm font-semibold leading-6 text-gray-200">
                Company
              </NavScrollLink>
            </div>
          </div>
        </div>
      </div>

      {/* tailwind stock grid-like background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[85rem] w-[128rem] -translate-x-1/2 stroke-gray-800 [mask-image:radial-gradient(120rem_120rem_at_bottom,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>

      {/* vanta */}
      {/* <div className="absolute z-0 h-full w-full">{enabled && <Vanta effectType={Effects.NET} />}</div> */}
    </div>
  );
}
