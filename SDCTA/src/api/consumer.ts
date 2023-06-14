import { type VisualizationObject } from "./data";
import { useDispatch } from "react-redux";

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
    console.error("Exception", err);
    return null;
  }
};

export const getCsvByTitle = async (title: string): Promise<void> => {
  try {
    const url = `${GET_VIS}/download/${encodeURIComponent(title)}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status} Failed Fetch `);
    }

    const blob = await response.blob();
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = fileUrl;
    link.download = `${title}.csv`;
    link.click();
  } catch (err) {
    console.error("Exception", err);
  }
};

interface userDetails {
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

const updateUserDetails = async (
  emailIn: string,
  userDetails: userDetails
): Promise<Response> => {
  const updateRequestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userDetails),
  };

  const requestLink = "http://localhost:3001/user/";

  const response = await fetch(
    requestLink.concat(emailIn),
    updateRequestOptions
  );
  const 
  
  = useDispatch();

  dispatch({
    type: "STORE_USER",
    payload: emailIn,
  });

  return response;
};

export { updateUserDetails };
