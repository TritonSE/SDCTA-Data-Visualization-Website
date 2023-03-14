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

export { registerUser };
