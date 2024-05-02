const addActive = () => {
  let menu = document.getElementById("menu");
  let menuToggle = document.getElementById("menu-toggle");
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
};
document.getElementById("menu-toggle").addEventListener("click", addActive);
//------------------------------------------

//Json formatının yazılışı
let a = `{"ad": "Orxan","soyad": "Abdullayev"}`;
let b = JSON.parse(a);
document.getElementById("qutu1").innerHTML = a;
console.log(a);
console.log(a.soyad);
console.log(b);
console.log(b.soyad);
//-------------------------------------------

//müxtəlif məlumatlar bir-birindən vergüllə ayrılır
var x = `{"ad":"Orxan", "soyad":"Abdullayev", "yas":39}`;
var y = JSON.parse(x);
console.log(y);
//document.write(`<h1>${y.ad}</h1>`);

//document.write(`<h1>${y.soyad}</h1>`);

//document.write(`<h1>${y.yas}</h1>`);

document.getElementById("orxan").innerHTML = `<h1>${y.ad}</h1>`;

document.getElementById("orxan1").innerHTML = `<h1>${y.soyad}</h1>`;

document.getElementById("orxan2").innerHTML = `<h1>${y.yas}</h1>`;

//------------------------------------------

//Javascript obyektini Json yazılışına çevirməyimiz mümkündür.
var z = { ad: "Cavid", soyad: "Abdulzade", yas: 36 };
var s = JSON.stringify(z);
document.getElementById("box").innerHTML = s;

//---------------------------------

//Json ilə məlumatlar obyekt içində obyekt şəklində də saxlana bilər.
var h = `{
  "person1":{"name":"Aynure","soyad":"Aliyev"},
  "person2":{"name":"Resmiyye","soyad":"Merdanli"}
  }`;
var g = JSON.parse(h);
//document.write(g.person1.name);
//document.write(g.person2.soyad);
document.getElementById("ad").innerHTML = g.person1.name;
document.getElementById("soyad").innerHTML = g.person2.soyad;

//-------------------------------------

//--------------------------------

//Json daxilində birbaşa çoxluq da yaza bilərik.
var n = `["Cemile","Aynure","Ceyran"]`;
var m = JSON.parse(n);
//document.write(m[0]);
document.getElementById("coxluq").innerHTML = m[0];

//-----------------------------------
