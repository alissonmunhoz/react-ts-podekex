import React from "react";
import { HeaderPoke } from "../../components/Header";
;

import { ButtonHome, Container, ContentHome, ContentSub, ImgHome } from './styles'

export const Home = () => {
  
  return (
    <Container>
      <HeaderPoke />
      <ContentHome>
        <ContentSub>
          <h1>Encontre todos os seus
            Pokémon favorito</h1>
          <h2>Você pode conhecer o tipo de Pokémon, seus pontos fortes, desvantagens e <br /> habilidades</h2>
          <ButtonHome><a href="/pokedex">Veja os Pokemons</a></ButtonHome>
        </ContentSub>
        <ImgHome />
      </ContentHome>
    </Container>
  );
};
