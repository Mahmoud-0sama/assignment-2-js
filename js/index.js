






var quoteArray = [


    {
        'quote': '“So many books, so little time.”',
        'writer': '--Frank Zappa'

    },

    {
        'quote': '“Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.”',
        'writer': '--Albert Einstein'
    },

    {
        'quote': '“A room without books is like a body without a soul.”',
        'writer': '--Marcus Tullius Cicero'
    },

    {
        'quote': '“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.”',
        'writer': '--Bernard M. Baruch'
    },

    {
        'quote': '“You only live once, but if you do it right, once is enough.”',
        'writer': '--Mae West'
    },

    {
        'quote': '“You know youre in love when you cant fall asleep because reality is finally better than your dreams.”',
        'writer': '--Dr. Seuss'
    },

    {
        'quote': '“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
        'writer': '--Maya Angelou'
    },
    {
        'quote': '“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”',
        'writer': '--C.S. Lewis, The Four Loves'
    },
    {
        'quote': '“We accept the love we think we deserve.”',
        'writer': '--Stephen Chbosky, The Perks of Being a Wallflower'
    },
    {
        'quote': '“It is better to be hated for what you are than to be loved for what you are not.”',
        'writer': '--Andre Gide, Autumn Leaves'
    },


]


// let previousIndex;

// function nextQuote() {

//     let newInedx = '';

//     do{
//         newInedx = Math.floor(Math.random() * quoteArray.length);

//     } while (previousIndex == newInedx);
//     previousIndex = newInedx;
//     console.log(newInedx);
//     document.getElementById('quote').innerHTML = quoteArray[newInedx].quote;
//     document.getElementById('writer').innerHTML = quoteArray[newInedx].writer;
// }





let previousIndex;

function nextQuote() {

     let newInedx = 0

    for ( ; previousIndex == newInedx ; newInedx++){
        newInedx = Math.floor(Math.random() * quoteArray.length);

    }
    previousIndex = newInedx;
    console.log(newInedx);
    document.getElementById('quote').innerHTML = quoteArray[newInedx].quote;
    document.getElementById('writer').innerHTML = quoteArray[newInedx].writer;
}