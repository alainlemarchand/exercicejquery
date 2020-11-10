/*

$('#lasVegasParano').mouseenter(function() 
       {
       
          $(this).css("cursor","pointer");
           $(this).animate({width: "50%", height: "50%"}, 'slow');


       });
    
    $('#lasVegasParano').mouseleave(function()
      {   
          $(this).animate({width: "28%"}, 'slow');
   });

   */

  /* correction */
  
  $(document).ready(function(){

    $("#lasVegasParano").mouseover(function(){
    $("#lasVegasParano").css("width","+=10%");  
    /* a la place de lasVegasParano on peut écrire this dans la seconde commande : $(this).css("width";"+=10%"); */

    })
  })