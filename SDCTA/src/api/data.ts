export interface Category {
	_id: string;	
	name: string;
	visualizations: Array<Visualization>;
}

export interface Visualization{
	_id: string;
	title: string;
	analysis: string;
	link: string;
}

export interface changeCategoryPayload {
	oldCategory: Category;
	newCategory: Category;
}
