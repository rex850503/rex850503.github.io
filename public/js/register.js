$(window).ready(function(){
    let passwordtype = $("#registerPassword input")

    $(".registerNext").click(function(){
        let step = $(this).data("step");
        let registerStepIndex = $(this).parent().index();

        console.log(registerStepIndex);

        $(this).parent().removeClass("active");
        $(step).addClass("active");

        $(".stepwrap li").eq(registerStepIndex + 1).addClass("active").siblings().removeClass("active");
    })

    $(".viewtext").click(function(){
        if(passwordtype.attr("type") == "password"){   
            $(passwordtype).attr("type","text");
        }else{
            $(passwordtype).attr("type","password");
        }
    })
})