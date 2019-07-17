export interface SearchState {
  searchInput: string;
  tags: string[];
  status: string;
  results: Result;
  router?: any;
}

export interface VisitedState {
  visited: ResultListing[];
}

export interface Result {
  data: ResultListing[];
  count: number;
  nextlink: string;
  prevlink: string;
  numpages: number;
}

export interface ResultListing {
  pk: number;
  title: string;
  description: string;
  company: string;
  post_date: string;
  state: string;
  city: string;
  country: string;
  url: string;
  tags: string[];
  source: string;
}
