document.addEventListener("DOMContentLoaded", () => {
    const bd = document.querySelector("html");
    const colors = ["red", "green", "blue", "white", "black", "purple"];

    var num = 0;
    bd.addEventListener("click", () => {
        document.querySelector('h1').style.display = 'none'
        document.documentElement.requestFullscreen()
        if (num > 5) {
            num = 0;
        }
        const cor = colors[num];

        bd.style.backgroundColor = cor;
        num++;
    });

    bd.addEventListener("mouseenter", () => {
        bd.style.cursor = "none";
    });

    bd.addEventListener("mouseleave", () => {
        bd.style.cursor = "default";
    });
});