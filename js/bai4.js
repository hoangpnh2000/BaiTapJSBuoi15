/**
 * Input
 *  khachHang,ma,kenh
 *
 * Process
 *
 *
 * Output
 *  Ma,tienCap
 *
 *
 *
 */

function tinhTienCap() {
    let khachHang = Number(document.getElementById("inputKhachHang").value);
    let maKH = document.getElementById("inputMaKH").value;
    let kenh = Number(document.getElementById("inputKenh").value);
    let ketNoi = Number(document.getElementById("inputKetNoi").value);
    let total = 0;
    if (khachHang == 0) {
        total = 4.5 + 20.5 + 7.5 * kenh;
    } else if (khachHang == 1) {
        if (ketNoi <= 10) {
            total = 15 + 75 + 50 * kenh;
        } else {
            total = 15 + 75 + 5 * (ketNoi - 10) + 50 * kenh;
        }
    }

    document.getElementById(
        "textChange__bai4"
    ).innerHTML = `Mã khách hàng: ${maKH} <br> Tiền cáp: ${Intl.NumberFormat(
        "us-US"
    ).format(total)} USD`;
}

document.getElementById("btn__bai4").onclick = tinhTienCap;
