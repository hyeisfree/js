//Note!
//variable, rw(read, write), 메모리에 읽기, 쓰기 가능.
//const는 읽기만 가능함. 다시 다른 값으로 쓰는 것 불가능.
// -> 변수의 값이 바껴야할 이유가 없다면, const 키워드 사용.

//variable type
//primitive, value(값) 자체가 메모리에 저장됨.
//object, object를 가리키는 레퍼런스가 메모리에 저장됨.
//const hye를 선언하고 object를 할당하게 되면, hye가 가리키는 값, na가 있음.na는 오브젝트를 가리키고 있는 곳.
//na를 통해서 실제 메모리에 담겨있는 값을 가리키게 됨.

//Immutable data types(변경 불가능한): primitive types, frozen objects
//Muatble data types(변경 가능한): all objects by default are mutable in js
