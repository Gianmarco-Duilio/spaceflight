export interface Data {
  count: number;
  next: string;
  previous: null;
  results: ArticleInterface[];
}

export interface ArticleInterface {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: NewsSite;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
}

export enum NewsSite {
  EuropeanSpaceflight = "European Spaceflight",
  SpaceNews = "SpaceNews",
}
