import { useEffect, useState } from "react";
import axios from "axios";
import OneCard from "../OneCard/OneCard";

const Main = ({ setClickedPok }) => {
  const [pokemons, setPokemons] = useState(null);
  const fetchData = async () => {
    try {
      const {
        data: { results },
      } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      setPokemons(results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    pokemons && (
      <div className="Main">
        <ul>
          {" "}
          {pokemons.map((pok) => {
            return (
              <OneCard key={pok.name} pok={pok} setClickedPok={setClickedPok} />
            );
          })}
        </ul>
      </div>
    )
  );
};

export default Main;
