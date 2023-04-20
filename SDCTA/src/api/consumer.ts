import { VisualizationObject } from './data';

export const API_URL = "http://localhost:3001"
export const GET_VIS = `${API_URL}/visualization`;
export const getVisByTitle = async (title: string): Promise<VisualizationObject | null> => {
  try {
    const url = `${GET_VIS}/${encodeURIComponent(title)}`;
    console.log(title)
    console.log(url)
    const response = await fetch(url);
    let data = await response.json();
    data = data as VisualizationObject;
    console.log(data)
    return data;
  } catch {
    console.log("inside catch")
    return null;
  }
};