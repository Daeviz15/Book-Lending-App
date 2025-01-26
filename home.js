const books = [
  {
    title: 'The Midnight Library',
    description: 'Explore a library of infinite possibilities.',
  },
  {
    title: 'Atomic Habits',
    description: 'Build life-changing habits with ease.',
  },
  { title: 'Becoming', description: 'Michelle Obama’s inspiring journey.' },
  {
    title: 'The Book Thief',
    description: 'A tale of love and resilience in wartime.',
  },
];

const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById('searchButton');
const bookList = document.getElementById('bookList');
$(document).ready(function () {
  const storedName = localStorage.getItem('userName'); // Consistent key
  if (storedName) {
    $('#name').html(`Welcome Back, ${storedName}`);
  } else {
    $('#name').html('Welcome Back!');
  }
});

searchButton.addEventListener('click', () => {
  const query = searchBar.value.toLowerCase();
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query) ||
      book.description.toLowerCase().includes(query),
  );

  bookList.innerHTML = filteredBooks
    .map(
      (book) => `
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">${book.description}</p>
              <a href="#" class="btn btn-primary">Borrow</a>
            </div>
          </div>
        </div>
      `,
    )
    .join('');
});
