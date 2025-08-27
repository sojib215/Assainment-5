// Nav Bar
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
const heartDisplay=document.getElementById("heart");
const coinDisplay=document.getElementById("coin");
const copyDisplay=document.getElementById("copy-count");
const heartDiv=heartDisplay.parentElement;
heartDiv.addEventListener("click",function(){
    heartCount++;
    heartDisplay.textContent=heartCount;
});
function reduceCoins(amount){
    if(coinCount => amount){
        coinCount -= amount;
        coinDisplay.textContent=coinCount;
        return true;
    }
    else{
        alert("Not Enough Coins!!!");
        return false;
    }
}
function increaseCopyCount(){
    copyCount++;
    copyDisplay.textContent=coinCount+"copy";
}