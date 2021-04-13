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
