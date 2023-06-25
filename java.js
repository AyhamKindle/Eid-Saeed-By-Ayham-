document.addEventListener('mousemove',parallax);

function parallax(e){
this.querySelectorAll('.layer').forEach(Layer => {
    const speed = Layer.getAttribute('data-speed');
    const x = (window.innerWidth - e.pageX*speed)/100;
   const y = (window.innerHeight - e.pageY*speed)/100;
    Layer.style.transform = `translateX(${x}px) translateY(${y}px)`
});
var audio= document.querySelector('audio');
audio.play();
var h1= document.querySelector('h1');
h1.style.animation = "blow 8s linear infinite";


}
document.addEventListener('mouseleave', function(){
    var audio= document.querySelector('audio');
    audio.pause();
    var h1= document.querySelector('h1');
    h1.style.animation = "";
})


var letter1 = document.getElementById('letter1');
var letter2 = document.getElementById('letter2');
var letter3 = document.getElementById('letter3');
var letter4 = document.getElementById('letter4');
var letter5 = document.getElementById('letter5');
var letter6 = document.getElementById('letter6');
var letter7 = document.getElementById('letter7');
var letter8 = document.getElementById('letter8');


setInterval(function(){
var h1 = document.querySelector('h1');
h1.style.color="black";
h1.style.textShadow = "0 8px 10px  white";

},500)
setInterval(function(){
    var h1 = document.querySelector('h1');
    h1.style.color="white";
    h1.style.textShadow = "0 8px 10px white";
    
    },1000)