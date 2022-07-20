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


// filter
const filterThis = [2, 4, 3, 6, 8, 9];

const filter = (arr, fn) => {
    const filteredArr = [];
    for (let elem of arr) {
        if (fn(elem)) filteredArr.push(elem);
    }
    return filteredArr;
};

console.log(filter(filterThis, (elem) => elem % 3 == 0));

// some
const someOfThis = ['Java', 'JavaScript', 'Python'];

const some = (arr, fn) => {
    for (let elem of arr) {
        if (fn(elem)) return true;
    }
    return false;
};

console.log(some(someOfThis, (elem) => elem === "JavaS"));


// map
const mapMe = [1000, 800, 2400, 500];

const map = (arr, fn) => {
    const mappedArr = [];
    for (let elem of arr) {
        mappedArr.push(fn(elem));
    }  
    return mappedArr;
};

console.log(map(mapMe, (elem) => elem + 200));