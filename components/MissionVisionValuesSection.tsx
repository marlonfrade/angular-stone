import React from 'react'

const MissionVisionValuesSection: React.FC = () => {
  return (
    <section className="relative overflow-no-scroll py-12 sm:py-16 lg:py-20">
      <div className="absolute h-72 w-72 scale-125 -right-8 -bottom-10">
        <div className="absolute h-60 w-60 rounded-2xl border-4 border-secondary"></div>
        <div className="absolute h-60 w-60 translate-x-3 translate-y-3 rounded-2xl border-4 border-secondary"></div>
        <div className="absolute h-60 w-60 translate-x-6 translate-y-6 rounded-2xl border-4 border-secondary"></div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-3xl font-semibold leading-7 text-secondary sm:text-4xl xl:text-5xl">
            Transformando Ideias em construções de sucesso
          </h2>
          <hr className="mt-4 h-1.5 w-32 border-none bg-secondary sm:mx-auto sm:mt-8" />
        </div>

        <div className="mx-auto mt-20 grid max-w-screen-lg grid-cols-1 gap-x-8 gap-y-12 text-center sm:text-left md:grid-cols-3">
          <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
            <p className="relative text-5xl font-black text-secondary">
              Missão
            </p>
            <p className="relative mt-5 text-gray-600">
              A Angular Stone Engenharia e Arquitetura tem como missão fornecer
              soluções inovadoras e precisas em engenharia e arquitetura,
              garantindo excelência e transformando visões em realidades
              estruturais sólidas.
            </p>
          </div>

          <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
            <p className="relative text-5xl font-black text-secondary">Visão</p>
            <p className="relative mt-5 text-gray-600">
              A Angular Stone Engenharia e Arquitetura visa ser a principal
              referência regional em inovação, precisão e excelência em
              engenharia e arquitetura, construindo um legado de confiança e
              qualidade.
            </p>
          </div>

          <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
            <p className="relative text-5xl font-black text-secondary">
              Valores
            </p>
            <p className="relative mt-5 text-gray-600">
              Precisão: Garantir exatidão em cada detalhe. Excelência: Buscar
              altos padrões de qualidade. Inovação: Adotar novas tecnologias e
              metodologias. Confiança: Construir relações sólidas e
              transparentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVisionValuesSection
