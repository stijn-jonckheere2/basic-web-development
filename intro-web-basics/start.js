// Intro Web Basics

$(document).ready(function() {
    console.log("%cWelcome to web basics!", "background-color: black; color: lime; padding: 10px 15px; margin-left: calc(50% - 100px);");
    console.log(" ");
});

function print(text, data) {
    setTimeout(function() {
        var messageCss = "background-color: lightslategrey; color: white; padding: 10px 15px;";

        console.log("%c" + text, messageCss);

        if(data !== undefined && data !== null) {
            console.log(data);
        }
    
        console.log(" ");
    }, 1000);
}

function subPrint(text, data) {
    setTimeout(function() {
        var messageCss = "background-color: lightsteelblue; color: black; padding: 10px 15px; margin-left: 40px;";

        console.log("%c" + text, messageCss);

        if(data !== undefined && data !== null) {
            console.log(data);
        }
    
        console.log(" ");
    }, 1000);
}

