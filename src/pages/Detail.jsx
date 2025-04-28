import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectPokemonById } from '../RTK/selector';
import FavoriteButton from '../component/FavoriteButton';
import FilpCard from '../component/FilpCard';

export default function Detail() {
  const { pokemonId } = useParams();
  console.log(typeof pokemonId);
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  console.log(typeof pokemonId);

  if (!pokemon) {
    return <div>로딩 중...</div>; // 또는 "데이터 없음" 같은 처리
  }

  return (
    <div className="bg-white flex flex-col justify-center
     items-center border px-[60px] py-[30px] rounded-[10px]  border-b-[8px] border-r-[8px] border-black">
      <div className="text-[25px] mb-[10px]">
        {pokemon.name}
      <FavoriteButton pokemonId={Number(pokemonId)}/>
      </div>
      <div className="whitespace-pre-wrap text-center">{pokemon.description}</div>
      <FilpCard front={pokemon.front} back={pokemon.back}/>
    </div>
  );
}
