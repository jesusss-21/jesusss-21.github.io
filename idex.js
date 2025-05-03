document.addEventListener("DOMContentLoaded", function() {
    const mojarra = document.querySelector(".mojarra");

    mojarra.addEventListener("mouseover", function() {
        mojarra.style.animation = "nadar 2s infinite alternate ease-in-out";
    });

    mojarra.addEventListener("mouseout", function() {
        mojarra.style.animation = "nadar 4s infinite alternate";
    });
});
