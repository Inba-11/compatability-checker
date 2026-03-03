document.getElementById("loveForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh
  calculateLove();
});

function calculateLove() {

  let name1 = document.getElementById("name1").value
                .toLowerCase()
                .replace(/\s/g, "");

  let name2 = document.getElementById("name2").value
                .toLowerCase()
                .replace(/\s/g, "");

  if (name1 === "" || name2 === "") {
    document.getElementById("result").innerHTML =
      "Please enter both names 💕";
    return;
  }

  let arr1 = name1.split("");
  let arr2 = name2.split("");

  // Remove common letters
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && arr1[i] !== "") {
        arr1[i] = "";
        arr2[j] = "";
        break;
      }
    }
  }

  let count = (arr1.join("") + arr2.join("")).length;

  let flames = ["F", "L", "A", "M", "E", "S"];

  while (flames.length > 1) {
    let index = (count % flames.length) - 1;

    if (index >= 0) {
      flames = flames.slice(index + 1).concat(flames.slice(0, index));
    } else {
      flames.pop();
    }
  }

  let resultLetter = flames[0];
  let resultText = "";
  let percentage = 0;
  let description = "";

  switch(resultLetter) {

    case "F":
      resultText = "Friends 👬";
      percentage = 65;
      description = "You share a strong friendship bond. With time, this connection may grow deeper.";
      break;

    case "L":
      resultText = "Love ❤️";
      percentage = 85;
      description = "There is emotional chemistry between you two. Sparks are flying!";
      break;

    case "A":
      resultText = "Affection 💕";
      percentage = 75;
      description = "Your bond is sweet, warm and emotionally comforting.";
      break;

    case "M":
      resultText = "Marriage 💍";
      percentage = 100;
      description = "Your souls feel aligned and destined. This connection has powerful long-term potential.";
      break;

    case "E":
      resultText = "Enemies 😤";
      percentage = 30;
      description = "There may be misunderstandings and clashes between you.";
      break;

    case "S":
      resultText = "Siblings 🤝";
      percentage = 45;
      description = "You share a caring, protective and safe connection.";
      break;
  }

  document.getElementById("result").innerHTML = `
    <h3>${resultText}</h3>
    <p><strong>Compatibility: ${percentage}% 💖</strong></p>
    <p>${description}</p>
  `;
}