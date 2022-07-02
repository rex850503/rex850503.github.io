$(window).ready(function(){
    $(".registerNext").click(function(){
        let step = $(this).data("step");
        let registerStepIndex = $(this).parent().index();

        console.log(registerStepIndex);

        $(this).parent().removeClass("active");
        $(step).addClass("active");

        $(".stepwrap li").eq(registerStepIndex + 1).addClass("active").siblings().removeClass("active");
    })
})