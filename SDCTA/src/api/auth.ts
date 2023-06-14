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
    "http://localhost:3001/user/create",
    requestOptions
  );
  return response;
};

const getUser = async (
  email: any
): Promise<Response> => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  const requestLink = "http://localhost:3001/user/"
  const response = await fetch(
    requestLink.concat(email),
    requestOptions
  );
  return await response.json();
}

export { registerUser, getUser };
