/**
 * Hàm thêm dữ liệu vào một chuỗi
 * @param {*} arr Chuỗi cần thêm dữ liệu
 * @param {*} data Dữ liệu cần thêm vào chuỗi
 * @returns Trả về một chuỗi đã thêm dữ liệu
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
 * Hàm đếm số lượng dố dương trong chuỗi
 * @param {*} arr chuỗi số
 * @returns Trả về tổng số lượng số dương có trong một chuỗi
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
 * Hàm tìm và trả về số nhỏ nhất trong chuỗi bao gồm số âm
 * @param {*} arr chuỗi số
 * @returns Trả về số nhỏ nhất trong chuỗi
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
 * Hàm tìm và trả về số nhỏ nhất là số dương có trong chuỗi
 * @param {*} arr chuỗi số
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
 * Hàm tìm số chẵn nằm ở vị trị cuối cùng trong 1 chuỗi
 * @param {*} arr chuỗi số
 * @returns Trả về số chẵn cuối cùng trong 1 chuỗi
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
 * @param {*} arr chuỗi
 * @param {*} viTri1 index 1
 * @param {*} viTri2 index 2
 * @returns Trả về chuỗi mới với 2 vị trí đã đổi giá trị cho nhau
 */
export function doiViTriTrongChuoi(arr, viTri1, viTri2) {
    let value1 = arr[viTri1];
    let value2 = arr[viTri2];

    arr[viTri1] = value2;
    arr[viTri2] = value1;

    return arr;
}

/**
 * Hàm sắp xếp một chuỗi tăng dần
 * @param {*} arr chuỗi
 * @returns Trả về một chuỗi mới được sắp xếp tăng dần
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
 * Hàm tìm số nguyên tố đầu tiên trong chuỗi
 * @param {*} arr chuỗi số
 * @returns Trả về số nguyên tố đầu tiên trong chuỗi
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