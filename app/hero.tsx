import AnimatedHeader from './AnimatedHeader';

export default function Hero() {
  return (
    <div className="relative h-full">
      <div className="absolute z-10 h-full w-full">
        <div className="flex h-full items-center justify-center">
          <div className="max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">Your EV, Your Way</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We focus on your needs. Our in-house designed VCUs offer flexibility like no other. No frills, just pure
              performance tailored to you.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-300">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-0 h-full w-full">
        <AnimatedHeader />
      </div>
    </div>
  );
}
