import deDevATL from "./src/assets/de-dev-a-tech-lead.png";
import elixirEPhoenix from "./src/assets/elixir-e-phoenix-do-zero.png";
import principiosSolid from "./src/assets/principios-solid-em-python.png";
import techParaPessoas from "./src/assets/tecnologia-para-pessoas-de-produto.png";
import graphqlComElixir from "./src/assets/graphql-com-elixir-e-absinthe.png";

interface CourseProps {
  title: string;
  description: string;
  image: string;
  price?: {
    original: number;
    current: number;
  },
  buyLink: string;
}

interface DataProps {
  myCourses: CourseProps[];
  recommendations: CourseProps[];
}

export const coursesData: DataProps = {
  myCourses: [
    {
      title: "De Dev a Tech Lead",
      description: "O programa de mentoria que já ajudou mais de 450 desenvolvedores a alcançarem o próximo nível na carreira!",
      image: deDevATL,
      price: {
        original: 89.90,
        current: 59.90
      },
      buyLink: "https://www.udemy.com/course/mentoria-de-carreira-para-devs/?couponCode=MENT-SET"
    },
    {
      title: "Elixir e Phoenix do Zero",
      description: "Crie sua primeira API Phoenix de forma simples e divertida. Do básico ao Avançado!",
      image: elixirEPhoenix,
      price: {
        original: 89.90,
        current: 59.90
      },
      buyLink: "https://www.udemy.com/course/elixir-e-phoenix-do-zero/?couponCode=ELX-SET"
    },
    {
      title: "Tecnologia para pessoas de Produto",
      description: "Tudo o que uma pessoa de Produto precisa saber para trabalhar com Times de Tecnologia",
      image: techParaPessoas,
      price: {
        original: 89.90,
        current: 59.90
      },
      buyLink: "https://www.udemy.com/course/tecnologia-para-pessoas-de-produto/?couponCode=TECH-SET"
    },
    {
      title: "Princípios SOLID em Python",
      description: "Eleve suas habilidades de programação com os Princípios SOLID na prática utilizando Python",
      image: principiosSolid,
      price: {
        original: 89.90,
        current: 59.90
      },
      buyLink: "https://www.udemy.com/course/solid-na-pratica-com-python/?couponCode=SOLID-SET"
    },
    {
      title: "GraphQL com Elixir e Absinthe",
      description: "Aprenda a criar APIs GraphQL do jeito certo em Elixir construindo uma rede social!",
      image: graphqlComElixir,
      price: {
        original: 89.90,
        current: 59.90
      },
      buyLink: "https://www.udemy.com/course/elixir-graphql/?couponCode=C9921A45DED40BEDCCB9"
    }
  ],
  recommendations: [
    {
      title: "Banco de Dados SQL",
      description: "Aprenda SQL - MySQL Do Básico ao Avançado com Projetos Inclusos. Top Instructor com aulas 100% hands on!",
      image: graphqlComElixir,
      buyLink: "https://www.udemy.com/courses/search/?src=ukw&q=banco+de+dados",
    }
  ],
}