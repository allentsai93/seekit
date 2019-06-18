export interface SearchState {
  searchInput: string;
  tags: string[];
  status: string;
  results: {};
}

export interface VisitedState {
  visited: Listing[];
}

export interface Result {
  data: Listing[];
  count: number;
  nextlink: string;
  prevlink: string;
}

export interface Listing {
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
