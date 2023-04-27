import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";


function Router() {

  const context = useContext(GlobalContext)
  const {pokedex, pokelist, addToPokedex, removeFromPokedex} = context

  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              pokelist={pokelist}
              addToPokedex={addToPokedex}
              pokedex={pokedex}
            />
          }
        />
        <Route
          path="/pokedex"
          element={
            <PokedexPage
              pokedex={pokedex}
              removeFromPokedex={removeFromPokedex}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
