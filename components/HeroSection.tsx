import React from 'react'
import Navbar from './Navbar'
import { generateWhatsAppUrl } from '../lib/utils'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection: React.FC = () => {
  const phoneNumber = '+5547997931736'
  const message =
    'Olá, estou interessado em fazer um projeto com a Angular Stone!'
  const whatsappUrl = generateWhatsAppUrl(phoneNumber, message)
  return (
    <div className="mx-auto max-w-screen-2xl h-full px-4 md:px-8">
      <Navbar />

      <section className="mb-8 flex h-full flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
        {/* content - start */}
        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
          <div className="lg:max-w-xl lg:pr-5">
            <h2 className="mb-6 text-2xl font-light leading-snug tracking-tight text-primary sm:text-6xl">
              Precisão é nossa pedra angular, <br />
              excelência{' '}
              <span className="my-1 inline-block border-b-8 border-primary font-bold text-primary">
                {' '}
                é nosso padrão.
              </span>
            </h2>
            <p className="text-base text-gray-700">
              Engenharia que inspira, arquitetura que transforma.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start mt-8">
            <Link
              href={whatsappUrl}
              className="inline-block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-secondary transition duration-100 hover:bg-secondary focus-visible:ring active:bg-secondary md:text-base"
            >
              Solicite um Orçamento
            </Link>
            <Link
              href={whatsappUrl}
              className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
            >
              Tire Dúvidas
            </Link>
          </div>
        </div>
        {/* content - end */}

        {/* image - start */}
        <div className="relative text-highlight lg:ml-32 lg:w-1/2 hidden lg:block xl:w-5/12">
          <div className="border-b-8 border-b-highlight max-w-lg mx-auto xl:-mt-20">
            <Image
              src="/assets/27.png"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* image - end */}
      </section>

      <section className="flex flex-col items-center justify-between gap-10 border-t pt-8 lg:flex-row lg:gap-8">
        {/* stats - start */}
        <div className="-mx-6 grid grid-cols-2 gap-4 md:-mx-8 md:flex md:divide-x">
          {/* <div className="px-6 md:px-8">
            <span className="block text-center text-lg font-bold text-primary md:text-left md:text-xl">
              200
            </span>
            <span className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">
              People
            </span>
          </div> */}
          <div className="px-6 md:px-8">
            <span className="block text-center text-lg font-bold text-primary md:text-left md:text-xl">
              10+
            </span>
            <span className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">
              Projetos
            </span>
          </div>
          <div className="px-6 md:px-8">
            <span className="block text-center text-lg font-bold text-primary md:text-left md:text-xl">
              15+
            </span>
            <span className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">
              Serviços
            </span>
          </div>
          <div className="px-6 md:px-8">
            <span className="block text-center text-lg font-bold text-primary md:text-left md:text-xl">
              Inovação em cada detalhe,
            </span>
            <span className="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">
              Confiança em cada projeto.
            </span>
          </div>
        </div>
        {/* stats - end */}

        {/* social - start */}
        <div className="flex items-center justify-center gap-4 lg:justify-end">
          <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">
            Social
          </span>
          <span className="h-px w-12 bg-gray-200"></span>
          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/angularstone/"
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-highlight active:text-highlight"
            >
              <svg
                className="h-5 w-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
          </div>
        </div>
        {/* social - end */}
      </section>
    </div>
  )
}

export default HeroSection
