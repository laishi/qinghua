



//Works Data



var works = [
    {
        "id": "x50",
        "type": "demo",
        "deps": [
            "webgl"
        ],
        "title": "力帆 x50",
        "gridImg": "assets/img/x50.png",
        "url": "/case/x50/index.html",
        "contentUrl": "data/glass",
        "info": "by 3DLook",
        "tint": "#cf3201"
    },
    {
        "id": "i8",
        "type": "demo",
        "deps": [
            "webgl"
        ],
        "title": "宝马 I8",
        "gridImg": "assets/img/i8.png",
        "url": "/case/i8/index.html",
        "contentUrl": "data/glass",
        "info": "by playcanvas",
        "tint": "#cf5601"
    },
    {
        "id": "moto",
        "type": "demo",
        "deps": [
            "webgl"
        ],
        "title": "力帆 moto",
        "gridImg": "assets/img/moto.png",
        "url": "/case/moto/index.html",
        "contentUrl": "data/glass",
        "info": "by 3DLook",
        "tint": "#cf3201"
    },
    {
        "id": "iwatch",
        "type": "demo",
        "deps": [
            "webgl"
        ],
        "title": "苹果 iwatch",
        "gridImg": "assets/img/iwatch.png",
        "url": "/case/iwatch/index.html",
        "contentUrl": "data/glass",
        "info": "by 3DLook",
        "tint": "#cf5601"
    },
    {
        "id": "nike",
        "type": "demo",
        "deps": [
            "webgl"
        ],
        "title": "耐克 nike",
        "gridImg": "assets/img/nike.png",
        "url": "/case/nike/index.html",
        "contentUrl": "data/glass",
        "info": "by 3DLook",
        "tint": "#cf3201"
    },
    {
        "id": "ring",
        "type": "demo",
        "deps": [
            "webgl"
        ],
        "title": "海神戒子 ring",
        "gridImg": "assets/img/ring.png",
        "url": "/case/ring/index.html",
        "contentUrl": "data/glass",
        "info": "by 3DLook",
        "tint": "#cf5601"
    },
    {
        "id": "shave",
        "type": "demo",
        "deps": [
            "webgl"
        ],
        "title": "剃须刀 shave",
        "gridImg": "assets/img/shave.png",
        "url": "/case/shave/index.html",
        "contentUrl": "data/glass",
        "info": "by 3DLook",
        "tint": "#cf5601"
    },
    {
        "id": "zsfj",
        "type": "demo",
        "deps": [
            "webgl"
        ],
        "title": "Blend4Web 直升机",
        "gridImg": "assets/img/zsfj.png",
        "url": "/case/zsfj/index.html",
        "contentUrl": "data/glass",
        "info": "by Blend4Web",
        "tint": "#cf3201"
    },
    {
        "id": "edge",
        "type": "demo",
        "deps": [
            "webgl"
        ],
        "title": "三星 Edge",
        "gridImg": "assets/img/edge.png",
        "url": "/case/edge/index.html",
        "contentUrl": "data/glass",
        "info": "by 3DLook",
        "tint": "#cf3201"
    },
    {
        "id": "glmg",
        "type": "demo",
        "deps": [
            "webgl"
        ],
        "title": "格力 glmg",
        "gridImg": "assets/img/glmg.png",
        "url": "/case/glmg/index.html",
        "contentUrl": "data/glass",
        "info": "by 3DLook",
        "tint": "#cf5601"
    }
]









var flippingCards = document.getElementsByClassName("flippingCards")[0]



for (let i = 0; i < works.length; i++) {
    var worksData = works[i];
    

        
    var flippingCard = document.createElement("div");
    flippingCard.className = "flippingCard";
    flippingCard.setAttribute('data-id', worksData.id); // sets 
    
    var cardLink = document.createElement("a");
    cardLink.className = "cardLink";
    // cardLink.href = "#"

    var container = document.createElement("div");
    container.className = "container";
    
    
    
    var front = document.createElement("div");
    front.className = "front";
    front.style.backgroundImage = "url(" + worksData.gridImg + ")";


        
    var frontInner = document.createElement("div");
    frontInner.className = "inner";
    
    var frontInfo = document.createElement("span");
    frontInfo.className = "frontInfo";
    frontInfo.innerText = worksData.title    
    
    
    var back = document.createElement("div");
    back.className = "back";

    var backInner = document.createElement("div");
    backInner.className = "inner";
    
    var backInfo = document.createElement("p");
    backInfo.className = "backInfo";
    backInfo.innerText = worksData.info 
    
    
    frontInner.appendChild(frontInfo)
    backInner.appendChild(backInfo)
    
    front.appendChild(frontInner)
    back.appendChild(backInner)     
    

    
    container.appendChild(front)
    container.appendChild(back)

    
    
    cardLink.appendChild(container)
    flippingCard.appendChild(cardLink)
    
    flippingCards.appendChild(flippingCard)

    flippingCard.addEventListener("click", function (event) {


        var worksId = this.getAttribute("data-id")



        document.querySelector(".eyes3d>iframe").src = "case/" + worksId




        if (event.clientX > window.innerWidth / 2) {
            siderPage.style.left = "100vw"
            pages.style.transform = "translateX(-100vw)"
        } else {
            
            siderPage.style.left = "-100vw"
            pages.style.transform = "translateX(100vw)"


        }


    }, false);


}    



closeBtn.addEventListener("click", function (event) {
    pages.style.transform = "translate(0vw, 0px)"
    document.querySelector(".eyes3d>iframe").src = ""
}, false);



var fl = "first"

var lastScroll = 0;
window.addEventListener("scroll", (event) => {

    var currentScroll = this.scrollY;

    if (lastScroll < currentScroll) {
        // console.log("DOWN")
        fl = "first"
    } else {
        // console.log("UP")
        fl = "last"
    }




    anime({
        targets: '.flippingCard',
        translateY: -lastScroll * 0.3,
        delay: anime.stagger(3, { from: fl, start: 0 })
    });


    lastScroll = currentScroll

});











const body = document.body;
const main = document.querySelector('main');

// We define variables we will need later. 
// 2 variables to store the scroll position and 2 variables to store the 
// container position.
let sx = 0;
let sy = 0;

let dx = sx;
let dy = sy;

// The trick is to set a heigh to the body to keep the browser scroll bar.
body.style.height = main.clientHeight + 'px';

// Then we fix our container so it won't move when the user scrolls.
// We will move it ourself with the Linear Interpolation and translations.
main.style.position = 'fixed';
main.style.top = 0;
main.style.left = 0;

// We bind a scroll event to the window to watch scroll position.
window.addEventListener('scroll', scroll);

function scroll() {
  // We only update the scroll position variables
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}

// Then we start a `requestAnimationFrame` loop. 
// For more informations about `requestAnimationFrame` check the episode #6 of
// "Gist for Javascript Beginners".
window.requestAnimationFrame(render);

function render() {
  // We calculate our container position by using our Linear Interpolation method.
  // For more informations about Linear Interpolation check the episode #11 of
  // "Gist for Javascript Beginners".
  dx = lerp(dx, sx, 0.07);
  dy = lerp(dy, sy, 0.07);
  
  // I choose to round the interpolated positions to 2 decimals for clarity.
  // You could remove these to lines and the smooth scroll would still work.
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;
  
  // Finally we translate our container to its new positions.
  // Don't forget to add a minus sign because the container need to move in 
  // the opposite direction of the window scroll.
  main.style.transform = `translate(-${dx}px, -${dy}px)`;
  
  // And we loop again.
  window.requestAnimationFrame(render);
}

// This is our Linear Interpolation method.
function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}






