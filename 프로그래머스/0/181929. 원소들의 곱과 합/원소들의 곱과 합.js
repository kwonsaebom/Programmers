function solution(num_list) {
    var answer = 0;
    
    var sum = num_list.reduce((acc, cur) => acc+cur, 0);
    var mul = num_list.reduce((acc, cur) => acc*cur, 1);
    
    if (mul < sum*sum) answer = 1;
    
    return answer;
}