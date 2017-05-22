$('.galeria__img').click(function(e){
	var img = e.target.src;
	var modal = '<div class="modal" id="modal"><img src="'+ img +'" class="modal__img"><div class="modal__boton" id="modal__boton">X</div></div>';
	$('body').append(modal);
//Para cerrar
	$('#modal__boton').click(function() {
		$('#modal').remove();//Para que desaparezca el div y todo lo que contiene
	})
})

$(document).keyup(function(e) {
	if (e.which==27) { //Para que se cierre con la tecla Esc
		$('#modal').remove();
	}
})
/*
Detecta a que imagen se le da click y guarda en la variable
img, usando la ruta del elemento

append
Me permite insertar un contenido dentro del body en este
caso.  
*/













