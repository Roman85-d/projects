window.onload = function(){
    var im1 = document.getElementById("im1");
    var old1 = im1.src;
    var zam1 = new Image();
    zam1.src = "images/giphy111.gif";
    zam1.addEventListener("load", function(){
        im1.onmouseover = function(){this.src = zam1.src;};
im1.onmouseout = function(){this.src = old1;};
});
var im2 = document.getElementById("im2");
    var old2 = im2.src;
    var zam2 = new Image();
    zam2.src = "images/giphy222.gif";
    zam2.addEventListener("load", function(){
        im2.onmouseover = function(){this.src = zam2.src;};
im2.onmouseout = function(){this.src = old2;};
});
var im3 = document.getElementById("im3");
    var old3 = im3.src;
    var zam3 = new Image();
    zam3.src = "images/giphy333.gif";
    zam3.addEventListener("load", function(){
        im3.onmouseover = function(){this.src = zam3.src;};
im3.onmouseout = function(){this.src = old3;};
});
}