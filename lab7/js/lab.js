function sortUserName() {
    var userName = window.prompt("Hi, please tell me your name so i can fix it.");
    console.log("userName =", userName);

    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);

    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted;
}

document.writeln("Oh hey, I've fixed your name: ", 
    sortUserName(), "</br>");