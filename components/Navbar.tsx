import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/assets/logo.png'

export default function Navbar() {
  return (
    <header className="mb-8 flex items-center justify-between">
      {/* logo - start */}
      <Link
        href="/"
        className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
        aria-label="logo"
      >
        <Image src={logo} alt="Angular Stone logo" width={300} height={200} />
        {/* Angular Stone */}
      </Link>
      {/* logo - end */}

      {/* nav - start */}
      <nav className="hidden gap-12 lg:flex">
        <Link href="#" className="text-lg font-semibold text-highlight">
          Home
        </Link>
        <Link
          href="#"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-highlight active:text-secondary"
        >
          Sobre nós
        </Link>
        <Link
          href="#"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-highlight active:text-secondary"
        >
          Serviços
        </Link>
        <Link
          href="#"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-highlight active:text-secondary"
        >
          Portfólio
        </Link>
      </nav>
      {/* nav - end */}

      {/* buttons - start */}
      <Link
        href="#"
        className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-primary outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
      >
        Central de Vendas
      </Link>

      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        Menu
      </button>
      {/* buttons - end */}
    </header>
  )
}
