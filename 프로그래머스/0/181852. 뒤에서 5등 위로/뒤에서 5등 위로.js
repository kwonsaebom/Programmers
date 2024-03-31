function solution(num_list) {
    var answer = [];
    var answer = num_list.slice().sort((a,b) => a-b);
    
    for (let i=0; i<5; i++) {
       answer.shift();
    }
    return answer;
} 