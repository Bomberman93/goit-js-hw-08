
import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");
const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const textarea = document.querySelector("textarea");
const FEED = "feedback-form-state";
const localValue = localStorage.getItem(FEED);

formEl.addEventListener("input", throttle(formEmail,500));
// textarea.addEventListener("input", formMessage);

function formEmail (event) {
    event.preventDefault();
    const form = {
        email: inputEl.value,
        message: textarea.value, 
    };
    localStorage.setItem(FEED, JSON.stringify(form))
};

function saveLocal () {
    if(localValue){
        inputEl.value = JSON.parse(localValue).email;
        textarea.value = JSON.parse(localValue).message;
    }
}
saveLocal();

formEl.addEventListener("submit", submitButton);

function submitButton (event) {
    event.preventDefault();
    console.log({
        email: inputEl.value,
        message: textarea.value, 
    });
    formEl.reset();
    localStorage.removeItem(FEED);
}
