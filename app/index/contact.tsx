import { sectionMinHeight } from '../globals';
import { GridBgBottom } from './grid-bg';

export default function Contact() {
  const formURL = process.env.NEXT_PUBLIC_CONTACT_FORM_POST_URL ?? '#';

  return (
    <div className="relative h-full" style={{ minHeight: sectionMinHeight }}>
      <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">Have questions or inquiries? We&apos;re here to help!</p>
        </div>

        <form
          action={formURL}
          encType="multipart/form-data"
          acceptCharset="UTF-8"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <input type="hidden" name="utf8" value="✓"></input>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-100">
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 bg-black px-3.5 py-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-accent-brand-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-100">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-black px-3.5 py-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-accent-brand-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-100">
                Phone
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="phone"
                  className="block w-full rounded-md border-0 bg-black px-3.5 py-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-accent-brand-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-100">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="block w-full rounded-md border-0 bg-black px-3.5 py-2 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-accent-brand-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-accent-brand-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-brand-700"
            >
              Let&apos;s talk
            </button>
          </div>
        </form>
      </div>

      {/* grid background */}
      <GridBgBottom />
    </div>
  );
}
