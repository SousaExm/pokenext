import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import * as S from '../../styles/Pages/StyledPokemon'

interface PokemonsApiResult {
    results: {
      id: number;
      name: string;
      url: string
    }[]
}

interface PokemnonProps {
    pokemon: {
        name: string;
        id: number;
        height: number;
        weight: number;
        types: {
            type:{
                name: string
            }
        }[]
    }
}

export const getStaticPaths: GetStaticPaths = async() => {
    const maxPokemons = 250
    const api = 'https://pokeapi.co/api/v2/pokemon/'
  
    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const { results }:PokemonsApiResult = await res.json()

    const paths = results.map((pokemon, index) => {
        return {
            params: { 
                pokemonId: (index + 1).toString()
            }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps:GetStaticProps = async(context) => {
    const id = context.params?.pokemonId
    console.log(id)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id?.toString()}`)
    const data = await res.json()
    
    return {
        props: { pokemon: data}
    }
} 

export default function Pokemon ({pokemon}:PokemnonProps) {
    
    return (
        <S.PokemonWrapper>
            <h2>
                {pokemon.name}
            </h2>
            <Image
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                width={200}
                height={200}
                alt={pokemon.name}    
            />
            
            <div>
                <h3>Número:</h3>
                <p>#{pokemon.id}</p>
            </div>
            
            <div>
                <h3>Tipo:</h3>
                <S.TypesList>
                {pokemon.types.map((item, index) => (
                    <span key={index}
                        className={'type_' + item.type.name}    
                    >
                        {item.type.name}
                    </span>
                    ))} 
                </S.TypesList>
                
            </div>

            <S.HeightWeightWrapper>
                <div>
                    <div>
                        <h4>Altura:</h4>
                        <span>{pokemon.height * 10} cm</span> 
                    </div>
                </div>
                <S.Separator/>
                <div>
                    <div>
                        <h4>Peso:</h4>
                        <span>{pokemon.weight / 10} kg</span> 
                    </div>
                </div>
            </S.HeightWeightWrapper>
        </S.PokemonWrapper>
    )
}