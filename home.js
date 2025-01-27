
// Get all borrow buttons
const borrowButtons = document.querySelectorAll('.btn-primary');

// Store borrowed books
let borrowedBooks = [];

// Add click event to all borrow buttons
borrowButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Prevent the default link behavior
        e.preventDefault();
        
        // Get the book information from the card
        const card = this.closest('.card');
        const title = card.querySelector('.card-title').textContent;
        const image = card.querySelector('.card-img-top').src;
        
        // Check if book is already borrowed
        if (borrowedBooks.includes(title)) {
            alert('You already borrowed this book!');
            return;
        }
        
        // Add book to borrowed list
        borrowedBooks.push(title);
        
        // Create due date (14 days from now)
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 14);
        
        // Create new borrowed book card
        const borrowedSection = document.querySelector('#current-borrowed .row');
        const newBookCard = `
            <div class="col-md-3">
                <div class="card">
                    <img src="${image}" class="card-img-top" alt="${title}" />
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">Due Date: ${dueDate.toLocaleDateString()}</p>
                        <button class="btn btn-primary" onclick="renewBook(this)">Renew</button>
                    </div>
                </div>
            </div>
        `;
        
        // Add the new book card to the borrowed section
        borrowedSection.innerHTML += newBookCard;
        
        // Show success message
        alert(`Successfully borrowed "${title}"!`);
    });
});

// Function to renew a book
function renewBook(button) {
    // Get the book card
    const card = button.closest('.card');
    
    // Calculate new due date (14 more days)
    const newDueDate = new Date();
    newDueDate.setDate(newDueDate.getDate() + 14);
    
    // Update the due date text
    card.querySelector('.card-text').textContent = 'Due Date: ' + newDueDate.toLocaleDateString();
    
    // Show success message
    const title = card.querySelector('.card-title').textContent;
    alert(`Renewed "${title}"! New due date: ${newDueDate.toLocaleDateString()}`);
}


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
