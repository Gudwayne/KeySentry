document.querySelector('ul').addEventListener('click', function (event) {
    if (event.target.tagName === 'A' && event.target.getAttribute('href') === '#l/s') {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
});

//display modal on click

const modalWrapper = document.querySelector(".modals-wrapper");
const sentry = document.querySelector(".thekeys");

function displayModal(id){

    if (id === 'keys-modal'){
        modalWrapper.style.display = "none";
        keysModal(id);
    }else{
        sentry.style.display = "none";
        modalCall(id);
    }

}

function keysModal(id){
    const modal = document.getElementById(id);
    modal.style.display = "flex";

    //close modal
    const hide = document.getElementById("close-keys");
    hide.addEventListener("click", () =>{
        modal.style.display = "none"
        // document.querySelector("header").style.display = "unset";
    })
}

function modalCall(id){

    const addmode = document.getElementById("add-password-modal");
    const genmode = document.getElementById("generator-modal");

    const modal = document.getElementById(id);
    modalWrapper.style.display = "flex";
    if (id === 'add-password-modal'){
        genmode.style.display = "none";
        modal.style.display = "flex";
    }else if(id === 'generator-modal'){
        addmode.style.display = "none";
        modal.style.display = "flex";
    }

    //close modal
    const close = document.getElementById("close-modal");
    close.addEventListener("click", () =>{
        modalWrapper.style.display = "none";
        modal.style.display = "none"
        // document.querySelector("header").style.display = "unset";
    })
}

// copy to clipboard
const copies = document.querySelectorAll(".copy");
copies.forEach(copy =>{
    copy.onclick = () =>{
        let elementToCopy = copy.previousElementSibling;
        elementToCopy.select();
        document.execCommand("copy"); 
    }
})


const actions = document.querySelectorAll(".actions");
if (actions){
    actions.forEach(action =>{
        action.onclick = () =>{
            const links = action.querySelectorAll("a");
            links.forEach(link =>{
                link.style.display = "flex";
            })
            setTimeout(function(){
                links.forEach(link =>{
                    link.style.display = "none";
                })}
            , 3000)
        }
    })
}

const heading = document.getElementById('typewriter-heading');
const text = "Key Sentry Manager";
let index = 0;

function typeText() {
    if (index < text.length) {
        heading.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 120); // Adjust the typing speed (in milliseconds) here
    } else {
        // Text has been fully typed
        setTimeout(() => {
            // Clear the text and reset the index
            heading.innerHTML = '';
            index = 0;
            typeText(); // Start typing again
        }, 6000); // Adjust the pause before the loop (in milliseconds) here
    }
}

typeText();


function generateStrongPassword(length) {
    const key = document.getElementById("keygen");
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    key.value = password;
}
