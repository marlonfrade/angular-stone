import React from 'react'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-2 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <Image
              src="/assets/logo.png"
              alt="Company Logo"
              width={200}
              height={200}
              className="w-full"
            />
          </a>
          <div className="mt-0 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Na Angular Stone, nós nos dedicamos a fornecer soluções inovadoras
              e sustentáveis para a indústria da construção. Nossa missão é
              transformar ideias em realidade com precisão e excelência.
            </p>
            <p className="mt-4 text-sm text-gray-800">
              Nosso compromisso é entregar projetos de alta qualidade que
              atendam às necessidades e expectativas de nossos clientes.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-primary">
            Contatos
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Telefone:</p>
            <a
              href="tel:+5547997931736"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +55 (47) 99793-1736
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:angularstonebr@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              angularstonebr@gmail.com
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-primary">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://www.instagram.com/angularstone/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Siga-nos nas redes sociais para se manter atualizado com nossas
            últimas novidades e projetos.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Angular Stone. Todos os direitos
          reservados.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/faq"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/privacy-policy"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Política de Privacidade
            </a>
          </li>
          <li>
            <a
              href="/terms-conditions"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Termos &amp; Condições
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
