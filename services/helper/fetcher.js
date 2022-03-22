export function fetcher(...args) {
 return fetch(...args).then((response) => response.json());
}
