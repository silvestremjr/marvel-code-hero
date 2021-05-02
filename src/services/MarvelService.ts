import md5 from "md5";
import { requestInit } from "./http";

const ts = new Date().getTime();
const publicKey = "INSERT PUBLIC KEY HERE";
const privateKey = "INSERT PRIVATE KEY HERE";
const hash = md5(`${ts}${privateKey}${publicKey}`);

const getCharacters = (
  search: string = "",
  offset: number = 1,
  limit: number = 10
) => {
  const searchByName = search !== "" ? `nameStartsWith=${search}&` : ``;
  return fetch(
    `${
      requestInit.baseURL
    }/characters?${searchByName}ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${
      (offset - 1) * limit
    }`
  ).then((response) => response.json());
};

const getCharacterByID = (ID: number) => {
  return fetch(
    `${requestInit.baseURL}/characters/${ID}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  ).then((response) => response.json());
};
const getComicsByID = (ID: number) => {
  return fetch(
    `${requestInit.baseURL}/characters/${ID}/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  ).then((response) => response.json());
};

const MarvelService = {
  getCharacters,
  getCharacterByID,
  getComicsByID,
};

export default MarvelService;
