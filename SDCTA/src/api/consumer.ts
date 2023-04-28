import { VisualizationObject } from './data';

export const API_URL = "http://localhost:3001"
export const GET_VIS = `${API_URL}/visualization`;
export const getVisByTitle = async (title: string): Promise<VisualizationObject | null> => {
  try {
    const url = `${GET_VIS}/${encodeURIComponent(title)}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status + " Failed Fetch ");
    }
    console.log(response)
    let data = await response.json();
    data = data as VisualizationObject;
    console.log(data)
    return data;
  } catch (e) {
    console.log("Exception", e)
    return null;
  }
};