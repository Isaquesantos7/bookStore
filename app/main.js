let books = [];

const endPointApiBooks = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'; 


searchBooksInApi();

/* search api */
async function searchBooksInApi() {
    try {
        const req = await fetch(endPointApiBooks);

        books = await req.json();

        let discountBooks = applyDiscountBooks(books);
        
        receivingBooks(discountBooks);

    } catch (erro) {
        throw new Error('endpoit of api not found. \n' + erro);
    }
}
