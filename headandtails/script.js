let headcount=0;
let tailcount=0;
function Head(){
    let number=Math.random()*2
    number=Math.ceil(number)
    if (number==1){
        document.getElementById("coin").src="https://tse3.mm.bing.net/th/id/OIP.bEnjy5Ih7cYGYOpHpqLA9QHaHa?pid=Api&P=0&h=180"
        headcount++;
        document.getElementById("headcount").textContent=headcount;
        
    }
        
    else{
        document.getElementById("coin").src="https://www.readingvine.com/wp-content/uploads/2023/02/Round-Lowercase-Bubble-Letter-T-Image.jpg"
        tailcount++;
        document.getElementById("tailcount").textContent=tailcount;
      
    }
    
}