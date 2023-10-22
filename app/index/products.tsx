import Image from 'next/image';
import ScreenTemp from '../assets/images/screenshot-temp.png';
import { ElementType } from 'react';
import {
  IconCheck,
  IconCpu,
  IconDeviceSdCard,
  IconGps,
  IconOutlet,
  IconRecharging,
  IconTemperature,
  IconWifi,
} from '@tabler/icons-react';

interface Feature {
  name: string;
  description: string;
  icon: ElementType;
}

const vcuFeatures: Feature[] = [
  {
    name: 'Powerful Processing',
    description:
      'Experience high-performance control with a 520MHz CPU real-time operating system, ensuring real-time responsiveness for your electric vehicle applications',
    icon: IconCpu as ElementType,
  },
  {
    name: 'Comprehensive Connectivity',
    description:
      'Utilize 3x CAN, 2x SENT, and 1x Ethernet interfaces, ensuring seamless communication and integration with various vehicle components',
    icon: IconWifi as ElementType,
  },
  {
    name: 'Flexible Inputs and Outputs',
    description:
      'Benefit from a wide range of inputs and outputs, including 15x Digital Inputs, 4x Analog Inputs (0-5V), 2x Analog Outputs, and more, providing flexibility in customization',
    icon: IconOutlet as ElementType,
  },
  {
    name: 'Internal Logging',
    description:
      'Store extensive data with 128GB internal logging capacity, allowing in-depth analysis and performance optimization.',
    icon: IconDeviceSdCard as ElementType,
  },
  {
    name: 'Battery Management System',
    description:
      "With our expert BMS integration, you can rest assured that your vehicle's battery is efficiently managed, enhancing both its lifespan and overall reliability",
    icon: IconRecharging as ElementType,
  },
  {
    name: 'Temperature Monitoring',
    description:
      'Monitor temperature effectively with 4x Temperature Sensor Inputs, ensuring the components operate within the ideal temperature range for maximum efficiency and durability',
    icon: IconTemperature as ElementType,
  },
  {
    name: 'GPS Tracking',
    description:
      'Seamlessly integrate GPS technology into your electric vehicle applications, enabling precise location tracking and advanced navigation capabilities',
    icon: IconGps as ElementType,
  },
];

interface Spec {
  quantity: string | null;
  description: string;
}

const vcuSpecs: Spec[] = [
  {
    quantity: '520MHz',
    description: 'CPU real-time operating system',
  },
  {
    quantity: '128GB',
    description: 'Internal logging',
  },
  {
    quantity: '3x',
    description: 'CAN',
  },
  {
    quantity: '2x',
    description: 'SENT',
  },
  {
    quantity: '1x',
    description: 'Ethernet',
  },
  {
    quantity: null,
    description: 'GPS',
  },
  {
    quantity: null,
    description: 'BMS master',
  },
  {
    quantity: '10x',
    description: 'PWM/PFM (12V)',
  },
  {
    quantity: '15x',
    description: 'Digital Input',
  },
  {
    quantity: '2x',
    description: '5V ref supply',
  },
  {
    quantity: '1x',
    description: '12V ref supply',
  },
  {
    quantity: '4x',
    description: 'Temperature Sensor Input',
  },
  {
    quantity: '4x',
    description: 'Analog Input (0-5V)',
  },
  {
    quantity: '4x',
    description: 'Analog Input (0-12V)',
  },
  {
    quantity: '2x',
    description: 'Analog Output',
  },
  {
    quantity: '8x',
    description: 'HS output (1.5A each)',
  },
  {
    quantity: '12x',
    description: 'LS output (1.5A each)',
  },
];

export default function Products() {
  return (
    <div className="relative h-full">
      <div className="relative isolate overflow-hidden px-6 py-10 lg:overflow-visible lg:px-0">
        {/* text */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-gray-400">All in one EV solution</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Vehicle Control Unit</h1>
                <p className="mt-6 text-xl leading-8 text-gray-200">
                  The <strong>Dynam Labs VCU</strong> is an all-in-one EV solution designed to meet the demands of
                  high-performance EV street and motorsport applications.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 shadow lg:sticky lg:top-10 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={ScreenTemp}
              alt="Dynam Labs VCU"
              unoptimized
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-200 lg:max-w-lg">
                {/* summary */}
                <p>
                  It&apos;s a tailored solution created for enthusiasts and professionals seeking optimal performance
                  from their electric vehicles.
                </p>
                <p>
                  The <strong>VCU</strong> can manage and optimize a wide range of functions, including motor
                  performance, battery management, regenerative braking, thermal management, and much more.
                </p>

                {/* feature list */}
                <ul role="list" className="mt-8 space-y-8 text-gray-100">
                  {vcuFeatures.map((feature) => (
                    <li key={feature.name} className="flex gap-x-3">
                      <feature.icon className="mt-1 h-5 w-5 flex-none text-accent-brand-600" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold text-gray-100">{feature.name}.</strong> {feature.description}.
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* full specs */}
      <div className="mx-auto max-w-3xl px-6 py-10 text-center sm:px-8 lg:max-w-4xl">
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-100 sm:text-3xl">Full specs</h2>
        <div className="mt-6">
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-gray-300">What’s included</h4>
            <div className="h-px flex-auto bg-gray-600" />
          </div>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:gap-6 md:grid-cols-2"
          >
            {vcuSpecs.map((spec) => (
              <li key={spec.description} className="flex gap-x-3 text-gray-200">
                <IconCheck className="h-6 w-5 flex-none text-accent-brand-600" aria-hidden="true" />
                {spec.quantity && <span className="-mr-2 text-gray-400">{spec.quantity}</span>}
                <span>{spec.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* tailwind stock grid-like background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-800 [mask-image:radial-gradient(80rem_80rem_at_top,white,transparent)]"
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
    </div>
  );
}
