function foo(x) {
    let bar = x * x;
    return bar;
}

let foobar = foo(10);
console.log(foobar);

function print1(messade){
    console.log(`${messade}라고 말했습니다`);
}

print1("안녕하세요");

function print(name="무명", count="0"){
    console.log(`${name} 이/가 ${count}개 있습니다`);
}

print("사과", 10);
print("사과");
print();

function tneTines(foo) {
    for(let i = 0; i < 10; i++){
        foo();
    }
}

tneTines( function (){
    console.log("함수 호출");
});

let inputA = '51'
let inputB = '51.254'
let inputC = '512 A'

console.log(parseInt(inputA));
console.log(parseInt(inputB));
console.log(parseFloat(inputB));
console.log(parseInt(inputC));

console.log(Number(inputA));
console.log(Number(inputB));
console.log(Number(inputC));

setTimeout(() => {
    console.log("1초 경과");
}, 1000)

setInterval(() => {
    let i=1;
    console.log("1초 경과");
}, 1000)