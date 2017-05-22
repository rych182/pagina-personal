/*
Everything we write inside our function will run until
 that our document is loaded*/
/*El $(document).ready(function(){ significa que 
todo lo que escribamos dentro de nuestra función se
ejecutara hasta que nuestro documento haya cargado*/
$(document).ready(function(){
	$('.ir-arriba').click(function() {
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
	

	$(window).scroll(function() {
		if ($(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		}else{
			$('.ir-arriba').slideUp(300);
		}
	});
});

/*accedemos a nuestra clase de CSS en el span y le decimos
que cuando haya un click ejecute la función.

Animate hace que suba hasta el pixel 0 del archivo, 
 si agregar una coma y un digito, podrás controlar 
 la velocidad*/

/*Si el scrollTop es mayor a 0 desaparecera la clase .ir-arriba
 y dentro de los parentesis controlas la velocidad de 
 la animacion y si no es mayor aparece*/
