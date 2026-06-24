alert("Script is working!");
document.addEventListener("DOMContentLoaded", function(){

    const seal = document.querySelector(".seal");
    const invitation = document.getElementById("invitation");

    seal.addEventListener("click", function(){

        invitation.style.display = "block";

        seal.style.transform = "scale(1.1)";
        seal.style.transition = "0.5s";

    });

});
for(let i=0;i<20;i++){

    let petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";
    petal.style.fontSize="50px";
    petal.style.top="0px";

    petal.style.left=Math.random()*100+"%";

    petal.style.animationDuration=
        (5+Math.random()*5)+"s";

    document.body.appendChild(petal);
}
