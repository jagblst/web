let out = document.querySelector('.out');
console.log(out);

// for (let i = 0; i < 19; i++){
//     out.innerHTML += `${i}_`; 
//     }

// for (let i = 0; i < 39; i += 2){
// out.innerHTML += `${i}_<br>`; 
// }

// for (let i = 60; i > 39; i--){
//     out.innerHTML += `${i}*`; 
//     }

// for (let i = 0; i < 3; i++) {
//     for (let i = 0; i < 5; i++) {
//         out.innerHTML += `*`;
//     }
//     out.innerHTML += `_`;
// }

// for (let i = 1; i < 4; i++) {
//     out.innerHTML += `${i}<br>`;
//     for (let i = 0; i < 3; i++) {
//         out.innerHTML += `*_`;
//     }
//     out.innerHTML += `<br>`;
// }

// for (let i = 1; i < 5; i++) {
//     for (let i = 0; i < 3; i++) {
//     out.innerHTML += `*_`;
//     }
//     out.innerHTML += `<br>`;
// }

// for (let i = 1; i < 6; i++) {
//     for (let j = 6; j > i; j--) {
//     out.innerHTML += `* `;
//     }
//     out.innerHTML += `<br>`;
// }

// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//     out.innerHTML += `${i}*${j} = ${j * i}<br>`;
//     }
//     out.innerHTML += `<br>`;
// }

// let i = 0;
// while ( i < 50 ) {
//     i++;
//     out.innerHTML += `${i}_`;
// }

// let i = 0;
// while ( i < 50 ) {
//     i += 2;
//     out.innerHTML += `${i}_`;
// }

let i = 50;
while ( i > 1 ) {
    i--;
    out.innerHTML += `${i} `;
}