function Book(title, author, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;

    this.info = function() {
        bookInfo = title + " by " + author + ", " + numPages + " pages, ";

        if(isRead) {
            bookInfo += "read";
        }
        else {
            bookInfo += "not read yet";
        }

        return bookInfo;
    }
}

let currRead = new Book('Tender is the Flesh', 'Augustina Bazterrica', 209, false);
console.log(currRead.info());