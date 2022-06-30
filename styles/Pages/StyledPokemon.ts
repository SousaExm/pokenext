import styled from "styled-components";

export const PokemonWrapper = styled.div`
    text-align: center;

    h2 {
        font-size: 2.5em;
        text-transform: capitalize;
        background-color: #333;
        color: #fff;
        padding: .3em;
        width: 300px;
        margin: .8em auto;
    }

    h3 {
        margin: .6em auto;
        font-size: 1.2em;
        font-weight: bold;
    }

    h4 {
        font-weight: bold;
    }
`

export const TypesList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5em;
    margin-bottom: 1.2em;
    
    span{
        padding: .6em;
        color: #fff;
        background-color: #000;
        border: 1px solid #ccc;
        border-radius: 6px;
        text-transform: uppercase;
        font-size: .8em;
        font-weight: bold;
        width: 70px;
        text-align: center;
    }

    .type_normal {
    background-color: #aa9;
    }

    .type_fire {
    background-color: #f42;
    }

    .type_water {
    background-color: #39f;
    }

    .type_eletric {
    background-color: #fc3;
    }

    .type_grass {
    background-color: #7c5;
    }

    .type_ice {
    background-color: #6cf;
    }

    .type_fighting {
    background-color: #b54;
    }

    .type_poison {
    background-color: #a59;
    }

    .type_ground {
    background-color: #db5;
    }

    .type_flying {
    background-color: #89f;
    }

    .type_psychic {
    background-color: #f59;
    }

    .type_bug {
    background-color: #ab2;
    }

    .type_rock {
    background-color: #ba6;
    }

    .type_ghost {
    background-color: #66b;
    }

    .type_dragon {
    background-color: #76e;
    }

    .type_dark {
    background-color: #754;
    }

    .type_steel {
    background-color: #aab;
    }

    .type_fairy {
    background-color: #e9e;
    }
`

export const HeightWeightWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;

    div {
        text-align: center;
    }
`

export const Separator = styled.div`
    height: 40px;
    width: 1px;
    border-right: 1px solid #ccc
`