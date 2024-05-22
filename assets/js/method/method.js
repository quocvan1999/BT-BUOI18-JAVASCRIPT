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