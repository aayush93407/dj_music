lene=document.querySelectorAll(".drum").length;

for(var i=0;i<lene;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
    var e=this.innerHTML;
    makesound(e);
    animate(e);

});
}

document.addEventListener("keydown",function(event)
{
    makesound(event.key);
    animate(event.key);
});

function makesound(event)
{
    switch(event)
    {
        case "w":
            var audio1=new Audio("./sounds/crash.mp3");
            audio1.play();
            break;
        case "a":
            var audio2=new Audio("./sounds/kick-bass.mp3");
            audio2.play();
            break;

        case "s":
            var audio2=new Audio("./sounds/snare.mp3");
            audio2.play();
            break;

        case "d":
            var audio2=new Audio("./sounds/tom-1.mp3");
            audio2.play();
            break;

        case "j":
            var audio2=new Audio("./sounds/tom-2.mp3");
            audio2.play();
            break;
        case "k":
            var audio2=new Audio("./sounds/tom-3.mp3");
            audio2.play();
            break;

        case "l":
            var audio2=new Audio("./sounds/tom-4.mp3");
            audio2.play();
            break;
    }
}

function animate(e)
{
    var a=document.querySelector("."+e);
    a.classList.add("pressed");
    setTimeout(() => {
        a.classList.remove("pressed");
    }, 100);

}