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

export interface ICharacter {
  id: number;
  name: string;
  description: string;
  urls: Url;
  modified: Date;
  thumbnail: TImage;
  resourceURI: string;
  series: SeriesList;
  events: EventList;
  comics: ComicList;
}