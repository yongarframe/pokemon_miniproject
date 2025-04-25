import { getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectPokemonByRegExp } from "../RTK/selector";
import { Card } from "../component/Card";

export default function Search() {
  const [searchParams] = useSearchParams();
  const params = searchParams.get("pokemon");
  const reg = getRegExp(params);

  const pokemon = useSelector(selectPokemonByRegExp(reg));

  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
