var database = [
    {
        username: "fatul",
        password: "fatul123"
    },
    {
        username: "arif",
        password: "arif123"
    },
    {
        username: "ingrid",
        password: "ingrid123"
    }


];

var newsFeed = [
    {
        username: "Bob",
        timeline: "Hey this is my newsfeed"
    },
    {
        username: "Fatul",
        timeline: "This is javacript!!"
    },
    {
        username: "Marley",
        timeline: "I want to eat cuz im hungry!!"
    }

];

function isUserValid(username, pass) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === pass) {
            return true;
        }
    }
    return false;
}

function signIn(username, pass) {

    if (isUserValid(username, pass)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong login credentials");
    }
    /*     if (username === database[0].username && pass === database[0].password) {
            console.log(newsFeed);
        } else {
            alert("Sorry, wrong login credentials");
        } */
}

var userNamePromt = prompt("What\'s your username");
var passPromt = prompt("What\'s your password");

signIn(userNamePromt, passPromt);