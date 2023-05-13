const a = document.querySelector('.button');

a.addEventListener('click', () => {
    alert("이것은 경고창입니다.");
})

const b = document.querySelector('.button2');

b.addEventListener('click', function bb (event){
    alert('경고창 대박 신나');
})