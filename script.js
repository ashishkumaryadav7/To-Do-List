$(document).ready(function(){
    $('#input-task').hover(function(){
        $(this).animate({
            width:'85%'
        },1000);
    });
    // $('#input-task').mouseout(function () { 
    //     $(this).animate({
    //         width:'70%'
    //     },1000);
    // });
    $('#input-task').unbind('hover');
});