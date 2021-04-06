// let foo = [10, 20, 30, 40, 50];

// for (let i in foo) {
//     console.log(`${i}번쨰 요소는 ${foo[i]}이다.`)
// }
// //bar = foo [0]; 인덱스 0번을 bar에 저장함
// for (let item of foo) {
//     console.log(item)
// }

//직각 삼각형
let output = "";

 for (let i = 0; i < 10; i++){
     for (let j = 0; j < i+1; j++) {
        output += "*";
     }
     output += "\n";
 }
 console.log(output);



// 이등변 삼각형
 let starr = '';
 for (let i = 0; i < 5; i++) {
     for (let j = 4; j > i; j--) {
         starr += ' ';
     }
     for (let k = 0; k <= (i * 2); k++) {
         starr += '*';
     }
     starr += '\n';
 }
 console.log(starr);



//마름모
let star = '';
for (let i = 0; i < 9; i++) {
    if (i < 5) {
        for (let j = 4; j > i; j--) {
            star += ' ';
        }
        for (let k = 0; k <= i * 2; k++) {
            star += '*';
        }
        star += '\n';
    } else {
        for (let j = 4; j < i; j++) {
            star += ' ';
        }
        for (let k = 17; k > i * 2; k--) {
            star += '*';
        }
        star += '\n';
    }
}
console.log(star);


