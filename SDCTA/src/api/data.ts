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
