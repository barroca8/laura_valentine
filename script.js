$(document).ready(function () {
    var caller = $("#no-button")
    var yes_button = $("#yes-button")

    function moveButton() {
        var buttonWidth = caller.outerWidth(true);
        var buttonHeight = caller.outerHeight(true);

        document.getElementById("question").textContent = "What are you doing...? :(";
        document.getElementById("name").style.display = "none";

        document.getElementById("no-button").style.position = "absolute"
        document.getElementsByClassName("image")[0].src = "cat_mad_orange.gif";
    
        var randX = Math.floor(Math.random() * (window.innerWidth - 100));
        var randY = Math.floor(Math.random() * (window.innerHeight - 100));
    
        caller.stop().animate({ "left": randX + "px", "top": randY + "px" });
    }

    caller.on('mouseenter', moveButton);

    caller.on('click', function () {
        document.getElementById("question").textContent = "Stop that shit right now!!...";
        document.getElementById("name").style.display = "none";
        document.getElementsByClassName("image")[0].src = "cats_fighting.gif";
    });

    yes_button.on('click', function () {
        console.log('teste!!!')
        // Remove name message and no button
        document.getElementById("name").remove();
        document.getElementById("no-button").remove();

        // Update text content, show message, and change image source to "dance.gif"
        var yesMessage = document.getElementById("question");
        yesMessage.textContent = "YESSSSSS it's a date! (14th Sushi)";
        document.getElementsByClassName("image")[0].src = "cat_sushi.gif";

        // Remove yes button
        document.getElementById("yesButton").remove();
    })
});
