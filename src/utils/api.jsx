import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;

/* fetch("https://api.themoviedb.org/3")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  }); */
