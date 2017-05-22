/*Esta linea indica que nuestro código jquery se ejecutara hasta que todo nuestro documento este listo*/
$(document).ready(function() {

//Efeceto menu
	$('.menu a').each(function(index, elemento) {
		$(this).css({
			'top': '-200px' /*Estan 200px arriba del header y por eso no se ven*/
		});

		$(this).animate({
			top:'0'
		}, 750 + (index * 500));
	});

//Efecto Header
	if( $(window).width() > 800) {
		$('header .texto').css({
			opacity: 0,
			marginTop: 0
		});

	$('header .texto').animate({
			opacity: 1,
			marginTop: '-52px'
		}, 1500);		 
	}
	/*El texto carga oculto y hacia arriba
	el animate, anima el transcurso de la 
	opacidad y el marginTop, el dígito después
	de la llave es la velocidad*/

//Efecto Scroll
	var acercaDe = $('#acerca-de').offset().top,
		trabajos = $('#trabajos').offset().top,
		contacto = $('#contacto').offset.top;
	
	$('#btn-acerca-de').on('click', function(){
		$('html, body').animate({
			scrollTop: 380//Los pixeles que recorre hacia abajo
		}, 500);
	});
	$('#btn-trabajos').on('click', function(){
		$('html, body').animate({
			scrollTop: 800//Los pixeles que recorre hacia abajo
		}, 500);
	});
	$('#btn-contacto').on('click', function(){
		$('html, body').animate({
			scrollTop: 1550//Los pixeles que recorre hacia abajo
		}, 500);
	});

});

/*
each
El metodo each nos permite aplicar una función anonima,


this
Se refiere a "el elemento actual"

Efecto animate
En este efecto, ponemos que top te ponga en 0px lo que
estaba en -200px, pero que tarde 2segundos, la parte
que dice (index * 500), es una operación que se refiere
a que los elementos que tengas como menú sean 3, 4, 5 o
los que sean empiezan en 0,1,2,3 y ese orden se multiplica
por medio segundo que son 500milisegundos y hace el efecto
de que baja uno después de otro.

*/

