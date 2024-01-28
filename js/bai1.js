/**
 * Input
 * diemChuan
 * khuVuc, doiTuong, diem1, diem2, diem3, tong
 *
 * Process
 *  tong = khuVuc + doiTuong + diem1 + diem2 + diem3
 *
 * Output
 *  ketQua: đậu rớt
 */

function bai1() {
    let diemChuan = Number(document.getElementById("inputDiemChuan").value);
    let khuVuc = Number(document.getElementById("inputKhuVuc").value);
    let doiTuong = Number(document.getElementById("inputDoiTuong").value);
    let diem1 = Number(document.getElementById("InputDiem1").value);
    let diem2 = Number(document.getElementById("InputDiem2").value);
    let diem3 = Number(document.getElementById("InputDiem3").value);
    let ketQua = "";
    let tong = khuVuc + doiTuong + diem1 + diem2 + diem3;

    if (tong >= diemChuan) {
        ketQua = "Thí sinh đã đậu";
    } else {
        ketQua = "Thí xin đã rớt";
    }

    document.getElementById(
        "textChange__bai1"
    ).innerHTML = `Kết quả: <br> Tổng điểm: ${tong} <br> ${ketQua}`;
}

document.getElementById("btn__bai1").onclick = bai1;
