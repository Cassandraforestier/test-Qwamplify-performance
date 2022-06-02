var tabAscii = require('./alphabet.js')
const readline = require('readline');

// Permet de configurer les Streams d'entrée/sortie pour Readline 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fonction ecrire qui permet de "transformer" chaque lettre en "Ascii art Generator"
function ecrire(reponse) {
  let reponseUpperCase = reponse.toUpperCase();
  let chaine = '';
  for (let j = 0; j < 6; j++) {
    for (let i = 0; i < reponseUpperCase.length; i++) {
      if (reponseUpperCase[i] === ' ') {
        chaine += "  ";
      }
      else {
        let lettre = reponseUpperCase[i];
        chaine += tabAscii[lettre][j] + " ";
      }
    }
    chaine += '\n';
  }
  console.log(chaine);
}

  rl.question('Veuillez entrer le mot: ', (reponse) => {
    reponseCourrante = reponse;

    if (reponse.length > 10) {
      console.log('Nous avons un mot long !');
      // Cette boucle est présente afin de couper la phrase pour que celle-ci se réécrit bien à la ligne 
      // (pour gérer le cas limite des mots/phrases longues dans le terminal)
      for (let i = 0; i < reponse.length; i += 10) {
        ecrire(reponse.substring(i, i + 10));
      }
    }
    else {
      ecrire(reponse);
    }
    rl.close();
  });



