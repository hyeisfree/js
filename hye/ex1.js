// 함수 선언 -> 어떤 값을 전달 받아올 건지 인자들을 정의하고 나서 코드 블럭을 작성. 선언만 하면 코드 블럭은 실행되지 않음. 선언한 함수를 사용하기 위해서는 함수를 호출해야함,
//함수
function doSomething(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출 -> 함수를 호출하기 위해서는 함수 이름 옆에 괄호를 이용해서 함수에서 (원하는)정의된 인자값들을 전달하면서 호출해야함. 함수 이름 자체는 함수를 가리키는 함수 자체가 됨.
// 괄호를 쓰지 않고 함수 이름만 다른 함수의 인자로 전달하거나 다른 변수에 할당하게 되면, 함수 자체를 가리키게 됨.
doSomething(add);

const addFun = add;
console.log(add); // 함수 자체가 나옴.
addFun(1, 2); //함수를 호출하고 싶다면, 함수 이름에 ()를 이용해서 정의된 인자를 적어주면, 호출 가능함.
