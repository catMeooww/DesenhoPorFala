var x = 0;
var y = 0;
var DrawCircle = "";
var DrawRect = "";
var DrawSquare = "";
var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()
var inputX = document.getElementById("inputX");
var inputY = document.getElementById("inputY");
function setup(){
canvas = createCanvas(1000,500);
}
function start(){
    if (inputX.value != ""){
        x = inputX.value
    }else{
        x = 50;
    }
    if (inputY.value != ""){
        y = inputY.value
    }else{
        y = 50;
    }
    document.getElementById("status").innerHTML = "O sistema está ouvindo, pode falar";
    recognition.start()
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("status").innerHTML = "Fala reconhecida: "+ content;
    if(content == "círculo"){
        DrawCircle = "set";
    }else if (content == "retângulo"){
        DrawRect = "set";
    }else if (content == "quadrado"){
        DrawSquare = "set";
    }
}
function draw(){
    if (DrawCircle == "set"){
    rads = 100;
    circle(x,y,rads);
    document.getElementById("status").innerHTML = "Desenhado um Círculo";
    DrawCircle = "";
    }
    if (DrawRect == "set"){
    rect(x,y,70,50);
    document.getElementById("status").innerHTML = "Desenhado um Retângulo";
    DrawRect = "";
    }
    if(DrawSquare == "set"){
    rect(x,y,50,50)
    document.getElementById("status").innerHTML = "Desenhado um Quadrado";
    DrawSquare = "";
    }
}