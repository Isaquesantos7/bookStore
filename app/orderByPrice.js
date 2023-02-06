const btnOrder = document.getElementById('btnOrdenarPorPreco');

btnOrder.addEventListener('click', orderByPrice);


function orderByPrice(){
    const orderedBooks = books.sort( function(a,b) {
        return a.preco - b.preco;
    });

    receivingBooks(orderedBooks);
}