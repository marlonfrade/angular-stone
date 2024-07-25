import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BlogSection: React.FC = () => {
  const posts = [
    {
      title: 'Projeto Arquitetônico de Alto Nível',
      description:
        'Explorando os detalhes e a complexidade dos projetos arquitetônicos que entregamos.',
      imageUrl: '/assets/blog-1.jpg',
      link: '#',
    },
    {
      title: 'Inovações em Engenharia Estrutural',
      description:
        'Como estamos inovando no campo da engenharia estrutural para garantir segurança e eficiência.',
      imageUrl: '/assets/blog-2.jpg',
      link: '#',
    },
    {
      title: 'Soluções Hidrossanitárias Eficientes',
      description:
        'A importância de um bom planejamento hidrossanitário em projetos de construção.',
      imageUrl: '/assets/blog-3.jpg',
      link: '#',
    },
    {
      title: 'Tecnologia BIM em Projetos Modernos',
      description:
        'Utilizando a tecnologia BIM para melhorar a precisão e a colaboração nos projetos.',
      imageUrl: '/assets/blog-4.jpg',
      link: '#',
    },
  ]

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-primary sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            Explore nossos artigos
            <br className="hidden md:block" />e mantenha-se informado.
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 lg:text-sm lg:max-w-md">
          Leia nossos artigos mais recentes sobre inovação e tecnologia na
          engenharia. Descubra como estamos moldando o futuro da construção com
          soluções inovadoras e sustentáveis.
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        {posts.map((post, index) => (
          <Link key={index} href={post.link} aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <Image
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={post.imageUrl}
                alt={post.title}
                width={500}
                height={400}
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  {post.title}
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  {post.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center">
        <Link
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-secondary hover:text-highlight"
        >
          Ver todos os artigos
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default BlogSection
