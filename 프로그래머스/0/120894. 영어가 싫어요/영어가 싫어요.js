function solution(numbers) {
    var answer = 0;
    var num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]
    
  num.forEach((nums, index) => {
      numbers = numbers.split(nums).join(index)
  })
    
    return Number(numbers);
}