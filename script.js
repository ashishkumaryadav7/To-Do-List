$(document).ready(function(){
    $('#input-task').change(function(){
        var input = $(this).val();
        $('#listOfTask').append('<li>'+input+'<i class="fa-solid fa-check"></i><i class="fa-solid fa-trash"></i> </li>');
        $(this).val('');
    });

    $('ul').on('click','.fa-trash',function () { 
        $(this).parent('li').remove().fadeOut(400);
     });

     $('ul').on('click','.fa-check',function () { 
        $(this).parent('li').toggleClass('checked');
     });
    
});