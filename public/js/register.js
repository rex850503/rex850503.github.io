$(window).ready(function(){
    let passwordtype = $("#registerPassword input")

    $(".registerNext").click(function(){
        let step = $(this).data("step");
        let nextstep = $(this).data("nextstep");
        let registerStepIndex = $(this).parent().index();

        if(step == "#registerWay" && $("#registerWay input").val() == ""){
            alert("請填寫電話號碼")
        }else if(step == "#verification" && $("#verification input").val().length < 1){
            alert("請填寫驗證碼")
        }else if(step == "#registerPassword" && $("#registerPassword input").val() == ""){
            alert("請填寫密碼")
        }else{
            $(this).parent().removeClass("active");
            $(nextstep).addClass("active");
            $(".stepwrap li").eq(registerStepIndex + 1).addClass("active").siblings().removeClass("active");
        }
    })

    $(".viewtext").click(function(){
        if(passwordtype.val() != ""){
            if(passwordtype.attr("type") == "password"){   
                $(passwordtype).attr("type","text");
            }else{
                $(passwordtype).attr("type","password");
            }
        }
    })
})