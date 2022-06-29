import { GetServerSideProps, GetServerSidePropsResult, GetStaticPaths, GetStaticPathsContext, GetStaticProps } from "next";
import { ContextType } from "react";

interface PokemonsApiResult {
  results: {
    id: number;
    name: string;
    url: string
  }[]
}

interface AllPokemons {
  pokemons: { id: number;
    name: string;
    url: string
  }[]
}

export async function getStaticProps(){
  const maxPokemons = 250
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const { results }:PokemonsApiResult = await res.json()

  results.forEach((item, index) => {
    item.id = index + 1;
  })

  return {
    props: {
      pokemons: results
    }
  }
}

export default function Home({pokemons}:AllPokemons) {
  return (
    <>
      <div>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>Name: {pokemon.name}, Id:{pokemon.id}</li>
        ))}
      </div>
    </>
  )
}

