require('isomorphic-fetch');

//key = user search input
export async function fetchSearchResults(key) {
  const response = await fetch('/movies/key/' + key, {
    method: 'GET'
  })
  return await response.json();
}

//id = specific movie imbd
export async function fetchMovieDetails(imdbID) {
  const response = await fetch('/movies/ID/' + imdbID, {
    method: 'GET'
  })
  return await response.json();
}