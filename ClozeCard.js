function ClozeCard(front, back) {
  if(this instanceof ClozeCard) {
    this.front = front;
	this.back = back;
	var index = this.front.indexOf(this.back);
if (index != -1) { // If the index is not -1 then the term was matched in the string,
 // and we can do some work based on that logic. (6 is alerted)
var str= front;
str.replace(back, "... ");
this.partial= str;
this.fullText= front;
		}
		else{
		try
			{
				throw new Error("This doesn't work!");
			}
			catch (e)
			{
				console.log(e.message);
			}
		
		}

	this.cloze=this.back;


  } else {
    return new ClozeCard(front, back);
  }
}

module.exports = ClozeCard;

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");
console.log(brokenCloze.fullText);