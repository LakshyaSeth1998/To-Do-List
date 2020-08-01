//Check off specific todos by clicking on them
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Adding todo
$("input[type='text']").keypress(function(event){
    if(event.which===13){
        //grabbing new todo
        var todoText=$(this).val();
        //emptying input box
        $(this).val("");
        //create a new li and add ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> "+todoText+"</li>");
    }
})

$("h1 span").on("click",function(){
    $("input[type='text']").fadeToggle();
});