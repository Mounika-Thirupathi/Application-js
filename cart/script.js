let arr = [];
function button() {
  let res = document.getElementById("text").value;
  if(res.trim() !== ""){  
    arr.push(res);
    console.log(arr);
    document.getElementById("message").textContent = arr.join(", ");
    document.getElementById("text").value = "";
  } else {
    alert("Please enter a food item!");
  }
}
