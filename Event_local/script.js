let user_data=document.getElementById("user_input")
let local_container=document.getElementById("user_container")
let store_data=localStorage.getItem("user_data")
local_container.textContent=store_data
function AddToStore(){
    local_container.textContent=local_container.textContent +" " + user_data.value
    localStorage.setItem("user_data",local_container.textContent)
    user_data.value=""

}