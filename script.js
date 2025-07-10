const input = document.getElementById("input");
const count = document.getElementById("count");

input.addEventListener("input", () => {
  const length = input.value.length;
  count.textContent = `Characters: ${length} / 100`;
});
