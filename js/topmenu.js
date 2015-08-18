$(document).ready(function(){
  	$("a").click(function(){
  		$("a").removeClass("cur");
		$(this).attr("class","cur");
	});
});