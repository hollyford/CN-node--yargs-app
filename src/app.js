const yargs = require("yargs");
const { Book, bookArr } = require("./utils")

const app = (args) => {
    switch (process.argv[2]) {
    case "add":
        const book = new Book(args.author, args.genre, args.title1)
        book.add();
        console.log(bookArr)
        break;
    case "add multi":
        const book1 = new Book(args.author1, args.genre, args.title1)
        const book2 = new Book(args.author2, args.genre, args.title2)
        book1.add();
        book2.add();
        console.log(bookArr)
        break;
    case "add multi titles":
        const book3 = new Book(args.author, args.genre, args.title1, args.title2, args.title3, args.title4, args.title5)
        book3.add();
        console.log(bookArr)
        break;
    default:
        console.log("Incorrect command")
        break;
    }
};

app(yargs.argv)