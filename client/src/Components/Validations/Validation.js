const validUsername = (username) => {
  return username.match(/^[a-zA-Z0-9._]{6,16}$/) &&
    !username.StartsWith(".") &&
    !username.StartsWith("_") &&
    !username.EndsWith(".") &&
    !username.EndsWith("_") &&
    !username.Contains("..") &&
    !username.Contains("__") &&
    !username.Contains("._") &&
    !username.Contains("_.");
}

const validPassword = (password) => {
  return password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,16}$/);
}

export default { validUsername, validPassword }