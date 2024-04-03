function solution(n_str) {
    var answer = '';
    var str = n_str.split('');
    
    while(str[0] == "0") {
        str.shift();
    }
    
    answer = str.join('');
    return answer;
}