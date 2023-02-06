const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => btn.addEventListener('click', filterButton));


function filterButton() {
    const btnEvent = document.getElementById(this.id);
    const category = btnEvent.value;

    const filteredBooks = category == 'disponiveis' ? books.filter(book => book.quantidade > 0) : books.filter(book => book.categoria == category);

    receivingBooks(filteredBooks);

    if (category == 'disponiveis') {
        aBooks(sumTotalPrice());
    }
}

function aBooks(totalPrice) {
    avaliableBooks.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${totalPrice.toFixed(2)}</span></p>
        </div>
    `;
}