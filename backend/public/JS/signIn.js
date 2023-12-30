function check() {
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(res => console.log(res))
}
