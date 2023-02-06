function applyDiscountBooks(bookList) { 
    const dis =  0.3;

    const discountBooks = bookList.map( book => {
        return {...book, preco: book.preco - (book.preco * dis)}
    });

    return discountBooks;
}