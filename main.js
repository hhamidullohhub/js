// let num = prompt("1 ta son kiritng");
// if (num > 77) {
//     console.log("77 dan katta")
// }else if (num == 77 ) {
//     console.log("77 ga teng")
// }else if (num < 77) {
//     console.log("77 dan kichik")
// }else {
//     console.log("xatolik bor")
// }







// Foydalanuvchidan 20 raqamidan kichik son kiritishini so'rang.Agar kiritilgan raqam 20 yoki undan katta bo'lsa ekranda 'Juda katta' degan yozuvni chiqaring, aks holda 'Rahmat' yozuvini chiqaring.

// let text = prompt("20 raqamidan kichik son kiriting")

// if (text > 20) {
//     console.log("bu son 20 dan katta")
// }else if (text == 20) {
//     console.log("bu son 20 ga teng")
// }else if (text < 20) {
//     console.log("Raxmat")
// }

// let num = prompt("birorta son kiriting")
// let numTrim = num.trim()  

// if(numTrim.length > 0) {
//     let   = Number(numTrim) /// "4","55550", "dfkashsdjk", "fdsauh2564", ",,,....p[l413892720y"  fdasfdas
//     if(isNaN(numInt)) {
//         console.log("Raqam kiritmadingiz");
//     }else {
//         if(numInt % 2 === 0) {
//             console.log("bu son juft son");
//         }else {
//            console.log ("bus son toq son");
//         }
//     }

// }else {
//     console.log("Qiymat kiritmadingiz");
// }

// let a = prompt("bironta son kiriting")
// let numTrim = a.trim()

// if (numTrim.length > 0) {
//     let y = Number(numTrim)
//     if (isNaN(y)){
//         console.log("raqam kiritmadingiz")
//     }else if (y % 2 === 0) {
//         console.log("bu son juft son")
//     }else {
//         console.log("bu son toq son")
//     }
// }else {
//     console.log("hech narsa kiritmadingiz")
// }

// if (num % 2 == 0 ) {
//     console.log("bu son juft son")
// }else {
//     console.log("bu son toq son")
//     console.console.log();
// }




// Ixtiyoriy A sonini juft yoki toqligini aniqlang. Agar A soni juft bo'lsa console da "A soni juft" degan aks holda "A soni toq" degan habar chiqaring

// let a = prompt ("birorta son kiriting")
// let x = a % 2 == 0 ? ("bu son juft son"):("bus son toq son");
// console.log(x)



// let a = prompt ("birorta son kiriting")
// let x = a.length > 0 ? isNaN(Number(a)) ? "Bu raqam emas" : a % 2 == 0 ? ("bu son juft son") : ("bus son toq son"): "qiymat kiritmadingiz";
// console.log(x)

// let x = 5 > 6 && 4 < 6 && 3 > 1                        =========================> va degani
// let y = 5 > 6 || 4 > 6 || 3 < 1 ||                     =========================>  yoki degani

// console.log(x);
// console.log(y);
// let a = Number(prompt("biror bir son kiritng"))//"4"
// let b = Number(prompt("biror bir son kiritng"))////"100"
// let c = Number(prompt("biror bir son kiritng"))// //"2"
// let d = Number(prompt("biror bir son kiritng"))// //"2"
// let e = Number(prompt("biror bir son kiritng"))// //"2"
// let f = Number(prompt("biror bir son kiritng"))// //"2"
// let g = Number(prompt("biror bir son kiritng"))// //"2"
// console.log("a",a);
// console.log("b",b);
// console.log("c",c);
// console.log("c",d);
// console.log("c",e);
// console.log("c",f);
// console.log("c",g);

// if(a <= b && a <= c) {
//     console.log(a);
// }
// else if(b <= c && b <= a) {
//     console.log(b);
// }
// else {
//     console.log(c);
// }


// // 6 ta raqamnini eng kattasini yozish

// let num1 = Number(prompt("birinchi son"))
// let num2 = Number(prompt("ikkinchi son"))
// let num3 = Number(prompt("uchinchi son"))
// console.log("bu eng kattasini topb beardi")
// console.log("num1",num1)
// console.log("num2", num2)
// console.log("num3", num3)
// if (num1 >= num2 && num1 >= num3) {
//     console.log(num1)
// }
// else if (num2 >= num3 && num2 >= num1) {
//     console.log(num2)
// }

// else {
//     console.log(num3)
// }

// let num1 = Number(prompt("birinchi sonni kiriting"))
// let num2 = Number(prompt("ikkinchi sonni kiritng"))
// let num3 = Number(prompt("uchinvhi sonni kiriting"))
// console.log("birinchi son",num1)
// console.log("ikkiinchi son", num2)
// console.log("uchinchi son", num3)

