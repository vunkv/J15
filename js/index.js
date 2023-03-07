// BÀI 1
function tinhDiem() {
    // Lấy giá trị từ nội dung input
    const diemChuan = document.getElementById("diemChuan").value;
    const khuVuc = document.getElementById("khuVuc").value;
    const doiTuong = document.getElementById("doiTuong").value;
    const diemMon1 = document.getElementById("diemMon1").value;
    const diemMon2 = document.getElementById("diemMon2").value;
    const diemMon3 = document.getElementById("diemMon3").value;

    // Tính điểm ưu tiên
    const diemUuTien = parseFloat(khuVuc) + parseFloat(doiTuong);

    // Tính tổng điểm 3 môn
    const tongDiem = parseFloat(diemMon1) + parseFloat(diemMon2) + parseFloat(diemMon3) + diemUuTien;

    // Tính điểm
    if (tongDiem >= parseFloat(diemChuan)) {
        if (diemMon1 === "0" || diemMon2 === "0" || diemMon3 === "0") {
            const diemTongKet = tongDiem.toFixed(1);
            document.getElementById("ketQua").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
            document.getElementById("ketQua").classList.add("alert-danger");
            document.getElementById("ketQua").classList.remove("alert-success");
        }
        else {
            document.getElementById("ketQua").innerHTML = `Bạn đã đậu. Tổng điểm: ${tongDiem.toFixed(1)}`;
            document.getElementById("ketQua").classList.add("alert-success");
            document.getElementById("ketQua").classList.remove("alert-danger");
        }
    } else {
        document.getElementById("ketQua").innerHTML = `Bạn đã rớt. Tổng điểm: ${tongDiem.toFixed(1)}`;
        document.getElementById("ketQua").classList.add("alert-danger");
        document.getElementById("ketQua").classList.remove("alert-success");
    }
}

document.getElementById("diemTongKet").addEventListener("click", tinhDiem);

// BÀI 2
function tienDien() {
    // Lấy giá trị từ nội dung input
    var name = document.getElementById("inputName").value;
    var kw = parseFloat(document.getElementById("inputKW").value);

    //Quy tắc
    var rate1 = 500;  // 50kw đầu: 500đ/kw
    var rate2 = 650;  // 50kw kế: 650đ/kw
    var rate3 = 850;  // 100kw kế: 850đ/kw
    var rate4 = 1100; // 150kw kế: 1100đ/kw
    var rate5 = 1300; // Còn lại: 1300đ/kw

    var bill = 0;
    if (kw <= 50) {
        bill = kw * rate1;
    } else if (kw <= 100) {
        bill = 50 * rate1 + (kw - 50) * rate2;
    } else if (kw <= 200) {
        bill = 50 * rate1 + 50 * rate2 + (kw - 100) * rate3;
    } else if (kw <= 350) {
        bill = 50 * rate1 + 50 * rate2 + 100 * rate3 + (kw - 200) * rate4;
    } else {
        bill = 50 * rate1 + 50 * rate2 + 100 * rate3 + 150 * rate4 + (kw - 350) * rate5;
    }

    // Tính tiền điện
    var formattedBill = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(bill);
    var result = "Họ tên: " + name + "; Tiền điện: " + formattedBill;
    document.getElementById("txtElecBill").textContent = result;
}

document.getElementById("btnElecBill").addEventListener("click", tienDien);

// BÀI 3
function tinhThue() {
    // Lấy giá trị từ nội dung input
    var name = document.getElementById("inputName2").value;
    var salary = parseFloat(document.getElementById("inputSalary").value);
    var dependents = parseFloat(document.getElementById("inputUser").value);

    // Thu nhập chịu thuế
    var taxableIncome = salary - 4000000 - (dependents * 1600000);

    // Thuế suất
    var taxRate = 0;
    if (taxableIncome <= 0) {
        taxRate = 0;
    } else if (taxableIncome <= 60000000) {
        taxRate = 0.05;
    } else if (taxableIncome <= 120000000) {
        taxRate = 0.1;
    } else if (taxableIncome <= 210000000) {
        taxRate = 0.15;
    } else if (taxableIncome <= 384000000) {
        taxRate = 0.2;
    } else if (taxableIncome <= 624000000) {
        taxRate = 0.25;
    } else if (taxableIncome <= 960000000) {
        taxRate = 0.3;
    } else {
        taxRate = 0.35;
    }

    // Số tiền thuế TNCN
    var tax = taxableIncome * taxRate;
    var result = "Họ tên: " + name + "; Tiền thuế thu nhập cá nhân: " + tax.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    document.getElementById("txtTax").textContent = result;
}

document.getElementById("btnTax").addEventListener("click", tinhThue);

// BÀI 4
function tinhTienCap() {
    // Lấy giá trị từ form
    var name = document.getElementById("selCustomer").value;
    var id = document.getElementById("inputID").value;
    var connectNumber = document.getElementById("inputConnect").value;
    var chanelNumber = document.getElementById("inputChanel").value;

    // Tiền cáp
    var result = 0;
    if (name === "user") {
        result = 4.5 + 20.5 + chanelNumber * 7.5;
    } else if (name === "company") {
        var baseFee = 75 + (connectNumber - 10) * 5;
        if (connectNumber <= 10) {
            baseFee = 75;
        }
        result = 15 + baseFee + chanelNumber * 50;
    }

    document.getElementById("txtNet").innerHTML = "Mã khách hàng: " + id + "; Tiền cáp: $" + result.toFixed(2);
}

document.getElementById("btnNet").addEventListener("click", tinhTienCap);


// Disabled doanh nghiệp
function disableInput() {
    var name = document.getElementById("selCustomer").value;
    var connectInput = document.getElementById("inputConnect");
    if (name === "user") {
        connectInput.style.display = "none";
    } else {
        connectInput.style.display = "block";
    }
}