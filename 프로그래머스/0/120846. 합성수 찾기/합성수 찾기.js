function solution(n) {
    var answer = 0;
    
    for (let i=2; i<=n; i++) {
        var flag = 0;
        for (let j=2; j<i; j++) {
            if (i%j == 0) flag = 1;
        
        }
        if (flag == 1) answer++;
    }
    return answer;
}