import { FC } from "react";
import "./CharacterRow.css";

import { ICharacter } from "characters.types";

type CharacterRowType = {
  character: ICharacter;
  key: number;
  getCharacterByID(ID: number): void;
};

export const CharacterRow: FC<CharacterRowType> = ({
  character,
  getCharacterByID,
}) => {
  return (
    <tr>
      <td>
        <div className="char">
          <img
            width="48"
            src={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
            alt=""
          />
          <button onClick={() => getCharacterByID(character.id)}>
            <h3>{character.name}</h3>
          </button>
        </div>
      </td>
      <td>
        {character.series.available > 0 ? (
          <>
            {character.series.items.map((serie, index) => (
              <p key={`series-${index}`}>{serie.name}</p>
            ))}
          </>
        ) : (
          <p>--</p>
        )}
      </td>
      <td>
        {character.events.available > 0 ? (
          <>
            {character.events.items.map((event, index) => (
              <p key={`events-${index}`}>{event.name}</p>
            ))}
          </>
        ) : (
          <p>--</p>
        )}
      </td>
    </tr>
  );
};

CharacterRow.propTypes = {};

export default CharacterRow;
