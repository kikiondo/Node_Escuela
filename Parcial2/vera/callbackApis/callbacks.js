let getUSer = (id, callback) => {
    let user = {
        id: id,
        name: 'Kikis'
    }
    setTimeout(() => {
        callback(user)
    }, 3000);
}

getUSer(31, (userObject) => {
    console.log(userObject)
}) //Hatsa que userObject llege, voy a esperar por el ._.)7 