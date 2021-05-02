import { FC } from "react";

import { IComic } from "comics.types";
import { ICharacter } from "characters.types";

import "./CharacterDetails.css";

type CharacterDetailsProps = {
  details: ICharacter | undefined;
  comics: IComic[] | undefined;
  loadingComics: boolean;
};

const CharacterDetails: FC<CharacterDetailsProps> = ({
  details,
  comics,
  loadingComics,
}) => {
  return (
    <div className="details">
      <div className="info">
        <img
          src={`${details?.thumbnail.path}/standard_fantastic.${details?.thumbnail.extension}`}
          alt=""
        />
        <h2>{details?.name}</h2>
        <p>{details?.description}</p>
      </div>
      <div className="comics">
        <div className="list">
          {loadingComics ? (
            <p>Carregando detalhes...</p>
          ) : (
            <>
              {comics?.map((comic) => (
                <div className="comic" key={comic.id}>
                  <img
                    src={`${comic?.thumbnail.path}/portrait_incredible.${details?.thumbnail.extension}`}
                    alt=""
                  />
                  <h3>{comic.title}</h3>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
