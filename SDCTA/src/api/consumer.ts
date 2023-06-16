import {
  type Visualization,
  type Category,
  type UserDetails,
} from "./data";
export const API_URL = process.env.REACT_APP_API_URL ?? "";
export const GET_VIS = `${API_URL}/visualization`;
export const CATEGORY_PREFIX = `${API_URL}/category`;
export const USER_PREFIX = `${API_URL}/user`;

export const getVisByTitle = async (
  title: string
): Promise<Visualization | null> => {
  try {
    const url = `${GET_VIS}/${encodeURIComponent(title)}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status} Failed Fetch `);
    }
    let data = await response.json();
    data = data as Visualization;
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

const updateUserDetails = async (
  emailIn: string,
  userDetails: UserDetails
): Promise<Response> => {
  const updateRequestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userDetails),
  };
  const response = await fetch(
    `${USER_PREFIX}/${emailIn}`,
    updateRequestOptions
  );
  // const dispatch = useDispatch();

  // dispatch({
  //   type: "STORE_USER",
  //   payload: emailIn,
  // });

  return response;
};

export const getCategoryByName = async (
  categoryName: string
): Promise<Category | null> => {
  try {
    const url = `${CATEGORY_PREFIX}/${categoryName}`;
    const response = await fetch(url);
    const data = await response.json();
    return data as Category;
  } catch {
    return null;
  }
};

export { updateUserDetails };
