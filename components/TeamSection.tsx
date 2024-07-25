import React from 'react'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Jonathan Gomes',
    role: 'Engenheiro Civil & Master BIM',
    imageUrl: '/assets/team-jonathan.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/jonathan-hgomes/',
    },
  },
  {
    name: 'Larissa Laurrany',
    role: 'Auxiliar e Estudante de Arquitetura',
    imageUrl: '/assets/team-larissa.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/larissa-laurrany-moraes/',
    },
  },
]

const TeamSection: React.FC = () => {
  return (
    <div className="py-6 sm:py-8 lg:py-12 lg:mt-40 lg:mb-20">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-primary md:mb-6 lg:text-3xl">
            Nosso Time
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Composto por profissionais altamente qualificados e comprometidos
            com a excelência. Cada membro traz uma experiência única e uma
            paixão por inovação, o que nos permite oferecer soluções de alta
            qualidade e um serviço excepcional aos nossos clientes. Juntos,
            estamos construindo um futuro melhor através de projetos inovadores
            e sustentáveis.
          </p>
        </div>
        {/* text - end */}

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 mx-auto max-w-md">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  className="h-full w-full object-cover object-center"
                  width={250}
                  height={250}
                />
              </div>

              <div>
                <div className="text-center font-bold text-secondary md:text-lg">
                  {member.name}
                </div>
                <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                  {member.role}
                </p>

                {/* social - start */}
                <div className="flex justify-center">
                  <div className="flex gap-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <svg
                          className="h-5 w-5"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                {/* social - end */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamSection
