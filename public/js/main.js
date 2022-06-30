$(document).ready(function(){
    var filter = $(".filter").offset().top;
        filter = filter - 100;
    console.log(filter);

    $("#burger").click(function(){
        $("#sideMenu").addClass("active");
    })

    $("#sideMenu .close").click(function(){
        $("#sideMenu").removeClass("active");
    })

    $(window).scroll(function(){
        if($(this).scrollTop() > filter){
            $(".filter").addClass("navfixed");
        }else{
            $(".filter").removeClass("navfixed");
        }
    })
})