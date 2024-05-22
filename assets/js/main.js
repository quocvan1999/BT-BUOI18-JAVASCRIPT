import { addArr, resetInput } from './method/method.js';

let chuoiSo = [];
let btnThemSo = document.querySelector('#btnThemSo');
let soN = document.querySelector('#soN');
let showChuoiSo = document.querySelector('#showChuoiSo');

btnThemSo.addEventListener('click', () => {
    let number = Number(soN.value)

    addArr(chuoiSo, number);
    showChuoiSo.innerHTML = chuoiSo;
    resetInput(soN);
});
