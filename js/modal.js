$('.galeria').click(function(e){
	var img = e.target.src;
	var modal = '<div class="modal" id="modal"><img src="'+ img + '" class="modal__img"><div class="a-left"><i class="fas fa-chevron-left"></i></div><div class="a-right"><i class="fas fa-chevron-right"></i></div><div class="modal__boton" id="modal__boton">X</div></div>'
	$('body').append(modal);
	$('#modal__boton').click(function() {
		$('#modal').remove();
	});
});

$(document).keyup(function(e) {
	if(e.which==27){
		$('#modal').remove();
	}
});



$('.a-right').click(function() {
 $('img').slider('next');
});
$('.a-left').click(function() {
 $('img').slider('prev');
});
