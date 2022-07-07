$(window).ready(function(){
    
    $("#loginBtn, #sideListLogin").click(function(){
        $("#login, body").addClass("open");

        if($("#sideMenu").hasClass("active")){
            $("#sideMenu").removeClass("active");
        }
    }) 

    $("#login").on("click", closePopup);
    $("#login .close").on("click", closePopup);
    $(".filterWrap").on("click", closePopup);
    $(".filterWrap .close").on("click", closePopup);

    function closePopup(e){
        console.log(e.target) //可以知道被點擊的目標是誰

        if(this == e.target){
            $("body, #login, .filterWrap").removeClass("open");
        }
    }; //#loginBtn end

    $("#burger").click(function(){
        $("#sideMenu").addClass("active");
    })

    $("#sideMenu .close").click(function(){
        $("#sideMenu").removeClass("active");
    }) //#burger end

    $(".scoreLike").click(function(){

        let store = $(this).parent();
        let storeIndex = store.index();

        $(".store").eq(storeIndex).find(".scoreLike").toggleClass("active");
    }) //.scoreLike end

    new WOW().init();
})