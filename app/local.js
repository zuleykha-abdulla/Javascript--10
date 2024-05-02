const addActive = () => {
  let menu = document.getElementById("menu");
  let menuToggle = document.getElementById("menu-toggle");
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
};
document.getElementById("menu-toggle").addEventListener("click", addActive);
//------------------------------------------

//Brauzerdə yadda saxladığımız məlumatı səhifədə çap etmək qaydası
var a = localStorage.getItem("name");
alert(a);
console.log(a);

//

let ad = localStorage.getItem("name");
console.log(ad);
//-----------------------------------

//
var b = localStorage.getItem("ad");
if (b == null) {
  alert("Melumat yaradilmayib");
} else {
  alert(b);
}

console.log(b);
//--------------------------------------------

//
localStorage.setItem("soyad", "Abdullayev");
localStorage.setItem("sifre", "orxan1985");
localStorage.setItem("username", "orxan85");
let x = localStorage.getItem("soyad");
console.log(x);
if (x == null) {
  alert("Melumat Tapilmadi");
} else {
  document.write(localStorage.getItem("soyad"));
}

//Yadda saxlanılan məlumatı silmək üçün aşağıdakı kodu yazmalıyıq.
//localStorage.removeItem("name");
//localStorage.clear();

//yazılan məlumatı localStorage sahəsinə yazmaq ucun

text.addEventListener("input", write);
function write(x) {
  localStorage.setItem("text", text.value);
}
