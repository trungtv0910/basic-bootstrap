$(document).ready(function () {
    $(window).resize(function(){
var docao=$(window).height();
$(".main .container").css({'height':docao});
    
    });

    // var navbar= $(".navbar").offsetTop();
    // console.log(  navbar)
    // hiệu ứng scroll hiện menu
    $(window).scroll(function () { 
        var x1=$(window).scrollTop();
       
if(x1>150 ){
    $(".navbar").addClass("navbar-fixed-top");
}
else{
    $(".navbar").removeClass("navbar-fixed-top");

}





    }); 
    // xong scroll 
    // start tránition

$(window).scroll(function(){
    x2=$(window).scrollTop();
if (x2>=550){
    console.log("oke")
    $(".portfolio .container").addClass("xxxx")
  
}
// else if(x2<=400) {
//     $(".portfolio .container").removeClass("xxxx")
// }


});




// end transition 
    // start hiệu ứng click 
   var portfolio1=$("#portfolio").offset().top;
    var about1=$("#about").offset().top;
    var contact=$("#contact").offset().top;
    // var home =$(".main").offsetTop(0);
    $(".navbar-right li:nth-child(1) ").click(function (e) { 
        e.preventDefault();
        console.log("đang click")
        
        $("body,html").animate({scrollTop:portfolio1},1000,"easeInOutExpo");
    //   $("html,body").animate({scrollTop:portfolio },1000);
    //   console.log("bạn 1")
        
    });
    //  end portfolio
    $(".navbar-right li:nth-child(2) ").click(function (e) { 
        e.preventDefault();
      $("html,body").animate({scrollTop:about1},1000,"easeInOutExpo");
        
    }); //  end about
    $(".navbar-right li:nth-child(3)").click(function (e) { 
        e.preventDefault();

      $("html,body").animate({scrollTop:contact},1000,"easeInOutExpo");
        
    }); //  end contact
   

});