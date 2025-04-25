export const selectPokemonById = (state, pokemonId) =>
    state.pokemon.data.find(p => p.id === pokemonId);