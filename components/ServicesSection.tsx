import Image from 'next/image'
import React from 'react'

const services = [
  'Projeto Arquitetônico',
  'Projeto Estrutural',
  'Projeto Hidrossanitário',
  'Projeto Elétrico',
  'Projeto de Climatização',
  'Projeto de PPCI',
  'Regularização',
  'Alvarás e Licenças',
  'Consultorias',
  'Metodologia BIM',
  'Designer Interior',
  'Planejamento de Execução',
  'Laudo e Vistorias',
  'Gestão de Obra',
  'Orçamento de Obras',
  'Quantitativo de Materiais',
  'Coordenação e Compatibilização de Projetos',
]

const ServicesSection: React.FC = () => {
  return (
    <section className="my-40">
      <div className="container flex flex-col-reverse mx-auto lg:flex-row lg:items-center">
        <div className="flex flex-col px-6 py-8 space-y-6 rounded-lg sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-primary text-gray-50">
          <h2 className="text-2xl font-bold">Nossos Serviços</h2>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                {service}
              </li>
            ))}
          </ul>
          <div className="mt-6 p-4 border border-gray-700 rounded-lg">
            <p className="text-center font-semibold">
              Inovação em cada detalhe, confiança em cada projeto.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-3/5">
          <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
            <Image
              src="/assets/services-bg.png"
              alt="Imagem de Serviço"
              className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96"
              layout="intrinsic"
              width={840}
              height={480}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
