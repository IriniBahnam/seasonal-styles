$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        alert(season);

    switch(season) { 
        case "Spring":
            season = "spring";
            $("html").css("background-color", "#2B7129");
            $("#wear").attr("src", "images/spring-wear.jpg");
            $("#logo").attr("src", "images/spring.gif");
            $("header h3").text("Jump into Spring!");
            break;

        case "Summer":
            season = "summer";
            $("html").css("background-color", "#EBA52B");
            $("#wear").attr("src", "images/summer-wear.jpg");
            $("#logo").attr("src", "images/summer.gif");
            $("header h3").text("Jump into Summer!");
            break;

        case "Fall":
            season = "fall";
            $("html").css("background-color", "#A81124");
            $("#wear").attr("src", "images/fall-wear.jpg");
            $("#logo").attr("src", "images/fall.gif");
            $("header h3").text("Jump into the Fall!");
            break;

        case "Winter":
            season = "winter";
            $("html").css("background-color", "#005393");
            $("#wear").attr("src", "images/winter-wear.jpg");
            $("#logo").attr("src", "images/winter.gif");
            $("header h3").text("Jump into Winter!");
            break;

        default: "Seasonal Styles"
        $("header h3").text("Click on a season!");
        $("#wear").attr("src", "images/300x400.png");
        $("html").css("background-color", "lavender");
    }

    });
});