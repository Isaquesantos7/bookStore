function sumTotalPrice() {
    const allBooks = books.reduce((acc, atual) => acc + atual.preco, 0);

    return allBooks;
}