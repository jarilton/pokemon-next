import Image from "next/image";

import * as S from "../styles/pages/about";

export default function About() {
  return (
    <S.Container>
      <S.Title>Sobre o projeto</S.Title>
      <S.Description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae assumenda
        numquam doloremque maxime velit id fugit debitis cumque quisquam natus
        porro suscipit nobis, doloribus architecto eos dolor voluptatibus
        voluptates et?
      </S.Description>
      <Image src="/charizard.png" width="300" height="300" alt="Charizard" />
    </S.Container>
  );
}
