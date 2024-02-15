const task1 = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) {
    console.log(0);
  } else {
    console.log(a + "" + b + "" + c);
  }
}

const task2 = a =>{
  if(a == 1){
    console.log("Dushanba")
  }else if(a==2){
    console.log("Seshanba");
  }else if(a == 3){
    console.log("Chorshanba");
  }else if(a==4){
    console.log("Payshanba");
  }else if(a==5){
    console.log("Juma");
  }else if(a==6){
    console.log("Shanba");
  }else if(a == 7){
    console.log( "Yakshanba");
  }else{
    console.log("Bunday hafta kuni mavjud emas!")
  }
}

const task3 = a =>{
  if ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0){
    console.log('Ushbu yil kabisa yili.');
  }else{
    console.log('Ushbu yil kabisa yili emas.');
  }
}

const task4 = a => {
  if (a >= 1 && a <= 9) {
    return 1;
  } else if (a >= 10 && a <= 99) {
    return 2;
  } else if (a >= 100 && a <= 999) {
    return 3;
  } else {
    return 'Xatolik iltimos 1 va 999 oraligida son kriting!';
  }
}

const task5 = (a, b, c, d) => {
  if (a > 0 && b > 0 && c > 0 && d > 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

const task6 = a => {
  let sum = 0;
  for (let i = 0; i <= a; i++) {
      sum += i;
  }
  return sum;
}

const task7 = a => {
  let sum = 0;
  for (let i = 1; i < a; i++) {
      if (a % i === 0) {
          sum += i;
      }
  }
  if (sum === a) {
      console.log(true);
  } else {
      console.log(false);
  }
}

const task8 = a => {
  let count = a.toString().length;
  console.log(count);
}

const task9 = n => {
  let numString = n.toString();
  let length = numString.length;
  for (let i = 0; i < length / 2; i++) {
      if (numString[i] !== numString[length - 1 - i]) {
          return false;
      }
  }
  return true;
}

const task10 = n => {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

const task11 = array => {
  const newArr = [...array];
  console.log(newArr);
}

const task12 = (n, array) =>{
 let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            count++;
        }
    }
    return count;

}

const task13 = (a, array) => {
  for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
          if (array[i] + array[j] === a) {
            console.log(`Array[${i}] = ${array[i]}, Array[${j}] = ${array[j]}`);
          }
      }
  }
}

const task14 = array => {
  let sortedArray = array.slice().sort((a, b) => a - b);
  console.log(sortedArray);
}

const task15 = array => {
  let max1 = -Infinity;
  let max2 = -Infinity;
  
  for (let i = 0; i < array.length; i++) {
      if (array[i] > max1) {
          max2 = max1;
          max1 = array[i];
      } else if (array[i] > max2 && array[i] !== max1) {
          max2 = array[i];
      }
  }
  
  return max2;
}
// task1(5, 0, 9);
// task2(1);
// task3(2000);
// console.log(task4(10));
// task5(5,6,8,-9);
// console.log(task6(5));
// task7(15);
// task8(234);
// console.log(task9(12324));
// console.log(task10(200));
let array = [5, 1, 2, 3, 4, 5, 5];
// task11(array);
// console.log(task12(5, array));;
// task13(7, array);
// task14(array);
// console.log(task15(array));