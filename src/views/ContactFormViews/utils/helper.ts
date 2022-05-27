const isValidEmail = (email: string): Promise<boolean> =>
  new Promise((resolve) =>
    setTimeout(() => {
      if (email === "axel.avaux@weinvest.be") {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 2000)
  );

export default isValidEmail;
