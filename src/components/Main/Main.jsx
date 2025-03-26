import { useState, useEffect } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

const useLoadFilmes = () => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "be5c8a7b363e064fe917284672d8ec1e",
          lenguage: "pt-BR",
          page: 1,
        },
      });

      setFilmes(response.data.results.slice(0, 20));
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
        Trailler{" "}
      </Link>
    </article>
  );
};

function Home() {
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
      <Footer />
    </div>
  );
}

export default Home;

/* import { useEffect, useState } from "react";
import api from "../../servicesApi/api";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [bordas, setBordas] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "be5c8a7b363e064fe917284672d8ec1e",
          lenguage: "pt-BR",
          page: 1,
        },
      });

      //console.log(response.data.result.slice(0, 10));
      setFilmes(response.data.results.slice(0, 20));
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="container__lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong className="container__titulo-filme">
                {filme.title}
                <div className="container__details-x">
                  {bordas.map((borda) => {
                    return (
                      <div key={borda} className="container__details"></div>
                    );
                  })}
                </div>
              </strong>
              <img
                className="container__image-filme"
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={"filme.title"}
              />
              <Link
                className="container__botao-trailler "
                to={`/filme/${filme.id}`}
              >
                <div className="container__details-y">
                  {bordas.map((borda) => {
                    return (
                      <div key={borda} className="container__details"></div>
                    );
                  })}
                </div>
                Trailler{" "}
              </Link>
            </article>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
export default Home;
 */
