function lancerDe(n,callback){
    //génère 8 lancer de dé
    if(n!=8)
    {
      // génère un random entre 1 et 6
      var de = Math.floor(Math.random()*6) + 1;
      // affichage de score du dé dans la cellule menu 
      document.getElementById('menu')
      innerHTML = de;
      // on relance la fonction au bout de 200ms
      setTimeout(function() {lancerDe(n+1,callback)},200);
          
      }else {
          callback();
      }
    }


const canvas = document.getElementById('rectangle');
let ctx;

/*if ( canvas.getContext) {
    ctx = canvas.getContext('2d') ; 
    // on indique au contexte de construire un rectangle à 10 px de top, 10px de left, 50 px de largeur et 30px de hauteur
    ctx fillStyle = 'pink';
    ctx fillRect(10, 10, 50, 30);
    ctx fillText('current', 30, 30);
    

}else{
    // code pour les anciens naviagateurs
}*/
function roll(){
    //alert(2)
    console.log(1111)
}