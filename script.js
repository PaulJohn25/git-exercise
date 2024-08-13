document.addEventListener('DOMContentLoaded', () => {
    
    const message = document.getElementById("message");
    let isClicked = false;

    message.onclick = changeMessageColor;

    function changeMessageColor() {
        let color = "#674188";
       if (!isClicked) {
         // This function toggles the color of message between black and purple. 
         color = "#674188";
       } else {
         color = "#000000";
       }
       message.style.color = color;
       isClicked = !isClicked;
    }

});