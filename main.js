let bigButtonClicked = 0;
let firstArray = [];
let secondArray = [];
let thirdArray = [];

let bigButton = () => {
    bigButtonClicked++;
    if (bigButtonClicked == 8){
        document.querySelector(".lamp-big").style.backgroundPosition = "right";
        bigButtonClicked = 0;
    } else {
        document.querySelector(".lamp-big").style.backgroundPosition = "left";
    }
    
}

let firstButton = (element) => {
    if (!element.classList.contains("off")){
        firstArray.push(element.getAttribute("first"));
    } else {
        let index = firstArray.indexOf(element.getAttribute("first"));
        firstArray.splice(index, 1);        
    }
    element.classList.toggle("off");
    firstArray.sort();

    if (firstArray.length == 2 && firstArray[0] == "2" && firstArray[1] == "3"){
        document.querySelectorAll(".lamp").forEach(lamp=>{
            lamp.style.backgroundPosition = "right";
            document.querySelector(".one").classList.add("on");
            
        });       
        
    } else {
        document.querySelectorAll(".lamp").forEach(lamp=>{
            lamp.style.backgroundPosition = "left";
            document.querySelector(".one").classList.remove("on");
        });  
    }    
    console.log(firstArray);
}

let secondButton = (element) => {
    if (!element.classList.contains("off")){
        secondArray.push(element.getAttribute("second"));
    } else {
        let index = secondArray.indexOf(element.getAttribute("second"));
        secondArray.splice(index, 1);        
    }
    element.classList.toggle("off");
    secondArray.sort();

    if (secondArray.length == 5 && secondArray[2] == "7"){
        document.querySelector(".two").classList.add("on");
        console.log("op");    
           
    } else {
        document.querySelector(".two").classList.remove("on");
    }    
    console.log(secondArray);
}

let codeNumber = (element) => {
    let code = ["1", "2", "3", "3", "7", "8"];
    let z = 0;
    if (!element.classList.contains("off")){
        thirdArray.push(element.innerText);
    } else {
        let index = thirdArray.indexOf(element.innerText);
        thirdArray.splice(index, 1);        
    }
    element.classList.toggle("off");
    thirdArray.sort();

    if (thirdArray.length == 6){
        for (let i = 0; i < thirdArray.length; i++){
            if(thirdArray[i] == code[i]){
                z++;
            }else {
                break;
            }
        
        }
        if (z == 6){
            console.log("SOLVED");
        }
        
    } else {
        
    }    
    console.log(thirdArray);
}


document.querySelector(".button-big").addEventListener("click", bigButton);
