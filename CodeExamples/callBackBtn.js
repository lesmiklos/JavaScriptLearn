
window.onload = function() {

document.querySelector("#callback-btn")
    .addEventListener('click', function(){
    console.log("User Has Clicked The Button")
    document.getElementById("UserClickNotice").innerHTML = "User clicked the button at least once";
    
    
});



document.getElementById("FirstParagraph").innerHTML = "Hello There Little Bitty Kitty";


}

