var btn=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
console.log("txtInput")
var outputDiv=document.querySelector("#output");

var url="https://api.funtranslations.com/translate/chef.json";

function getTrans(text){
    return url+"?"+ "text="+text
}


function clickHandler(){
    fetch(getTrans(txtInput.value))
    .then (res=> res.json())
    .then(json=>{
        var translation=json.contents.translated;
        outputDiv.innerText=translation;
    })
}

btn.addEventListener("click",clickHandler)

