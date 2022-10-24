const form = document.getElementById('frm')
const namaLengkap = document.getElementById('nama-lengkap')
const email = document.getElementById('email')
const keluhan = document.getElementById('keluhan')
const dataKeluhan = []
const dataLogin = JSON.parse(localStorage.getItem('dataLoginKey') || [])
const namaDepan = document.getElementById('nama-depan')
const fullName = document.getElementById('fullname')

namaDepan.innerHTML = dataLogin[0]["Nama Depan"]
fullName.innerHTML = dataLogin[0]["Nama Depan"] + " " + dataLogin[0]["Nama Belakang"]

form.addEventListener("submit", function(event){
    event.preventDefault()

    dataKeluhan.push({
        "Nama Lengkap": namaLengkap.value,
        Email: email.value,
        Keluhan: keluhan.value
    })

    namaLengkap.value = ''
    email.value = ''
    keluhan.value = ''

    alert('Keluhan Sudah Dikirim, Terima Kasih Atas Keluhan Anda')

    let dataKeluhanString = JSON.stringify(dataKeluhan)
    localStorage.setItem('keluhanKey', dataKeluhanString)
})