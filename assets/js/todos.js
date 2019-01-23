// check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on x to delete todo
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation();
})

$('input[type="text"]').keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		var newText = todoText.replace(/(<([^>]+)>)/ig,"");
		// clear text
		$(this).val("");
		// create a new li and and to ul
		$('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> " + newText +"</li>")
	};
});

$(".fa-edit").click(function(){
	$('input[type="text"').fadeToggle();
});
