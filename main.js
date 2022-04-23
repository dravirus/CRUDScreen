let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

let data = {};

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
}

let formValidation = () => {
       if (input.value === "") {
           msg.innerHTML = "Post cannot be blank";
           console.log("Failure");
       } else {
           acceptData();
       }
}