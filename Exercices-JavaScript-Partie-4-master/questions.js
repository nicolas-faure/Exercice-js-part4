/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace('e',' ');
}
var concatString = function (texte1, texte2) {
    return texte1+texte2;
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
var afficher9Car = function (texte) {
    return texte.slice(0,9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
  if (typeof texte === 'string')  {
    var answer = true;
  }
    return  answer;
}
var AfficherExtensionString = function (texte) {
    return texte.split('.').pop();;
}
var NombreEspaceString = function (texte) {
  var count = (texte.match(/ /g) || []).length;
    return count
}
var InverseString = function (texte) {
  String.prototype.reverse = function ()
{
        var n = '';
        for( var i=this.length-1; i >= 0; i--)
        n += this.charAt(i);
        return n;
}
    return texte.reverse();
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x,y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = Math.abs(array[i])
  }
    return array;
}
var sufaceCercle = function (rayon) { // calcul la surface ou aire d'un cercle
var result = Math.pow(rayon, 2);
var result = Math.PI * result
    return Math.round(result) ;
}
var hypothenuse = function (ab, ac) { //calcule l'hypothenuse
    return Math.hypot(ab,ac);
}
var calculIMC = function (poids, taille) { //calcul IMC
var result = poids / (taille * taille);
    return result.toFixed(2);
}
