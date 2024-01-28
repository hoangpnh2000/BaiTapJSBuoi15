/**
 * input
 * ten,kw
 *
 * process
 *
 *
 * output
 * tienDien
 */
function tinhTienDien() {
    let ten = document.getElementById("inputTen").value;
    let kw = Number(document.getElementById("inputSoLuong").value);
    let tienDien = 0;

    if (kw <= 50) {
        tienDien = kw * 500;
    } else if (kw <= 100) {
        tienDien = 50 * 500 + (kw - 50) * 650;
    } else if (kw <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (kw - 100) * 850;
    } else if (kw <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
    } else {
        tienDien =
            50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
    }

    document.getElementById(
        "textChange__bai2"
    ).innerHTML = `Tên: ${ten} <br> Tiền điện: ${Intl.NumberFormat(
        "vn-VN"
    ).format(tienDien)} VND`;
}

document.getElementById("btn__bai2").onclick = tinhTienDien;
