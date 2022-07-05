let searchBook = () =>{
    let searchField = document.getElementById('search-field');
    let searchText = searchField.value;
    // console.log(searchField.value)
    searchField.value = "";
    if(searchText ==""){
        let error = document.getElementById('error');
            error.innerHTML = "BOOK NAME MUST NOT BE EMPTY!!";
    }
    else{
    let url = `https://www.googleapis.com/books/v1/volumes?q=${searchText}`;
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.items))
    }
}
    let displaySearchResult = (items) => {
    // console.log(items);
    let searchResult = document.getElementById('search-result');
        searchResult.textContent = "";
        if (items==null){
            let error = document.getElementById('error');
            error.innerHTML = "Data Not Found!!";
        }
        items.forEach(item =>{
            console.log(item);

            let div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card">
                <img src="${item.volumeInfo.imageLinks.smallThumbnail}" class="card-img-top" alt="Book Image">
                <div class="card-body">
                <h2 class="card-title text-warning">${item.volumeInfo.title}</h2>
                <h4 class="card-authors">${item.volumeInfo.subtitle}</h4>
                <h5 class="card-authors text-info">${item.volumeInfo.authors}</h5>
                </div>
          </div>
            `

            searchResult.appendChild(div);
        })
    }
    