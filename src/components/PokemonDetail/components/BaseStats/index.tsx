import { IPokemon } from "../../../../interfaces/interfaces";
import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
  backgroundSelected: string;
}

export const BaseStats = ({ pokemon, backgroundSelected }: Props) => {
  console.log(pokemon?.moves);
  return (
    <div className={styles.baseStats}>
      {/* @ts-ignore */}
      {pokemon?.moves?.slice(0,10).map(({ move: {name}}) => {
        return  (
          <div key={name} className={styles.item}>
            <span style={{ color: backgroundSelected }}>
              {/* @ts-ignore */}
              {name}<br/>
            </span>
           
          </div>
        );
      })}
    </div>
  );
};
