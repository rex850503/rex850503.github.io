$(document).ready(function(){
    //計算 filter父層的高度 - header高度
    var filter = $("#filterStoreWrap").offset().top - 100;

    $("#loginBtn, #sideListLogin").click(function(){
        $("#login, body").addClass("openLogin");

        if($("#sideMenu").hasClass("active")){
            $("#sideMenu").removeClass("active");
        }
    }) 

    $("#login").on("click", closeLogin);
    $("#login .close").on("click", closeLogin);

    function closeLogin(e){
        console.log(e.target) //可以知道被點擊的目標是誰

        if(this == e.target){
            $("#login, body").removeClass("openLogin");
        }
    }; //#loginBtn end

    $("#burger").click(function(){
        $("#sideMenu").addClass("active");
    })

    $("#sideMenu .close").click(function(){
        $("#sideMenu").removeClass("active");
    }) //#burger end


    let filterFixed = $(window).scroll(function(){
        if($(this).scrollTop() >= filter){
            $(".filter").addClass("navfixed");
        }else{
            $(".filter").removeClass("navfixed");
        }
    }) //filterFixed end

    $(window).resize(function(){
        //計算 filter父層的高度 - header高度
        filter = $("#filterStoreWrap").offset().top - 100;

        filterFixed();
    });//window resize filterFixed end

    
})