const updateUserDetails = async (
  phoneIn: string,
  addressIn: string,
  cityIn: string,
  stateIn: string,
  zipCodeIn: string,
  countryIn: string,
  emailIn: string
): Promise<Response> => {
  const idRequestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }
  let response = await fetch(
    "http://localhost:3001/user/" + emailIn,
    idRequestOptions
  )
  response.json().then(async (result) => {
    const updateRequestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: phoneIn,
        address: addressIn,
        city: cityIn,
        state: stateIn,
        zipCode: zipCodeIn,
        country: countryIn
      }),
    }
    const id = result._id;
    const requestLink = "http://localhost:3001/user/"
    response = await fetch(
      requestLink.concat(id),
      updateRequestOptions
    );
    return response;
  }).catch((error) => {
    return error;
  })
  return response;
  // return response;
}
export { updateUserDetails };
