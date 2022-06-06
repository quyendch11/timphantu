let numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10];
let number2:number[]=[];
let i=0;
while (i < numbers.length){
   if(numbers.indexOf(i) == -1) {
       number2.push(i);
   }
   i++;
}
console.log(number2);