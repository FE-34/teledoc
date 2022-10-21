const form = document.getElementById('frm')
const namaLengkap = document.getElementById('nama-lengkap')
const email = document.getElementById('email')
const keluhan = document.getElementById('keluhan')
const dataKeluhan = []

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