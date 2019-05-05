const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        title: "The Dead Zone",
        authors: "Stephen King",
        description:
            "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
        image: "https://en.wikipedia.org/wiki/The_Dead_Zone_(novel)#/media/File:DeadZone.jpg",
        link: "https://books.google.com/books/about/The_Dead_Zone.html?id=LjdeY4gldV4C"
    },  
    {
        title: "The Firm",
        authors: "John Grisham",
        description:
            "When Mitch McDeere signed on with Bendini, Lambert & Locke of Memphis, he thought that he and his beautiful wife, Abby, were on their way. The firm leased him a BMW, paid off his school loans, arranged a mortgage, and hired the McDeeres a decorator. Mitch should have remembered what his brother Ray–doing fifteen years in a Tennessee jail–already knew: You never get nothing for nothing. Now the FBI has the lowdown on Mitch’s firm and needs his help. Mitch is caught between a rock and a hard place, with no choice–if he wants to live.",
        image: "https://en.wikipedia.org/wiki/The_Firm_(novel)#/media/File:The_Firm_Grisham.jpg",
        link: "https://books.google.com/books/about/The_Firm.html?id=y1bJQrOBceEC" 
    },
    {
        title: "Are you my mother?",
        authors: "P.D. Eastman",
        description:
            "A baby bird goes in search of his mother in this hilarious Beginner Book edited by Dr. Seuss. When a mother bird’s egg starts to jump, she hurries off to make sure she has something for her little one to eat. But as soon as she’s gone, out pops the baby bird. He immediately sets off to find his mother, but not knowing what she looks like makes it a challenge. The little hatchling is determined to find his mother, even after meeting a kitten, a hen, a dog, and a Snort.",
        image: "https://en.wikipedia.org/wiki/Are_You_My_Mother%3F#/media/File:Areyoumymother.gif",
        link: "https://en.wikipedia.org/wiki/Are_You_My_Mother%3F"
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        authors: "J. K. Rowling",
        description:
            "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true.",
        image: "https://books.google.com/books?id=5iTebBW-w7QC&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false",
        link: "https://books.google.com/books/about/Harry_Potter_and_the_Chamber_of_Secrets.html?id=5iTebBW-w7QC"
    }

];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
