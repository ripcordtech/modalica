$(document).ready(function() {
	$.fn.modalica = function(){
		var modalica = $.fn.modalica;
		var body = $('body'); 

		modalica.init = function() {
			if ($('.modalica-modal').length == 0) { //Check that body.append hasn't been called already for a previous init
				body.append('<div class="modalica-modal"><div class="modalica--wrapper"><div class="modalica--close"><span>x</span></div><div class="modalica--content"></div></div></div>');
			}
		};
		modalica.init();

		var modalica_modal = $('.modalica-modal');
		var modalica_content = modalica_modal.find('.modalica--content');

		this.click(function(event){
			event.preventDefault();
			var content_id = $(this).attr('href');
			modalica.open(content_id);
		});

		$('.modalica--close').click(function(event){
			event.preventDefault();
			modalica.close();
		});

		modalica.open = function( content_id ) {
			body.addClass('modalica-active');
			var html = $(content_id).html();
			modalica_content.empty().append(html);
			modalica_modal.addClass('active');
			
		};

		modalica.close = function() {
			modalica_modal.removeClass('active'); 
			body.removeClass('modalica-active');
		};

	};
});
