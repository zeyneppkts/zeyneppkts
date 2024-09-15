function appendToDisplay(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value = "";

}

function calculateResult(){
    const display = document.getElementById("display");
     try{
         display.value = eval(display.value.replace(/\^/g, "**"))
    }catch(error){
        display.value = "Hata!"
    }
}

function calculatePercentage(){
    const value = parseFloat(document.getElementById("display")).value;
    document.getElementById("display").value = display.value/100;

}

function calculateSquareRoot(){
    const value = parseFloat(document.getElementById("display")).value;
    try{
        display.value = Math.sqrt(display.value)
    }catch(error){
        display.value = "Hata!"
    }
}

function goToTheSong(){
   window.open('https://www.youtube.com/watch?v=lom6I3EgynY', '_blank');
}

document.addEventListener("keydown", function(event){
    const key = event.key;
    const display = document.getElementById("display");

    if(!isNaN(key) || key === "."){
        appendToDisplay(key);
    }else if(key === "+" || key === "-" || key === "/" || key === "*"){
        appendToDisplay(key)
    }else if(key === "Backspace"){
        display.value = display.value.slice(0, -1)
    }
    else if(key === "Escape"){
        clearDisplay();
    }
    else if (key === "Enter"){
        calculateResult();
    }
})

//Siteyi bir web uygulamasında açarsanız link çalışıyor//