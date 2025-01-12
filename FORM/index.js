let name = document.getElementById("name");
let nameError = document.getElementById("nameError");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let form = document.getElementById("form");

form.addEventListener("submit", (e)=> {
    let messages = [] 
    if (name.value === "" || name.value == null ){
    messages.push("Name is required.");
}
if (messages.length > 0)
    e.preventDefault()
nameError.innerText = messages.join(", ")
})
console.log(name);