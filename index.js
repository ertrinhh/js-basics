const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const num1 = parseInt(form.num1.value);
  const num2 = parseInt(form.num2.value);
  let addAnswer = num1 + num2;
  console.log(addAnswer);
  alert("Your answer is: " + addAnswer);
});
