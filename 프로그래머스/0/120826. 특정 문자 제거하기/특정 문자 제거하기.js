function solution(my_string, letter) {
    var answer = '';
    var idx = my_string.indexOf(letter);
    
    for (let i=0; i<my_string.length; i++) {
        if (letter == my_string[i]) continue;
        answer += my_string[i];
    }
    return answer;
}