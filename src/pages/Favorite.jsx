import { useSelector } from "react-redux"
import { Card } from "../component/Card";
import { selectFavoritePokemons } from "../RTK/selector";

export default function Favorite() {
    const pokemon = useSelector(selectFavoritePokemons);

    return (
        <>
            {pokemon.map(el => <Card key={el.id} pokemon=
                {el} />)}
        </>
    )
}