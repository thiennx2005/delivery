$( document ).ready(function() {
  $(".data-restaurant").click(function(){
  	$(".data-restaurant").removeClass("active");
  	$(this).addClass("active");
  	// var res_id = $(this).attr('id')
  	// var a1 = $(".link-show").attr('href');
  	// var link1 = a1.substring(0,20);
  	// var a2 = $(".link-edit").attr('href');
  	// var link2 = a2.substring(0,26);
  	// var a3 = $(".link-del").attr('href');
  	// var link3 = a3.substring(0,20);
  	// $(".link-show").attr('href', link1+res_id);
  	// $(".link-edit").attr('href', link2+res_id);
  	// $(".link-del").attr('href', link3+res_id);
  });
});