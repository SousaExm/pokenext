import Image from 'next/image';
import Link from 'next/link';
import * as S from '../styles/components/StyledCard'

interface CardProps {
    name: string;
    id: number;
}

export function Card ({name, id}: CardProps) {
    return (
        <S.CardWrapper>
            <Image 
                src={`https://cdn.traction.one/pokedex/pokemon/${id}.png`}
                width={120}
                height={120}
                alt={name}    
            />
            <p>#{id}</p>
            <h3>{name}</h3>
              
           
            <Link
            className="btn"
            href={`/pokemon/${id}`}
            >
                <S.LinkBtn>
                    Detalhes
                </S.LinkBtn>
            </Link>  

        </S.CardWrapper>
    )
}