// tangkap element absensi_form
let absensi_form = document.getElementById('absensi_form');

let root = document.getElementById('root');

// kita akan buat array untuk menampung data absensi
let absensi_data = [];

// tambahkan event listener submit ke element absensi_form
absensi_form.addEventListener('submit', (event) => {
  // mencegah form dari reload page
  event.preventDefault();
  let fullname = event.target.fullname.value;

  //validasi
  if (fullname == '') {
    alert('Silahkan masukkan nama lengkap anda');
    return;
  }
  // ["Achmad", 123, false, {name : "achmad"}]
  // push data ke dalam array absensi data
  absensi_data.push({
    nama_lengkap: fullname,
    waktu: new Date().toLocaleTimeString(),
    tanggal: new Date().toLocaleDateString(),
  });

  //reset input field
  event.target.fullname.value = '';
  renderToHtml();
});

// function untuk render data array ke div root
function renderToHtml() {
  // reset element div root
  root.innerHTML = '';

  absensi_data.forEach((e, i) => {
    root.innerHTML += `
    <div class="card" draggable="true" ondragend="handleDelete(${i})">
     <span> ${i + 1}. &nbsp; ${e.nama_lengkap} </span>
     <span> ${e.waktu} | ${e.tanggal} </span>
    </div>`;
  });
}
//deletefunction
function handleDelete(index) {
  // delete 1 data dari array
  absensi_data.splice(index, 1);
  // render kembali data dalam array ke html
  renderToHtml();
}
