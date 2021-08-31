const birthdateInput = document.querySelector(".birthdate-input");

const checkButton = document.querySelector(".check-button");

const output = document.querySelector(".output");

let userBirthdate = "";

birthdateInput.addEventListener("change", function (e) {
  userBirthdate = e.target.value;
});

let formattedDate = "";

function isPalindrome(str) {
  let temp = userBirthdate.split("-");
  formattedDate = temp;
  str = temp[2] + temp[1] + temp[0];
  let str2 = str.split("").reverse().join("");
  if (str === str2) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("10-02-2001"));

checkButton.addEventListener("click", function () {
  if (userBirthdate !== "" && isPalindrome(userBirthdate) === true) {
    console.log(formattedDate);
    output.innerText = `Wooho your birthdate ${
      formattedDate[2] + "-" + formattedDate[1] + "-" + formattedDate[0]
    }  is a palindrome`;
    setTimeout(() => {
      output.innerText = "";
      birthdateInput.value = "";
      userBirthdate = "";
    }, 3000);
  } else if (isPalindrome(userBirthdate) === false) {
    output.innerText = `Sorry , your birthdate ${
      formattedDate[2] + "-" + formattedDate[1] + "-" + formattedDate[0]
    } is not a palindrome`;
    setTimeout(() => {
      output.innerText = "";
      birthdateInput.value = "";
      userBirthdate = "";
    }, 3000);
  }
});
