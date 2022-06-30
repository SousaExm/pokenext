import styled from "styled-components";

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;

    h2 {
        color: #e33d33;
        text-align: center;
        font-size: 3em;
        font-weight: bold;
        margin-right: 0.4em;

        span{
            color: #333;
        }
    }
`

export const PokemonsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
`