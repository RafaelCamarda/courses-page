import {
  ChevronUpIcon,
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon
} from "@radix-ui/react-icons"
import { X } from "./components/icons/X"

import { Header } from "./components/Header"
import { Card } from "./components/card"

import rafaelCamarda from './assets/rafael-camarda.png'

import { currencyFormater } from "./helpers/currencyFormater"

import { coursesData } from '../data'

function App() {
  return (
    <div className="p-4 md:p-8">
      <Header />

      <section className="bg-violet-600 mt-4 px-10 py-20 md:mt-8 rounded-2xl text-white flex justify-between gap-6 flex-col-reverse items-center md:items-center md:flex-row">
        <p className="max-w-[785px] text-xl tracking-tight text-center md:text-left">
          Sou Rafael Camarda, apaixonado por educação e tecnologia. Hoje atuo como Desenvolvedor Backend Senior no exterior. <br />
          <strong>Já formei mais de 2600 alunos com meus cursos</strong>. <br />
          Espero que o conteúdo criado por mim possa colaborar a te tornar um profissional melhor.
        </p>

        <img
          src={rafaelCamarda}
          alt="Rafael Camarda"
          className="rounded-full w-32 h-32 md:w-60 md:h-60"
        />
      </section>

      <main>
        {!!coursesData.myCourses.length && (
          <section>
            <h1 className="mt-4 mb-4 md:mt-8 md:mb-8 text-lg md:text-2xl">Todos os meus cursos com desconto:</h1>
            <ul 
              className="grid gap-5 md:gap-7 place-items-center items-stretch md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
            >
              {coursesData.myCourses.map((course) => (
                <li className="max-w-[440px]">
                  <Card.Root
                    title={course.title}
                    description={course.description}
                    thumbnail={course.image}
                    buyLink={course.buyLink}
                  >
                    <Card.PricingRoot>
                      <Card.OriginalPrice>{currencyFormater(course.price?.original)}</Card.OriginalPrice>
                      <Card.CurrentPrice>{currencyFormater(course.price?.current)}</Card.CurrentPrice>
                    </Card.PricingRoot>
                  </Card.Root>
                </li>
              ))}
            </ul>
          </section>
        )}

        {!!coursesData.recommendations.length && (
          <section>
          <h1 className="mt-4 mb-4 md:mt-8 md:mb-8 text-lg md:text-2xl">Cursos parceiros com selo Rafa de qualidade:</h1>
          <ul className="grid gap-5 md:gap-7 place-items-center items-stretch md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {coursesData.recommendations.map((course) => (
                <li className="max-w-[440px]">
                  <Card.Root
                    title={course.title}
                    description={course.description}
                    thumbnail={course.image}
                    buyLink={course.buyLink}
                  />
                </li>
              ))}

          </ul>
        </section>
        )}
      </main>

      <footer className="mt-4 md:mt-8 text-white flex items-center justify-between">
        <ul className="flex items-center gap-2 lg:gap-4">
          <li className="bg-gray-900 p-2.5 rounded-md hover:cursor-pointer hover:brightness-75 transition duration-200">
            <a
              href="https://instagram.com/rafacamarda"
              target="_blank" rel="noopener noreferrer"
            >
              <InstagramLogoIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>
          </li>
          <li className="bg-gray-900 p-2.5 rounded-md hover:cursor-pointer hover:brightness-75 transition duration-200">
            <a
              href="https://www.linkedin.com/in/rafaelcamarda/"
              target="_blank" rel="noopener noreferrer"
            >
              <LinkedInLogoIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>
          </li>
          <li className="bg-gray-900 p-2.5 rounded-md hover:cursor-pointer hover:brightness-75 transition duration-200">
            <a
              href="https://x.com/rafacamarda"
              target="_blank" rel="noopener noreferrer"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>
          </li>
          <li className="bg-gray-900 p-2.5 rounded-md hover:cursor-pointer hover:brightness-75 transition duration-200">
            <a
              href="mailto:rf.camarda@gmail.com"
              target="_blank" rel="noopener noreferrer"
            >
              <EnvelopeClosedIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>
          </li>
        </ul>

        <button
          className="bg-gray-900 p-2.5 rounded-md hover:cursor-pointer hover:brightness-75 transition duration-200"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUpIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </button>
      </footer>
    </div>
  )
}

export default App
