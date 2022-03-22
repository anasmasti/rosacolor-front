export const fetchFakePostes = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        return res.json()
    })
    .then(console.log)
}