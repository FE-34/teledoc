const button = document.getElementById('btn');
const emailLog = document.getElementById("email");
const passwordLog = document.getElementById('password');
const userKey = window.localStorage.getItem('dataUserKey');
const objUser = JSON.parse(userKey);
const ingatUser = document.getElementById('ingat');
const dataLog = [];
const emailAkun = [];
const passwordAkun = [];
const namaDepan = [];
const namaBelakang = [];

function myFunction() {
    if (ingatUser.checked == true){
        return true
    } else {
        return false

    }
  }




button.addEventListener('submit', function(evt){
    evt.preventDefault();

    console.log(userKey)
    console.log(typeof userKey)
    console.log('setelah parse')
    console.log(objUser)
    console.log(typeof objUser)

    console.log(objUser[0])

    for (let i = 0; i <= objUser.length - 1; i++){
        if(emailLog.value == objUser[i].Email && passwordLog.value == objUser[i].Password) {
            
            if(myFunction() == true){
                alert('Login Berhasil')
                console.log("Login berhasil")
                dataLog.push({
                    "Nama Depan": objUser[i]['Nama Depan'],
                    "Nama Belakang": objUser[i]['Nama Belakang'],
                    "remember" : true
                })
                let dataLogString = JSON.stringify(dataLog);
                localStorage.setItem('dataLogKey', dataLogString);
                
                window.location.href = " ";
                
                break
            }else{
                console.log("Login berhasil")
                alert('Login Berhasil')
                dataLog.push({
                    "Nama Depan": objUser[i]['Nama Depan'],
                    "Nama Belakang": objUser[i]['Nama Belakang'],
                    "remember" : false
                })
                let dataLogString = JSON.stringify(dataLog);
                localStorage.setItem('dataLogKey', dataLogString);
                
                window.location.href = "";
                break

            }
            
        }if(i == objUser.length - 1){
            alert("Incorrect email or password.")
            location.reload()


        }else{

        }
    }
});

