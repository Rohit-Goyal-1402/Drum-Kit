var len=document.querySelectorAll("button").length;

for(var i=0; i<len; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        

        var char=this.innerHTML;
        makeSound(char);
    })
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
})
function makeSound(char)
{
    switch(char)
        {
            case 'q' :
                var music= new Audio('sounds/tom-1.mp3');
                music.play();
                break;
            case 'w' :
                var music= new Audio('sounds/tom-2.mp3');
                music.play();
                break;
            case 'e' :
                var music= new Audio('sounds/tom-3.mp3');
                music.play();
                break;
            case 'r' :
                var music= new Audio('sounds/tom-4.mp3');
                music.play();
            case 't' :
                var music= new Audio('sounds/kick-bass.mp3');
                music.play();
            case 'y' :
                var music= new Audio('sounds/snare.mp3');
                music.play();
                break;
            case 'u' :
                var music= new Audio('sounds/crash.mp3');
                music.play();
                break; 
            default :
            console.log(char);   
        }
}