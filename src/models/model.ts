export interface APIResponse {
  count: number;
  results: JobInterface[];
  mean: number;
}

export interface JobInterface {
  description: string;
  company: Company;
  salary_max: number;
  title: string;
  adref: string;
  created: string;
  salary_is_predicted: string;
  location: Location;
  id: string;
  contract_time: ContractTime;
  category: Category;
  redirect_url: string;
  salary_min: number;
  longitude?: number;
  latitude?: number;
}

export interface Category {
  label: string;
  tag: string;
}

export interface Company {
  display_name: DisplayName;
}

export enum DisplayName {
  VirginMedia = "Virgin Media",
}

export enum ContractTime {
  FullTime = "full_time",
  Remote = "remote",
  Contract = "contract",
}

export interface Location {
  area: string[];
  display_name: string;
}
