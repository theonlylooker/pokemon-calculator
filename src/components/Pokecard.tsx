import React from "react";
import { pokemon } from "../types/types";
import { FC } from "react";

const Pokecard: FC<pokemon> = ({ id, name, sprites, types }) => {
  console.log(types, "types");
  return (
    <div className="shadow-md rounded w-56 hover:scale-105 cursor-pointer bg-gray-400">
      <div className="flex flex-row justify-between">
        <p>#{id}</p>
        <p>{name}</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={sprites.front_default} alt={name} />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-5">
          {types.map((type, idx) => {
            return <p key={idx}>{type.type.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Pokecard;
