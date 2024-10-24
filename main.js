// 1. Write a function that compares two strings regardless of case sensitivity using toLowerCase() or toUpperCase(). Return true if the strings are the same, otherwise return false.
const string1 = "Abu Horaira";
const strting2 = "abu horaira is";

function compareStrings(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
console.log(compareStrings(string1, strting2));

// 2. Create a function that checks if a given sentence contains the word "JavaScript" using the includes() method. Return a message indicating whether the word is found.

const mySentence = "I am learning JavaScript";
function checkSomething(sentence) {
  if (sentence.includes("Javacript") === true) {
    return "The word is found!!!";
  } else {
    return "The word is not found!!!";
  }
}
console.log(checkSomething(mySentence));

// 3.Write a function that splits a sentence into an array of words using split(). Then, use join() to convert the array back into a sentence, separating the words with hyphens (-).

const abusSentence = "I live in khulna";
function splitsSentence(sentence) {
  const splitedArray = sentence.split(" ");
  const hyphenedSentence = splitedArray.join("-");
  return hyphenedSentence;
}
console.log(splitsSentence(abusSentence));

// 4. Create a function that takes a string and extracts a portion using slice(). The function should take a start and an end index as arguments and return the sliced part.
const rabusSentence = "Bangladesh is a beautiful country";
function getSlicedPart(rSentence, startIndex, endIndex) {
  const slicedPart = rSentence.slice(startIndex, endIndex);
  return slicedPart;
}
console.log(getSlicedPart(rabusSentence, 11, 13));

// 5. Given an object with properties name, email, and age, use destructuring to extract the values into variables and log them to the console.

const obj = {
  name: "Md. Hamid",
  email: "hamid@gmail.com",
  age: 24,
};
const { name, email, age } = obj;
console.log(name, email, age);
