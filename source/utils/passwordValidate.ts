export const validatePassword = (password: string) => {
  let dificult = 0;
  
  if (password.length >= 8) {
    dificult++;
  }

  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
    dificult++;
  }

  if (/[0-9]/.test(password)) {
    dificult++;
  }

  if (/[$@$!%*?&]/.test(password)) {
    dificult++;
  }

  return dificult;
}