const dropdown1 = document.querySelector('.dropdown1');
const sub1 = document.querySelector('.sub1');
const sub2 = document.querySelector('.sub2');
const sub3 = document.querySelector('.sub3');

dropdown1.onmouseover=()=>{
    sub1.style.width = '500px';
    sub2.style.width = '500px';
    sub3.style.width = '500px';
};
