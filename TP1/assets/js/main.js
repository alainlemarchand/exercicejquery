/*;js de l'exercice 7 

function verif(){
    var number = document.getElementById("number").value;
      if(number >= 10){
          alert("vous avez perdu");
      }
      else{
          alert("vous avez gagné");
      }
  }
*/

  /*
* jeu le juste prix
*
* l'ordinateur choisi un nombre cible entre 1 et 1000
* l'utilisateur a 10 coups 
* s'il depasse 10 coups il perd automatiquement
* et le jeu s'arrete.
* a chaque coup l'ordinateur demande au joueur un nombre "essai"
* - si l'essai est plus petit que la cible, l'ordinateur affiche "trop petit"
- si l'essai est plus grand que la cible, l'ordinateur affiche "trop grand"
- si l'essai est egal a la cible l'utilisateur gagne et le jeu s'arrete
*/
var cible = Math.floor(Math.random() * 100) + 1;
var nombre, compteur;
for (compteur=1; compteur<=10; compteur+=1) {
    nombre = parseInt(prompt("donnez un chiffre:"),10);
    if (nombre === cible) {alert("correct");
        break;
    }
    if (nombre > cible) {
        alert("moins");
    }
    if (nombre < cible) {
        alert("plus");
    }
}
    else {
        alert("ce n'est pas un chiffre");
        compteur-=1;
}
alert("c'est fini. le chiffre cherche est : " + cible);