type Image = {
  path: string;
  extension: string;
};
type SeriesSummary = {
  resourceURI: string;
  name: string;
};
type SeriesList = {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesSummary[];
};
type EventList = {
  available: number;
  returned: number;
  collectionURI: string;
  items: EventSummary[];
};
type EventSummary = {
  resourceURI: string;
  name: string;
};
type ComicList = {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicSummary[];
};
type ComicSummary = {
  resourceURI: string;
  name: string;
};
type Url = {
  type: string;
  url: string;
};
type TextObject = {
  type: string;
  language: string;
  text: string;
};
type ComicDate = {
  type: string;
  date: Date;
};
type ComicPrice = {
  type: string;
  price: number;
};
type CreatorList = {
  available: number;
  returned: number;
  collectionURI: string;
  items: CreatorSummary[];
};
type CreatorSummary = {
  resourceURI: string;
  name: string;
  role: string;
};
type CharacterList = {
  available: number;
  returned: number;
  collectionURI: string;
  items: CharacterSummary[];
};
type CharacterSummary = {
  resourceURI: string;
  name: string;
  role: string;
};
type StoryList = {
  available: number;
  returned: number;
  collectionURI: string;
  items: StorySummary[];
};
type StorySummary = {
  resourceURI: string;
  name: string;
  type: string;
};
export interface IComic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: SeriesSummary;
  variants: ComicSummary[];
  collections: ComicSummary[];
  collectedIssues: ComicSummary[];
  dates: ComicDate[];
  prices: ComicPrice[];
  thumbnail: Image;
  images: Image[];
  creators: CreatorList;
  characters: CharacterList;
  stories: StoryList;
  events: EventList;
}
