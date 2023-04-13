import type { UserCredential } from "firebase/auth";

const registerUser = async (
  userCredential: UserCredential
): Promise<Response> => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: userCredential.user.displayName,
      email: userCredential.user.email,
      tier: 1,
    }),
  };
  const response = await fetch(
    "http://localhost:3001/user/",
    requestOptions
  );
  return response;
};

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
    headers: { "Content-Type": "application/json" },
    email: emailIn
  }
  console.log(emailIn);
  const response = await fetch(
    "http://localhost:3001/user/:email",
    idRequestOptions
  )
  console.log(response);
  return response;
  // const updateRequestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   id: currentUser.userId
  //   body: JSON.stringify({
  //     phone: phoneIn,
  //     address: addressIn,
  //     city: cityIn,
  //     state: stateIn,
  //     zipCode: zipCodeIn,
  //     country: countryIn
  //   }),
  // }
  // const response = await fetch(
  //   "http://localhost:3001/user/",
  //   requestOptions
  // );
  // return response;
}

export { registerUser, updateUserDetails };
