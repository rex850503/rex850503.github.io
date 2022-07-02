$(window).ready(function(){
    $(".registerNext").click(function(){
        let step = $(".registerNext").data("step");

        console.log(step);  

        $(this).parent().removeClass("active");
        $(step).addClass("active");
    })
})