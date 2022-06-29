import Link from "next/link";
import Image from 'next/image'
import * as S from '../../styles/components/StyledHeader'

export function Header () {
    return (
        <S.Header>
                <S.Logo>
                    <Image src="/images/pokeball.png" width="30" height="30" alt="PokeNext"/>
                    <h1>PokeNext</h1>
                </S.Logo>
            <nav>
                <S.LinksWrapper>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Sobre</Link>
                    </li>
                </S.LinksWrapper>
            </nav>
        </S.Header>     
    )
}