function solution(intStrs, k, s, l) {
    var answer = [];
    
    for (let i=0; i<intStrs.length; i++){
        let num = intStrs[i].split('');
        let n = '';
        
        for (let j=s; j<s+l; j++) {
            n += num[j];
        }
        if (parseInt(n)>k) answer.push(parseInt(n));
    }
    
    
    return answer;
}