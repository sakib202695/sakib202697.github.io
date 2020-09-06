let button = document.querySelectorAll(".slide-btn");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    let activebtn = document.querySelector(".active").className[0];
    //console.log(activebtn);
    document.querySelector(".active").classList.remove("active");
    button[i].classList.add("active");
    let new_activebtn = button[i].className[0];
    //console.log(new_activebtn);
    let shift = -(activebtn - new_activebtn) * 325;
    console.log(shift);
    document.querySelector("#slide-grp").scrollLeft += shift;
  });
}
