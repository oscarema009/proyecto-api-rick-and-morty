import { useState } from "react";

export default function SearchBar(props) {
   const { onSearch } = props;
   const [character, setCharacter] =
      useState("");

   const handleChange = (evento) => {
      setCharacter(evento.target.value)
   }

   return (
      <divSearch>
         <input type="search" value=
            {character} onChange={handleChange} />
         <button onClick={() => onSearch
            (character)}>Agregar</button>
      </divSearch>
   );
}
