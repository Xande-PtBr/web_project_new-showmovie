class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  //------------pega as cards da API
  getFilmes() {
    return fetch(
      `${this._baseUrl}/movie/now_playing?api_key=be5c8a7b363e064fe917284672d8ec1e&lenguage=pt-BR&page=1`,
      {
        headers: this._headers,
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // se o servidor retornar um erro, rejeite a promessa
      })
      .catch((err) => console.error(`Error: ${err.getMessage()}`));
  }
  getFilme(id) {
    return fetch(
      `${this._baseUrl}/movie/${id}?api_key=be5c8a7b363e064fe917284672d8ec1e&lenguage=pt-BR&page=1`,
      {
        headers: this._headers,
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // se o servidor retornar um erro, rejeite a promessa
      })
      .catch((err) => console.error(`Error: ${err.getMessage()}`));
  }
}

const api = new Api({
  baseUrl: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
