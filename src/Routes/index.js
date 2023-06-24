import Home from "../components/home";
import StarWars from "../components/starwars";

const homePage = {
    path: "/home",
    name: "Home",
    component: Home,
};

const starWarsOpening = {
    path: "/",
    name: "Star Wars",
    component: StarWars,
};


  export const publicRoutes = [
    homePage,
    starWarsOpening
  ];
