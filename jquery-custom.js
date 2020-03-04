jQuery (document).ready(function(){
    jQuery("#pizza1image").mouseover(function(){
        $("#pizza1image").animate({
            opacity:'0.3'
        })
        $(".pizzatext1").show();
    })

    jQuery("#pizza1image").mouseout(function(){
        $("#pizza1image").animate({
            opacity:'1'
        })
        $(".pizzatext1").hide();
    })




})
