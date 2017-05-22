/*Esta linea indica que nuestro código jquery se ejecutara hasta que todo nuestro documento este listo*/
$(document).ready(function() {
	$('.menu a').each(function(index, elemento) {
		$(this).css({
			'top': '-200px'
		});
	});
});

/*
each
El metodo each nos permite aplicar una función anonima,


this
Se refiere a "el elemento actual"
*/

