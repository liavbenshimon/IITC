import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./OneCard.module.css";

function OneCard({ pok, setClickedPok }) {
  const [eachPok, setEachPok] = useState(null);
  useEffect(() => {
    if (!pok) return;
    const fetchDetails = async () => {
      try {
        const { data } = await axios.get(pok.url);
        setEachPok(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [pok.url]);

  return (
    eachPok && (
      <li
        className={styles.oneCard}
        onClick={() => {
          setClickedPok(eachPok);
        }}
      >
        <div className="card-container">
          <h2 className="name">{eachPok.name}</h2>
          <p className="abilities"></p>
          <img src={eachPok.sprites.front_default} alt="?" />
        </div>
      </li>
    )
  );
}

export default OneCard;
