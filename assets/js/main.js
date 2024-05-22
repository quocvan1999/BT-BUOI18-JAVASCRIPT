import { addArr, resetInput, tinhTongSoDuongChuoi, demSoDuongTrongChuoi } from './method/method.js';

let chuoiSo = [];
let btnThemSo = document.querySelector('#btnThemSo');
let btnResetChuoi = document.querySelector('#btnResetChuoi');
let soN = document.querySelector('#soN');
let showChuoiSo = document.querySelector('#showChuoiSo');

let btnTinhTong = document.querySelector('#btnTinhTong');
let kqTinhTong = document.querySelector('#kqTinhTong');

let btnDemSoDuong = document.querySelector('#btnDemSoDuong');
let kqDemSoDuong = document.querySelector('#kqDemSoDuong');

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

// BT 1
btnTinhTong.addEventListener('click', () => {
    let ketQua = tinhTongSoDuongChuoi(chuoiSo);

    kqTinhTong.innerHTML = `Tổng số dương: ${ketQua}`;
});

// BT2

btnDemSoDuong.addEventListener('click', () => {
    let ketQua = demSoDuongTrongChuoi(chuoiSo);

    kqDemSoDuong.innerHTML = `Số lượng số dương: ${ketQua}`;
});
