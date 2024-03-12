'use client'
import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { CurrencyDollarIcon } from '@heroicons/react/20/solid'
import { ClockIcon } from '@heroicons/react/20/solid'
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon as ClockIconOutline,
} from '@heroicons/react/24/outline'

import psLogo from '@/images/logos/ps-logo.svg'
import psAdidas from '@/images/logos/adidas.svg'
import psCalloway from '@/images/logos/calloway.svg'
import psLocation from '@/images/ps-location.png'

const features = [
  { name: 'Screen Printing' },
  { name: 'Sublimation' },
  { name: 'Embroidery' },
  { name: 'Finishing' },
  { name: 'Direct to Film' },
  { name: 'Live Printing' },
]

const navigation = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'X',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

const people = [
  {
    name: 'Safety Apparel',
    imageUrl:
      'https://assets.pcna.com/t_banner_450,f_auto,q_auto/Content/WhiteLabel/2624_WL_HB_home_outdoor',
  },
  {
    name: 'Staff Uniforms',
    imageUrl:
      'https://assets.pcna.com/t_banner_450,f_auto,q_auto/Content/WhiteLabel/2624_WL_HB_home_outdoor',
  },
  {
    name: 'Work and business Apparel',
    imageUrl:
      'https://assets.pcna.com/t_banner_450,f_auto,q_auto/Content/WhiteLabel/2624_WL_HB_home_outdoor',
  },
  {
    name: 'Promotional Products for Tradeshows',
    imageUrl:
      'https://assets.pcna.com/t_banner_450,f_auto,q_auto/Content/WhiteLabel/2624_WL_HB_home_outdoor',
  },
  {
    name: 'Customized Employee Gifts',
    imageUrl:
      'https://assets.pcna.com/t_banner_450,f_auto,q_auto/Content/WhiteLabel/2624_WL_HB_home_outdoor',
  },
  {
    name: 'Sports team apparel',
    imageUrl:
      'https://assets.pcna.com/t_banner_450,f_auto,q_auto/Content/WhiteLabel/2624_WL_HB_home_outdoor',
  },
  // More people...
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
              className="rounded-md bg-ps-red px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ps-red-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
            <h1 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-ps-black sm:text-6xl">
              Ottawa&apos;s Premier Source for Custom Apparel &amp; Promotional
              Accessories
            </h1>

            <div className="mx-auto flex flex-col items-center gap-y-4 pt-12 md:flex-row md:items-center md:gap-x-6">
              <div key="thing1" className="flex w-full justify-center">
                <div className="flex min-w-0 items-center">
                  <ClockIcon
                    className="mr-2 h-10 w-10 text-ps-red"
                    aria-hidden="true"
                  />
                  <span className="truncate font-semibold text-ps-black">
                    Timely Production
                  </span>
                </div>
              </div>
              <div key="thing2" className="flex w-full justify-center">
                <div className="flex min-w-0 items-center">
                  <CheckCircleIcon
                    className="mr-2 h-10 w-10  text-ps-red"
                    aria-hidden="true"
                  />
                  <span className="truncate font-semibold text-ps-black">
                    Personalized Service
                  </span>
                </div>
              </div>
              <div key="thing3" className="flex w-full justify-center">
                <div className="flex min-w-0 items-center">
                  <CurrencyDollarIcon
                    className="mr-2 h-10 w-10  text-ps-red"
                    aria-hidden="true"
                  />
                  <span className="truncate font-semibold text-ps-black">
                    Unbeatable Prices
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
                Experience the Promo Solution Difference
              </h2>

              <p className="text-lg leading-8 text-ps-black">
                Elevate your brand with Ottawa&apos;s leading provider of custom
                apparel and promotional accessories. Our local production
                facility specializes in DTF Transfers, Precision Embroidery, and
                Screen Printing. Whether you need personalized attire for
                uniforms, events, or promotional giveaways, we deliver
                high-quality products promptly and within budget.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-ps-red px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ps-red-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Imagine your logo on the brands you love
              </h2>
              <p className="mt-6 text-lg leading-8 text-white">
                Put your logo on anything. We can quickly decorate many
                world-famous brands for you
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-ps-red px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ps-red-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Get in touch <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <Image
                className="max-h-12 w-full object-contain object-left"
                src={psAdidas}
                alt="Tuple"
                width={130}
                height={48}
              />
              <Image
                className="max-h-12 w-full object-contain object-left"
                src={psCalloway}
                alt="Reform"
                width={104}
                height={48}
              />
              <Image
                className="max-h-12 w-full object-contain object-left"
                src={psAdidas}
                alt="SavvyCal"
                width={140}
                height={48}
              />
              <Image
                className="max-h-12 w-full object-contain object-left"
                src={psCalloway}
                alt="Laravel"
                width={136}
                height={48}
              />
              <Image
                className="max-h-12 w-full object-contain object-left"
                src={psAdidas}
                alt="Transistor"
                width={158}
                height={48}
              />
              <Image
                className="max-h-12 w-full object-contain object-left"
                src={psCalloway}
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
              <h2 className="text-base font-bold leading-7 text-ps-red">
                Satisfaction Guaranteed!
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-ps-black sm:text-4xl">
                Your one-stop shop for custom branded apparel
              </p>
              <p className="ext-lg mt-6 leading-8 text-ps-black">
                Nothing is outsourced! We’ve streamlined the process to be able
                to deliver this all under our world-class printing facility.
                Every order is carefully reviewed by our printing experts to
                ensure you will get the best quality prints.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 text-base leading-6 text-gray-600 sm:mt-8 sm:grid-cols-2 lg:gap-y-8">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="font-base flex items-center font-bold text-ps-black">
                    <CheckCircleIcon
                      className="mr-2 h-10 w-10 text-ps-red"
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
        className="relative isolate overflow-hidden bg-ps-black"
        style={{
          background: 'linear-gradient(-135deg, #DA291C 0%, #212322 45%)',
        }}
      >
        <div className="px-6 pt-12 sm:px-6 sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white">
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
                        <h3 className="mt-1 font-bold text-ps-black text-white">
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
              <h2 className="text-4xl font-bold tracking-tight text-ps-black sm:text-4xl">
                Experience the perfect blend of quality and affordability that
                you won’t find anywhere else.
              </h2>
              <p className="text-large my-6 leading-8 text-ps-black">
                Our products are designed for durability and comfort, ensuring
                your team looks sharp without breaking the bank.
              </p>

              <a
                href="#"
                className="focus-visible:ps-red rounded-md bg-ps-red px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ps-red-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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
                    src="https://assets.pcna.com/t_banner_450,f_auto,q_auto/Content/WhiteLabel/2624_WL_HB_bags"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-ps-black py-24 sm:py-32"
        style={{
          background:
            'radial-gradient(circle farthest-corner at 10% 20%, #DA291C 0%, #212322 90%)',
        }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">
              Custom apparel that your people will love to wear and use.
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img
                  className="aspect-[14/13] w-full rounded-2xl object-cover"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-center text-base font-bold leading-8 tracking-tight text-white">
                  {person.name}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 p-14">
        <div
          className="absolute inset-y-0 left-1/2 -z-10 -ml-96 w-[200%] origin-top-left skew-x-[30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-ml-80 lg:-ml-96"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 py-16 lg:static lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-4xl font-bold tracking-tight text-ps-black">
                Visit our showroom
              </h2>

              <Image
                className="mt-6 aspect-[4/3] w-full flex-none rounded-2xl bg-gray-50 object-cover"
                src={psLocation}
                alt=""
                unoptimized
              />
              <dl className="mt-10 space-y-4 text-base leading-7 text-ps-black">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <span className="font-bold text-ps-black">
                      Promo Solution
                    </span>
                    <br />
                    2615 Lancaster Rd #32 <br />
                    Ottawa, ON <br />
                    K2C 3P1
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Hours</span>
                    <ClockIconOutline
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <span className="font-bold text-ps-black">Hours</span>
                    <br />
                    Monday-Friday:{' '}
                    <span className="font-semibold">8am–5pm</span>
                    <br />
                    Saturday / Sunday: Closed
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="text-0 h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="text-ps-red hover:text-ps-red-hover"
                      href="tel:+1 (613) 690-8841"
                    >
                      +1 (613) 690-8841
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
                      className=" text-ps-red hover:text-ps-red-hover"
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
            className=" px-6 py-16 lg:static lg:px-8"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-ps-black">
                Get a quote!
              </h2>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-base font-semibold leading-6 text-ps-black"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-ps-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-ps-black"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-ps-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-ps-black"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-ps-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-ps-black"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-ps-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-ps-black"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-ps-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="hover:bg-red-hover rounded-md bg-ps-red px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-sm leading-5 text-gray-500">
              &copy; 2023 Promo Soltuion &nbsp;&middot;&nbsp;
              <a href="#" className="text-gray-500 hover:text-gray-400">
                Terms &amp; Policies
              </a>
              &nbsp;&middot;&nbsp;
              <a href="#" className="text-gray-500 hover:text-gray-400">
                Accessibility
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
