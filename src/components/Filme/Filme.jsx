import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { toast } from "react-toastify";
import notAvaible from "../../images/indisponivel.jpg";
import Preloader from "../Preloader/Preloader";
import "./Filme.css";

const useLoadFilme = (id) => {
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      try {
        const response = await api.getFilme(id);

        setFilme(response);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }

    loadFilme();
  }, [id]);

  return { filme, loading };
};

function Filme() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { filme, loading } = useLoadFilme(id);

  useEffect(() => {
    if (loading) return;
    if (!filme) {
      navigate("/", { replace: true });
      alert("Filme não encontrado");
    }
  }, [loading, filme, navigate]);

  const salvarFilme = () => {
    const minhaLista = localStorage.getItem("@showmovies");
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );

    if (hasFilme) {
      toast.warn("Esse filme já está na sua lista");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@showmovies", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!");
  };

  if (loading) {
    return (
      <div className="filme__info">
        <Preloader />
      </div>
    );
  }

  return (
    <div className="filme__info">
      <div className="filme__container">
        <h1 className="filme__title">{filme.title}</h1>
        <img
          className="filme__poster"
          src={
            filme.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`
              : notAvaible
          }
          alt={filme.title}
        />
        <h3 className="filme__sinopse">Sinopse</h3>
        <p className="filme__sinopse-text">
          {" "}
          <span>{filme.overview}</span>
        </p>
        <p className="filme__avaliacao-text">
          {" "}
          <strong>Avaliação: {filme.vote_average} / 10</strong>
        </p>
        <div className="filme__container-buttons">
          <button onClick={salvarFilme} className="filme__button-save">
            Salvar
          </button>
          <button className="filme__button-trailer">
            <a
              target="blank"
              rel="external"
              href={`https://www.youtube.com/results?search_query=${filme.title}trailer`}
            >
              {" "}
              Trailer
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filme;
