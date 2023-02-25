var help_messages = [];


function addNewMessage(){

    var input = document.getElementById("input-box")
    if (input.value == ""){
        alert("Please enter the input box")
        return
    }
    
    var post = document.createElement("div")
    post.classList.add("flex-container")
    var post_section = document.createElement("div")
    post_section.classList.add("flex-box")
    post.appendChild(post_section)

    var post_box = document.createElement("div")
    post_box.classList.add("text")
    post_section.appendChild(post_box)
    
    
    post_box.textContent = input.value
    console.log(post)
    help_messages.push(post)

    var entries_container = document.getElementById("entries")
    entries_container.appendChild(post)
    document.getElementById("input-box").value = ""
}   

window.addEventListener("DOMContentLoaded", function(){
    document.getElementById("submit-button-id").addEventListener("click", addNewMessage)
})
