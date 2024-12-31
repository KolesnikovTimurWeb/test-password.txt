const fs = require("fs");

function isPasswordValid(line) {
  const [rule, string] = line.split(":").map((part) => part.trim());
  const [mainLetter, letter] = rule.split(" ");
  const min = letter[0];
  const max = letter[letter.length - 1];
  let letterCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === mainLetter) {
      letterCount++;
    }
  }
  return letterCount >= min && letterCount <= max;
}

fs.readFile("passwords.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const lines = data.trim().split("\n");

  const validPasswords = lines.filter(isPasswordValid);

  console.log(`Number of valid passwords: ${validPasswords.length}`);
});

// 2 varinat of doing test task without text file

function checkPassword(word, rule, str) {
  const arrStr = [...str];
  const ruleStart = rule[0];
  const ruleEnd = rule[rule.length - 1];
  let count = 0;

  if (rule <= 0 || rule == undefined) return false;
  for (let i = 0; i < arrStr.length; i++) {
    if (word === str[i]) {
      count++;
    }
  }

  if (ruleStart <= count && count <= ruleEnd) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// checkPassword("a", "1-5" , "abcdj")
// checkPassword("a", "2-5" , "abcdj")
