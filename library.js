let myLibrary = []

function addBookToLibrary(aBook) {
    myLibrary.push(aBook);
}

function displayBooks() {

}

function Book(title, author, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
}

Book.prototype.info = function() {
    bookInfo = this.title + " by " + this.author + ", " + this.numPages + " pages, ";

        if(this.isRead) {
            bookInfo += "read";
        }
        else {
            bookInfo += "not read yet";
        }

        return bookInfo;
}

let currRead = new Book('Tender is the Flesh', 'Augustina Bazterrica', 209, false);
console.log(currRead.info());