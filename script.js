document.addEventListener("DOMContentLoaded", function(){

    const seal = document.querySelector(".seal");
    const invitation = document.getElementById("invitation");

    seal.addEventListener("click", function(){

        invitation.style.display = "block";

        seal.style.transform = "scale(1.1)";
        seal.style.transition = "0.5s";

    });

});
