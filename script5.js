const form = document.getElementById('frm')
const namaDepan = document.getElementById('namadepan')
const namaBelakang = document.getElementById('namabelakang')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const validasiHuruf = /^[a-zA-Z ]+$/;
const dataUser = []

form.addEventListener('submit', function(event){
    event.preventDefault()
    
    if(namaDepan.value.match(validasiHuruf) && namaBelakang.value.match(validasiHuruf)){
        if(password.value.length >= 6){
            if(confirmPassword.value == password.value){
                dataUser.push({
                    "Nama Depan": namaDepan.value,
                    "Nama Belakang": namaBelakang.value,
                    Email: email.value,
                    Password: password.value
                })
                console.log(dataUser);

                let dataUserString = JSON.stringify(dataUser);
                localStorage.setItem('dataUserKey', dataUserString);

                alert("Terima kasih sudah mendaftar, silahkan login")
            }else{
                alert("Password dan Konfirmasi Password tidak sesuai")
            }
        }else{
            alert("Format password tidak sesuai")
        }
    }else{
        alert("Format nama wajib huruf!")
    }
})