import $ from 'jquery';
$(document).ready(function()
{
    
    $(".button").click(function()
    {
         var category=$(this).attr('data-filter');
         if(category=="All")
         {
             $('.item').addClass('hide');
             setTimeout(function(){
                $('.item').removeClass('hide');
             },200);
         }
         else
         {
            $('.item').addClass('hide');
            setTimeout(function(){
                $('.' + category).removeClass('hide');
             },200);
         }
    });
}
);