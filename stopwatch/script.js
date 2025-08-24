let res=document.getElementById("message")
let count=0
let a=setInterval(()=>{
    res.textContent=count
    count+=1
    if (count==10){
        clearInterval(a)
    }
},1000)