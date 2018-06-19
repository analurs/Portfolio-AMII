$(document).ready(function() {

//   function teste(event, nome){
//     var i, x, link;

   
//     x = document.getElementsByClassName("tab");
    
   
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = 'none';
//     }

//     link = document.getElementsByClassName("link");
    
//     for (i = 0; i < link.length; i++) {
//         link[i].className = link[i].className.replace(" active", "");
//     }

//     document.getElementsById(nome).style.display = "inline-block";
//     event.currentTarget.className += " active";

//     }

    // $("body").css("display", "none"); 
     
    

    // $("a.transition").click(function(event){
    //     event.preventDefault();
    //     //linkLocation = this.href;
    //     this.href = aparece;
    //     if(href !== aparece) {
    //         $(this.href).css("display", "none"); 
    //     }
        
    // });
         
    
     
    
    $("#send-btn").click(function(){
        alert("Enviado!");
    });

    $('.isso').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: true
    });

   
});