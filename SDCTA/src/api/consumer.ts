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

  return response;
};

export { updateUserDetails };
