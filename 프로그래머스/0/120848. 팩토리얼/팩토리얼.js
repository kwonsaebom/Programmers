function solution(n) {
    var answer = 0;
    var result = 1;
    
    for (let i=1; result<=n; i++) {
        result *=i;
        answer = i-1;

    }
    
    
    return answer;
}