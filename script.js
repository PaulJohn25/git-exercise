document.addEventListener('DOMContentLoaded', () => {
    
    const message = document.getElementById("message");

    message.onclick = changeMessageColor;

    function changeMessageColor() {
        // This function changes the color of message to purple when click
        message.style.color = "#674188";
    }

});