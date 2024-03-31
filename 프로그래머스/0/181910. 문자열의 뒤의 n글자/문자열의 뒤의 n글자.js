function solution(my_string, n) {
    var answer = '';
    
    answer = my_string.split('').splice(my_string.length-n).join('');
    
    return answer;
}