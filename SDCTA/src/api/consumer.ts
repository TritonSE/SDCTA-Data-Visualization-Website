import { type VisualizationObject } from "./data";
export const API_URL = process.env.REACT_APP_API_URL;
export const GET_VIS = `${API_URL ?? "http://localhost:3001"}/visualization`;
export const getVisByTitle = async (
  title: string
): Promise<VisualizationObject | null> => {
  try {
    const url = `${GET_VIS}/${encodeURIComponent(title)}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status} Failed Fetch `);
    }
    let data = await response.json();
    data = data as VisualizationObject;
    return data;
  } catch (err) {
    console.log("Exception", err);
    return null;
  }
};
