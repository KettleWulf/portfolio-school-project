// Jag har fått hjälp med den här och kan inte javascripten själv, men förstår att den växlar mellan att lägga till och ta bort .showMenu-klassen efter .navlinks-klassen i HTML.
// Det i sin tur växlar mellan att "skriva över" display:none; med display:flex i CSS.
function myFunction() {
  var x = document.getElementById("nav");
  if (x.className === "navbar") {
    x.className += "showMenu";
  } else {
    x.className = "navbar";
  }
}

// const toggle = () => {
//   let x = document.querySelector("#nav");
//   if (x.className === "navbar") {
//     x.className += "show menu"
//   } else {
//     x.className = "navbar";
//   }
// }

