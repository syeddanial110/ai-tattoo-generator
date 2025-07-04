export const setToken = (token) => {
  localStorage.setItem("userToken", token);
};

export const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem("userToken");
  }
  return null;
};
