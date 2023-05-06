
function generate(){
    var quotes={
        "— Richie Norton": '"Every sunset is an opportunity to reset. Every sunrise begins with new eyes."',
        "― L.M. Montgomery": '"Is not it nice to think that tomorrow is a new day with no mistakes in it yet?"',
        "― T.S. Eliot": '"Every moment is a fresh beginning."',
        "— Joseph Campbell": '"We must be willing to get rid of the life we have planned, so as to have the life that is waiting for us. The old skin has to be shed before the new one can come."'

    }
    var authors = Object.keys(quotes);
   var author = authors[Math.floor(Math.random()* authors.length)];
   var quote = quotes[author];
   document.getElementById("quote").innerHTML = quote;
   document.getElementById("author").innerHTML = author;
}