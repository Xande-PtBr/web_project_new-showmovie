import { useState, useEffect } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import "./Main.css";

const useLoadFilmes = () => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.getFilmes();

      setFilmes(response.results.slice(0, 20));
      setLoading(false);
    }

    loadFilmes();
  }, []);

  return { filmes, loading };
};

const FilmeItem = ({ filme, bordas }) => {
  return (
    <article key={filme.id}>
      <div className="container__title-and-details">
        <strong className="container__titulo-filme">
          {filme.title}
          <div className="container__details-x">
            {bordas.map((borda) => (
              <div key={borda} className="container__details"></div>
            ))}
          </div>
        </strong>
      </div>
      <img
        className="container__image-filme"
        src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
        alt={"filme.title"}
      />
      <Link className="container__botao-trailler " to={`/filme/${filme.id}`}>
        <div className="container__details-y">
          {bordas.map((borda) => (
            <div key={borda} className="container__details"></div>
          ))}
        </div>
        Detalhes do Filme
      </Link>
    </article>
  );
};

function Main() {
  const { filmes, loading } = useLoadFilmes();
  const bordas = [1, 2, 3, 4, 5, 6, 7, 8];

  if (loading) {
    return (
      <div className="container">
        <Preloader />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="container__lista-filmes">
        {filmes.map((filme) => (
          <FilmeItem key={filme.id} filme={filme} bordas={bordas} />
        ))}
      </div>
    </div>
  );
}

export default Main;
