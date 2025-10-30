
document.getElementById("greetButton").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value.trim();
  const greeting = document.getElementById("greeting");
  if (name) {
    greeting.textContent = "Hello, " + name + "!";
  } else {
    greeting.textContent = "Hello!";
  }
});

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    const colorName = box.textContent.toLowerCase();
    box.style.backgroundColor = colorName;
    box.style.color = "white";
  });
});