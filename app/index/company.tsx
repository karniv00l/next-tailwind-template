import { sectionMinHeight } from '../globals';
import { GridBgTop } from './grid-bg';

interface Feature {
  name: string;
  description: string;
}

const features: Feature[] = [
  {
    name: 'Innovative Solutions',
    description: 'We pride ourselves on offering innovative and customizable solutions tailored to your specific needs',
  },
  {
    name: 'Expert Team',
    description:
      'Our team consists of passionate experts who are dedicated to excellence in every project we undertake',
  },
  {
    name: 'Cutting-Edge Technology',
    description:
      'With state-of-the-art technology and advanced engineering, we deliver products that stand at the forefront of the industry',
  },
  {
    name: 'Customer-Centric Approach',
    description:
      'Your satisfaction is our priority. We work closely with our clients to understand their requirements and deliver solutions that exceed expectations',
  },
];

export default function Company() {
  return (
    <div className="relative h-full" style={{ minHeight: sectionMinHeight }}>
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-4xl px-8 py-10 lg:max-w-5xl lg:px-6">
          <div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">About us</h2>
            <p className="mt-6 text-xl leading-8 text-gray-200">
              Dynam Labs is a creative studio, a versatile engineering workshop that specializes in Electric Vehicle
              Components. We enjoy teaming up with passionate folks to blend design thinking, creativity, and smart tech
              to solve unique problems.
            </p>
            <div className="py-8 leading-7 text-gray-200">
              <p>
                What sets Dynam Labs apart is their commitment to custom development based on individual needs. Unlike
                off-the-shelf solutions, the VCU from Dynam Labs is 100% designed and developed in-house. This in-house
                approach provides customers with unparalleled flexibility, allowing for the creation of bespoke
                solutions that perfectly match their requirements. Whether you&apos;re pushing the boundaries of EV
                technology in motorsports or seeking to enhance your everyday driving experience, Dynam Labs can deliver
                a tailored VCU solution that meets your unique performance goals.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl sm:mt-20 lg:max-w-5xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-0 sm:pl-16">
                  <dt className="text-base font-bold leading-7 text-gray-100">{feature.name}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-300">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* grid background */}
      <GridBgTop />
    </div>
  );
}
