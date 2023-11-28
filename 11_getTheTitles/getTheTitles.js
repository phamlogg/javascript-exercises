const getTheTitles = function(books) {
    let bookTitle = [];
    books.forEach(book => {
        bookTitle.push(book.title);
    })

    return bookTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
