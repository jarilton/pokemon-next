import { useEffect, useState } from "react";
import api from "../services/api";

import * as S from "../styles/pages/home";


export default function Home() {
  const [pokemons, setPokemons] = useState([] as any[]);

  const fetchPokemons = async () => {
    try {
      const maxPokemons = 251;
      const { data } = await api.get(`/pokemon/?limit=${maxPokemons}`);

      console.log("Dados da api", data);

      //add pokemon index
      data?.results?.forEach((item: any, index: any) => {
        item.id = index + 1;
      });

      setPokemons(data?.results);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Estado", pokemons);

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <S.Container>
      <S.Title>POKENEXT</S.Title>
      <S.ListItems>
        {pokemons?.map((item, index) => (
          <S.List key={index}>{item.name}</S.List>
        ))}
      </S.ListItems>
    </S.Container>
  );
}
