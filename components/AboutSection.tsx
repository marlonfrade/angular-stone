import React from 'react'
import Image from 'next/image'

const AboutSection: React.FC = () => {
  return (
    <div className="py-6 sm:py-8 lg:py-12 mt-40">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-full overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
              <Image
                src="/assets/04.jpg"
                alt="Photo by Martin Sanchez"
                layout="contain"
                objectFit="contain"
                objectPosition="center"
                width={800}
                height={800}
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="md:pt-8">
            <p className="text-center font-bold text-secondary md:text-left">
              Sobre nós
            </p>

            <h1 className="mt-2 mb-4 text-center text-2xl font-bold text-primary sm:text-3xl md:mb-6 md:text-left">
              Quem somos
            </h1>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              A Angular Stone Engenharia e Arquitetura oferece serviços
              especializados de assessoria e consultoria em engenharia e
              arquitetura. Baseada no conceito da &quot;pedra angular&quot; que
              simboliza solidez, estabilidade e precisão, a empresa busca
              oferecer soluções completas e integradas de alta qualidade.
              <br />
              <br />
              Atua regionalmente com projetos arquitetônicos, estruturais,
              metodologia BIM, e projetos hidrossanitários, elétricos, de
              climatização e PPCI, entre outros.
            </p>

            <h2 className="mb-2 text-center text-xl font-semibold text-primary sm:text-2xl md:mb-4 md:text-left">
              Nossa visão
            </h2>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              A Angular Stone visa constantemente superar as expectativas e ser
              uma base sólida para o futuro de seus clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