// if (num1 <= num3 && num1 <= num2) {
//     console.log(num1)
// }else if(num2 <= num1 && num2 <= num3) {
//     console.log(num2)
// }else {
//     console.log(num3)
// }

// let num4 = Number(prompt("tortinchi son"))
// let num5 = Number(prompt("beshinchu sonni kiriting"))
// let num6 = Number(peompt("oltinchi sonni kiritng"))
// console.log("tortinchi son", num4)
// console.log("beshinchi son", num5)
// console.log("oltinchi son", num6)

// if (num4 >= num6 && num4 >= num5) {
//     console.log(num4)
// }else if (num5 >= num4 && num5 >= num6) {
//     console.log(num5)
// }else {
//     console.log(num6)
// }
// let num4 = Number(prompt("biron son kiriting"))
// let num5 = Number(prompt("biron son kiriting"))
// let num6 = Number(prompt("biron son kiriting"))

// console.log("num4", num4);
// console.log("num5", num5);
// console.log("num6", num6);




//Foydalanuvchidan 20 raqamidan kichik son kiritishini so'rang.Agar kiritilgan raqam 20 yoki undan katta bo'lsa ekranda 'Juda katta' degan yozuvni chiqaring, aks holda 'Rahmat' yozuvini chiqaring.
// let text = prompt("20 dan kichik bolgan son kiritjng")

// if (text > 20) {
//     console.log("bu son 20 dan katta")
// } else if (text == 20) {
//     console.log("bu son 20 ga teng")
// } else if (text < 20) {
//     console.log("Raxmat")
// }else if (Number) {
//     console.log("xatolik bor")
// }

//Foydalanuvhidan sevimli rangini kiritishini so'rang . Agar kiritilgan rang 'yashil' yoki 'Yashil' yoki 'YASHIL' bo'lsa ekranda 'Men ham yashil rangni yaxshi ko'raman deb chiqaring' , aks holda 'Men [rangni] yoqtirmayman, menga yashil yoqadi deb chiqaring!

// let color = Number(prompt("sevimli rangizni kiriting"))
// color = color.toLowerCase()

// if (color == "yashil") {
//     console.log("menga ham yashil rang juda yoqadi")
// }if (color == "qizil") {
//     console.log("menga xam qizil rangi judayam yoqadi")
// }else {
//     console.log(`menga ${color} rangi yoqmaydi menga yashil rangi yoqadi`)
// }if (color == Number) {
//     console.log("xatolik mavjud")
// }
// else if (color == "") {
//     console.log("xatolik bor")
// }



//oltita raqamni eng kichigini topish

// let number1 = Number(prompt("birinchi son"))
// let number2 = Number(prompt("ikkinchi son"))
// let number3 = Number(prompt("uchinchi son"))
// let number4 = Number(prompt("tortingchi son"))
// let number5 = Number(prompt("beshinchi son"))
// let number6 = Number(prompt("oltinchi son"))
// console.log("number1", number1);
// console.log("number2", number2);
// console.log("number3", number3);
// console.log("number4", number4);
// console.log("number5", number5);
// console.log("number6", number6)










// let number1 = prompt("birimchi sonni kiriting").trim()
// let number2 = prompt("ikkinchi son").trim()
// let number3 = prompt("uchinchis son").trim()
// let number4 = prompt("tortincho son").trim()
// let number5 = prompt("beshinchi son").trim()
// let number6 = prompt("oltinchi son").trim()
// console.log("number1", number1)
// console.log("number2", number2)
// console.log("number3", number3)
// console.log("number4", number4)
// console.log("number5", number5)
// console.log("number6", number6)
// if (number1 && number2 && number3 && number4 && number5 && number6.length > 0) {
//     const num1 = Number(number1 && number2 && number3 && number4 && number5 && number6)
//     if (isNaN(num1)) {
//         console.log("raqam kiritmadingiz")
//     }else {
//         if (number1 <= number2 && number1 <= number3 && number1 <= number4 && number1 <= number5 && number1 <= number6) {
//             console.log(number1)
//         } else if (number2 <= number1 && number2 <= number3 && number2 <= number4 && number2 <= number5 && number3 <= number6) {
//             console.log(number2)
//         } else if (number3 <= number1 && number3 <= number2 && number3 <= number4 && number3 <= number5 && number3 <= number6) {
//             console.log(number3)
//         } else if (number4 <= number1 && number4 <= number2 && number4 <= number3 && number4 <= number5 && number4 <= number6) {
//             console.log(number4)
//         } else if (number5 <= number1 && number5 <= number2 && number5 <= number3 && number5 <= number4 && number5 <= number6) {
//             console.log(number5)
//         } else if (number6 <= number1 && number6 <= number2 && number6 <= number3 && number6 <= number4 && number6 <= number5) {
//             console.log(number6)
//         }
//     }
// }else {
//     console.log("raqam kiritmadingiz");
// }















