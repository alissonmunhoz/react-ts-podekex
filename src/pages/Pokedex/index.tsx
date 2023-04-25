import { useContext, useState } from "react";
import { Filters } from "../../components/Filters";
import { HeaderPoke } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { PokemonList } from "../../components/PokemonList";
import { PokemonContext } from "../../context/PokemonContext";
import { usePagination } from "../../hooks/usePagination";
import { usePokemon } from "../../hooks/usePokemon";

import { Container } from "./styles";

export const Pokedex = () => {
  const { pokemonsFiltered } = useContext(PokemonContext);
  const { page, nextPage, previousPage, backToHome } = usePagination();
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  let perPage = 16;

  

  return (
    <Container>
      <HeaderPoke />
      <Filters />
      <PokemonList
        page={page}
        perPage={perPage}
        pokemonsUrls={pokemonsFiltered}
      />
      <Pagination
        page={page}
        perPage={perPage}
        nextPage={nextPage}
        previousPage={previousPage}
        maxItems={pokemonsFiltered?.length!}
      />
    </Container>
  );
};
