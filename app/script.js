const addActive = () => {
  let menu = document.getElementById("menu");
  let menuToggle = document.getElementById("menu-toggle");
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
};
document.getElementById("menu-toggle").addEventListener("click", addActive);
//------------------------------------------

//
document.cookie = "name=Orxan; expires=Thu, 18 Dec 2024 12:00:00 UTC";
console.log(document.cookie);
//

document.cookie = "user=Cavid";

console.log(document.cookie);

//
function yarat() {
  var yazi = document.getElementById("yazi").value;
  document.cookie = "name=" + yazi + "; expires=Thu, 18 Dec 2025 12:00:00 UTC";
  alert("Cookie yaradildi.");
  console.log(document.cookie);
}
function bax() {
  alert(document.cookie);
}
console.log(document.cookie);

//Bir neçə ədəd cookie dəyərini yaratmağımız da mümkündür
document.cookie = "name=Hesen;expires=Thu, 18 Dec 2025 12:00:00 UTC";
document.cookie = "surname=Huseynov;expires=Thu, 18 Dec 2025 12:00:00 UTC";
//-------------------------------------
//
document.cookie = "name=Shukur; expires=Thu, 18 Dec 2025 12:00:00 UTC";
alert(document.cookie);
//-------------------------------------
document.cookie = "name=Shukur;expires=Thu, 18 Dec 2025  12:00:00 UTC";
document.cookie = "surname=Huseynov;expires=Thu, 18 Dec 2025 12:00:00 UTC";
var x = document.cookie.split(";")[0];
alert(x);
//--------------------------------------
//silmək üçün onun bitmə vaxtını keçmiş vaxta yazmağımız kifayətdir.
document.cookie = "name=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
console.log(document.cookie);
