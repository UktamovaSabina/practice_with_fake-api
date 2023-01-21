const list = document.querySelector("#list");

(function(){
    fetch("https://fakestoreapi.com/products")
        .then(response =>response.json())
        .then(data => renderData(data))
        .catch(err => console.err(err))
}())

function renderData(data) {

    list.innerHTML = "";
    data.forEach(obj => {

        const $li = document.createElement("li");
        list.appendChild($li);
        $li.classList.add("list__item")
        $li.innerHTML = `<h2 class="item-heading">${obj.title}</h2>
        <h3 class="item-price">Price: ${obj.price}</h3>
        <p class="item-description">${obj.description}</p>
        <h3 class="item-category">Category: ${obj.category}</h3>
        <div class="item-pic"><img src="${obj.image}" width="200"></div>`;
        console.log($li);
    })
}

list.addEventListener("click", (e) =>{
    if (!e.target.classList.contains("list")) {
        confirm("Do you like it?  ;) ")
    }
})