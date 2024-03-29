function solution(my_string) {
    var answer = 0;
    var num = my_string.split(' ');
    
    answer = parseInt(num[0]);
    
    for(let i =0; i<num.length; i++){
        if (num[i] === "+") answer += parseInt(num[i+1]);
        else if (num[i] === '-') answer -= parseInt(num[i+1]);
        else continue;
    }
    
    return answer;
}