import {Category} from './data'
export const CategoryPrefix = `http://localhost:3001/category`;
export const getCategoryByName = async(categoryName: string) : Promise<Category | null> => {
	try {
		const url = `${CategoryPrefix}/${categoryName}`;
		const response = await fetch(url);
		let data = await response.json();
		console.log((data as Category))
		
		return (data as Category);
		
	}
	
	catch {
		return null;
	}
}
