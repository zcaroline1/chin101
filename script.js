"use strict";

function changeButtonColor() {
    let buttonColor = window.getComputedStyle(button).backgroundColor;
    if(buttonColor === 'rgb(255, 255, 255)') {
        button.style.backgroundColor = 'rgba(233, 228, 209, 0.96)';
    } 
    // else {
    //     button.style.backgroundColor = 'white';
    // }
}