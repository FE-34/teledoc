const listCardTemplate = document.querySelector("[list-dokter-template]")
const listCardContainer = document.querySelector("[list-dokter-container]")
const searchInput = document.querySelector("[data-search]")
const keyID = document.getElementById("card")
let it = 0;

let lists = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    lists.forEach(list => {
        const isVisible = list.name.toLowerCase().includes(value) || list.spesialis.toLowerCase().includes(value)
        list.element.classList.toggle("hide", !isVisible)
    })
})

fetch("https://6354e3f4da523ceadcf5c060.mockapi.io/lists")
    .then(res => res.json())
    .then(data => {
        lists = data.map(list => {
            const card = listCardTemplate.content.cloneNode(true).children[0]
            const img = card.querySelector("[data-img]")
            const title = card.querySelector("[data-title]")
            const text = card.querySelector("[data-text]")
            const cardText = card.querySelector("[data-cardText]")
            img.textContent = list.image
            title.textContent = list.name
            text.textContent = list.spesialis
            cardText.textContent = list.tahun
            listCardContainer.append(card)
            return { name: list.name, spesialis: list.spesialis, element: card, image: list.image}
            
            
        })
        console.log(lists.length)
        console.log(keyID)
        
        
        lists.index = it;
        console.log(lists)
        console.log(typeof lists)
        let listString = JSON.stringify(lists);
        localStorage.setItem('keyDokter', listString);
        
    })

