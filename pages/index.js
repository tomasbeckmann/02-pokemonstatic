import { Inter } from "next/font/google";

import { Layout } from '../components/layouts/index'
import { PokemonCard } from "@/components/pokemon/PokemonCard";


import Grid from '@mui/material/Grid';


export default function HomePage({ pokemons }) {

  return (
    <>
      <Layout title="Listado de Pokemons">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {
            pokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
              />
            ))
          }
        </Grid>
      </Layout >
    </>
  );
}


export const getStaticProps = async (ctx) => {

  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const { results } = await res.json();

  const pokemons = results.map((poke, index) => ({
    ...poke,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
  }))

  return {
    props: {
      pokemons
    }
  }
}

