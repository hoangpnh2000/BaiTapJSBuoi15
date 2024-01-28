/**
 * Input
 * ten, thuNhap, soNguoi
 *
 * Process
 *  chiuThue
 *
 * Output
 *  ketQua
 *
 *
 */

function tinhThue() {
    let ten = document.getElementById("inputHoTen").value;
    let thuNhap = Number(document.getElementById("inputThuNhap").value);
    let soNguoi = Number(document.getElementById("inputSoNguoi").value);
    let chiuThue = 0;
    let ketQua = 0;
    chiuThue = thuNhap - 4000000 - soNguoi * 1600000;

    if (thuNhap <= 60000000) {
        ketQua = chiuThue * 0.05;
    } else if (thuNhap > 60000000 && thuNhap <= 120000000) {
        ketQua = chiuThue * 0.1;
    } else if (thuNhap > 120000000 && thuNhap <= 210000000) {
        ketQua = chiuThue * 0.15;
    } else if (thuNhap > 210000000 && thuNhap <= 384000000) {
        ketQua = chiuThue * 0.2;
    } else if (thuNhap > 384000000 && thuNhap <= 624000000) {
        ketQua = chiuThue * 0.25;
    } else if (thuNhap > 624000000 && thuNhap <= 960000000) {
        ketQua = chiuThue * 0.3;
    } else if (thuNhap > 960000000) {
        ketQua = chiuThue * 0.35;
    }

    document.getElementById(
        "textChange__bai3"
    ).innerHTML = `Tên: ${ten} <br> Thuế thu nhập cá nhân: ${Intl.NumberFormat(
        "vn-VN"
    ).format(ketQua)} VND`;
}

document.getElementById("btn__bai3").onclick = tinhThue;
