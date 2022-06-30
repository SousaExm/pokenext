import Image from "next/image";

import * as S from '../styles/Pages/StyledHome'

import { Card } from "../components/Card";

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
      <S.TitleWrapper>
        <h2>
          Poke<span>Next</span>
        </h2>
        <Image 
          src="/images/pokeball.png" 
          width={50} 
          height={50} 
          alt="PokeNext"
        />
      </S.TitleWrapper>
      
      <S.PokemonsWrapper>
        {pokemons.map((pokemon) => (
          <Card 
            id={pokemon.id}
            name={pokemon.name} 
            key={pokemon.id}
          />
        ))}
      </S.PokemonsWrapper>
    </>
  )
}

