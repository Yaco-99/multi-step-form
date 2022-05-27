const isValidEmail = (email: string): Promise<boolean> =>
  new Promise((resolve) =>
    setTimeout(() => {
      if (email === "valid@email.be") {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 2000)
  );

export default isValidEmail;
