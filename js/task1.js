// Завдання 1. Уявімо, що у нас є список студентів та їх оцінок з різних предметів.
// Нам потрібно обчислити середній бал кожного студента та вивести на екран список
// студентів і їх середніх оцінок. // Список студентів та оцінок Напишіть дві
// функції, перша для обчислення середнього балу, друга для виведення списку
// студентів та їх середніх оцінок

// ```js

const students = [
  { name: 'John', grades: [90, 87, 93, 88] },
  { name: 'Jane', grades: [78, 82, 80, 85] },
  { name: 'Mike', grades: [92, 89, 85, 78] },
  { name: 'Anna', grades: [75, 80, 92, 87] },
];

  function calculateAverageGrade(grades) {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
  }
  
  function printStudentsAverageGrades(students) {
    students.forEach(student => {
      const averageGrade = calculateAverageGrade(student.grades);
      console.log(`${student.name}: ${averageGrade}`);
    });
  }
  
  printStudentsAverageGrades(students);