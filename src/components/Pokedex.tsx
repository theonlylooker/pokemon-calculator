import React, { Fragment } from "react";
import Pokecard from "./Pokecard";
import { useAllPokemonsInfinite } from "../hooks/useAllPokemons";
import InfiniteScroll from "react-infinite-scroll-component";
const Pokedex = () => {
  //const { data, isLoading } = useAllPokemons();
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useAllPokemonsInfinite();
  if (isLoading) return <h1>IS LOADING</h1>;
  return (
    <div className="w-full bg-gradient-to-b from-gray-400 to-transparent">
      <h1 className="text-6xl mb-5 text-center">Pokedex</h1>

      <InfiniteScroll
        dataLength={Number(data?.pageParams.length) * 20}
        next={fetchNextPage}
        hasMore={hasNextPage as boolean}
        loader={<h4>Loading...</h4>}
        endMessage={<h5>You did you are a pokemon master </h5>}
      >
        <div className="grid place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data?.pages.map((group, i) => (
            <Fragment key={i}>
              {group.map((pokemon) => (
                <Pokecard
                  key={pokemon.data.id}
                  id={pokemon.data.id}
                  name={pokemon.data.name}
                  types={pokemon.data.types}
                  sprites={pokemon.data.sprites}
                />
              ))}
            </Fragment>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Pokedex;

{
  /* <div>
          {isFetching && !isFetchingNextPage ? (
            <p>"Fetching..."</p>
          ) : (
            <p>"Tienes todos los pokemons felicidades"</p>
          )}
        </div>*/
}

{
  /* <button disabled={!hasNextPage} onClick={() => fetchNextPage()}>
          More
        </button> */
}
