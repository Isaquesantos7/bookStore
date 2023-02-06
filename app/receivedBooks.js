const elementCreateBooks = document.getElementById('livros');
const avaliableBooks = document.getElementById('valor_total_livros_disponiveis');


/*creating book element*/
function receivingBooks(bookList) {
    elementCreateBooks.innerHTML = '';
    avaliableBooks.innerHTML = '';
    
    bookList.forEach( book => {
        //let unavailabilityBooks = consultUnavailabilityOfBooks(book);

        let unavailabilityBooks = book.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';

        elementCreateBooks.innerHTML += `
            <div class="livro">
                
                <img class="${unavailabilityBooks}" src="${book.imagem}" alt="${book.alt}" />
                
                <h2 class="livro__titulo">${book.titulo}</h2>
                
                <p class="livro__descricao">${book.autor}</p>
                <p class="livro__preco" id="preco">${book.preco.toFixed(2)}</p>
                
                <div class="tags">
                 <span class="tag">${book.categoria}</span>
                </div>
            </div>
        `
    });
}

// function consultUnavailabilityOfBooks(book) {
//     if (book.quantidade > 0) {
//         return 'livro__imagens';
//     }
//     else {
//         return 'livro__imagens indisponivel';
//     }
// }