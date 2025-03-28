import "../About/About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <p className="about__title">
          Alexandre Silva – Desenvolvedor Fullstack
        </p>{" "}
        <p>
          Em expansão de Carreira, Tem 42 anos, é um profissional apaixonado por
          tecnologia e filmes, com especial interesse em programação, modelagem
          3D e impressão 3D. Atualmente, atua como programador de robos ABB em
          <strong>&nbsp;Portugal</strong>, trazendo consigo uma trajetória
          diversificada e uma grande capacidade de adaptação. Formado em
          Administração com Habilitação em Análise de Sistemas, Alexandre
          construiu uma carreira sólida no setor comercial, por mais de 15 anos,
          gerenciou seu próprio negócio, atendendo empresas e consumidores. No
          entanto, com a chegada da pandemia, decidiu sair da sua zona de
          conforto e embarcar em um novo desafio profissional e pessoal.
          Determinando-se a expandir sua carreira no mundo da tecnologia,
          Alexandre migrou para Portugal, buscando novas oportunidades e
          crescimento no setor. Com sua experiência em gestão e sua paixão por
          inovação, ele segue aprimorando suas habilidades, sempre em busca de
          conhecimento e novos projetos que desafiem sua criatividade e
          expertise técnica.
        </p>
        <div className="about__to-main">
          <button className="about__button-home">
            <a href="/">Voltar para a lista de filmes</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
