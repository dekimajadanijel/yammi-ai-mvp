const recipesMockData = [
  {
    title: "Prženo jaje na ulju",
    description: "Brzi doručak za jednog!",
    time: 5,
    servings: 1,
    ingredients: [
      { name: "Jaje", quantity: 1, unit: "kom" },
      { name: "Ulje", quantity: 1, unit: "kašika" }
    ],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Palačinke",
    description: "Super palačinke iz tiganja.",
    time: 30,
    servings: 4,
    ingredients: [
      { name: "Brašno", quantity: 300, unit: "g" },
      { name: "Mleko", quantity: 500, unit: "ml" },
      { name: "Jaje", quantity: 2, unit: "kom" }
    ],
    // Nema video, vidi kako prikazuje poruku
    videoUrl: ""
  }
];

export default recipesMockData;