
 /* ce que j'avais fait
$(document).ready(function(){
      $('p').hover(function(){
          $(this).css('color', 'green');
        },
          function(){ 
      $(this).css('color', 'black');}
    );

});  */


$(document).ready(function(){
   $('.color').mouseover(function(){

    $('#text').css('color',this.id);
   });
   $('.color').mousout(function(){
     $('#text').css('color', 'black');
   })

})