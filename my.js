    let imgObj = null;
    imgObj = document.getElementById("img");
    function init() {
    imgObj = document.getElementById("img");
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    }
    function left() {
        imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    }
    function right() {
        imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
    }

    window.onload = init;
