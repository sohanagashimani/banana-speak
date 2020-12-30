var btnTranslate =   document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverurl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationurl(text){
    return serverurl + "?" + "text=" + text
}
function errorHandler(error){
    console.log("error occured",error); 
    alert("something wrong with server! try again after sometime")
}

function clickHandler() {
    // outputDiv.innerText = "sasaasa" + txtInput.value;
    var inputText = txtInput.value//taking ip
    //calling server for processing
    fetch(getTranslationurl(inputText))
    .then(response=> response.json())
    .then(json=>{
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)