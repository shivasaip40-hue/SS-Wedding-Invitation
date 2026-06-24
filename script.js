alert("Script is working!");

document.addEventListener("DOMContentLoaded", function(){

    const seal = document.querySelector(".seal");
    const invitation = document.getElementById("invitation");

    seal.addEventListener("click", function(){

        invitation.style.display = "block";

        seal.style.transform = "scale(1.1)";
        seal.style.transition = "0.5s";

    });

    let petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "fixed";
    petal.style.top = "100px";
    petal.style.left = "100px";
    petal.style.fontSize = "60px";
    petal.style.zIndex = "9999";

    document.body.appendChild(petal);

});
