// Ambil Nama
let nama_awal = prompt("Masukkan Nama Anda: ");

while (nama_awal == "" || nama_awal.length < 3) {
    if (nama_awal.length < 3) {
        alert("Nama harus diisi minimal 3 karakter!");
    }
    if (nama_awal == "") {
        alert("Nama tidak boleh kosong!");
    }
    nama_awal = prompt("Masukkan Nama Anda: ");
}
nama_awal = nama_awal.charAt(0).toUpperCase() + nama_awal.slice(1).toLowerCase();
document.getElementById("sambutan").innerText = nama_awal;


// Ambil elemen tombol dan menu dari navbar
const tombol = document.querySelector('.tombol');
const menu = document.querySelector('.menu');

// tombol hamburger
tombol.addEventListener('click', function () {
    menu.classList.toggle('aktif');
});


// message form
const Vtanggal = document.getElementById('value-tanggal');
const Vnama = document.getElementById('value-nama');
const Vtanggal_lahir = document.getElementById('value-tanggal-lahir');
const Vjenis_kelamin = document.getElementById('value-jenis-kelamin');
const Vpesan = document.getElementById('value-pesan');
let toogle_submit = false;

const box_message = document.querySelector('.box-message');

document.getElementById("form-Message").addEventListener("submit", function (event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value.trim();
    let tanggal = document.getElementById("tanggal_lahir").value;
    let jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked');
    let pesan = document.getElementById("pesan").value.trim();

    // Validasi Nama
    if (nama.length < 3) {
        alert("Nama harus diisi minimal 3 karakter!");
        return;
    }

    // Validasi Tanggal
    if (!tanggal) {
        alert("Tanggal lahir harus diisi!");
        return;
    }

    // Validasi Jenis Kelamin
    if (!jenisKelamin) {
        alert("Pilih salah satu jenis kelamin!");
        return;
    }

    // Validasi Pesan
    if (pesan.length < 5) {
        alert("Pesan harus diisi minimal 5 karakter!");
        return;
    }

    // waktu sekarang
    function updateTime() {
        Vtanggal.textContent = new Date().toString().split("GMT")[0].trim();
    }
    updateTime();

    // Jika semua valid, tampilkan data
    Vnama.textContent = nama;
    Vtanggal_lahir.textContent = tanggal;
    Vjenis_kelamin.textContent = jenisKelamin.value;
    Vpesan.textContent = pesan;

    if (!toogle_submit) {
        box_message.classList.add('aktif');
        toogle_submit = true;
    }
});