const btnHautPage = document.querySelector("#boutton-haut");

window.onscroll = function () {
    scrollFunction();
};
  
function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      btnHautPage.style.display = "block";
    } else {
      btnHautPage.style.display = "none";
    }
}

btnHautPage.addEventListener("click", function(){
    window.scrollTo(0,0);
});