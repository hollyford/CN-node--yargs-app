const bookArr = [];

class Book {
    constructor(author, genre, title1, title2, title3, title4, title5) {
        this.author = author;
        this.genre = genre;
        this.title1 = title1;
        this.title2 = title2;
        this.title3 = title3;
        this.title4 = title4;
        this.title5 = title5;
    }
    add() {
        bookArr.push(this)
    }
};

module.exports = {
    Book,
    bookArr,
}