export const setSession = (token) => {
  const time = new Date().getTime();
  let expiry = time + 60 * 60 * 1000;
  
  localStorage.setItem("session", JSON.stringify({ token, expiry }));
};

export const getSession = () => {
  const time = new Date().getTime();
  const session = JSON.parse(localStorage.getItem("session"))

  return session ? {
    token: session.token,
    isExpired: time > session.expiry
  } : {
    token: '',
    isExpired: true,
  }
}

export const removeSession = () => {
  localStorage.removeItem("session");
};
