var video = document.getElementById("trailer");
var pl = document.getElementById("play");



function play(){
    if (video.paused)
    {
        video.play();
        if(pl.innerHTML = "Смотреть трейлер"){
            pl.innerHTML = "Пауза"
        }

    }
    else
    {
        video.pause();
        if(pl.innerHTML = "Пауза"){
            pl.innerHTML = "Смотреть трейлер";
           

        }
       
    }
}


document.getElementById("play").addEventListener("click", play);





