
/* la façon classique de faire, on recopie idem pour bleu et rouge 
$(document).ready(function() {
    $('#green').click(function() {
        $('#text').css('color', 'green');
    });
});

la façon moderne Frederik Noel*/
/*
$(document).ready(function(){
    $('.color').click(function() {
    var divcolor=$(this).attr('id');
    $('#text').css('color', divcolor);
    })
})
Une autre façon de faire "le this.id correspond ici à la ligne 13 précédente. On a optimisé le code...*/

$(document).ready(function(){
    $('.color').click(function() {
            $('#text').css('color',this.id);
     })
     
})


