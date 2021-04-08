const user = {
    username: "daniela",
    pwd: "123"
}

let username;
let pwd;
({ username, pwd } = user)
console.log(pwd, username)
