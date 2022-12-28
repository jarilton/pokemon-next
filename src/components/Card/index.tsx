import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";

interface ICardProps {
  pokemon: any;
}

export function Card({ pokemon }: ICardProps) {
  return (
    <S.Container>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <S.Number>{pokemon.id}</S.Number>
      <S.Title>{pokemon.name}</S.Title>
      <Link href={`/pokemon/${pokemon.id}`} style={{ textDecoration: "none" }}>
        <S.Details>Detalhes</S.Details>
      </Link>
    </S.Container>
  );
}
