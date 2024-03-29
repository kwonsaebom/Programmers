function solution(n) {
    var answer = [];
    var idx = 0;
    for (let i=0; i<=n; i++){
        if (i%2 == 1) {
            answer[idx] = i;
            idx++;
        }
    }

    
    return answer;
}