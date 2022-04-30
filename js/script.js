if (navigator.serviceWorker) {
navigator.serviceWorker.register("../sw.js")
.then((reg) => {
console.log('the file is register',reg);
})
.catch((err)=> {
console.log('eroo',err);
})
}






/* -------------------------------------------------------------------------- */
/*                               scrolNavbar                                  */
/* -------------------------------------------------------------------------- */


let aboutOffset = $("#about").offset().top;



$(window).scroll(function () {

   let wsScroll = $(window).scrollTop();

if (wsScroll > aboutOffset -50) {
   $("#main").css("backgroundColor", "black");
} else {
     $("#main").css("backgroundColor", "transparent");
}

})
/* -------------------------------------------------------------------------- */
/*                                smoothScroll                                */
/* -------------------------------------------------------------------------- */
$("a[herf^='#']").click(function () {
    let aHerf = $(e.target).attr('herf');
    let sectionOffest = $(aHerf).offset().top;
    $("html,body").animate({ scrollTo: sectionOffest }, 20000)
});



/* -------------------------------------------------------------------------- */
/*                                loadinSection                               */
/* -------------------------------------------------------------------------- */

$(document).ready(function () {
    $("#loading .lds-facebook").fadeOut(1000,function () {
        $("#loading").fadeOut(1000,function () {
           $("body").css("overflow-y", "auto");
       })
    })
})
