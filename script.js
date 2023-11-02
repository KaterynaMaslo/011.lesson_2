class Student{
    constructor(firstName,lastName,birthYear,grades=[]){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25);
    }
    getAge(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }
    getGPA(){
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return Math.round(sum / this.grades.length);
    }
    present() {
        this.updateAttendance(true);
    }
    
      absent() {
        this.updateAttendance(false);
    }
    updateAttendance(isPresent) {
        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] === undefined) {
                this.attendance[i] = isPresent;
                return; 
            }
          }
        console.log('Відмічено усі заняття.');
    }
    summary() {
        const gpa = this.getGPA();
        const avgAttend = this.avgAttendance();
    
        if (gpa > 90 && avgAttend > 0.9) {
          return 'Молодець!';
        } 
        else if (gpa > 90 || avgAttend > 0.9) {
          return 'Добре, але можна краще';
        } 
        else {
          return 'Редиска!';
        }
    }
    avgAttendance() {
        const presentCount = this.attendance.filter(item => item === true).length;
        return presentCount / this.attendance.length;
    }
}

const grades1 = [90, 95, 90];
const grades2 = [80, 85, 90];
const grades3 = [70, 75, 85, 90, 95];

const student1 = new Student('Олена', 'Білик', 2000, grades1);
const student2 = new Student('Марія', 'Стрілець', 1999, grades2);
const student3 = new Student('Дмитро', 'Шевчук', 2001, grades3);

student1.absent();
for(let i = 0; i<24; i++){
    student1.present();
}

for(let i = 0; i<16; i++){
    student2.present();
}

student3.absent();
for(let i = 0; i<23; i++){
    student3.present();
}

console.log(`${student1.firstName} ${student1.lastName}: Вік - ${student1.getAge()} років, Середній бал - ${student1.getGPA()}, Відвідуваність - ${student1.avgAttendance()}, Висновок: ${student1.summary()}`);
console.log(`${student2.firstName} ${student2.lastName}: Вік - ${student2.getAge()} років, Середній бал - ${student2.getGPA()}, Відвідуваність - ${student2.avgAttendance()}, Висновок: ${student2.summary()}`);
console.log(`${student3.firstName} ${student3.lastName}: Вік - ${student3.getAge()} років, Середній бал - ${student3.getGPA()}, Відвідуваність - ${student3.avgAttendance()}, Висновок: ${student3.summary()}`);