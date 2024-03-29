function solution(emergency) {
    var answer = [];
    var copy = emergency.slice();
    
    emergency.sort((a, b) => b-a);
    
    for (let i=0; i<emergency.length; i++) {
        answer[i] = 1 + emergency.indexOf(copy[i]);
    }
    return answer;
}