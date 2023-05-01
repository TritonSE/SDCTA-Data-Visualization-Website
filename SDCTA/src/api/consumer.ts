interface userDetails {
  phoneIn?: string;
  addressIn?: string;
  cityIn?: string;
  stateIn?: string;
  zipCodeIn?: string;
  countryIn?: string;
}

const updateUserDetails = async (
  emailIn: string,
  userDetails: userDetails
): Promise<Response> => {
  const updateRequestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      phone: userDetails.phoneIn,
      address: userDetails.addressIn,
      city: userDetails.cityIn,
      state: userDetails.stateIn,
      zipCode: userDetails.zipCodeIn,
      country: userDetails.countryIn,
    }),
  };

  const requestLink = "http://localhost:3001/user/";

  const response = await fetch(
    requestLink.concat(emailIn),
    updateRequestOptions
  );

  return response;
};

export { updateUserDetails };
