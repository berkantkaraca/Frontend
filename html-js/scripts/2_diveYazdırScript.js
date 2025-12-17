document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    const box = document.getElementById("box");

    btn.addEventListener("click", () => {
        // const p = document.createElement("p");
        // p.innerText = "Merhaba Dünya";
        // box.appendChild(p);
        box.innerText = "Merhaba Dünya";
    });
});
