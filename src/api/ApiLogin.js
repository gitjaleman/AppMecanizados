import Api from "./Api";

const getLogin = async (user, pass) => {
  try {
    const url = Api.endPoint + "login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user,
        pass: pass,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    const msjError = error + ": Error de login";
    throw msjError;
  }
};

const ApiLogin = {
  get: getLogin,
};

export default ApiLogin;
