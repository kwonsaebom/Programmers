function solution(myString, pat) {
    var answer = 0;
    
    for (let i=0; i<myString.length-pat.length+1; i++) {
        let str = myString.slice(i, i + pat.length);
        
        if (str.indexOf(pat)>-1) {
            answer++;
        }
    }
    return answer;
}