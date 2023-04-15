// const getTheTitles = function(books_arr) {
//     let books = [];
//     for (let book of books_arr) {
//         books.push(book['title'])
//     }
//     return books;
// };

const getTheTitles = function(books_arr) {
     return books_arr.map((book) => book.title);
}

// Do not edit below this line
module.exports = getTheTitles;
