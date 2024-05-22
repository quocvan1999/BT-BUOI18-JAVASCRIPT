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

export function demSoDuongTrongChuoi(arr) {
    let dem = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            dem++;
        }
    }
    return dem;
}