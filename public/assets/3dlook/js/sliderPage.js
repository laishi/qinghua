var flippingCard = document.getElementsByClassName("flippingCard");
var pages = document.getElementsByClassName("pages")[0];
var siderPage = document.getElementsByClassName("siderPage")[0];
var closeBtn = document.getElementsByClassName("closeBtn")[0];










window.addEventListener("scroll", (event) => {
    var scrollPos = this.scrollY;

    siderPage.style.top = scrollPos + "px"
    console.log(siderPage.style.top )
});







//   document.getElementById("myDIV").style.transform = "translate(-100vw, 0px)";
// transform: translate(-100vw, 0px);