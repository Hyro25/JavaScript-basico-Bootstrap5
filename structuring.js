const fakePromise = (msg) =>
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hola mundo");
  }, 2000);
});

export default fakePromise ;