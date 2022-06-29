import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.2em;
    margin-bottom: 2em;
    background-color: #333;
    color: #fff;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;

    h1 {
        font-size: 1.3rem;
        font-weight: bold;
    }
`
export const LinksWrapper = styled.ul`
    display: flex;
    gap: 1em;

    li {
        padding: 5px;
        transition: .4s;
        border-bottom: 2px solid transparent;

        &:hover {
            border-color: #FFF
        }
    }
`