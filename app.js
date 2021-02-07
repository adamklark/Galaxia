let container = document.querySelector('.container');
let image = document.querySelector('img');
let x;
let y;

window.addEventListener('keydown', function(e){
    if (e.keyCode == 37)  gauche(); 
		if (e.keyCode == 39) droite() ; 
		if (e.keyCode == 38) haut();  
		if (e.keyCode == 40) bas(); 
}); 




function gauche() 
	{
		x = getComputedStyle(image).left; 
		x = parseInt(x); x= x-10;  
		x = x + "px";
		image.style.left = x; 
	}
	function droite()
     {x = getComputedStyle(image).left; x = parseInt(x); x= x+10;  x = x+"px"; image.style.left = x ; }
	function haut() {y = getComputedStyle(image).top; y = parseInt(y); y= y-20;  y = y+"px"; image.style.top = y ; }
	function bas()  {y = getComputedStyle(image).top; y = parseInt(y); y= y+20;  y = y+"px"; image.style.top = y ; }