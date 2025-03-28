import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import trashIcon from "../../images/Trash.png";
import "./Favorito.css";

function Favorito() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@showmovies");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function trash(id) {
    let filtroFilmes = filmes.filter((filme) => {
      return filme.id !== id;
    });

    setFilmes(filtroFilmes);
    localStorage.setItem("@showmovies", JSON.stringify(filtroFilmes));
    toast.success("Filme removido com sucesso!");
  }

  return (
    <div className=" filme__favorito">
      <h1 className="filme__favorito-title">Filmes Favoritos</h1>
      {filmes.length === 0 && <span>Voce não possui filme salvo :( </span>}
      <div className="filme__container-list">
        <ul>
          {filmes.map((filme) => {
            return (
              <li key={filme.id}>
                <div className="filme__title-filme">{filme.title} </div>

                <div className="filme__content-details-button">
                  <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                </div>

                <img
                  className="filme__poster-favoritos-p"
                  src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`}
                  alt={filme.title}
                />
                <img
                  src={trashIcon}
                  alt="Lixeira"
                  className="filme__button-delete"
                  onClick={() => trash(filme.id)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Favorito;
