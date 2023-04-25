import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Pokedex, PokeDetail, Home } from "./pages";

import "./index.scss";
import PokemonProvider from "./context/PokemonContext";

const router = createBrowserRouter([
  {
    path: "/pokedex",
    element: <Pokedex />,
  },
  {
    path: "/:pokeId",
    element: <PokeDetail />,
  },
  {
    path: "/",
    element: <Home />,
  },
 
  
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PokemonProvider>
    <RouterProvider router={router}/>
  </PokemonProvider>
);
