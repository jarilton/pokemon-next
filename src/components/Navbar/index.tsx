import Link from "next/link";
import Image from "next/image";
import * as S from "./styles";

export function Navbar() {
  return (
    <S.Container>
      <S.Header>
        <Image src="/pokeball.png" alt="PokemonNext" width="30" height="30" />
        <S.Title>Pokemon Next </S.Title>
      </S.Header>

      <S.Link>
        <S.LinkWrapper>
          <Link href="/">Home</Link>
        </S.LinkWrapper>
        <S.LinkWrapper>
          <Link href="/about">Sobre</Link>
        </S.LinkWrapper>
      </S.Link>
    </S.Container>
  );
}
