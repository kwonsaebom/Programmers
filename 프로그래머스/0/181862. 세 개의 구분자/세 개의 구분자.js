function solution(myStr) {
    var answer = [];
    
    answer = myStr.split(/[abc]+/);
    
    answer = answer.filter(str => str !=='');
    if(answer.length === 0) answer.push("EMPTY");
    
    return answer;
}