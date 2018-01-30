function translation(lang) {
	var d=new Date();
	$.getJSON( "lang/"+lang+".json?v="+d.getTime(), function(retour) {
		$('.toTranslate').each(function(){
			var id=$(this).data('translationid');
			var type=$(this).data('translationtype');
				
		    switch(type) {
		    	default:
		    	case 'html':
					$(this).html(retour[id]);
		    	break;
		    	case 'placeholder':
					$(this).attr('placeholder',retour[id]);
		    	break;
		    	case 'alt':
					$(this).attr('alt',retour[id]);
		    	break;
		    	case 'value':
					$(this).val(retour[id]);
		    	break;
		    }
	    
	  	});
	});
}

$(document).ready(function() {
  var lang = "";
  if (localStorage.getItem("lang") != undefined) {
    lang = localStorage.getItem("lang");
    translation(lang);
  } else {
		// default translation FR
		translation("fr");
	}
  $('.btn-lang').on('click', function() {
    lang = $(this).data('lang');
    localStorage.setItem("lang", lang);
    translation(lang);
  });

});