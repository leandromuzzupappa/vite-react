let controller: any;

const ENDPOINT = "https://rickandmortyapi.com/api/character/?name=";

export const fetchCharacters = (query: string) => {
  if (controller) controller.abort();

  controller = new AbortController();

  return fetch(ENDPOINT + query, { signal: controller.signal })
    .then((response) => response.json())
    .then((charactersList) => {
      controller = null;

      return charactersList.results || [];
    });
};
