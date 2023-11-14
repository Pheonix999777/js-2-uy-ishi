// const user = {
//   name: "kiritilmagan",
//   age: "kiritilmagan",
//   address: "kiritilmagan",
//   isSingle: false,
// };

// user.name = prompt("ismingizni kriting");
// user.age = prompt("yoshingizni kriting");
// user.address = prompt("adressingizni kriting");

// user.isSingle = confirm("uylanganmisiz");

// console.log("ismingizni kriting", user.name);
// console.log("yoshingizni kriting", user.age);
// console.log("adressingizni kriting", user.address);

// if (user.isSingle == true) {
//   console.log("ha turmush qurgangan");
// } else {
//   console.log("yoq turmush qurmagan");
// }
const data = [
  {
    price: "4$",
    type: "Kartoshka",
  },
  {
    price: "5$",
    type: "Tovuq",
  },
  {
    price: "6$",
    type: "Go'sht",
  },
];

let blockedUser1 = prompt("Kimni kirg'izmimiz?");
let blockedUser2 = prompt("Kimni kirg'izmimiz?");

let userName = prompt("Ismingizni kiriting");

if (blockedUser1 == "asadbek") {
  alert("sizga kirish mumkunmas");
} else {
  alert("kirish");
  let result = document.querySelectorAll(".menu__item");
  result[0].textContent = data[0].price;
  result[1].textContent = data[1].price;
  result[2].textContent = data[2].price;
}
