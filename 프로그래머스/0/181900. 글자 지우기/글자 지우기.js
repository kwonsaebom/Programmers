function solution(my_string, indices) {
    var answer = '';
    var str = my_string.split('');
    
    for (let n of indices) {
        str[n] = ' ';
    }
    
    answer = str.join('').split(' ').join('');
    return answer;
    
}