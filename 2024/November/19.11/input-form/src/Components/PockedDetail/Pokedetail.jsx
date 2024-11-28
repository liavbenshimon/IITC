import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import axios from "axios";

const PokDetails = ({ setClickedPok, clickedPok }) => {
  const [pokeDetails, setPokeDetails] = useState(null);
  useEffect(() => {
    if (!clickedPok) return;

    const fetchDetails = async () => {
      try {
        const { data } = await axios.get(clickedPok.url);
        setPokeDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [clickedPok?.url]);
  console.log(pokeDetails);
  console.log(clickedPok);

  return (
    <div>
      <Dialog open={clickedPok}>
        {clickedPok?.name || "NOT FOUND"}
        <button
          onClick={() => {
            setClickedPok(null);
          }}
        >
          x
        </button>
      </Dialog>
    </div>
  );
};

export default PokDetails;
