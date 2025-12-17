document.addEventListener("DOMContentLoaded", () => {
    const btn = document.createElement("button");
    btn.innerText = "Click Me";
    btn.type = "button";

    btn.addEventListener("click", () => {
        alert("Button Clicked!");
    });

    const container = document.getElementById("container");
    container.appendChild(btn);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    const span = document.createElement("span");
    span.innerText = "Kabul Ediyorum";

    //checkbox event
    checkbox.addEventListener("change", () => {
        console.log("Ceheckbox durumu: ", checkbox.checked);
    });

    container.appendChild(checkbox);
    container.appendChild(span);
});