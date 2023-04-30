interface userDetails {
  phoneIn: string;
  addressIn: string;
  cityIn: string;
  stateIn: string;
  zipCodeIn: string;
  countryIn: string;
}

const updateUserDetails = async (
  emailIn: string,
  userDetails: userDetails
): Promise<Response> => {
  const updateRequestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userDetails),
  }
  const requestLink = "http://localhost:3001/user/"
  console.log(emailIn);
  const response = await fetch(
    requestLink.concat(emailIn),
    updateRequestOptions
  );

  return response;
}

export { updateUserDetails };
