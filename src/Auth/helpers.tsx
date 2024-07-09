export const isEmailValid = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const isPasswordValid = (p: string) => p.length >= 8;

export const isNameValid = (name: string) => name.length <= 40;

export const isPasswordsMatch = (password: string, passwordConfirm: string) => password === passwordConfirm;
