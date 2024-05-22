import { addArr, resetInput, tinhTongSoDuongChuoi, demSoDuongTrongChuoi, timSoNhoNhatTrongChuoi, timSoDuongNhoNhatTrongChuoi, timSoChanCuoiCungTrongChuoi, doiViTriTrongChuoi, sapXepChuoiTangDan } from './method/method.js';

let chuoiSo = [];
let btnThemSo = document.querySelector('#btnThemSo');
let btnResetChuoi = document.querySelector('#btnResetChuoi');
let soN = document.querySelector('#soN');
let showChuoiSo = document.querySelector('#showChuoiSo');

let btnTinhTong = document.querySelector('#btnTinhTong');
let kqTinhTong = document.querySelector('#kqTinhTong');

let btnDemSoDuong = document.querySelector('#btnDemSoDuong');
let kqDemSoDuong = document.querySelector('#kqDemSoDuong');

let btnTimSoNhoNhat = document.querySelector('#btnTimSoNhoNhat');
let kqTimSoNhoNhat = document.querySelector('#kqTimSoNhoNhat');

let btnTimSoDuongNhoNhat = document.querySelector('#btnTimSoDuongNhoNhat');
let kqTimSoDuongNhoNhat = document.querySelector('#kqTimSoDuongNhoNhat');

let btnTimSoChanCuoiCung = document.querySelector('#btnTimSoChanCuoiCung');
let kqTimSoChanCuoiCung = document.querySelector('#kqTimSoChanCuoiCung');

let viTriSo1 = document.querySelector('#viTriSo1');
let viTriSo2 = document.querySelector('#viTriSo2');
let btnDoiCho = document.querySelector('#btnDoiCho');
let kqDoiCho = document.querySelector('#kqDoiCho');

let btnSapXepTangDan = document.querySelector('#btnSapXepTangDan');
let kqSapXepTangDan = document.querySelector('#kqSapXepTangDan');

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

// BT3
btnTimSoNhoNhat.addEventListener('click', () => {
    let ketQua = timSoNhoNhatTrongChuoi(chuoiSo);

    kqTimSoNhoNhat.innerHTML = `Số nhỏ nhất: ${ketQua}`;
});

// BT4
btnTimSoDuongNhoNhat.addEventListener('click', () => {
    let ketQua = timSoDuongNhoNhatTrongChuoi(chuoiSo);

    kqTimSoDuongNhoNhat.innerHTML = `Số dương nhỏ nhất: ${ketQua}`;
});

// BT5
btnTimSoChanCuoiCung.addEventListener('click', () => {
    let ketQua = timSoChanCuoiCungTrongChuoi(chuoiSo);

    kqTimSoChanCuoiCung.innerHTML = `Số chẵn cuối cùng: ${ketQua}`;
});

// BT6
btnDoiCho.addEventListener("click", () => {
    let viTri1 = Number(viTriSo1.value);
    let viTri2 = Number(viTriSo2.value);

    let newArr = doiViTriTrongChuoi(chuoiSo, viTri1, viTri2);

    kqDoiCho.innerHTML = `Chuỗi sau khi đổi vị trí: ${newArr}`;
});

// BT7
btnSapXepTangDan.addEventListener('click', () => {
    let newArr = sapXepChuoiTangDan(chuoiSo);

    kqSapXepTangDan.innerHTML = `Chuỗi sau khi sắp xếp tăng dần: ${newArr}`;
});
