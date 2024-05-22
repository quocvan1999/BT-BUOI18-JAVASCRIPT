/**
 * Hàm thêm dữ liệu vào một mảng
 * @param {*} arr mảng cần thêm dữ liệu
 * @param {*} data Dữ liệu cần thêm vào mảng
 * @returns Trả về một mảng đã thêm dữ liệu
 */
export function addArr(arr, data) {
    return arr.push(data);
}

/**
 * Hàm reset ô input về rỗng
 * @param {*} input input cần reset
 */
export function resetInput(input) {
    input.value = '';
}

export function tinhTongSoDuongChuoi(arr) {
    let tong = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            tong += arr[i];
        }
    }
    return tong > 0 ? tong : 0;
}

/**
 * Hàm đếm số lượng dố dương trong mảng
 * @param {*} arr mảng số
 * @returns Trả về tổng số lượng số dương có trong một mảng
 */
export function demSoDuongTrongChuoi(arr) {
    let dem = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            dem++;
        }
    }
    return dem;
}

/**
 * Hàm tìm và trả về số nhỏ nhất trong mảng bao gồm số âm
 * @param {*} arr mảng số
 * @returns Trả về số nhỏ nhất trong mảng
 */
export function timSoNhoNhatTrongChuoi(arr) {
    let minNumber;

    for (let i = 0; i < arr.length; i++) {
        if (minNumber === undefined) {
            minNumber = arr[i];
        } else if (arr[i] < minNumber) {
            minNumber = arr[i];
        } else {
            continue;
        }
    }

    return minNumber;
}

/**
 * Hàm tìm và trả về số nhỏ nhất là số dương có trong mảng
 * @param {*} arr mảng số
 * @returns Trả về số nhỏ nhất là số dương
 */
export function timSoDuongNhoNhatTrongChuoi(arr) {
    let minNumber;

    for (let i = 0; i < arr.length; i++) {
        if (minNumber === undefined) {
            minNumber = arr[i];
        } else if (arr[i] > 0 && arr[i] < minNumber) {
            minNumber = arr[i];
        } else {
            continue;
        }
    }

    return minNumber;
}

/**
 * Hàm tìm số chẵn nằm ở vị trị cuối cùng trong 1 mảng
 * @param {*} arr mảng số
 * @returns Trả về số chẵn cuối cùng trong 1 mảng
 */
export function timSoChanCuoiCungTrongChuoi(arr) {
    let soChan = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            soChan = arr[i];
        }
    }

    return soChan;
}

/**
 * Hàm đổi vị trí của 2 phần từ trong mảng cho nhau
 * @param {*} arr mảng
 * @param {*} viTri1 index 1
 * @param {*} viTri2 index 2
 * @returns Trả về mảng mới với 2 vị trí đã đổi giá trị cho nhau
 */
export function doiViTriTrongChuoi(arr, viTri1, viTri2) {
    let value1 = arr[viTri1];
    let value2 = arr[viTri2];

    arr[viTri1] = value2;
    arr[viTri2] = value1;

    return arr;
}

/**
 * Hàm sắp xếp một mảng tăng dần
 * @param {*} arr mảng
 * @returns Trả về một mảng mới được sắp xếp tăng dần
 */
export function sapXepChuoiTangDan(arr) {
    arr.sort((a, b) => a - b);
    return arr;
}

/**
 * Hàm tìm số Nguyên tố
 * @param {*} number number
 * @returns Trả về kết quả xem số kiểm tra có phải là số nguyên tố hay không
 */
export function timSoNT(number) {
    let sNT = true;

    if (number < 2) {
        sNT = false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                sNT = false;
                break;
            }
        }
    }

    return sNT;
}

/**
 * Hàm tìm số nguyên tố đầu tiên trong mảng
 * @param {*} arr mảng số
 * @returns Trả về số nguyên tố đầu tiên trong mảng
 */
export function timSoNToDauTienTrongChuoi(arr) {
    let soNT = 0;

    for (let i = 0; i < arr.length; i++) {
        if (timSoNT(arr[i])) {
            soNT = arr[i];
            break;
        }
    }

    return soNT;
}

/**
 * Hàm đếm số lượng số nguyên trong mảng
 * @param {*} arr mảng số
 * @returns Trả về tổng số lượng số nguyên trong mảng
 */
export function timSoNguyen(arr) {
    let dem = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            dem += 1;
        }
    }

    return dem;
}

/**
 * Hàm so sánh số lượng số âm và số dương trong mảng
 * @param {*} arr 
 * @return Trả về 
 */
export function soSanh(arr) {
    let soDuong = 0;
    let soAm = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            soDuong += 1;
        } else {
            soAm += 1;
        }
    }

    return soDuong > soAm ? 'Số dương > số âm' : 'Số âm > số dương';
}

