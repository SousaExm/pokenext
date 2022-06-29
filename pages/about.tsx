import { NextPage } from 'next'
import Image from 'next/image'
import * as S from '../styles/Pages/StyledAbout'

const About: NextPage = () => {
    return (
        <S.Wrapper>
            <h2>Sobre o projeto</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quia deserunt unde earum aliquam dolor sequi alias odio provident dolorem, reiciendis sed distinctio maxime? Molestiae porro sunt odio quia reiciendis.</p>
            <Image  src="/images/charizard.png" width={300} height={300} alt="Charizard"/>
        </S.Wrapper>
    )
}

export default About