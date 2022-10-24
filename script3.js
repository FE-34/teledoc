const button = document.getElementById('btn');
const chat = document.getElementById('tempat-chat')
const textChat = document.getElementById('chatbox')
const keyDokter = window.localStorage.getItem('keyDokter');
const docData = JSON.parse(keyDokter);
const nama = document.getElementById('prof')
const dataLogin = JSON.parse(localStorage.getItem('dataLoginKey') || [])
const img = document.getElementById('wrap-image')
const namaDepan = document.getElementById('nama-depan')
const fullName = document.getElementById('fullname')

console.log(chat)
console.log(docData)

namaDepan.innerHTML = dataLogin[0]["Nama Depan"]
fullName.innerHTML = dataLogin[0]["Nama Depan"] + " " + dataLogin[0]["Nama Belakang"]

img.innerHTML +=
`
<img src="${docData[0].image}" id="pp" style="width: 5em; height: 3em; border-radius: 30px;">
`
nama.innerHTML +=
`
<li id="namadoc">${docData[0].name}</li>
<li id="sp">${docData[0].spesialis}</li>
`

button.addEventListener('submit', function(evt){
    evt.preventDefault();

    chat.innerHTML +=
    `
    <div class="chat-text-user">
    ${textChat.value}
    </div>
    `
    textChat.value = ''
});

