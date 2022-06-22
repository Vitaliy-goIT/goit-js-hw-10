export function fetchCountries(name) {
  const request = `https://restcountries.com/v3.1/name/${name}?fields=capital,population,languages,name.official,flags.svg`;
  return (
    fetch(request.trim())
      .then(r => r.json())
      //   .then(r => {
      //     if (!r.ok) {
      //       throw new Error(r.statusText);
      //     }
      //     return r.json();
      //   })
      .then(console.log)
      .catch(error => console.log(error))
  );
}
