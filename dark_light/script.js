// let is_dark=false
// function Theme(){
//     if(!is_dark){
//         document.body.style.backgroundColor="black"
//         document.getElementById("dark").style.color="white"
//         is_dark=true
//     }
//     else{
//         document.body.style.backgroundColor="white"
//         document.getElementById("dark").style.color="black"

//     }
// }
// function Theme(){
//     document.body.classList.toggle("dark_mode")
    
// }
// function Theme(){
//     if(document.body.classList.contains("dark_mode")){
//         document.body.classList.remove("dark_mode")
//         document.body.classList.add("light_mode")
//     }
//     else{
//         document.body.classList.remove("light_mode")
//         document.body.classList.add("dark_mode")
//     }

// }

let container=document.body
let theme=localStorage.getItem("dark_mode")?"dark_mode":"light_mode"
container.classList=theme
function Theme(){
    if(container.classList=="dark_mode"){
        container.classList="light_mode"
        localStorage.setItem("light_mode","light_mode")
        localStorage.removeItem("dark_mode")
    }
    else{
        container.classList="dark_mode"
        localStorage.setItem("dark_mode","dark_mode")
        localStorage.removeItem("light_mode")
    }
}