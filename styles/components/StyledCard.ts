import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 2em 1em;
    width: 200px;
    margin: 0 20px 2em; 
    border-radius: 1em;
    border: 2px solid #e33d33;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, .5);
    background-color: #333;
    color: #fff;

    p {
        margin: 1em 0;
        background-color: #e33d33;
        border-radius: 5px;
        padding: 5px;
        text-align: center;
    }

    h3 {
        text-transform: capitalize;
        margin-bottom: 1em;
        font-weight: bold;
        font-size: 1.4em;
    }

    @media (max-width: 600px){
        justify-content: center;
        width: 100%;
        margin: 0 20% 2em; 
    }
`

export const LinkBtn = styled.div`
        background-color: #fff;
        color:#222;
        padding: .7em 1.2em;
        border-radius: 5px;
        font-weight: bold;
        transition: .4s;

        &:hover {
            cursor: pointer;
            background-color: #e33d33;
            color: #fff;
        }
`