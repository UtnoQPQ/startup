$( document ).ready(function() {
  $("#peekaboo").fadeIn("slow");
  $('.alias').focus();
});

$("#btn_aButton").click(function(){
    var text= $("#txt_AnInput").val();
    $("#msg").html(text);
    $("#tryingToBe").fadeIn("slow");
});

$("#btn_cancel").click(function()
{
	$("#tryingToBe").fadeOut("slow")
})