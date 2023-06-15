export interface Visualization {
  title: string;
  analysis: string;
  link: string;
  hasCSV: boolean;
}

export interface Category {
	_id: string;	
	name: string;
	visualizations: Array<Visualization>;
}


export interface User {
  username: string;
  email: string;
  compName?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}
