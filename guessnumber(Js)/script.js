let randomNumber=Math.random()*100
randomNumber=Math.ceil(number)

function Guess_number(){
    let current=document.getElementById("user_input").value
    current=parseInt(current)

    if(current==randomNumber){
        document.getElementById("message").textContent="The number is matched"
    }
    else if (current>randomNumber){
        document.getElementById("message").textContent="The number is too high Try again"
    }
    else if(current<randomNumber){
          document.getElementById("message").textContent="The number is too low Try again"

    }
    else{
          document.getElementById("message").textContent="enter valid input"
    }
}



