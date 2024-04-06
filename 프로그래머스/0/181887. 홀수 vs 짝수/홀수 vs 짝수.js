function solution(num_list) {
    var answer = 0;
    var odd = 0;
    var even = 0;
    
    for (let i=0; i<num_list.length; i+=2) {
        odd += num_list[i];
    }
    for (let i=1; i<num_list.length; i+=2) {
        even += num_list[i];
    }
    
    if (odd>=even) answer = odd;
    else answer = even;
    
    return answer;
}