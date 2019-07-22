

//checks off specific to-do's by clicking 

$("ul").on("click", "li", function(){
// adding a class designed on CSS sheet ------- 
    $(this).toggleClass("completed");
});

//click on Span "X" to remove without adding a line through text ------
// $(this) .parent retrieves the content inside of the li, fades it out by 500 miliseconds and then creates a function after being clicked to remove whatver is inside of it
// event.stopPropagation keeps it from bubbling up and adding the line through the content inside the Li
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
       $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
// event.which is calling a keys assigned number. 13 is equal to the enter button 
    if (event.which === 13){
      //grabbing new todo text from textbox from to-do list 
      var todoText = $(this).val();
      $(this).val("");
      //create a new li that adds to the ul 
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    };
});

$("fa-plus").click(function(){
    $("input").fadeToggle();
})