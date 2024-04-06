function solution(myString) {
    var answer = [];
    var sp = myString.split('x');
    
    for (let i=0; i<sp.length; i++){
        answer.push(sp[i].length);
    }
    return answer;
}