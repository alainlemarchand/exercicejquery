/*

$(document).ready(function(){
    $('li').css("color", "#f70202");
  
});

*/

/* Correction : toutes les balises enfants dans ul seront rouge . On peut aussi cibler le parent et chaque enfant ex : firstchild ou $('ul'.parent().css("border", "black");}) ppoiur ajoputer un bordser à l'élement parent à lire sur : https://api.jquery.com/children/*/


$(document).ready(function(){
    $('ul').children().css("color", "red");
})