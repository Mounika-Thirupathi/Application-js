document.body.style.backgroundColor="gray"
let headcount=0;
let tailcount=0;
function flipcoin(){
    let number=Math.floor(Math.random()*2)
    if (number==0){
        document.getElementById("coin").src="https://tools360.net/tool-assets/fun-tools/images/head_coin.png" 
        headcount++;
        document.getElementById("headcount").textContent="Head count ="  +headcount;
        
    }
        
    else{
        document.getElementById("coin").src="https://tse3.mm.bing.net/th/id/OIP.wKXYNmYSd-W7vTSfP8mcmgAAAA?pid=Api&P=0&h=180"
        tailcount++;
        document.getElementById("tailcount").textContent="Tail count =" +tailcount;
      
    }
    
}