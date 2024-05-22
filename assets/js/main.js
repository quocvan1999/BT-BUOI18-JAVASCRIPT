import { addArr, resetInput, tinhTongSoDuongChuoi } from './method/method.js';

let chuoiSo = [];
let btnThemSo = document.querySelector('#btnThemSo');
let btnResetChuoi = document.querySelector('#btnResetChuoi');
let soN = document.querySelector('#soN');
let showChuoiSo = document.querySelector('#showChuoiSo');

let btnTinhTong = document.querySelector('#btnTinhTong');
let kqTinhTong = document.querySelector('#kqTinhTong');

btnThemSo.addEventListener('click', () => {
    let number = Number(soN.value)

    addArr(chuoiSo, number);
    showChuoiSo.innerHTML = chuoiSo;
    resetInput(soN);
});

btnResetChuoi.addEventListener('click', () => {
    chuoiSo = [];
    showChuoiSo.innerHTML = chuoiSo;
});

btnTinhTong.addEventListener('click', () => {
    let ketQua = tinhTongSoDuongChuoi(chuoiSo);

    kqTinhTong.innerHTML = `Tổng số dương: ${ketQua}`;
});
