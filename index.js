//Elements with event listeners
const tagCardButtons = document.querySelectorAll(".terminal-card header");

tagCardButtons.forEach((button) => {
    button.addEventListener("click",() => {
        const content = document.getElementById(`${button.id}-content`);
        
        if(content.style.display === "" || content.style.display === "none"){
            content.style.display = "block";
        }else{
            content.style.display = "none";
        }
    });
});