function play(){
    document.body.innerHTML = '';
    var name = prompt("Enter Player Name: ");
    if (name!='' && name!='null'){
        document.write("Player Name: "+name);
    }
    else{
        alert("Please refresh the page and enter players name");
        document.location.reload(true)
    }
}
function dontPlay(){
    document.body.innerHTML = '';
    document.write("Thanks for visiting our page")
}