function solution(strArr) {
    var answer = [];
    
    for (s of strArr) {
        answer.push(s.toUpperCase());
    }

    for (let i=0; i<strArr.length; i+=2) {
        answer[i] = answer[i].toLowerCase();
    }
    return answer;
}