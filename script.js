document.addEventListener("DOMContentLoaded", function(){

    const seal = document.querySelector(".seal");
    const invitation = document.getElementById("invitation");

    seal.addEventListener("click", function(){

        invitation.style.display = "block";

        seal.style.transform = "scale(1.1)";
        seal.style.transition = "0.5s";

    });

  for(let i=0; i<20; i++){

    let petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.className = "petal";

    petal.style.left = Math.random() * 100 + "%";

    petal.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(petal);
}

});
