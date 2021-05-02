import { FC, useEffect, useState } from "react";
import MarvelService from "services/MarvelService";

import { SearchInput } from "components/SearchInput/SearchInput";
import { CharacterRow } from "components/CharacterRow/CharacterRow";
import Pagination from "components/Pagination/Pagination";
import CharacterDetails from "components/CharacterDetails/CharacterDetails";

import "App.css";

import { ICharacter } from "./characters.types";
import { IComic } from "./comics.types";

const App: FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>();
  const [details, setDetails] = useState<ICharacter>();
  const [comics, setComics] = useState<IComic[]>();
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingDetails, setLoadingDetails] = useState<boolean>(false);
  const [loadingComics, setLoadingComics] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [offset, setOffset] = useState<number>(1);

  useEffect(() => {
    getCharacters();
  }, []);

  const searchCharacter = (term: string) => {
    if (term !== search) {
      setSearch(term);
      getCharacters(term);
    }
  };

  const changePage = (page: number): void => {
    setOffset(page);
    getCharacters(search, page);
  };

  const getCharacters = (
    term: string = "",
    page: number = 1,
    limit: number = 10
  ) => {
    setLoading(true);
    const data = MarvelService.getCharacters(term, page);
    data.then((data) => {
      const { results, total, limit } = data.data;
      setCharacters(results);
      setLoading(false);
      setCurrentPage(page);
      setTotalPages(Math.ceil(total / limit));
    });
  };

  const getCharacterByID = (ID: number): void => {
    //details
    setLoadingDetails(true);
    const data = MarvelService.getCharacterByID(ID);
    data.then((data) => {
      const { results } = data.data;
      setDetails(results[0]);
      setLoadingDetails(false);
    });
    //comics
    setLoadingComics(true);
    const dataComics = MarvelService.getComicsByID(ID);
    dataComics.then((data) => {
      const { results } = data.data;
      setComics(results);
      setLoadingComics(false);
    });
  };
  const closeDetails = (): void => {
    setDetails(undefined);
  };

  return (
    <div className="main">
      <div className="header">
        <img src="/logo.svg" height="24" alt="" />
        <div>
          <p>
            <strong>Silvestre Micaloski Junior</strong> Teste de Front-end
          </p>
        </div>
      </div>
      <div className="content">
        {details ? (
          <div className="row">
            {loadingDetails ? (
              <p>Carregando detalhes...</p>
            ) : (
              <>
                <div className="fechar">
                  <button className="fechaDetalhes" onClick={closeDetails}>
                    <span className="material-icons-outlined">arrow_back_ios_new</span> Voltar para a lista de personagens
                  </button>
                </div>
                <CharacterDetails {...{ loadingComics, comics, details }} />
              </>
            )}
          </div>
        ) : (
          <>
            <div className="row">
              <h1>Busca de personagens</h1>
              <SearchInput searchCharacter={searchCharacter} />
            </div>
            <div className="row">
              <table>
                <thead>
                  <tr>
                    <th>Personagem</th>
                    <th>Séries</th>
                    <th>Eventos</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr className="loading">
                      <td colSpan={3}>
                        <p>Carregando personagens...</p>
                      </td>
                    </tr>
                  ) : (
                    <>
                      {characters?.map((character) => (
                        <CharacterRow
                          key={character.id}
                          {...{ character, getCharacterByID }}
                        />
                      ))}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
      <div className="footer">
        {!details && (
          <Pagination
            {...{
              changePage,
              currentPage,
              totalPages,
              loading,
              offset,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
