/*Esta linea indica que nuestro código jquery se ejecutara hasta que todo nuestro documento esté listo*/
$(document).ready(function() {
//Efecto Scroll
	var carpeta1 = $('#carpeta1').offset().top,
		carpeta2 = $('#carpeta2').offset().top,
		carpeta3 = $('#carpeta3').offset().top,
		carpeta4 = $('#carpeta4').offset().top,
		carpeta5 = $('#carpeta5').offset.top;
	

	$('#btn-carpeta1').on('click', function(){
		$('html, body').animate({
			scrollTop: 150//Los pixeles que recorre hacia abajo
		}, 500);
	});
	$('#btn-carpeta2').on('click', function(){
		$('html, body').animate({
			scrollTop: 850//Los pixeles que recorre hacia abajo
		}, 500);
	});
	$('#btn-carpeta3').on('click', function(){
		$('html, body').animate({
			scrollTop: 6500//Los pixeles que recorre hacia abajo
		}, 500);
	});
	$('#btn-carpeta4').on('click', function(){
		$('html, body').animate({
			scrollTop: 7450//Los pixeles que recorre hacia abajo
		}, 500);
	});
	$('#btn-carpeta5').on('click', function(){
		$('html, body').animate({
			scrollTop: 9900//Los pixeles que recorre hacia abajo
		}, 500);
	});
});


/*
each
El método each nos permite aplicar una función anónima,

this
Se refiere a "el elemento actual"

Efecto anímate
En este efecto, ponemos que top te ponga en 0px lo que estaba en -200px, pero que tarde 2segundos, la parte que dice (index * 500), es una operación que se refiere a que los elementos que tengas como menú sean 3, 4, 5 o los que sean empiezan en 0,1,2,3 y ese orden se multiplica por medio segundo que son 500milisegundos y hace el efecto de que baja uno después de otro.
*/


