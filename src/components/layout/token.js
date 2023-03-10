import axios from "axios";

export async function Token(token) {
  try {
    const decoded = await axios.get(
      "http://localhost:8080/api/users/check-auth",
      {
        headers: {
          "x-access-token": token,
          "Content-Type": "application/json",
        },
      }
    );
    return decoded.data;
  } catch (e) {
    return null;
  }
}
