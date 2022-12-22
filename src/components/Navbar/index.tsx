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
          <Link href="/home" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </S.LinkWrapper>
        <S.LinkWrapper>
          <Link
            href="/about"
            style={{ textDecoration: "none", color: "white" }}
          >
            Sobre
          </Link>
        </S.LinkWrapper>
      </S.Link>
    </S.Container>
  );
}
