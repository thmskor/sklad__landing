function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }

});

let popup = document.querySelector('.section-feedback__btn-1');
let popup2 = document.querySelector('.section-feedback__btn-2');
let popupBody = document.querySelector('.modal');
let popupClose = popupBody.querySelector('.modal-close');
let popupMobile = document.querySelector('.feedback__btn-mobile1'); 
let popupMobile2 = document.querySelector('.feedback__btn-mobile2');
let main = document.querySelector('.main');

popup.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBody.classList.add("modal-show");
    main.classList.add("main-blur");
});

popup2.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBody.classList.add("modal-show");
    main.classList.add("main-blur");
});

popupMobile.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBody.classList.add("modal-show");
    main.classList.add("main-blur");
});

popupMobile2.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBody.classList.add("modal-show");
    main.classList.add("main-blur");
});

popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBody.classList.remove("modal-show");
    main.classList.remove("main-blur");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();

        if (popupBody.classList.contains("modal-show")) {
            popupBody.classList.remove("modal-show");
            main.classList.remove("main-blur");
        }
    }
})