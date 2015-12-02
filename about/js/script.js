//Accordian
var action  = "click";
var speed   = "500";

//main handler
$(document).ready(function(){
    //question handler
    $('li.q').on(action, function(){
        //get next element
        $(this).next()
            .slideToggle(speed)
                //select all other answers
                .siblings('li.a')
                    .slideUp();
        //get image for active question
        var img = $(this).children('img');
        //remove this rotate class for all imgs but active
        $('img').not(img).removeClass('rotate');
        //toggle rotate class
        img.toggleClass('rotate');
    });
});