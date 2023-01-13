var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
var i = 0
while (i < numbers.length){
    if (numbers[i] % 2 === 0) console.log(numbers[i])
    i++
}


var nums = 0
var summa = 0
do {
    summa +=nums
    nums = Number(prompt('print number'))
}while (nums >-1)

console.log('сумма чисел - ', summa)