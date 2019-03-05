
var randomWordArr = ["eleven", "will Byers", "demogorgon", "hopper", "jonathan", "hawkins", "telekinesis", "barb", "nancy", "russians", "madmax", "upside down", "code red", "blink once for yes", "dustin", "friends dont lie", "bob the brain", "papa"]

var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];

console.log(randomWord);

var s;
var count = 0;
var answerArray = [];


var startUp = function () {


    for (var i = 0; i < randomWord.length; i++) {
        answerArray[i] = "_";
        
    }

    s = answerArray.join(" ");
    document.getElementById("answer").innerHTML = s;



}

function letter() {
        var letter = document.getElementById("letter").value;

        if (letter.length > 0) {

            for (var i = 0; i < randomWord.length; i++)
            

            {

                if (randomWord[i] === letter) {
                    answerArray[i] = letter;
                }
                count++;
                document.getElementById("counter").innerHTML = "# of Attempts" + count;
                document.getElementById("answer").innerHTML = answerArray.join(" ");

            }

            if (count < 1) {
                document.getElementById("remainingGuesses-text").innerHTML = "";
               

            }
         

            }}
        


    