// biz kiritgan qiymatlar orasida neshtasidir raqam bolsa osha raqamlar ortasida taqqoslash bolishi kerakak qaysilaridir  xarf ili belgi bosa osha xarfli console.log()ga chqioshi kerak


// if (numTrim.length > 0) {
//     let y = Number(numTrim)
//     if (isNaN(y)){
//         console.log("raqam kiritmadingiz")
//     }else if (y % 2 === 0) {
//         console.log("bu son juft son")
//     }else {
//         console.log("bu son toq son")
//     }
// }else {
//     console.log("hech narsa kiritmadingiz")
// }

// if (num % 2 == 0 ) {
//     console.log("bu son juft son")
// }else {
//     console.log("bu son toq son")
//     console.console.log();
// }

// let num1 = (prompt("bironta son yozing")).trim()
// let num2 = (prompt("bironta son yozing")).trim()
// let num3 = (prompt("bironta son yozing")).trim()
// let num4 = (prompt("bironta son yozing")).trim()
// let num5 = (prompt("bironta son yozing")).trim()
// let num6 = (prompt("bironta son yozing")).trim()

// if (num1.length > 0) {
//     console.log(num1)
// } else {
//     console.log("hech narsa kiritmadingiz")
// }
// if (num2.length > 0) {
//     console.log(num2)
// } else {
//     console.log("hech narsa kiritmadingiz")
// } if (num3.length > 0) {
//     console.log(num3)
// } else {
//     console.log("hech narsa kiritmadingiz")
// } if (num4.length > 0) {
//     console.log(num4)
// } else {
//     console.log('hech narsa kiritmadingiz')
// } if (num5 > 0) {
//     console.log(num5)
// } else {
//     console.log("hech narsa kiritmadingiz")
// } if (num6.length > 0) {
//     console.log(num6)
// } else {
//     alert("hech narsa kiritmadingiz")
// }

// let min, max;

// if (num1 <= num2 && num1 <= num3) {
//   min = num1;
//   if (num2 >= num3) {
//     max = num2;
//   } else {
//     max = num3;
//   }
// } else if (num2 <= num1 && num2 <= num3) {
//   min = num2;
//   if (num1 >= num3) {
//     max = num1;
//   } else {
//     max = num3;
//   }
// } else {
//   min = num3;
//   if (num1 >= num2) {
//     max = num1;
//   } else {
//     max = num2;
//   }
// }

// console.log(`eng kichkina son: ${min}`);
// console.log(`eng katta son: ${max}`);

// let yigirma = prompt("iltimos 20 dan kichik son kiriting").trim()
// if (yigirma.length <= 0) {
//     console.log("siz qiymat kiritmadingiz iltimos qiymat kiriting")
// }else if (Number (yigirma > 20)) {
//     console.log("siz kiritgan son 20 dan katta")
// }else if (Number (yigirma < 20)) {
//     console.log("RAXMAT")
// }else if (Number (yigirma == 20)) {
//     console.log("siz kiritgan son 20 ga teng")
// }else  {
//     console.log("iltimos raqam kiritng")
// }





// let num2 = (prompt ("bironta son yozing")).trim()
// let num3 = (prompt ("bironta son yozing")).trim()
// let num4 = (prompt ("bironta son yozing")).trim()
// let num5 = (prompt ("bironta son yozing")).trim()
// let num6 = (prompt ("bironta son yozing")).trim()
// console.log(num2)
// console.lof(num3)
// console.log(num4)
// console.log(num5)
// console.log(num6)

let num1 = 10;
let num2 = 20;
let num3 = 30;

let min, max;

if (num1 <= num2 && num1 <= num3) {
  min = num1;
  if (num2 >= num3) {
    max = num2;
  } else {
    max = num3;
  }
} else if (num2 <= num1 && num2 <= num3) {
  min = num2;
  if (num1 >= num3) {
    max = num1;
  } else {
    max = num3;
  }
} else {
  min = num3;
  if (num1 >= num2) {
    max = num1;
  } else {
    max = num2;
  }
}

console.log(`Smallest value: ${min}`);
console.log(`Largest value: ${max}`);