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
//     let numInt = Number(numTrim) /// "4","55550", "dfkashsdjk", "fdsauh2564", ",,,....p[l413892720y"  fdasfdas
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



//6 ta raqamni eng kichigini yozish

let number1 = Number(prompt("birinchi son"))
let number2 = Number(prompt("ikkinchi son"))
let number3 = Number(prompt("uchinchi son"))
let number4 = Number(prompt("tortingchi son"))
let number5 = Number(prompt("beshinchi son"))
let number6 = Number(prompt("oltinchi son"))
console.log("number1", number1);
console.log("number2", number2);
console.log("number3", number3);
console.log("number4", number4);
console.log("number5", number5);
console.log("number6", number6);
if (number1 <= number2 && number1 <= number3) {
    console.log(number1)
}

else if(number2 <= number3 && number2 <= number1) {
    console.log(number2)
}

else {
    console.log(number3)
}

if (number4 <= number5 && number4 <= number6) {
    console.log(number4)
}

else if (number5 <= number6 && number5 <= number4) {
    console.log(number5)
}

else {
    console.log(number6)
}


// 6 ta raqamnini eng kattasini yozish

let num1 = Number(prompt("birinchi son"))
let num2 = Number(prompt("ikkinchi son"))
let num3 = Number(prompt("uchinchi son"))
console.log("bu eng kattasini topb beardi")
console.log("num1",num1)
console.log("num2", num2)
console.log("num3", num3)
if (num1 >= num2 && num1 >= num3) {
    console.log(num1)
}
else if (num2 >= num3 && num2 >= num1) {
    console.log(num2)
}

else {
    console.log(num3)
}




// let num4 = Number(prompt("biron son kiriting"))
// let num5 = Number(prompt("biron son kiriting"))
// let num6 = Number(prompt("biron son kiriting"))

// console.log("num4", num4);
// console.log("num5", num5);
// console.log("num6", num6);