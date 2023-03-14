import { VisualizationObject } from './data';

export const API_URL = "http://localhost:3001"
export const GET_VIS = `${API_URL}/visualizations`;

export const getVisByTitle = async (title: string): Promise<VisualizationObject | null> => {
  try {
    const url = `${GET_VIS}/${title}?`;
    const response = await fetch(url);
    let data = await response.json();
    data = data.job as VisualizationObject;
    return data;
  } catch {
    return null;
  }
};