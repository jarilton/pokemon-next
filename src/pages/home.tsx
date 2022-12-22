import Image from "next/image";
import { useEffect, useState } from "react";
import api from "../services/api";

import * as S from "../styles/pages/home";

export default function Home() {
  const [listPokemons, setListPokemons] = useState([] as any[]);

  const fetchPokemons = async () => {
    try {
      const maxPokemons = 251;
      const { data } = await api.get(`/pokemon/?limit=${maxPokemons}`);

      //add pokemon index
      data?.results?.forEach((item: any, index: any) => {
        item.id = index + 1;
      });

      setListPokemons(data?.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>
          Poke<S.DestakTitle>next</S.DestakTitle>
        </S.Title>
        <Image src="/pokeball.png" width="50" height="50" alt="Pokeball" />
      </S.TitleContainer>

      <S.ListItems>
        {listPokemons?.map((item, index) => (
          <S.ListInfo key={index}>{item.name}</S.ListInfo>
        ))}
      </S.ListItems>
    </S.Container>
  );
}
