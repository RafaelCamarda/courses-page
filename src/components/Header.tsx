import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons'
import { X } from './icons/X'

export function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-violet-600 text-white rounded-2xl">
        <div className="flex items-center gap-6">
          <p>Rafael Camarda <span className="hidden md:inline">| Dê o próximo passo na sua carreira</span></p>
        </div>

        <nav className="flex items-center gap-6">
          <p className="hidden lg:inline">Siga-me nas redes sociais:</p>
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
                href="https://twitter.com/rafacamarda" 
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
        </nav>
      </header>
  )
} 