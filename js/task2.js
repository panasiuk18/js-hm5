// Завдання 2. Напиши функцію slugify(string) яка отримує рядок та повертає
// URL-slug Рядок складається лише з букв та пробілів

// Для перевірки використовуйте

// ```js

console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));
function slugify(string) {
    return string
      .toLowerCase() 
      .replace(/\s+/g, '-') 
      .replace(/[^\w\s-]/g, '') 
      .trim(); 
  }
  
  console.log(slugify('Top 10 benefits of React framework')); 
  console.log(slugify('Azure Static Web Apps are Awesome')); 
  console.log(slugify('Technical writing tips for non-native English speakers')); 