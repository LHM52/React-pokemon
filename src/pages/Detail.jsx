import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(state => selectPokemonById(state, Number(pokemonId)));

  if (!pokemon) {
    return <div>로딩 중...</div>;  // 또는 "데이터 없음" 같은 처리
  }

  return (
    <div className="flex flex-col justify-center items-center border border-[gray] p-[30px] rounded-[10px]">
      <div className="text-[20px] mb-[10px]">{pokemon.name}</div>
      <div className="whitespace-pre-wrap text-center">{pokemon.description}</div>
      <img className="w-[200px]" src={pokemon.front} alt={pokemon.name} />
    </div>
  );
}
