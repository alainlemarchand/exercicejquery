

   CORRECTION */

   $(document).ready(function(){
    
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
//variable compteur =i on l'appelle i et puis c'est tout !
    var i = 0;
    $('#start').click(function(){
    i++;
    console.log(i);
    var inputNumber=$("#number").val();

    //test de la valeur.... Permet d'éviter que l'on rentre des lettres dans le champ de reponse = pas de reponse
    if (isNaN(inputNumber)== false){
      if (inputNumber > randomNumber){
          alert("C'est moins");
      }
      else if (inputNumber < randomNumber){
           alert("C'est plus");
      }
       else {
           alert("C'est correct! Le chiffre a été trouvé après "+i+" tentatives");
    }
  }
       else{
           alert("Merci de saisir un nombre !");
       }

})

   
})