$(document).ready(function(){
    $('#input-task').click(function(){
        $(this).animate({
            width:'85%'
            
        },1000,function(){
            $(this).animate({
                width:'70%'
            });
        });
    });
});