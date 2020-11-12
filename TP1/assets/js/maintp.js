/*

function calcul() {
    //lire notes
    var ds1=eval(document.formu.ds1.value);
    var ds2=eval(document.formu.ds2.value);
    var ds3=eval(document.formu.ds3.value);
    var ds4=eval(document.formu.ds4.value);
    var ds5=eval(document.formu.ds5.value);
    
    $(document).ready(function(){
    
        if(moyenne>=0 && moyenne < 10){ alert("En dessous de la moyenne : " + moyenne);}
        else if(moyenne>=10 && moyenne <13){alert("Moyen :" + moyenne);}
        else if(moyenne>=13 && moyenne<16){alert("Bien :" + moyenne);}
        else if(moyenne>=16 && moyenne<20){alert("Très bien :" + moyenne);}
        else {alert("Excellent :" + moyenne);}
    })
    
        //moyenne et arrondi
    var moyenne=(ds1+ds2+ds3+ds4+ds5)/5;
    moyenne=Math.round(moyenne*20)/20;
    //affichage du résultat
    document.formu.moyenne.value=String(moyenne);
   }


   CORRECTIONS */

   $(document).ready(function() {

    $("#boutonCalculer").click(function() {

        var champsVide = 0;
        var champsCorrect = true;
        var listeNotes = [];

        // On rentre nos valeurs dans un tableau
        $('.note').each(function() {
            listeNotes.push(parseInt(this.value));
        });

        // On vérifie que toutes nos valeurs sont correctes.
        listeNotes.forEach(element => {
            if (element == "")
                champsVide += 1;
            if (isNaN(element) && element < 0 || element > 20)
                champsCorrect = false;
        });

        if (champsVide != 0)
            alert("Il y a " + champsVide + " champs vide. Veuillez tous les remplir.");
        else if (champsCorrect === false)
            alert("Certaines valeurs ne sont pas correctes.");
        else
            calculMoyenne(listeNotes)
    });

    // Fonction qui fera le calcul de la moyenne
    function calculMoyenne(listeNotes) {

        var resultat = 0;
        var message;

        listeNotes.forEach(element => {
            resultat += element;
        });

        resultat = resultat / listeNotes.length;

        if (resultat >= 0 && resultat < 10)
            message = "En dessous de la moyenne";
        else if (resultat >= 10 && resultat < 13)
            message = "Moyen";
        else if (resultat >= 13 && resultat < 16)
            message = "Bien";
        else if (resultat >= 16 && resultat < 20)
            message = "Très bien";
        else if (resultat == 20)
            message = "Excellent";

        alert(resultat + " " + message);
    }
});