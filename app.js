function getComputerChoice() {
  const items = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * items.length);
  const randomItems = items[randomIndex];
  return randomItems;
}

console.log(getComputerChoice());
