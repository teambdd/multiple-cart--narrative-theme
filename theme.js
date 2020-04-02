var length_selector = $('.single-option-selector').length;
if(length_selector > 0 ){
	$(".single-option-selector").change(function () {
    		var variant_id = "";
		$( ".single-option-selector option:selected" ).each(function() {
			variant_id += $(this).attr('id');
		});
    		var result = "/cart/add?id[]="+variant_id+"&id[]=(variant_id)";
    		$('.atc-custom').attr('href', result);
	}).change();
}
else{
	var variant_id = $('.product-form__master-select.supports-no-js option').val();
   	var result = "/cart/add?id[]="+variant_id+"&id[]=(variant_id)";
   	$('.atc-custom').attr('href', result);
}
