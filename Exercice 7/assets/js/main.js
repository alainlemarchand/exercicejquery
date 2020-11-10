/* 

$(document).ready(function() {
    $(function() {
      console.log('false');
      $( "#dialog" ).dialog({
          autoOpen: false,
          title: 'Test'
      });
    });
  
    $("button").click(function(){
      console.log("click");
          $(this).hide();
          $( "#dialog" ).dialog('open');
      });
  }); 
  
  CORRECTION CI-DESSOUS*/
$(document).ready(function(){
$('#clickMe').click(function(){

   alert('exercice réussi');

});
});