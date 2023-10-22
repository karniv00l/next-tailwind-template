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
import { ElementType } from 'react';

interface Feature {
  name: string;
  description: string;
  icon: ElementType;
}

const features: Feature[] = [
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

export default function Company() {
  return (
    <div className="relative h-full">
      <div className="relative isolate overflow-hidden">
        <div className="py-10 pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-gray-400">Deploy faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to deploy your app
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-100">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                pulvinar et feugiat blandit at. In mi viverra elit nunc.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-200">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-brand-800">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-100">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">About us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Dynam Labs is a creative studio, a versatile engineering workshop that specializes in Electric Vehicle
              Components. We enjoy teaming up with passionate folks to blend design thinking, creativity, and smart tech
              to solve unique problems.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Every day, little by little, we work alongside brands of all shapes and sizes across different industries
              to develop and nurture original ideas.
            </p>
            <p>
              What sets Dynam Labs apart is their commitment to custom development based on individual needs. Unlike
              off-the-shelf solutions, the VCU from Dynam Labs is 100% designed and developed in-house. This in-house
              approach provides customers with unparalleled flexibility, allowing for the creation of bespoke solutions
              that perfectly match their requirements. Whether you're pushing the boundaries of EV technology in
              motorsports or seeking to enhance your everyday driving experience, Dynam Labs can deliver a tailored VCU
              solution that meets your unique performance goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
