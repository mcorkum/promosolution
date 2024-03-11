'use client'
import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { CurrencyDollarIcon } from '@heroicons/react/20/solid'
import { ClockIcon } from '@heroicons/react/20/solid'
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

import psLogo from '@/images/logos/ps-logo.svg'
import psLocation from '@/images/ps-location.png'

const features = [
  { name: 'Screen Printing' },
  { name: 'Sublimation' },
  { name: 'Embroidery' },
  { name: 'Finishing' },
  { name: 'Direct to Film' },
  { name: 'Live Printing' },
]

const products = [
  {
    id: 1,
    name: 'Machined Pen',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    id: 1,
    name: 'Machined Pen',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    id: 1,
    name: 'Machined Pen',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    id: 1,
    name: 'Machined Pen',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    id: 1,
    name: 'Machined Pen',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    id: 1,
    name: 'Machined Pen',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    id: 1,
    name: 'Machined Pen',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    id: 1,
    name: 'Machined Pen',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  // More products...
]

export default function Example() {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image src={psLogo} alt="" unoptimized />
            </a>
          </div>

          <div className="sm:flex sm:flex-1 sm:justify-end">
            <a
              href="#"
              className="bg-ps-red hover:bg-ps-red-hover rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get a Quote!
            </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 p-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 text-center sm:py-32 lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-1">
            <h1 className="mx-auto max-w-4xl font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-6xl">
              Ottawa's Premier Source for Custom Apparel &amp; Promotional
              Accessories
            </h1>

            <div className="mx-auto flex flex-col items-center gap-y-4 pt-12 md:flex-row md:items-center md:gap-x-6">
              <div key="thing1" className="flex w-full justify-center">
                <div className="flex min-w-0 items-center">
                  <ClockIcon
                    className="text-ps-red mr-2 h-10 w-10"
                    aria-hidden="true"
                  />
                  <span className="truncate font-semibold text-gray-900">
                    Timely Production
                  </span>
                </div>
              </div>
              <div key="thing2" className="flex w-full justify-center">
                <div className="flex min-w-0 items-center">
                  <CheckCircleIcon
                    className="text-ps-red mr-2 h-10  w-10"
                    aria-hidden="true"
                  />
                  <span className="truncate font-semibold text-gray-900">
                    Personalized Service
                  </span>
                </div>
              </div>
              <div key="thing3" className="flex w-full justify-center">
                <div className="flex min-w-0 items-center">
                  <CurrencyDollarIcon
                    className="text-ps-red mr-2 h-10  w-10"
                    aria-hidden="true"
                  />
                  <span className="truncate font-semibold text-gray-900">
                    Unbeatable Prices
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">
                Experience the Promo Solution Difference
              </h2>

              <p className="text-lg leading-8 text-gray-600">
                Elevate your brand with Ottawa's leading provider of custom
                apparel and promotional accessories. Our local production
                facility specializes in DTF Transfers, Precision Embroidery, and
                Screen Printing. Whether you need personalized attire for
                uniforms, events, or promotional giveaways, we deliver
                high-quality products promptly and within budget.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="bg-ps-red hover:bg-ps-red-hover rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <img
              src="https://assets.pcna.com/image/upload/f_auto,q_auto/Content/WhiteLabel/2022_51491_Hydro_Holiday_WL_Hero_Main"
              alt=""
              className="mt-10 aspect-[6/5] w-full rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      <div
        style={{
          background: 'linear-gradient(-45deg, #DA291C 0%, #212322 45%)',
        }}
        className="relative overflow-hidden py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="font-display text-3xl tracking-tight text-white">
                Imagine your logo on the brands you love
              </h2>
              <p className="mt-6 text-lg leading-8 text-white">
                Put your logo on anything. We can quickly decorate many
                world-famous brands for you
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <a
                  href="#"
                  className="bg-ps-red hover:bg-ps-red-hover rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Get in touch <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/tuple-logo-white.svg"
                alt="Tuple"
                width={105}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/reform-logo-white.svg"
                alt="Reform"
                width={104}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/savvycal-logo-white.svg"
                alt="SavvyCal"
                width={140}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/laravel-logo-white.svg"
                alt="Laravel"
                width={136}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/transistor-logo-white.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/statamic-logo-white.svg"
                alt="Statamic"
                width={147}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center justify-center gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="text-ps-red text-base font-semibold leading-7">
                Satisfaction Guaranteed!
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Your one-stop shop for custom branded apparel
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Nothing is outsourced! We’ve streamlined the process to be able
                to deliver this all under our world-class printing facility.
                Every order is carefully reviewed by our printing experts to
                ensure you will get the best quality prints.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 text-base leading-6 text-gray-600 sm:mt-8 sm:grid-cols-2 lg:gap-y-8">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="flex items-center font-semibold text-gray-900">
                    <CheckCircleIcon
                      className="text-ps-red mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div
        className="bg-ps-black relative isolate overflow-hidden"
        style={{
          background: 'linear-gradient(-135deg, #DA291C 0%, #212322 45%)',
        }}
      >
        <div className="px-6 pt-12 sm:px-6 sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Meet your promotional needs with our huge selection of products
              and accessories.
            </h2>
          </div>
        </div>
        <div className="pt-12 sm:pt-12 lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="relative mt-8">
            <div className="mx-auto -mb-6 max-w-4xl pb-6 text-center">
              <ul
                role="list"
                className="mx-4 grid grid-cols-2 gap-x-8 gap-y-8 sm:mx-6 sm:grid-cols-3 md:grid-cols-4 lg:mx-0"
              >
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="flex w-full flex-col items-center text-center"
                  >
                    <div className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="mt-6">
                        <h3 className="mt-1 font-bold text-gray-900 text-white">
                          <span className="absolute inset-0" />
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 sm:pt-24 lg:pt-32"></div>
      </div>

      <div className="overflow-hidden bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Experience the perfect blend of quality and affordability that
                you won’t find anywhere else.
              </h2>
              <p className="my-6 text-xl leading-8 text-gray-600">
                Our products are designed for durability and comfort, ensuring
                your team looks sharp without breaking the bank.
              </p>

              <a
                href="#"
                className="bg-ps-red hover:bg-ps-red-hover focus-visible:ps-red rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                See our work <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src="https://assets.pcna.com/t_banner_450,f_auto,q_auto/Content/WhiteLabel/2624_WL_HB_tech"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <img
                    src="https://assets.pcna.com/t_banner_450,f_auto,q_auto/Content/WhiteLabel/2624_WL_HB_home_outdoor"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img
                    src="https://assets.pcna.com/t_banner_450,f_auto,q_auto/Content/WhiteLabel/2624_WL_HB_drinkware"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img
                    src="https://assets.pcna.com/t_banner_450,f_auto,q_auto/Content/WhiteLabel/2624_WL_HB_industry_occasions"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-ps-black relative isolate">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
                <svg
                  className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                      width={200}
                      height={200}
                      x="100%"
                      y={-1}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <svg
                    x="100%"
                    y={-1}
                    className="overflow-visible fill-gray-800/20"
                  >
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                  />
                </svg>
                <div
                  className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                  aria-hidden="true"
                >
                  <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#DA291C] to-[#212322] opacity-20"
                    style={{
                      clipPath:
                        'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                    }}
                  />
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Visit our showroom for you to see for yourself!
              </h2>

              <Image
                className="mt-6 aspect-[4/3] w-full flex-none rounded-2xl bg-gray-50 object-cover"
                src={psLocation}
                alt=""
                unoptimized
              />
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <span className="font-bold text-white">Promo Solution</span>
                    <br />
                    2615 Lancaster Rd #32 <br />
                    Ottawa, ON <br />
                    K2C 3P1
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-white"
                      href="tel:+1 (613) 690-8841"
                    >
                      <span className="font-bold">+1 (613) 690-8841</span>
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="font-bold hover:text-white"
                      href="mailto:sales@promosolution.ca"
                    >
                      sales@promosolution.ca
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            action="#"
            method="POST"
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white">
                Get A Quote!
              </h2>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="bg-ps-red focus-visible:outline-ps-red-500 hover:bg-ps-red-hover rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
