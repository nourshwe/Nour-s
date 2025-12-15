let huidig = 1;
function veranderFoto() {
  huidig++;
  if (huidig > 2) huidig = 1; 
  document.getElementById("wisselFoto").src = huidig + ".jpg";
}
function veranderKleur() {
    document.body.style.backgroundColor ="#454444ff"; 
}