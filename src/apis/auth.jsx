import axios from "axios";

export const handleLogin = async ({ email, password }) => {
  const reponse = await axios.post("https://google.com/", { email, password });
  return email;
};

export const handleSignup = async ({
  full_name,
  email,
  phone_number,
  password,
}) => {
  setUser(e);
  const reponse = await axios.post("https://google.com/signup", {
    email,
    password,
  });
  console.log(user);
  console.log("signed up");
};

export const handleLogout = () => {
  setUser(null);
};
