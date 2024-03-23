function solution(n) {
    var answer = 0;
    if (7/n >= 1) answer = 1;
    else answer = Math.ceil(n/7);
    return answer;
}